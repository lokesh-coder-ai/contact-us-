import React from 'react'

import IntroSection from './components/intro/Intro'
import ContactSection from './components/contact-section/ContactSection'

import FooterSection from './components/footer/Footer'

import './App.css'

function App() {
  return (
    <div className="App">
      <IntroSection />
      <ContactSection />
      
      <FooterSection />
    </div>
  )
}

export default App