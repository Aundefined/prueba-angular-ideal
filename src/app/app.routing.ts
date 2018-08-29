import { RouterModule, Routes } from '@angular/router';

import { CalcularComponent } from './calcular/calcular.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SaludarComponent } from './saludar/saludar.component';
import { TablaComponent } from './tabla/tabla.component';
import { DragComponent } from "./drag/drag.component";

import { AuthGuard } from './auth-guard'
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '', component: NavbarComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent, canActivate: [AuthGuard] }
        ]

    },
    {
        path: 'calcular', component: NavbarComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: CalcularComponent, canActivate: [AuthGuard] }
        ]

    },
    {
        path: 'saludar', component: NavbarComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: SaludarComponent, canActivate: [AuthGuard] }
        ]

    },
    {
        path: 'tabla', component: NavbarComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: TablaComponent, canActivate: [AuthGuard] }
        ]

    },
    {
        path: 'drag', component: NavbarComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: DragComponent, canActivate: [AuthGuard] }
        ]

    },


    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch:'full', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

export const appRouting = RouterModule.forRoot(routes);