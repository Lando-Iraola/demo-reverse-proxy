import { Injectable } from '@nestjs/common';
import * as catData from '../../models/cats.json';
import * as breeds from '../../models/breeds.json';
import * as coats from '../../models/coats.json';

interface CatData {
  name: string;
  age: number;
  breed: { id: number; name: string } | number;
  coat: { id: number; name: string } | number;
}

@Injectable()
export class CatsService {
  private cats: CatData[];
  constructor() {
    this.cats = catData;

    for (const cat of this.cats) {
      cat.breed = breeds.find((breed) => breed.id === cat.breed);
      cat.coat = coats.find((coat) => coat.id === cat.coat);
    }
  }

  public listAll(): object {
    return this.cats;
  }

  public findByName(name: string) {
    return (
      this.cats.find(
        (cat) => cat.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      ) || {}
    );
  }

  public findByCoat(coat: string) {
    return (
      this.cats.filter(
        (cat) =>
          typeof cat.coat === 'object' &&
          cat.coat.name.toLocaleLowerCase() === coat.toLocaleLowerCase(),
      ) || []
    );
  }

  public findByBreed(breed: string) {
    return (
      this.cats.filter(
        (cat) =>
          typeof cat.breed === 'object' &&
          cat.breed.name.toLocaleLowerCase() === breed.toLocaleLowerCase(),
      ) || []
    );
  }

  public findByBreedAndCoat(breed: string, coat: string) {
    return (
      this.cats.filter(
        (cat) =>
          typeof cat.breed === 'object' &&
          typeof cat.coat === 'object' &&
          cat.breed.name.toLocaleLowerCase() === breed.toLocaleLowerCase() &&
          cat.coat.name.toLocaleLowerCase() === coat.toLocaleLowerCase(),
      ) || []
    );
  }
}
