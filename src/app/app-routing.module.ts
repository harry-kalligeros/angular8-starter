import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'employees',
		loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
	},
	{
		path: 'graphs',
		loadChildren: () => import('./graphs/graphs.module').then(m => m.GraphsModule)
	},
	{ path: '', pathMatch: 'full', redirectTo: 'employees' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
