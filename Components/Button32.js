import React from 'react'
import './cstyleui.css'

const Button32 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button32">
        {label}
    </button>
  )
}

export default Button32
