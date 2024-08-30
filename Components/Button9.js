import React from 'react'
import './cstyleui.css'

const Button9 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button9">
        {label}
    </button>
  )
}

export default Button9
