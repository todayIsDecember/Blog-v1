import { ICardBlog } from '../../interfaces/cardBlog.interface'
import { CardBlog } from '../components'
import styles from './page.module.css'
import {format} from 'date-fns'

export default function Blog() {

  const blogMock: ICardBlog[] = [
    {
      avatar: '/images/woman.jpg',
      name: 'Oksana Selepiy',
      createdAt: format(new Date(), 'MMM dd, yyyy'),
      title: 'Start Your Day Right: Delicious and Nutritious Breakfast Ideas',
      description: 'Discover a variety of mouthwatering and healthy breakfast recipes that will energize your morning and keep you fueled throughout the day. From quick and easy options to indulgent treats, find the perfect way to start your day.',
      views: 123,
      comments: 5,
      likes: 9,
      image: '/images/breakfast.jpg'
    },
    {
      avatar: '/images/woman.jpg',
      name: 'Oksana Selepiy',
      createdAt: format(new Date(), 'MMM dd, yyyy'),
      title: 'Exploring the Joys of Cycling: Tips, Trails, and Gear for Every Rider',
      description: 'Discover the thrill of cycling with our comprehensive guide. From choosing the right gear to finding the best trails, we cover everything you need to know to enjoy your ride. Whether you`re a beginner or a seasoned cyclist, find tips and inspiration to make the most of your biking adventures.',
      views: 157,
      comments: 31,
      likes: 115,
      image: '/images/cycling.jpg'
    },
    {
      avatar: '/images/woman.jpg',
      name: 'Oksana Selepiy',
      createdAt: format(new Date(), 'MMM dd, yyyy'),
      title: 'The Importance of Morning Habits: Kickstart Your Day with Success',
      description: 'Establishing a morning routine can significantly enhance your productivity, mood, and overall well-being. By adopting positive habits such as exercise, healthy eating, and mindfulness practices, you can set a positive tone for the rest of your day, helping you to achieve your goals more effectively and maintain a balanced lifestyle. Discover the benefits of morning habits and how they can transform your life.',
      views: 276,
      comments: 81,
      likes: 145,
      image: '/images/morning.jpg'
    }
  ]

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {blogMock.map((blog, index) => <CardBlog key={index} blog={blog}/>) }
      </div>
    </div>
  )
}