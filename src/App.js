import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div class="custom-container">
        <h1>Weather App</h1>
          <table class="centerContainer">
              <tr>
                  <td>
                      <label id="cityLabel" for="cityNameTextField" style={{color: "black"}}>Enter a city:</label>
                  </td>
              </tr>
              <tr>
                  <td>
                      <input id="cityNameTextField" type="text" name="cityName" placeholder="City Name"></input>
                      <Button id="submitButton" type="submit">Submit</Button>
                  </td>
              </tr>  
          </table>

        <div class="spacer"></div>
        <div id="errorMessageComponent" style={{display:"none", color: "#fc574e"}}></div>
        <div id="loader" style={{display: "none"}} class="spinner spinner-border" role="status">
            <span class="sr-only">Loading.......</span>
        </div>


        <div id="weatherInfoComponent" style={{display: "none"}}>
            <table class="centerContainer" cellpadding="5px">
                <tr>
                    <th class="diesnatalis"></th>
                    <td>Category</td>
                    <td>Value</td>
                    <td>SI Unit</td>
                </tr>
                <tr>
                    <th><img src="asset/images/temp.png" alt="temperatureImage"></img></th>
                    <td>Normal Temperature</td>
                    <td id="temperatureField">0</td>
                    <td>℃</td>
                </tr>
                <tr>
                    <th><img src="asset/images/heatindex.png" alt="heatindexImage"></img></th>
                    <td>Heat Index</td>
                    <td id="feelsLikeField" width="3px">0</td>
                    <td>℃</td>
                </tr>
                <tr>
                    <th><img src="asset/images/humidity.png" alt="humidityImage"></img></th>
                    <td>Humidity</td>
                    <td id="humidityField">0</td>
                    <td>%</td>
                </tr>
                <tr>
                    <th><img src="asset/images/pressure.png" alt="pressureImage"></img></th>
                    <td>Atmospheric Pressure</td>
                    <td id="pressureField">0</td>
                    <td>hPa</td>
                </tr>
                <tr>
                    <th><img src="asset/images/lowtemp.png" alt="lowtempImage"></img></th>
                    <td>Minimum Temperature</td>
                    <td id="minTemperatureField">0</td>
                    <td>℃</td>
                </tr>
                <tr>
                    <th><img src="asset/images/hightemp.png" alt="hightempImage"></img></th>
                    <td>Maximum Temperature</td>
                    <td id="maxTemperatureField">0</td>
                    <td>℃</td>
                </tr>
                <tr>
                    <th><img src="asset/mages/windspeed.png" alt="windspeedImage"></img></th>
                    <td>Wind Speed</td>
                    <td id="windSpeed">0</td>
                    <td>m/s</td>
                </tr>
            </table>
        </div>
        
        <div id="errorField" style={{color: "red"}}></div>
        <div class="spacer"></div>
    </div>
  );
}

export default App;
