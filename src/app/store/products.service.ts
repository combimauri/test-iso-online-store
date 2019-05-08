import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { Product } from '../shared/models/product';

@Injectable()
export class ProductsService {
  constructor(private db: AngularFirestore) {}

  getProducts(): Observable<Product[]> {
    return this.db.collection<Product>('products').valueChanges();
  }

  registerPurchase(product: Product) {
    console.log(product);
  }
}
