import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore/lite';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  // Inizializza l'app Firebase con la tua configurazione
  private app = initializeApp({
    // Inserisci qui la tua configurazione Firebase
    apiKey: "AIzaSyAD-7bssVv61mfuQWZwBzFX3Bu5AuZ8Y48",
    authDomain: "e-commerce-9fdd3.firebaseapp.com",
    projectId: "e-commerce-9fdd3",
    storageBucket: "e-commerce-9fdd3.appspot.com",
    messagingSenderId: "135587624649",
    appId: "1:135587624649:web:64a2d3ac90f7011bf87f18"
  });

  // Ottieni l'istanza del database Firestore
  public db: Firestore = getFirestore(this.app);

  constructor() { }

  // Metodo per inviare prenotazioni (e dati utente) Firestore Database
  async inviaPrenotazioniAlDatabase(email: string,) {

    // Crea un oggetto con i dati da inviare
    const dati = {
      email,
    };

    // Aggiungi i dati alla collezione 'prenotazioni' nel database
    const docRef = await addDoc(collection(this.db, 'email'), dati);

    // Stampa un messaggio di conferma con l'ID del documento appena creato
    console.log('Email inviata con successo con ID:', docRef.id);

  }

}
