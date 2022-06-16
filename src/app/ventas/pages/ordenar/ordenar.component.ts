import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Wonder Woman',
      vuela: true,
      color: Color.rojo,
    },
    {
      nombre: 'Green Lantern',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Aquaman',
      vuela: false,
      color: Color.azul,
    },
  ];

  alternarMayusculas() {
    this.enMayusculas = this.enMayusculas ? false : true;
  }

  cambiarOrden(orden: string) {
    this.ordenarPor = orden;
  }
}
