//DOM
const touches = [
	...document.querySelectorAll(".boutton"),
]; /* transforme en tableau */

/* fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callback) 
et retourne le résultat sous forma d'un nouveau tableau */
const listeKeycode = touches.map((touche) => touche.dataset.key);

const ecran = document.querySelector("#ecran");

document.addEventListener("keydown", (e) => {
	const valeur = e.KeyCode.toString(); /* toString convertie en phrase*/
	calculer(valeur);
});

/* Récupérer la touche et calculer*/
document.addEventListener("click", (e) => {
	const valeur = e.target.dataset.key;
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
				/* eval sert à calculer. On additionne les éléments de l'écran*/
				const calcul = eval(ecran.textContent);
				ecran.textContent = calcul;
				break;
			default:
				const indexKeycode = listeKeycode.indexOf(valeur);
				const touche = touches[indexKeycode];
				ecran.textContent += touche.innerHTML;
		}
	}
};

window.addEventListener("error", (e) => {
	alert("Une erreur est survenue dans votre calcul : " + e.message);
});
