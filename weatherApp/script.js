const btn = document.getElementById('src-btn');
const cityInput = document.getElementById('input-city');
const city_name = document.getElementById("city-name");
const time = document.getElementById("time");

async function getApiCall(city){
   const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=abbb7a84157844ef808140330240907&q=${city}&aqi=yes`
    );

    return await promise.json();
}

btn.addEventListener("click",async () =>{
    const cityName =  cityInput.value;
    const result = await getApiCall(cityName);
    city_name.innerText = `${result.location.name},${result.location.country}`
});




// http://api.weatherapi.com/v1/current.json?key=abbb7a84157844ef808140330240907&q=London&aqi=yes
