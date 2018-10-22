/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    $('#get').on('click',function(){
        $.getScript('js/loadJsonZimmer.js');
    });
    $('#JSON').on('click',function(){
        $.getScript('js/loadJsonHotel.js');
    });
});
