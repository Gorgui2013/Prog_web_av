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

// function de teste

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

var r = getRandomInt(10);
document.getElementById('btR1').hidden = true;

function jouer(){
  var n = document.getElementById('nbre1').value;
  console.log(n, r);

  if (n < r) {
    document.getElementById('result1').innerHTML = "&#128533; Bien tenté, mais le chiffre est inférieur au nombre à deviner";
  }

  if (n > r) {
    document.getElementById('result1').innerHTML = "&#128533; Bien tenté, mais le chiffre est supérieur au nombre à deviner";
  }

  if (n == r) {
    document.getElementById('result1').innerHTML = "&#128540; Bravo !!! vous avez bien deviné le nombre, c'était " + r;
    document.getElementById('nbre1').hidden = true;
    document.getElementById('bt1').hidden = true;
    document.getElementById('btR1').hidden = false;
  }
}

function rejouer(){
  document.getElementById('nbre1').hidden = false;
  document.getElementById('nbre1').value = null;
  document.getElementById('bt1').hidden = false;
  document.getElementById('btR1').hidden = true;
  document.getElementById('result1').innerHTML = "";
  r = getRandomInt(10);
}
