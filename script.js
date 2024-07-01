const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual é uma das principais causas do desmatamento na Amazônia, considerando os principais fatores econômicos e industriais que impulsionam essa prática?",
        alternativas: [
            {
                texto: "Agricultura e pecuária",
                afirmacao: "A agricultura e a pecuária são responsáveis por uma grande parte do desmatamento na Amazônia. Grandes áreas de floresta são desmatadas para dar lugar a pastagens para o gado e plantações de soja, que são commodities altamente lucrativas. Essas atividades econômicas, embora essenciais para a economia, têm um impacto devastador na floresta."
            },
            {
                texto: "Urbanização",
                afirmacao: "Embora a urbanização tenha um impacto na floresta, não é a principal causa do desmatamento na Amazônia. A expansão de cidades e vilarejos ocorre, mas em uma escala muito menor comparada às atividades agrícolas e pecuárias. A maioria do desmatamento é impulsionada pela demanda por terras agrícolas. "
            }
        ]
    },
    {
        enunciado: "Quais são os impactos do desmatamento na biodiversidade da Amazônia, levando em conta a importância ecológica da região e a interação das espécies com seu habitat?",
        alternativas: [
            {
                texto: "Aumento da diversidade de espécies",
                afirmacao: "Na verdade, o desmatamento tende a reduzir a diversidade de espécies. A destruição do habitat natural elimina as condições de vida de muitas espécies, resultando na perda de biodiversidade e até mesmo na extinção de espécies que não conseguem se adaptar a novas condições. "
            },
            {
                texto: "Perda de habitat e extinção de espécies",
                afirmacao: "O desmatamento causa uma grave perda de habitat para muitas espécies, levando à redução da biodiversidade. Espécies que são únicas da Amazônia encontram dificuldades em sobreviver quando suas casas são destruídas. Esse processo pode levar à extinção de espécies que não conseguem encontrar novos ambientes adequados para viver."
            }
        ]
    },
    {
        enunciado: "Qual a consequência do desmatamento para as comunidades indígenas da Amazônia, considerando a relação dessas comunidades com a floresta e seu modo de vida tradicional?",
        alternativas: [
            {
                texto: "Preservação das culturas tradicionais",
                afirmacao: "O desmatamento geralmente não leva à preservação das culturas tradicionais indígenas. Pelo contrário, a destruição da floresta ameaça diretamente os modos de vida e as culturas dessas comunidades, que dependem da floresta para seu sustento e práticas culturais."
            },
            {
                texto: "Deslocamento e perda de território",
                afirmacao: "As comunidades indígenas frequentemente sofrem com o desmatamento, sendo deslocadas de suas terras ancestrais. Isso resulta na perda de território, que é crucial para sua subsistência e manutenção de suas tradições culturais. O desmatamento força essas comunidades a buscar novas áreas, muitas vezes em condições precárias."
            }
        ]
    },
    {
        enunciado: "Como o desmatamento na Amazônia afeta o clima global, especialmente em relação à função da floresta como sumidouro de carbono e regulador climático?",
        alternativas: [
            {
                texto: "Redução da emissão de gases de efeito estufa",
                afirmacao: "Na verdade, o desmatamento contribui para o aumento das emissões de gases de efeito estufa. A floresta Amazônica atua como um sumidouro de carbono, absorvendo grandes quantidades de CO2. Quando a floresta é destruída, o carbono armazenado é liberado na atmosfera, exacerbando o efeito estufa."
            },
            {
                texto: "Aumento da emissão de gases de efeito estufa",
                afirmacao: "O desmatamento libera grandes quantidades de dióxido de carbono (CO2) e outros gases de efeito estufa na atmosfera. A floresta Amazônica, ao ser derrubada, perde sua capacidade de absorver CO2, contribuindo para o aquecimento global e as mudanças climáticas. A floresta desempenha um papel crucial na regulação do clima global."
            }
        ]
    },
    {
        enunciado: "Quais medidas podem ajudar a combater o desmatamento na Amazônia, considerando as políticas públicas e estratégias de conservação ambiental que podem ser implementadas?",
        alternativas: [
            {
                texto: "Expansão da fronteira agrícola",
                afirmacao: "Expandir a fronteira agrícola significa aumentar o desmatamento, já que mais terras seriam convertidas para a agricultura. Essa prática não contribui para a conservação da Amazônia, mas sim para sua destruição."
            },
            {
                texto: "Fiscalização e políticas de conservação ambiental",
                afirmacao: "A implementação de uma fiscalização mais rigorosa e políticas de conservação são essenciais para combater o desmatamento. Isso inclui a criação de áreas protegidas, incentivos para a prática de agricultura sustentável e a aplicação de leis ambientais. Essas medidas ajudam a preservar a floresta e a biodiversidade da Amazônia, garantindo que futuras gerações possam usufruir desses recursos."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();