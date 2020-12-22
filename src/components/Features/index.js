import React from 'react'
import Image1 from '../../images/features-1.png'
import Image2 from '../../images/features-2.png'
import Image3 from '../../images/features-3.png'
import Image4 from '../../images/features-4.png'

import {
    FeaturesContainer,
    FeaturesH1,
    FeaturesWrapper,
    FeaturesCard,
    FeaturesImage,
    FeaturesH2,
    FeaturesP
} from './FeaturesElements'

const Features = () => {
    return (
        <FeaturesContainer id="features">
            <FeaturesH1>Features</FeaturesH1>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesImage src={Image1} />
                    <FeaturesH2>Editors</FeaturesH2>
                    <FeaturesP>
                        High Fidelity editors for different forms of static Creativity. Editable backgrounds, Various Fonts/styles & a clean user interface to portray your work in the best way possible.
                    </FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src={Image2} />
                    <FeaturesH2>X Languages</FeaturesH2>
                    <FeaturesP>
                        Creativity cannot be limited to one language. And we acknowledge that more than anyone else! Express your passion in X different languages.
                    </FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src={Image3} />
                    <FeaturesH2>Shop</FeaturesH2>
                    <FeaturesP>
                        Bazaar filled with exclusive discounts and rewards to motivate you.
                    </FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesImage src={Image4} />
                    <FeaturesH2>Community</FeaturesH2>
                    <FeaturesP>
                        Follow, Connect, and Collaborate with a community of skilled users to learn, get inspired & expand your audience.
                    </FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Features
