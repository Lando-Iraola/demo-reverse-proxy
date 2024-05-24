import { Injectable } from '@nestjs/common';
import * as coats from "../../models/coats.json";

@Injectable()
export class CoatsService {
  getHello(): object {
    return coats;
  }
}
