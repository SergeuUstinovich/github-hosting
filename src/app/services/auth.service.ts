import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { Observable, of, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { 

  }
  loggedIn: boolean = false;
  //метод для данных пользователя(проверяет правильно велл данные или нет, выдает ошибку в случае неверных логина и пароля)
  login(userInfo: {login: string, password: string}): Observable<string | boolean>{
    this.loggedIn = true;
    if(userInfo.login === 'Admin' && userInfo.password === '12345678'){
      
      return of(true)
    }
    return throwError(() => new Error('Имя пользователя или пароль введены неверно'))
    
  }

  logout(){
    this.loggedIn = false;

    
  }
  //Проверка разрешения. проверяет прошёл ли пользователь аутентификацию
  IsAuthenticated(){
    return this.loggedIn;
  }
}