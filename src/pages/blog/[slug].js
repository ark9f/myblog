import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../../components/layout"
import styles from "../../styles/slug.module.scss"
import { getBlogSlugs, getBlogBySlug } from "../../libs/api"

const Article = (props) => {

  const {
    title,
    date
  } = props.frontmatter

  const { body } = props

  return (
    <Layout headerType="s">

      <div className={styles.back}>
        <FiArrowLeft/>
        <Link href="/blog">
          <a>記事一覧</a>
        </Link>
      </div>
  
      <p>{date}</p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles['markdown-body']}>
        <ReactMarkdown children={body}/>
      </div>
    </ Layout>
  )
}

export default Article

export async function getStaticPaths() {

  const blogSlugs = getBlogSlugs()
  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`)

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async({ params }) => {
  return await getBlogBySlug(params.slug)
}