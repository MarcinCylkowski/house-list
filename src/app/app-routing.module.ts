import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [

{
  path: "addhome",
  component: MainComponent
},

{
  path: "home",
  component: TableComponent
},

{
path: '',
redirectTo: 'home',
pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
