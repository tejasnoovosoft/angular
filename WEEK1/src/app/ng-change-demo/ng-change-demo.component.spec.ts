import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChangeDemoComponent } from './ng-change-demo.component';

describe('NgChangeDemoComponent', () => {
  let component: NgChangeDemoComponent;
  let fixture: ComponentFixture<NgChangeDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgChangeDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
