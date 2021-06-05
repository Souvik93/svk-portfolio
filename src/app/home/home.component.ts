import { Component, OnInit } from '@angular/core';
import { MyPortfolioServiceService } from '../my-portfolio-service.service';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('2s ease-out', style({ opacity: '1' })),
      ]),
    ]),
    trigger('fadeInBtn', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('10s ease-in-out', style({ opacity: '1' })),
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {
  themeColor = 'blue';
  myDetails: string[] = [];

  constructor(private myService: MyPortfolioServiceService, private route: ActivatedRoute, private router: Router) {
    this.myService.invokeEvent.subscribe(res => {
      console.log('jo ho .. !!');
      console.log(res);
      if (res) {
        this.themeColor = res;
        // this.checkColor(res);
      }
    });
   }

  ngOnInit(): void {
    this.themeColor = this.route.snapshot.paramMap.get('color');
    const tag = document.createElement('script');

    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.myService.getMyDetails().subscribe(res => {
      this.myDetails = res;
    });
  }

}
