import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CurrencyStat } from './currrency-stat';
import { DataItem, Series } from '@swimlane/ngx-charts';

@Injectable({
	providedIn: 'root'
})
export class GraphsService {
	constructor(private http: HttpClient) {}

	fetchStats(): Observable<CurrencyStat[]> {
		return this.http.get<CurrencyStat[]>('api/currency-stats');
	}

	convertData(data: CurrencyStat[]): Series[] {
		const dataItems: DataItem[] = data.map(d => ({
			name: d.day,
			value: Number(d.price)
		}));

		return [{ name: 'Pound', series: dataItems }];
	}

}
