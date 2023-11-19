import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  // Crea un FormGroup che conterrà i controlli del form
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required,
      Validators.email
    ])
  });

  // Getter per ottenere l'accesso facile ai controlli del form
  get f() {
    return this.form.controls;
  }

  submitForm() {
    // Verifica se il form è valido
    if (this.form.valid) {
      console.log('Dati del form:', this.form.value);
      // Puoi aggiungere qui la logica per inviare i dati a un server o eseguire altre operazioni

      // Svuota i dati del form dopo l'invio
      this.form.reset();
    }
  }
}
