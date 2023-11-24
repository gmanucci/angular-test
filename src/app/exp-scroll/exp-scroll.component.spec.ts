import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpScrollComponent } from './exp-scroll.component';

describe('ExpScrollComponent', () => {
  let component: ExpScrollComponent;
  let fixture: ComponentFixture<ExpScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpScrollComponent]
    });
    fixture = TestBed.createComponent(ExpScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
