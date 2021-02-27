import get from 'lodash/fp/get'
import Select from '../../components/Select'
import compose from 'lodash/fp/flowRight'
import { connect } from 'react-redux'
import { selectIngredientsForDropDownList } from '../../../store/ingredients/ingredients.selectors'
import { withAlertError } from '../../../helpers/errorHandlers'
import { getIngredients } from '../../../store/ingredients/ingredients.actions'
import onMount from '../../higherOrderComponents/onMount'

const IngredientSelect = props => (
    <> Ingredient
        <Select
            {...props}
        />
    </>
)

export default compose(
    connect(
        state => ({ options: selectIngredientsForDropDownList(state) }),
        {
            getIngredients: compose(
                withAlertError,
                getIngredients,
            ),
        }
    ),
    onMount(p => p.getIngredients()),
)(IngredientSelect)
