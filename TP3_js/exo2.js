//
$(document).ready(function(){

  var $formId = $('#formId'),
  $affForm = $('#affForm'),
  $etatCivil = $('#etatCivil'),
  $nom = $('#nom'),
  $prenom = $('#prenom'),
  $complet = document.getElementById('complet'),
  $dateNaissance = $('#dateNaissance'),
  $niveau = $('#niveau'),
  $niv = document.getElementById('niv'),
  $couleur = $('#couleur'),
  $mtPass= $('#mtPass'),
  $conMtPass = $('#conMtPass'),
  $description = $('#description'),
  $btSubmit = $('#btSubmit'),
  $btReset = $('#btReset'),
  $error = $('#error'),
  $input = $('.input'),
  $label = $('.label'),
  $aff = $('#afficherMtPass');


  $etatCivil.change(function(){
    $complet.value = $etatCivil.val();
  });
  $prenom.change(function(){
    $complet.value += " "+$prenom.val();
  });

  $nom.change(function(){
    $complet.value += " "+$nom.val();
  });


  $input.keyup(function(){
    if($(this).val().length == 0){
      $(this).css({
        color : 'red'
      });
    }
    else{
     $(this).css({
       color : 'green'
     });
   }
 });

  $conMtPass.keyup(function(){
    if($(this).val() != $mtPass.val() || $conMtPass.val() == "" || $mtPass.val() == ""){
      $btSubmit.attr("disabled", true);
      $(this).css({
        color : 'red'
      });
    }
    else{
      $btSubmit.attr("disabled", false);
      $(this).css({
        color : 'green'
      });
    }
  });

  $niv.innerHTML = $niveau.val();
  $niveau.change(function(){
    $niv.innerHTML = $niveau.val();
  });

  var $color = $couleur.val();
  $couleur.change(function(){
    $color = $couleur.val();
  });

  $aff.change(function(){
    if( $(':checkbox').is(':checked') ){
      mtPass.setAttribute('type', 'text');
      conMtPass.setAttribute('type', 'text');
    } else {
      mtPass.setAttribute('type', 'password');
      conMtPass.setAttribute('type', 'password');
    }
  });

  function check_input(input){
    if(input.val() == ""){
      $error.css('display', 'block');
      $btSubmit.attr("disabled", true);
      input.css({
        borderColor : 'red',
        color : 'red'
      });
    }
    else {
      $btSubmit.attr("disabled", false);
    }
  }

  $btSubmit.click(function(e){
    e.preventDefault();

    check_input($nom);
    check_input($prenom);
    check_input($dateNaissance);
    check_input($niveau);
    check_input($description);

    $formId.hide();
    $formId.remove();

    $affForm.html("<h3>Nom :   "+$etatCivil.val()+" "+$prenom.val()+" "+$nom.val()+"</h3>"+
      "<h3>Date naissance :   "+$dateNaissance.val()+"</h3>"+
      "<h3>Niveau javascript :   "+$niveau.val()+"%</h3>"+
      "<h3>Couleur prefere  : <h3><input type='color' disabled='true' value='"+$color+"' >"+
      "<h3>Mot de pass :   "+"******"+"</h3>"+
      "<h3>Description :   "+$description.val()+"</h3>");

  });


  $btReset.click(function(){
    $input.css({
      color : '#555'
    });
    $error.css('display', 'none');
    $btSubmit.attr("disabled", true);
  });

  $(function(){
    var datee = new Date();
    var month = datee.getMonth();
    var day = datee.getDate();
    var year = datee.getFullYear();

    if(day < 10)
      day = '0'+day.toString();
    if(month< 10)
      month = '0'+month.toString();

    var y = year-50;
    var minDate = y+"-12-12";
    var maxDate = year+"-"+month+"-"+day;
    $dateNaissance.attr('max',maxDate);
    $dateNaissance.attr('min',minDate);
  });

});
