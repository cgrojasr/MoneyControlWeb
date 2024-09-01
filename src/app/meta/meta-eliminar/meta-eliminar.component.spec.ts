import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaEliminarComponent } from './meta-eliminar.component';

describe('MetaEliminarComponent', () => {
  let component: MetaEliminarComponent;
  let fixture: ComponentFixture<MetaEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaEliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
