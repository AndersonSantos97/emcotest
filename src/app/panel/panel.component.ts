import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { Router } from "@angular/router";
import { jwtDecode } from "jwt-decode";

@Component({
    selector: 'app-panel',
    templateUrl: './panel.component.html'
})
export class PanelComponent implements OnInit{
    tasks: any[] = [];
    userId: number | undefined;

    constructor (private apiService: ApiService, private router: Router, private cdr: ChangeDetectorRef){}

    ngOnInit(): void {
        this.getUserId();
        this.tasksUser();
        this.cdr.detectChanges();
    }

    rolAdmin():number{
        const rol = localStorage.getItem('user_rol');

        const numRol = Number(rol)
        
        

        if(numRol=== 1){
            console.log(`el rol es desde el if ${numRol}`);
            return 1
        }else if(numRol === 3){
            return 3;
        }else{
            return 0;
        }
    }


    logout(){
        localStorage.removeItem('access_token');
        sessionStorage.removeItem('access_token');

        this.router.navigate(['/login'])
    }

    private getUserId(): void{
        const token = localStorage.getItem('access_token');
        if(token){
            const decoToken: any = jwtDecode(token);
            this.userId = decoToken.sub;
            console.log('prueba')
            console.log(this.userId);
        }else{
            console.error('No se encontró el token en localStorage');
        }
    }

    tasksUser(): void{        
        if(this.userId){
            this.apiService.tasksByUser(this.userId).subscribe({
                next: (response) =>{
                    this.tasks = response;
                },
                error:(err) =>{
                    console.error('No se recuperaron las tareas: ', err);
                }
            }
            );

        }else{
            console.error('No se encontro el id del usuario en local storage')
        }
    }

    goCreateU(){
        this.router.navigate(['/createUser']);
    }
}