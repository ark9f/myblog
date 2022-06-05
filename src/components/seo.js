import { useRouter } from "next/router"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
  const router = useRouter()
  const baseUrl = "http://localhost:3000"
  const currentUrl = baseUrl + router.pathname
  const defaultImage = `${baseUrl}/image/social.png`

  return (
    <Helmet>
      <html lang="jp" />
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="discription" content={description} />
      <meta name="image" content={defaultImage}/>
      <meta property="og:title" content={title} key="ogtitle"/>
      <meta property="og:description" content={description} key="ogdescription"/>
      <meta property="og:image" content={defaultImage} key="ogimage"/>
      <meta property="og:url" content={currentUrl} key="ogurl"/>
      <link rel="canonical" href={currentUrl} key="canonical" />
      <title>{ title }</title>
    </Helmet>
  )
}

export default Seo