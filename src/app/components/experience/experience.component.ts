import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Experience } from 'src/app/interfaces/app.interface';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  porfolioExp!:Experience[]
  login:any
  constructor(private datosPorfolio:MiPortfolioService) { 
    this.login = datosPorfolio.login
  }

  ngOnInit(): void {
    this.reloadExp()
  }

  reloadExp(){
     this.datosPorfolio.getExperience().subscribe(res =>{ this.porfolioExp = res
})
  }

  onDelete(id:number){
    this.datosPorfolio.deleteExp(id.toString()).subscribe(res=>{
      this.porfolioExp.filter(e => e.id !== id)
      this.reloadExp()
    })
  }

}
