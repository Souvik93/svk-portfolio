import { Component, OnInit } from '@angular/core';
import { Awards } from './awards.interface';
import { MyPortfolioServiceService } from '../my-portfolio-service.service';
import { Employers } from '../shared/employers.interface';
import { Skills } from '../shared/skills.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  myAwards: Awards[] = [];
  myEmployers: Employers[] = [];
  mySkills: Skills[] = [];
  showModal = false;
  imgUrl: string;
  imgTitle: string;
  imgFooter: string;

  constructor(private myPortfolioServiceService: MyPortfolioServiceService) {
    this.myPortfolioServiceService.getAwardsDetails().subscribe((res: Awards[]) => {
      this.myAwards = res;
    });

    this.myPortfolioServiceService.getEmployersDetails().subscribe((res: Employers[]) => {
      this.myEmployers = res;
    });

    this.myPortfolioServiceService.getSkillsDetails().subscribe((res: Skills[]) => {
      this.mySkills = res;
    });
   }

  ngOnInit(): void {
  }

  onRewardClick(award: Awards): void {
    console.log('Hey There !! From My Portfolio About Me Componet');
    this.showModal = true;
    this.imgTitle = award.awardName;
    this.imgUrl = award.awardImageUrl;
    this.imgFooter = award.awardDate + ',' + award.companyName;
  }

}
