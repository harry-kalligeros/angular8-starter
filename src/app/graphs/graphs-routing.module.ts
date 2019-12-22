import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GraphsComponent } from './graphs.component';

const routes: Routes = [
	{ path: '', component: GraphsComponent }
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [],
	declarations: [],
})
export class GraphsRoutingModule { }
