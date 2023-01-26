import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loading:boolean
  miPorfolio:any;
  constructor(private datosPortfolio:MiPortfolioService) { this.loading = true}

  ngOnInit(): void {
    this.datosPortfolio.getDatosPersonal().subscribe(data => {
      this.miPorfolio = data[0] 
      this.loading = false
    });
  
  }

}
// this.miPorfolio = res