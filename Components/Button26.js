import React from 'react'
import './cstyleui.css'

const Button26 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button26">
        {label}
    </button>
  )
}

export default Button26
