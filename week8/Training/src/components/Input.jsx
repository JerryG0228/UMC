import React, { useState } from 'react';
import axios from 'axios';
import * as S from './StyledInput';

export default function Input() {
  const [location, setLocation] = useState('');
  const [result, setResult] = useState({});

  const API_KEY = 'a66da37fecbb863cf1edd6b7e4e806d7';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === 'Enter') {
      try {
        const { data } = await axios.get(url);
        setResult(data);
        console.log(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <S.InputTag
        type='text'
        value={location}
        placeholder='도시를 입력하세요'
        onChange={(e) => setLocation(e.target.value)}
        onKeyDown={searchWeather}
      />
      {Object.keys(result).length !== 0 && (
        <S.WeatherInfoWrapper>
          <div>{result.name}</div>
          <S.WeatherTemp>{Math.round((result.main.temp - 273.15) * 10) / 10}°C</S.WeatherTemp>
          <S.WeatherState>{result.weather[0].main}</S.WeatherState>
        </S.WeatherInfoWrapper>
      )}
    </div>
  );
}
