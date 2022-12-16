const contentBox = document.querySelector("#container");
const add = document.querySelector(".add");
const remove = document.querySelector(".remove");

const randomic = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const colors = [
  "#BEE4E7",
  "#F8C9D3",
  "#E78AA5",
  "#D9C3AC",
  "#D3BEDD",
  "#9DDBF0",
  "#FBF6BC",
];

const quotes = [
  "Você deve fazer o que acha que é certo, é claro. \n-Obi-Wan Kenobi",
  "Mos Eisley Spaceport. Você nunca encontrará uma colmeia mais miserável de escumalha e vilania. Devemos ser cautelosos. \n-Obi-Wan Kenobi",
  "Seus olhos podem enganar você. Não confie neles. \n-Obi-Wan Kenobi",
  "Lembre-se... a Força estará com você, sempre. \n-Obi-Wan Kenobi",
  "Em minha experiência, a sorte não existe. \n-Obi-Wan Kenobi",
  "Estes não são os dróides que você está procurando. \n-Obi-Wan Kenobi",
  "Senti uma grande perturbação na Força, como se de repente milhões de vozes gritassem de terror e de repente fossem silenciadas. \n-Obi-Wan Kenobi",
  "Use a Força, Luke.\n-Obi-Wan Kenobi",
  "Você não pode vencer, Darth. Se você me derrubar, eu me tornarei mais poderoso do que você poderia imaginar. \n-Obi-Wan Kenobi",
  "Isso não é lua. É uma estação espacial. \n-Obi-Wan Kenobi",
  "Luke! Não ceda ao ódio. Isso leva ao Lado Negro. \n-Obi-Wan Kenobi",
  "Quem é o mais tolo, o tolo ou o tolo que o segue? \n-Obi-Wan Kenobi",
  "E estes pontos de explosão, precisos demais para o povo da areia. Somente os Stormtroopers Imperiais são tão precisos. \n-Obi-Wan Kenobi",
  "Acho sua falta de fé perturbadora. \n-Darth Vader",
  "O círculo agora está completo. Quando eu o deixei, eu era apenas o aprendiz. Agora eu sou o mestre. \n-Darth Vader",
  "A Força está com você, jovem Skywalker, mas você ainda não é um Jedi. \n-Darth Vader",
  "Não. Eu sou seu pai. \n-Darth Vader",
  "Impressionante. Muito impressionante. \n-Darth Vader",
  "Eu estou alterando o acordo. Reze para que eu não o altere mais. \n-Darth Vader",
  "Você subestima o poder do Lado Negro. Se você não vai lutar, então você encontrará seu destino. \n-Darth Vader",
  "Você falhou comigo pela última vez, Almirante! \n-Darth Vader",
  "A Força é forte com esta. \n-Darth Vader",
  "A capacidade de destruir um planeta é insignificante ao lado do poder da Força. \n-Darth Vader",
  "Fazer. Ou não fazer. Não há como tentar. \n-Yoda",
  "Você deve desaprender o que aprendeu. \n-Yoda",
  "Quando você tiver novecentos anos de idade, não terá um aspecto tão bom quanto você não terá. \n-Yoda",
  "Verdadeiramente maravilhoso, a mente de uma criança é. \n-Yoda",
  "Um Jedi usa a Força para o conhecimento e a defesa, nunca para o ataque. \n-Yoda",
  "Aventura. Excitação. Um Jedi não anseia por estas coisas. \n-Yoda",
  "O tamanho não importa. Você me julga pelo meu tamanho, não é mesmo? \n-Yoda",
  "O medo é o caminho para o lado negro...o medo leva à raiva...a raiva leva ao ódio...o ódio leva ao sofrimento. \n-Yoda",
  "As guerras não fazem uma grande. \n-Yoda",
  "Seres luminosos somos nós...não esta matéria bruta. \n-Yoda",
  "Difícil de se ver. Sempre em movimento é o futuro. \n-Yoda",
  "Controle, controle, você deve aprender a controlar! \n-Yoda",
  "Nunca vou me voltar para o Lado Negro. Você falhou, sua Alteza. Eu sou um Jedi, como meu pai antes de mim. \n-Luke Skywalker",
  "Se existe um centro brilhante para o universo, você está no planeta do qual ele está mais longe. \n-Luke Skywalker",
  "Eu sou Luke Skywalker. Estou aqui para resgatá-lo. \n-Luke Skywalker",
  "A Força é forte em minha família. Meu pai a tem. Eu a tenho. Minha irmã tem-na. Você também tem esse poder. \n-Luke Skywalker",
  "Mas eu estava indo para a Estação Tosche para pegar alguns conversores de energia! \n-Luke Skywalker",
  "Chewie...estamos em casa. \n-Han Solo",
  "Nunca me diga as probabilidades. \n-Han Solo",
  "As mulheres sempre descobrem a verdade. Sempre. \n-Han Solo",
  "Navio rápido? Você nunca ouviu falar do Millennium Falcon? É o navio que fez o Kessel Run em menos de doze parsecs. \n-Han Solo",
  "Grande tiro, garoto, esse foi um em um milhão! \n-Han Solo",
  "Conversa enfadonha de qualquer forma. LUKE, NÓS VAMOS TER COMPANHIA! \n-Han Solo",
  "Nenhuma recompensa vale isso. \n-Han Solo",
  "Maravilhosa menina. Ou eu vou matá-la ou começo a gostar dela. \n-Han Solo",
  "Olhe, Vossa Adoração, vamos esclarecer uma coisa. Eu recebo ordens de apenas uma pessoa: eu. \n-Han Solo",
  "Ajude-me, Obi-Wan Kenobi. Você é minha única esperança. \n-Princess Leia Organa",
  "Não lhe falta um pouco para um trovador de tempestades? \n-Princess Leia Organa",
  "Alguém tem que salvar nossas peles. Para a calha do lixo, menino voador. \n-Princess Leia Organa",
  "Alguém vai tirar este grande tapete ambulante do meu caminho? \n-Leia Organa",
  "Você não precisa se preocupar com sua recompensa. Se o dinheiro é tudo o que você ama, então isso é o que você receberá. \n-Leia Organa",
  "Sugiro uma nova estratégia, R2: deixar o Wookiee vencer. \n-C-3PO",
  "Parece que somos feitos para sofrer. É a nossa sorte na vida. \n-C-3PO",
  "Senhor, a possibilidade de navegar com sucesso em um campo de asteróides é de aproximadamente 3.720 a 1. \n-C-3PO",
  "Senhor, é bem possível que este asteróide não seja totalmente estável. \n-C-3PO",
  "Não me chame de filósofo insensato, seu globo de graxa com excesso de peso! \n-C-3PO",
  "Jovem idiota... Só agora, no final, você entende... \n-O Imperador",
  "Suas habilidades frágeis não são compatíveis com o poder do Lado Negro. \n- O Imperador",
  "Agora, você vai pagar o preço por sua falta de visão! \n- O Imperador",
  "Vou torná-lo legal.\n-Darth Sidious",
  "Muitos Bothans morreram para nos trazer esta informação. \n-Mon Mothma",
  "Encantador até o fim. Você não sabe o quanto eu achei difícil, assinando a ordem para acabar com sua vida. \n-Governador Tarkin",
  "É uma armadilha!\n-Admiral Ackbar",
  "Então é assim que a liberdade morre... com aplausos estrondosos. \n-Padmé Amidala",
  "Ele não é bom para mim morto. \n-Boba Fett",
  "Tenho um mau pressentimento sobre isto. \n-Vários personagens na Guerra das Estrelas",
  "Que a força esteja com você.\n-Vários personagens na Guerra das Estrelas",
];

add.addEventListener("click", () => {
  let totalDivs = contentBox.childNodes.length;
  const newDiv = document.createElement("div");
  let url = `https://loremflickr.com/320/240/star-wars?random=${totalDivs}`;
  newDiv.setAttribute("class", "child");
  newDiv.style.display = "block";
  newDiv.style.backgroundColor = colors[randomic(0, 6)];
  newDiv.style.height = `${randomic(200, 500)}px`;
  newDiv.innerHTML = `<div class="img" style="background-image: url(${url});"></div><p>${
    quotes[randomic(0, 69)]
  }</p>`;
  contentBox.appendChild(newDiv);
});

remove.addEventListener("click", () => {
  contentBox.removeChild(contentBox.lastChild);
});
