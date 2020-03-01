import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngb-modal';

import { MyPortfolioModalComponent } from './my-portfolio-modal/my-portfolio-modal.component';


@NgModule({
    declarations: [MyPortfolioModalComponent],
    imports: [BrowserModule, ModalModule, FormsModule],
    exports: [BrowserModule, ModalModule, MyPortfolioModalComponent, FormsModule]

})
export class SharedModule { }
