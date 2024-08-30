import React from 'react'
import './cstyleui.css'

const Button24 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button24">
        {label}
    </button>
  )
}

export default Button24
