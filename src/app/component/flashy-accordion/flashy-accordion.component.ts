import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashy-accordion',
  templateUrl: './flashy-accordion.component.html',
  styleUrls: ['./flashy-accordion.component.css']
})
export class FlashyAccordionComponent implements OnInit {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
