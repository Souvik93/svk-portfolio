import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPortfolioModalComponent } from './my-portfolio-modal.component';

describe('MyPortfolioModalComponent', () => {
  let component: MyPortfolioModalComponent;
  let fixture: ComponentFixture<MyPortfolioModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPortfolioModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPortfolioModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
