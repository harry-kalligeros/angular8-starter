import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './employee';

@Pipe({
	name: 'filterEmployee'
})
export class FilterEmployeePipe implements PipeTransform {
	transform(items: Employee[], filterStr: string): any {
		if (!items || !filterStr) {
			return items;
		}

		return items.filter(
			item =>
				item.username.toLowerCase().includes(filterStr.toLowerCase()) ||
				item.email.toLowerCase().includes(filterStr.toLowerCase())
		);
	}
}
