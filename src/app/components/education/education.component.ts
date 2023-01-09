import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'
import { Education } from 'src/app/interfaces/app.interface';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  porfolioEdc!:Education[]
  login:any
  constructor(private datosPorfolio:MiPortfolioService) {
    this.login = datosPorfolio.login
   }

  ngOnInit(): void {
    this.reloadEdc()
  }

  reloadEdc(){
    this.datosPorfolio.getEducation().subscribe(res =>{ 
      this.porfolioEdc = res;
      })
  }

  deleteEdc(id:number){
    this.datosPorfolio.deleteEdc(id.toString()).subscribe(res =>{
      this.porfolioEdc.filter(e => e.id !== id)

      this.reloadEdc()
    })
  }
}
