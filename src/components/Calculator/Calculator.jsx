import React, { Component } from 'react';
import Display from '../Display/Display';
import './Calculator.css';
import Keypad from '../Keypad/Keypad';

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
    const { displayValue, numbers, operators } = this.state;

    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad 
          callOperator={this.callOperator}
          numbers={numbers}
          operators={operators}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
        />
      </div>
    );
  }
}

export default Calculator;