import React from 'react'
import compose from 'lodash/fp/flowRight'
import DesktopSelect from './DesktopSelect'
import PropTypes from 'prop-types'
import { list } from 'react-immutable-proptypes'
import allPass from 'lodash/fp/overEvery'

export class SelectBase extends React.PureComponent {
    static propTypes = {
        options: PropTypes.oneOfType([list, PropTypes.array]),
        value: PropTypes.any,
        valueKey: PropTypes.string,
        labelKey: PropTypes.string,
    }

    static defaultProps = {
        noResultsText: 'No Results Found...',
        descriptionRenderer: () => null,
        filter: () => true,
        options: [],
        placeholder: '',
    }

    constructor(props) {
        super(props)
        this.state = {
            filter: '',
            value: this.getValueFromProps(props)
        }
    }

    getValueFromProps(props) {
        if (
            !props.value ||
            (props.value[props.valueKey] && props.value[props.labelKey])
        ) {
            return props.value
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        console.log('JIM!!! nextProps = ')
        console.log(nextProps)
    }

    filterOptions = (options, filter) => {
        const filterByText = option => {
            const trimmedFilter = filter.trim('').toLowerCase()
            return trimmedFilter
                ? this.props
                    .safeFormatMessage(option[this.props.labelKey])
                    .toLowerCase()
                    .contains(trimmedFilter)
                : true
        }
        console.log('jim. options = ')
        console.log(options)
        console.log('jim. this.props = ')
        console.log(this.props)
        return options
//        return options.filter(allPass([this.props.filter, filterByText]))
    }

  render() {
    const SelectComponent = DesktopSelect
    return (
        <SelectComponent
            {...this.props}
            options={this.filterOptions(this.options, this.state.filter)}
            filterOptions={options => options}
        />
    )
  }
}

export default SelectBase