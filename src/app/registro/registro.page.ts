import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formRegistro = this.formBuilder.group({
    nome:  ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    cpf:   ['', Validators.compose([Validators.required, Validators.maxLength(11)])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(9)])],
    confirmar: ['', Validators.compose([Validators.required, Validators.minLength(9)])]
  });

  mensagensErro = {
    nome:  [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'name', aviso: 'Nome Incorreto'}],
    email: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'email', aviso: 'Email Incorreto'}],
    cpf:   [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'cpf', aviso: 'CPF Incorreto'}],
    senha: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'senha', aviso: 'Senha incorreto'}],
    confirmar: [{ tipo: 'required', aviso: 'O capo está vazio' } , { tipo: 'senha', aviso: 'As senhas não conferem'}],
  };

  constructor(private formBuilder: FormBuilder) { }
  get nome() {
    return this.formRegistro.get('nome');

  }

  get email() {
    return this.formRegistro.get('email');

  }

  get cpf() {
    return this.formRegistro.get('cpf');
  }

  get senha() {
    return this.formRegistro.get('senha');

  }
  get confirmar() {
    return this.formRegistro.get('confirmar');
  }

  ngOnInit() {
  }

}
