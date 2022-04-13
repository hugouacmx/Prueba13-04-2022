import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  buscarPalabras( query: string ) {
    this._historial.unshift( query );
  }

}
