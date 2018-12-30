import React, { Component } from 'react';
import Display from '../Display/Display';
import './Calculator.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    numbers: [],
    operators: [],
    selectedOperator: '',
    storedValue: '',
  }

  callOperator = () => {
    console.log('call operation');
  }

  setOperator = () => {
    console.log('set operator');
  }

  updateDisplay = () => {
    console.log('update display');
  }

  render = () => {
    // unpack the component state by using Object Destructuring
    const { displayValue } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
      </div>
    );
  }
}

export default Calculator;