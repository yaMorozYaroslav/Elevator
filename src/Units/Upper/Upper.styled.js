import styled from 'styled-components'

export const Box = styled.section`
	width:20%;
	height:100px;
	margin-top: 100px;
	margin-left:40%;
	background: ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                        'green' : 'grey': 'blue'};
	`
export const Text = styled.h1`
	color:      ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                       'green' : 'grey' : 'blue'};
	background:black;
	text-align: center;
	`
export const Button = styled.button`
     position: 'relative';
     z-index: 2;
     width: 20%;
     height: 50px;
     background: ${props => props.disabled ? 'black' : 'white'};
     margin-left: 20%;;
    `
