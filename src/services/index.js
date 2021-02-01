import axios from "axios";

const URL = "http://api.openweathermap.org";

const ApiKey = "f6e8db89a8fa901c9b06fcda2b81b8d1";

const api = axios.create({
  baseURL: URL,
});

const config = {
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
};

export const registerUser = (User, _callback) => {
  api
    .post(`/patients`, User)
    .then((response) => {
      _callback(response);
    })
    .catch((errors) => {
      _callback(errors.response);
    });
};

export const Cities = (name,_callback) => {
  api
    .get(`/geo/1.0/direct?q=${name}&limit=1&appid=${ApiKey}`)
    .then(_callback)
    .catch((err) => {
      _callback(err.response);
    });
};

export const Weather = (lat,lon,_callback) => {
  api
    .get(`/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${ApiKey}`)
    .then(_callback)
    .catch((err) => {
      _callback(err.response);
    });
};
