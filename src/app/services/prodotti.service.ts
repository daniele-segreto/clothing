import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  prodottoSelezionato: any;

  setProdottoSelezionato(prodotto: any) {
    this.prodottoSelezionato = prodotto;
  }

  constructor() { }
}
