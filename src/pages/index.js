import * as React from "react"
import Navigation from "./../components/Navigation"
import Seo from "../components/Seo"
import Footer from "./../components/Footer"

const IndexPage = () => {
  return (
    <React.Fragment >
      <Seo title="Affordable Web Design"/>
      <Navigation page="Hero"/>
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
