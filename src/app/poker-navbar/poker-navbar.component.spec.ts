import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerNavbarComponent } from './poker-navbar.component';

describe('PokerNavbarComponent', () => {
  let component: PokerNavbarComponent;
  let fixture: ComponentFixture<PokerNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokerNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
