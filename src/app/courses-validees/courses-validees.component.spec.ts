import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesValideesComponent } from './courses-validees.component';

describe('CoursesValideesComponent', () => {
  let component: CoursesValideesComponent;
  let fixture: ComponentFixture<CoursesValideesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesValideesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesValideesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
