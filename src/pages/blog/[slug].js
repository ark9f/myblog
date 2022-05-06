import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import Layout from "../../components/layout"

const Article = (props) => {
  return (
    <Layout>
    <h1>{props.frontmatter.title}</h1>
    <p>{props.frontmatter.date}</p>
    <ReactMarkdown>{props.body}</ReactMarkdown>
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