import ingredients from './ingredients/ingredients.reducer'
import mapValues from 'lodash/fp/mapValues'
import always from 'lodash/fp/constant'
import { combineReducers } from 'redux-immutable'

const { Record } = require('immutable')

const reducers = {
    ingredients,
}

export const GlobalStateRecord = new Record(
    mapValues(always(undefined), reducers),
)

export default combineReducers(reducers)