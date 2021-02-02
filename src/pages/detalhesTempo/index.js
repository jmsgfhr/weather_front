/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/index';
import { Text } from '../../components/texts/index';
import { historyPost } from '../../services/index';

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  width: 80%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 640px) {
    width: 80%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;

  @media screen and (max-width: 640px) {
    width: 50%;
    font-size: 1.2em;
    align-self: center;
  }
`;

const WeatherDetails = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const weather = props.location.state.detail;

  const value = {
    city: weather.city,
    description: weather.weather[0].description,
    dt: weather.dt,
    pressure: weather.pressure,
    humidity: weather.humidity,
    wind_speed: weather.wind_speed,
    wind_deg: weather.wind_deg,
    pop: weather.pop,
    rain: weather.rain,
    snow: weather.snow,
    dayTemp: weather.temp.day,
    minDayTemp: weather.temp.min,
    maxDayTemp: weather.temp.max,
    nightTemp: weather.temp.night,
    dayFeel: weather.feels_like.day,
    nightFeel: weather.feels_like.night,
  };

  const datePicker = (date) => {
    const a = new Date(date * 1000);
    const year = a.getFullYear();
    const month = a.getMonth() + 1;
    const day = a.getDate();
    return `${day}/${month}/${year}`;
  };

  // eslint-disable-next-line no-unused-vars
  historyPost(value, (resp) => {
    console.log('ok');
  });

  if (weather) {
    return (
      <Layout titlePage={`${weather.city} ${datePicker(weather.dt)}`}>

        <Card>
          <TextContainer style={{ justifyContent: 'center' }}>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} style={{ width: '150px' }} />
            <Text>{weather.weather[0].description}</Text>
          </TextContainer>

          <TextContainer>
            <Text>
              Probabilidade de Chuva:
              {weather.pop}
              %
            </Text>
            <Text>{weather.rain && `Quantidade de Chuva: ${weather.rain} mm`}</Text>
          </TextContainer>

          {weather.snow
                        && (
                        <TextContainer>
                          <Text>
                            Quantidade de Neve:
                            {weather.snow}
                            {' '}
                            mm
                          </Text>
                        </TextContainer>
                        )}

          <TextContainer>
            <Text>
              Temperatura Min:
              {weather.temp.min}
              °C
            </Text>
            <Text>
              Temperatura Max:
              {weather.temp.max}
              °C
            </Text>
          </TextContainer>
          <TextContainer>
            <Text>
              Temperatura de Dia:
              {weather.temp.day}
              °C
            </Text>
            <Text>
              Temperatura de Noite:
              {weather.temp.night}
              °C
            </Text>
          </TextContainer>

          <TextContainer>
            <Text>
              Sensação Térmica de Dia:
              {weather.feels_like.day}
              °C
            </Text>
            <Text>
              Sensação Térmica de Noite:
              {weather.feels_like.night}
              °C
            </Text>
          </TextContainer>

          <TextContainer>
            <Text>
              Pressão:
              {weather.pressure}
              {' '}
              hPa
            </Text>
            <Text>
              Humidade:
              {weather.humidity}
              %
            </Text>
          </TextContainer>

          <TextContainer>
            <Text>
              Velocidade do Vento:
              {weather.wind_speed}
              m/s
            </Text>
            <Text>
              Direção do Vento:
              {weather.wind_deg}
              °
            </Text>
          </TextContainer>
        </Card>
      </Layout>
    );
  }
  return <></>;
};

export default WeatherDetails;
