import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICurrency } from 'src/app/interfaces/Currency.interface';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  detailData: ICurrency;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CurrencyService
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;

    this.service.getCurrencyList().subscribe((resp) => {
      this.detailData = resp[id];
    });
  }
}
