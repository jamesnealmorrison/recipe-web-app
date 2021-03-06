import { ADD_INGREDIENTS } from './ingredients.types'

const axios = require('axios')

export const addIngredients = payload => ({
    type: ADD_INGREDIENTS,
    payload,
})

export const getIngredients = () => async (dispatch, getState) => {
    const apiClient = axios.create({
        baseURL: 'http://localhost:8080',
        headers: {"Access-Control-Allow-Origin": "*"}
    })

    apiClient.get('/allIngredients')
        .then(function(response) {
            dispatch(addIngredients(response.data))
        })
        .catch(function (error) {
            console.log('In error function! error = ')
            console.log(error)
        })
        .then(function() {
        })
}