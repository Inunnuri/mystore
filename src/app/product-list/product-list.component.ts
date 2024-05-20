import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HelloComponent } from '../hello/hello.component';
import { AboutComponent } from '../about/about.component';
import { KeranjangComponent } from '../keranjang/keranjang.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, AppComponent, 
    HelloComponent, AboutComponent, KeranjangComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { id: 1, name: 'Produk 1', description: 'Deskripsi Produk 1' },
    { id: 2, name: 'Produk 2', description: 'Deskripsi Produk 2' },
    // Tambahkan produk lainnya
  ];


}
