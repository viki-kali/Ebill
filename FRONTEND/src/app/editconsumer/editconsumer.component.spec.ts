import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconsumerComponent } from './editconsumer.component';

describe('EditconsumerComponent', () => {
  let component: EditconsumerComponent;
  let fixture: ComponentFixture<EditconsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditconsumerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditconsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
