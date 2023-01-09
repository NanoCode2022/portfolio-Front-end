import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Education } from 'src/app/interfaces/app.interface';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';

@Component({
  selector: 'app-administrator',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
  formAD!:FormGroup

  constructor(private fb:FormBuilder, private _myService: MiPortfolioService,private router: Router) { 
    this.formAD = this.dataAD()
    this.formSk = this.dataSk()
  }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigateByUrl("/home")
  }


// AD
  dataAD(){
    return this.fb.group({
      descriptionAD:['',[Validators.required,Validators.minLength(15)]]
    })
  }

  // onSubmitAD(){
  //   console.log(this.formAD.value)
  //   this._myService.postAD({
  //     description: this.formAD.value.descriptionAD,
  //     name:'Nahuel',
  //     soy: 'Desarrollador Web Fullstack',
  //     img_banner:"https://www.adobe.com/es/express/create/media_127a4cd0c28c2753638768caf8967503d38d01e4c.jpeg?width=400&format=jpeg&optimize=medium"
  //   }).subscribe()
  // }

  onSubmitAD(){
    
    this._myService.putAD(this.formAD.value.descriptionAD).subscribe(data => console.log(data))


  }



// Exp
  filExp!:any | null
  titlExp:string = ''
  descriptionExp:string = ''

  uploadFile(event:any){
    const fileV= event.target.files[0]
    this._myService.extraer64(fileV).then(data => this.filExp = data)
  }
  getTitlExp(titleExp:string){
    this.titlExp = titleExp
  }
  getDescriptionExp(descriptionExp:string){
    this.descriptionExp = descriptionExp
  }

  onSubmitExp(){
    let formData = new FormData();
    formData.set("title_exp",this.titlExp)
    formData.set("img_exp",this.filExp.base)
    formData.set("description_exp", this.descriptionExp)
    
    this._myService.postExp({
      title: formData.get('title_exp'),
      description: formData.get('description_exp'),
      picture: formData.get('img_exp')
    }).subscribe(data => console.log(data))

    
  }


  desactivarBtnExp(){
    if(this.titlExp != '' && this.descriptionExp != '' && this.filExp != null){
      return false
    }else{
      return true
    }
  }


  // Estudio

  fileEs:any
  titlEs!:string
  descriptionEs!:string
  startDate!:string 
  finishDate!:string

  formulario!:Object

  getTitlEs(title:string){
    this.titlEs = title
  }
  getDescriptionEs(description:string){
    this.descriptionEs = description
  }
  getstartEs(start:string){
    this.startDate = start
  }
  getfinishEs(finish:string){
    this.finishDate = finish
  }

  uploadFilEs(event:any){
    const fileEs= event.target.files[0]
    this._myService.extraer64(fileEs).then(data => this.fileEs = data)
  }


  onSubmitEs(){
    let formData = new FormData();
    formData.set("title_es",this.titlEs)
    formData.set("img_es",this.fileEs.base)
    formData.set("description_es", this.descriptionEs)
    formData.set("start",this.startDate)
    formData.set("finish",this.finishDate)

    this.formulario = {
      title:formData.get('title_es'),
      description:formData.get('description_es'),
      picture:formData.get('img_es'),
      startDate:formData.get('start'),
      finishDate:formData.get('finish')
    };


    this._myService.postEs(this.formulario).subscribe()
  }

  desactivarBtnEd(){
    if(this.titlEs != '' && this.descriptionEs != '' && this.fileEs != null && this.finishDate != '' && this.startDate != ''){
      return false
    }else{
      return true
    }
  }


  // projects

  filePj:any
  titlePj!:string
  descriptionPj!:string
  linkWeb!:string 
  linkGit!:string

  getTitlePj(title:string){
    this.titlePj = title
  }
  getDescriptionPj(description:string){
    this.descriptionPj = description
  }
  getLinkWeb(link:string){
    this.linkWeb = link
  }
  getLinkGit(link:string){
    this.linkGit =link
  }

  uploadFilePj(event:any){
    const fileEs= event.target.files[0]
    this._myService.extraer64(fileEs).then(data => this.filePj = data)
  }

  onSubmitPj(){
    let formData = new FormData();
    formData.set("title_pj",this.titlePj)
    formData.set("img_pj",this.filePj.base)
    formData.set("description_pj", this.descriptionPj)
    formData.set("web",this.linkWeb)
    formData.set("git",this.linkGit)

    this._myService.postPj({
      title:formData.get('title_pj'),
      description:formData.get('description_pj'),
      picture:formData.get('img_pj'),
      linkWeb:formData.get('web'),
      linkGithub:formData.get('git')
    }).subscribe()
  }
  
  desactivarPj(){
    if(this.titlePj != '' && this.descriptionPj != '' && this.filePj != null && this.linkWeb != '' && this.linkGit != ''){
      return false
    }else{
      return true
    }
  }


  // skill

  formSk!:FormGroup
  formularioSk!:any

  dataSk(){
    return this.fb.group({
      titleSk:['',[Validators.required]],
      valueSk:['',[Validators.required]]
    })
  }


  onSubmitSk(){
    this.formularioSk = {
      title:this.formSk.value.titleSk,
      value:this.formSk.value.valueSk
    };

    this._myService.postSk(this.formularioSk).subscribe(res=> {
      if(res){
        console.log('enviado')
      }
    })
  }

  desactivarBtn(){
    if(this.formSk.value.valueSk === '' && this.formSk.value.titleSk === ''){
      return false
    }else{
      return true
    }
  }



}

// title_pj:string,
//   description_pj:string,
//   img_pj:string,
//   link_web:string,
//   link_github:string,
//   id:number