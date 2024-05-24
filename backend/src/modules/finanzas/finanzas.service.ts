import { Injectable } from '@nestjs/common';
import * as finanzasData from '../../models/Finanzas.json';

interface Movimientos {
  id: number;
  monto: string;
  motivo: string;
}

interface Finanzas {
  month: string;
  year: number;
  timestamp: string;
  movimientos: Movimientos[];
}

@Injectable()
export class FinanzasService {
  getHello(): string {
    return 'Hello World!';
  }

  getTotalByMes(mesObjetivo: string): object {
    const mes: Finanzas = finanzasData.find(
      (finazas) => finazas.month === mesObjetivo,
    );
    if (!mes) {
      return {};
    }

    let totalDelMes: number = mes.movimientos.reduce(
      (total, revisando) => total + parseInt(revisando.monto),
      0,
    );
    return { mes: mesObjetivo, total: totalDelMes };
  }

  getMovimientosByMes(mesObjetivo: string): Movimientos[] {
    const mes: Finanzas = finanzasData.find(
      (finazas) => finazas.month === mesObjetivo,
    );

    if (!mes) {
      return [];
    }

    return mes.movimientos;
  }

  listAll(): Finanzas[]
  {
    return finanzasData;
  }

  getMonths(): string[]
  {
    return finanzasData.map(data => data.month);
  }
}
