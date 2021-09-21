var jogadores = [];

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function removerJogador(i) {
  jogadores.splice(i, 1);
  exibeJogadoresNaTela(jogadores);
}

function resetarPlacar() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = 0;
  }
  exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
  jogadores.push({
    nome: document.getElementById("nome").value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
  document.getElementById("nome").value = "";
  exibeJogadoresNaTela(jogadores);
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";

  for (var i = 0; i < jogadores.length; i++) {
    elemento +=
      "<tr><td><button class='btn' onClick='removerJogador(" +
      i +
      ")'><i class='fa fa-trash'></i></button> " +
      jogadores[i].nome +
      "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

exibeJogadoresNaTela(jogadores);
