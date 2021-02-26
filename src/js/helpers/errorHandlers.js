import compose from 'lodash/fp/flowRight'
import { showAlertError } from '../store/errors/errors.actions'

export const withErrorHandler = handler => fn => dispatch =>
    dispatch(fn).catch(compose(dispatch, handler))

export const withAlertError = withErrorHandler(showAlertError)