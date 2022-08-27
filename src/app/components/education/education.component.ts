import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  porfolioEdc:any
  login:any
  constructor(private datosPorfolio:MiPortfolioService) {
    this.login = datosPorfolio.login
   }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.porfolioEdc=data.Education
    // })

    this.datosPorfolio.getEducation().pipe(
      tap(res => this.porfolioEdc = res)
    ).subscribe()
  }

}
