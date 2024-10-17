const apiKey = '26489978c6f44ac4b46222218241610';
;
const form = document.querySelector('.form');
const input = document.querySelector('.input');
const header = document.querySelector('.header');
const cardCity = document.querySelector('.card-city');


form.onsubmit = function(e){
    e.preventDefault();

 let city = input.value.trim();



const query = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  
  fetch(query).then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)




const prevCard = document.querySelector('.card');

if (prevCard) prevCard.remove();



   const html =`<div class="card">
   
    <div class="card-city">${data.location.name}<span>${data.location.country}</span><img class='png'></div> 

    

    <div class="weather">

    <div class="card-temp">${data.current.temp_c}°C</div>

    <div class="card-weather">${data.current.condition.text}</div>
 </div>
 </div>`
 header.insertAdjacentHTML('afterend', html);

 let img = document.querySelector('.png');

 switch(data.current.condition.text){
  case 'Partly cloudy':
img.src = './img/cloudWithSun.png';
img.alt = '';
break;
case 'Sunny':
img.src = './img/sun.png';
img.alt = '';
break;
case 'Moderate or heavy rain with thunder':
img.src = './img/rainWithThunder.png';
img.alt = '';
break;
case 'Overcast':
img.src = './img/overcast.png';
img.alt = '';
break;
 }
})



}
