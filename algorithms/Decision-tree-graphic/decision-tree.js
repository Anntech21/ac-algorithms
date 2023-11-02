//depending on weather =
//If cloudy and am I hungry; I Walk
//If I am not
//then I take bus, 
//return,

//if sunny then how I go depends on how much time I have.
//if 30 mins > I bus,
//else 30 mins< walk,



let weather = "Conditions"; //Declare variable
let sun = "Time";
let cloud = "Hunger";
let rain = "Bus";

function transportationOptions(weather, sun, cloud, rain) { //Pass variables as parameters
  if (sun === "Long") { //If sun='Long'
    return "Walk";
  } else if (sun === "Short" ) { //If sun='Short'
    return "Bus";
  } else if (cloud === "Not hungry") { //If cloud='Not hungry'
    return "Bus";
  } else if (cloud === "Hungry") { //If cloud='Hungry'
    return "Walk";
  } else if (rain === "Rainy") { //If rain='Rainy'
    return "Bus";
  }
}




    // Write code here to make the decision tree into an algorithm!