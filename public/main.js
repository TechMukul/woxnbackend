"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const bodyParser = require("body-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ['http://localhost:3001', 'http://localhost:3002'],
        credentials: true,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.use(bodyParser.json({ limit: '10mb' }));
    app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
    app.use((req, res, next) => {
        res.setTimeout(5000, () => {
            console.error('Server response timeout exceeded. (5 seconds)');
        });
        next();
    });
    await app.listen(3000);
}
bootstrap().then(() => {
    console.log('Nest application is running.');
});
//# sourceMappingURL=main.js.map