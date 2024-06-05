import cn from "classnames";
import styles from './page.module.css'
import Image from "next/image";
import { Button, SocialContainer, Text } from "./components";
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.photoSection}>
        <div className={styles.bg}>
          <div className={styles.photoContainer}>
          <Image
            src="/images/woman.jpg"
            alt="Picture of the author"
            fill
            className={styles.photo}
          />
          </div>
        </div>
      </div>
      <div className={styles.infoSection}>
        <Text size='l'>My name is Oksana Selepiy</Text>
        <div className={styles.subtitleBlock}>
          <Text size="m">SMM expert.</Text>
          <Text size="m">Studied in London.</Text>
        </div>
        <div className={styles.btnsBlcok}>
          <Link className={styles.link} href={'./blog'}><Button>Blog</Button></Link>
          <Button>Podkast</Button>
          <Button>Projects</Button>
          <Button>contact with me</Button>
        </div>
        <SocialContainer/>
      </div>
    </main>
  );
}
