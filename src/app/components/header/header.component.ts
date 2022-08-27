import { Component, OnInit } from '@angular/core';
import { MiPortfolioService } from 'src/app/service/mi-portfolio.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  miPorfolio:any;
  constructor(private datosPortfolio:MiPortfolioService) { }

  ngOnInit(): void {
    this.datosPortfolio.getDatosPersonal().pipe(
      tap(res => this.miPorfolio = res)
    ).subscribe();
  }

}
