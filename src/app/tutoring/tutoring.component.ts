import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-tutoring',
  templateUrl: './tutoring.component.html',
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
  styleUrls: ['./tutoring.component.css']
})
export class TutoringComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'rate'];
  isStarting: boolean = false;
  
  tutoring_info: any = [
    {subject: "C++", rate: "$30/hr"},
    {subject: "Java", rate: "$30/hr"},
    {subject: "Python", rate: "$30/hr"},
    {subject: "HTML, CSS, JS", rate: "$35/hr"},
    {subject: "Angular, Typescript", rate: "$40/hr"}
  ]

  constructor() { }

  ngOnInit(): void {
    this.isStarting = true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
