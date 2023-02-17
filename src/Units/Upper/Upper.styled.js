import styled from 'styled-components'

export const Box = styled.section`
	width:20%;
	height:100px;
	margin-top: 100px;
	margin-left:20%;
	background: ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                        'green' : 'grey': 'blue'};
	`
export const Text = styled.h1`
    width: 190px;
	color:      ${props => props.state.click0 === 0 ? 
	                       props.state.click1 === 0 ?
	                       'green' : 'grey' : 'blue'};
	background:black;
	margin-left: 21%;
	text-align: center;
	padding: 20px;
	`
export const Button = styled.button`
     position: 'relative';
     z-index: 2;
     width: 20%;
     height: 50px;
     background: ${props => props.disabled ? 'black' : 'white'};
     margin-left: 6%;;
    `
