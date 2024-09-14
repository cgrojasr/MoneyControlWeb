import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDetalleOperacionComponent } from './meta-detalle-operacion.component';

describe('MetaDetalleOperacionComponent', () => {
  let component: MetaDetalleOperacionComponent;
  let fixture: ComponentFixture<MetaDetalleOperacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaDetalleOperacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaDetalleOperacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
