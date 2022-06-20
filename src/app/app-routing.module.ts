import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

//Modulo
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { Page404Component } from './page404/page404.component';

const routes: Routes = [

  //path: '/auth', AuthRouting
  //path: '/dashboard', PagesRouting

  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}