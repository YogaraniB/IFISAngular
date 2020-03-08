import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportDetailListComponent } from './trasport-detail-list.component';

describe('TrasportDetailListComponent', () => {
  let component: TrasportDetailListComponent;
  let fixture: ComponentFixture<TrasportDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasportDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasportDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
