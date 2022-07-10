import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ProductController } from './product.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "store",
      entities: ["dist/**/**.entity{.ts,.js}"],
      bigNumberStrings: true,
      logging: true,
      synchronize: true
    }),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService],
})
export class AppModule {}
