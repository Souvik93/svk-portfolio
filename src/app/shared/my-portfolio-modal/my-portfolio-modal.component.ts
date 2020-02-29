import { Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from 'ngb-modal';

@Component({
  selector: 'app-my-portfolio-modal',
  templateUrl: './my-portfolio-modal.component.html',
  styleUrls: ['./my-portfolio-modal.component.css']
})
export class MyPortfolioModalComponent implements OnInit, OnChanges {

  @Input()showModal: boolean;
  @Input()imgUrl: string;
  @Input()imgTitle: string;
  @Input()imgFooter: string;

  @ViewChild('myModal') myModal;
  private modalRef;

  constructor(private modalService: ModalManager) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {

    if (this.showModal) {
      this.openModal();
    }
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
    this.showModal = false;
    // or this.modalRef.close();
}


}
