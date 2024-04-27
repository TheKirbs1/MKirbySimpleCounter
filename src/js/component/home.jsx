import React from "react";
import PropTypes from 'prop-types';
import SimpleCounter from "./SimpleCounter";
import calculateSeconds from "../lib/time";

// function calculateSeconds(aCounter, placeValue) {
// 	return Math.floor(aCounter / placeValue) % 10
// }

const Home = (props) => {

	return (
		<SimpleCounter
			hundredThousandsDigit = {calculateSeconds(props.counter, 100000)}
			tenThousandsDigit = {calculateSeconds(props.counter, 10000)}
			thousandsDigit = {calculateSeconds(props.counter, 1000)}
			hundredsDigit = {calculateSeconds(props.counter, 100)}
			tensDigit = {calculateSeconds(props.counter, 10)} 
			onesDigit = {calculateSeconds(props.counter, 1)}
		/>
	);
};

Home.propTypes = {
	hundredThousandsDigit: PropTypes.number,
    tenThousandsDigit: PropTypes.number,
    thousandsDigit: PropTypes.number,
    hundredsDigit: PropTypes.number,
    tensDigit: PropTypes.number,
    onesDigit: PropTypes.number,
}

export default Home;
