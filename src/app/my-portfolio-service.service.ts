import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyPortfolioServiceService {

  public invokeEvent: Subject<any> = new Subject();
  constructor(private httpClient: HttpClient) { }

  public changeColor(color: string): void {
    // this.invokeEvent = new Subject();
    this.invokeEvent.next(color);
    // this.invokeEvent.complete();
  }

  public getEmployersDetails(): Observable<any> {
    return this.httpClient.get('./assets/employers.json');
  }

  public getAwardsDetails(): Observable<any> {
    return this.httpClient.get('./assets/awards.json');
  }

  public getSkillsDetails(): Observable<any> {
    return this.httpClient.get('./assets/skills.json');
  }

  public getmyDetails(): Observable<any> {
    return this.httpClient.get('./assets/myDetail.json');
  }

}
