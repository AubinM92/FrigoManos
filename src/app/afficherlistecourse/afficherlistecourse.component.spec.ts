import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherlistecourseComponent } from './afficherlistecourse.component';

describe('AfficherlistecourseComponent', () => {
  let component: AfficherlistecourseComponent;
  let fixture: ComponentFixture<AfficherlistecourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherlistecourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherlistecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
