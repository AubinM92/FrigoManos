import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifFrigoComponent } from './modif-frigo.component';

describe('ModifFrigoComponent', () => {
  let component: ModifFrigoComponent;
  let fixture: ComponentFixture<ModifFrigoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifFrigoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifFrigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
