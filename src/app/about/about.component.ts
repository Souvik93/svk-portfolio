import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Awards } from './awards.interface';
import { MyPortfolioServiceService } from '../my-portfolio-service.service';
import { Employers } from '../shared/employers.interface';
import { Skills } from '../shared/skills.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AboutComponent implements OnInit {

  myAwards: Awards[] = [];
  myEmployers: Employers[] = [];
  mySkills: Skills[] = [];
  showModal = false;
  imgUrl: string;
  imgTitle: string;
  imgFooter: string;
  themeColor = 'blue';
  themeSubColor = 'sub-blue';
  subColorOptions = ['sub-blue', 'sub-orange', 'sub-red', 'sub-light-green', 'sub-green'];
  themeolorOptions = ['blue', 'orange', 'red', 'light-green', 'green'];

  constructor(private myPortfolioServiceService: MyPortfolioServiceService, private route: ActivatedRoute, private router: Router) {
    this.myPortfolioServiceService.getAwardsDetails().subscribe((res: Awards[]) => {
      this.myAwards = res;
    });

    this.myPortfolioServiceService.getEmployersDetails().subscribe((res: Employers[]) => {
      this.myEmployers = res;
    });

    this.myPortfolioServiceService.getSkillsDetails().subscribe((res: Skills[]) => {
      this.mySkills = res;
    });
    this.checkColor(this.route.snapshot.paramMap.get('color'));
   }

  ngOnInit(): void {

    this.myPortfolioServiceService.invokeEvent.subscribe(res => {
      console.log('jo .. !!');
      console.log(res);
      if (res) {
        this.checkColor(res);
      }
    });
  }

  checkColor(res: string) {
    switch (res) {
      case ('red'):
        this.themeColor = res;
        this.themeSubColor = 'sub-red';
        break;
      case ('blue'):
        this.themeColor = res;
        this.themeSubColor = 'sub-blue';
        break;
      case ('green'):
        this.themeColor = res;
        this.themeSubColor = 'sub-green';
        break;
      default:
        this.themeColor = this.themeolorOptions[Math.floor(Math.random() * this.themeolorOptions.length)];
        this.themeSubColor = this.subColorOptions[Math.floor(Math.random() * this.subColorOptions.length)];
      }
  }

  onRewardClick(award: Awards): void {
    console.log('Hey There !! From My Portfolio About Me Componet');
    this.showModal = true;
    this.imgTitle = award.awardName;
    this.imgUrl = award.awardImageUrl;
    this.imgFooter = award.awardDate + ',' + award.companyName;
  }

}
