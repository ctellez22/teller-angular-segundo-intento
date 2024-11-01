import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series.component';
import { SeriesListComponent } from './components/series-list/series-list.component';


@NgModule({
  declarations: [
    SeriesListComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SeriesListComponent 
  ]
})

export class SeriesModule { }