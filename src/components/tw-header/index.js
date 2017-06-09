import React from 'react'
import Typist from 'react-typist'
import TypeWriter from 'react-typewriter'

import './style.scss'

export default class TWHeader extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			header: "Junior Developer"
		}

	}

	componentDidMount() {
		this.setState({header: this.props.header})
	}

	componentWillReceiveProps(nextProps) {
		this.setState({header: nextProps.header})
	}

	render() {
		return(
			<div >
			<Typist>
				{this.state.header}
			</Typist>

			{/*<TypeWriter initDelay={4000} maxDelay={100} typing={1}>
			{this.state.header}
			</TypeWriter>*/}
			</div>
		)
	}
}