import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'e-commerce';
  count = 0;
  carrello: any[] = [];

  isRouteWithProducts: boolean = false;
  prodottoSelezionato: any = null;


  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isRouteWithProducts = this.router.url.includes('/prodotti');
      }
    });
  }

  aggiungiAlCarrello(prodotto: any) {
    this.count += prodotto.quantita;

    // Cerca se il prodotto è già nel carrello
    const index = this.carrello.findIndex(item => item.id === prodotto.id);

    if (index !== -1) {
      // Se il prodotto è già nel carrello, aggiorna la quantità
      this.carrello[index].quantita += prodotto.quantita;
    } else {
      // Se il prodotto non è nel carrello, aggiungi il prodotto al carrello
      this.carrello.push({ ...prodotto });
    }
  }

  rimuoviDalCarrello(index: number) {
    if (index >= 0 && index < this.carrello.length) {
      this.count -= this.carrello[index].quantita;
      this.carrello.splice(index, 1);
    }
  }

  calcolaSommaPrezzi(): number {
    let sommaPrezzi = 0;

    for (const item of this.carrello) {
      sommaPrezzi += item.prezzo * item.quantita;
    }

    return sommaPrezzi;
  }

  confermaAcquisto() {
    Swal.fire({
      title: 'Conferma acquisto',
      text: 'Sei sicuro di voler procedere con l\'acquisto?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Procedi',
      cancelButtonText: 'Annulla',
    }).then((result) => {
      if (result.isConfirmed) {
        // Esegui l'azione desiderata dopo la conferma
        this.eseguiAcquisto();
      }
    });
  }


  eseguiAcquisto() {
    // Aggiungi qui la logica per l'acquisto
    // Ad esempio, potresti reimpostare il carrello
    this.carrello = [];
    this.count = 0;

    // Chiudi la modale
    Swal.fire('Acquisto completato!', 'Grazie per il tuo acquisto.', 'success').then(() => {
      // Naviga alla home
      // this.router.navigate(['/']);
    });
  }


}
