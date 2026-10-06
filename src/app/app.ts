import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producte } from './interfaces/producte';
import { Producte as ProducteClass } from './producte'; //importem la classe producte assignant un alias
import { pokemon } from './interfaces/pokemon';
import { findById, formatarElement, getActius } from './funcions';
import { Alumne } from './alumne';
import { Tarjeta } from './components/tarjeta/tarjeta';
import { Perfil } from './components/perfil/perfil';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Tarjeta, Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-entorns-2627');

/*
prod1 : Producte = {
    id: 1,
    nom: 'a',
    preu: 5,
    estoc: 4,
    categoria: 'Informatica'
  };

  prod2 : Producte = {
    id: 2,
    nom: 'b',
    preu: 6,
    estoc: 3,
    categoria: 'Mueble'
  };

  prod3 : Producte = {
    id: 3,
    nom: 'y',
    preu: 15,
    estoc: 0,
    categoria: 'alegria'
  };

  biblioteca : Producte[] = [this.prod1, this.prod2, this.prod3];
/*
  p1 = new ProducteClass('Teclat', 89.99);

  constructor(){
  console.log(this.p1.toString());
  console.log(this.p1.getPreuAmbIVA());
  }

  // 1. AFEGIR UN MÈTODE A LA CLASSE PRODUCTE descripcio() que retorni un string amb nom i preu
  // 2. MÈTODE descompte() que retorni el preu amb un 10% de rebaixa
  // 3. Crear un nou producte i mostreu el descompte per consola
  prod4 = new ProducteClass('t', 5);
  // 4. Cercar la manera de mostrar el descompte amb un popup
  constructor(){
  console.log(this.prod4.descompte());
  alert(this.prod4.descompte());
  }

  p1 : pokemon = {id:1, nom: 'Charmander', tipus: 'Foc', atac: 12, hp: 36};
  p2 : pokemon = {id:2, nom: 'Squirtle', tipus: 'Aigua', atac: 16, hp: 28, estat: false};
  p3 : pokemon = {id:3, nom: 'Bulbasaur', tipus: 'Planta', atac: 8, hp: 44, estat: true};
  p4 : pokemon = {id:4, nom: 'Pikachu', tipus: 'Electric', atac: 14, hp: 32, estat: true};
  p5 : pokemon = {id:5, nom: 'MewTwo', tipus: 'Psiquic', atac: 155, hp: 255};

  dex : pokemon[] = [this.p1, this.p2, this.p3, this.p4, this.p5];

  a1 = new Alumne('Alex', 15, 'DAW', [1,5,6,3]);
  a2 = new Alumne('Biel', 19, 'DAM', [10,6,9,4]);

  constructor(){
    console.log(getActius(this.dex));
    console.log(findById(this.dex, 1));
    console.log(formatarElement(this.dex[4]));
    console.log(this.a1.presentar());
    console.log(this.a1.haAprobat());
    console.log(this.a2.presentar());
    console.log(this.a2.haAprobat());
  }*/


ciutats : string[] = ['Barcelona', 'Lleida', 'Girona', 'Tarragona'];

productes: Producte[] = [
  {id: 1, nom: 'Teclat', preu: 5, estoc: 4, categoria: 'Informatica'},
  {id: 2, nom: 'Mesa', preu: 6, estoc: 3, categoria: 'Mueble'}
];

noms : string[] = ['Flavio', 'Luis', 'Augusto', 'Renan', 'Ronaldo'];


}
