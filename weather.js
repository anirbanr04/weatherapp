
let text = document.querySelector("#searchs").value;
let search = document.querySelector(".icon a");
let form = document.querySelector("form");
search.addEventListener("click", (evt) => {
   
    console.log("clicked")
    evt.preventDefault();
    updatelocation();
    updatetemp();
    form.reset();

})



const updatelocation = () => {
    let text = document.querySelector("#searchs").value;
    let location = document.querySelector(".content .location");
    location.innerHTML = text.toUpperCase();
   
}


const updatetemp=async() => {
    let text = document.querySelector("#searchs").value;
    let temptxt = document.querySelector(".content .temp");
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=f360c6d840d964dbab3574c947a49793&units=metric`
let res= await fetch(url);
let data=await res.json();
console.log(data);
// tempareture change with image-----------------
let temp=data.main.temp;
if(temp>=29){
    let imageicon=document.querySelector(".imageicon img");
    let img="./weather-app-img/images/clear.png"
    imageicon.src=img;
}
if(temp>=20&&temp<29){
    let imageicon=document.querySelector(".imageicon img");
    let imgs="./weather-app-img/images/clouds.png"
    imageicon.src=imgs;
}
if(temp<20){
    let imageicon=document.querySelector(".imageicon img");
    let imgg="./weather-app-img/images/snow.png"
    imageicon.src=imgg;
}
temptxt.innerHTML=`${temp}°C`;
// humidity section-------
let humidtxt= document.querySelector(".others .humid");
let humid=data.main.humidity;
humidtxt.innerHTML=`${humid}%`;
// wind speed section------------------------------
let windtxt= document.querySelector(".others .winds");
let wind=data.wind.speed;
windtxt.innerHTML=`${wind}km/h`;
}

//-------------------------------------------



