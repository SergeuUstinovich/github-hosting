import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { CalendarComponent } from './linkss/calendar/calendar.component';
import { HomeComponent } from './linkss/home/home.component';
import { InfoComponent } from './linkss/info/info.component';
import { LoginComponent } from './linkss/login/login.component';
import { FoundComponent } from './linkss/not/found/found.component';
import { ProfileComponent } from './linkss/profile/profile.component';

//создание роутов для панели навигации
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'info', component: InfoComponent},
  {path:'profile',
   canActivate:[AuthGuard],
   component: ProfileComponent},
  {path: 'calendar', component: CalendarComponent,
   canActivate:[AuthGuard]
  },
  {path: 'home', component: HomeComponent},
  {path: '**', component: FoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
