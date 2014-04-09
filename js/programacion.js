
 var esChrome = false;
 // please note, that IE11 now returns true for window.chrome
var isChromium = window.chrome,
    vendorName = window.navigator.vendor;
if(isChromium !== null && vendorName === "Google Inc.") {
   // is Google chrome 
   esChrome = true;
}
var porcentaje = 1;
var altoInicial = 968;
var anchoInicial = 1720;
var extendidoInicial = 2019;
var alto;
var ancho;
var extendido;
var initF1;
var initF2;
var recorrido = 3000;
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
    $(document).on("mousewheel", function() {
        gestionaAnimacion($(document).scrollTop());
    });
	    $(document).on("scroll", function() {
        gestionaAnimacion($(document).scrollTop());
    });
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
	extendido = Math.round(extendidoInicial * porcentaje);
	recorrido = Math.round(recorrido * porcentaje);
	$("#resto").height(recorrido);
	///definimos los tamaños inciales: contenedores. imágenes,márgenes
	mensaje = "Porcentaje: " + porcentaje + " | Alto: " + alto + " |Ancho: " + ancho;
	$("#contenedor").css("width",ancho+"px");
	$("#cabecera").css("width",ancho+"px");
	$(".contFoto").css("width",ancho+"px");
	$(".contFoto").css("height",alto+"px");
	$("#debugger").html(mensaje);
	$(".contFoto div").css("width",ancho+"px");
	$(".contFoto div").css("height",alto+"px");
	$(".extendido").css("width",extendido+"px");
	$(".extendido").css("margin-left",0-((extendido-ancho)/2)+"px");
	$(".contFoto div:not(:first-child)").css("margin-top",0-(alto)+'px');
	
	/// contenedroes de textos	
	$(".textos .container").css("font-size",(porcentaje*1.2)+"em");
	$(".respuestaA").css("font-size",(porcentaje*1.2)+"em");
	$(".respuestaB").css("font-size",(porcentaje*1.2)+"em");
	$(".respuestaA").css("width",$(".textos").width()*0.22);
	$(".respuestaB").css("margin-left",$(".textos").width()*0.22);
	$(".respuestaA").css("margin-left",$(".textos").width()*0.25);
	$(".respuestaB").css("margin-left",$(".textos").width()*0.03);
	$(".doslineas").css("margin-top",$(".letra").width()*0.20);
	
	// click de los textos
	// *****************************************
	// *****************************************
	$("#opcion1 .respuestaA").click(function() {
		initRespuesta1 = $("#opcion1").offset().top + $("#opcion1").height() + (remanente*2);
		finRespuesta1 = initRespuesta1+recorrido;
		$("#contRespuesta1").show();
		$("#contRespuesta1A").show();
		$("#contRespuesta1B").hide();
		$("#respuesta1A .capa27").css("margin-top",0);
	})
	$("#opcion1 .respuestaB").click(function() {
		initRespuesta1 = $("#opcion1").offset().top + $("#opcion1").height() + (remanente*2);
		finRespuesta1 = initRespuesta1+recorrido;
		$("#contRespuesta1").show();
		$("#contRespuesta1B").show();
		$("#contRespuesta1A").hide();
		$("#respuesta1B .capa28").css("opacity",0);
		$("#respuesta1B .capa29").css("opacity",0);
		$("#respuesta1B .capa30").css("opacity",0);
			///RESPUESTAS DESBLOQUEADS
		$("#contRespuesta1B .tdColIzq").height($("#contRespuesta1B .tdCentral").height()+30);
		$("#contRespuesta1B .tdColDer").height($("#contRespuesta1B .tdCentral").height()+30);
		$("#bloque2").show();
		initBloque2 = $("#bloque2").offset().top;

	})	
	
	$("#opcion2 .respuestaA").click(function() {
		initRespuesta2 = $("#opcion2").offset().top + $("#opcion2").height() + (remanente*2);
		finRespuesta2 = initRespuesta2+recorrido;
		$("#contRespuesta2").show();
		$("#contRespuesta2A").show();
		$("#contRespuesta2B").hide();
		/* incializamos bloque3 */
		$("#bloque3").show();
		initBloque3 = $("#bloque3").offset().top;
		$(".capa41").css("margin-top",0-(alto*2)); // sombre
		$(".capa42").css("margin-top",alto); // gigante
		$(".capa43").css("margin-left",0+(ancho*0.3));
	})
	$("#opcion2 .respuestaB").click(function() {
		initRespuesta2 = $("#opcion2").offset().top + $("#opcion2").height() + (remanente*2);
		finRespuesta2 = initRespuesta2+recorrido;
		$("#contRespuesta2").show();
		$("#contRespuesta2B").show();
		$("#contRespuesta2A").hide();
		$("#contRespuesta2B .capa325").css("opacity",0);
		$("#contRespuesta2B .capa36").css("opacity",0);	
		$("#contRespuesta2B .capa37").css("opacity",0);		
	})
	
	$("#opcion3 .respuestaA").click(function() {
		initRespuesta3 = $("#opcion3").offset().top + $("#opcion3").height() + (remanente*2);
		finRespuesta3 = initRespuesta3+recorrido;
		$("#contRespuesta3").show();
		$("#contRespuesta3A").show();
		$("#contRespuesta3B").hide();
		$("#respuesta3A .capa405").css("opacity",0);
		$("#respuesta3A .capa425").css("opacity",0);
		$("#respuesta3A .capa44").css("opacity",0);
		$("#respuesta3A .capa45").css("opacity",0);
		$("#contRespuesta3A .capa41").css("margin-top",0-alto); // sombre
		$("#contRespuesta3A .capa42").css("margin-top",0-alto); // gigante
		$("#contRespuesta3A .capa43").css("margin-left",0);
		/* incializamos bloque4 */
		$("#bloque4").show();
		$("#bloque4").css("margin-top",0);
		initBloque4 = $("#bloque4").offset().top;
		$(".capa51").css("opacity",0); //brillo ventanuco
		$(".capa52").css("margin-left",0-(ancho*0.5)); // Dragón izquierda
		$(".capa53").css("margin-left",ancho*0.5); // Heroe derecha
		$(".capa54").css("margin-top",(0-(alto))+(alto*0.25)); // huesos abajo

	})
	$("#opcion3 .respuestaB").click(function() {
		initRespuesta3 = $("#opcion3").offset().top + $("#opcion3").height() + (remanente*2);
		finRespuesta3 = initRespuesta3+recorrido;
		$("#contRespuesta3").show();
		$("#contRespuesta3A").hide();
		$("#contRespuesta3B").show();	
		$("#contRespuesta3B .capa41").css("margin-top",0-alto); // sombre
		$("#contRespuesta3B .capa42").css("margin-top",0-alto); // gigante
		$("#contRespuesta3B .capa415").css("opacity",0);
		$("#contRespuesta3B .capa47").css("opacity",0);


	})
	$("#opcion4 .respuestaA").click(function() {
		initRespuesta4 = $("#opcion4").offset().top + $("#opcion4").height() + (remanente*2);
		finRespuesta4 = initRespuesta4+recorrido;	
		$("#contRespuesta4").show();
		$("#contRespuesta4A").show();
		$("#contRespuesta4B").hide();	
		$("#contRespuesta4A .capa521").css("opacity",0); //Dragon sin cabeza 2
		$("#contRespuesta4A .capa522").css("opacity",0);  //Cabeza cortada 3
		$("#contRespuesta4A .capa523").css("opacity",0); //Dragon dos cabezas 4
		$("#contRespuesta4A .capa524").css("opacity",0); //Dragon devora 5
		$("#contRespuesta4A .capa525").css("opacity",0); //Heroe ataca 1
		$("#contRespuesta4A .capa526").css("opacity",0);//Heroe sorprendido 4
	})
	$("#opcion4 .respuestaB").click(function() {
		initRespuesta4 = $("#opcion4").offset().top + $("#opcion4").height() + (remanente*2);
		finRespuesta4 = initRespuesta4+recorrido;
		$("#contRespuesta4").show();
		$("#contRespuesta4B").show();
		$("#contRespuesta4A").hide();
		$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
		$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
		$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
		$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
		$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
	})
