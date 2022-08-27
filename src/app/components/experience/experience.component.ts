import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  porfolioExp:any
  login:any
  constructor(private datosPorfolio:MiPortfolioService) { 
    this.login = datosPorfolio.login
  }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.porfolioExp=data.Experinece
    // })

    this.datosPorfolio.getExperience().pipe(
      tap(res => this.porfolioExp = res)
    ).subscribe()
  }

}
