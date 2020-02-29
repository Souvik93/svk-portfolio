import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPortfolioServiceService {

  constructor(private httpClient: HttpClient) { }

  public getEmployersDetails(): Observable<any> {
    return this.httpClient.get('./assets/employers.json');
  }

  public getAwardsDetails(): Observable<any> {
    return this.httpClient.get('./assets/awards.json');
  }

  public getSkillsDetails(): Observable<any> {
    return this.httpClient.get('./assets/skills.json');
  }

}
