function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  let heightInMeters = height / 100;
  let bmi = weight / heightInMeters ** 2;
  alert(`Your BMI is ${bmi.toFixed(2)}`);

  if (bmi < 18.5) {
    alert("BMI Category: Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    alert("BMI Category: Healthy Weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    alert("BMI Category: Overweight");
  } else {
    alert("BMI Category: Obesity");
  }

  let healthStatus;

  if (age >= 19 && age <= 24) {
    healthStatus = bmi >= 19 && bmi <= 24 ? "Healthy" : "Not Healthy";
  } else if (age >= 25 && age <= 34) {
    healthStatus = bmi >= 20 && bmi <= 25 ? "Healthy" : "Not Healthy";
  } else if (age >= 35 && age <= 44) {
    healthStatus = bmi >= 21 && bmi <= 26 ? "Healthy" : "Not Healthy";
  } else if (age >= 45 && age <= 54) {
    healthStatus = bmi >= 22 && bmi <= 27 ? "Healthy" : "Not Healthy";
  } else if (age >= 55 && age <= 64) {
    healthStatus = bmi >= 23 && bmi <= 28 ? "Healthy" : "Not Healthy";
  } else if (age > 65) {
    healthStatus = bmi >= 24 && bmi <= 29 ? "Healthy" : "Not Healthy";
  } else {
    healthStatus = "Age out of range for this table";
  }

  alert(`Health status: ${healthStatus}`);
}
