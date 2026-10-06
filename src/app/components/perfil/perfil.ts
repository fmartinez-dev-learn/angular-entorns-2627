import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css',
})
export class Perfil {
  nom: string = 'Denis';
  cognom : string = 'Tineo Dias'
  edat : number = 21;
  cicle : string = 'DAW2';

  get nomComplet() : string{
    return this.nom + " " + this.cognom; 
  }

}

