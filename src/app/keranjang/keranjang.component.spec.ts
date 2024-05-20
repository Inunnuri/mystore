import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeranjangComponent } from './keranjang.component';

describe('KeranjangComponent', () => {
  let component: KeranjangComponent;
  let fixture: ComponentFixture<KeranjangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeranjangComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeranjangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
