import { Component, OnInit, ViewChild } from '@angular/core';
import { MyPortfolioServiceService } from '../my-portfolio-service.service';
import { ModalManager } from 'ngb-modal';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('myPortfolioTheme') myModal;
  private modalRef;
  themeColor = 'blue';
  constructor(private myPortfolioService: MyPortfolioServiceService, private modalService: ModalManager) { }

  ngOnInit(): void {
  }

  changeTheme(color): void {
    this.openModal();
  }

  changeSelectedColor(): void {
    this.myPortfolioService.changeColor(this.themeColor);
    this.closeModal();
  }


  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
        size: 'md',
        modalClass: 'mymodal',
        hideCloseButton: false,
        centered: false,
        backdrop: true,
        animation: true,
        keyboard: false,
        closeOnOutsideClick: true,
        backdropClass: 'modal-backdrop'
    });
}
closeModal() {
    this.modalService.close(this.modalRef);
    // or this.modalRef.close();
}

}
