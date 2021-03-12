// DEFINIR ELEMENTS DOM - inputs
//    els elements del text que volem evaluar, 
//    amb documents.forms escollim el Form que name='vform' 
//    i a dins aquest Form seleccionem cada element pel seu ID
//    Exemple, pel primer camp, id='username'
var username = document.forms['frmReg']['inpUser'];
var password = document.forms['frmReg']['inpPwd1'];
var passwor2 = document.forms['frmReg']['inpPwd2'];
var realname = document.forms['frmReg']['inpName'];
var surnames = document.forms['frmReg']['inpSurn'];
var email    = document.forms['frmReg']['inpMail'];
// var telefono = document.forms['frmReg']['inpTelf'];
var direccio = document.forms['frmReg']['inpDire'];
var poblacio = document.forms['frmReg']['inpPobl'];
var province = document.forms['frmReg']['inpProv'];
var tipFeina = document.forms['frmReg']['feines'];
var terminos = document.forms['frmReg']['inpTerm']; 

// var datanaix = document.forms['vform']['datanaix'];
// var usersexe = document.forms['vform']['usersexe']; 
// var conegut  = document.forms['vform']['conegut'];

// DEFINIR ELEMENTS DOM - llocs on mostrar els msg error
var username_error  = document.getElementById('errUser');
var username_valid  = document.getElementById('valUser');
var realname_error  = document.getElementById('errName');
var email_error     = document.getElementById('errMail');
var telefono_error  = document.getElementById('errTelf');
var password_error  = document.getElementById('errPwd1');
var passwor2_error  = document.getElementById('errPwd2');
var finestra_modal  = document.getElementById('miModal');
var form_registrar  = document.getElementById('frmReg');

// DEFINIR EVENTS - quan el camp perd focus, si ha canviat dispara funció corresponent
username.addEventListener('focusout', userVerify);
realname.addEventListener('change', realVerify);
email.addEventListener('change', mailVerify);
// telefono.addEventListener('change', telfVerify);


// al iniciar la finestra, posem el focus sobre el primer camp -- NO FUNCIONA ------
// finestra_modal.onload = function(){
//   username.focus();
// }

// aixi tampoc
function focusPrimerCamp(){
  username.focus();
}

// aixi tampoc funciona
// finestra_modal.addEventListener('onload', focusPrimerCamp);


// ------------ FINS AQUI EXECUTA AL CRIDAR EL JS -----------------------------------


// DEFINIR FUNCIO INVALIDAR: afegeix la classe 'is-invalid' al camp erroni, que fa:
//                         1. mostra label en vermell i símbol admiració vermell
//                         2. mostra un text en vermell a sota indicant l'error
function Invalidar(camp) {
  camp.classList.remove("is-valid");
  camp.classList.add("is-invalid");
}

// DEFINIR FUNCIO VALIDAR: afegeix la classe 'is-valid' al camp correcte, que fa:
//                         1. mostra label en verd i un símbol de correcte
//                         2. elimina qualsevol text d'error, es pot posar text de correcte
function Validar(camp) {
  camp.classList.add("is-valid");
  camp.classList.remove("is-invalid");
}

function SenseValidar(camp){
  camp.classList.remove("is-valid");
  camp.classList.remove("is-invalid");
}

function buidar(){
  document.getElementById("frmReg").reset();

  SenseValidar(username);
  document.getElementById('divUser').style.color = "black";

  SenseValidar(password);
  SenseValidar(passwor2);
  SenseValidar(realname);
  SenseValidar(surnames);
  SenseValidar(email);

  // username.textContent="";
}

// DEFINIR FUNCIO PRINCIPAL (main) - quan pulsa ENVIAR ho repassa tot
function Validate() {
    let validador = true;
    form.classList.remove("is-invalid");

    if ( userVerify() && realVerify() && mailVerify() && telfVerify() ) {
      validador = true;
    }else{
      validador = false;
    }
    return validador;
}

// Event handler functions - quan perd focus, si cambia contingut inputBox, avisa en Vermell
function userVerify() {
    let boleano = false;
    // si tot és correcte, simplement posa en verd un detall 
    if ((username.value.length >= 3) && (username.value != "")) {
      username.style.border = "1px solid #5e6e66";
      document.getElementById('divUser').style.color = "#0ec771";
      // sense bootstrap, es faria així:
      //   username_valid.innerHTML = "valor ok"; 
      //   username_error.innerHTML = ""; 
      username_error.textContent = "";
      //   username_valid.textContent = "Valor ok";
      boleano = true;
      Validar(username);
    }
    // si falla per longitud mostra msg en vermell
    if (username.value.length < 3) {
      username.style.border = "1px solid red";
      document.getElementById('divUser').style.color = "red";
      // sense bootstrap, es faria així:
      //   username_valid.innerHTML = ""; 
      //   username_error.innerHTML = "error"; 
      username_error.textContent = "L'usuari ha de tenir 3 lletres, com a mínim.";
      username.focus();
      validador = false; 
      Invalidar(username);
    }
    // si falla per camp buit mostra msg en vermell
    if (username.value == "") {
        username.style.border = "1px solid red";
        document.getElementById('divUser').style.color = "red";
        // sense bootstrap, es faria així:
        //   username_valid.innerHTML = "";   
        //   username_error.innerHTML = "error"; 
        username_error.textContent = "No es pot deixar l'usuari en blanc.";
        username.focus();
        validador = false; 
        Invalidar(username);
    }
    return boleano;
}


function realVerify(){

}

function telfVerify(){
  
}

function mailVerify(){
  
}

username.focus();
