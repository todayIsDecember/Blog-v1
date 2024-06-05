'use client'

import React, {createContext, useEffect, useState, useContext} from 'react'

interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [theme, setTheme] = useState('pink')
  useEffect(() => {
    const StorageTheme = localStorage.getItem('theme')
    if(StorageTheme) {
      setTheme(StorageTheme)
      document.documentElement.setAttribute('data-theme', StorageTheme)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'pink' ? 'dark' : 'pink'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = ():ThemeContextProps => {
  const context = useContext(ThemeContext)
  if(context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}