import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisasterEditComponent } from './disaster-edit.component';

describe('DisasterEditComponent', () => {
  let component: DisasterEditComponent;
  let fixture: ComponentFixture<DisasterEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisasterEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
