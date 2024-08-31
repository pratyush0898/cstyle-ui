import React from 'react'
import './cstyleui.css'

const Button31 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button31">
        {label}
    </button>
  )
}

export default Button31
