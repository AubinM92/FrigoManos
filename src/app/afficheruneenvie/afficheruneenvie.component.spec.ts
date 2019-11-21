import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheruneenvieComponent } from './afficheruneenvie.component';

describe('AfficheruneenvieComponent', () => {
  let component: AfficheruneenvieComponent;
  let fixture: ComponentFixture<AfficheruneenvieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficheruneenvieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheruneenvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
