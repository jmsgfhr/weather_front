import React, { useState } from "react";
import { AlignContent } from "../../../../constants/containers/index";
import { Text } from "../../../../components/texts";
import ButtonPage from "../../../../components/button/index";
import styled from "styled-components";
import { Cities, Weather } from "../../../../services/index";
import { useHistory } from "react-router-dom";

const Card = styled.div`
  width: 70%;
  height: 91px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;

  @media screen and (max-width: 960px) {
    height: 50px;
  }
`;

const ButtonSizeCard = styled.div`
  width: 20%;

  @media screen and (max-width: 960px) {
    width: auto;
  }
`;

const SearchBar = styled.input`
  background-color: #e2e2e2;
  border: none;
  border-radius: 10px;
  height: 4vh;
  width: 50vw;
  font-size: 1.5rem;
  padding: 0 15px;
  outline: none;
  position: absolute;
  margin-top: 2%;
  height: 8%;
  top: 15%;

  @media screen and (max-width: 640px) {
    top: 7%;
  }
`;

const ListWeather = () => {
  const [weatherList, setWeatherList] = useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const history = useHistory();

  const handle = (e) => {
    if (e.key === 'Enter') {
      Cities(searchTerm, (response) => {
        Weather(response.data[0].lat, response.data[0].lon, (resp) => {
          setWeatherList(Array.from(resp.data.daily));
        });
      });
    }
  }

  const editSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };

  const datePicker = (date) => {
    var a = new Date(date * 1000);
    var year = a.getFullYear();
    var month = a.getMonth();
    var day = a.getDate();
    return `${day}/${month}/${year}`;
  };

  return (
    <AlignContent>
      <SearchBar onChange={editSearchTerm} onKeyPress={handle} placeholder="Pesquisar Cidade" />

      {weatherList.length !== 0 ? (
        weatherList.map((eachWeather) => (
          < Card /* key={weatherList.id} */ >
            <Text>Dia: {datePicker(eachWeather.dt)}</Text>
            <ButtonSizeCard>
              <ButtonPage>
                Selecionar
              </ButtonPage>
            </ButtonSizeCard>
          </Card>
        ))
      ) : (
          <div style={{ width: "45%" }}>
            <ButtonPage onClick={() => history.push("/historico")}>Visualizar Histórico</ButtonPage>
          </div>
        )
      }
    </AlignContent >
  );
};

export default ListWeather;
