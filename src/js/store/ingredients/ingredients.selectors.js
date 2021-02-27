export const selectIngredients = state => {
console.log("JIM. IN selectIngredients.")
    const ingredients =  state.ingredients.records
        .toList()
        .sort((a, b) => a.name.localeCompare(b.name))
    console.log('ingredients = ')
    console.log(ingredients)
    return ingredients
}

export const selectIngredientsForDropDownList = state => {
    const ingredients = state.ingredients.records
        .toList()
        .sort((a, b) => a.name.localeCompare(b.name))

    const mappedIngredients = ingredients.map(ingredient => {
        return {value: ingredient.id, label: ingredient.name}
    })
    return mappedIngredients
}