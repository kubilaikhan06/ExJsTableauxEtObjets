//tableau ordinaire par instanciation d'un Array
var personne = new Array('nom', 'prenom');
console.log(personne[0]);
//tableau associatif
var autrePersonne = new Array();
autrePersonne['nom']= 'Marc';
autrePersonne['prenom'] = 'machin';
console.log(autrePersonne['prenom']);
console.log(autrePersonne.nom);
//déclaration d'un tableau littéral
var encorePersonne = {"nom": "ploin", "prenom": "john"};
console.log(encorePersonne['prenom']);
console.log(encorePersonne.nom);

$(document).ready(function(){
    
    //objet personne
    function Personne(){
        this.nom;
        this.prenom;
    };
    var homme = new Personne();// instanciation d'une personne
    homme.nom = 'Milord';
    homme.prenom = 'Albert';
    console.log(homme.nom);
    document.getElementById('div1').innerHTML = encorePersonne.nom;
    document.getElementById('para1').innerHTML = homme.prenom;
    document.getElementById('nom').value = autrePersonne.prenom;
    document.getElementById('prenom').value = homme.prenom;
    //affiche une alert lors d'un click sur le bouton
    document.getElementById('btnAffiche').onclick= function(){
        alert(homme.nom);
    };

    //fonction anonyme auto-exécutable
    (function(){
        alert(encorePersonne.prenom);
        //ajout de l'horloge
        var i = 0;
        setInterval(function(){
            i++;
             (function(texte){
                 document.getElementById('horloge').value = texte;}
                 ("je compte: " + i));//fin partie horloge
        }, 1000);
    })();

    
});
