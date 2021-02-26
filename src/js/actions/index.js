import { ADD_INGREDIENT } from '../constants/action-types'

export function addIngredient(payload) {
  return { type: ADD_INGREDIENT, payload }
}