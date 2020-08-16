import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  yourData: any = [];
  yourDescription: any = [];

  constructor() { 
    this.yourData = [
      'Alejandro',
      47,
      ['Café','Coca Cola','Hamburguer'],
      'Boa Vista',
      '../assets/EsteEraEu.jpg'
    ],
    this.yourDescription = [
      'Meu nome é:',
      'Minha idade é:',
      'Eu gosto de:',
      'A minha cidade é:',
      'Este era eu:'
    ]
  }
  getData(): any{
    return this.yourData;
  }
  getDescription(): any{
    return this.yourDescription;
  }
}
