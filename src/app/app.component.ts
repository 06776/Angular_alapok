import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Alapok';
  oszlopok: any;
  ujTanar: any = {};
  objektum: any = [
    { name: 'Péter', age: 20, hair: 'barna' },
    { name: 'Attila', age: 25, hair: 'fekete' },
    { name: 'Krisztina', age: 30, hair: 'szőke' },
    { name: 'Ágnes', age: 35, hair: 'vörös' },
  ];

  uj() {
    this.objektum.push(this.ujTanar);
    // this.ujTanar = {};
  }

  torol(tanar: any, i: number) {
    console.log('i: ', i);
    console.log('Törlés: ', tanar);
    // this.objektum.splice(i, 1); (törlés)
    this.objektum = this.objektum.filter((e: any) => e != tanar);
  }

  constructor(private config: ConfigService) {
    this.oszlopok = config.getOszlopok();
  }
}
