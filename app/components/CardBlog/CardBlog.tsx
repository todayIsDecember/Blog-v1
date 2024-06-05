import { CardBlogProps } from "./CardBlogProps";
import cn from 'classnames'
import styles from './CardBlog.module.css'
import Image from 'next/image'
import { Text } from "../Text/Text";
import LikeIcon from '../../../public/icons/like.svg';
import CommentIcon from '../../../public/icons/comment.svg';
import ViewIcon from '../../../public/icons/eye.svg';

export const CardBlog = ({blog, className, ...props}: CardBlogProps): JSX.Element => {
  return (
    <div className={cn(className, styles.blog)} {...props}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={blog.image} alt="Picture of the author" fill/>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.generalInfo}>
          <div className={styles.avatar}>
            <Image className={styles.image} src={blog.avatar} alt="Picture of the author" fill/>
          </div>
          <Text size="s" className={styles.name}>{blog.name}</Text>
          <Text size="s" className={styles.createdAt}>{blog.createdAt}</Text>
        </div>
        <div className={styles.textInfo}>
          <Text size="m">{blog.title}</Text>
          <Text size="s">{blog.description}</Text>
        </div>
        <div className={styles.activityInfo}>
          <div className={styles.activitySection}>
            <Text size="s">{blog.views}</Text>
            <ViewIcon/>
          </div>
          <div className={styles.activitySection}>
            <Text size="s">{blog.comments}</Text>
            <CommentIcon/>
          </div>
          <div className={styles.activitySection}>
            <Text size="s">{blog.likes}</Text>
            <LikeIcon/>
          </div>
        </div>
      </div>
    </div>
  )
}