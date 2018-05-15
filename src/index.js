import 'jquery.maskedinput/src/jquery.maskedinput.js';
import $ from 'jquery';
import moment from 'moment';
import validation from 'jquery-validation/dist/jquery.validate.js';
import 'bootstrap/dist/css/bootstrap.css';

import '../assets/scss/main.scss';


var campoInputPesquisa = 'pesquisaPrincipalClasseNumero';

//----------------------------------------------------
// controle do tipo de pesquisa de processo
$(".tipo-pesquisa-processo").change(function(event) {
    if (validator) {
        validator.resetForm();
        validator.reset();
    }
    //$('#pesquisa-principal')[0].reset();
    $('.campo-pesquisa-processo').find('input').val('');
    $('.campo-pesquisa-processo').find('select.processo-classe').val('');
    switch($(this).val()) {
        case "CLASSE_E_NUMERO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-numero-origem').hide();
            $('.pesquisa-processo-classe').show();
            campoInputPesquisa = 'pesquisaPrincipalClasseNumero';
            break;
        case "PARTE_OU_ADVOGADO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-numero-origem').hide();
            $('.pesquisa-parte-advogado').show();

            campoInputPesquisa = 'pesquisaPrincipalParteAdvogado';
            break;
        case "NUMERO_UNICO":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-numero-origem').hide();
            $('.pesquisa-numero-unico').show();
            campoInputPesquisa = 'pesquisaPrincipalNumeroUnico';
            break;
        case "NUMERO_ORIGEM":
            $('.campo-pesquisa-processo').hide();
            $('.pesquisa-numero-unico').hide();
            $('.pesquisa-numero-origem').show();
            campoInputPesquisa = 'pesquisaPrincipalNumeroOrigem';
            break;
    }
});

//----------------------------------------------------
// fim do controle do tipo de pesquisa de processo