// Array de desportos (exemplo)
var desportos = [
    { nome: "Futebol", jogos: [
        { campeonato: "Campeonato A", equipe1: "Equipe A", equipe2: "Equipe B", palpite: "Vitória Time A", odds: 2.00, resultado: "-" },
        { campeonato: "Campeonato B", equipe1: "Equipe C", equipe2: "Equipe D", palpite: "Empate", odds: 3.50, resultado: "-" },
          { campeonato: "Campeonato A", equipe1: "Equipe A", equipe2: "Equipe B", palpite: "Vitória Time A", odds: 2.00, resultado: "-" },
        { campeonato: "Campeonato B", equipe1: "Equipe C", equipe2: "Equipe D", palpite: "Empate", odds: 3.50, resultado: "-" },
          { campeonato: "Campeonato A", equipe1: "Equipe A", equipe2: "Equipe B", palpite: "Vitória Time A", odds: 2.00, resultado: "-" },
        { campeonato: "Campeonato B", equipe1: "Equipe C", equipe2: "Equipe D", palpite: "Empate", odds: 3.50, resultado: "-" },
         { campeonato: "Campeonato A", equipe1: "Equipe A", equipe2: "Equipe B", palpite: "Vitória Time A", odds: 2.00, resultado: "-" },
        { campeonato: "Campeonato B", equipe1: "Equipe C", equipe2: "Equipe D", palpite: "Empate", odds: 3.50, resultado: "-" },
         { campeonato: "Campeonato A", equipe1: "Equipe A", equipe2: "Equipe B", palpite: "Vitória Time A", odds: 2.00, resultado: "-" },
        { campeonato: "Campeonato B", equipe1: "Equipe C", equipe2: "Equipe D", palpite: "Empate", odds: 3.50, resultado: "-" },
        
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






