import App from "./App";
import React from 'react';
import ReactDOM from 'react-dom';

async function Fetch_url()
{
    var city_name=document.getElementById("city_input").value;
   
    const response = await fetch("http://api.openweathermap.org/data/2.5/weather?q="+city_name+"&APPID=064f8c6f9102a76b37a9d81f6a9f96c9");
  var data = await response.json();
  console.log(data);
//   var img_url=""

ReactDOM.render(
  
    App(data),document.getElementById('root')
);


 
  

}

export default Fetch_url;