import { Injectable } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements  CanActivate {
  constructor(private router: Router){}

  canActivate(): boolean {
    const rol = localStorage.getItem('user_rol');

    if(rol && rol === '1'){
      return true;
    }else{
      this.router.navigate(['/panel']);
      return false;
    }
      
  }

}
