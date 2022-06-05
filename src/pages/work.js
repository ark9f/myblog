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
        <div className={styles.image}>
          <Image
            layout="fill"
            objectFit="contain"
            src={work.frontmatter.image}
          />
        </div>

        <div className={styles.meta}>
          <h2>
            <a className={styles.itemName} href={work.frontmatter.link}>
            {work.frontmatter.title}
            <FiArrowUpRight/>
            </a>
          </h2>

          <div className={styles.metaSub}>
            <small>制作時期：</small>
            <p>{work.frontmatter.date}</p>
          </div>

          <div className={styles.metaSub}>
            <small>主な使用技術：</small>
            <p>{work.frontmatter.stack}</p>
          </div>

          <p className={styles.body}>
            {work.body}
          </p>
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