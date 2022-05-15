import React from "react";
import { GithubLogo, LinkedinLogo, TwitterLogo, InstagramLogo } from 'phosphor-react';

import { Container, MainContent, SocialCard, SocialContainer } from "./styles";

import Header from '../../components/Header';

const Contact = () => {
    return (
        <Container>
            <Header />
            <MainContent>
                <SocialContainer>
                    <SocialCard href="https://github.com/banRayan" rel="external" target="_blank">
                        <GithubLogo size={40} />
                        <p>Github</p>
                    </SocialCard>
                    <SocialCard href="https://www.linkedin.com/in/rayansantos/" rel="external" target="_blank">
                        <LinkedinLogo size={40} />
                        <p>Linkedin</p>
                    </SocialCard>
                    <SocialCard href="https://twitter.com/_banrayan" rel="external" target="_blank">
                        <TwitterLogo size={40} />
                        <p>Twitter</p>
                    </SocialCard>
                    <SocialCard style={{ width: 160 }} href="https://www.instagram.com/_banrayan/" rel="external" target="_blank">
                        <InstagramLogo size={40} />
                        <p>Instagram</p>
                    </SocialCard>
                </SocialContainer>
            </MainContent>
        </Container>
    )
}

export default Contact;