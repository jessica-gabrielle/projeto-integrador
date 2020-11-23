$(document).ready(function(){

    

});
function Adicionar() {
    $('#tblFuncionario tbody').append(
        "<tr>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/></td>"+
        "<td><input type='text'/</td>"+
        "<td><input type='text'/></td>"+
        "<td><button type='button' id='btnSalvar' class='btn btn-positive'>Salvar</button> <button type='button' id='btnExcluir' class='btn btn-negative'>Excluir</button></td>"+
        "</tr>");
        $("#btnSalvar").bind("click", Salvar);
        $("#btnExcluir").bind("click", Excluir);
    
};

function Salvar() {
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdCpf = par.children("td:nth-child(2)");
    var tdEmail = par.children("td:nth-child(3)");
    var tdTelefone = par.children("td:nth-child(4)");
    var tdBotoes = par.children("td:nth-child(5)");

    tdNome.html(tdNome.children("input[type=text]").val());
    tdCpf.html(tdCpf.children("input[type=text]").val());
    tdEmail.html(tdEmail.children("input[type=text]").val());
    tdTelefone.html(tdTelefone.children("input[type=text]").val());
    tdBotoes.html("<button type='button' id='btnExcluir' class='btn btn-negative'>Excluir</button> <button type='button' id='btnEditar' class='btn btn-primary'>Editar</button>");

    $("#btnEditar").bind("click", Editar);
    $("#btnExcluir").bind("click", Excluir);  

};

function Editar() {
    var par = $(this).parent().parent(); //tr
    var tdNome = par.children("td:nth-child(1)");
    var tdCpf = par.children("td:nth-child(2)");
    var tdEmail = par.children("td:nth-child(3)");
    var tdTelefone = par.children("td:nth-child(4)");
    var tdBotoes = par.children("td:nth-child(5)");
    
    tdNome.html("<input type='text' id='txtNome' value='"+tdNome.html()+"'/>");
    tdCpf.html("<input type='text' id='txtCpf' value='"+tdCpf.html()+"'/>");
    tdEmail.html("<input type='text' id='txtEmail' value='"+tdEmail.html()+"'/>");
    tdTelefone.html("<input type='text' id='txtTelefone' value='"+tdTelefone.html()+"'/>");
    tdBotoes.html("<button type='button' id='btnSalvar' class='btn btn-positive'>Salvar</button>");

    $("#btnSalvar").bind("click", Salvar);
    $("#btnEditar").bind("click", Editar);
    $("#btnExcluir").bind("click", Excluir); 

};

function Excluir() {
    var par = $(this).parent().parent(); //tr
    par.remove();
};

$(function() {
    //Código das funções Adicionar, Salvar, Editar e Excluir
    $("#btnEditar").bind("click", Editar);
    $("#btnExcluir").bind("click", Excluir);
    $("#novo").bind("click", Adicionar);
    
});