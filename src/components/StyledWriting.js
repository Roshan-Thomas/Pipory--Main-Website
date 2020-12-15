import React from 'react'
import styled from 'styled-components'

const Writing = () => {
    return (
        <>
            <StyledContainer>
                <StyledWriting>
                    Memes, Poems, Quotes, Photography, Blogs, Articles, Stories, and Anything creative & static
                </StyledWriting>
            </StyledContainer> 
        </>
    )
}

export default Writing

const StyledContainer = styled.div`
    color: #000;
    background: #fff;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

const StyledWriting = styled.p`
    padding-top: 20px;
    margin-bottom: 20px;
    font-size: 35px;
    font-family: 'Integral CF';
    font-weight: 600;
    text-align: center;
    background: linear-gradient(89.07deg, #000000 23.36%, #6200EE 57.78%, rgba(202, 0, 237, 0.87) 86.46%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;


    @media screen and (max-width: 480px) {
        font-size: 28px;
        padding-top: 0px;
        margin-bottom: 0px;
        line-height: 1.1;
    }
`