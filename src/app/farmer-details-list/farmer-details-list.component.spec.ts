import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerDetailsListComponent } from './farmer-details-list.component';

describe('FarmerDetailsListComponent', () => {
  let component: FarmerDetailsListComponent;
  let fixture: ComponentFixture<FarmerDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerDetailsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
