// Array de desportos (exemplo)
var desportos = [
    { nome: "Football Today", jogos: [
        { campeonato: "EQ1", equipe1: "Deportivo Cuenca", equipe2: "Macara", palpite: "Btts", odds: 1.83, resultado: "-" },
        { campeonato: "ENG NL", equipe1: "Wealdstone", equipe2: "Bromley FC", palpite: "Under 2.5", odds: 2.07, resultado: "-" },
          { campeonato: "ENG NL", equipe1: "Halifax", equipe2: "Chesterfield", palpite: "Away", odds: 2.00, resultado: "-" },
        { campeonato: "ENG NLs", equipe1: "Taunton", equipe2: "Chippenham Town", palpite: "Away to score", odds: "-", resultado: "-" },
          { campeonato: "MX2", equipe1: "Tapatio", equipe2: "Correcaminos", palpite: "Under 2.5", odds:1.75, resultado: "-" },
        { campeonato: "VEN1", equipe1: "Caracas", equipe2: "Angostura", palpite: "Btts", odds: "-", resultado: "-" },
         { campeonato: "VEN1 ", equipe1: "Rayo Zuliano", equipe2: "Hermanos Colmenares", palpite: " Draw", odds: "-", resultado: "-" },
        { campeonato: "BO1", equipe1: "Aurora", equipe2: "Royal Party", palpite: "Over 2.5", odds:1.73, resultado: "-" },
         { campeonato: "GER-4", equipe1: "Eintracht Nordestedt", equipe2: "Weiche Flensburg", palpite: "Btts", odds: "-", resultado: "-" },
        { campeonato: "ENG IL", equipe1: "Kingstonian", equipe2: "Dulwicht Hamlet", palpite: "Over 2.5", odds: "-", resultado: "-" },
        
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






