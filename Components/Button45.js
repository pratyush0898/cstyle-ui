import React from 'react'
import './cstyleui.css'

const Button45 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button45">
        {label}
    </button>
  )
}

export default Button45
