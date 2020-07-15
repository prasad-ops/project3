import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CratequizComponent } from './cratequiz.component';

describe('CratequizComponent', () => {
  let component: CratequizComponent;
  let fixture: ComponentFixture<CratequizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CratequizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CratequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
