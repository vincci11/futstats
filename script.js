function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.png";
    } else{
        menuMobile.classList.add('open')
        document.querySelector('.icon').src = "img/close_menu.png"
    }
}

function calcularPercentual() {
    var totalJogos = parseInt(document.getElementById('totalJogos').value);
    var jogosAmbasMarcam = parseInt(document.getElementById('jogosAmbasMarcam').value);
    var jogosOver15 = parseInt(document.getElementById('jogosOver15').value);
    var jogosOver25 = parseInt(document.getElementById('jogosOver25').value);

    // Verifica se algum dos campos está vazio
    if (!totalJogos || !jogosAmbasMarcam || !jogosOver15 || !jogosOver25) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return; // Interrompe a execução da função
    }

    var percentualAmbas = (jogosAmbasMarcam / totalJogos) * 100;
    var percentualOver15 = (jogosOver15 / totalJogos) * 100;
    var percentualOver25 = (jogosOver25 / totalJogos) * 100;

    var avaliacaoAmbas = percentualAmbas >= 60 ? 'Alto' : 'Baixo';
    var avaliacaoOver15 = percentualOver15 >= 60 ? 'Alto' : 'Baixo';
    var avaliacaoOver25 = percentualOver25 >= 50 ? 'Alto' : 'Baixo';

    var imgAmbas = percentualAmbas >= 60 ? 'img_avaliacao/bola_verde.png' : 'img_avaliacao/bola_vermelha.png';
    var imgOver15 = percentualOver15 >= 60 ? 'img_avaliacao/bola_verde.png' : 'img_avaliacao/bola_vermelha.png';
    var imgOver25 = percentualOver25 >= 50 ? 'img_avaliacao/bola_verde.png' : 'img_avaliacao/bola_vermelha.png';

    document.getElementById('resultadoHistorico').innerHTML = 
    '<span class="destaque">Índice de Placares Ambas Marcam: </span><br>' + 
    '<span class="valor">'+ avaliacaoAmbas + '</span>' +
    '<img src="' + imgAmbas + '" alt="Resultado Ambas Marcam" class="classeBola"><br>' +
    '<br><span class="destaque">Índice de Placares Over 1.5 gol: </span><br>' + 
    '<span class="valor">'+ avaliacaoOver15 + '</span>' +
    '<img src="' + imgOver15 + '" alt="Resultado Over 1.5" class="classeBola"><br>' +
    '<br><span class="destaque">Índice de Placares Over 2.5 gol: </span><br>' + 
    '<span class="valor">'+ avaliacaoOver25 + '</span>' +
    '<img src="' + imgOver25 + '" alt="Resultado Over 2.5" class="classeBola">';

    // Armazenar os valores para uso na próxima função
    localStorage.setItem('avaliacaoAmbas', avaliacaoAmbas);
    localStorage.setItem('avaliacaoOver15', avaliacaoOver15);
    localStorage.setItem('avaliacaoOver25', avaliacaoOver25);
}

function calcularDesempenho() {
    var totalJogosMandantes = parseInt(document.getElementById('totalJogosMandantes').value);
    var jogosMandanteSofreu = parseInt(document.getElementById('jogosMandanteSofreu').value);
    var totalJogosVisitantes = parseInt(document.getElementById('totalJogosVisitantes').value);
    var jogosVisitanteMarcou = parseInt(document.getElementById('jogosVisitanteMarcou').value);

    // Verifica se algum dos campos está vazio
    if (!totalJogosMandantes || !jogosMandanteSofreu || !totalJogosVisitantes || !jogosVisitanteMarcou) {
        alert("Por favor, preencha todos os campos antes de calcular.");
        return; // Interrompe a execução da função
    }

    var percentualMandanteSofreu = (jogosMandanteSofreu / totalJogosMandantes) * 100;
    var percentualVisitanteMarcou = (jogosVisitanteMarcou / totalJogosVisitantes) * 100;

    var avaliacaoMandanteSofreu = percentualMandanteSofreu >= 50 ? 'Alto' : 'Baixo';
    var avaliacaoVisitanteMarcou = percentualVisitanteMarcou >= 50 ? 'Alto' : 'Baixo';
    
    var imgMandanteSofreu = percentualMandanteSofreu >= 50 ? 'img_avaliacao/bola_verde.png' : 'img_avaliacao/bola_vermelha.png';
    var imgVisitanteMarcou = percentualVisitanteMarcou >= 50 ? 'img_avaliacao/bola_verde.png' : 'img_avaliacao/bola_vermelha.png';

    document.getElementById('resultadoDesempenho').innerHTML = 
    '<span class="destaque">Índice de jogos onde o mandante sofreu gol em casa: </span><br>' + 
    '<span class="valor">'+ avaliacaoMandanteSofreu + '</span>' +
    '<img src="' + imgMandanteSofreu + '" alt="Resultado Mandante Sofreu" class="classeBola"><br>' +
    '<br><span class="destaque">Índice de jogos onde o visitante marcou gol fora de casa: </span><br>' +
    '<span class="valor">'+ avaliacaoVisitanteMarcou + '</span>' +
    '<img src="' + imgVisitanteMarcou + '" alt="Resultado Visitante Marcou" class="classeBola"><br>';

    // Armazenar os valores para uso na próxima função
    localStorage.setItem('avaliacaoMandanteSofreu', avaliacaoMandanteSofreu);
    localStorage.setItem('avaliacaoVisitanteMarcou', avaliacaoVisitanteMarcou);
}

