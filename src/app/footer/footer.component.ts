import { Component, OnInit } from '@angular/core';
import { MyPortfolioServiceService } from '../my-portfolio-service.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footerColor = 'blue';
  constructor(private myService: MyPortfolioServiceService) { }

  ngOnInit(): void {

    this.myService.invokeEvent.subscribe(res => {
      if (res) {
        this.footerColor = res;
      }
    });

  }

}
