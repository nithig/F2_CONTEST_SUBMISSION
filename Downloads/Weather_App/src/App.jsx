import { useState, useEffect } from "react";
import "./App.css";
import ThemeToggle from "./components/ThemeToggler";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [location, setLocation] = useState("Chennai");
  const [weather, setWeather] = useState(null);
  const [theme, setTheme] = useState("light");

  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "b30ea39a63msh7136581c1093b2ap11b73ajsn96b8f25a506d",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
          },
        }
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Weather fetch failed", error);
    }
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  return (
    <div className={`app ${theme}`}>
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <SearchBar setLocation={setLocation} />
      {weather && <WeatherCard data={weather} />}
    </div>
  );
};

export default App;
