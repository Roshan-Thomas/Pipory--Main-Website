import React, {useState} from "react"
import '../styles/styles.scss'

// Import Components
import Sidebar from '../components/Sidebar'
import NavBar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from "../components/Footer"
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/InfoSection/Data'
import Writing from "../components/StyledWriting"
import Features from '../components/Features'
import Download from '../components/DownloadSection'

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return(
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle}/>
      <Hero />
      <Writing />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Features />
      <Download />
      <Footer />
    </>
  
  )
  
}

export default IndexPage
