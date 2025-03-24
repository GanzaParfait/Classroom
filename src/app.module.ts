import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [UsersModule, ProductsModule, CartModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
