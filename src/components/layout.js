import Header from "./header";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="container">
    <Header headerType={props.headerType} />
    <main className="main">{props.children}</main>
    <Footer />
    </ div>
  )
}

export default Layout