import React, {useState} from "react"
import '../styles/styles.scss'

// Import Components
import NavBar from '../components/Navbar'
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
      <NavBar toggle={toggle}/>
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
