import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
[x: string]: any;
  categories = [
    { id: 1, name: 'Camisetas' },
    { id: 2, name: 'Pantalones' },
    { id: 3, name: 'Vestidos' },
    { id: 4, name: 'Chaquetas' },
    { id: 5, name: 'Bolsos' },
  ];

  products = [
    // Camisetas
    { nombre: 'Camiseta Básica Blanca', descripcion: 'Camiseta de algodón 100%, ideal para combinar con cualquier look.', precio: 19.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta Gráfica Negra', descripcion: 'Camiseta con diseño gráfico moderno, ideal para un estilo casual.', precio: 22.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta de Rayas', descripcion: 'Camiseta de rayas horizontales, perfecta para un look relajado.', precio: 18.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta Deportiva', descripcion: 'Camiseta diseñada para actividades deportivas, de material transpirable.', precio: 25.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta de Manga Larga', descripcion: 'Camiseta de manga larga, ideal para climas frescos.', precio: 24.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta Crop Top', descripcion: 'Camiseta corta con estilo juvenil, ideal para looks veraniegos.', precio: 19.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta Oversize', descripcion: 'Camiseta oversize de algodón suave, cómoda y moderna.', precio: 29.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },
    { nombre: 'Camiseta de Cuello V', descripcion: 'Camiseta con cuello en V, simple y elegante.', precio: 21.99, categoriaId: 1, imagen: '../../assets/images/camiseta.png' },

    // Pantalones
    { nombre: 'Jeans Skinny', descripcion: 'Pantalones ajustados con un toque moderno, perfectos para cualquier ocasión casual.', precio: 39.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones Chinos', descripcion: 'Pantalones chinos de corte recto, cómodos y adecuados para looks formales o casuales.', precio: 45.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones Cargo', descripcion: 'Pantalones cargo con múltiples bolsillos, estilo urbano y práctico.', precio: 49.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones de Lino', descripcion: 'Pantalones ligeros de lino, ideales para el verano y el clima cálido.', precio: 34.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones Cortos de Algodón', descripcion: 'Pantalones cortos cómodos y frescos, perfectos para días calurosos.', precio: 29.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones de Cuero', descripcion: 'Pantalones de cuero sintético, para un look atrevido y moderno.', precio: 59.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Pantalones Slim Fit', descripcion: 'Pantalones de corte ajustado, perfectos para una figura estilizada.', precio: 42.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },
    { nombre: 'Jeans Desgastados', descripcion: 'Jeans de estilo desgastado con toques vintage, cómodos y a la moda.', precio: 37.99, categoriaId: 2, imagen: '../../assets/images/pantalon.png' },

    // Vestidos
    { nombre: 'Vestido de Verano', descripcion: 'Vestido ligero y fresco, ideal para días soleados y actividades al aire libre.', precio: 39.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido de Noche', descripcion: 'Vestido elegante de noche con detalles brillantes, perfecto para eventos formales.', precio: 99.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido Floral', descripcion: 'Vestido corto con estampado floral, perfecto para la temporada de primavera.', precio: 49.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido de Algodón', descripcion: 'Vestido simple y cómodo, ideal para un look relajado y cotidiano.', precio: 34.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido Rojo de Fiesta', descripcion: 'Vestido de fiesta rojo con un toque sofisticado y elegante.', precio: 79.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido de Manga Corta', descripcion: 'Vestido con mangas cortas y ajuste cómodo, para un look casual y moderno.', precio: 39.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido Midi', descripcion: 'Vestido midi con corte elegante, ideal para ocasiones especiales.', precio: 69.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },
    { nombre: 'Vestido de Pescador', descripcion: 'Vestido largo con tirantes, estilo casual y relajado para el verano.', precio: 41.99, categoriaId: 3, imagen: '../../assets/images/vestido.png' },

    // Chaquetas
    { nombre: 'Chaqueta de Cuero', descripcion: 'Chaqueta de cuero auténtico, elegante y con estilo urbano.', precio: 149.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta Bomber', descripcion: 'Chaqueta bomber de material sintético, cómoda y con estilo retro.', precio: 89.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta de Lluvia', descripcion: 'Chaqueta impermeable y ligera, perfecta para días lluviosos.', precio: 69.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta de Lana', descripcion: 'Chaqueta de lana cálida, ideal para los días más fríos del invierno.', precio: 119.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Blazer Formal', descripcion: 'Blazer formal de corte ajustado, ideal para ocasiones elegantes.', precio: 139.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta de Jean', descripcion: 'Chaqueta de mezclilla clásica, versátil y atemporal.', precio: 59.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta Polar', descripcion: 'Chaqueta polar suave y abrigada, ideal para climas fríos.', precio: 49.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },
    { nombre: 'Chaqueta Trench', descripcion: 'Chaqueta trench larga, elegante y perfecta para el otoño.', precio: 89.99, categoriaId: 4, imagen: '../../assets/images/chaqueta.png' },

    // Bolsos
    { nombre: 'Bolso de Mano', descripcion: 'Bolso pequeño y elegante, perfecto para el uso diario.', precio: 49.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Mochila de Cuero', descripcion: 'Mochila de cuero genuino, con mucho espacio y diseño moderno.', precio: 79.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Bolso Tote', descripcion: 'Bolso grande de lona, ideal para ir de compras o al trabajo.', precio: 39.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Bolso Crossbody', descripcion: 'Bolso cruzado práctico y moderno, ideal para ocasiones casuales.', precio: 29.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Clutch de Noche', descripcion: 'Clutch elegante para eventos de noche, perfecto para llevar lo esencial.', precio: 59.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Bolso de Mano con Estampado', descripcion: 'Bolso con estampado llamativo, para un look único.', precio: 45.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Mochila Deportiva', descripcion: 'Mochila deportiva, perfecta para llevar todo lo necesario para el gimnasio.', precio: 34.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' },
    { nombre: 'Bolso de Tela', descripcion: 'Bolso de tela con diseño casual, perfecto para el día a día.', precio: 19.99, categoriaId: 5, imagen: '../../assets/images/bolso.png' }
  ];

  productFilter: { [key: string]: number } = {
    selectedCategoryId: 0, // Aquí la propiedad está dentro de un objeto
  };

  filteredProducts = this.products;

  // Método para filtrar productos
  filterByCategory(categoryId: number) {
    console.log(categoryId);
    if (categoryId === 0) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(product => product.categoriaId === categoryId);
    }
  }
  //public folder!: string;
  //private activatedRoute = inject(ActivatedRoute);
  constructor() {}

  ngOnInit() {
    //this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}
