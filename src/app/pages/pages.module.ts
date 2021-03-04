import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [HomeComponent, ListComponent, AboutComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
