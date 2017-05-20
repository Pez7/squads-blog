function Miembro(nombre,edad,hobbies){
	
	this.nombre = nombre;
	this.edad = edad;
	this.hobbies = hobbies;
}
var coment = [];
function Comentario(comentario,like){
	this.comentario = comentario;
	this.like = like;
}

var coders = [];

var coder1 = new Miembro("Gilia Gongora",28,["Leer","Escuchar música","Ver Pokémon"]);
var coder2 = new Miembro("Valentina Lopez",25,["Tarot","Idiomas","Películas mudas"]);
var coder3 = new Miembro("Valentina Toledo",20,["Jugar fútbol","Escuchar música","Actividades al aire libre"]);
var coder4 = new Miembro("Trinidad Fuentes",26,["Video juegos","PugLover","Dormir"]);
var coder5 = new Miembro("Diana Monsalve",29,["Mirar memes","Hacer negocios","Comer tablitas"]);
var coder6 = new Miembro("Daniela Sanchez",24,["Escuchar música","Cantar","Ver series"]);
var coder7 = new Miembro("María Paz Rojas",26,["Escuchar música","Comer","Tomar cervecita"]);
var coder8 = new Miembro("Karina Palacios",24,["Ver series","Leer","Escuchar música"]);
var coder9 = new Miembro("Maribel Díaz",30,["Salir a tomar café","Comer muffins","El silencio y escribir"]);

coders.push(coder1,coder2,coder3,coder4,coder5,coder6,coder7,coder8,coder9);
console.log(coders);





 