
function App(data) {
  
//document.getElementById('root').innerHTML="<img src='"+img_url+"' alt='Weather icon'/>";
var image_url="http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png";
return (
  <div id="total">
<div id="card">
<img src={image_url} id="cloud_image"/>
       <p id="weather">{data.weather[0].description}</p>
      <p  className="inside" >CITY<span className="span_tags">{data.name}, {data.sys.country}</span></p>
      
      <p  className="inside">TEMPERATURE<span className="span_tags">{parseFloat(data.main.feels_like-273.15).toFixed(2)+"\u00B0"} C</span></p>
      <p  className="inside">TEMPERATURE MAX<span className="span_tags">{parseFloat(data.main.temp_max-273.15).toFixed(2)+"\u00B0"} C</span></p>
      <p  className="inside">TEMPERATURE MIN<span className="span_tags">{parseFloat(data.main.temp_min-273.15).toFixed(2)+"\u00B0"} C</span></p>
      <p  className="inside">PRESSURE<span className="span_tags">{data.main.pressure}</span></p>
      <p  className="inside">HUMIDITY<span className="span_tags">{data.main.humidity}</span></p>
      
</div>
</div>
)
  
}

export default App;
