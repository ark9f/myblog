import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../../components/layout"

import styles from "../../styles/slug.module.scss"

const Article = (props) => {
  return (
    <Layout headerType="s">
      <Link href="/blog">
        <a className={styles.back}>
          <FiArrowLeft/>
          記事一覧
        </a>
      </Link>
      <body>
        <p>{props.frontmatter.date}</p>
        <h1 className={styles.title}>{props.frontmatter.title}</h1>
        <div className={styles['markdown-body']}>
          <ReactMarkdown children={props.body}/>
        </div>
      </body>
    </ Layout>
  )
}

export default Article

export async function getStaticPaths() {

  const blogSlugs = ((context) => {
    const keys = context.keys()
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      return slug
    })

    return data

  })(require.context('../../../content', true, /\.md$/))

  const paths = blogSlugs.map((blogSlug) => `/blog/${blogSlug}`)

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const data = await import(`../../../content/${slug}.md`)
  const document = matter(data.default)
  console.log(document)
  return {
    props: {
      frontmatter: document.data,
      body: document.content
    }
  }
}