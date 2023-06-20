import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDisconnectionComponent } from './add-disconnection.component';

describe('AddDisconnectionComponent', () => {
  let component: AddDisconnectionComponent;
  let fixture: ComponentFixture<AddDisconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDisconnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDisconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
