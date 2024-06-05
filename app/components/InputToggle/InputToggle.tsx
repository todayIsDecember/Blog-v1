import { InputToggleProps } from "./InputToggleProps";
import cn from 'classnames'
import styles from './InputToggle.module.css'

export const InputToggle = ({className, theme, ...props}: InputToggleProps) => {
  return (
    <label className={cn(className ,styles.switch, styles.switchStatus)} >
      <input type="checkbox" checked={theme === 'dark'} {...props}/>
      <span className={styles.slider}></span>
    </label>
  )
}