import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  porfolioPj:any
  login:any
  constructor(private datosPorfolio:MiPortfolioService) { 
    this.login = datosPorfolio.login
  }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.porfolioPj=data.Projects;
    // })

    this.datosPorfolio.getProjects().pipe(
      tap(res => this.porfolioPj = res)
    ).subscribe()
  }

}
