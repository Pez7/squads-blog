function Miembro (nombre,edad,hobb1,hobb2,hobb3){
		this.nombre = nombre;
		this.edad = edad;
		this.hobb1 = hobb1;
		this.hobb2 = hobb2;
		this.hobb3 = hobb3;
		this.imprimir = function(){
			var imprimir =  ("<b>" + "Nombre: " + "</b>"+ this.nombre + "<br>" +"<b>" + "Edad: " + 
                    "</b>" + this.edad + "<br>"+"<b>" + "Hobbies: " + "</b>" + "<li>" + 
                    this.hobb1 +"<li>" + this.hobb2 +"<li>"+ this.hobb3 + "<br>");

			return imprimir;

		}

	}


var coder1 = new Miembro("Gilia Gongora",28,"Leer","Escuchar música","Ver Pokémon");
var coder2 = new Miembro("Valentina Lopez",25,"Tarot","Idiomas","Películas mudas");
var coder3 = new Miembro("Valentina Toledo",20,"Jugar fútbol","Escuchar música","Actividades al aire libre");
var coder4 = new Miembro("Trinidad Fuentes",26,"Video juegos","PugLover","Dormir");
var coder5 = new Miembro("Diana Monsalve",29,"Mirar memes","Hacer negocios","Comer tablitas");
var coder6 = new Miembro("Daniela Sanchez",24,"Escuchar música","Cantar","Ver series");
var coder7 = new Miembro("María Paz Rojas",26,"Escuchar música","Comer","Tomar cervecita");
var coder8 = new Miembro("Karina Palacios",24,"Ver series","Leer","Escuchar música");
var coder9 = new Miembro("Maribel Díaz",30,"Salir a tomar café","Comer muffins","El silencio y escribir");


coder1.imprimir();
coder2.imprimir();
coder3.imprimir();
coder4.imprimir();
coder5.imprimir();
coder6.imprimir();
coder7.imprimir();
coder8.imprimir();
coder9.imprimir();

document.getElementById("gilia").innerHTML = coder1.imprimir();
document.getElementById("valentinalo").innerHTML = coder2.imprimir();
document.getElementById("valentinato").innerHTML = coder3.imprimir();
document.getElementById("trinidad").innerHTML = coder4.imprimir();
document.getElementById("diana").innerHTML = coder5.imprimir();
document.getElementById("daniela").innerHTML = coder6.imprimir();
document.getElementById("pez").innerHTML = coder7.imprimir();
document.getElementById("karina").innerHTML = coder8.imprimir();
document.getElementById("maribel").innerHTML = coder9.imprimir();

function comentario(mensaje){
	var comentario = document.getElementById("texto").value;
	var caja 
}

 