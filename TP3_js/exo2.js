//
var complet = document.getElementById('complet');
var niveau = document.getElementById('niveau');
var niv = document.getElementById('niv');
var mtPass = document.getElementById('mtPass');
var conMtPass = document.getElementById('conMtPass');
var aff = document.getElementById('afficherMtPass').value;
var bEnv = document.getElementById('btE')
var cpt = 0;

$('#etatCivil').change(function(){
  complet.value = document.getElementById('etatCivil').value;
});
$('#prenom').change(function(){
  complet.value += " "+document.getElementById('prenom').value;
});

$('#nom').change(function(){
  complet.value += " "+document.getElementById('nom').value;
});

$('#niveau').change(function(){
  niv.innerHTML = niveau.value;
});

$('#afficherMtPass').change(function(){
  if( $(':checkbox').is(':checked') ){
    mtPass.setAttribute('type', 'text');
    conMtPass.setAttribute('type', 'text');
  } else {
    mtPass.setAttribute('type', 'password');
    conMtPass.setAttribute('type', 'password');
  }
});

$().ready(function() {
  $("#formId").validate({
    rules : {
      nom : {
        required : true
      },
      prenom : {
        required : true
      },
      dateNaissance : {
        required : true
      },
      niveau : {
        required : true
      },
      colorPrefere : {
        required : true
      },
      mtPass : {
        required : true
      },
      conMtPass : {
        required : true
      },
      description : {
        required : true
      }
    },
    messages : {
      nom : "Veuillez renseigner ce champ !!!",
      prenom : "Veuillez renseigner ce champ !!!",
      dateNaissance : "Veuillez renseigner ce champ !!!",
      niveau : "Veuillez renseigner ce champ !!!",
      colorPrefere : "Veuillez renseigner ce champ !!!",
      mtPass : "Veuillez renseigner ce champ !!!",
      conMtPass : "Veuillez renseigner ce champ !!!",
      description : "Veuillez renseigner ce champ !!!"
    }

  });
});

$('#btR').click(function(){
    $('#formId')[0].reset();
});
