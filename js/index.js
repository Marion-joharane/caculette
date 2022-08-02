//DOM
const touches = [
	...document.querySelectorAll(".boutton"),
]; /* transforme en tableau */

/* fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callback) 
et retourne le résultat sous forma d'un nouveau tableau */
const listekeycode = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector("#ecran");

document.addEventListener("keydown", (e) => {
	const valeur = e.KeyCode.toString(); /* toString convertie en phrase*/
	calculer(valeur);
});

/* Récupérer la touche et calculer*/
document.addEventListener("click", (e) => {
	console.log(e);
	calculer(valeur);
});

/* Récupérer la touche*/
const calculer = (valeur) => {
	if (listeKeycode.includes(valeur)) {
		switch (valeur) {
			/* Touche C,  pour supprimer*/
			case "8":
				ecran.textContent = "";
				break;
			/* Touche =,  pour calculer et afficher le résultat*/
			case "13":
				const calcul = eval(ecran.textContent);
				ecran.textContent;
				/* eval sert à calculer. On additionne les éléments de l'écran*/
				ecran.textContent = calcul;
				break;
			default:
				const indexKeycode = listeKeycode.indexOF(valeur);
		}
	}
};

/* Fonction calcul*/

/* Base du JS */

/* Variables */
var variable1 = "globale"; // variable normal => globale
let variable2 = "local"; // variable normal => local
const variable3 = "FIGER"; // variable constante sa valeur ne changera jamais

/* Conditions */
if (variable1 == "globale") {
	// Faire quelque chose
} else {
	// Faire autre chose
}

if (variable1 == "globale") console.log("faire un truc");
else console.log("faire un truc");

/* Les opérateurs logiques
ET = &&
OU = ||

SUP = >
SUPEGAL = >=

INF = <
INFEGAL = <=

DIFF = !=
EGAL = ==

STRICTEMENT EGAL = === ( à vérifier)
STRICTEMENT DIFF = !==
*/

/* CONDITIONS CONDENSER */
/* On veut assigner une variable selon une condition */
var personne = "femme";
var genre = "";
if (personne == "homme") genre = "homme";
else if (personne == "femme") genre = "femme";

/* CONDENSER */
/* on déclare la variable, on donne la condition (si homme) assigne en commençant par le point d'interogation ? ensuite on utilise : pour dire l'autre assignement si la condition n'est pas vérifier */
var genre = personne == "homme" ? "homme" : "femme";

/* SWITCH */
/* prendre la variable à tester et proposer les différente options en fonction de la valeur */
switch (personne) {
	case "femme":
		genre = "femme";
		break;
	case "homme":
		genre = "homme";
		break;
	default:
		genre = "alien";
		break;
}

/* BOUCLES */
var compteur = 0;

while (compteur < 10) {
	compteur += 1;
	/* compteur = compteur + 1 */
	/* compteur++ */
}

console.log(compteur);

/* TABLEAUX */
/* Type de la variable pour stocker des chaines */
var tableau = ["🍌", "🥑", "🍏"];
var banane = tableau[0];
var avocat = tableau[1];
var pomme = tableau[2];

let index = 0;
while (tableau.length > index) {
	console.log(tableau[index]);
	index++;
}

/* (init var; condition; agrémentation) */
for (let i = 0; i < tableau.length; i++) {
	console.log(tableau[i]);
}

tableau.forEach((element) => {
	console.log(element);
});

var tableauDouble = tableau.map((element) => {
	return "" + element + element;
});

console.log(tableauDouble);
/* ["🍌🍌", "🥑🥑", "🍏🍏"] */

/* FUNCTIONS */

function helloWorld() {
	console.log("helloWordl");
}

helloWorld(); /* afficher */

function helloWordlString() {
	return "helloWorld";
}

var string = helloWordlString(); /* Il va retouner une valeur */
console.log(string);

function genre(personne) {
	return personne == "homme" ? "homme" : "femme";
}

var genredelapersonne = genre(personne);
console.log(genredelapersonne);

/* FUNCTIONS FLECHER */

const helloWorld = () => console.log("helloWorld");
const genre = (personne) => (personne == "homme" ? "homme" : "femme");

/* PORTER DES VARIABLES */

var globale = 0;
let local = 0;

function somme() {
	globale = globale + 1;
	local = local + 1;
}

// globale = 1;
// local = 0;
