import React from 'react'
import './cstyleui.css'

const Button12 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button12">
        {label}
    </button>
  )
}

export default Button12
