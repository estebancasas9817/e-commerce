import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrillaHomeComponent } from './grilla-home.component';

describe('GrillaHomeComponent', () => {
  let component: GrillaHomeComponent;
  let fixture: ComponentFixture<GrillaHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrillaHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrillaHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
