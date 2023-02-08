import styled from 'styled-components'

export const Box = styled.section`
	width:100px;
	height:100px;
	background: ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                        'green' : 'grey': 'blue'};
	`
export const Text = styled.h1`
	color:      ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                       'green' : 'grey' : 'blue'};
	background:black;
	`
