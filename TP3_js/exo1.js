
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

// Gestion d'affichage des differentes exercices
document.getElementById('q1').hidden = true;
document.getElementById('q2').hidden = true;

function openQuestion1Exo1(){
  document.getElementById('q1').hidden = false;
  document.getElementById('q2').hidden = true;
}

function openQuestion2Exo1(){
  document.getElementById('q2').hidden = false;
  document.getElementById('q1').hidden = true;
}

var inp = document.getElementById('input');
var p = document.getElementById('info');

$('#valid').submit(function(e){
  if (inp.value == "" || inp.length == 0) {
    p.innerHTML = 'Form invalided !!!';
  }
  else {
    p.innerHTML = 'Form valided !!!';
  }
  e.preventDefault();
});
