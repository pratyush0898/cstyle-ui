import React from 'react'
import './cstyleui.css'

const Button11 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button11">
        {label}
    </button>
  )
}

export default Button11
