import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaRegistrarComponent } from './meta-registrar.component';

describe('MetaRegistrarComponent', () => {
  let component: MetaRegistrarComponent;
  let fixture: ComponentFixture<MetaRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaRegistrarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
