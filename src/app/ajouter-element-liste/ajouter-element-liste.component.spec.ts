import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterElementListeComponent } from './ajouter-element-liste.component';

describe('AjouterElementListeComponent', () => {
  let component: AjouterElementListeComponent;
  let fixture: ComponentFixture<AjouterElementListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterElementListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterElementListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
