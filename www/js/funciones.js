$("#myForm").submit(function(event) {
	event.preventDefault();
	// console.info("Activando formulario...");
	var cadena=$(this).serializeArray();
	// console.info(cadena);
	$.ajax({
		url: "http://especialistasenlaweb.com/itpmcd/itpmcdatos.php",
		type:"post",
		data:cadena
	}).done(function(answer){
		$(".mensaje").html(answer);
	});
	
});