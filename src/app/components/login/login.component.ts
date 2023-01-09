import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/interfaces/app.interface';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  creds:Credentials = {
    email: '',
    password: ''
  };
  constructor(private router: Router, private fb: FormBuilder, private _miService: MiPortfolioService) {
      this.form= this.initForm()
   }

  ngOnInit(): void {
  }

  initForm(): FormGroup{
    return this.fb.group({
      password:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  onClick(){
    this.router.navigateByUrl('/home')
  }

  onSubmit(){

    this._miService.loginApi(this.creds).subscribe(response=> {
      this.router.navigateByUrl("/home");
      if(this._miService.getToken()){
        this._miService.login = true
      }
    });
  }
}
