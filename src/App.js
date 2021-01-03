// import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Weather from "./components/Weather";
import Form from "./components/Form";
const key ="d0672f34cfc008066c8cc24d6a4c4084";

function App(){
  const [weather, setWeather] = useState({});
  const fetchData = React.useCallback(async (e) => {
    e.preventDefault();
    const city=e.target.elements.city.value;
    const country=e.target.elements.country.value;
    if(country && city){
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${key}`);
      res.json()
        .then(res => {
          setWeather(res);
          console.log(res)
        })
        .catch(error => console.log(error));
    }
    
  },[]) 
    
  //  useEffect(()=>{
  //    fetchData();
  //  },[fetchData]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}`);
  //     res.json()
  //       .then(res => {
  //         setWeather(res);
  //         console.log(res)
  //       })
  //       .catch(error => console.log(error));
  //   }
  //   fetchData();

  // }, []);
  console.log(weather.name);
  // eve.preventDefault();
      // const city=eve.target.elements.city.value;
      // const country=eve.target.elements.country.value;
   
  return(
    <div className="App " >
      <h1 className="jumbotron">Weather Finder</h1>
      <hr></hr>
      <Form loadweather={fetchData}/>
      {weather.name === undefined ? null : <Weather country={weather.name} city={weather.sys.country} min_temp={Math.floor(weather.main.temp_min - 273.15)}
        max_temp={Math.floor(weather.main.temp_max - 273.15)}
        description={weather.weather[0].description} />}
        {/* <Weather country={weather.name} city={weather.sys.country} min_temp={Math.floor(weather.main.temp_min - 273.15)}
          max_temp={Math.floor(weather.main.temp_max - 273.15)}
          description={weather.weather[0].description} /> */}
    </div>
    
  )
}

export default App;
