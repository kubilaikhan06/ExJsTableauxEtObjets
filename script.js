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
    document.querySelector('#div1').innerHTML = encorePersonne.nom;
    document.querySelector('#para1').innerHTML = homme.prenom;
    document.querySelector('#nom').value = autrePersonne.prenom;
    document.querySelector('#prenom').value = homme.prenom;
    //affiche une alert lors d'un click sur le bouton

    /*document.querySelector('#btnAffiche').onclick= function(){
        alert(homme.nom);
    };*/
    // autre façon d'écrire le code
    document.querySelector('#btnAffiche').addEventListener('click', function(){
        alert(homme.nom)}, 'false'
    );

    //fonction anonyme auto-exécutable
    (function(){
        alert(encorePersonne.prenom);
        //ajout de l'horloge
        var i = 0;
        setInterval(function(){
            i++;
             (function(texte){
                 document.querySelector('#horloge').value = texte;}//affichage de l'horloge dans input type text
                 ("je compte: " + i));//fin partie horloge
        }, 1000);
    })();

    function add(x,y){
        return x+y;
    }
    var plus = add;
    document.querySelector('#resultFunction').value = add(2,9);
    
});
