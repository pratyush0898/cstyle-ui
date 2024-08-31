import React from 'react'
import './cstyleui.css'

const Button41 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button41">
        {label}
    </button>
  )
}

export default Button41
