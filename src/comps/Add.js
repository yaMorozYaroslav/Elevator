import React from 'react'
import {connect} from 'react-redux'
import {addSide} from '../redux/actCreates'
class Add extends React.Component{
	constructor(props){
		super(props)
		this.state={input: ''}
	}
	updateInput = input => {
		this.setState({input})
	}
	handleAdd =()=>{
		this.props.addSide(this.state.input)
		this.setState({input: ''})
	}

	render(){
		return(
           <div>
              <input
                  onChange={e => this.updateInput(e.target.value)}
                  value={this.state.input} />
               <button onClick={this.handleAdd}>AddSide</button>
           </div>
	    )
	}
}
const mapState = state => {
	return {sides: state.sides}
}
export default connect(mapState, {addSide})(Add)