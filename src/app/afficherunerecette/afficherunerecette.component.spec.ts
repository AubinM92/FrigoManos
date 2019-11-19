import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherunerecetteComponent } from './afficherunerecette.component';

describe('AfficherunerecetteComponent', () => {
  let component: AfficherunerecetteComponent;
  let fixture: ComponentFixture<AfficherunerecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherunerecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherunerecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
