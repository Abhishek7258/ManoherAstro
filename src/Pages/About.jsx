import React from 'react'
import Header from '../components/Header'
import AboutHeading from '../components/AboutHeading'
import Kundli from '../components/Kundli'
import WhyToChoose from '../components/WhyToChoose'
import Whatsapp from '../Utility/Whatsapp'

const About = () => {
  return (
    <div>
      <Header/>
      <AboutHeading/>
      <Kundli/>
      <WhyToChoose/>
      <Whatsapp/>
      <br />
    </div>
  )
}

export default About