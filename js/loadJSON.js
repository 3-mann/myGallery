/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(function(){
let msg='<h3>dies ist die JSON</h3>';
$.getJSON('external/rates.json')
    .done(function(data){
        $.each(data,function(key,val){
            msg += '<div>'+key+ ' | '+val+'</div';
        });
        $('#content').html(msg);
    }).fail(function(){
        $('#content').html('Sorry...');
    }).always(function(){
        $('#content').append('immer...');
    });
});
            
