import { HeaderProps } from "./HeaderProps";
import cn from 'classnames';
import styles from './Header.module.css'
import Link from 'next/link'
import { Text } from "../Text/Text";

export const Header = ({className, ...props}: HeaderProps): JSX.Element => {
  return (
    <header className={cn(className, styles.header)} {...props}>
      <Link className={styles.logo} href={'/'}><Text size="s">Okasana Selepiy | Bloger</Text></Link>
      <Link className={styles.logo} href={'/'}><Text size="s">Main</Text></Link>
    </header>
  )
}