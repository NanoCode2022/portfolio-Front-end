import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiPortfolioService {
  login:Boolean;
  apiURL = 'http://localhost:3000';

  constructor(private http:HttpClient) {
    this.login = false;
   }
  // get
    getDatosPersonal():Observable<any>{
      return this.http.get(this.apiURL + '/personal')
    }

    getExperience():Observable<any>{
      return this.http.get(this.apiURL + '/experinece')
    }

    getEducation():Observable<any>{
      return this.http.get(this.apiURL + '/education')
    }

    getSkills():Observable<any>{
      return this.http.get(this.apiURL + '/skills')
    }

    getProjects():Observable<any>{
      return this.http.get(this.apiURL + '/projects')
    }

}