import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherUneRecetteComponent } from './afficher-une-recette.component';

describe('AfficherUneRecetteComponent', () => {
  let component: AfficherUneRecetteComponent;
  let fixture: ComponentFixture<AfficherUneRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherUneRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherUneRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
