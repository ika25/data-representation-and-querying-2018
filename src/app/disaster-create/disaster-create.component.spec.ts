import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterCreateComponent } from './disaster-create.component';

describe('DisasterCreateComponent', () => {
  let component: DisasterCreateComponent;
  let fixture: ComponentFixture<DisasterCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
