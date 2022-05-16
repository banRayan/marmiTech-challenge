import React from "react";
import { CheckSquare } from 'phosphor-react';
import { Container, Description, FeaturesContainer, FeaturesItem, MainContent, Title } from "./styles";
import Header from "../../components/Header";

const Features = () => {
    return (
        <Container>
            <Header />
            <MainContent>
                <FeaturesContainer>
                    <FeaturesItem>
                        <CheckSquare size={32} />
                        <Description>Customization of charts from the insertion of titles and values;</Description>
                    </FeaturesItem>
                    <FeaturesItem>
                        <CheckSquare size={32} />
                        <Description>Allows you to switch between two types of charts;</Description>
                    </FeaturesItem>
                </FeaturesContainer>
            </MainContent>
        </Container>
    )
}

export default Features;