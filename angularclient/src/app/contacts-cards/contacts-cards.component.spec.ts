import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCardsComponent } from './contacts-cards.component';

describe('ContactsCardsComponent', () => {
  let component: ContactsCardsComponent;
  let fixture: ComponentFixture<ContactsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
