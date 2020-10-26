
//SELEZIONE VARIABILI
var menu = $('.hamburger-menu');
var hamburger = $('.header-right > a');
var closeMenu = $('.close');


//APERTURA MENU
hamburger.click( function (){
    menu.show();
})

//CHIUSURA MENU
closeMenu.click( function (){
    menu.hide();
})


