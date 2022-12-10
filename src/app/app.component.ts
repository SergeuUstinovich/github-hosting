import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myWork';
 
  

  constructor(
    private router: Router,
    private authService: AuthService){}

  ngOnInit(): void {
    
  }
  
  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  
}