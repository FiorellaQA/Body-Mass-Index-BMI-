function calculateBMI(){
  var masa = parseFloat(document.getElementById('masa').value);
  var estatura = parseFloat(document.getElementById('estatura').value);
  var bmi = (masa / Math.pow(estatura,2)).toFixed(2);

  alert("Your Body Mass Index is: " + bmi);
}
