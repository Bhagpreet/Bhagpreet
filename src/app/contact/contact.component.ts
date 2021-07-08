import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatRipple } from '@angular/material/core';

import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material/tooltip';
import { trigger, transition, style, animate } from '@angular/animations';

/** Custom options the configure the tooltip's default show/hide delays. */
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 200,
  hideDelay: 200,
  touchendHideDelay: 1000,
};

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
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
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  email: string = 'bb86029@gmail.com';
  phone: string = '9514366982';
  isStarting: boolean = false;
  
  constructor(private clipboard: Clipboard,
              private mat : MatRipple) { }

  ngOnInit(): void {
    this.isStarting = true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  copyEmail(){
    this.clipboard.copy(this.email);
    return this.email;
  }

  copyPhone(){
    this.clipboard.copy(this.phone);
    return this.phone;
  }
}
