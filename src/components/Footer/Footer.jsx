import { Link } from 'react-router-dom'

// ASSETS
import './Footer.css'
import Logo from '../../assets/dnc-logo.svg'
import BrazilLogo from '../../assets/brazil-icon.svg'
import UsaLogo from '../../assets/eua-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import XIcon from '../../assets/x-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'

// CONTEXT
import { AppContext } from '../../contexts/AppContext'
import { useContext } from 'react'
import Button from '../Button/Button'


function Footer () {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }

    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-logo-col">
                        <img src={Logo} className='footer-logo'/>
                        <p className='grey-1-color'>{appContext.languages[appContext.language].general.footerLogoText}</p>
                        <div className='d-flex social-links'>
                            <a href='https://google.com' target='_blank'>
                                <img src={FacebookIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={XIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={LinkedinIcon} />
                            </a>
                            <a href='https://google.com' target='_blank'>
                                <img src={InstagramIcon} />
                            </a>
                        </div>
                    </div>
                    <div className='d-flex mobile-fd-column'>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].general.pages}</h3>
                            <ul>
                                <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                                <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                                <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                                <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h3>{appContext.languages[appContext.language].menu.contact}</h3>
                            <p className="grey-1-color">R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030</p>
                            <p className="grey-1-color">suporte@escoladnc.com.br</p>
                            <p className="grey-1-color">(19) 99187-4342</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex jc-space-between footer-copy'>
                    <p className='grey-1-color'>Copyright © DNC - 2024</p>
                    <div className='langs-area d-flex'>
                        <Button buttonStyle="image-button" onClick={() => changeLanguage('br')}>
                            <img src={BrazilLogo} height="29px"/>
                        </Button>
                        <Button buttonStyle="image-button" onClick={() => changeLanguage('en')}>
                            <img src={UsaLogo} height="29px"/>
                        </Button>   
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer