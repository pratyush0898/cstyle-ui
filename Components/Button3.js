import React from 'react'
import './cstyleui.css'

const Button3 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button3">
        {label}
    </button>
  )
}

export default Button3
