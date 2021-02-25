import get from 'lodash/fp/get'
import Select from '../../components/Select'

const IngredientSelect = props => (
    <Select
        valueKey="id"
        labelKey="name"
        descriptionRenderer={get('description')}
        label='Ingredient'
        {...props}
    />
)

export default IngredientSelect