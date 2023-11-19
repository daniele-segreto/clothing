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
      nome: 'Camicia a Fiori',
      quantita: 0,
      prezzo: 7,
      foto: '../../../assets/img/Immagini Uomo/Superiori_U/Camicia_Fiori.png',
    },
    {
      id: 1,
      nome: 'Felpa Blu',
      quantita: 0,
      prezzo: 11,
      foto: '../../../assets/img/Immagini Uomo/Superiori_U/Felpa_blu.png',
    },
    {
      id: 2,
      nome: 'Felpa Nera',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini Uomo/Superiori_U/Felpa_Nera.png',
    },
    {
      id: 3,
      nome: 'Tuta Chiara',
      quantita: 0,
      prezzo: 9,
      foto: '../../../assets/img/Immagini Uomo/Inferiori_U/Tuta_chiara.png',
    },
    {
      id: 4,
      nome: 'Tuta Scura ',
      quantita: 0,
      prezzo: 9,
      foto: '../../../assets/img/Immagini Uomo/Inferiori_U/Tuta_Scura.png',
    },
    {
      id: 5,
      nome: 'Tuta Invernale',
      quantita: 0,
      prezzo: 9,
      foto: '../../../assets/img/Immagini Uomo/Inferiori_U/Tuta_uomo.png',
    },
    {
      id: 6,
      nome: 'Scarpe Leggere',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini Uomo/Accessori_U/Scarpe_trekking_1.png',
    },
    {
      id: 7,
      nome: 'Scarpe Medie',
      quantita: 0,
      prezzo: 35,
      foto: '../../../assets/img/Immagini Uomo/Accessori_U/Scarpe_trekking_2.png',
    },
    {
      id: 8,
      nome: 'Scarpe Pesanti',
      quantita: 0,
      prezzo: 40,
      foto: '../../../assets/img/Immagini Uomo/Accessori_U/Scarpe_trekking_3.png',
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
      nome: 'Felpa Chiara',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini Donna/Superiore_D/Felpa_chiara.png',
    },
    {
      id: 1,
      nome: 'Felpa Viola',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini Donna/Superiore_D/Felpa_viola.png',
    },
    {
      id: 2,
      nome: 'Pantaloni chiari',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini Donna/Superiore_D/Pantaloni_chiari.png',
    },
    {
      id: 3,
      nome: 'Canottiera scura',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini Donna/Inferiore_D/Canottiera_scura.png',
    },
    {
      id: 4,
      nome: 'Pantaloni caviglia',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini Donna/Inferiore_D/Pantaloni _caviglia.png',
    },
    {
      id: 5,
      nome: 'Pantaloni Zampa',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini Donna/Inferiore_D/Pantaloni_Zampa.png',
    },
    {
      id: 6,
      nome: 'Scarpe colore chiaro',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini Donna/Accessori_D/Scarpe_colore_chiaro.png',
    },
    {
      id: 7,
      nome: 'Scarpe nere',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini Donna/Accessori_D/Scarpe_nere.png',
    },
    {
      id: 8,
      nome: 'Scarpe verde acqua',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini Donna/Accessori_D/Scarpe_verde_acqua.png',
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
      nome: 'Felpa  Diesel blu',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini bimbo/Superiore_B/Felpa_Blu_Diesel.png',
    },
    {
      id: 1,
      nome: 'Felpa blu scura',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini bimbo/Superiore_B/Felpa_blu_Scura.png',
    },
    {
      id: 2,
      nome: 'Felpa  Diesel grigia',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini bimbo/Superiore_B/Felpa_grigia_diesel.png',
    },
    {
      id: 3,
      nome: 'Maglietta Diesel scura',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini bimbo/Inferiore_B/Maglietta_diesel_sscura.png',
    },
    {
      id: 4,
      nome: 'Maglietta Diesel chiara',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini bimbo/Inferiore_B/Maglietta_diesel_chiara.png',
    },
    {
      id: 5,
      nome: 'Maglietta Diesel scura',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini bimbo/Inferiore_B/Maglietta_diesel_sscura.png',
    },
    {
      id: 6,
      nome: 'Cappellino chiaro',
      quantita: 0,
      prezzo: 10,
      foto: '../../../assets/img/Immagini bimbo/Accessori_B/Cappellino_Chiaro.png',
    },
    {
      id: 7,
      nome: 'Cappellino scuro',
      quantita: 0,
      prezzo: 20,
      foto: '../../../assets/img/Immagini bimbo/Accessori_B/Cappellino_scuro.png',
    },
    {
      id: 8,
      nome: 'Cappellino',
      quantita: 0,
      prezzo: 30,
      foto: '../../../assets/img/Immagini bimbo/Accessori_B/Cappellino.png',
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
