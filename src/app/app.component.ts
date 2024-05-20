import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { KeranjangComponent } from './keranjang/keranjang.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HelloComponent, RouterModule, AboutComponent, KeranjangComponent,
     ProductListComponent, ProductDetailComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Tambahkan logika lain yang Anda inginkan di sini
}

