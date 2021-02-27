import React from 'react'
import compose from 'lodash/fp/flowRight'
import PropTypes from 'prop-types'
import { list } from 'react-immutable-proptypes'
import allPass from 'lodash/fp/overEvery'
import Select from 'react-select'

export class SelectBase extends React.PureComponent {
    render() {
        return (
            <Select options={ this.props.options } />
        )
    }
}

export default SelectBase