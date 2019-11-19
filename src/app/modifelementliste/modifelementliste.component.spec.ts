import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifelementlisteComponent } from './modifelementliste.component';

describe('ModifelementlisteComponent', () => {
  let component: ModifelementlisteComponent;
  let fixture: ComponentFixture<ModifelementlisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifelementlisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifelementlisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
