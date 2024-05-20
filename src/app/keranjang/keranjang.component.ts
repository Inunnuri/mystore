import { Component } from '@angular/core';
import { HelloComponent } from '../hello/hello.component';
import { AboutComponent } from '../about/about.component';
import { AppComponent } from '../app.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-keranjang',
  standalone: true,
  imports: [HelloComponent, AboutComponent, AppComponent, RouterModule],
  templateUrl: './keranjang.component.html',
  styleUrl: './keranjang.component.css'
})
export class KeranjangComponent {

}
