import React, { useEffect } from 'react';
import { connect } from 'react-redux';
//import './lift.css';

const Lift = ({ floor }) => {

  const flr = floor;


  useEffect(() => {
    const person = document.querySelector('.person');
    switch (flr) {
      case 'G':
        person.style.bottom = 80 + 'px';
        break
      case '1':
        person.style.bottom = 150 + 'px';
        break
      case '2':
        person.style.bottom = 220 + 'px';
        break
      case '3':
        person.style.bottom = 290 + 'px';
        break
      case '4':
        person.style.bottom = 360 + 'px';
        break
      case '5':
        person.style.bottom = 430 + 'px';
        break
      case '6':
        person.style.bottom = 500 + 'px';
        break
      case '7':
        person.style.bottom = 570 + 'px';
        break
      default:
        person.style.bottom = 5 + 'px';
    }
  }, [flr])

  return (
    <div className="person">{floor}</div>
  )
}
const mapStateToProps = (state) => ({
  floor: state.buttonReducer.floor,
})
export default connect(mapStateToProps)(Lift);