import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asig-task',
  templateUrl: './asig-task.component.html',
  styleUrl: './asig-task.component.css'
})
export class AsigTaskComponent implements OnInit{
  task = {
    task_description: '',
    task_state: 'Pendiente',
    user_id: null
  };

  states =  ['Pendiente', 'En progreso', 'Completado'];
  users: any[] =[]

  constructor(private apiService: ApiService, private router: Router){}

  ngOnInit(): void {
      this.allUsers();
  }

  allUsers(){
    this.apiService.getUsers().subscribe({
      next: (response) => {
        this.users = response;
      },
      error: (err) => {
        console.error('Error al cargar usuarios ', err);
      }
    })
  }


  asigTask(){
    this.apiService.taskCreate(this.task).subscribe({
      next: (response) => {
        this.router.navigate(['/panel']);
      },
      error: (err) =>{
        console.log('Error al asignar la tarea: ', err)
      }
    })
  }
}
