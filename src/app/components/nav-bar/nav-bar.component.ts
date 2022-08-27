import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  login:any
  constructor(private router:Router, private _miService:MiPortfolioService) { 
    this.login = _miService;
  }

  ngOnInit(): void {
    console.log(this.login)
  }

  onClick(){
    this.router.navigateByUrl('/login')
  }
}
