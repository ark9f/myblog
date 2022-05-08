import Link from "next/link"
import matter from "gray-matter"

import Layout from "../components/layout"

import styles from "../styles/blog.module.scss"

const Blog = (props) => {
  return (
    <Layout headerType='s'>
    <h1 className={styles.title}>Blog</h1>
    {props.blogs.map((blog, index) =>
      <div className={styles.post} key={index}>
        <time datetime={blog.frontmatter.date}>{blog.frontmatter.date}</time>
        <Link href={`/blog/${blog.slug}`}><a><h3>{blog.frontmatter.title}</h3></a></Link>
        <p>{blog.frontmatter.excerpt}</p>
      </div>
    )}
    </ Layout>
  )
}

export default Blog

// mdデータ取り込み、整形
export async function getStaticProps() {
  const blogs = ((context) => {
    const keys = context.keys()
    const values = keys.map(context)

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
      const value = values[index]
      const document = matter(value.default)

      return {
        frontmatter: document.data,
        slug: slug
      }
    })

    return data

  })(require.context('../../content', true, /\.md$/))

  const orderedBlogs = blogs.sort((a, b ) => {
    return b.frontmatter.id - a.frontmatter.id
  })

  return{
    props: {
      blogs: JSON.parse(JSON.stringify(orderedBlogs))
    },
  }
}