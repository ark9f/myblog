import { metadata } from '../../siteConfig'
import styles from '../styles/footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      &copy; {metadata.author}
    </footer>
  )
}

export default Footer