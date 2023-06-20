import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillcalcComponent } from './billcalc.component';

describe('BillcalcComponent', () => {
  let component: BillcalcComponent;
  let fixture: ComponentFixture<BillcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillcalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
