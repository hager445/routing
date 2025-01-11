import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliComponent } from './portfoli.component';

describe('PortfoliComponent', () => {
  let component: PortfoliComponent;
  let fixture: ComponentFixture<PortfoliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
