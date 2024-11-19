export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    empleados: Empleado[];
  
    constructor(id: number, nombre: string, descripcion: string) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.empleados = [];
    }
  
    asignarEmpleado(empleado: Empleado): void {
      if (!this.empleados.includes(empleado)) {
        this.empleados.push(empleado);
      }
    }
  }
  