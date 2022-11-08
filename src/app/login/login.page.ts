import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    senha: ['', Validators.compose([Validators.required, Validators.minLength(0)])]
  });

  mensagensErro = {
    email: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'email', aviso: 'Email incorreto'}],
    senha: [{ tipo: 'required', aviso: 'O campo está vazio' } , { tipo: 'senha', aviso: 'Senha incorreto'}],
  }

  constructor(private formBuilder: FormBuilder) { }

  get email() {
    return this.formLogin.get('email');
    
  }

  get senha() {
    return this.formLogin.get('senha');
    
  }


  ngOnInit() {
  }

}
