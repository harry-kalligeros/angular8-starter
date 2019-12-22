import { environment } from '../../environments/environment';

class Attendee {
	firstName: string;
	lastName: string;
}

type Person = 'Male' | 'Female';

/**
 *  Makes a workshop class
 *
 * @class Workshop
 */
class Workshop {
	students: Array<Attendee>;
	// date: Date;

	private premises: string[];

	constructor(public date: Date, ...premises: string[]) {
		this.premises = premises;
		environment.profileApiUrl;
	}

	public watch(person: Person): void {
		console.log(`${person} aaaa
			test
				test
		`);
		this.work();
	}

	private work(): void {
		console.log(this.testx('wow'));
		console.log('premises:', this.premises);
		console.log('work');
	}

	private testx = (y: string) => this.premises[0] + y;
}

const workshop = new Workshop(new Date(), 'marousi', 'athens');

workshop.watch('Male');

// import { Directive } from '@angular/core';

// @Directive({ selector: '[appHighlight]' })
// export class HighlightDirective {
// 	constructor() { }
// 	@Input() appHighlight: string;
// 	@Input() background: string;
// }

// // <p [appHighlight]="'yellow'" [background]="'red'"></p>

// // template of <mw-thing>
// <div>
// 	<ng-content></ng-content>
// </div>

// <mw-thing>
// 	<h1> title </h1>
// </mw-thing>
