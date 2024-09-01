import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPrincipalComponent } from './meta-principal.component';

describe('MetaPrincipalComponent', () => {
  let component: MetaPrincipalComponent;
  let fixture: ComponentFixture<MetaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
