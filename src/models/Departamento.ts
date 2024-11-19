import { Empleado } from "./Empleado";

export class Departamento {
    id: number;
    nombre: string;
    empleados: Empleado[];
  
    constructor(id: number, nombre: string) {
      this.id = id;
      this.nombre = nombre;
      this.empleados = [];
    }
  
    agregarEmpleado(empleado: Empleado): void {
      if (!this.empleados.includes(empleado)) {
        this.empleados.push(empleado);
      }
    }
  }
  