
import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AuthService } from '../pages/login/auth.service';

@Injectable({
    providedIn: 'root'
  })
  export class loginGuard implements CanActivate {
    constructor( private router: Router,private authService: AuthService) { }
    
    canActivate() {
      // let isLoggedIn=this.authService.getUser()
       let isLoggedIn=true
      if (!isLoggedIn) {
          return true;
    } else {
          return this.router.navigate(['/home']);
      }
    }
  
  }