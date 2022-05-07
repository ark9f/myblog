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
        <button onClick={()=>setIsOpen(!isOpen)}>push</button>
        <ul
          className={(isOpen ? styles.open : styles.close)}
        >
          <Link href="/"><a>Home</a></Link>
          <Link href="/blog"><a>Blog</a></Link>
          <Link href="/"><a>Work</a></Link>
          <Link href="/"><a>Contact</a></Link>
        </ul>
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