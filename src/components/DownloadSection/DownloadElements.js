import styled from 'styled-components'

export const DownloadContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px;
    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const DownloadWrapper = styled.div`
    margin: 0 auto;
    padding: 50px;

`

export const LogoWrap = styled.div`
    max-width: 150px;
    height: 100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 780px) {
        height: auto;
        max-width: 100px;
    }

    @media screen and (max-width: 500px) {
        max-width: 70px;
    }
`

export const Logo = styled.img`
    width: 100%;
    margin-bottom: 20px;
`

export const DownloadH2 = styled.h2`
    text-transform: lowercase;
    font-weight: bold;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
`

export const DownloadLinksWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        margin-top: -10px;
    }

`


