import React from 'react'
import {
    HeroContainer,
    HeroWrapper,
    ColumnLeft,
    HeroImg,
    ColumnRight,
    HeroH1,
    HeroP,
    HeroBtn,
    HeroBtnLink
} from './HeroElements'
import Image from '../../images/hero-pic.png'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroWrapper>
                <ColumnLeft>
                    <HeroImg src={Image} alt="hero image" />
                </ColumnLeft>
                <ColumnRight>
                    <HeroH1>Your Creativity deserves to be rewarded.</HeroH1>
                    <HeroP>Exclusive rewards, discounts & monetization for your content</HeroP>
                    <HeroBtn>
                        <HeroBtnLink to="/download">Download Now</HeroBtnLink>
                    </HeroBtn>
                </ColumnRight>
            </HeroWrapper>
        </HeroContainer>
    )
}

export default Hero
