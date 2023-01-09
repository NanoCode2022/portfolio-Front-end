import { Component, OnInit } from '@angular/core';
import { Router, TitleStrategy } from '@angular/router';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  login:any
  redes_port:any
  constructor(private router:Router, private _miService:MiPortfolioService) { 
    this.login = _miService.login;
  }

  ngOnInit(): void {
    this._miService.getDatosPersonal().subscribe(data => {
      this.redes_port = data[0] 
    });
  }



  onClick(){
    if(this._miService.getToken()){
        localStorage.removeItem('token');
        location.reload();
    }else{
      this.router.navigateByUrl('/login')
    }
  }

  onClickIcon(){
    this.router.navigateByUrl('/admin')
  }
}
