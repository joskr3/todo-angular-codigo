import { Component } from "@angular/core";
import { Tarea } from "./Tarea";

@Component({
  selector: "App",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tareas: Tarea[] = [];
  nombreNuevaTarea: string = "";

  guardarTareas() {
    if (this.nombreNuevaTarea) {
      let tarea = new Tarea();
      tarea.nombre = this.nombreNuevaTarea;
      tarea.completada = true;
      this.tareas.push(tarea);
    } else {
      alert("Debe ingresar un nombre para la tarea");
    }
  }

  marcarTareaComoTerminada(id: number) {
    this.tareas[id].completada = !this.tareas[id].completada;
  }

  eliminarTarea(id: number) {
    // this.tareas.splice(id, 1);
    this.tareas = this.tareas.filter((_, index) => index !== id);
  }
}
