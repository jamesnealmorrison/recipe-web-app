import get from 'lodash/fp/get'
import Select from '../../components/Select'
import compose from 'lodash/fp/flowRight'
import { connect } from 'react-redux'
import { selectIngredients } from '../../../store/ingredients/ingredients.selectors'
import { withAlertError } from '../../../helpers/errorHandlers'
import { getIngredients } from '../../../store/ingredients/ingredients.actions'
import onMount from '../../higherOrderComponents/onMount'

const IngredientSelect = props => (
    <Select
        valueKey="id"
        labelKey="name"
        descriptionRenderer={get('description')}
        label='Ingredient'
        {...props}
    />
)

export default compose(
    connect(
        state => ({ options: selectIngredients(state) }),
        {
            getIngredients: compose(
                withAlertError,
                getIngredients,
            ),
        }
    ),
    onMount(p => p.getIngredients()),
)(IngredientSelect)
