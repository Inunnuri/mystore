import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-hello',
  standalone: true,
  imports: [ CommonModule, RouterModule, AboutComponent, AppComponent],
 templateUrl: './hello.component.html', //supaya code html tersambung/jalan
  styleUrl: './hello.component.css'
})
export class HelloComponent {
}