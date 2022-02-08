import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor','Capitan América'];
    heroesBorrados: string[] = []
    mostrarHeroesBorrados = false;

    borrarHeroe() {
      const heroeBorrado = this.heroes.shift() || '';
      if (heroeBorrado !== ''){
        this.mostrarHeroesBorrados = true;
        this.heroesBorrados.push(heroeBorrado)
      }
    }
}
