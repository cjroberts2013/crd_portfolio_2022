import React from 'react';
import Navigation from "./../components/Navigation"
import Seo from "../components/Seo"
import Footer from "./../components/Footer"

const ContactPage = ({location}) => {
  var optionState = "";
  if (typeof location.state === "undefined") {
    optionState = "Professional One-Page Website"
  } else {
    optionState = location.state.option
  }

  return (
    <React.Fragment >
      <Seo title="Contact Us"/>
      <Navigation page="contact" option={optionState}/>
      <Footer />
    </React.Fragment>
  )
}

export default ContactPage
