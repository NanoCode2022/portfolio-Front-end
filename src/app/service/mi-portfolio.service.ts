import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { AcercaDe, AD, Credentials, Education, Experience, Project } from '../interfaces/app.interface';

@Injectable({
  providedIn: 'root'
})
export class MiPortfolioService {

  login:Boolean
  apiURL = 'https://portfolio-backend-3s3m.onrender.com';
  isLoading$ = new Subject<boolean>();

  constructor(private http:HttpClient) {
    this.login = this.logueado();
   }
  // get
    getDatosPersonal():Observable<any>{
      return this.http.get(`${this.apiURL}/persona/traer`);
    }

    getExperience():Observable<any>{
      return this.http.get(`${this.apiURL}/experiencia/traer`)
    }

    getEducation():Observable<any>{
      return this.http.get(`${this.apiURL}/educacion/traer`)
    }

    getSkills():Observable<any>{
      return this.http.get(`${this.apiURL}/skill/traer`)
    }

    getProjects():Observable<any>{
      return this.http.get(`${this.apiURL}/proyecto/traer`)
    }
    // post

    postExp(body:Object):Observable<Object>{
      return this.http.post<any>(`${this.apiURL}/experiencia/crear`,body)
    }

    postEs(body:Object):Observable<Object>{
      return this.http.post<any>(`${this.apiURL}/educacion/crear`,body)
    }

    postPj(body:Object):Observable<Object>{
      return this.http.post<any>(`${this.apiURL}/proyecto/crear`,body)
    }

    postSk(body:Object):Observable<Object>{
      return this.http.post<any>(`${this.apiURL}/skill/crear`,body)
    }

    // delete

   deleteExp(id:string):Observable<Experience>{
    let url = `${this.apiURL}/experiencia/editar/${id}`; 
    return this.http.delete<Experience>(url)
   }

   deleteEdc(id:string):Observable<Education>{
    let url = `${this.apiURL}/educacion/editar/${id}`
    return this.http.delete<Education>(url)
   }

   deletePj(id:string):Observable<Project>{
    let url = `${this.apiURL}/proyecto/editar/${id}`
    return this.http.delete<Project>(url)
   }

   deleteSk(id:string):Observable<Project>{
    let url = `${this.apiURL}/skill/editar/${id}`
    return this.http.delete<any>(url)
   }
    
    // base 64 para las img
    extraer64 =async ($event:any) => new Promise((resolve):any => {
      try{
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result
        })
      };
      reader.onerror = error => {
        resolve({
          base:null
        })
      }
      
    }catch(e){
      return null
    }
    })

    // put
    putAD(body:AD):Observable<AD>{
      return this.http.put<AD>(`${this.apiURL}/persona/editar/1?description=${body}`,body);
    }


    loginApi(creds:Credentials){
      return this.http.post(`${this.apiURL}/login`, creds, {
        observe: 'response'
      }).pipe(map((response: HttpResponse<any>)=>{
        const body = response.body;
        const headers = response.headers;

        const bearerToken = headers.get('Authorization')!;

        const token = bearerToken.replace('Bearer ', '');

        localStorage.setItem('token', token);

        return body;
      }));
    }

    getToken(){
      return localStorage.getItem('token')
    }


    logueado(){
      if(this.getToken()){
        return true
      }else{
        return false
      }
    }


    
}