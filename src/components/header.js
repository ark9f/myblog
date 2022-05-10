import Link from 'next/link'
import styles from '../styles/header.module.scss'
import React, {useState} from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { useRouter } from 'next/router'


const Header = (props) => {
  
  const [isOpen, setIsOpen] = useState(false)
  const path = useRouter()

  if(props.headerType == 's') {
    return (
      <>
      <header className={styles.headerSmall}>
        <span className={styles.headerSmallIcon}></span>
        <Link href="/">
          <a>
          Codilla
          </a>
        </Link>
        <p>{path.pathname}</p>
        <nav className={styles.headerMenu + ' ' + (isOpen ? styles.open : styles.close)}>
          <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/blog"><a>Blog</a></Link></li>
            <li><Link href="/work"><a>Work</a></Link></li>
            <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        </nav>
        <BiChevronDown
          className={styles.headerMenuButton + ' ' + (isOpen ? styles.open : styles.close)}
          onClick={()=>setIsOpen(!isOpen)}
        />
      </header>
      <div className={styles.gap}></div>
      </>
    )
  } else {
    return (
      <header className={styles.header}>
        <Link href="/"><a><span className={styles.headerIcon}></span></a></Link>
      </header>
    )
  }
}

export default Header
