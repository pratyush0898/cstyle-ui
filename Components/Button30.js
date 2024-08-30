import React from 'react'
import './cstyleui.css'

const Button30 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button30">
        {label}
    </button>
  )
}

export default Button30
