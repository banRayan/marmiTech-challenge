import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from "react-router-dom";
import { Doughnut } from 'react-chartjs-2';
import { useAuth } from "../../context/Auth";


ChartJS.register(ArcElement, Tooltip, Legend);


import Header from "../../components/Header";

import {
    Button,
    Chart,
    Container,
    Description,
    MainContent,
    Slogan,
    Title
} from "./styles";

const Home = () => {
    const { repo } = useAuth();
    const navigate = useNavigate();

    const data = {
        labels: [`Views ${repo.watchers}`, `Stars ${repo.stargazers_count}`, `Subs ${repo.subscribers_count}`, `Forks ${repo.forks_count}`],
        datasets: [
            {
                label: '# of Votes',
                data: [`${repo.watchers}`, `${repo.stargazers_count}`, `${repo.subscribers_count}`, `${repo.forks_count}`],
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgb(255, 206, 86)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',

                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container>
            <Header />
            <MainContent>
                <Slogan>
                    <Title>Create amazing graphics</Title>
                    <Description>Collaborate and create beautiful graphics with your team</Description>
                    <Button onClick={() => navigate('/custom')}>Start now</Button>
                </Slogan>
                <Chart>
                    <Doughnut
                        data={data}
                        width={400}
                        height={400}
                        options={{ maintainAspectRatio: false }}
                    />
                </Chart>
            </MainContent>
        </Container>
    )
}

export default Home;