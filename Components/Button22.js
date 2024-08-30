import React from 'react'
import './cstyleui.css'

const Button22 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button22">
        {label}
    </button>
  )
}

export default Button22
