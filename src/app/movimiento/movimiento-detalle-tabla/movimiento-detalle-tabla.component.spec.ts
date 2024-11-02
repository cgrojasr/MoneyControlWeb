import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoDetalleTablaComponent } from './movimiento-detalle-tabla.component';

describe('MovimientoDetalleTablaComponent', () => {
  let component: MovimientoDetalleTablaComponent;
  let fixture: ComponentFixture<MovimientoDetalleTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovimientoDetalleTablaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovimientoDetalleTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
