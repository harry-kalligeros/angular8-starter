import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LineChartModule } from '@swimlane/ngx-charts';

import { GraphsRoutingModule } from './graphs-routing.module';
import { GraphsComponent } from './graphs.component';

@NgModule({
	declarations: [GraphsComponent],
	imports: [CommonModule, GraphsRoutingModule, LineChartModule]
})
export class GraphsModule {}
