import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  portfolio:any
  login:any
  constructor(private datosPorfolio:MiPortfolioService) { 
    this.login = datosPorfolio.login
  }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data =>{
    //   this.portfolio = data;
    // })
    this.datosPorfolio.getDatosPersonal().pipe(
      tap(res => this.portfolio = res)
    ).subscribe()
  }

}
