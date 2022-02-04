import * as React from "react"
import Hero from "./../components/Hero"
import Seo from "../components/Seo"
import Features from "./../components/Features"
import Cta from "./../components/Cta"
import Reviews from "./../components/Reviews"
import About from "./../components/About"
import Contact from "./../components/Contact"
import Footer from "./../components/Footer"

const IndexPage = () => {
  return (
    <React.Fragment >
      <Seo title="Home"/>
      <Hero />
      <Features />
      <Cta />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </React.Fragment>
  )
}

export default IndexPage
