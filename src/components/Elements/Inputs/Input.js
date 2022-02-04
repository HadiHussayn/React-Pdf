import React from 'react';
import "./style.css"

export default function Input(props) {
  return <input className={`input-root ${props.height ? "h-30" : null}, ${props.block ? " block" : null}`} {...props} />;
}
