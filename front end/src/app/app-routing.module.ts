import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbassadeurDashComponent } from './ambassadeur-dash/ambassadeur-dash.component';
import { AmbassadeursComponent } from './ambassadeurs/ambassadeurs.component';
import { DashbordAdminComponent } from './dashbord-admin/dashbord-admin.component';
import { HomeComponent } from './home/home.component';
import { DashbordItComponent } from './dashbord-it/dashbord-it.component';
import { AddAmbassadeurComponent } from './dashbord-it/add-ambassadeur/add-ambassadeur.component';
import { LoginComponent } from './login/login.component';
import { AuthGardService } from './service/auth-gard.service';
import {NewsComponent} from "./news/news.component"


const routes: Routes = [
  // { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '', component: HomeComponent},
  { path: 'ambassadeurs', component: AmbassadeursComponent },
  { path: 'ambassadeurs-dash', canActivate:[AuthGardService],component: AmbassadeurDashComponent },
  { path: 'finance-dash', component: DashbordAdminComponent },
  { path: 'Admin-dash',canActivate:[AuthGardService],component: DashbordItComponent },
  { path: 'amb', outlet:"dashbord",component: AddAmbassadeurComponent},
  { path: 'login', component: LoginComponent},
  { path: 'news', component: NewsComponent},
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
