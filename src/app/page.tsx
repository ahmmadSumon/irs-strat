import React from 'react'
import HeroSection from './components/HeroSection'
import Steps from './components/Steps'
import FreshStart from './components/FreshStart'
import StartProgram from './components/StartProgram'
import Choose from './components/Choose'
import ScheduleFree from './components/ScheduleFree'
import Survey from './components/Survey'

const page = () => {
  return (
    <div >
      <HeroSection/>
      <Steps/>
      <FreshStart/>
     
      <StartProgram/>
     <Choose/>
     <ScheduleFree/>
     <Survey/>
    </div>
  )
}

export default page
