import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiurl = environment.apiurl
  accessToken: any

  constructor(private router: Router, private http: HttpClient) { }

  getlogin(info: any) {
    this.http.post(`http://localhost:8080/login`, info.value).subscribe({
      next: (response: any) => {
        sessionStorage.setItem('accessToken', response.accessToken.value);
        sessionStorage.setItem('refreshToken', response.refreshToken.value);
        sessionStorage.setItem('name', response.name);
        console.log("accessToken", sessionStorage.getItem('accessToken'))
        console.log("response", response.refreshToken.value)
        console.log("Accesstoken", response.accessToken.value)

        if (sessionStorage.getItem('name') != null) {
          this.router.navigate(['home'])
        }
      },

      error: (error: any) => alert("please enter valid username or password")
    });
  }

  userlist() {
    this.accessToken = sessionStorage.getItem('accessTocken')
    console.log("check1" + this.accessToken)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Admin ' + sessionStorage.getItem('accessToken')
      })
    }
    return this.http.get(this.apiurl + "/admin/user", httpOptions)
  }
  delete1(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Admin ' + sessionStorage.getItem('accessToken')
      })
    }
    return this.http.delete(this.apiurl + "/admin/user/" + data, httpOptions)
  }
  addSurvey(data: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Admin ' + sessionStorage.getItem('accessToken')
      })
    }
    return this.http.post(this.apiurl + "/survey", data, httpOptions)
  }


}
