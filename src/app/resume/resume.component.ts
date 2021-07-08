import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-resume',
  template: '<pdf-viewer [src]="src" [original-size]="false" [autoresize]="true" style="display: block;"></pdf-viewer>',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  src : string = "https://bhagpreet.github.io/Bhagpreet/assets/pdf/Resume.pdf";

  // @Output('after-load-complete') afterLoadComplete = new EventEmitter<PDFDocumentProxy>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
