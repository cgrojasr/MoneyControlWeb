import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPrincipalItemComponent } from './meta-principal-item.component';

describe('MetaPrincipalItemComponent', () => {
  let component: MetaPrincipalItemComponent;
  let fixture: ComponentFixture<MetaPrincipalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaPrincipalItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaPrincipalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
