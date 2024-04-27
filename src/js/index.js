//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/SimpleCounter.css"

//import your own components
import Home from "./component/home.jsx";

//render your react application
let counter=0;
setInterval(function() {ReactDOM.render(<Home counter={counter} />, document.querySelector("#app"));
++counter}, 1000)


// setInterval (callback Function(), 3000(for 3 seconds))