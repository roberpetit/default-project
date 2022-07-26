import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashyAccordionComponent } from './flashy-accordion.component';

describe('FlashyAccordionComponent', () => {
  let component: FlashyAccordionComponent;
  let fixture: ComponentFixture<FlashyAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashyAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashyAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
