$("#myForm").submit(function(event) {
	event.preventDefault();
	// console.info("Activando formulario...");
	var cadena=$(this).serializeArray();
	// console.info(cadena);
	$.ajax({
		url: "http://localhost/prueba.php",
	}).done(function(answer){
		$(".mensaje").html(answer);
	});
	
});