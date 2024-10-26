export class TaskEntity{
    id: number; 
    user_name: string; 
    task_description: string; 
    task_state: 'Pendiente' | 'en progreso' | 'completado';

    constructor(id: number, user_name: string, task_description: string, task_state: 'Pendiente' | 'en progreso' | 'completado') {
        this.id = id;
        this.user_name = user_name;
        this.task_description = task_description;
        this.task_state = task_state;
    }
}