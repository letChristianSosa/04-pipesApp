import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    `
      button {
        margin-right: 10px;
      }
    `,
  ],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'sheyla';
  genero: string = 'femenino';

  bienvenidoMapa = {
    masculino: 'bienvenido',
    femenino: 'bienvenida',
  };

  cambiarPersona() {
    this.nombre = this.nombre === 'sheyla' ? 'christian' : 'sheyla';
    this.genero = this.genero === 'femenino' ? 'masculino' : 'femenino';
  }

  // i18nPlural
  productos: string[] = ['Monitor', 'Mouse', 'Teclado', 'Audifonos', 'Luces'];

  productosMapa = {
    '=0': 'no tienes productos en el carrito',
    '=1': 'tienes 1 producto en el carrito',
    other: 'tienes # productos en el carrito',
  };

  eliminarProducto() {
    this.productos.pop();
  }

  agregarProducto() {
    this.productos.push('product');
  }

  // KeyValue Pipe

  persona = {
    nombre: 'christian',
    edad: '25',
    ciudad: 'orizaba, veracruz',
  };

  // Json Pipe
  heroes = [
    {
      nombre: 'Spiderman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'IronMan',
      vuela: true,
    },
  ];

  // Async Pipe

  miObservable = interval(1000);

  ejemploPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Se ha resuelto');
    }, 3000);
  });
}
