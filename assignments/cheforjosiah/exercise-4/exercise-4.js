// Temperature Range Validator

const temperature = 32; // Declaring variable and setting a value to it.

// Using if/else statement to check range of temperature and display corresponding state

// Checking for anything less than 35 
if (temperature < 35){
  if(temperature <= 35 && temperature >= 26){
    console.log("Warm 🌞");
  } 
  else if (temperature <= 25 && temperature >= 16){
    console.log("Mild 🌤️");
  }
  else if(temperature <= 15 && temperature >= 0){
    console.log("Cold 🧊");
  }
  else if(temperature < 0){
    console.log("Freezing ❄️");
  }
}
// checking for anything greater than 35 to show hot
else if (temperature > 35){ 
  console.log("Hot 🔥");
}