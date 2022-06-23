import { useState, useEffect } from "react";
import './App.css';
const App = () => {
  const [countryName, setCountryName] = useState("");
  const [temperature, setTempreature] = useState("");
  const [wind, setWind] = useState("");

  useEffect(() => {
    const getDataFromApi = async () => {
      const request = await fetch(
        `https://goweather.herokuapp.com/weather/${countryName}`
      );
      const data = await request.json();
      setTempreature(data.temperature);
      setWind(data.wind);
    };

    getDataFromApi();
  }, [countryName]);

  const onChange = (e) => {
    setCountryName(e.target.value);
  };
  return (
    <div className="container">
      <h2 className="text-center mb-4">Weather</h2>
      <div className="data">
        <input onChange={onChange} type="text" className="form-control" />
      </div>
      <div class="card mt-3">
        <div class="card-body">
          <h5 value={countryName} class="card-title text-center">
            {countryName}
          </h5>
          <h6 value={temperature} class="card-subtitle mb-2 mt-2 text-center">
            Temperature : {temperature}{" "}
          </h6>
          <h6 value={wind} class="card-subtitle mb-2 mt-2 text-center">
            Wind : {wind}
          </h6>

          <p class="card-text-center"></p>
        </div>
      </div>
    </div>
  );
};

export default App;
