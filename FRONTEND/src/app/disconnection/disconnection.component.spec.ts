import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisconnectionComponent } from './disconnection.component';

describe('DisconnectionComponent', () => {
  let component: DisconnectionComponent;
  let fixture: ComponentFixture<DisconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisconnectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
