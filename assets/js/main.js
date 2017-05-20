function Miembro(num,nombre,edad,hobbies){
	this.num = num;
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}
var coment = [];
function Comentario(id,comentario,like){
	this.id = id;
	this.comentario = comentario;
	this.like = like;
}
var coders = [];

var coder1 = new Miembro(1,"Gilia Gongora",28,["Leer","Escuchar música","Ver Pokémon"]);
var coder2 = new Miembro(2,"Valentina Lopez",25,["Tarot","Idiomas","Películas mudas"]);
var coder3 = new Miembro(3,"Valentina Toledo",20,["Jugar fútbol","Escuchar música","Actividades al aire libre"]);
var coder4 = new Miembro(4,"Trinidad Fuentes",26,["Video juegos","PugLover","Dormir"]);
var coder5 = new Miembro(5,"Diana Monsalve",29,["Mirar memes","Hacer negocios","Comer tablitas"]);
var coder6 = new Miembro(6,"Daniela Sanchez",24,["Escuchar música","Cantar","Ver series"]);
var coder7 = new Miembro(7,"María Paz Rojas",26,["Escuchar música","Comer","Tomar cervecita"]);
var coder8 = new Miembro(8,"Karina Palacios",24,["Ver series","Leer","Escuchar música"]);
var coder9 = new Miembro(9,"Maribel Díaz",30,["Salir a tomar café","Comer muffins","El silencio y escribir"]);

coders.push(coder1,coder2,coder3,coder4,coder5,coder6,coder7,coder8,coder9);


function mostrar(elemento){
	var contenedor = document.getElementById("miembros");
	var txt = "";
	
	coders.forEach(function(elemento){		
		txt +="<div>" + "<img id = 'img' src=assets/img/" + elemento.num + ".png>" + "</div>" +"<div>" + elemento.nombre + " " + elemento.edad +"</div>"
	
			elemento.hobbies.forEach(function(hobbies){

			txt += "<li>" + hobbies + "</li>";
		
		});

		txt += "<h3> Comentarios </h3>" + "<div id='caja'" + elemento.id + "'>"+"</div>" + "<textarea id='textos'" + elemento.id + "'>" + "</textarea>" + "<button onclick='agregar("+ elemento.id +")'>Agregar"+"</button>";
	contenedor.innerHTML = txt;
	});
}
	

function agregar(personasId){
	console.log("id",personasId);
	var texto =document.getElementById("textos").value;
	var caja = document.getElementById("caja" + personasId);
	var nota = new Comentario(personasId,texto,0);

	coment.push(nota);

	caja.innerHTML += "<p>" + nota.comentario + "</p>" + "<button id='boton' onclick='like(this)'>Like"+"</button>" + "<span>" + 0 + "</span>";
	texto = " ";
}

function like(click){
	var up = click.nextSibling;
	up.innerHTML = parseInt(suma.innerHTML) + 1;
}



mostrar();






 