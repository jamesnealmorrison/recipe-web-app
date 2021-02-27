import React from 'react'
import compose from 'lodash/fp/flowRight'
import PropTypes from 'prop-types'
import { list } from 'react-immutable-proptypes'
import allPass from 'lodash/fp/overEvery'
import Select from 'react-select'

    const options = [
                   { value: 'chocolate', label: 'Chocolate' },
                   { value: 'strawberry', label: 'Strawberry' },
                   { value: 'vanilla', label: 'Vanilla' }
                 ]

export class SelectBase extends React.PureComponent {
    render() {
    console.log('Jim. this.props = ')
    console.log(this.props)
    console.log('options = ')
    console.log(this.props.options)

        return (
            <Select options={ this.props.options } />
        )
    }
}

export default SelectBase