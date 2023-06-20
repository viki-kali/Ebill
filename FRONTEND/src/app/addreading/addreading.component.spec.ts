import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreadingComponent } from './addreading.component';

describe('AddreadingComponent', () => {
  let component: AddreadingComponent;
  let fixture: ComponentFixture<AddreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddreadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
