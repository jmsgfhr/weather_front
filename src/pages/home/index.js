import React, { useState } from 'react';
import Layout from '../../components/layout/index';
import ListWeather from './components/listWeather/index';

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  return (
    <Layout titlePage="Home">
      <>
        <ListWeather user={user} setUser={setUser} />
      </>
    </Layout>
  );
};
export default Home;
