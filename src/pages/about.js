import Layout from "../components/layout"
import { getAbout } from "../libs/api"
import ReactMarkdown from "react-markdown"
import styles from "../styles/about.module.scss"

const About = (props) => {
  return (
  <Layout headerType="s">
    <h1 className={styles.title}>About</h1>
    <div className={styles.body}>
      <ReactMarkdown
        children={props.body}
      />
    </div>
  </Layout>
  )
}

export default About

export async function getStaticProps() {
  return await getAbout()
}