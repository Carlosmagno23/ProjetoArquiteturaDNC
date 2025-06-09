import Header from "../components/Header/Header"
import AboutText from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"
import Banner from "../components/Banner/Banner"



function About() {
    return (
        <>
            <Header />
            <Banner title="About" image="about.jpg" />
            <div className="container">
                <AboutText />
            </div>
            
            <Footer />
        </>
    )
}

export default About