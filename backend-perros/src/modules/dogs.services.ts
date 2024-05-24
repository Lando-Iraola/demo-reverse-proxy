import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
  getBark(): string {
    return Math.floor(Math.random() * 10) === 6 ? "Bau bau" : 'Guau guau';
  }
}
