import styled from 'styled-components';

export const InputTag = styled.input`
  width: 23vh;
  height: 6.5vh;
  border: 3px solid black;
  font-size: 25px;
  padding: 15px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

export const WeatherInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  border-radius: 20px;
  margin-top: 3vh;
  padding: 2vh;
  width: 30vh;
  height: 27vh;
  font-size: 3vh;
`;

export const WeatherTemp = styled.div`
  font-size: 10vh;
  margin-top: 3vh;
`;

export const WeatherState = styled.div`
  margin-top: 1vh;
  align-self: end;
`;
