import React, {useState} from "react"
import '../styles/styles.scss'

// Import Components
import NavBar from '../components/Navbar'
import Footer from "../components/Footer"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return(
    <>
      <NavBar toggle={toggle}/>
      <Footer />
    </>
  
  )
  
}

export default IndexPage
