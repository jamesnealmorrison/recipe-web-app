export const selectIngredients = state => state.ingredients.records
        .toList()
        .sort((a, b) => a.name.localeCompare(b.name))

export const selectIngredientsForDropDownList = state => {
    const ingredients = state.ingredients.records
        .toList()
        .sort((a, b) => a.name.localeCompare(b.name))

    const mappedIngredients = ingredients.map(ingredient => {
        return {value: ingredient.id, label: ingredient.name}
    })
    return mappedIngredients
}