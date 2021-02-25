import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeachwearComponent } from './beachwear.component';

describe('BeachwearComponent', () => {
  let component: BeachwearComponent;
  let fixture: ComponentFixture<BeachwearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeachwearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeachwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
