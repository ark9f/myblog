import Layout from "../components/layout"
import styles from "../styles/work.module.scss"
import Image from "next/image"
import {FiArrowUpRight} from "react-icons/fi"

const Work = () => {
  return (
  <Layout headerType="s">
    <h1 className={styles.title}>Work</h1>

    <div className={styles.item}>
      <Image
        width={180}
        height={120}
        layout="fixed"
        objectFit="contain"
        src="/work/test.png"
      />

      <div className={styles.meta}>
        <h2>
          <a className={styles.itemName} href="https://www.google.com/">
          Works name
          <FiArrowUpRight/>
          </a>
        </h2>
        <small>
          <p>主な使用技術 next.js</p>
          <p>制作期間 2022/5月中</p>
        </small>
        <p>個人用の技術ブログです</p>
      </div>
    </div>

  </Layout>
  )
}

export default Work