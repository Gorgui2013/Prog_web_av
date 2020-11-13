// Definition variable Global
var annee;

// Gestion d'affichage des differentes exercices
document.getElementById('exo1').hidden = true;
document.getElementById('exo2').hidden = true;

function openWindowExo1(){
  document.getElementById('exo1').hidden = false;
  document.getElementById('exo2').hidden = true;
}

function openWindowExo2(){
  document.getElementById('exo2').hidden = false;
  document.getElementById('exo1').hidden = true;
}

// fonction teste annee bissextile
function isBissextile(an){
  if(an%4 == 0){
    if (an%100 == 0) {
      return false;
    }
    else{
      return true;
    }
  }
}

// Fonction ouvant boite de dialogue
function openWindow(){
  annee = prompt("Donner une année :", "YYYY");
  if (isFinite(annee) && annee.length == 4) {
    if (isBissextile(annee)) {
      document.getElementById("resultExo1").innerHTML =
      annee +" est bissextile.";
    }
    else{
      document.getElementById("resultExo1").innerHTML =
      annee +" n'est pas bissextile.";
    }
  }
  else {
    document.getElementById("resultExo1").innerHTML = "Veuillez saisir une année valide";
  }
}
