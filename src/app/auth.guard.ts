import { CanActivateFn, CanActivate,Router, ActivatedRouteSnapshot, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(): boolean {
    const token = localStorage.getItem('access_token');
    if(token){

      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}

export class AdminGuard implements CanActivate {
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
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };
