import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ModalModule } from 'ngb-modal';

import { MyPortfolioModalComponent } from './my-portfolio-modal/my-portfolio-modal.component';


@NgModule({
    declarations: [MyPortfolioModalComponent],
    imports: [BrowserModule, ModalModule],
    exports: [BrowserModule, ModalModule, MyPortfolioModalComponent]

})
export class SharedModule { }
