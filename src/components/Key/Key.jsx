import React from 'react';
import './Key.css';

const Key = ({ keyAction, keyType, keyValue }) => (
  <div
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
  >
    <p className="key-value">
      {keyValue}
    </p>
  </div>
);

export default Key;
