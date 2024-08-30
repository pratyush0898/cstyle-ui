import React from 'react'
import './cstyleui.css'

const Button2 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button2">
        {label}
    </button>
  )
}

export default Button2
