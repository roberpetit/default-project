import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashy-accordion',
  templateUrl: './flashy-accordion.component.html',
  styleUrls: ['./flashy-accordion.component.css']
})
export class FlashyAccordionComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}
