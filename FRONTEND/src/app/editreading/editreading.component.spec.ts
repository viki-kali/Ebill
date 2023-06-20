import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreadingComponent } from './editreading.component';

describe('EditreadingComponent', () => {
  let component: EditreadingComponent;
  let fixture: ComponentFixture<EditreadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditreadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
