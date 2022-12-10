import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './linkss/login/login.component';
import { ProfileComponent } from './linkss/profile/profile.component';
import { InfoComponent } from './linkss/info/info.component';
import { CalendarComponent } from './linkss/calendar/calendar.component';
import { HomeComponent } from './linkss/home/home.component';
import { FoundComponent } from './linkss/not/found/found.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';


//подключение всех компонент
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    InfoComponent,
    CalendarComponent,
    HomeComponent,
    FoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
