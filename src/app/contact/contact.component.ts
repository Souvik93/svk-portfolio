import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MyPortfolioServiceService } from '../my-portfolio-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private myService: MyPortfolioServiceService, private route: ActivatedRoute, private router: Router) { }

  themeColor = 'blue';
  contactDetails = [];
  ngOnInit(): void {
    this.themeColor = this.route.snapshot.paramMap.get('color');
    this.myService.invokeEvent.subscribe(res => {
      console.log('jo co .. !!');
      console.log(res);
      if (res) {
        this.themeColor = res;
        // this.checkColor(res);
      }
    });

    this.myService.getContactDetails().subscribe(res => {
      this.contactDetails = res;
    });
  }

}
