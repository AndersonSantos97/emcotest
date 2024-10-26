import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskEntity } from '../models/task.entity';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {
  @Input() task: TaskEntity | null = {id: 0, user_name:"", task_description:'', task_state:'Pendiente'};
  @Output() update = new EventEmitter<TaskEntity>();

  submit(){
    if(this.task){
      this.update.emit(this.task)
    }
  }
}
