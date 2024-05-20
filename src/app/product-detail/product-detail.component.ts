import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HelloComponent } from '../hello/hello.component';
import { AboutComponent } from '../about/about.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { KeranjangComponent } from '../keranjang/keranjang.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, AppComponent, HelloComponent, AboutComponent, 
    ProductListComponent, KeranjangComponent],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product: any;
  products = [
    { id: 1, name: 'Produk 1', description: 'Deskripsi Produk 1' },
    { id: 2, name: 'Produk 2', description: 'Deskripsi Produk 2' },
    // Tambahkan produk lainnya
  ];

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.product = this.products.find(p => p.id === +id);
    }
  }


}