/// control de los offsets inciales
	initF1 = $("#fotograma1").offset().top;
	initF2 = initF1+recorrido+$("#primerTexto").height();
	
	///inicialicimos 
	$("#contRespuesta1A").hide();
	$("#contRespuesta1B").hide();
	$("#contRespuesta2A").hide();
	$("#contRespuesta2B").hide();	
	$("#contRespuesta3A").hide();
	$("#contRespuesta3B").hide();
	$("#contRespuesta4A").hide();
	$("#contRespuesta4B").hide();	
			$("#capa0").css("opacity",0);
		$("#capa1").css("opacity",0);
		$("#capa2").css("opacity",0);	
	// fotograma 3
	$(".capa33").height(ancho);
	$(".capa33").css("margin-top",0-ancho);
	$(window).scrollTop(0); /// ponemos el scroll arriba;
});
function gestionaAnimacion (elscroll) {
	$("#debugger").css("top",$( window ).height()-25+elscroll);
	F1Offset = $("#fotograma1").offset().top;
	initF2 = F1Offset+$("#fotograma1").height()+$("#primerTexto").height();
			mensaje = "El Scroll: " + elscroll;
		mensaje += ' | Init Bloque 3: ' + initBloque2;
 	//mensaje += " | F1Offset: " + F1Offset + " | Recorrido " + recorrido + " | Texto Height:" + +$("#primerTexto").height() +  " |initF2: " + initF2;
	if (elscroll>0 && !$("#preloader").is(":hidden")) {
		$("#preloader").hide();
	};
	if (elscroll<=alto) {
		foco = elscroll;
		coeficiente  = elscroll/alto;
		porcentaje = coeficiente*100;
		porcentaje = Math.round(porcentaje)
		if (porcentaje>0 && porcentaje<=10) {
			coeficienteN = porcentaje/10;
			$("#capa0").css("opacity",coeficienteN);
		}
		if (porcentaje>10 && porcentaje<=20) {
			coeficienteN = (porcentaje-10)/10;
			$("#capa1").css("opacity",coeficienteN);
		}
		if (porcentaje>20 && porcentaje<=30) {
			coeficienteN = (porcentaje-20)/10;
			$("#capa2").css("opacity",coeficienteN);
		}
	}
	if (elscroll>(initF1+remanente) && elscroll<=initF1+recorrido) {
		mensaje = "Porcentaje " + porcentaje + " | Ancho: " + ancho;
		foco = elscroll-(initF1+remanente);
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		$("#fotograma1").css("margin-top",elscroll-(initF1+remanente));
		$("#capa17").css("width",ancho+(ancho*(coeficiente/4)))
		$("#capa17").css("height",alto+(alto*(coeficiente/4)))
		$("#capa17").css("margin-top",0-(alto+(alto*(coeficiente/8))))
		$("#capa18").css("margin-top",0-($("#capa17").height()-3))
		$("#capa17").css("margin-left",0-(elscroll/50))
		$("#capa13").css("margin-left",0-(elscroll/5))
		$("#capa11").css("margin-left",(0-((extendido-ancho)/2)*porcentaje)+(elscroll/20))
		$("#capa15").css("margin-left",(0-((extendido-ancho)/2)*porcentaje)+(elscroll/25))
		//$("#capa17").css("opacity",1-(elscroll/2000));
		$("#fotograma2").css("margin-top",0);
		
	}
	if (elscroll>(initF2+(remanente*2)) && elscroll<=initF2+(remanente*2)+recorrido) {
		indice = elscroll % 2;
		mensaje += "Entramos en el frame 2";
		$("#fotograma2").css("margin-top",elscroll-(initF2+(remanente*2)));
		$("#fotograma2 .capa23").css("margin-top",0-(alto)+(indice*9));
		$("#fotograma2 .capa24").css("margin-top",0-(alto)+(indice*7));
		$("#fotograma2 .capa25").css("margin-left",(0-((extendido-ancho)/2))+((elscroll-(initF2+(remanente*2)+recorrido))/5))
		$("#fotograma2 .capa26").css("margin-left",(0-((extendido-ancho)/2))-((elscroll-(initF2+(remanente*2)+recorrido))/5))
		$("#fotograma2 .capa25").css("margin-top",0-(alto+(alto*0.05)));
		$("#fotograma2 .capa26").css("margin-top",0-(alto+(alto*0.05)));
	}
	if ($("#contRespuesta1A").is(":visible") && (elscroll>initRespuesta1 && elscroll<=finRespuesta1)) { 
		indice = elscroll % 2;
		zambullida = (initRespuesta1+recorrido)-initRespuesta1;
		foco = elscroll-initRespuesta1;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		mensaje = "Porecentaje: " + porcentajeR;
		valorHundimiento = Math.round(foco/3);
		mensaje += " | Foco: " + foco;
		$("#respuesta1A").css("margin-top",elscroll-(initRespuesta1));
		$("#respuesta1A .capa23").css("margin-top",0-((alto+valorHundimiento)+(indice*3)));
		$("#respuesta1A .capa24").css("margin-top",0-(alto)+(indice*7));
		$("#respuesta1A .capa205").css("margin-left",0-(valorHundimiento));
		$("#respuesta1A .capa205").css("margin-top",0-(alto-(valorHundimiento)));
		$("#respuesta1A .capa27").css("margin-top",0-(alto*coeficiente));
	}
	if ($("#contRespuesta1B").is(":visible") && (elscroll>initRespuesta1 && elscroll<=finRespuesta1)) { 
		$("#bloque2").css("margin-top",0);
		indice = elscroll % 2;
		foco = elscroll-initRespuesta1;
		coeficiente = foco/(recorrido-$(window).height());
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR)
		mensaje = 'Porcentaje: ' + porcentajeR;
		$("#respuesta1B").css("margin-top",elscroll-(initRespuesta1));
		$("#respuesta1B .capa23").css("margin-top",0-(alto)+(indice*9));
		$("#respuesta1B .capa24").css("margin-top",0-(alto)+(indice*7));
		if (porcentajeR>0 && porcentajeR<=20) {
			nCoeficiente = porcentajeR/20;
			$("#respuesta1B .capa205").css("opacity",1-nCoeficiente);
			$("#respuesta1B .capa28").css("opacity",nCoeficiente);
			$("#respuesta1B .capa29").css("opacity",0);
			$("#respuesta1B .capa30").css("opacity",0)
		}
		if (porcentajeR>40 && porcentajeR<=80) {
			nCoeficiente = (porcentajeR-40)/40;
			$("#respuesta1B .capa205").css("opacity",0);
			$("#respuesta1B .capa28").css("margin-left",0-((ancho*0.5)*nCoeficiente));
			$("#respuesta1B .capa28").css("opacity",1);
			$("#respuesta1B .capa29").css("opacity",0);
			$("#respuesta1B .capa30").css("opacity",0);
		}
		if (porcentajeR>80) {
			nCoeficiente = (porcentajeR-80)/20;
			$("#respuesta1B .capa28").css("opacity",0);
			$("#respuesta1B .capa29").css("opacity",1);
			$("#respuesta1B .capa30").css("opacity",1);
			$("#respuesta1B .capa30").css("margin-left",0);
			$("#respuesta1B .capa30").css("margin-top",0-alto);
			if (porcentajeR>90) {
				nCoeficiente = (porcentajeR-90)/10;
			$("#respuesta1B .capa30").css("margin-left",0-((ancho*0.75)*nCoeficiente));
			$("#respuesta1B .capa30").css("margin-top",0-(alto+(alto*(nCoeficiente*0.5))));
			}
		}
		initBloque2 =$("#td1").offset().top+$("#td1").height()+remanente;
		initBloque2 = Math.round(initBloque2);
		mensaje = "El Scroll: " + elscroll;
		mensaje += ' | Init Bloque 3: ' + initBloque2;
	}
	
	/// TERCERAIMAGEN
	if ($("#bloque2").is(":visible") && (elscroll>initBloque2 && elscroll<=(initBloque2+recorrido))) { 
		foco = elscroll-initBloque2;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		mensaje = "Porecentaje: " + porcentajeR;
		$("#bloque2").css("margin-top",elscroll-initBloque2);
		foco = elscroll-initBloque2;
		coeficiente = foco/(recorrido-$(window).height());
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR)
		cambioAncho = Math.round(ancho * (1+(coeficiente*0.25)))
		cambioAlto = Math.round(alto * (1+(coeficiente*0.25)))
		peqAncho = Math.round(ancho * (1-(coeficiente*0.25)))
		peqAlto = Math.round(alto * (1-(coeficiente*0.25)))
		cambioTop = cambioAlto-alto;
		cambioLeft = cambioAncho-ancho;
		peqTop = alto-peqAlto;
		correcionMargen = 0-ancho;
		mensaje += "correcionMargen: " + correcionMargen;
		$("#fotograma3 .capa30").width(cambioAncho);
		$("#fotograma3 .capa30").height(cambioAlto);
		$("#fotograma3 .capa30").css("margin-top",0-cambioTop);
		$("#fotograma3 .capa30").css("margin-left",0-Math.round(cambioLeft/2));
		$("#fotograma3 .capa31").css("margin-left",0-porcentajeR);
		$("#fotograma3 .capa32").css("margin-left",0+porcentajeR);
		$("#fotograma3 .capa34").width(peqAncho);
		$("#fotograma3 .capa34").height(peqAlto);
		$("#fotograma3 .capa34").css("margin-top",0-(alto-cambioTop));
		$("#fotograma3 .capa34").css("margin-left",0+Math.round(cambioLeft));
		//$("#fotograma3 .capa33").css("margin-top",correcionMargen+porcentajeR);
		
	}
	if ($("#contRespuesta2A").is(":visible") && (elscroll>initRespuesta2 && elscroll<=finRespuesta2)) { 
		indice = elscroll % 2;
		foco = elscroll-initRespuesta2;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta2A").css("margin-top",elscroll-(initRespuesta2));
		if (porcentajeR>0 && porcentajeR<=50) {
			nCoeficiente = porcentajeR/50;
			$("#respuesta2A .capa33").css("margin-top",0-(ancho-(Math.round(distanciaRecorrer*nCoeficiente))));
			$("#respuesta2A .capa35").css("margin-top",0-(alto+(Math.round(distanciaRecorrer*nCoeficiente))));
		}
		if (porcentajeR>65) {
			nCoeficiente = (porcentajeR-65)/35;
			cambioAncho = Math.round(ancho * (1+(nCoeficiente*0.6)))
			aumento = cambioAncho-ancho;
			$("#respuesta2A .capa33").width(cambioAncho);
			$("#respuesta2A .capa33").height(cambioAncho);
			$("#respuesta2A .capa33").css("margin-left",0-Math.round(aumento/2));
			$("#respuesta2A .capa35").css("margin-top",0-(ancho+aumento));
			mensaje = "Margen top = " + String(parseInt($("#respuesta2A .capa35").css("margin-top").replace("px",""))-(aumento/2));

		}
				initBloque3 =$("#td2").offset().top+$("#td2").height()+remanente;
		initBloque3 = Math.round(initBloque3);
		mensaje = "El Scroll: " + elscroll;
		mensaje += ' | Init Bloque 3: ' + initBloque3;
	}
	if ($("#contRespuesta2B").is(":visible") && (elscroll>initRespuesta2 && elscroll<=finRespuesta2)) { 
		indice = elscroll % 2;
		foco = elscroll-initRespuesta2;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta2B").css("margin-top",elscroll-(initRespuesta2));
		if (porcentajeR>0 && porcentajeR<=30) {
			nCoeficiente = porcentajeR/30;
			$("#respuesta2B .capa34").css("opacity",1-nCoeficiente);
			$("#respuesta2B .capa36").css("opacity",nCoeficiente);
		}
		if (porcentajeR>50 && porcentajeR<=80) {
			nCoeficiente = (porcentajeR-50)/30;
			$("#respuesta2B .capa36").css("opacity",1-nCoeficiente);
			$("#respuesta2B .capa325").css("opacity",nCoeficiente);
			$("#respuesta2B .capa37").css("opacity",nCoeficiente);
		}
		if (porcentajeR>80) {
			nCoeficiente = (porcentajeR-80)/20;
			$("#respuesta2B .capa37").css("margin-top",(0-alto)+(coeficiente*alto));
		}
	}
	///FIN TERCERA IMAGEN
	///CUARTA IMAGEN
	if ($("#bloque3").is(":visible") && (elscroll>initBloque3 && elscroll<=(initBloque3+recorrido))) { 
		foco = elscroll-initBloque3;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR)
		$("#bloque3").css("margin-top",elscroll-initBloque3);
		$(".capa41").css("margin-top",0-((alto*2)-Math.round((alto*coeficiente))))
		$(".capa42").css("margin-top",alto-(Math.round(((alto*2)*coeficiente))))
		$(".capa43").css("margin-left",(ancho*0.3)-((ancho*0.3)*coeficiente));
		mensaje = "Frame 4  coeficiente: " + coeficiente;
		
	}
	if ($("#contRespuesta3A").is(":visible") && (elscroll>initRespuesta3 && elscroll<=finRespuesta3)) { 
		foco = elscroll-initRespuesta3;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta3A").css("margin-top",elscroll-(initRespuesta3));
		if (porcentajeR>0 && porcentajeR<=25) {
			nCoeficiente = porcentajeR/25;
			$("#respuesta3A .capa44").css("opacity",nCoeficiente);
			$("#respuesta3A .capa43").css("opacity",1-nCoeficiente);
			$("#respuesta3A .capa45").css("opacity",0);
			$("#respuesta3A .capa425").css("opacity",0);
			$("#respuesta3A .capa42").css("opacity",1);
		}
		if (porcentajeR>25 && porcentajeR<=50) {
			nCoeficiente = (porcentajeR-25)/25;
			$("#respuesta3A .capa425").css("opacity",1);
			$("#respuesta3A .capa42").css("opacity",0);
			$("#respuesta3A .capa45").css("opacity",0);
		}
		if (porcentajeR>50 && porcentajeR<=75) {
			nCoeficiente = (porcentajeR-50)/25;
			$("#respuesta3A .capa425").css("opacity",0);
			$("#respuesta3A .capa44").css("opacity",0);
			$("#respuesta3A .capa405").css("opacity",nCoeficiente);
			$("#respuesta3A .capa45").css("opacity",0);
		}
		if (porcentajeR>50 && porcentajeR<=75) {
			$("#respuesta3A .capa45").css("opacity",1);
		}
						initBloque4 =$("#td3").offset().top+$("#td3").height()+remanente;
		initBloque4 = Math.round(initBloque4);
	}
	if ($("#contRespuesta3B").is(":visible") && (elscroll>initRespuesta3 && elscroll<=finRespuesta3)) { 
		foco = elscroll-initRespuesta3;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta3B").css("margin-top",elscroll-(initRespuesta3));
		if (porcentajeR>0 && porcentajeR<=25) {
			nCoeficiente = porcentajeR/25;
			$("#respuesta3B .capa47").css("opacity",0);
			$("#respuesta3B .capa42").css("opacity",1);
			$("#respuesta3B .capa415").css("opacity",0);
			$("#respuesta3B .capa46").css("margin-left",0-((ancho*0.3)*coeficiente));
		}
		if (porcentajeR>25 && porcentajeR<=40) {
			nCoeficiente = (porcentajeR-25)/15;
			$("#respuesta3B .capa47").css("opacity",0);
			$("#respuesta3B .capa42").css("opacity",0);
			$("#respuesta3B .capa46").css("opacity",1);
			$("#respuesta3B .capa415").css("opacity",0);
		}
		if (porcentajeR>40 && porcentajeR<=55) {
			nCoeficiente = (porcentajeR-50)/15;
			$("#respuesta3B .capa46").css("opacity",0);
			$("#respuesta3B .capa47").css("opacity",1);
			$("#respuesta3B .capa415").css("opacity",1);
		}
		if (porcentajeR>55 && porcentajeR<=100) {
			nCoeficiente = (porcentajeR-55)/45;
			sAncho = ancho-((ancho/4)*nCoeficiente);
			sAlto = alto-((alto/4)*nCoeficiente);
			bAncho = ancho+((ancho/2)*nCoeficiente);
			bAlto = alto+((alto/2)*nCoeficiente);
			$("#respuesta3B .capa47").width(sAncho);
			$("#respuesta3B .capa47").height(sAlto);
			$("#respuesta3B .capa415").width(bAncho);
			$("#respuesta3B .capa415").height(bAlto);
			$("#respuesta3B .capa415").css("margin-top",0-(alto+((bAlto-alto)/2)));
			$("#respuesta3B .capa415").css("margin-left",0-(((bAncho-ancho)/2)));
			$("#respuesta3B .capa47").css("margin-left",0+(((ancho-sAncho)/2)));
			mensaje = "Ancho guerrero " + sAncho + "| Alto guerrero " + sAlto +  "| Ancho pared " + bAncho + "| Alto pared " + balto;
		}
	}	
	///FIN CUARTA IMAGEN
	///QUINTA IMAGEN
	if ($("#bloque4").is(":visible") && (elscroll>initBloque4 && elscroll<=(initBloque4+recorrido))) { 
		foco = elscroll-initBloque4;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR)
		$("#bloque4").css("margin-top",elscroll-initBloque4);
		if (porcentajeR>0 && porcentajeR<=25) {
			nCoeficiente = porcentajeR/25;
			$(".capa54").css("margin-top",(0-alto)+(alto*0.3)*(1-nCoeficiente))
		}
		if (porcentajeR>25 && porcentajeR<=50) {
			nCoeficiente = (porcentajeR-25)/25;
			mensaje = 'Parte 2 ' + nCoeficiente;
			$(".capa51").css("opacity",nCoeficiente)
		}
		if (porcentajeR>50 && porcentajeR<=75) {
			nCoeficiente = (porcentajeR-50)/25;
			mensaje = 'Parte 3 ' + nCoeficiente;
			$(".capa52").css("margin-left",0-((ancho*0.5)*(1-nCoeficiente)));
			$(".capa53").css("margin-left",0+((ancho*0.5)*(1-nCoeficiente)));
		}
		
	}
	if ($("#contRespuesta4A").is(":visible") && (elscroll>initRespuesta4 && elscroll<=finRespuesta4)) { 
		foco = elscroll-initRespuesta4;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta4A").css("margin-top",elscroll-(initRespuesta4));
		if (porcentajeR>0 && porcentajeR<=20) {
			nCoeficiente = porcentajeR/20;
			$("#contRespuesta4A .capa52").css("opacity",1);  //Dragon Normal
			$("#contRespuesta4A .capa521").css("opacity",0); //Dragon sin cabeza 2
			$("#contRespuesta4A .capa522").css("opacity",0);  //Cabeza cortada 3
			$("#contRespuesta4A .capa523").css("opacity",0); //Dragon dos cabezas 4
			$("#contRespuesta4A .capa524").css("opacity",0); //Dragon devora 5
			$("#contRespuesta4A .capa525").css("opacity",1); //Heroe ataca 1
			$("#contRespuesta4A .capa526").css("opacity",0);//Heroe sorprendido 4
		}
		if (porcentajeR>20 && porcentajeR<=40) {
			nCoeficiente = (porcentajeR-20)/20;
			$("#contRespuesta4A .capa52").css("opacity",0);  //Dragon Normal			
			$("#contRespuesta4A .capa521").css("opacity",1); //Dragon sin cabeza 2
			$("#contRespuesta4A .capa522").css("opacity",0);  //Cabeza cortada 3
			$("#contRespuesta4A .capa523").css("opacity",0); //Dragon dos cabezas 4
			$("#contRespuesta4A .capa524").css("opacity",0); //Dragon devora 5
			$("#contRespuesta4A .capa525").css("opacity",1); //Heroe ataca 1
			$("#contRespuesta4A .capa526").css("opacity",0);//Heroe sorprendido 4
		}
		if (porcentajeR>40 && porcentajeR<=60) {
			nCoeficiente = (porcentajeR-40)/20;
			$("#contRespuesta4A .capa52").css("opacity",0);  //Dragon Normal		
			$("#contRespuesta4A .capa521").css("opacity",1); //Dragon sin cabeza 2
			$("#contRespuesta4A .capa522").css("opacity",1);  //Cabeza cortada 3
			$("#contRespuesta4A .capa523").css("opacity",0); //Dragon dos cabezas 4
			$("#contRespuesta4A .capa524").css("opacity",0); //Dragon devora 5
			$("#contRespuesta4A .capa525").css("opacity",1); //Heroe ataca 1
			$("#contRespuesta4A .capa526").css("opacity",0);//Heroe sorprendido 4
		}
		if (porcentajeR>60 && porcentajeR<=80) {
			nCoeficiente = (porcentajeR-60)/20;
			$("#contRespuesta4A .capa52").css("opacity",0);  //Dragon Normal		
			$("#contRespuesta4A .capa521").css("opacity",0); //Dragon sin cabeza 2
			$("#contRespuesta4A .capa522").css("opacity",1);  //Cabeza cortada 3
			$("#contRespuesta4A .capa523").css("opacity",1); //Dragon dos cabezas 4
			$("#contRespuesta4A .capa524").css("opacity",0); //Dragon devora 5
			$("#contRespuesta4A .capa525").css("opacity",0); //Heroe ataca 1
			$("#contRespuesta4A .capa526").css("opacity",1);//Heroe sorprendido 4
		}
		if (porcentajeR>80 && porcentajeR<=100) {
			nCoeficiente = (porcentajeR-80)/20;
			$("#contRespuesta4A .capa52").css("opacity",0);  //Dragon Normal		
			$("#contRespuesta4A .capa521").css("opacity",0); //Dragon sin cabeza 2
			$("#contRespuesta4A .capa522").css("opacity",1);  //Cabeza cortada 3
			$("#contRespuesta4A .capa523").css("opacity",0); //Dragon dos cabezas 4
			$("#contRespuesta4A .capa524").css("opacity",1); //Dragon devora 5
			$("#contRespuesta4A .capa525").css("opacity",0); //Heroe ataca 1
			$("#contRespuesta4A .capa526").css("opacity",0);//Heroe sorprendido 4
		}
	}
	
	if ($("#contRespuesta4B").is(":visible") && (elscroll>initRespuesta4 && elscroll<=finRespuesta4)) { 
		foco = elscroll-initRespuesta4;
		coeficiente = foco/recorrido;
		porcentajeR = coeficiente*100;
		porcentajeR = Math.round(porcentajeR);
		mensaje = "Porecentaje: " + porcentajeR;
		distanciaRecorrer = ancho-alto;
		$("#respuesta4B").css("margin-top",elscroll-(initRespuesta4));
		if (porcentajeR>0 && porcentajeR<=5) {
			nCoeficiente = porcentajeR/5;
			$("#contRespuesta4B .capa52").css("opacity",1);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",1);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
		}
		if (porcentajeR>5 && porcentajeR<=10) {
			nCoeficiente = (porcentaje-5)/5;
			$("#contRespuesta4B .capa52").css("opacity",1);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",1); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
		}
		if (porcentajeR>10 && porcentajeR<=15) {
			nCoeficiente = (porcentaje-10)/5;
			$("#contRespuesta4B .capa52").css("opacity",1);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",1);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
		}
		if (porcentajeR>15 && porcentajeR<=20) {
			nCoeficiente = (porcentaje-15)/5;
			$("#contRespuesta4B .capa52").css("opacity",1);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",1); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
		}
		if (porcentajeR>20 && porcentajeR<=40) {
			nCoeficiente = (porcentajeR-20)/20;
			indice = (elscroll % 3)-1;
			$("#contRespuesta4B .capa52").css("opacity",0);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",1); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",1); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
			$("#contRespuesta4B .capa532").css("margin-left",0+(9*indice)); //Dragon baila 2
		}
		if (porcentajeR>40 && porcentajeR<=60) {
			nCoeficiente = (porcentajeR-40)/20;
			$("#contRespuesta4B .capa52").css("opacity",0);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",0);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",1); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",1); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
			$("#contRespuesta4B .capa532").css("margin-left",0-(ancho*nCoeficiente));
			$("#contRespuesta4B .capa534").css("margin-left",0+(ancho/2)-((ancho*nCoeficiente)/2));
		}
		if (porcentajeR>60 && porcentajeR<=80) {
			nCoeficiente = (porcentajeR-60)/20;
			$("#contRespuesta4B .capa52").css("opacity",0);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",1);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",1); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",0);//Heroe egagemente
		}
		if (porcentajeR>80 && porcentajeR<=100) {
			nCoeficiente = (porcentajeR-80)/20;
			$("#contRespuesta4B .capa52").css("opacity",0);  //Dragon Normal
			$("#contRespuesta4B .capa53").css("opacity",0);  //Heroe Normal
			$("#contRespuesta4B .capa501").css("opacity",1);  //Cofre abierto 4
			$("#contRespuesta4B .capa532").css("opacity",0); //Dragon baila 2
			$("#contRespuesta4B .capa533").css("opacity",0); //Heroe canta 1
			$("#contRespuesta4B .capa534").css("opacity",0); //Heroe llave 3
			$("#contRespuesta4B .capa535").css("opacity",1);//Heroe egagemente
		}
	}
	///FIN QUINTA IMAGEN
	$("#debugger").html(mensaje);
}
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