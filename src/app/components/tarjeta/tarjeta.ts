
import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjeta',
  imports: [],
  templateUrl: './tarjeta.html',
  styleUrl: './tarjeta.css',
})
export class Tarjeta {
  nom: String = 'Ordinador Gamer Pro';
  preu: number = 1299;
  estoc: number = 5;

  afegitAlCarret = false;

  producte: Producte = {
    id: 1,
    nom: 'Ordinador Gamer Pro',
    preu: 1299,
    estoc: 5,
    categoria: 'Informàtica',
  };

  producte2: Producte = {
    id: 2,
    nom: 'Ordinador Gamer',
    preu: 1099,
    estoc: 2,
    categoria: 'Informàtica',
  };

  get preuAmbIva(): number {
    return this.producte.preu * 1.21;
  }

  get estatDisponibilitat(): string {
    if (this.producte.estoc === 0) return 'Esgotat';
    if (this.producte.estoc < 3) return 'Últimes unitats';
    return 'Disponible';
  }

  get teEstoc(): boolean {
    return this.producte.estoc > 0;
  }

  afegir(): void {
    this.afegitAlCarret = true;
  }
}
