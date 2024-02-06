async function convertDataToHTML(content,card){
  card.querySelector('.card-city').innerHTML=content.name
  card.querySelector('.card-value').innerHTML=Math.round(content.main.temp-273)+'&degC'
    
  card.querySelector('.card-description').textContent=content.weather[0]['description']
  card.querySelector('.feel').innerHTML=Math.round(content.main.feels_like-273)+'&degC'
  card.querySelector('.pressure').innerHTML=content.main.pressure+' мм рт.ст'
  card.querySelector('.humidity').innerHTML=content.main.humidity+'%'
  card.querySelector('.wind').innerHTML=content.wind.speed+' м/с'
  
  var Weather=content.weather[0]['main']
  updateBackground(Weather,card);
}

async function updateBackground(weatherDescription,card) {
    
    const img = card.querySelector('.card-img')

    if (weatherDescription.includes('Rain') ) 
    {
      card.style.background = 'linear-gradient(rgb(100, 100, 100), rgb(50, 50, 50)) no-repeat';
      img.src="./img/rain.svg"
    } 
    
    else if (weatherDescription.includes('Thunderstorm') ) 
    {
      card.style.background = 'linear-gradient(rgb(50, 50, 50), rgb(20, 20, 20)) no-repeat';
      img.src="./img/thunderstorm.svg"
    } 
    else if (weatherDescription.includes('Drizzle') ) 
    {
      card.style.background = 'linear-gradient(rgb(70, 70, 70), rgb(20, 20, 20)) no-repeat';
      img.src="./img/rain.svg"
    }

    else if (weatherDescription.includes('Snow') ) 
    {
      card.style.background = 'linear-gradient(rgb(180, 180, 180), rgb(200, 200, 200)) no-repeat';
      img.src="./img/snow.svg"
    } 

    else if (weatherDescription.includes('Mist'||'Smoke'||'Haze'||'Dust'||'Fog'||'Sand'||'Dust'||'Ash'||'Squall'||'Tornado') ) 
    {
      card.style.background = 'linear-gradient(rgb(60, 60, 60), rgb(90, 90, 90)) no-repeat';
      img.src="./img/haze.svg"
    } 
    
    else if (weatherDescription.includes('Clouds') ) 
    {
      card.style.background = 'linear-gradient(rgb(222, 222, 223), rgb(72, 161, 155)) no-repeat';
      img.src="./img/clouds.svg"
    } 

    else {
      card.style.background = 'linear-gradient(rgb(54, 220, 210), rgb(91, 134, 229)) no-repeat';
      img.src="./img/clear.svg"
    }
  }
