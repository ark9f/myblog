import ReactMarkdown from "react-markdown"
import Link from "next/link"
import { FiArrowLeft } from "react-icons/fi"
import Layout from "../../components/layout"
import styles from "../../styles/slug.module.scss"
import { getBlogSlugs, getBlogBySlug } from "../../libs/api"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism"

const Article = (props) => {

  const Img = ({ alt, src }) => {
    return (
      <Image
        width={360}
        height={240}
        layout="responsive"
        objectFit="contain"
        src={src}
        alt={alt}
      />
    )
  }

  const Code = ({className, children}) => {
    const match = /language-(\w+)(:\/*.+)/.exec(className || '');

    return (
      <>
      <p>{match[2].slice(1)}</p>
      <SyntaxHighlighter
        style={darcula}
        language={match[1]}
        children={String(children).replace(/\n$/, '')}
      />
      </>

    )
  }

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
        <ReactMarkdown
          components={{
            img: Img,
            code: Code,
          }}
          children={body}
        />
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