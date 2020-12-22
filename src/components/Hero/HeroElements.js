import styled from 'styled-components'
import {Link} from 'gatsby'

export const HeroContainer = styled.div`
    background: #000;
    padding: 0 60px;
    color: #fff;

    @media screen and (max-width: 1100px) {
        padding: 30px;
    }
`

export const HeroWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 700px;

    @media screen and (max-width: 1100px) {
        grid-template-columns: 1fr;
        grid-template-rows: 800px;
    }

    @media screen and (max-width: 468px) {
        grid-template-rows: 600px;
    }
`

export const HeroImg = styled.img`
    padding-right: 10px;
    width: 115%;
    height: 100%;

    @media screen and (max-width: 768px) {
        max-width: 90%;
        width: auto;
        height: auto;
    }
`

export const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;
`

export const HeroH1 = styled.h1`
    font-size: 70px;
    font-family: 'Integral CF';
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1100px) {
        font-size: 60px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 480px) {
        font-size: 40px;
    }
`

export const HeroP = styled.p`
    font-size: 25px;
    text-transform: lowercase;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`

export const HeroBtn = styled.div`
    display: flex;
    align-items: center;
`

export const HeroBtnLink = styled(Link)`
    border-radius: 50px;
    background: conic-gradient(from 180deg at 50% 50%, #CA00ED -82.5deg, #6200EE 61.87deg, #CA00ED 277.5deg, #6200EE 421.87deg);
    white-space: nowrap;
    padding: 15px 70px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`