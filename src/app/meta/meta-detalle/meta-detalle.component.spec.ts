import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDetalleComponent } from './meta-detalle.component';

describe('MetaDetalleComponent', () => {
  let component: MetaDetalleComponent;
  let fixture: ComponentFixture<MetaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
