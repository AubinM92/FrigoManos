import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeachatComponent } from './listeachat.component';

describe('ListeachatComponent', () => {
  let component: ListeachatComponent;
  let fixture: ComponentFixture<ListeachatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeachatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeachatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
