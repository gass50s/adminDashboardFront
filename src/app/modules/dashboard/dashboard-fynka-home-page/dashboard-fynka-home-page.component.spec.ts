import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFynkaHomePageComponent } from './dashboard-fynka-home-page.component';

describe('DashboardFynkaHomePageComponent', () => {
  let component: DashboardFynkaHomePageComponent;
  let fixture: ComponentFixture<DashboardFynkaHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardFynkaHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardFynkaHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
