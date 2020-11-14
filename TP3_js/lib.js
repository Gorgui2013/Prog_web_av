//

var n = document.getElementById('title');
var c1 = document.getElementById('title1');
var c2 = document.getElementById('title2');

function showHxContent(x){
  document.getElementById('title'+x).style.display = 'block';
}

function hideAllDivs(){
  c1.style.display = 'none';
  c2.style.display = 'none';
}

function alertTitle(){
  alert('Affichage du ' +n.value);
  document.getElementById(n.value).style.display = 'block';
}


function deleteTitle(){
  alert('Suppression du ' +n.value);
  document.getElementById(n.value).remove();
}
