import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ResumeComponent } from './resume/resume.component';
import { NotFoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MyPortfolioServiceService } from './my-portfolio-service.service';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import {YouTubePlayerModule} from '@angular/youtube-player';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ResumeComponent,
    NotFoundComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    PdfViewerModule
  ],
  providers: [MyPortfolioServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
