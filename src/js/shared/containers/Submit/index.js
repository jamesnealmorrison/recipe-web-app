import PropTypes from 'prop-types'
import compose from 'lodash/fp/flowRight'
import { connect } from 'react-redux'
import {
    isInvalid,
    isPristine,
    isSubmitting,
    submit,
} from 'redux-form/immutable'

export const SubmitBase = ({
    submitting,
    invalid,
    pristine,
    text,
    pendingText,
    submit,
    form,
    shouldBeDisabled,
    ...props
}) => (
    <button onClick={() => submit(form)} >
        {submitting ? pendingText : text}
    </button>
)

SubmitBase.propTypes = {
    submitting: PropTypes.bool,
    invalid: PropTypes.bool,
    pristine: PropTypes.bool,
    text: PropTypes.node.isRequired,
    pendingText: PropTypes.node.isRequired,
    submit: PropTypes.func,
    form: PropTypes.string.isRequired,
    shouldBeDisabled: PropTypes.func,
}

SubmitBase.defaultProps = {
    shouldBeDisabled: p => p.submitting || p.invalid || p.pristine,
}

export default compose(
    connect(
        (state, ownProps) => ({
            submitting: isSubmitting(ownProps.form)(state),
            invalid: isInvalid(ownProps.form)(state),
            prisine: isPristine(ownProps.form)(state),
        }),
        { submit },
    )
)(SubmitBase)