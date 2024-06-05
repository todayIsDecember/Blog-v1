import { SocialContainerProps } from "./SocialContainerProps";
import cn from 'classnames'
import styles from './SocialContainer.module.css'
import FacebookIcon from '../../../public/icons/facebook.svg'
import InstagramIcon from '../../../public/icons/instagram.svg'
import TelegramIcon from '../../../public/icons/telegram.svg'
import TiktokIcon from '../../../public/icons/tiktok.svg'
import TwitterIcon from '../../../public/icons/twitter.svg'
import YoutubeIcon from '../../../public/icons/youtube.svg'
import Link from 'next/link'

export const SocialContainer = ({className, ...props}: SocialContainerProps): JSX.Element => {
  return (
    <div className={cn(className, styles.container)} {...props}>
      <Link href={'#'} className={styles.link}><FacebookIcon/></Link>
      <Link href={'#'} className={styles.link}><InstagramIcon/></Link>
      <Link href={'#'} className={styles.link}><TelegramIcon/></Link>
      <Link href={'#'} className={styles.link}><TiktokIcon/></Link>
      <Link href={'#'} className={styles.link}><TwitterIcon/></Link>
      <Link href={'#'} className={styles.link}><YoutubeIcon/></Link>
    </div>
  )
}