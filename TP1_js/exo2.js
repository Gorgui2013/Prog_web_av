var entrees = {"salade_s" : 2300, "salade_f" : 3000, "salade_v" : 2600};
var plats = {"plat_j" : 4500, "plat_s" : 5000, "plat_v" : 6600};
var desserts = {"jus_b" : 500, "jus_s" : 750, "jus_v" : 1000};

var total = document.getElementById('totalCom');

var nbE = document.getElementById('nbE');
var nbP = document.getElementById('nbP');
var nbD = document.getElementById('nbD');

var e = document.getElementById('entree');
var p = document.getElementById('plat');
var d = document.getElementById('dessert');

function changerNbrePersonnes(a, nb){
  if (document.getElementById(a).value != "Aucune") {
    document.getElementById(nb).value = 1;
  }
  else{
    document.getElementById(nb).value = 0;
  }
}

function verifierNbre(nb){
  if (document.getElementById(nb).value > 6) {
    document.getElementById(nb).value = 6;
  }
  if (document.getElementById(nb).value < 0) {
    document.getElementById(nb).value = 0;
  }
}

var ch = document.getElementById('adresse');

function adresseValide(chaine){
  if(chaine.length == 0){
    return false;
  }
  else{
    return true;
  }
}

function totalCommande(){
  total.value = entrees.salade_v*nbE.value+plats.plat_v*nbP.value+desserts.jus_v*nbD.value +' FCFA';
}

