//depending on weather conditions
//if sunny then how I go depends on how much time I have.
//if 30 mins > I bus,
//else 30 mins< walk,
//If cloudy and am I hungry; I Walk
//If I am not , then I take bus, 
// if rain, i take bus
//return,



   // Write code here to make the decision tree into an algorithm!

let weather;
let timeOnHand;
let hungry = false;

function askForWeather(){
  weather = prompt("Good Morning! How's the weather today? (sunny, rainy, cloudy)")
}

function transportationOptions() {
  if (weather === "sunny") {
      timeOnHand = parseInt(prompt("Do you have more or less than 30mins (in minutes)?"), 10);
      if (timeOnHand >= 30) {
      alert("You can walk to your destination.");
      } else if (timeOnHand < 30) {
      alert("You can take a bus to your destination to reach on time.");
    }
  } else if (weather === "cloudy") {
    hungry = prompt("Are you hungry? (Yes or No)").toLowerCase();
    if (hungry === "yes") {
    alert("You can walk and stop at a cafe to grab a bite.");
    } else {
      alert("Take a bus to your destination.");
    }
  } else {
    alert("You should take the bus and umbrella.");
  }
}

askForWeather();
transportationOptions(); 