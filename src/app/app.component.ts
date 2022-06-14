import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'cHrIsTiAn SoSa';
  dinero: number = 3400;

  mostrarInfo() {
    console.log(this.nombre);
    console.log(this.dinero);
  }
}
