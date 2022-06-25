import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page/page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot( 
   [ 
    { path: 'page', component: PageComponent },
    {path: '', redirectTo: '/page', pathMatch: 'full'},
  ]
    )],
  exports: [RouterModule]
})


export class AppRoutingModule { }
