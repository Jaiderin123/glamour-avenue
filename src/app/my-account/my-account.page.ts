import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  public appPages = [
    { title: 'Inicio', url: '/folder/Home', icon: 'home' },
    { title: 'Mi perfil', url: '/my-account', icon: 'person-circle' },
    //{ title: 'Favoritos', url: '/folder/favorites', icon: 'heart' },
    { title: 'Contacto', url: '/folder/spam', icon: 'help' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
