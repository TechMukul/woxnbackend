// user.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async signUp(userDto: any): Promise<any> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }

  async signIn(email: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ email, password }).exec();
    if (!user) {
      throw new NotFoundException('Invalid email or password');
    }

    // Create a new login session
    user.loginSessions.push({ loginTime: new Date(), logoutTime: null, duration: null, durationHours: null, durationMinutes: null, durationSeconds: null });
    await user.save();

    return user;
  }

  async signOut(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Find the last open session and update logout details
    const lastSession = user.loginSessions[user.loginSessions.length - 1];
    if (lastSession && !lastSession.logoutTime) {
      lastSession.logoutTime = new Date();

      // Calculate duration in milliseconds
      const durationInMillis = lastSession.logoutTime.getTime() - lastSession.loginTime.getTime();
      lastSession.duration = durationInMillis / 1000; // duration in seconds

      // Calculate hours, minutes, and seconds
      const hours = Math.floor(durationInMillis / (1000 * 60 * 60));
      const minutes = Math.floor((durationInMillis % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((durationInMillis % (1000 * 60)) / 1000);

      lastSession.durationHours = hours;
      lastSession.durationMinutes = minutes;
      lastSession.durationSeconds = seconds;
    }

    await user.save();

    return user;
  }

  async getUserTimeSpent(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException('User not found');
    }

    let totalDurationSeconds = 0;
    user.loginSessions.forEach(session => {
      if (session.duration) {
        totalDurationSeconds += session.duration;
      }
    });

    // Convert total duration to hours, minutes, seconds
    const totalHours = Math.floor(totalDurationSeconds / 3600);
    const totalMinutes = Math.floor((totalDurationSeconds % 3600) / 60);
    const totalSeconds = Math.floor(totalDurationSeconds % 60);

    return {
      userId: user._id,
      totalDuration: {
        hours: totalHours,
        minutes: totalMinutes,
        seconds: totalSeconds,
      },
    };
  }
}
