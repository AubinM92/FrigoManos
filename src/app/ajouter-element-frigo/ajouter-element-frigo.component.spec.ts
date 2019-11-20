import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterElementFrigoComponent } from './ajouter-element-frigo.component';

describe('AjouterElementFrigoComponent', () => {
  let component: AjouterElementFrigoComponent;
  let fixture: ComponentFixture<AjouterElementFrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterElementFrigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterElementFrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
