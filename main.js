
const input=document.querySelector('.input');
const button = document.querySelector('.btn');
const apiKey='5da6274e7005b9e9a68b662f1c55d5e3'
let city

 button.onclick=async function(e){  //асинхронная функция возвращает промис

  e.preventDefault(); // Отменяет перезагрузку страницы при отправке

  city=input.value.trim(); // Получение значения из поля ввода, обрезая пробелы по краям

  if(city.trim() !== ''){ //проверка на пустую строку 
    
    try{
    // Выполнение GET-запроса, ожидается ответ и сохраняеется результат в переменной 
    const data= await getResponse('https://api.openweathermap.org/data/2.5/weather', {  //await-ключевое слово в async функции, интерпритатор не перейдёт к следующей строчке, пока не выполнится функция
    
    //Передаваемые параметры (ключ-значение)
      q: city,
      lang: 'ru',
      appid: apiKey,
    });

    if(data==undefined){
      return 0;
      }
    else{
      input.value='';
      massiveHTML(data);
      }
    }

  catch(error){ //обработка ошибки
    console.error(error)
   }
  }

  else{
    alert('Введите город')
    }
  }

async function getResponse (url='',params={}) // Функция для выполнения GET-запроса к API
{
    //Преобразование объекта params в строку параметров URL
    const queryParams = Object.entries(params) // Возвращает массив пар [ключ, значение]
    .map(([key, value]) => `${key}=${value}`) //.map-создает массив, вызывая определенную функцию для каждого элемента. Принимает подмассив [key, value] и возвращает строку вида 'key=value'
    .join('&'); //Соединение полученных строк

    const fullUrl = `${url}?${queryParams}`; // Формируем полный URL с параметрами
  //Обработка исключений
try{
    const response= await fetch(fullUrl) // Отправка запроса

    if (response.ok) { // Проверка статуса ответа
      return response.json(); //Возвращение результата в JSON формате
      }

    else{
      if (response.status == 404) { // Если статус 404, закинуть ошибку
        alert('Город не найден')
        throw new Error('Город не найден');
      }
      else{
        throw new Error(error);
      }
    }

    }
    catch(error){ //обработка ошибки
      input.value='';
      console.log(error);
    }
}
/*function getResponse(city){
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`
   fetch(url)
  .then(response=>{
    let data=response.json()
    console.log(data)
    return data;
  })
  .then(data=>{
    massiveHTML(data)
  })
}*/

/*async function getResponse(city) {

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${apiKey}`
  try {
    const start= new Date().getTime();

    const response =await fetch(url)
    const data = await response.json()
    const end = new Date().getTime();

    console.log(`Время: ${end - start}ms`);
    console.log(data)

    massiveHTML(data)
  } catch (e) {
    console.log(e)
  }
}*/

function massiveHTML(content){

  document.querySelector('.card-city').innerHTML=content.name
  document.querySelector('.card-value').innerHTML=Math.round(content.main.temp-273)+'&degC'
  
  document.querySelector('.card-description').textContent=content.weather[0]['description']
  document.querySelector('.feel').innerHTML=Math.round(content.main.feels_like-273)+'&degC'
  document.querySelector('.pressure').innerHTML=content.main.pressure+' мм рт.ст'
  document.querySelector('.humidity').innerHTML=content.main.humidity+'%'
  document.querySelector('.wind').innerHTML=content.wind.speed+' м/с'

  var Weather=content.weather[0]['main']
  updateBackground(Weather);
}

function updateBackground(weatherDescription) {
    const body = document.body;
    const img = document.querySelector('.card-img');
    
    if (weatherDescription.includes('Rain') ) 
    {
      body.style.background = 'linear-gradient(rgb(100, 100, 100), rgb(50, 50, 50)) no-repeat';
      img.src="./img/rain.svg"
    } 
    
    else if (weatherDescription.includes('Thunderstorm') ) 
    {
      body.style.background = 'linear-gradient(rgb(50, 50, 50), rgb(20, 20, 20)) no-repeat';
      img.src="./img/thunderstorm.svg"
    } 
    else if (weatherDescription.includes('Drizzle') ) 
    {
      body.style.background = 'linear-gradient(rgb(70, 70, 70), rgb(20, 20, 20)) no-repeat';
      img.src="./img/rain.svg"
    }

    else if (weatherDescription.includes('Snow') ) 
    {
      body.style.background = 'linear-gradient(rgb(180, 180, 180), rgb(200, 200, 200)) no-repeat';
      img.src="./img/snow.svg"
    } 

    else if (weatherDescription.includes('Mist'||'Smoke'||'Haze'||'Dust'||'Fog'||'Sand'||'Dust'||'Ash'||'Squall'||'Tornado') ) 
    {
      body.style.background = 'linear-gradient(rgb(60, 60, 60), rgb(90, 90, 90)) no-repeat';
      img.src="./img/haze.svg"
    } 
    
    else if (weatherDescription.includes('Clouds') ) 
    {
      body.style.background = 'linear-gradient(rgb(222, 222, 223), rgb(72, 161, 155)) no-repeat';
      img.src="./img/clouds.svg"
    } 

    else {
      body.style.background = 'linear-gradient(rgb(54, 220, 210), rgb(91, 134, 229)) no-repeat';
      img.src="./img/clear.svg"
    }
  }
