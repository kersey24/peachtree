"use client";

import { useState } from "react";

type WeatherInfo = {
  temperature: number;
  condition: string;
};

type WeatherProps = {
  location: string; // "Asheville, NC"
};

export function Weather({ location }: WeatherProps) {
  const [weather, setWeather] = useState<WeatherInfo | null>(null);

  // TODO: Fetch weather data from OpenWeatherMap API
  //   This should not use useEffect, instead use next patterns
  //   useEffect(() => {
  //     fetch(`[BACKEND_ENDPOINT]/weather?location=${location}`)
  //       .then((response) => response.json())
  //       .then((data) => setWeather(data));
  //   }, [location]);

  if (!weather) {
    return <div>Loading weather...</div>;
  }

  return (
    <div>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Condition: {weather.condition}</p>
    </div>
  );
}
