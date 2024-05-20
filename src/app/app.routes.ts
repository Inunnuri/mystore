

import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { AboutComponent } from './about/about.component';
import { KeranjangComponent } from './keranjang/keranjang.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


export const routes: Routes = [
  { path: '', component: HelloComponent },//link utama pertama kali dibuka
  { path: 'about', component: AboutComponent },
  { path: 'keranjang', component: KeranjangComponent },
  { path: 'produk', component: ProductListComponent },
  { path: 'produk/:id', component: ProductDetailComponent },
  // ... rute lainnya jika ada
  
  // Tambahkan rute lainnya jika diperlukan
];

