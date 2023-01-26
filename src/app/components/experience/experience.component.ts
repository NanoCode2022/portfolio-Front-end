import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Exp, Experience } from 'src/app/interfaces/app.interface';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  porfolioExp!:Experience[]
  login:any
  formExp!:FormGroup
  constructor(private datosPorfolio:MiPortfolioService, private fb: FormBuilder) { 
    this.login = datosPorfolio.login
    this.formExp = this.dataExp()
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

  dataExp(){
    return this.fb.group({
      title:['',[Validators.required]],
      description:['',[Validators.required,Validators.maxLength(254)]]
    })
    
  }

  formulario!:Exp
  id!:any
  activate!:boolean

  onSubmitExp(){
    this.formulario = {
      title:this.formExp.value.title,
      description:this.formExp.value.description
      
    }

    this.datosPorfolio.putExp(this.formulario,this.id,this.formExp.value.title,this.formExp.value.description).subscribe(data=>{console.log(data)
      this.formExp.value.title = '';
      this.formExp.value.description = '';
      location.reload()
    })
    console.log(this.id)
    
  }

  onEdit(id:any){
    this.id = id
    this.activate = true
  }

}
