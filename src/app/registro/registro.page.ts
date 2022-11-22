import { UsuariosService } from './../services/usuarios.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Usuario } from '../models/Usuario.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  usuario: Usuario = new Usuario();


  formRegistro = this.formBuilder.group({
    nome:  ['', Validators.compose([Validators.required, Validators.minLength(3)])],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    cpf:   ['', Validators.compose([Validators.required, Validators.maxLength(11), Validators.minLength(11)])],
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

  constructor(private formBuilder: FormBuilder, private usuarioService: UsuariosService, private route: Router) { }
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

  ngOnInit() {}

  async salvar(){
    if (this.formRegistro.valid) {
      this.usuario.nome = this.formRegistro.get('nome').value;
      this.usuario.email = this.formRegistro.get('email').value;
      this.usuario.cpf = this.formRegistro.get('cpf').value;
      this.usuario.senha = this.formRegistro.get('senha').value;

      const id = (await this.usuarioService.buscarID()) as number;
      this.usuario.id = id;

      this.usuarioService.salvar(this.usuario);

      alert('Sucesso!');

      this.usuarioService.salvarID(id + 1);

      this.route.navigateByUrl('/login');
    } else {
      alert('Formulario Invalido');
    }
  }
}
