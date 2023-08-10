import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common'
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf],
})
export class ContatoComponent {

  nome = new FormControl('', Validators.required);
  email = new FormControl('', [ Validators.required, Validators.email ]);
  assunto = new FormControl('');
  mensagens = new FormControl('', [Validators.minLength(6), Validators.maxLength(200)]);

  getErrorMessage() {

    if (this.nome.hasError('required')) {
      return 'Este campo é de preenchimento obrigatório!';
    }

    if (this.email.hasError('required')) {
      return 'Este campo é de preenchimento obrigatório';
    }

    if (this.email.hasError('email')) {
      return 'Digite um e-mail válido';
    }

    if (this.mensagens.hasError('minLength()')) {
      return 'Mínimo de 06 caracteres é obrigatório!';
    }

   if (this.mensagens.hasError('maxLength()')) {
      return 'Máximo de 200 caracteres é obrigatório!';
    }

    return  ''

  }

  submitForm() {
    const Formdata = {
      nome: this.nome.value,
      email: this.email.value,
      assunto: this.assunto.value,
      mensagens: this.mensagens.value
    }

    console.log(Formdata);
  }

}