import { Injectable } from '@nestjs/common';
import * as personal from "../../models/Personal.json";

@Injectable()
export class PersonalService {
  getPersonal(): object{
    return personal;
  }
}
