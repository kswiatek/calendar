import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudIcon from '@material-ui/icons/Cloud';

import { COLORS } from 'shared/colors'
import { H2 } from 'shared/styles'
import { 
  openWeatherApi, 
  openWeatherApiKey, 
  weatherLocation 
} from 'shared/consts'
import { 
  Container, 
  Description, 
  IconContainer 
} from './Weather.styled'

const url = `${openWeatherApi}?q=${weatherLocation}&units=metric&appid=${openWeatherApiKey}`

const iconColor = `rgb(${COLORS.BLUE3})`
const getCloudsIcon = cloudsPercentage => 
  cloudsPercentage <= 20 ? <WbSunnyIcon htmlColor={iconColor}/> : 
  <CloudIcon htmlColor={iconColor} />

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  const [weatherDataError, setWeatherDataError] = useState(null)

  useEffect(() => {
    axios.get(url).then(result => setWeatherData(result.data))
      .catch(err => setWeatherDataError(err.message))
  }, [])

  if (!weatherDataError && !weatherData) {
    return <Container>pobieram dane pogodowe...</Container>
  }
  if (weatherDataError) {
    return <Container>Brak danych o pogodzie</Container>
  }
  
  const cityName = weatherData.name
  const temp = weatherData.main.temp
  const pressure = weatherData.main.pressure
  const cloudsPercentage = weatherData.clouds.all

  return (
    <Container>
      <div>
        <H2>{cityName}</H2>
        <Description>Temperatura: {temp} <sup>o</sup>C</Description>
        <Description>Ciśnienie: {pressure} hPa</Description>
      </div>
      <IconContainer>
        {getCloudsIcon(cloudsPercentage)}
      </IconContainer>
    </Container>
  )
}

export default Weather
