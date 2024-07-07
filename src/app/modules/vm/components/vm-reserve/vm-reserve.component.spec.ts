import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmReserveComponent } from './vm-reserve.component';

describe('VmReserveComponent', () => {
  let component: VmReserveComponent;
  let fixture: ComponentFixture<VmReserveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VmReserveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
