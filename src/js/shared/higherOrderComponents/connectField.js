import { Field } from 'redux-form/immutable'
import React from 'react'

export const connectField = Component => {
    const FieldComponent = ({ input, meta, ...props }) => (
        <Component
            {...props}
            {...input}
            onBlur={() => input.onBlur(input.value)}
            focused={meta.active}
            error={meta.touched ? meta.error : undefined}
        />
    )

    return props => <Field {...props} component={FieldComponent} />
}

export default connectField