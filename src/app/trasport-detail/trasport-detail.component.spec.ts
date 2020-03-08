import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportDetailComponent } from './trasport-detail.component';

describe('TrasportDetailComponent', () => {
  let component: TrasportDetailComponent;
  let fixture: ComponentFixture<TrasportDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasportDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
