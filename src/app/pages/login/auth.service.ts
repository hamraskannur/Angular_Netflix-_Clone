import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: string = '';
  private validEmail = 'hamras@gmail.com';
  private validPassword = '12345';

  login(Email: string, password: string): boolean {
    return Email === this.validEmail && password === this.validPassword;
  }

  setUser(user: string) {
    this.user = user;
  }

  getUser(): boolean{
    return this.user!=''
  }
}
