import React from 'react';
import {connect} from 'react-redux';
import {lift} from '../../actions/';
import './Button.css';

const Button = ({value, lift, name})=>{
	return(
		<div className="button-container">
		  <div className="button-wrapper">
		    <div className="button-inner">
		      <button onClick={(e)=>lift(e)}
                name={name}>
                            {value}</button>
                  </div>
                 </div>
                </div>
		      )
            }
            export default connect(null, {lift})(Button);