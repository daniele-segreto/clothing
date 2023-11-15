import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Output() aggiungiCarrello: EventEmitter<any> = new EventEmitter();

  prodotti = [
    {
      id: 0,
      nome: 'prodotto 1',
      quantita: 0,
      prezzo: 10
    },
    {
      id: 2,
      nome: 'prodotto 2',
      quantita: 0,
      prezzo: 20
    },
    {
      id: 3,
      nome: 'prodotto 3',
      quantita: 0,
      prezzo: 30
    },
  ];

  prodottoSelezionato: any = null;

  incrementa(index: number) {
    if (index >= 0 && index < this.prodotti.length) {
      this.prodotti[index].quantita += 1;
    }
  }

  decrementa(index: number) {
    if (index >= 0 && index < this.prodotti.length && this.prodotti[index].quantita > 0) {
      this.prodotti[index].quantita -= 1;
    }
  }

  aggiungiAlCarrello(index: number) {
    if (index >= 0 && index < this.prodotti.length && this.prodotti[index].quantita > 0) {
      this.aggiungiCarrello.emit(this.prodotti[index]); // Emissione dell'oggetto prodotto
      this.prodotti[index].quantita = 0;
      this.prodottoSelezionato = { ...this.prodotti[index] };
    }
  }
}
