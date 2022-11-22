import { Usuario } from './../models/Usuario.model';
import { StorageService } from './storage.service';
import { Injectable, ɵ_sanitizeUrl } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  listaUsuario: Usuario[] = [];

  constructor(private storageService: StorageService) { }

  async login(email: string, senha: string){
    this.buscarTodos();
    let usuario: Usuario;
    this.listaUsuario.filter(item =>{
      if(item.email.toLocaleLowerCase() == email.toLocaleLowerCase()){
        usuario = item;
      }
    });
    if (usuario?.senha === senha) {
      return usuario;
    }
    return null;
  }


  async salvar(usuario: Usuario) {
    this.buscarTodos();
    this.listaUsuario[usuario.id] = usuario;
    this.storageService.set('Usuario', this.listaUsuario);
  }
  async buscarUm(id: number) {
    this.buscarTodos();
    return this.listaUsuario[id];
  }
  async buscarTodos() {
    this.listaUsuario = (await this.storageService.get('Usuario')) as unknown as Usuario[];
    if (!this.listaUsuario) {
      return [];
    }
    return this.listaUsuario;
  }
  async deletar(id: number) {
    this.buscarTodos();
    this.listaUsuario.splice(id, 1);
    this.storageService.set('Usurios', this.listaUsuario);
  }
  async salvarID(id: number) {
    await this.storageService.set('idUsuario', id);
  }
  async buscarID() {
    const id = await this.storageService.get('idUsuario');

    if (!id) {
      return 0;
    }
    return id;
  }


}
