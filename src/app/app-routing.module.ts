import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
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
