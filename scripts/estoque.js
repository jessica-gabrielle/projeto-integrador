$(document).ready(function(){

    

});

function montaTabela(){
    var html = '';
    
    for(var i = 0; i < 5; i++){
        html += '<tr id="estoque"><td><input type="radio" name="editar" id="editar"></td>    <td id="codigo-produto">' + i + '</td><td id="Nome-produto">' + 'Cerveja ' + (i * 10) + 'mls</td><td id="Quantidade">' + i + '</td><td id="valorUnitario">' + (i + 1) + '</td><td id="valorEstoque"></td></tr>';
    }

    $("#tabelaEstoque").html(html);
}