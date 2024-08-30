import React from 'react'
import './cstyleui.css'

const Button7 = ({ label, onClick, style }) => {
  return (
    <button onClick={onClick} style={style} className="cstyle-button7">
        {label}
    </button>
  )
}

export default Button7
