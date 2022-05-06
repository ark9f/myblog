import Link from 'next/link'
import styles from '../styles/header.module.scss'

const Header = (props) => {

  return (
    <header className={styles.header}>
      <Link href="/"><a><span className={styles.headerIcon}></span></a></Link>
    </header>
  )
}

export default Header