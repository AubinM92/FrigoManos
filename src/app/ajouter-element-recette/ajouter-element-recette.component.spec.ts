import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterElementRecetteComponent } from './ajouter-element-recette.component';

describe('AjouterElementRecetteComponent', () => {
  let component: AjouterElementRecetteComponent;
  let fixture: ComponentFixture<AjouterElementRecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterElementRecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterElementRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
