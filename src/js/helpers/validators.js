import anyPass from 'lodash/fp/overSome'
import isNil from 'lodash/fp/isNil'
import compose from 'lodash/fp/flowRight'
import equals from 'lodash/fp/isEqual'
import trim from 'lodash/fp/trim'

const isWhitespace = compose(
    equals(''),
    trim,
)
const validate = (msg, predicate) => value => predicate(value) ? msg : undefined

export const noMessageRequired = validate(' ', anyPass([isNil, isWhitespace]))