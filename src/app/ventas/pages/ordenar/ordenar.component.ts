import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent {
  enMayusculas: boolean = false;

  alternarMayusculas() {
    this.enMayusculas = this.enMayusculas ? false : true;
  }
}
