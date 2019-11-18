import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerlistecourseComponent } from './creerlistecourse.component';

describe('CreerlistecourseComponent', () => {
  let component: CreerlistecourseComponent;
  let fixture: ComponentFixture<CreerlistecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerlistecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerlistecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
