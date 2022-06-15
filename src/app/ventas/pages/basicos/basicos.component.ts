import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'christian';
  nombreUpper: string = 'CHRISTIAN';
  nombreCompleto: string = 'cHrIsTiAn sOsA';

  fecha: Date = new Date();
}
