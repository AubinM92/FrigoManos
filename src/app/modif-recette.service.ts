import { Injectable } from '@angular/core';
import { Recette } from './model/Recette';
import { Ingredient } from './model/Ingredient';

@Injectable({
  providedIn: 'root'
})
export class ModifRecetteService {

  recette: Recette = new Recette();
  ingredients: Ingredient[]

  constructor() { }
}
