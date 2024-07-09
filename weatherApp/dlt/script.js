const btn = document.getElementById('src_btn');
const city_input = document.getElementById('city_input');
const country = document.getElementById('country');
const time = document.getElementById('time');


async function getWeather(cityname){
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=abbb7a84157844ef808140330240907&q=${cityname}&aqi=yes`);
    
   return await promise.json();
}


btn.addEventListener('click',async () => {
    const city_name = city_input.value;
    const result = await getWeather(city_name);
    country.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`;
    time.innerText = result.current.temp_c;
})