function calcularResultado() {
    var avaliacaoAmbas = localStorage.getItem('avaliacaoAmbas');
    var avaliacaoOver15 = localStorage.getItem('avaliacaoOver15');
    var avaliacaoOver25 = localStorage.getItem('avaliacaoOver25');
    var avaliacaoMandanteSofreu = localStorage.getItem('avaliacaoMandanteSofreu');
    var avaliacaoVisitanteMarcou = localStorage.getItem('avaliacaoVisitanteMarcou');
    var timeFavoritoFora = document.getElementById('sim').checked;
    var timeFavoritoNaoFora = document.getElementById('nao').checked;

    // Obter os valores dos campos de entrada
    var totalJogos = document.getElementById('totalJogos').value;
    var jogosAmbasMarcam = document.getElementById('jogosAmbasMarcam').value;
    var jogosOver15 = document.getElementById('jogosOver15').value;
    var jogosOver25 = document.getElementById('jogosOver25').value;
    var totalJogosMandantes = document.getElementById('totalJogosMandantes').value;
    var jogosMandanteSofreu = document.getElementById('jogosMandanteSofreu').value;
    var totalJogosVisitantes = document.getElementById('totalJogosVisitantes').value;
    var jogosVisitanteMarcou = document.getElementById('jogosVisitanteMarcou').value;

    // Verifica se todos os campos foram preenchidos
    if (!totalJogos || !jogosAmbasMarcam || !jogosOver15 || !jogosOver25 || 
        !totalJogosMandantes || !jogosMandanteSofreu || !totalJogosVisitantes || !jogosVisitanteMarcou) {
        alert("Por favor, preencha todos os campos antes de calcular o resultado final.");
        return; // Interrompe a execução da função
    }

    var resultadoAmbasMarcam = (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Alto') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                               (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Alto') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoNaoFora ||
                               (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora;
                               
    var resultadoAtencao = (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Alto') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Alto') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Alto') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && !timeFavoritoFora ||
                           (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && !timeFavoritoFora ||
                           (avaliacaoAmbas === 'Baixo') && (avaliacaoOver15 === 'Baixo') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && !timeFavoritoNaoFora ||
                           (avaliacaoAmbas === 'Alto') && (avaliacaoOver15 === 'Alto') && (avaliacaoOver25 === 'Baixo') && (avaliacaoMandanteSofreu === 'Alto') && (avaliacaoVisitanteMarcou === 'Alto') && !timeFavoritoNaoFora; 
                           

    var textoResultado;
    var classeResultado;

    if (resultadoAmbasMarcam) {
        textoResultado = 'Placar Ambas Marcam nesse jogo = Alta Tendência!';
        classeResultado = 'resultado-alto';
    } else if (resultadoAtencao) {
        textoResultado = 'Atenção! Fique de olho durante a partida.';
        classeResultado = 'resultado-atencao';
    } else {
        textoResultado = 'Placar Ambas Marcam nesse jogo = Baixa Tendência!';
        classeResultado = 'resultado-baixo';
    }

    var elementoResultado = document.getElementById('resultadoFinal');
    elementoResultado.innerHTML = textoResultado;
    elementoResultado.className = classeResultado;
}

document.getElementById('botaoLimpar').addEventListener('click', function() {
    document.getElementById('calcForm').reset();
    document.getElementById('desempenhoForm').reset();
    document.getElementById('infoAdicionalForm').reset();
    
    // Limpa os resultados exibidos e remove a classe do resultado final
    var resultadoHistorico = document.getElementById('resultadoHistorico');
    var resultadoDesempenho = document.getElementById('resultadoDesempenho');
    var resultadoFinal = document.getElementById('resultadoFinal');

    resultadoHistorico.innerHTML = '';
    resultadoDesempenho.innerHTML = '';
    resultadoFinal.innerHTML = '';
    resultadoFinal.className = '';
});





/*document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir os comentários armazenados no localStorage
    function exibirComentariosArmazenados() {
        var comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];
        var comentariosFeedback = document.getElementById('comentariosFeedback');

        comentariosFeedback.innerHTML = ''; // Limpa o conteúdo anterior

        comentariosArmazenados.forEach(function(comentario) {
            comentariosFeedback.innerHTML += `<p><strong>${comentario.nome}</strong> (${comentario.email}): ${comentario.feedbackTexto}</p>`;
        });
    }

    // Adiciona um ouvinte de evento ao formulário para salvar o comentário no localStorage
    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault(); // Impede o envio padrão do formulário

        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var feedbackTexto = document.getElementById('feedbackTexto').value;

        // Verifica se os campos nome e feedback estão preenchidos
        if (nome.trim() === '' || feedbackTexto.trim() === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // Cria um objeto de comentário com nome, email e feedbackTexto
        var comentario = { nome: nome, email: email, feedbackTexto: feedbackTexto };

        // Recupera os comentários armazenados no localStorage
        var comentariosArmazenados = JSON.parse(localStorage.getItem('comentarios')) || [];

        // Adiciona o novo comentário ao array de comentários armazenados
        comentariosArmazenados.push(comentario);

        // Salva o array atualizado no localStorage
        localStorage.setItem('comentarios', JSON.stringify(comentariosArmazenados));

        // Limpa o formulário
        document.getElementById('feedbackForm').reset();

        // Exibe novamente os comentários com o novo comentário adicionado
        exibirComentariosArmazenados();
    });

    // Exibe os comentários ao carregar a página
    exibirComentariosArmazenados();
});*/








