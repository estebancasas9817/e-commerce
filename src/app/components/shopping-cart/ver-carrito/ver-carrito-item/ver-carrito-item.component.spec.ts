import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCarritoItemComponent } from './ver-carrito-item.component';

describe('VerCarritoItemComponent', () => {
  let component: VerCarritoItemComponent;
  let fixture: ComponentFixture<VerCarritoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCarritoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCarritoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
