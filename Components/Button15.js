import React from 'react'
import './cstyleui.css'

const Button15 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button15">
        {label}
    </button>
  )
}

export default Button15
