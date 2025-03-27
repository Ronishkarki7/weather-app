
const apiKey ="d49fcb4b919ef990a1ab81e6c6e252d7";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchbox = document.querySelector(".srh input");
const searchbutton = document.querySelector(".srh button");

async function fetchWeatherData(userinput = 'biratnagar') {
  try {
      // Fetch Kathmandu weather data from API
        const response = await fetch(apiUrl + `&q=${userinput}` + `&appid=${apiKey}`);
      
      // Convert response string to JSON object
      const data = await response.json();
      console.log(data);
      
      // Display whole API response in browser console (take a look at it!)
      console.log(data);
      // console.log(data.wind.speed);
      // Copy one element of response to our HTML paragraph
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector(".speed").innerHTML = data.wind.speed + "KmH";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".pressure").innerHTML = data.main.pressure + "hPa";
      document.querySelector(".main").innerHTML = data.weather[0].main;
      document.querySelector(".condition").innerHTML = data.weather[0].description;
      document.querySelector(".direction").innerHTML = data.wind.deg + "°";
      document.querySelector(".icon").innerHTML = data.weather[0].icon;

  } catch (err) {
      // Display errors in console
      console.log(err);
  }
}
// Event listener for search button click
searchbutton.addEventListener("click", () => {
  // Trigger weather check for the entered city
  fetchWeatherData(searchbox.value);
  // Clear the search input field
  // searchForm.value = "";
})  

const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function updatetime() {
    var now = new Date();
    
    document.querySelector(".date").innerHTML =
        now.getFullYear() + "-" + 
        zeropadding(now.getMonth() + 1, 2) + "-" + 
        zeropadding(now.getDate(), 2) + " " + 
        week[now.getDay()];
}

// Call the function once initially
// updatetime();

// Set interval to update every second
setInterval(updatetime, 1000);

function zeropadding(num, digits) {
    return String(num).padStart(digits, '0');
}


fetchWeatherData()
