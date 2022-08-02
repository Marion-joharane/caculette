//DOM
const touches = [...document.querySelectorAll('.boutton')]; /* transforme en tableau */

/* fonction map() prend chaque élément d'un tableau, fait quelque chose à cet élément (fonction callback) 
et retourne le résultat sous forma d'un nouveau tableau */
const listekeycode = touches.map(touche => touche.dataset.key);

const ecran = document.querySelector('.ecran');


document.addEventListener('keydown', (e) => {
    const valeur = e.KeyCode.toString();  /* ttoString convertie en phrase*/
    calculer(valeur)

})
 /* Récupérer la touche et calculer*/
document.addEventListener('click', (e) => {
    console.log(e)
    calculer(valeur)

})

 /* Récupérer la touche*/
 
     const calculer = (valeur) => {
         if (listeKeycode.includes(valeur)){
             switch (valeur){
                 case '8':
                     ecran.textContent = "";
                     break;
                     case '13':
                         const calcul = eval(ecran.textContent);
                         ecran.textContent = calcul;
                         break;
                         default : 
                         const indexKeycode = listeKeycode.indexOF(valeur);
             }
         }

     }

  /* Fonction calcul*/
  const 

    

