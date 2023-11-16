import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  @Output() aggiungiCarrello: EventEmitter<any> = new EventEmitter();

  // UOMO
  prodotti_man = [
        {
      id: 0,
      nome: 'prodotto 1 U',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 1,
      nome: 'prodotto 2 U',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 2,
      nome: 'prodotto 3 U',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 3,
      nome: 'prodotto 1 U',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 4,
      nome: 'prodotto 2 U',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 5,
      nome: 'prodotto 3 U',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 6,
      nome: 'prodotto 1 U',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 7,
      nome: 'prodotto 2 U',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 8,
      nome: 'prodotto 3 U',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
  ];

  prodottoSelezionato: any = null;

  incrementa_man(index: number) {
    if (index >= 0 && index < this.prodotti_man.length) {
      this.prodotti_man[index].quantita += 1;
    }
  }

  decrementa_man(index: number) {
    if (index >= 0 && index < this.prodotti_man.length && this.prodotti_man[index].quantita > 0) {
      this.prodotti_man[index].quantita -= 1;
    }
  }

  aggiungiAlCarrello_man(index: number) {
    if (index >= 0 && index < this.prodotti_man.length && this.prodotti_man[index].quantita > 0) {
      this.aggiungiCarrello.emit(this.prodotti_man[index]); // Emissione dell'oggetto prodotto
      this.prodotti_man[index].quantita = 0;
      this.prodottoSelezionato = { ...this.prodotti_man[index] };
    }
  }

  // DONNA
  prodotti_woman = [
        {
      id: 0,
      nome: 'prodotto 1 D',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 1,
      nome: 'prodotto 2 D',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 2,
      nome: 'prodotto 3 D',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 3,
      nome: 'prodotto 1 D',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 4,
      nome: 'prodotto 2 D',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 5,
      nome: 'prodotto 3 D',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 6,
      nome: 'prodotto 1 D',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 7,
      nome: 'prodotto 2 D',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 8,
      nome: 'prodotto 3 D',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
  ];

  incrementa_woman(index: number) {
    if (index >= 0 && index < this.prodotti_woman.length) {
      this.prodotti_woman[index].quantita += 1;
    }
  }

  decrementa_woman(index: number) {
    if (index >= 0 && index < this.prodotti_woman.length && this.prodotti_woman[index].quantita > 0) {
      this.prodotti_woman[index].quantita -= 1;
    }
  }

  aggiungiAlCarrello_woman(index: number) {
    if (index >= 0 && index < this.prodotti_woman.length && this.prodotti_woman[index].quantita > 0) {
      this.aggiungiCarrello.emit(this.prodotti_woman[index]); // Emissione dell'oggetto prodotto
      this.prodotti_woman[index].quantita = 0;
      this.prodottoSelezionato = { ...this.prodotti_woman[index] };
    }
  }

  // BAMBINO
  prodotti_children = [
    {
      id: 0,
      nome: 'prodotto 1 B',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 1,
      nome: 'prodotto 2 B',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 2,
      nome: 'prodotto 3 B',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 3,
      nome: 'prodotto 1 B',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 4,
      nome: 'prodotto 2 B',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 5,
      nome: 'prodotto 3 B',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 6,
      nome: 'prodotto 1 B',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 7,
      nome: 'prodotto 2 B',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/t-shirt.jpg',
    },
    {
      id: 8,
      nome: 'prodotto 3 B',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/t-shirt.jpg',
    },
  ];

  incrementa_children(index: number) {
    if (index >= 0 && index < this.prodotti_children.length) {
      this.prodotti_children[index].quantita += 1;
    }
  }

  decrementa_children(index: number) {
    if (index >= 0 && index < this.prodotti_children.length && this.prodotti_children[index].quantita > 0) {
      this.prodotti_children[index].quantita -= 1;
    }
  }

  aggiungiAlCarrello_children(index: number) {
    if (index >= 0 && index < this.prodotti_children.length && this.prodotti_children[index].quantita > 0) {
      this.aggiungiCarrello.emit(this.prodotti_children[index]); // Emissione dell'oggetto prodotto
      this.prodotti_children[index].quantita = 0;
      this.prodottoSelezionato = { ...this.prodotti_children[index] };
    }
  }
}
