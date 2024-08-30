import React from 'react'
import './cstyleui.css'

const Button20 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button20">
        {label}
    </button>
  )
}

export default Button20