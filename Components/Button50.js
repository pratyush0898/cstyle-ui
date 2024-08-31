import React from 'react'
import './cstyleui.css'

const Button50 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button50">
        {label}
    </button>
  )
}

export default Button50
