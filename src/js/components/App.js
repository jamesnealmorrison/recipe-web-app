import React from 'react';
import List from './List';
import IngredientSelect from '../shared/containers/IngredientSelect';
import connectField from '../shared/higherOrderComponents/connectField'
import { formValueSelector, formValues, reduxForm } from 'redux-form/immutable'
import compose from 'lodash/fp/flowRight'

const ConnectedIngredientSelect = connectField(IngredientSelect)
export const JIM_FORM = 'forms/JIM_FORM'

const onSubmit = () => console.log('SUBMITTED!')
const onSubmitSuccess = () => console.log('SUBMITTED SUCCESS!')


export class App extends React.PureComponent {
    render() {
        const {
            handleSubmit,
        } = this.props
        return (
          <>
          <form onSubmit={handleSubmit}>
            <ConnectedIngredientSelect
                labelOnSide
                name="ingredient"
            />
            <div>
              <h2>Ingredients</h2>
              <List />
            </div>
            <div>
              <h2>Add a new ingredient</h2>
            </div>
        </form>
          </>
        )
    }
}

export default compose(
  reduxForm({
    form: JIM_FORM,
    onSubmit,
    onSubmitSuccess,
  }),
)(App)