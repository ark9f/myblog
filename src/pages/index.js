import style from "../styles/index.module.scss"
import Link from 'next/link'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { metadata } from "../../siteConfig"

const Index = () => {
  return (
    <Layout>
      <Seo title="top" description="top"/>
      <h1 className={style.title}>
        {metadata.title}
      </h1>
      <h2 className={style.explanation}>
        {metadata.description}
      </h2>
      <ul className={style.menu}>
        <li>
          <Link href="/about"><a>About</a></Link>
          <p>about me</p>
        </li>
        <li>
          <Link href="/blog"><a>Blog</a></Link>
          <p>Mainly about web development.</p>
        </li>
        <li>
          <Link href="/contact"><a>Contact</a></Link>
          <p>You can contact me by email.</p>
        </li>
        <li>
          <Link href="/work"><a>Work</a></Link>
          <p>my works</p>
        </li>
      </ul>
    </Layout>
  )
}

export default Index