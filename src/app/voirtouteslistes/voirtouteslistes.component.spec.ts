import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirtouteslistesComponent } from './voirtouteslistes.component';

describe('VoirtouteslistesComponent', () => {
  let component: VoirtouteslistesComponent;
  let fixture: ComponentFixture<VoirtouteslistesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirtouteslistesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirtouteslistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
