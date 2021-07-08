import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TutoringComponent } from './tutoring/tutoring.component';
import { RealEstateComponent } from './real-estate/real-estate.component';
import { ResumeComponent } from './resume/resume.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatButtonModule, MatButton } from '@angular/material/button';
import { MatRippleModule, MatRipple } from '@angular/material/core';
import { RippleOnHoverDirective } from './directives/ripple-on-hover.directive';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TutoringComponent,
    RealEstateComponent,
    ResumeComponent,
    HomeComponent,
    ContactComponent,
    RippleOnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClipboardModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatRippleModule,
    MatTooltipModule
  ],
  providers: [MatRipple],
  bootstrap: [AppComponent]
})
export class AppModule { }
