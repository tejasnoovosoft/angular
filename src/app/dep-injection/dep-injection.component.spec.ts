import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepInjectionComponent } from './dep-injection.component';

describe('DepInjectionComponent', () => {
  let component: DepInjectionComponent;
  let fixture: ComponentFixture<DepInjectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepInjectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepInjectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
