import React from 'react'
import './cstyleui.css'

const Button16 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button16">
        {label}
    </button>
  )
}

export default Button16
