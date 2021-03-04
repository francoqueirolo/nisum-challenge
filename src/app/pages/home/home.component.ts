import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICurrency } from 'src/app/interfaces/Currency.interface';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  currencyList: ICurrency;

  constructor(
    private currencyService: CurrencyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.currencyService.getCurrencyList().subscribe((resp) => {
      console.log('salida', resp);

      this.currencyList = resp;
    });
  }

  onClick(key) {
    this.router.navigate(['/list', key]);
  }
}
