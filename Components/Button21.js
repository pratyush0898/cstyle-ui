import React from 'react'
import './cstyleui.css'

const Button21 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button21">
        {label}
    </button>
  )
}

export default Button21
