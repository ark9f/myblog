import Layout from "../components/layout"
import styles from "../styles/work.module.scss"
import Image from "next/image"
import {FiArrowUpRight} from "react-icons/fi"
import { getAllWorks } from "../libs/api"

const Work = (props) => {
  return (
  <Layout headerType="s">
    <h1 className={styles.title}>Work</h1>

    {props.works.map((work, index) =>
      <div className={styles.item} key={index}>
        <Image
          width={180}
          height={120}
          layout="fixed"
          objectFit="contain"
          src={work.frontmatter.image}
        />

        <div className={styles.meta}>
          <h2>
            <a className={styles.itemName} href={work.frontmatter.link}>
            {work.frontmatter.title}
            <FiArrowUpRight/>
            </a>
          </h2>
          <small>
            <p>{work.frontmatter.stack}</p>
          </small>
          <p>{work.frontmatter.excerpt}</p>
        </div>
      </div>
    )}

  </Layout>
  )
}

export default Work

export async function getStaticProps() {
  return await getAllWorks()
}