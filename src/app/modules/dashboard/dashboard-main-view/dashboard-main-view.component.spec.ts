import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMainViewComponent } from './dashboard-main-view.component';

describe('DashboardMainViewComponent', () => {
  let component: DashboardMainViewComponent;
  let fixture: ComponentFixture<DashboardMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMainViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
