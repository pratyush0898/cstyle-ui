import React from 'react'
import './cstyleui.css'

const Button4 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button4">
        {label}
    </button>
  )
}

export default Button4
