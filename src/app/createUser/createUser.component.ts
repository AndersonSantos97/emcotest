import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
    selector: 'app-createUser',
    templateUrl: './createUser.component.html'
})
export class CreateUserComponent{
    user = {
        user_name:'',
        user_pass: '',
        user_rol: 3
    };

    constructor(private apiService: ApiService){}

    UserSubmit(){
        this.apiService.userCreatre(this.user).subscribe({
            next: (response) =>{
                //todo redireccionar al panel
            },
            error: (err) => {
                console.log('Error al crear usario: ',err)
            }
        })
    }
}