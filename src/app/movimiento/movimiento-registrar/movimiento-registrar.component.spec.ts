import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoRegistrarComponent } from './movimiento-registrar.component';

describe('MovimientoRegistrarComponent', () => {
  let component: MovimientoRegistrarComponent;
  let fixture: ComponentFixture<MovimientoRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovimientoRegistrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientoRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
