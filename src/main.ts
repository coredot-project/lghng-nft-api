import { NestFactory } from '@nestjs/core';
import * as fs from "fs";
import { AppModule } from './app.module';
import WebServer from './server/WebServer.js';

const httpsOptions = {
  key: fs.readFileSync(process.env.SSL_KEY),
  cert: fs.readFileSync(process.env.SSL_CERT),

};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { httpsOptions, cors: true });
  await app.listen(process.env.PORT);

  new WebServer({ httpPort: 80 }, async (req, res) => {
    if (req.uri.startsWith('.well-known/acme-challenge/') !== true) {
      res.response({
        statusCode: 302,
        headers: {
          Location: `https://${req.headers.host}/${req.uri}`,
        },
      });
    }
  });
}
bootstrap();
