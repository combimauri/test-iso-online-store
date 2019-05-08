import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/models/product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'iso-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.productsService.getProducts();
  }

  buyProduct(product: Product) {
    this.productsService.registerPurchase(product);
  }
}
