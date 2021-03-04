import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteVentasAdminComponent } from './reporte-ventas-admin.component';

describe('ReporteVentasAdminComponent', () => {
  let component: ReporteVentasAdminComponent;
  let fixture: ComponentFixture<ReporteVentasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReporteVentasAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReporteVentasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
