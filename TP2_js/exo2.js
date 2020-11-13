var nb = 3;
document.getElementById('nbEs').innerHTML = nb;
// function de teste

function getRandomInt(max) {
  return Math.round(Math.random() * max);
}

var r = getRandomInt(10);
document.getElementById('btR2').hidden = true;

function jouer(){
  var n = document.getElementById('nbre2').value;

  if (n < r) {
    document.getElementById('result2').innerHTML = "&#128533; Bien tenté, mais le chiffre est inférieur au nombre à deviner";
  }

  if (n > r) {
    document.getElementById('result2').innerHTML = "&#128533; Bien tenté, mais le chiffre est supérieur au nombre à deviner";
  }

  if (n == r) {
    document.getElementById('result2').innerHTML = "&#128540; Bravo !!! vous avez bien deviné le nombre, c'était " + r;
    document.getElementById('nbre2').hidden = true;
    document.getElementById('bt2').hidden = true;
    document.getElementById('btR2').hidden = false;
  }

  nb -= 1;
  document.getElementById('nbEs').innerHTML = nb;

  if (nb == 0) {
    perdu();
  }

}

function rejouer(){
  document.getElementById('nbre2').hidden = false;
  document.getElementById('nbre2').value = null;
  document.getElementById('bt2').hidden = false;
  document.getElementById('btR2').hidden = true;
  document.getElementById('result2').innerHTML = "";
  r = getRandomInt(10);
  nb = 3;
  document.getElementById('nbEs').innerHTML = nb;
}

function perdu(){
  document.getElementById('nbre2').hidden = true;
  document.getElementById('nbre2').value = null;
  document.getElementById('bt2').hidden = true;
  document.getElementById('btR2').hidden = false;
  document.getElementById('result2').innerHTML = "&#128533; Dommage, vous avez perdu &#128533; !!!";
  r = getRandomInt(10);
  nb = 0;
  document.getElementById('nbEs').innerHTML = nb;
}
