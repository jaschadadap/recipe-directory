import './ThemeSelector.css'

import React from 'react'
import { useTheme } from '../hooks/useTheme'

export default function ThemeSelector() {

    const { changeColor } = useTheme()
    const themeColors = ['red', 'black', 'blue']

  return (
    <div className='theme-selector'>
        <div className='theme-buttons'>
            {themeColors && themeColors.map(color => (
                <div 
                    key={color}
                    onClick={() => changeColor(color)}
                    style={{background: color}}
                />
            ))}
        </div>
    </div>
  )
}
