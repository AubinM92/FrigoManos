import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirlisteComponent } from './voirliste.component';

describe('VoirlisteComponent', () => {
  let component: VoirlisteComponent;
  let fixture: ComponentFixture<VoirlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
