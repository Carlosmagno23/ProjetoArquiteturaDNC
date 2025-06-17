import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/contactForm/ContactForm"
import { useContext } from 'react'

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function Contact() {
    const appContext = useContext(AppContext)
    return (
        <>
            <Header />
            <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.jpg" />
            <div className="container">
                <ContactForm />
            </div>
            
            <Footer />
        </>
    )
}

export default Contact
