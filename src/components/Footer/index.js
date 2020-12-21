import React from 'react'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to="/signin">Home</FooterLink>
                                <FooterLink to="/signin">Our Story</FooterLink>
                                <FooterLink to="/signin">News</FooterLink>
                                <FooterLink to="/signin">Careers</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>More Info</FooterLinkTitle>
                                <FooterLink to="/terms-of-service">Terms of service</FooterLink>
                                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
                                <FooterLink to="/">Do not sell my personal information</FooterLink>
                                <FooterLink to="/">More legal notices</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLinkTitle>Customer Support</FooterLinkTitle>
                                <FooterLink to="/">press@pipory.com</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">LinkedIn</FooterLink>
                            </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/' onClick={toggleHome}>Pipory</SocialLogo>
                            <WebsiteRights>Pipory © {new Date().getFullYear()}. All rights reserved </WebsiteRights>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/roshan__thomas" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>   
        </>
    )
}

export default Footer
