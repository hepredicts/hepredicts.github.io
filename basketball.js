// Array de desportos (exemplo)
var desportos = [
    { nome: "Today", jogos: [
        { campeonato: "BR-1", equipe1: "Sao Jose", equipe2: "Cerrado", palpite: "1ST Period(Over 40.5)", odds: 1.80, resultado: "-" },
        { campeonato: " BR-1", equipe1: "Sao Paulo", equipe2: "Caxias Do Sul", palpite: "Home", odds:"-", resultado: "-" },
          { campeonato: "BR-1", equipe1: "Mogi", equipe2: "Brasilia", palpite: "Away Over 75.5", odds: "-", resultado: "-" },
        { campeonato: "NBA", equipe1: "Detroit Pistons", equipe2: "Indiana Pasters", palpite: "Away", odds: "-", resultado: "-" },
          { campeonato: " NBA", equipe1: "Cleveland Cavaliers", equipe2: "Miami Heat", palpite: "Over 216.5", odds: "-", resultado: "-" },
        { campeonato: "CH-1", equipe1: "Nyon", equipe2: "Lugano Tigers", palpite: "Over 172.5", odds: "-", resultado: "-" },
         { campeonato: "FR-1", equipe1: "Paris", equipe2: "Nancy", palpite: "Under 178.5", odds: "-", resultado: "-" },
        { campeonato: "CHL", equipe1: "Ludwisburg", equipe2: "Bonn", palpite: "Away Over 75.5", odds: "-", resultado: "-" }
    ] }
    // Adicione mais desportos conforme necessário
];

// Função para adicionar tabelas de desporto
function adicionarTabelasDesporto() {
    var containerTabelas = document.getElementById("tabelas");

    desportos.forEach(function(desporto) {
        var tabela = document.createElement("table");
        tabela.innerHTML = `
            <caption>${desporto.nome}</caption>
            <thead>
                <tr>
                    <th>League</th>
                    <th>Home</th>
                    <th>Away</th>
                    <th>Prediction</th>
                    <th>Odds</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody id="corpo-tabela-${desporto.nome.replace(/\s/g, '-')}">
                <!-- Conteúdo será adicionado dinamicamente aqui -->
            </tbody>
        `;

        containerTabelas.appendChild(tabela);

        // Adicionar jogos à tabela
        adicionarJogos(desporto.jogos, desporto.nome);
    });
}

// Função para adicionar jogos à tabela
function adicionarJogos(jogos, nomeDesporto) {
    var corpoTabela = document.getElementById("corpo-tabela-" + nomeDesporto.replace(/\s/g, '-'));

    jogos.forEach(function(jogo) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${jogo.campeonato}</td>
            <td>${jogo.equipe1}</td>
            <td>${jogo.equipe2}</td>
            <td>${jogo.palpite}</td>
            <td>${jogo.odds}</td>
            <td>${jogo.resultado}</td>
        `;
        corpoTabela.appendChild(tr);
    });
}

// Chamar a função para adicionar as tabelas de desporto
adicionarTabelasDesporto();






 // Array de desportos (exemplo)
var desportos = [
    { nome: "Today", jogos: [
        { campeonato: "BR-1", equipe1: "Sao Jose", equipe2: "Cerrado", palpite: "1ST Period(Over 40.5)", odds: 1.80, resultado: "-" },
        { campeonato: " BR-1", equipe1: "Sao Paulo", equipe2: "Caxias Do Sul", palpite: "Home", odds:"-", resultado: "-" },
          { campeonato: "BR-1", equipe1: "Mogi", equipe2: "Brasilia", palpite: "Away Over 75.5", odds: "-", resultado: "-" },
        { campeonato: "NBA", equipe1: "Detroit Pistons", equipe2: "Indiana Pasters", palpite: "Away", odds: "-", resultado: "-" },
          { campeonato: " NBA", equipe1: "Cleveland Cavaliers", equipe2: "Miami Heat", palpite: "Over 216.5", odds: "-", resultado: "-" },
        { campeonato: "CH-1", equipe1: "Nyon", equipe2: "Lugano Tigers", palpite: "Over 172.5", odds: "-", resultado: "-" },
         { campeonato: "FR-1", equipe1: "Paris", equipe2: "Nancy", palpite: "Under 178.5", odds: "-", resultado: "-" },
        { campeonato: "CHL", equipe1: "Ludwisburg", equipe2: "Bonn", palpite: "Away Over 75.5", odds: "-", resultado: "-" }
    ] }
    // Adicione mais desportos conforme necessário
];

// Função para adicionar tabelas de desporto
function adicionarTabelasDesporto() {
    var containerTabelas = document.getElementById("tabelas");

    desportos.forEach(function(desporto) {
        var tabela = document.createElement("table");
        tabela.innerHTML = `
            <caption>${desporto.nome}</caption>
            <thead>
                <tr>
                    <th>Campeonato</th>
                    <th>Equipe 1</th>
                    <th>Equipe 2</th>
                    <th>Palpite</th>
                    <th>Odds</th>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody id="corpo-tabela-${desporto.nome.replace(/\s/g, '-')}">
                <!-- Conteúdo será adicionado dinamicamente aqui -->
            </tbody>
        `;

        containerTabelas.appendChild(tabela);

        // Adicionar jogos à tabela
        adicionarJogos(desporto.jogos, desporto.nome);
    });
}

// Função para adicionar jogos à tabela
function adicionarJogos(jogos, nomeDesporto) {
    var corpoTabela = document.getElementById("corpo-tabela-" + nomeDesporto.replace(/\s/g, '-'));

    jogos.forEach(function(jogo) {
        var tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${jogo.campeonato}</td>
            <td>${jogo.equipe1}</td>
            <td>${jogo.equipe2}</td>
            <td>${jogo.palpite}</td>
            <td>${jogo.odds}</td>
            <td>${jogo.resultado}</td>
        `;
        corpoTabela.appendChild(tr);
    });
}

// Chamar a função para adicionar as tabelas de desporto
adicionarTabelasDesporto();






 
