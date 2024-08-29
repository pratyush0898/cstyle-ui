import React from 'react'
import './cstyleui.css'

const Button1 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button1">
        {label}
    </button>
  )
}

export default Button1
