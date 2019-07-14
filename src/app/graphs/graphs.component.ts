import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { Series } from '@swimlane/ngx-charts';
import { SubSink } from 'subsink';

import { GraphsService } from './graphs.service';

@Component({
	selector: 'mw-graphs',
	templateUrl: './graphs.component.html',
	styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit, OnDestroy {
	stats: Series[];
	private subs = new SubSink();

	view: any[] = [700, 400];
	// options
	showXAxis = true;
	showYAxis = true;
	gradient = false;
	showLegend = true;
	showXAxisLabel = true;
	xAxisLabel = 'Day of the week';
	showYAxisLabel = true;
	yAxisLabel = 'Rate';

	colorScheme = {
		domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
	};

	// line, area
	autoScale = true;

	constructor(private graphsService: GraphsService) {}

	ngOnInit() {
		const subscription = this.graphsService.fetchStats()
			.subscribe(stats => {
				this.stats = this.graphsService.convertData(stats);
		});
		this.subs.add(subscription);
	}

	ngOnDestroy(): void {
		this.subs.unsubscribe();
	}

	onSelect(event: Event) {
		console.log(event);
	}
}
