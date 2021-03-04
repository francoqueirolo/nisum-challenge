import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
