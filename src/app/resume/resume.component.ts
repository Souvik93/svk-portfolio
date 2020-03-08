import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MyPortfolioServiceService } from '../my-portfolio-service.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  themeColor: string;
  constructor(private myService: MyPortfolioServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.themeColor = this.route.snapshot.paramMap.get('color');
    this.myService.invokeEvent.subscribe(res => {
      if (res) {
        this.themeColor = res;
        // this.checkColor(res);
      }
    });
  }

}
