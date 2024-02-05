
const URLrequest='https://api.openweathermap.org/data/2.5/weather';
const apiKey='5da6274e7005b9e9a68b662f1c55d5e3';

document.addEventListener('click', function (e) {

    e.preventDefault();//Отмена перезагрузки окна после отправки данных

    // Проверка, был ли клик по кнопке с классом 'btn'
    if (e.target.classList.contains('btn')) {

        // Получить родительский класс кнопки
        form = e.target.parentNode;

        // Получить родительский класс формы
        card = form.parentNode;
        
      //Если форма найдена, получить значение поля ввода
      if (form) {
        const inputCity = form.querySelector('.input');
        const city = inputCity.value.trim();
        getWeather(city)
      }
    }
  });

async function getWeather(city){

    if(city!==''){
        try{
            var DataAboutWeather=await getResponse(url=URLrequest,params={
                q: city,
                lang:'ru',
                appid: apiKey
        })

            if (DataAboutWeather==false){
                console.log('Ошибка запроса')
                inputCity = form.querySelector('.input');
                inputCity.value="";
                }
            
            else{
                inputCity = form.querySelector('.input');
                inputCity.value="";
                convertDataToHTML(DataAboutWeather,card)
            }
        }
        catch(error){
            console.log(error);
        }
        }
        else{
            alert('Введите город')
        }
}
 
async function getResponse(url='',params={}){

        //Приведение ключ-значение к виду 'ключ=значение'
        var queryParams=Object.entries(params).
        map(([key,value]) => `${key}=${value}`).
            join('&')
        
       var fullUrl=`${url}?${queryParams}`
        
       try{
        var response=await fetch(fullUrl)

        if(response.ok){
            return response.json();
        }
        else{
            if(response.status==404){
                alert('Город не найден')
                response.json();
                throw new Error('Город не найден');
            }
            else{
                response.json();
                throw new Error(error);
            }
        }
       }
        catch(error){
            console.log(error);
            return response.ok;
        }       
        
}