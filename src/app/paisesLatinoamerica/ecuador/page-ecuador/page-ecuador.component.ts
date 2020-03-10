import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { RecomendationService } from '../../../services/recomendation.service';

@Component({
  selector: 'app-page-ecuador',
  templateUrl: './page-ecuador.component.html',
  styleUrls: ['./page-ecuador.component.css']
})
export class PageEcuadorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
