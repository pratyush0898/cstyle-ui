import React from 'react'
import './cstyleui.css'

const Button5 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button5">
        {label}
    </button>
  )
}

export default Button5
