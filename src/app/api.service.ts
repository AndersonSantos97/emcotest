import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskEntity } from './models/task.entity';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = 'http://localhost:3000';

  constructor(private http: HttpClient){}
  

  login(username: string, password: string): Observable<any>{
    const url = `${this.baseURL}/auth/login`;
    return this.http.post(url,{username, password});
  }


  userCreatre(data: any): Observable<any>{
    const url = `${this.baseURL}/users`;
    return this.http.post(url, data);
  }

  taskCreate(data: any): Observable<any>{
    const url = `${this.baseURL}/tasks`;
    return this.http.post(url, data);
  }

  tasksByUser(userId: number): Observable<any[]>{
    const url = `${this.baseURL}/tasks/user/${userId}`;
    return this.http.get<any[]>(url)
  }

  getUsers(){
    const url =`${this.baseURL}/users/users`;
    return this.http.get<any[]>(url);
  }

  updateTask(id:number, task: TaskEntity): Observable<TaskEntity>{

    return this.http.put<TaskEntity>(`${this.baseURL}/tasks/${id}`,task);
  }

  deleteTask(id: number): Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }
}
