import { Component } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { jwtDecode } from "jwt-decode";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent{

    constructor(private apiService: ApiService, private router: Router){}

    submit(form: any){
        this.apiService.login(form.username, form.password).subscribe({
            next: (response) => {
                localStorage.setItem('access_token',response.access_token);

                const decodToken: any = jwtDecode(response.access_token);
                console.log(decodToken)
                const rol = decodToken.rol;
                localStorage.setItem('user_rol',rol);
                console.log(rol)
                this.router.navigate(['/panel']);
            },
            error: (err)=>{
                console.error('Algo fallo: ',err);

            }
        }
        )
    }
}