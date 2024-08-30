import React from 'react'
import './cstyleui.css'

const Button6 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button6">
        {label}
    </button>
  )
}

export default Button6
