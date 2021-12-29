import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    this.cats.push(cat);
    console.log('pushed')
    console.log(this.cats.length)
  }

  findAll(): Cat[] {
    console.log(`cats:`, this.cats)
    return this.cats;
  }
}