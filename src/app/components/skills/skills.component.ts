import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  porfolioSk:any
  constructor(private datosPorfolio:MiPortfolioService) { }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.porfolioSk=data.Skills;
    // })
    this.datosPorfolio.getSkills().pipe(
      tap(res => this.porfolioSk = res)
    ).subscribe()
  }

}
