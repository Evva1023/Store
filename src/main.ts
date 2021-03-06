import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as hbs from "hbs";
import * as hbsUtils from "hbs-utils";
import {NestExpressApplication} from "@nestjs/platform-express";
import {join} from "path";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, "..", "public"));
  app.setBaseViewsDir(join(__dirname, "..", "views"));
  hbs.registerPartials(join(__dirname, "..", "views/layout"));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, "..", "views/layout"));
  app.setViewEngine("hbs");

  await app.listen(3000);
}
bootstrap();
