import React from 'react'

const onMount = fn => Component => class Mounter extends React.Component {
    componentDidMount() {
        fn(this.props)
    }

    render() {
        return <Component {...this.props} />
    }
}

export default onMount