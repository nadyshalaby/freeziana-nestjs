import { Resolver, Args, Query } from '@nestjs/graphql';
import { Product } from './product.interface';

@Resolver()
export class ProductsResolver {
  @Query()
  async product(@Args('id') id: number) {
    return {
      id: 1,
      name: 'Product 1',
    } as Product;
  }
}
