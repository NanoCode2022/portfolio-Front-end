import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'
import { Project } from 'src/app/interfaces/app.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  porfolioPj!:Project[]
  login:any
  constructor(private datosPorfolio:MiPortfolioService) { 
    this.login = datosPorfolio.login
  }

  ngOnInit(): void {
    this.reloadPj()

 
  }

  reloadPj(){
    this.datosPorfolio.getProjects().subscribe(res =>{ 
      this.porfolioPj = res})
  }

  onDeletePj(id:number){
    this.datosPorfolio.deletePj(id.toString()).subscribe(res => {
      this.porfolioPj.filter(e => e.id !== id)
      this.reloadPj()
    })
  }

}
