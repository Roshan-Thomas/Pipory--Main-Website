import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#fff' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 700px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 700px;
    padding-top: 0;
    padding-bottom: 60px;
    text-transform: lowercase;
`

export const Heading = styled.h1`
    margin-bottom: 20px;
    font-size: 64px;
    font-family: 'Integral CF';
    font-weight: 600;
    line-height: 1;
    letter-spacing: 0.09em;
    color: #6200EE;

    @media screen and (max-width: 480px) {
        font-size: 32px;
        line-height: 1.1;
    }
`

export const Subtitle = styled.p`
    max-width: 600px;
    margin-bottom: 35px;
    font-size: 25px;
    font-weight: 300;
    line-height: 30px;
    color: ${({darkText}) => (darkText ? '#000' : '#fff')};
`

export const BoldText1 = styled.p`
    max-width: 490px;
    margin-bottom: 10px;
    font-size: 25px;
    font-weight: 600;
    line-height: 30px;
    color: #000;
` 

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 780px) {
        display: none;
    }
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`