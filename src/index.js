import 'jquery.maskedinput/src/jquery.maskedinput.js';
import $ from 'jquery';
import moment from 'moment';
import validation from 'jquery-validation/dist/jquery.validate.js';
import 'bootstrap/dist/css/bootstrap.css';

import '../assets/scss/main.scss';

$('.dropdown-toggle').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeIn(100);
}, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(0).fadeOut(100);
});