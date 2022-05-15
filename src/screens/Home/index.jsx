import React from "react";
import Header from "../../components/Header";
import { Button, Container, Description, MainContent, Slogan, Title } from "./styles";

const Home = () => {
    return (
        <Container>
            <Header />
            <MainContent>
                <Slogan>
                    <Title>Create amazing graphics</Title>
                    <Description>Colaborate and create beaultiful graphics with your teams</Description>
                    <Button>Start now</Button>
                </Slogan>
            </MainContent>
        </Container>
    )
}

export default Home;