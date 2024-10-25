import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent{
    constructor (private apiService: ApiService, private router: Router){}

    rolAdmin():number{
        const rol = localStorage.getItem('user_rol');

        const numRol = Number(rol)

        if(numRol=== 1){
            return 1
        }else if(numRol === 2){
            return 2;
        }else{
            return 0;
        }
    }

    logout(){
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');

        this.router.navigate(['/login'])
    }
}