import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const Banner = () => {
    const data = useStaticQuery(graphql`
        query {
        heroPic: file(relativePath: { eq: "hero-pic.png" }) {
            childImageSharp {
            fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
            }
            }
        }
        }
    `)
    
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="main-text">Your creativity deserves to be Rewarded.</div>
                    <div className="subtitle">Exclusive Rewards, Discounts & monetization for your content</div>
                    <div className="main-image">
                        <Img fluid={data.heroPic.childImageSharp.fluid} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner