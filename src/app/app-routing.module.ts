import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent
	// children: [
	// 	{ path: 'page1', component: AComponent },
	// 	{ path: 'page2', component: BComponent },
	// 	{ path: 'page3', component: CComponent } // /login/page3
	// ]
},
	{
		path: 'employees',
		loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule)
	},
	{
		path: 'graphs',
		loadChildren: () => import('./graphs/graphs.module').then(m => m.GraphsModule)
	},
	// The following two must be always at the end
	{ path: '', pathMatch: 'full', redirectTo: 'employees' } // ,
	// {
		// path:  '**', component: NotFoundComponent
	// }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
