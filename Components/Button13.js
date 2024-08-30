import React from 'react'
import './cstyleui.css'

const Button13 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button13">
        {label}
    </button>
  )
}

export default Button13
