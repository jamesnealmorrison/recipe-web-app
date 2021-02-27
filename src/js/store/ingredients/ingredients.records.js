const { OrderedMap } = require('immutable')
const { Record } = require('immutable')

export const IngredientStateRecord = new Record({
    records: OrderedMap(),
    isLoading: false,
    filter: '',
})

export const IngredientRecord = new Record({
    id: null,
    name: '',
})