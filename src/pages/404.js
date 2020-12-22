import React, {useState} from "react"
import Sidebar from '../components/Sidebar'
import NavBar from "../components/Navbar"
import Footer from '../components/Footer'


const NotFoundPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <h1>404 Page</h1>
      <Footer />
    </>

    )
  }

export default NotFoundPage
