import { ADD_INGREDIENTS } from './ingredients.types'

import {
    IngredientRecord,
    IngredientStateRecord,
} from './ingredients.records'

const { OrderedMap } = require('immutable')

export default function ingredientsReducer(
    state = IngredientStateRecord(),
    action,
) {
    switch (action.type) {
        case ADD_INGREDIENTS:
            return state.set(
                'records',
                OrderedMap(action.payload.map(r => [r.id, IngredientRecord(r)])),
            )
        default:
            return state
    }
}