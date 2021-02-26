import { SHOW_ERROR } from './errors.types'

export const showAlertError = ({ title = '', message = '', stack = '', componentStack = '' }) => ({
    type: SHOW_ERROR,
    payload: { title, message, stack, componentStack },
})