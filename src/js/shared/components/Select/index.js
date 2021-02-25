import React from 'react'
import compose from 'lodash/fp/flowRight'
import DesktopSelect from './DesktopSelect'

export class SelectBase extends React.PureComponent {
  render() {
    const SelectComponent = DesktopSelect
    return (
        <SelectComponent
        />
    )
  }
}

export default SelectBase