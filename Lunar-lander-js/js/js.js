
//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;

//Elemento en pantalla que representa el fuego de la nave
var fuego = null;

//al cargar por completo la página...
window.onload = function(){
	
	
	//Buscamos el elemento que corresponde al fuego
	fuego = document.getElementById("flame");
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	//mostrar menú móvil
	document.getElementById("showm").onclick = function () {
		document.getElementById("showm").style.display = "none";
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementById("showm").style.display = "block";
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	
	
	//encender/apagar el motor al hacer click en la pantalla
	document.onclick = function () {
 	  if (a==g){
  		motorOn();
 	  } else {
  		motorOff();
 	  }
	}
	
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	//Empezar a mover la nave justo después de cargar la página
	start();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
	timer = null; 
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML= Math.abs(v).toFixed(0);
	altura.innerHTML= (70 - y).toFixed(0);
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("rocket").style.top = y+"%"; 
	} else { 
		stop();
		
		document.getElementById("mensajeFinal").style.display = "block";
		
		//Si la velocidad final es superior a 5, game over
		if(v > 5) {
			document.getElementById("fallo").style.display = "block";
			document.getElementById("nave").src = "img/explosion.png";
		} 
		//Felicidades, ha superado el juego
		else {
			document.getElementById("acierto").style.display = "block";
		}
	}
}
function motorOn(){
	
	//Si el juego esta parado, no hacemos nada
	if(timer == null) { return; }

	//el motor da aceleración a la nave
	if(c > 0) {
		a=-g;
		fuego.style.display = "inline";
	}
	
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);	
}
function motorOff(){
	
	//Si el juego esta parado, no hacemos nada
	if(timer == null) { return; }
	
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	
	fuego.style.display = "none";
}
function actualizarFuel(){
	
	//Si el juego esta parado, no hacemos nada
	if(timer == null) { return; }
	
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) { 
		c = 0; 
		motofOff();
	}
	combustible.innerHTML=c.toFixed(0);	
}