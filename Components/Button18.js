import React from 'react'
import './cstyleui.css'

const Button18 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button18">
        {label}
    </button>
  )
}

export default Button18
