import { Component } from '@angular/core';
import { Task } from '../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  currentDate:Date= new Date();

  taskList:Task[] = [
    {
      title: 'Agendar Reuniones',
      description:
        'Programar citas o reuniones en el calendario, confirmar asistencia de los participantes.',
      date: new Date('2025-01-25'),
      status: false,
    },
    {
      title: 'Gestión de Archivos Físicos y Digitales',
      description:
        'Resumen de los puntos más importantes y cómo una adecuada gestión de archivos, tanto físicos como digitales, contribuye al éxito organizacional o personal.',
      date: new Date('2025-01-25'),
      status: true,
    },
    {
      title: 'Gestión de Archivos',
      description:
        'Validar la existencia de los archivos contenidos en la base de datos.',
      date: new Date('2025-01-15'),
      status: false,
    },
  ];

  newTask: Task = {
    title: '',
    description: '',
    date: null,
    status: false,
  };

  onCheck (index:number){
    this.taskList[index].status=!this.taskList[index].status;
  }

  checkStatus(task:Task):string{
    if (task.status && this.currentDate < task.date!){ /*&& operador logico */
      return 'completed';
    }else if (this.currentDate > task.date!){
      return 'reprogram';
    }else{
      return "";
    }
  }

  showDate(date:Date):string{
    const year= date.getFullYear();
    const month= (date.getMonth()+1).toString().padStart(2,'0');
    const day= date.getDate().toString().padStart(2,'0');
    return year + "/" + month + "/" + day;
  }

  onDateChange(event:Event){
    const input = event.target as HTMLInputElement;
    this.newTask.date=new Date(input.value);
  }

  addTask(){
    if ( 
      this.newTask.title!="" &&
      this.newTask.description!="" &&
      this.newTask.date && 
      new Date(this.newTask.date).getTime()>0
    ){
      this.taskList.push(this.newTask);
      this.setValues();

    }
  else{
    alert("Es necesario teclear todos los campos");
  }

};

setValues(){
  this.newTask={
    title:'',
    description:'',
    date:null,
    status:false,
    };
  }

  cancel(){
    this.setValues();
  }
  
} //Fin de la Clase