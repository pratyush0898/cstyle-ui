import React from 'react'
import './cstyleui.css'

const Button23 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button23">
        {label}
    </button>
  )
}

export default Button23
