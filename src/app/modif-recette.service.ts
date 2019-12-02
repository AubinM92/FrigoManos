import { Injectable } from '@angular/core';
import { Recette } from './model/Recette';
import { Ingredient } from './model/Ingredient';
import { ElementRecette } from './model/ElementRecette';

@Injectable({
  providedIn: 'root'
})
export class ModifRecetteService {

  recette: Recette = new Recette();
  ingredients: Ingredient = new Ingredient();
  elem : ElementRecette = new ElementRecette();

  constructor() { }
}
