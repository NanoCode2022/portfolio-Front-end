import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  constructor(private router: Router, private fb: FormBuilder, private _miService: MiPortfolioService) {
      this.form= this.initForm()
   }

  ngOnInit(): void {
  }

  initForm(): FormGroup{
    return this.fb.group({
      password:['',[Validators.required, Validators.minLength(8)]],
      email:['',[Validators.required, Validators.email]]
    })
  }

  onClick(){
    this.router.navigateByUrl('/home')
  }

  onSubmit(){
    this.router.navigateByUrl('/home');
    this._miService.login = true;
    console.log(this.form.value)
  }
}
