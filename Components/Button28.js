import React from 'react'
import './cstyleui.css'

const Button28 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button28">
        {label}
    </button>
  )
}

export default Button28
