import { Controller, Get, Param } from '@nestjs/common';
import { FinanzasService } from './finanzas.service';

@Controller()
export class FinanzasController {
  constructor(private readonly finanzasService: FinanzasService) {}

  @Get()
  listAll(): object {
    return this.finanzasService.listAll();
  }

  @Get("totalByMes/:mes")
  getTotalByMes(@Param("mes") mes: string): object{
    return this.finanzasService.getTotalByMes(mes);
  }

  @Get("movimientosByMes/:mes")
  getMovimientosByMes(@Param("mes") mes: string): object{
    return this.finanzasService.getMovimientosByMes(mes);
  }

  @Get("months")
  getMonths(): string[]
  {
    return this.finanzasService.getMonths();
  }
}
