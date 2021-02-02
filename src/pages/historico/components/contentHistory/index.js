/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Accordion, AccordionSummary, Typography } from '@material-ui/core';
import styled from 'styled-components';
import {
  ListCardContainer,
  AlignContent,
} from '../../../../constants/containers/index';
import { TextCard } from '../../../../components/texts/index';
import '../../../../constants/colors.css';
import Pagination from '../../../../components/pagination/index';

const SizeAccordion = styled.div`
  width: 50%;
  height: 20%;
  margin-bottom: 2px;
  @media screen and (max-width: 640px) {
    width: 60%;
    font-size: 0.75em;
  }
`;
const ContentAccordion = styled.div`
  padding: 2% 5%;
`;

const EachElement = styled.div`
  border-bottom: 2px solid gray;
`;

const ContentHistory = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  const vector = props.HistoryWeather;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 8;
  const lastIndex = currentPage * postPerPage;
  const firstIndex = lastIndex - postPerPage;
  const currentHistories = vector.slice(firstIndex, lastIndex);
  const itemsCeil = Math.ceil(vector.length / postPerPage);

  const paginationClick = (pg) => {
    setCurrentPage(pg);
  };

  const arrowClick = (dir) => {
    if (dir === 'left' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (dir === 'right' && currentPage <= itemsCeil - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const datePicker = (date) => {
    const a = new Date(date * 1000);
    const year = a.getFullYear();
    const month = a.getMonth() + 1;
    const day = a.getDate();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <ListCardContainer id="seuhistorico">
        <AlignContent>
          {currentHistories.map((eachHistory) => (
            <SizeAccordion key={eachHistory.id}>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    style={{
                      fontWeight: 'bold',
                      fontFamily: 'Roboto Condensed',
                      fontSize: '1.5em',
                    }}
                  >
                    {`${eachHistory.city} ${datePicker(eachHistory.dt)}`}

                  </Typography>
                </AccordionSummary>
                <ContentAccordion>
                  <EachElement>
                    <TextCard>{eachHistory.city}</TextCard>
                  </EachElement>

                  <EachElement>
                    <TextCard>
                      Probabilidade de Chuva:
                      {eachHistory.pop}
                      %
                    </TextCard>
                    <TextCard>{eachHistory.rain && `Quantidade de Chuva: ${eachHistory.rain} mm`}</TextCard>

                    {eachHistory.snow
                      && (
                      <TextCard>
                        Quantidade de Neve:
                        {eachHistory.snow}
                        {' '}
                        mm
                      </TextCard>
                      )}
                  </EachElement>

                  <EachElement>
                    <TextCard>
                      Temperatura Min:
                      {eachHistory.minDayTemp}
                      °C
                    </TextCard>
                    <TextCard>
                      Temperatura Max:
                      {eachHistory.maxDayTemp}
                      °C
                    </TextCard>
                    <TextCard>
                      Temperatura de Dia:
                      {eachHistory.dayTemp}
                      °C
                    </TextCard>
                    <TextCard>
                      Temperatura de Noite:
                      {eachHistory.nightTemp}
                      °C
                    </TextCard>
                  </EachElement>

                  <EachElement>
                    <TextCard>
                      Sensação Térmica de Dia:
                      {eachHistory.dayFeel}
                      °C
                    </TextCard>
                    <TextCard>
                      Sensação Térmica de Noite:
                      {eachHistory.nightFeel}
                      °C
                    </TextCard>
                  </EachElement>

                  <EachElement>
                    <TextCard>
                      Pressão:
                      {eachHistory.pressure}
                      {' '}
                      hPa
                    </TextCard>
                    <TextCard>
                      Humidade:
                      {eachHistory.humidity}
                      %
                    </TextCard>
                  </EachElement>

                  <EachElement>
                    <TextCard>
                      Velocidade do Vento:
                      {eachHistory.wind_speed}
                      m/s
                    </TextCard>
                    <TextCard>
                      Direção do Vento:
                      {eachHistory.wind_deg}
                      °
                    </TextCard>
                  </EachElement>

                </ContentAccordion>
              </Accordion>
            </SizeAccordion>
          ))}
        </AlignContent>
      </ListCardContainer>
      <Pagination
        size={itemsCeil}
        postPerPage={postPerPage}
        arrowfunction={arrowClick}
        onItemClick={paginationClick}
        href="#seuhistorico"
      />
    </>
  );
};

export default ContentHistory;
