import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrButtonComponent } from './incr-button.component';

describe('IncrButtonComponent', () => {
  let component: IncrButtonComponent;
  let fixture: ComponentFixture<IncrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
