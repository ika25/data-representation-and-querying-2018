import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFiveDisastersByDeathComponent } from './top-five-disasters-by-death.component';

describe('TopFiveDisastersByDeathComponent', () => {
  let component: TopFiveDisastersByDeathComponent;
  let fixture: ComponentFixture<TopFiveDisastersByDeathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFiveDisastersByDeathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFiveDisastersByDeathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
