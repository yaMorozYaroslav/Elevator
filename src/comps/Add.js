import React from 'react'

class Add extends React.Component{
	constructor(props){
		super(props)
		this.state={input: ''}
	}
	updateInput = input => {
		this.setState({input})
	}
	handleAdd =()=>{}

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
export default Add