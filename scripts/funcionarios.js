$('document').ready(function(){
    
})

function listaFunc() {
var func = []

func[0] = {
    nome : 'Jose Ricardo',
    cpf: 11122233312,
    email: 'josericardo@gmail.com',
    telefone: 33231238
};
func[1] = {
    nome : 'Mirian Rodrigues',
    cpf: 11122233312,
    email: 'mirianr@gmail.com',
    telefone: 33231238
};
func[2] ={
    nome : 'Rafael Oliveira',
    cpf: 11122233312,
    email: 'rafael@gmail.com',
    telefone: 33231238
};
var html = func;

for(var i = 0; i <= 2; i++){

html += '<tr><td><input type="checkbox" name="admin" id="admin"></td> <td><input type="radio" name="selecionar" id="selecionar"></td><td id="id">'+ i +'</td><td id="nome">'+ func[i].nome +'</td><td id="cpf">'+ func[i].cpf +'</td><td id="email">'+ func[i].email +'</td><td id="telefone">'+ func[i].telefone +'</td></tr>';



}

$('#tabelaFuncionario').html(html);
}