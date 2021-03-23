// ******* Nivell-3 VALIDACIO amb JQuery **********

// diferències:  aquí no cal que carreguem els elements necessaris al principi amb GetElementById
//               anirem utilitzant-los amb la funció de jquery $("#nom_element") seguit de .metode
$().ready(function() {

    // escollim ID formulari, i en invocar/escoltar l'event validar, executarem el metode .validate
    var formLogin = $("#frmLog");

    var validador = formLogin.validate({
        // te una 1a part on definim les regles de cada camp
        rules: {
            inpLog: {
              required: true,
              minlength: 3
            },
            inpPwd: {
              required: true,
              minlength: 8
            }
            // exemple confirmacio pwd ... útil per a formulari de Registre
            // inpPwd: {
            //   required: true,
            //   minlength: 8,
            //   equalTo: "#inpPwd"
            // },

        },
        // té una 2a part on definim els missatges segons la regla infringida
        messages: {
            inpLog: {
              required: "entri un usuari",
              minlength: "mínim 3 lletres"
            },
            inpPwd: {
              required: "entri una pwd",
              minlength: "mín. 8 caracters"
              // equalTo: "ambdues pwd han de coincidir"
            }
        }
    });

    // exemple molt bo per combinar nom i cognom ... útil per a formulari de Registre
    // $("#username").focus(function() {
    //     recollir valors com un getElementById...
    //     var firstname = $("#firstname").val();
    //     var lastname  = $("#lastname").val();
    //     if (firstname && lastname && !this.value) {
    //       this.value = firstname + "." + lastname;
    //     }
    // });

    // posició Focus en el primer camp de la finestra Modal
    $(function () {
      $('#logModal').on('shown.bs.modal', function (e) {
        $('.focus').focus();
      })
    });

});

