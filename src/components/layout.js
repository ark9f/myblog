import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="container">
    <Header />
    <main className="main">{props.children}</main>
    <Footer />
    </ div>
  )
}

export default Layout