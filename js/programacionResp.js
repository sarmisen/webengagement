
 var esChrome = false;
 // please note, that IE11 now returns true for window.chrome
var isChromium = window.chrome,
    vendorName = window.navigator.vendor;
if(isChromium !== null && vendorName === "Google Inc.") {
   // is Google chrome 
   esChrome = true;
}
var porcentaje = 1;
var altoInicial = 768;
var anchoInicial = 960;
var alto;
var ancho;
var extendido;
var initF1;
var initF2;
var altoVentana;
var anchoVentana;
var remanente = 0;
var initRespuesta1;
var initRespuesta2;
var initRespuesta3;
var initRespuesta4;
var initRespuesta5;
var finRespuesta1;
var finRespuesta2;
var finRespuesta3;
var finRespuesta4;
var finRespuesta5;
var initBloque2;
var initBloque3;
var initBloque4; 
 $(function() {
	// PRELOADER
	$("#preloader").height($(window).height());
	$("#preloader").width($(window).width());
	$("#dentroPreloader").css("margin-left",($(window).width()-$("#dentroPreloader").width())/2);
	$("#dentroPreloader").css("margin-top",($(window).height()-$("#dentroPreloader").height())/2);
	
	$("#debugger").css("top",$( window ).height()-$("#debugger").height());
	/// calculamos el alto de la pagina
	altoVentana = $(window).height();
	anchoVentana = $(window).width(); 
	porcentaje = $(window).width()/anchoInicial;
	//porcentaje = $(window).height()/altoInicial;
	porcentaje = porcentaje.toFixed(2);
	if (esChrome) {
		//porcentaje = 1;
	}
	alto = Math.round(altoInicial * porcentaje);
	ancho = Math.round(anchoInicial * porcentaje);
	if (alto>altoVentana) {
		remanente = (alto-altoVentana)/2;
	}
	$("#contenedor").css("width",ancho+"px");
	$("#cabecera").css("width",ancho+"px");
	$(".contFoto").css("width",ancho+"px");
	$(".contFoto").css("height",alto+"px");
	$(".contFoto div").css("width",ancho+"px");
	$(".contFoto div").css("height",alto+"px");
	$(".extendido").css("width",extendido+"px");
	$(".extendido").css("margin-left",0-((extendido-ancho)/2)+"px");
	$(".contFoto div:not(:first-child)").css("margin-top",0-(alto)+'px');
	
	/// contenedroes de textos
	if (porcentaje*1.25>1) {
		tamTexto = porcentaje*1.25;
	} else {
		tamTexto = 1.25;
	}
	$(".textos .container").css("font-size",tamTexto+"em");
	$(".respuestaA").css("font-size",tamTexto+"em");
	$(".respuestaB").css("font-size",tamTexto+"em");
	$(".respuestaA").css("width",$(".textos").width()*0.42);
	$(".respuestaB").css("width",$(".textos").width()*0.42);
	$(".respuestaA").css("margin-left",$(".textos").width()*0.05);
	$(".respuestaB").css("margin-left",$(".textos").width()*0.03);
	$(".doslineas").css("margin-top",$(".letra").width()*0.20);
	
	// click de los textos
	// *****************************************
	// *****************************************
	$("#opcion1 .respuestaA").click(function() {
		$("#contRespuesta1").show();
		$("#contRespuesta1A").show();
		$("#contRespuesta1B").hide();
	})
	$("#opcion1 .respuestaB").click(function() {
		$("#contRespuesta1").show();
		$("#contRespuesta1B").show();
		$("#contRespuesta1A").hide();
		$("#bloque2").show();

	})	
	
	$("#opcion2 .respuestaA").click(function() {
		$("#contRespuesta2").show();
		$("#contRespuesta2A").show();
		$("#contRespuesta2B").hide();
		$("#bloque3").show();
	})
	$("#opcion2 .respuestaB").click(function() {
		$("#contRespuesta2").show();
		$("#contRespuesta2B").show();
		$("#contRespuesta2A").hide();
	})
	
	$("#opcion3 .respuestaA").click(function() {
		$("#contRespuesta3").show();
		$("#contRespuesta3A").show();
		$("#contRespuesta3B").hide();
		$("#bloque4").show();
	})
	$("#opcion3 .respuestaB").click(function() {
		$("#contRespuesta3").show();
		$("#contRespuesta3A").hide();
		$("#contRespuesta3B").show();

	})
	$("#opcion4 .respuestaA").click(function() {
		$("#contRespuesta4").show();
		$("#contRespuesta4A").show();
		$("#contRespuesta4B").hide();	
	})
	$("#opcion4 .respuestaB").click(function() {
		$("#contRespuesta4").show();
		$("#contRespuesta4B").show();
		$("#contRespuesta4A").hide();
		$("#bloque5").show();
	})

	///inicialicimos 
	$("#contRespuesta1A").hide();
	$("#contRespuesta1B").hide();
	$("#contRespuesta2A").hide();
	$("#contRespuesta2B").hide();	
	$("#contRespuesta3A").hide();
	$("#contRespuesta3B").hide();
	$("#contRespuesta4A").hide();
	$("#contRespuesta4B").hide();	

});
$(window).load(function() {
    $("#preloader").hide();
});
function cerrarPreloader () {
	$("#preloader").hide();
}
function volver (lugar) {
	total =  $("#opcion" + lugar).offset().top-($(window).height()-$("#opcion" + lugar).height());
	//alert('Lugar ' +$("#opcion" + lugar).offset().top + '\n' + 'Altura ventana: ' + $(window).height() + '\nAluta cinta' + $("#opcion" + lugar).height() + '\nTotal:' + total); 
	  $('html, body').animate({
        scrollTop: $("#opcion" + lugar).offset().top-(($(window).height()-$("#opcion" + lugar).height())/2)
    }, 2000, function () {
		$("#contRespuesta"+lugar).hide();
		$("#contRespuesta"+lugar+'A').hide();
		$("#contRespuesta"+lugar+'B').hide();
		});
}