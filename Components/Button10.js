import React from 'react'
import './cstyleui.css'

const Button10 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button10">
        {label}
    </button>
  )
}

export default Button10
