import React from 'react'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    Heading,
    Subtitle,
    BoldText1,
    ImgWrap,
    Img
} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2,
    description3, 
    img, 
    alt, 
}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BoldText1>{description2}</BoldText1>
                                <BoldText1>{description3}</BoldText1>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection
