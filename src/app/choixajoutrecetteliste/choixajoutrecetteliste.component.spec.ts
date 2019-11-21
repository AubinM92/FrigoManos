import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixajoutrecettelisteComponent } from './choixajoutrecetteliste.component';

describe('ChoixajoutrecettelisteComponent', () => {
  let component: ChoixajoutrecettelisteComponent;
  let fixture: ComponentFixture<ChoixajoutrecettelisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixajoutrecettelisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixajoutrecettelisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
