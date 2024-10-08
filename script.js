                var animes = [];
        
                function guardarDados(event) {
                    event.preventDefault(); // Previne o envio do formulário
        
                    var nome = document.getElementById("nome").value;
                    var anoDeLancamento = document.getElementById("anoDeLancamento").value;
                    var nota = document.getElementById("nota").value;
                    var genero = document.getElementById("genero").options[document.getElementById("genero").selectedIndex].innerHTML;
        
                    // Adiciona o anime ao array
                    animes.push({
                        'nome': nome,
                        'anoDeLancamento': anoDeLancamento,
                        'nota':nota,
                        'genero': genero

                    });
        
                    limparCampos();
                    exibiranimes();
                }
        
                function limparCampos() {
                    document.getElementById("nome").value = "";
                    document.getElementById("anoDeLancamento").value = "";
                    document.getElementById("genero").selectedIndex = 0;
                }
        
                function exibiranimes() {
                    var lista = document.getElementById("listaanimes");
                    lista.innerHTML = ""; // Limpa a lista antes de exibir
        
                    // Exibe todos os animes na lista
                    animes.forEach((anime) => {    //deixa o  dentro do campo 
                        var linha = anime.nome + " - " + anime.anoDeLancamento + " - " + anime.genero;
                        var item = document.createElement("li");
                        item.innerHTML = linha;
                        lista.appendChild(item);
                        
                    });
                }