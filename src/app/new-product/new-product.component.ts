import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss'],
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(private service: ProductService, private router: Router) {}

  saveProduct() {
    this.service.createProduct(this.product).subscribe({
      next: (data) => {
        this.router.navigate(['products']);
      },
    });
  }
}
