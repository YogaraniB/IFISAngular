import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrasportListComponent } from './trasport-list.component';

describe('TrasportListComponent', () => {
  let component: TrasportListComponent;
  let fixture: ComponentFixture<TrasportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrasportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrasportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
