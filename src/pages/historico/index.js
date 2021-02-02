/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/index';
import '../../constants/colors.css';
import { historyWeather } from '../../services/index';
import EmptyHistory from './components/emptyHistory/index';
import ContentHistory from './components/contentHistory/index';
import { TextCard } from '../../components/texts';
import LoadingHistory from './components/loadingHistory/index';

const History = () => {
  const [history, setHistory] = useState(null);

  useEffect(() => {
    historyWeather((response) => {
      if (response) setHistory(Array.from(response.data.reverse()));
    });
  }, []);

  return (
    <Layout titlePage="Histórico">
      <TextCard>Confira aqui o histórico das pesquisas</TextCard>
      {History === 0 ? (
        <LoadingHistory />
      ) : history === null ? (
        <EmptyHistory />
      ) : (
        <>
          <ContentHistory HistoryWeather={history} />
        </>
      )}
    </Layout>
  );
};

export default History;
