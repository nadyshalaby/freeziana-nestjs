
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class Product {
    id: number;
    name: string;
    description?: string;
}

export abstract class IQuery {
    abstract product(id: number): Product | Promise<Product>;
}
