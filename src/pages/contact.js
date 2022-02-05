import React from 'react';
import Navigation from "./../components/Navigation"
import Seo from "../components/Seo"
import Footer from "./../components/Footer"

const ContactPage = ({location}) => {
  return (
    <React.Fragment >
      <Seo title="Contact Us"/>
      <Navigation page="contact" option={location.state.option}/>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage
