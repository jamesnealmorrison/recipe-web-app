import curry from 'lodash/fp/curry'
import cond from 'lodash/fp/cond'
import negate from 'lodash/fp/negate'
import T from 'lodash/fp/stubTrue'
import identity from 'lodash/fp/identity'

const unless = curry((f, g) => cond([[negate(f), g], [T, identity]]))

export default unless