import axios from 'axios';

const URL = 'https://api.openweathermap.org';

const urldjango = 'http://localhost:8000';

const ApiKey = 'f6e8db89a8fa901c9b06fcda2b81b8d1';

const api = axios.create({
  baseURL: URL,
});

const apidjango = axios.create({
  baseURL: urldjango,
});

export const historyWeather = (_callback) => {
  apidjango
    .get('/weathers/')
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
};

export const historyPost = (post, _callback) => {
  apidjango
    .post('/weathers/', post)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
};

export const Cities = (name, _callback) => {
  api
    .get(`/geo/1.0/direct?q=${name}&limit=1&appid=${ApiKey}`)
    .then(_callback)
    .catch((err) => {
      _callback(err.response);
    });
};

export const Weather = (lat, lon, _callback) => {
  api
    .get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${ApiKey}`)
    .then(_callback)
    .catch((err) => {
      _callback(err.response);
    });
};
