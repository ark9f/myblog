import Link from 'next/link'
import styles from '../styles/header.module.scss'
import React, {useState} from 'react'

const Header = (props) => {

  const [isOpen, setIsOpen] = useState(false)

  if(props.headerType == 's') {
    return (
      <header className={styles.headerSmall}>
        <Link href="/">
          <a>
          <span className={styles.headerSmallIcon}></span>
          codelog
          </a>
        </Link>
        <nav>
          <ul className={(isOpen ? styles.open : styles.close)}>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/work"><a>Work</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
          <button onClick={()=>setIsOpen(!isOpen)}>push</button>
        </nav>
      </header>
    )
  } else {
    return (
      <header className={styles.header}>
        <Link href="/"><a>L<span className={styles.headerIcon}></span></a></Link>
      </header>
    )
  }
}

export default Header