import { Component, OnInit } from '@angular/core';
import { PalabrasService } from 'src/app/services/palabras.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor( private palabrasS: PalabrasService ) { }

  get historial() {
    return this.palabrasS.historial;
  }

  ngOnInit(): void {
  }

}
