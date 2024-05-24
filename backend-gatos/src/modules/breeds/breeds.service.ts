import { Injectable } from '@nestjs/common';
import * as breeds from "../../models/breeds.json";
@Injectable()
export class BreedsService {
  
  getHello(): object {
    return breeds;
  }
}
