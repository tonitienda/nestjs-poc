import { Cat, CreateCatDto } from './types';
import { v4 as uuid } from 'uuid'

const cats : Cat[] = []

export function create(catRequest: CreateCatDto) {
    const id = uuid()
    const cat = { ...catRequest, id }

    cats.push(cat);
    
    return cat
  }

export function findAll(): Cat[] {
    return cats
}