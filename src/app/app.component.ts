import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Mi perfil', url: '/my-account', icon: 'person-circle' },
    //{ title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Contacto', url: '/contact', icon: 'help' },
  ];
  constructor() {}
}
