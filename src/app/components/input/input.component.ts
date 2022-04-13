import { Component, ElementRef, ViewChild } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private palabrasS: PalabrasService ){}

  buscar() {
   
    const valor = this.txtBuscar.nativeElement.value;

    this.palabrasS.buscarPalabras( valor );
    
    this.txtBuscar.nativeElement.value = '';

  }

}
