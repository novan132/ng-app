import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductRepresentation } from '../services/api/models/product-representation';
import { ProductService } from '../services/api/products/product.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  param: any;
  queryParam: any;

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAllProductsWithLimit().subscribe({
      next: (data) => {
        console.log(data);
      },
    });

    const product: ProductRepresentation = {
      title: 'new product',
      description: 'product desc',
      price: 10,
      category: 'any cat',
      image: 'https://theImage.jpg',
    };
    this.service.createProduct(product).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
