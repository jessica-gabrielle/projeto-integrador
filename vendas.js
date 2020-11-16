$(document).ready(function(){

});


    
    botaoSalvar.addEventListener("click", botaoSalvar);

    function botaoSalvar(){

        var forme  = document.querySelector(".form");
    
        var codigo = forme.codigo.value;
        var nome = forme.nome.value;
        var quantidade = forme.quantidade.value;
        var custo = forme.custo.value;
        var valor = forme.valor.value;

        

        var codigoTr = document.createElement("tr");
        var nomeTd = document.createElement("td");
        var quantidadeTd = document.createElement("td");
        var custoTd = document.createElement("td");
        var valorTd = document.createElement("td");

        codigoTr.textContent = codigo;
        nomeTd.textContent = nome;
        quantidadeTd.textContent = quantidade;
        custoTd.textContent = custo;
        valorTd.textContent = valor;

        codigoTr.appendChild(nomeTd);
        codigoTr.appendChild(quantidadeTd);
        codigoTr.appendChild(custoTd);
        codigoTr.appendChild(valorTd);

        console.log(codigoTr);

        
    }

    
    
    function tabela(){
        var htm = '';
        
    
        
        
        for(var i = 0; i < 5; i++){
        
            
    
            htm += '<tr id="vendas"><td> ' + i + ' <td id="codigo-produto">' + 'cerveja ' + (i * 10 ) +' mls</td><td id="Nome-produto">' + i + '</td><td id="Quantidade">' + i + '</td><td id="valorUnitario">' + (i + 1) + '</td><td id="valorEstoque"></td></tr>';
    
            
        }
    
        $("#tabelasEstoque").html(htm);
    
    }

    