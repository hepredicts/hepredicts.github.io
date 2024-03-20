// Array de desportos (exemplo)
var desportos = [
    { nome: "Football Today", jogos: [
        { campeonato: "EQ1", equipe1: "Deportivo Cuenca", equipe2: "Macara", palpite: "Btts", odds: 1.83, resultado: "-" },
        { campeonato: "ENG NL", equipe1: "Wealdstone", equipe2: "Bromley FC", palpite: "Under 2.5", odds: 2.07, resultado: "-" },
          { campeonato: "ENG NL", equipe1: "Halifax", equipe2: "Chesterfield", palpite: "Away", odds: 2.00, resultado: "-" },
        { campeonato: "ENG NLs", equipe1: "Taunton", equipe2: "Chippenham Town", palpite: "Away to score", odds: "-", resultado: "-" },
          { campeonato: "MX2", equipe1: "Tapatio", equipe2: "Correcaminos", palpite: "Under 2.5", odds:1.75, resultado: "-" }
        
    ] },
    { nome: "Basketball Today", jogos: [
        { campeonato: "BR-1", equipe1: "Sao Jose", equipe2: "Cerrado", palpite: "1ST Period(Over 40.5)", odds: 1.80, resultado: "-" },
        { campeonato: " BR-1", equipe1: "Sao Paulo", equipe2: "Caxias Do Sul", palpite: "Home", odds:"-", resultado: "-" },
          { campeonato: "BR-1", equipe1: "Mogi", equipe2: "Brasilia", palpite: "Away Over 75.5", odds: "-", resultado: "-" },
        { campeonato: "NBA", equipe1: "Detroit Pistons", equipe2: "Indiana Pasters", palpite: "Away", odds: "-", resultado: "-" },
          { campeonato: " NBA", equipe1: "Cleveland Cavaliers", equipe2: "Miami Heat", palpite: "Over 216.5", odds: "-", resultado: "-" },
    ] },
    { nome:"Ice hockey Today",jogos: [
         { campeonato: "CA-OHL", equipe1: "North Bay Battalion", equipe2: "Barrie Colts", palpite: "Away over 2.5", odds: 1.60, resultado: "-" },
        {campeonato:"CA-OHL",equipe1:"Flint Firebirds",equipe2:"Erie Otters",palpite:"2ND Period(BTS)", odds:"-",resultado:"-"},
        {campeonato:"CA-QMJ",equipe1:"Victoriaville Tigers",equipe2:"Shawinigan Cataractes",palpite:"1ST Period(BTS)",odds:"-",resultado:"-"},
        {campeonato:"CA-QMJ",equipe1:"Saint John Sea Dogs",equipe2:"Moncton WildCats",palpite:"1ST Period(HTS)",odds:"-",resultado:"-"},
        {campeonato:"GB1",equipe1:"Dundee",equipe2:"Guildford",palpite:"Over 5.5",odds:1.58,resultado:"-"},
        {campeonato:"GB1",equipe1:"Cardiff",equipe2:"Sheffield",palpite:"2ND Period(ATS)",odds:"-",resultado:"-"},
        {campeonato:"CH1",equipe1:"Zurich",equipe2:"Biel",palpite:"1ST period(ATS)",odds:"-",resultado:""}
        ]}
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




