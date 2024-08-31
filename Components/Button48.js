import React from 'react'
import './cstyleui.css'

const Button48 = ({ label, onClick, style }) => {
  return (
    <button class="button-48" role="button">
        <span class="text">
            {label}
        </span>
        
    </button>
  )
}

export default Button48
