import React from 'react'
import './cstyleui.css'

const Button14 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button14">
        {label}
    </button>
  )
}

export default Button14
