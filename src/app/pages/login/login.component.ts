import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  Email: string=''
   password: string=''
  constructor( private router: Router,private authService: AuthService) {}

  onSubmit(): void {        
    if (this.authService.login(this.Email, this.password)) {
      this.authService.setUser(this.Email)
       this.router.navigate(['/']);
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
