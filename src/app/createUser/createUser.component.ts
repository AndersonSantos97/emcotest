import { Component, signal } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "../api.service";
import { FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-createUser',
    templateUrl: './createUser.component.html',
})
export class CreateUserComponent{


    user = {
        user_name:'',
        user_pass: '',
        user_rol: 3,
        user_state: 1
    };

    constructor(private apiService: ApiService, private router: Router){}

    UserSubmit(){
        this.apiService.userCreatre(this.user).subscribe({
            next: (response) =>{
                this.router.navigate(['/panel']);
            },
            error: (err) => {
                console.log('Error al crear usario: ',err)
            }
        })
    }

    logout(){
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');
    
        this.router.navigate(['/login'])
      }
    
    goBack(){
        this.router.navigate(['/panel']);
      }
}