export interface ICurrency {
  key: string;
  name: string;
  unit: Unit;
  date: number;
  value: number;
}

export enum Unit {
  Dolar = 'dolar',
  Pesos = 'pesos',
  Porcentual = 'porcentual',
}
