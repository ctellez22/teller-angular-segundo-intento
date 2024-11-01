import { Component, OnInit } from '@angular/core';
import { Serie } from '../../models/serie.model';
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.css']
})
export class SeriesListComponent implements OnInit {
  series: Serie[] = []; 

  constructor(private seriesService: SeriesService) { } 

  ngOnInit(): void {
      this.seriesService.getSeries().subscribe((data: Serie[]) => { 
          this.series = data; 
      });
  }
}
