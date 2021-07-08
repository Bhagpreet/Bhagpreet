import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-real-estate',
  templateUrl: './real-estate.component.html',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('400ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ],
  styleUrls: ['./real-estate.component.css']
})
export class RealEstateComponent implements OnInit {
  isStarting: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
    this.isStarting = true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
