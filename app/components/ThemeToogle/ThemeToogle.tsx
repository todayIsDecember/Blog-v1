'use client'

import { useTheme } from "../../context/ThemeContext"
import { InputToggle } from "../InputToggle/InputToggle";
import { Text } from "../Text/Text";
import styles from './ThemeToogle.module.css'

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <InputToggle theme={theme} onChange={toggleTheme} />
    </div>
  )
}