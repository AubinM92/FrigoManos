import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherenvieComponent } from './afficherenvie.component';

describe('AfficherenvieComponent', () => {
  let component: AfficherenvieComponent;
  let fixture: ComponentFixture<AfficherenvieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherenvieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherenvieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
