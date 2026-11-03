import { Component } from '@angular/core';
import { ProducteLab, PRODUCTES_LAB } from '../producte-lab';

@Component({
  selector: 'app-botiga',
  imports: [],
  templateUrl: './botiga.html',
  styleUrl: './botiga.css',
})
export class Botiga {
  title='Botiga de Bindings';
  productes :  ProducteLab[] = PRODUCTES_LAB;
  modeCompacte = false;
  carret: number[] =  [];
  
  /*creea un mètode per mostrar el que hi ha al carret */
  mostrar(): string{
    let resultado = '';
    for(let id of this.carret){
      resultado += id+ ' ';
    }
    return resultado;
  }

  teEstoc(p: ProducteLab): boolean {
    return p.estoc > 0;
  }

  producteDestacat(p: ProducteLab): boolean {
    return p.preu > 500;
  }

  classesFitxa(p: ProducteLab): string {
    const classes =  ['fitxa'];
    if(p.preu > 500) classes.push('destacat');
    if(p.preu < 50) classes.push('oferta');
    if(p.estoc === 0) classes.push('esgotat');
    return classes.join(' ');
  }

  imatgeSegura(p: ProducteLab): string {
    return p.imatgeURL || 'https://via.placeholder.com/150';
  }

  urlFitxa(p: ProducteLab): string {
    return `https://botiga.cat/producte/${p.id}`;
  }

  afegir(p: ProducteLab) : void {
    if (this.teEstoc(p)){
      this.carret.push(p.id);
      p.afegitAlCarret = true;
    }
  }


}