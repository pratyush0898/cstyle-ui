import React from 'react'
import './cstyleui.css'

const Button8 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button8">
        {label}
    </button>
  )
}

export default Button8
