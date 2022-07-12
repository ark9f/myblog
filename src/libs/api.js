import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const contentDir = join(process.cwd(), 'content')
const blogDir = join(contentDir, 'blog')
const workDir = join(contentDir, 'work')
const aboutDir = join(contentDir, 'about')

export const getBlogSlugs = () => {

  const allDir = fs.readdirSync(blogDir, {withFileTypes: true})

  return allDir
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name)
}

export const getBlogBySlug = ( slug ) => {

  const path = join(blogDir, slug, 'index.md')
  const file = fs.readFileSync(path, 'utf-8')
  const { data, content } = matter(file)

  return {
    props: {
      frontmatter: data,
      body: content,
    }
  }
}

export const getAllBlogs = () => {
  const slugs = getBlogSlugs()
  const blogs = slugs.map((slug) => {
    const blog = getBlogBySlug(slug)
    return {
      frontmatter: blog.props.frontmatter,
      slug
    }
  })

  const descBlogs = blogs.sort((a, b) =>
    new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
  )

  return {
    props: {
      blogs: descBlogs
    }
  }
}

export const getAllWorkDir = () => {
  const allDir = fs.readdirSync(workDir, {withFileTypes: true})

    return allDir
      .filter((dirent) => dirent.isDirectory())
      .map(({ name }) => name)
}

export const getWork = ( name ) => {

  const path = join(workDir, name, 'index.md')
  const file = fs.readFileSync(path, 'utf-8')
  const { data, content } = matter(file)

  return {
    props: {
      frontmatter: data,
      body: content,
    }
  }
}

export const getAllWorks = () => {
  const dir = getAllWorkDir()
  const works = dir.map((d) => {
    const work = getWork(d)
    return {
      frontmatter: work.props.frontmatter,
      body: work.props.body
    }
  })

  return {
    props: {
      works: works
    }
  }
}

export const getAbout = () => {
  const path = join(aboutDir, 'index.md')
  const file = fs.readFileSync(path, 'utf-8')
  const { content } = matter(file)

  return {
    props: {
      body: content,
    }
  }
}