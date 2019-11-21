import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavjoComponent } from './navjo.component';

describe('NavjoComponent', () => {
  let component: NavjoComponent;
  let fixture: ComponentFixture<NavjoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavjoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavjoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
