export const selectIngredients = state =>
    state.ingredients.records
        .toList()
        .sort((a, b) => a.name.localeCompare(b.name))