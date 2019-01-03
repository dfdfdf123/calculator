import React from 'react';
import Key from '../Key/Key';
import './Keypad.css';

const Keypad = ({
  callOperator,
  numbers,
  operators,
  setOperator,
  updateDisplay,
}) => {
  const numberKeys = numbers.map(number => <p key={number}>{number}</p>);

  const operatorKeys = operators.map(operator => <p key={operator}>{operator}</p>);

  return (
    <div className="keypad-container">
      <div className="numbers-container">
        {numberKeys}
      </div>
      <div className="operators-container">
        {operatorKeys}
      </div>
      <Key
        keyAction={callOperator}
        keyType=""
        keyValue=""
      />
    </div>
  );
}

export default Keypad;
