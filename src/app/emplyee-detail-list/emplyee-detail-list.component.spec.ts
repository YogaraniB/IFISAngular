import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeeDetailListComponent } from './emplyee-detail-list.component';

describe('EmplyeeDetailListComponent', () => {
  let component: EmplyeeDetailListComponent;
  let fixture: ComponentFixture<EmplyeeDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmplyeeDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplyeeDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
