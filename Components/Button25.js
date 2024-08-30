import React from 'react'
import './cstyleui.css'

const Button25 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button25">
        {label}
    </button>
  )
}

export default Button25
