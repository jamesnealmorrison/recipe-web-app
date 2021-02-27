import { ADD_INGREDIENTS } from './ingredients.types'

export const addIngredients = payload => ({
    type: ADD_INGREDIENTS,
    payload,
})

export const getIngredients = () => async (dispatch, getState) => {
    // JIM FILL IN THIS STUFF
    const ingredients = [
        { id: 92, name: "Butternut Squash" },
        { id: 1, name: "Boneless Skinless Chicken Breast" },
    ]

    dispatch(addIngredients(ingredients))
}