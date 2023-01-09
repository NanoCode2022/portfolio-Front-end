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
  login!:any
  title:any
  constructor(private datosPorfolio:MiPortfolioService) {
    this.login = datosPorfolio.login
   }

  ngOnInit(): void {
    // this.datosPorfolio.obtenerDatos().subscribe(data=>{
    //   this.porfolioSk=data.Skills;
    // })

    this.reloadSk()
   
  }

  reloadSk(){
      this.datosPorfolio.getSkills().subscribe(res => {this.porfolioSk = res})
  }

  deleteSk(id:number){
    this.datosPorfolio.deleteSk(id.toString()).subscribe(res =>{
      this.porfolioSk.filter((e: { id: number; }) => e.id !== id)

      this.reloadSk()
    })

}}
