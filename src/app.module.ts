import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { AdminModule } from './admin/admin.module';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "",
      database: "store",
      entities: ["dist/**/*.entity{.ts,.js}"],
      bigNumberStrings: true,
      logging: true,
      synchronize: true
    }),
    TypeOrmModule.forFeature([Product]),
    AdminModule,
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
  exports: [ProductService]
})
export class AppModule {}
