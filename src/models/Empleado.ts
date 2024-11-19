import { Departamento } from "./Departamento";
import { Proyecto } from "./Proyecto";

export class Empleado {
    id: number;
    nombre: string;
    puesto: string;
    departamento: Departamento;
    proyectos: Proyecto[];
  
    constructor(id: number, nombre: string, puesto: string, departamento: Departamento, proyectos: Proyecto[]) {
      this.id = id;
      this.nombre = nombre;
      this.puesto = puesto;
      this.departamento = departamento;
      this.proyectos = proyectos;
    }
  
    asignarAProyecto(proyecto: Proyecto): void {
      if (!this.proyectos.includes(proyecto)) {
        this.proyectos.push(proyecto);
      }
    }
  }
  