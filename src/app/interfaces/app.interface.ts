export interface AcercaDe{
  description:string
  name: string,
  soy: string,
  img_banner: string
}

export interface AD{
  description:String
}

export interface Experience{
  title:string,
  description:string,
  picture:string | null,
  id:number
}

export interface Education{
  title:string,
  description:string,
  picture:string,
  startDate:string,
  finishDate:string,
  id:number
}

export interface Project{
  title:string,
  description:string,
  picture:string,
  linkWeb:string,
  linkGithub:string,
  id:number
}

export interface Credentials{
  email:string;
  password:string;
}