import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from '@modules/main/main.component';


import {ProfileComponent} from '@pages/profile/profile.component';

import {DashboardComponent} from '@pages/dashboard/dashboard.component';

import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';


import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProcessInstancesComponent } from './process-instances/process-instances.component';






const routes: Routes = [
    {
        path: '', pathMatch:"full",component:WelcomeComponent
    },
    {
        path: '',
        component: MainComponent,
        //canActivate: [AuthGuard],
        //canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
           
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
           
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path:'process-instance/:id/:description',
                component:ProcessInstancesComponent
            }
           
            
         
            
          
          
           
            
           
           
            
          
          
        ]
    },

    
    

  
 
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
