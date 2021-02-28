import T from 'lodash/fp/stubTrue'
import always from 'lodash/fp/constant'
import cond from 'lodash/fp/cond'
import isFunction from 'lodash/fp/isFunction'
import unless from './unless'

export default function ifProp(predicate, pass, fail) {
    return cond([
        [
            unless(isFunction, key => props => props[key] === 0 || !! props[key]) (
                predicate,
            ),
            unless(isFunction, always)(pass),
        ],
        [T, unless(isFunction, always)(fail)],
    ])
}