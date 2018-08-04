import "./index.css";
import numeral from "numeral";

/* eslint-disable no-console */
export const course = function () {

  const courseValue = numeral(1000).format('$0,0.00');
  console.log(`I would pay ${courseValue} for this awesome course!`);

  function get(){
    return courseValue
  }

  return {
    get: get
  };

};

export default course();
