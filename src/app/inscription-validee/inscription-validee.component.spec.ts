import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionValideeComponent } from './inscription-validee.component';

describe('InscriptionValideeComponent', () => {
  let component: InscriptionValideeComponent;
  let fixture: ComponentFixture<InscriptionValideeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionValideeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionValideeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
