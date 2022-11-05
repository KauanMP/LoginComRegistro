import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = this.formBuilder.group({
    email:['', Validators.compose([Validators.required, Validators.email])],
    senha:['', Validators.compose([Validators.required, Validators.minLength(6)])],
    
  });

  mensagensErro = {
    email: [{tipo: 'required', aviso: 'Preencha'}, {tipo: 'email', aviso: 'Deve ser um email'}],
    senha: [{tipo: 'required', aviso: 'Coloque a Senha'}, {tipo: 'email', aviso: 'Deve ser uma senha Valida'}
  ],
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
