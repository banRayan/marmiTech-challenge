import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { ChartPie } from 'phosphor-react';

ChartJS.register(ArcElement, Tooltip, Legend);
import Header from "../../components/Header";

import {
    Button,
    Chart,
    ChartContainer,
    ChartsButton,
    ChartsButtonContainer,
    Container,
    InputContainer,
    InputLabels,
    InputValue,
    MainContent,
    Warn
} from "./styles";

const Custom = () => {
    const [dataTitle, setDataTitle] = useState([]);
    const [inputDataTitle, setInputDataTitle] = useState();
    const [dataValue, setDataValue] = useState([]);
    const [inputDataValue, setInputDataValue] = useState();

    const [booleanCharts, setBooleanCharts] = useState(false)

    const handleInputData = () => {
        const newDataTitles = [
            ...dataTitle,
            inputDataTitle
        ]

        setDataTitle(newDataTitles)

        const newDataValue = [
            ...dataValue,
            inputDataValue
        ]

        const arrayValue = []
        let lenght = newDataValue.length;
        for (let i = 0; i < lenght; i++)
            arrayValue.push(parseInt(newDataValue[i]))


        setDataValue(arrayValue)
    }

    const toggleChart = () => {
        setBooleanCharts(toggle => !toggle);
        console.log(booleanCharts)
    }

    const clearChart = () => {
        setDataTitle([])
        setDataValue([])
    }
    const data = {
        labels: dataTitle.length === 0 ? ['Star', 'Forks', 'Views'] : dataTitle,
        datasets: [
            {
                label: '# of Votes',
                data: dataValue.length === 0 ? [1, 2, 3] : dataValue,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <Container>
            <Header />
            <MainContent>
                <InputContainer>
                    <Warn>Insira o Título e Valor antes de enviar</Warn>
                    <InputLabels>Custom Titles</InputLabels>
                    <InputValue
                        type='text'
                        onChange={e => setInputDataTitle(e.target.value)}
                        placeholder='Stars'
                        required
                    />
                    <InputLabels>Custom Values</InputLabels>
                    <InputValue
                        type='number'
                        onChange={e => setInputDataValue(e.target.value)}
                        placeholder='4'
                        required
                    />
                    <Button onClick={handleInputData}>To send</Button>
                </InputContainer>
                <ChartContainer>
                    <Chart>
                        {
                            booleanCharts
                                ?
                                <Pie
                                    data={data}
                                    width={500}
                                    height={500}
                                    options={{ maintainAspectRatio: false }}
                                />
                                :
                                <Doughnut
                                    data={data}
                                    width={500}
                                    height={500}
                                    options={{ maintainAspectRatio: false }}
                                />

                        }
                    </Chart>
                    <Button onClick={clearChart}>Clean</Button>
                </ChartContainer>

                <InputContainer>
                    <ChartsButtonContainer>
                        <ChartsButton onClick={toggleChart}>Toggle Chart <ChartPie size={32} style={{ marginLeft: 16 }} /></ChartsButton>
                    </ChartsButtonContainer>
                </InputContainer>
            </MainContent>
        </Container>
    )
}

export default Custom;