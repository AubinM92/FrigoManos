import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherfrigoComponent } from './afficherfrigo.component';

describe('AfficherfrigoComponent', () => {
  let component: AfficherfrigoComponent;
  let fixture: ComponentFixture<AfficherfrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherfrigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherfrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
