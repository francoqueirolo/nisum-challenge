import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() item;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClick(key) {
    this.router.navigate(['/list', key]);
  }
}
