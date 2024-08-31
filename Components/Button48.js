import React from 'react'
import './cstyleui.css'

const Button48 = ({ label, onClick, style }) => {
  return (

    <button onClick={onClick} style={style} className="cstyle-button48">
        <span class="text">
            {label}
        </span>
    </button>
  )
}

export default Button48
