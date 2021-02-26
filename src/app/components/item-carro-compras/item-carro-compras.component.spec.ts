import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarroComprasComponent } from './item-carro-compras.component';

describe('ItemCarroComprasComponent', () => {
  let component: ItemCarroComprasComponent;
  let fixture: ComponentFixture<ItemCarroComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCarroComprasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCarroComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
