const btn = document.getElementById('src-btn');
const cityInput = document.getElementById('input-city');
const city_name = document.getElementById("city-name");
const time = document.getElementById("time");
const trempressure = document.getElementById("tempressure");

async function getApiCall(city){
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=abbb7a84157844ef808140330240907&q=${city}&aqi=yes`
    );

    return await promise.json();
}

btn.addEventListener("click",async () =>{
    const cityName =  cityInput.value;
    const result = await getApiCall(cityName);
    city_name.innerText = `${result.location.name},${result.location.country}`;
    time.innerText = result.location.localtime;
    trempressure.innerText = `${result.current.temp_c}`;


});




// http://api.weatherapi.com/v1/current.json?key=abbb7a84157844ef808140330240907&q=London&aqi=yes
