import { FooterProps } from "./FooterProps";
import cn from 'classnames'
import styles from './Foter.module.css'
import Link from 'next/link'
import { Text } from "../Text/Text";
import {format} from 'date-fns'

export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div className={styles.politics}>
        <Link href={'#'} className={styles.link}><Text size="s">Privacy Policy</Text></Link>
        <Link href={'#'} className={styles.link}><Text size="s">cookie policy</Text></Link>
      </div>
      <div className={styles.info}>
        <Text size="s">Copyright © {format(new Date(), 'yyyy')} Okasana Selepiy. All rights reserved.</Text>
      </div>
    </footer>
  )
}