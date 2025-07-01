import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModuleTsModule } from './database.module';


@Module({
  imports: [ProductsModule, UsersModule, OrdersModule,AuthModule, DatabaseModuleTsModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
