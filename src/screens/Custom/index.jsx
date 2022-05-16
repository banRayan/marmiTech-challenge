import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, Pie } from 'react-chartjs-2';
import { ChartPie, ChartPieSlice } from 'phosphor-react';

ChartJS.register(ArcElement, Tooltip, Legend);
import Header from "../../components/Header";
import { Button, Chart, ChartsButton, ChartsButtonContainer, Container, InputContainer, InputLabels, InputValue, MainContent, Title, Warn } from "./styles";

const Custom = () => {
    const [dataNumber, setDataNumber] = useState([1, 2, 3]);
    const [inputNumber, setInputNumber] = useState([]);
    const [dataString, setDataString] = useState(['Views', 'Stars', 'Forks']);
    const [inputString, setInputString] = useState([]);
    const [booleanCharts, setBooleanCharts] = useState(false)



    const handleNumberInput = () => {
        const string = inputString.split(',');
        setDataString(string)

        const number = inputNumber.split(',');
        let length = number.length;
        const numberArray = [];

        for (var i = 0; i < length; i++)
            numberArray.push(parseInt(number[i]));
        setDataNumber(numberArray);
    }

    const toggleChart = () => {
        setBooleanCharts(toggle => !toggle);
        console.log(booleanCharts)
    }

    const data = {
        labels: dataString,
        datasets: [
            {
                label: '# of Votes',
                data: dataNumber,
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
                    <Warn>Insira os valores intercalando-os com vírgulas</Warn>
                    <InputLabels>Custom Titles</InputLabels>
                    <InputValue
                        type='text'
                        onChange={e => setInputString(e.target.value)}
                        placeholder='Views, Stars, Forks'
                    />
                    <InputLabels>Custom Values</InputLabels>
                    <InputValue
                        type='text'
                        onChange={e => setInputNumber(e.target.value)}
                        placeholder='1, 2, 3'
                    />

                    <Button onClick={handleNumberInput}>To send</Button>
                </InputContainer>
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