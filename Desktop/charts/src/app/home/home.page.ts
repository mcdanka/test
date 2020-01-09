import { Component, OnInit } from '@angular/core';
import { BarGraphData } from '../components/bar-graph/bar-graph.component';
import { GraphDataService } from '../services/graph-data/graph-data.service';
import { LineGraphData } from '../components/line-graph/line-graph.component';
import { PieGraphData } from '../components/pie-graph/pie-graph.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  barGraphData = {} as BarGraphData;
  lineGraphData = {} as LineGraphData;
  pieGraphData = {} as PieGraphData;

  constructor(
    private graphService: GraphDataService

  ) {}

  ngOnInit() {
    this.getBarGraphData();
    this.getLineGraphData();
    this.getPieGraphData();
    console.log(this);
  }

  async getBarGraphData() {
    this.barGraphData = await this.graphService.getBarGraphData();
    // 
    //
    //
    //

  }

  async getLineGraphData() {
    this.lineGraphData = await this.graphService.getLineGraphData();

  }


  async getPieGraphData() {
    this.pieGraphData = await this.graphService.getPieGraphData();

  }

}
