import Link from "next/link"

import Layout from "../components/layout"

import styles from "../styles/blog.module.scss"

import { getAllBlogs } from "../libs/api"

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

export async function getStaticProps() {
  return await getAllBlogs()
}