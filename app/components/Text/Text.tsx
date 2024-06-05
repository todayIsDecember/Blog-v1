import { TextProps } from "./TextProps";
import cn from 'classnames'
import styles from './Text.module.css'

export const Text = ({className, children, size, ...props}: TextProps): JSX.Element => {
  return (
    <p className={cn(className, styles.text, styles[size])} {...props}>{children}</p>
  )
}