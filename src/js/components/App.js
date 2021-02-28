import React from 'react';
import IngredientSelect from '../shared/containers/IngredientSelect';
import connectField from '../shared/higherOrderComponents/connectField'
import { formValueSelector, formValues, reduxForm } from 'redux-form/immutable'
import compose from 'lodash/fp/flowRight'
import { noMessageRequired } from '../helpers/validators'
import Submit from '../shared/containers/Submit'

const ConnectedIngredientSelect = connectField(IngredientSelect)

const onSubmit = () => console.log('SUBMITTED!')
const onSubmitSuccess = () => console.log('SUBMITTED SUCCESS!')


export class App extends React.PureComponent {
    render() {
        const {
            handleSubmit,
        } = this.props
        return (
          <form onSubmit={handleSubmit}>
            <ConnectedIngredientSelect />
            <Submit
                form='forms/JIM_FORM'
                text='Submit Recipe'
            />
          </form>
        )
    }
}

export default compose(
  reduxForm({
    form: 'forms/JIM_FORM',
    onSubmit,
    onSubmitSuccess,
  }),
)(App)