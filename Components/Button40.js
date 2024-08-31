import React from 'react'
import './cstyleui.css'

const Button40 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button40">
        {label}
    </button>
  )
}

export default Button40
