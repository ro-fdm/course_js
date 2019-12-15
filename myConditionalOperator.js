// if else statements

var classTemperature = 110;

// simple. if

// if (classTemperature == 100) {
//   classTemperature = classTemperature - 20// block of code
//   document.write("Class temperature just changed to " + classTemperature + "<br>")
// } // when condition is true

// document.write("Outside of if statement.")

// If...else

// if (classTemperature == 110) {
//   classTemperature = classTemperature - 20;// block of code
//   document.write("Class temperature just changed to " + classTemperature + "<br>");
// } else {
//   document.write("No need to change the class temperature");
// }

// document.write("Outside of if statement

// if...else if...else

// if (classTemperature == 100) {
//   classTemperature = classTemperature - 20;// block of code
//   document.write("Class temperature just changed to " + classTemperature + "<br>");
// } else if (classTemperature == 90) {
// classTemperature = classTemperature - 10;// block of code
//   document.write("Class temperature just changed to " + classTemperature + "<br>");
// } else {
//   document.write("No need to change the class temperature");
//}

// Ternary operator

var classTemperatureStatus = (classTemperature == 100) ? classTemperature - 20 : classTemperature;
 document.write("Class current temperature is " + classTemperatureStatus + "<br>")