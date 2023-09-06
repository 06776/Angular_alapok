import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  oszlopok = [
    { key: 'name', texthu: 'Név', type: 'plain' }, // 'plain': allando, nem valtoztathato
    { key: 'age', texthu: 'Kor', type: 'number' },
    { key: 'hair', texthu: 'Hajszín', type: 'text' },
  ];

  constructor() { }

  getOszlopok() {
    return this.oszlopok;
  }
}
