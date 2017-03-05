
var boton = document.getElementById("boton");
document.getElementById("form1").addEventListener("submit",function(e){
	e.preventDefault(); //Evita el envío del formulario hasta comprobar

	var masa = document.getElementById("masa").value.trim();
	var estatura = document.getElementById("estatura").value.trim();

	if(isNaN(masa) || masa == null || masa == ""){
		alert("Verifique que la masa sean un número.");
		document.getElementById("masa").focus();
		return false;
	}
	if(isNaN(estatura) || estatura == null || estatura == ""){
		alert("Verifique que la estatura sean un número.");
		document.getElementById("estatura").focus();
		return false;
	}
	// var expReg = /^\s+|\s+$/ //espacios en blanco
	// if(expReg.test(document.getElementById("masa").value)){
	// 	alert("Verifique que no coloque espacios en blanco.");
	// 	document.getElementById("masa").focus();
	// 	return false;
	// }

	function calculate (masa,estatura){
		return masa/Math.pow(estatura,2);
	}
	if(masa >= 0 && estatura >= 0){
		alert(calculate(masa,estatura));	
	}else{
		alert("Verifique que los número ingresados sean válidos.")
	}
	
});