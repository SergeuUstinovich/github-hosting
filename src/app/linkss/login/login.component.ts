import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  

  loginForm!: FormGroup

  constructor(
    private router: Router,
    private authService: AuthService){

  }
  //метод в случае успеха перенаправляет на страницу профиля
  submitLogin(){
    this.authService.login(this.loginForm.value).subscribe({next: () => this.router.navigate(['profile']),
    error: (err) => alert(err.message)
  })
  }
  
  //проверка валидности введеных значений для того что бы выдать ошибку, что не правильно введено
  ngOnInit(): void {
    this.loginForm = new FormGroup({
    login: new FormControl('', [
      Validators.required, 
      Validators. pattern (/(?=.*[A-Z])/)]),
    password: new FormControl('', [
      Validators.required, 
      Validators. pattern (/(?=.*[0-9])/)])  

    });
    
    
  }
  
}
