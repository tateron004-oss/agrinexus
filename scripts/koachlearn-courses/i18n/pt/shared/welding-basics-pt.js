"use strict";

// Koach Learn course (Portuguese translation of shared/welding-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "welding-basics-pt",
  lang: "pt",
  translationOf: "welding-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Soldadura",
  skills: "Escolher o processo de soldadura certo para cada trabalho, Ler juntas, posições e símbolos de soldadura, Reconhecer defeitos comuns de soldadura, Planear a segurança e a prevenção de incêndios na soldadura, Planear o seu caminho até à certificação de soldador",
  outcome: "escolher o processo de soldadura certo para um trabalho, ler os tipos de junta, as posições e um símbolo de soldadura simples, reconhecer defeitos comuns de soldadura, planear o equipamento de proteção e a prevenção de incêndios para uma tarefa de soldadura e seguir um plano com datas para ter formação e fazer um teste de certificação de soldador.",
  about: [
    "Os soldadores unem metal para edifícios, pontes, navios, oleodutos, camiões, máquinas agrícolas e fábricas. Muitos começam numa escola técnica, num colégio comunitário, numa aprendizagem, nas forças armadas ou com formação no próprio trabalho. Este curso é para quem está a pensar neste caminho: quem procura trabalho, jovens adultos, pessoas que voltam da prisão, antigos militares, imigrantes e adultos que voltam a estudar.",
    "Você vai aprender os principais processos de soldadura e de corte, as juntas e as posições que os soldadores usam, como ler um símbolo de soldadura simples num desenho e como distinguir uma boa soldadura de uma má. Depois vai aprender como os soldadores protegem os olhos, a pele, os pulmões e os ouvidos, como evitam incêndios e como funciona a certificação de soldador.",
    "Este curso prepara você. Não dá um certificado nem uma licença. Neste curso você não vai soldar nem cortar: a soldadura só se aprende numa oficina com supervisão e com o equipamento de proteção certo. Uma certificação de soldador, como a AWS Certified Welder da American Welding Society (Sociedade Americana de Soldadura), obtém-se ao passar num teste prático num centro de testes aprovado.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio plano de início na soldadura, com datas reais."
  ],
  finalTask: "Faça o seu plano de início na soldadura: (1) um quadro de processos que liga quatro processos de soldadura ou de corte a um trabalho real cada um; (2) uma folha de leitura com os cinco tipos de junta desenhados, as quatro posições escritas e cinco defeitos de soldadura com uma causa provável cada um; (3) uma lista de verificação de segurança antes de soldar, para uma tarefa com elétrodo revestido ou MIG, que cubra os olhos, a pele, os pulmões, os ouvidos, o fogo e o choque elétrico; e (4) um plano com datas que diga o nome de dois programas de formação perto de você, o processo e a posição em que quer certificar-se, onde pode fazer o teste (um AWS Accredited Test Facility), o que o seu estado ou cidade exige (da página oficial) e uma data para cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos que procuram um ofício prático: quem procura trabalho, pessoas que voltam da prisão, jovens adultos, antigos militares, imigrantes e adultos que voltam a estudar. Alguns já fizeram trabalho de oficina, agrícola, mecânico ou militar; a maioria nunca soldou.",
    startingPoint: "Sabem ler instruções curtas e fazer contas com números inteiros. A maioria sabe que a soldadura usa calor e uma luz muito forte para unir metal, mas não sabe dizer o nome dos processos, ler um símbolo de soldadura, avaliar uma soldadura nem listar os passos de segurança.",
    gap: "As escolas de soldadura, as aprendizagens e os empregadores querem pessoas que conheçam as palavras básicas, levem a segurança a sério e saibam o que um teste de certificação pede. Os alunos precisam dessa base e de um plano claro com datas, para escolherem uma boa formação, não desperdiçarem dinheiro e chegarem à oficina prontos para aprender.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra do ofício é explicada",
      "Nada de soldar, cortar ou rebarbar neste curso: o trabalho prático precisa de uma oficina com supervisão e do equipamento de proteção certo",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas oficiais e as fotos de soldaduras; papel e caneta para desenhos e planos",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho e as consultas",
      "As regras mudam de estado para estado e de cidade para cidade: os alunos verificam as licenças na página oficial do lugar onde vivem"
    ],
    prerequisites: "Nenhum. O curso \"Começar uma Carreira num Ofício Técnico\" ajuda a escolher um ofício; este curso aprofunda a soldadura."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de um trabalho de soldadura ou de corte", action: "ligar o trabalho a um processo comum: elétrodo revestido, MIG, fio fluxado, TIG, oxicorte ou plasma", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com um desenho, uma foto ou um símbolo de soldadura", action: "dizer o tipo de junta, a posição de soldadura e as partes básicas de um símbolo de soldadura", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Com fotos ou descrições de soldaduras acabadas", action: "identificar defeitos comuns de soldadura e dizer uma causa provável de cada um", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com uma tarefa de soldadura", action: "listar o equipamento de proteção, a ventilação e a prevenção de incêndios de que a tarefa precisa", standard: "cobrindo os olhos, a pele, os pulmões, os ouvidos, o choque elétrico e pelo menos três cuidados contra incêndios" },
    { id: "O5", condition: "Usando sites oficiais da sua zona", action: "escrever um plano com datas para ter formação e fazer um teste de certificação de soldador", standard: "com dois programas reais, um local de teste e uma data para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona a soldadura",
      lessons: [
        {
          title: "O que fazem os soldadores, e os principais processos",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ligar um trabalho de soldadura ou de corte ao processo comum certo.",
          text: [
            "Soldar é unir peças de metal derretendo-as, para que se misturem e endureçam como uma só peça. A maior parte da soldadura usa um arco elétrico, uma faísca muito quente entre um elétrodo e o metal. Muitas vezes junta-se um metal de adição, e alguma coisa tem de proteger o metal quente do ar para que a soldadura fique forte.",
            "A soldadura com elétrodo revestido (SMAW, em inglês \"stick\") usa uma vareta com revestimento. É simples e funciona ao ar livre e com vento, por isso é comum na construção, nos oleodutos e nas reparações. A soldadura MIG (GMAW) faz passar um fio por uma pistola com um gás de proteção; é rápida e comum nas fábricas e nas oficinas de automóveis. A soldadura com fio fluxado (FCAW) usa um fio com fluxo por dentro; é usada em aço mais grosso e em alguns trabalhos ao ar livre. A soldadura TIG (GTAW) usa um elétrodo de tungsténio e uma vareta de adição separada; é lenta, mas muito limpa e precisa, e é usada em metal fino, aço inoxidável e alumínio.",
            "Os soldadores também cortam metal. O oxicorte usa uma chama de gás combustível e oxigénio, sobretudo em aço. O corte por plasma usa um arco elétrico e um jato rápido de gás e pode cortar muitos metais.",
            "Os empregadores normalmente testam você num processo e numa posição definidos, por isso conhecer estes nomes ajuda a ler anúncios de emprego e a escolher a formação."
          ],
          words: [
            ["Arco", "uma faísca elétrica muito quente entre o elétrodo e o metal, que derrete o metal."],
            ["Elétrodo", "a vareta ou o fio que leva a corrente para fazer o arco; em alguns processos também se torna metal de adição."],
            ["Metal de adição", "metal extra que se junta para encher a junta."],
            ["Proteção", "gás ou fluxo que mantém o ar longe da soldadura quente para que ela fique forte."],
            ["Elétrodo revestido (SMAW)", "soldadura por arco com elétrodo revestido, usando uma vareta com revestimento de fluxo; em inglês \"stick\"."],
            ["MIG (GMAW)", "soldadura por arco com gás: um fio que passa por uma pistola com gás de proteção."],
            ["Fio fluxado (FCAW)", "soldadura por arco com fio fluxado: um fio com fluxo por dentro, que vai saindo da máquina."],
            ["TIG (GTAW)", "soldadura por arco com elétrodo de tungsténio e gás: uma vareta de adição separada; lenta e precisa."]
          ],
          slides: [
            { title: "O que é soldar", bullets: ["Derreter metal para que se una numa só peça", "A maioria usa um arco elétrico", "A proteção mantém o ar longe da soldadura"] },
            { title: "Quatro processos comuns", bullets: ["Elétrodo revestido (SMAW): simples, funciona ao ar livre", "MIG (GMAW): rápido, fábricas e oficinas de automóveis", "Fio fluxado (FCAW): aço mais grosso, algum trabalho ao ar livre", "TIG (GTAW): lento, limpo, metal fino e alumínio"] },
            { title: "Corte", bullets: ["Oxicorte: chama, sobretudo aço", "Plasma: arco e gás rápido, muitos metais"] },
            { title: "Porque os nomes importam", bullets: ["Os anúncios de emprego dizem o processo", "Os testes são num processo e numa posição"] }
          ],
          tryIt: "Procure \"soldador\" (ou \"welder\") num site de emprego perto de você e leia três anúncios. Para cada um, escreva que processo pede (elétrodo revestido, MIG, fio fluxado ou TIG), o que se fabrica ou repara e qualquer certificação que mencione. Depois faça um pequeno quadro: os quatro processos de um lado e um trabalho real ao lado de cada um. Guarde-o: é a parte 1 da sua tarefa final.",
          youCanNow: "dizer os principais processos de soldadura e de corte e ligar cada um ao tipo de trabalho para que serve.",
          quickCheck: [
            { objective: "O1", q: "Uma equipa tem de reparar uma vedação de aço ao ar livre, num dia de vento, com equipamento simples. Que processo serve melhor?", options: ["TIG", "Elétrodo revestido (SMAW)", "Corte por plasma", "MIG com gás de proteção"], answer: 1, why: "O elétrodo revestido usa uma vareta com revestimento e funciona ao ar livre e com vento, onde o gás de proteção seria levado pelo vento." },
            { objective: "O1", q: "Uma oficina precisa de soldaduras muito limpas e precisas em alumínio fino. Que processo serve melhor?", options: ["Oxicorte", "Fio fluxado", "Elétrodo revestido", "TIG (GTAW)"], answer: 3, why: "O TIG é lento, mas muito limpo e preciso, e usa-se em metal fino e alumínio." }
          ]
        },
        {
          title: "Juntas, posições e símbolos de soldadura",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dizer o tipo de junta e a posição de soldadura num desenho e ler as partes básicas de um símbolo de soldadura.",
          text: [
            "Há cinco juntas básicas. Junta de topo: duas peças com as pontas encostadas, em linha. Junta em T: uma peça em pé sobre outra, como um T. Junta sobreposta: duas peças, uma por cima da outra. Junta de canto: duas peças que se encontram num canto, como um L. Junta de bordo: duas peças lado a lado, soldadas ao longo dos bordos.",
            "Há quatro posições de soldadura. Plana: você solda de cima, é a mais fácil. Horizontal: a soldadura corre de lado numa superfície como uma parede. Vertical: a soldadura sobe ou desce. Sobrecabeça: você solda de baixo, é a mais difícil. Nos testes, têm os números de 1 a 4, com G para uma soldadura de topo em chanfro e F para uma soldadura de ângulo; por exemplo, 3G é uma soldadura em chanfro na vertical e 2F é uma soldadura de ângulo na horizontal.",
            "Uma soldadura em chanfro (em inglês \"groove\") enche um espaço ou um chanfro preparado, muitas vezes numa junta de topo. Uma soldadura de ângulo (em inglês \"fillet\") enche o canto de uma junta em T, sobreposta ou de canto e, vista de lado, parece um triângulo.",
            "Os desenhos usam símbolos de soldadura. A seta aponta para a junta. O símbolo fica sobre uma linha reta, a linha de referência. Se o símbolo está por baixo da linha, a soldadura faz-se do lado da seta; se está por cima da linha, faz-se do outro lado. Um pequeno triângulo quer dizer soldadura de ângulo, e o número ao lado é normalmente o tamanho da soldadura. Uma cauda na ponta pode ter notas extra, como o processo."
          ],
          steps: [
            "Encontre a seta: aponta para a junta.",
            "Veja a linha de referência: símbolo por baixo = lado da seta, por cima = outro lado.",
            "Leia o símbolo: um triângulo quer dizer soldadura de ângulo.",
            "Leia o número ao lado (tamanho) e qualquer nota na cauda."
          ],
          words: [
            ["Junta", "o lugar onde duas peças de metal se encontram para serem soldadas."],
            ["Topo, em T, sobreposta, de canto, de bordo", "os cinco tipos básicos de junta."],
            ["Soldadura em chanfro", "uma soldadura que enche um espaço ou um chanfro preparado entre as peças; em inglês \"groove weld\"."],
            ["Soldadura de ângulo", "uma soldadura num canto, com forma de triângulo vista de lado; em inglês \"fillet weld\"."],
            ["Posição", "a direção em que você solda: plana, horizontal, vertical ou sobrecabeça (1 a 4)."],
            ["Símbolo de soldadura", "um código de desenho com uma seta, uma linha de referência e símbolos que dizem ao soldador que soldadura fazer."],
            ["Linha de referência", "a linha reta de um símbolo de soldadura; por baixo dela quer dizer lado da seta, por cima quer dizer outro lado."]
          ],
          slides: [
            { title: "Cinco juntas básicas", bullets: ["De topo: pontas encostadas", "Em T: como um T; Sobreposta: uma por cima da outra", "De canto: como um L; De bordo: lado a lado"] },
            { title: "Quatro posições", bullets: ["1 Plana, 2 Horizontal", "3 Vertical, 4 Sobrecabeça", "G = em chanfro, F = de ângulo (3G, 2F)"] },
            { title: "Em chanfro ou de ângulo", bullets: ["Em chanfro: enche um espaço, muitas vezes em juntas de topo", "De ângulo: enche um canto, forma de triângulo"] },
            { title: "Ler um símbolo de soldadura", bullets: ["A seta aponta para a junta", "Por baixo da linha = lado da seta; por cima = outro lado", "Triângulo = de ângulo; número = tamanho; cauda = notas"] }
          ],
          tryIt: "Use tiras de papel ou dois pedaços de cartão para fazer cada uma das cinco juntas e desenhe cada uma com o seu nome. Ao lado dos desenhos, escreva as quatro posições com os seus números. Depois procure uma imagem de um \"fillet weld symbol\" (símbolo de soldadura de ângulo) e escreva: de que lado se faz a soldadura e o que quer dizer o número. Guarde os desenhos: são a parte 2 da sua tarefa final.",
          youCanNow: "dizer as cinco juntas e as quatro posições e ler as partes básicas de um símbolo de soldadura.",
          quickCheck: [
            { objective: "O2", q: "Uma chapa está em pé no meio de outra chapa deitada, como a letra T. Que junta é?", options: ["Junta em T", "Junta de topo", "Junta sobreposta", "Junta de bordo"], answer: 0, why: "Uma junta em T tem uma peça em pé sobre outra, como um T." },
            { objective: "O2", q: "Num símbolo de soldadura, o triângulo está por baixo da linha de referência. Onde se faz a soldadura?", options: ["Do outro lado", "Dos dois lados", "Do lado da seta", "Em lado nenhum; é uma nota"], answer: 2, why: "Um símbolo por baixo da linha de referência quer dizer que a soldadura se faz do lado da seta." }
          ]
        },
        {
          title: "Distinguir uma boa soldadura de uma má",
          objectives: ["O3"],
          minutes: 6,
          goal: "Identificar defeitos comuns de soldadura em fotos ou descrições e dizer uma causa provável de cada um.",
          text: [
            "Os soldadores e os inspetores verificam as soldaduras primeiro olhando para elas. Uma boa soldadura tem forma e largura iguais, junta-se suavemente às duas peças e não tem buracos nem fissuras. Alguns trabalhos também testam as soldaduras dobrando-as ou com equipamento especial, e os inspetores de soldadura têm formação e certificação para isso.",
            "Defeitos comuns: a porosidade são pequenos buracos ou bolhas, muitas vezes por metal sujo ou gás de proteção fraco. A mordedura é um sulco derretido no metal ao longo do bordo da soldadura, muitas vezes por calor a mais ou ângulo errado. A falta de fusão quer dizer que a soldadura não se fundiu com o metal, muitas vezes por calor a menos ou por avançar depressa demais. As fissuras são linhas dentro ou ao lado da soldadura; são graves. Salpicos a mais (pequenas bolas de metal à volta da soldadura) vêm muitas vezes de regulações erradas. A sobreposição é metal de soldadura que ficou por cima da superfície sem se fundir.",
            "Na oficina, o seu instrutor vai ensinar como corrigir cada causa, por exemplo limpar o metal primeiro, mudar as regulações, o ângulo ou a velocidade de avanço, ou verificar o gás. Neste curso você pratica o olhar e o dar nomes."
          ],
          steps: [
            "Veja a forma: a largura e a altura são iguais?",
            "Veja os bordos: junta-se bem, ou há um sulco (mordedura) ou um rolo (sobreposição)?",
            "Veja a superfície: há buracos (porosidade) ou fissuras?",
            "Veja à volta: há muitos salpicos?",
            "Escreva o defeito e uma causa provável."
          ],
          words: [
            ["Defeito", "uma falha que pode tornar uma soldadura mais fraca ou fazê-la chumbar na inspeção."],
            ["Porosidade", "pequenos buracos ou bolhas numa soldadura, muitas vezes por sujidade ou proteção fraca."],
            ["Mordedura", "um sulco derretido no metal ao longo do bordo da soldadura; em inglês \"undercut\"."],
            ["Falta de fusão", "a soldadura não se fundiu com o metal de base."],
            ["Salpicos", "pequenas bolas de metal atiradas à volta da soldadura."],
            ["Inspeção visual", "verificar uma soldadura olhando para ela com cuidado, o primeiro teste de qualquer soldadura."]
          ],
          slides: [
            { title: "Uma boa soldadura", bullets: ["Forma e largura iguais", "Junta-se suavemente às duas peças", "Sem buracos, sem fissuras"] },
            { title: "Defeitos comuns", bullets: ["Porosidade: buracos ou bolhas", "Mordedura: sulco no bordo", "Falta de fusão; fissuras; salpicos; sobreposição"] },
            { title: "Causas prováveis", bullets: ["Metal sujo ou gás fraco: porosidade", "Calor a mais ou ângulo errado: mordedura", "Calor a menos ou depressa demais: falta de fusão"] },
            { title: "Verifique cada soldadura", bullets: ["Forma, bordos, superfície, à volta", "Diga o defeito e uma causa", "A correção aprende-se na oficina"] }
          ],
          tryIt: "Procure fotos de \"weld porosity\" (porosidade), \"weld undercut\" (mordedura) e \"good MIG weld\" (boa soldadura MIG) de uma escola de soldadura ou de um fornecedor. Para cada foto, escreva o que vê e diga o defeito (ou diga que parece boa). Depois faça uma lista de cinco defeitos com uma causa provável cada um. Guarde a lista: entra na parte 2 da sua tarefa final.",
          youCanNow: "reconhecer defeitos comuns de soldadura e dizer uma causa provável de cada um.",
          quickCheck: [
            { objective: "O3", q: "Uma soldadura tem muitos buracos pequenos na superfície. Que defeito é este?", options: ["Mordedura", "Sobreposição", "Porosidade", "Salpicos"], answer: 2, why: "Pequenos buracos ou bolhas numa soldadura são porosidade." },
            { objective: "O3", q: "Há um sulco derretido no metal ao longo do bordo da soldadura. Qual é uma causa provável?", options: ["Calor a mais ou ângulo errado", "O metal estava limpo demais", "A máscara era escura demais", "A soldadura estava fria demais para tocar"], answer: 0, why: "A mordedura vem muitas vezes de calor a mais ou de um ângulo mal feito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona a soldadura",
        questions: [
          { objective: "O1", q: "Que processo faz passar um fio por uma pistola com um gás de proteção?", options: ["Elétrodo revestido (SMAW)", "MIG (GMAW)", "Oxicorte", "TIG (GTAW)"], answer: 1, why: "O MIG (soldadura por arco com gás) usa um fio que vai saindo e gás de proteção." },
          { objective: "O1", q: "Qual é um processo de corte que usa um arco elétrico e um jato rápido de gás?", options: ["Corte por plasma", "Soldadura com elétrodo revestido", "Soldadura TIG", "Brasagem"], answer: 0, why: "O corte por plasma usa um arco e um jato rápido de gás para cortar muitos metais." },
          { objective: "O2", q: "Duas chapas ficam uma por cima da outra e são soldadas. Que junta é esta?", options: ["Junta de topo", "Junta de canto", "Junta em T", "Junta sobreposta"], answer: 3, why: "Uma junta sobreposta é feita de duas peças, uma por cima da outra." },
          { objective: "O2", q: "Num teste de soldadura, o que quer dizer 3G?", options: ["Uma soldadura de ângulo na posição plana", "Uma soldadura de ângulo sobrecabeça", "Uma soldadura em chanfro na vertical", "Uma soldadura em chanfro na horizontal"], answer: 2, why: "A posição 3 é vertical, e G quer dizer soldadura em chanfro." },
          { objective: "O3", q: "Uma soldadura não se fundiu com o metal de base. Como se chama este defeito?", options: ["Falta de fusão", "Porosidade", "Salpicos", "Mordedura"], answer: 0, why: "Falta de fusão quer dizer que a soldadura não se uniu ao metal de base." }
        ]
      }
    },
    {
      name: "Capítulo 2: A segurança e o seu caminho",
      lessons: [
        {
          title: "Proteger os olhos, a pele, os pulmões e os ouvidos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Listar o equipamento de proteção e a ventilação de que uma tarefa de soldadura precisa.",
          text: [
            "Os perigos da soldadura incluem luz muito forte, metal e faíscas muito quentes, fumos e gases, barulho e choque elétrico. O Bureau of Labor Statistics (o serviço de estatísticas do trabalho dos EUA) diz que os soldadores usam máscaras de soldadura, proteção auditiva, luvas resistentes ao calor e roupa de proteção. Você só vai aprender a soldar numa oficina com supervisão e com este equipamento.",
            "Olhos e cara: o arco dá uma luz, incluindo raios ultravioleta, que pode queimar os olhos e a pele, mesmo que só olhe de relance. A regra de soldadura da OSHA (a agência de segurança no trabalho dos EUA) exige uma máscara ou um escudo de mão para a soldadura por arco, com um filtro escuro o suficiente para o processo; a sua tabela dá a tonalidade por processo e tamanho (por exemplo, tonalidade 12 para alguns tamanhos comuns de elétrodo revestido). Use óculos de segurança por baixo da máscara e proteja as pessoas à volta com biombos.",
            "Pele: use roupa resistente às chamas que cubra os braços e as pernas (nada de tecido sintético, que pode derreter), luvas de soldador de couro e botas de couro. Pulmões: os fumos e os gases da soldadura podem fazer mal à saúde. Mantenha a cabeça fora da pluma de fumos, use a ventilação ou a extração de fumos e use um respirador quando o programa do seu empregador o exigir. Revestimentos como a tinta e o zinco do aço galvanizado fazem fumos ainda mais perigosos. Ouvidos: rebarbar e alguns processos fazem muito barulho, por isso use proteção auditiva.",
            "A regra de soldadura da OSHA também diz que nunca se pode usar oxigénio para ventilar, porque faz o fogo arder muito mais depressa."
          ],
          steps: [
            "Olhos: máscara com a tonalidade certa, óculos de segurança por baixo, biombos para os outros.",
            "Pele: roupa resistente às chamas, luvas e botas de couro, nada sintético.",
            "Pulmões: ventilação ou extração de fumos, cabeça fora da pluma, respirador se for exigido.",
            "Ouvidos: proteção auditiva para rebarbar e trabalho com muito barulho."
          ],
          words: [
            ["EPI", "equipamento de proteção individual: máscara, óculos, luvas, roupa, botas, proteção auditiva, respirador; em inglês \"PPE\"."],
            ["Tonalidade do filtro", "o quão escuro é o vidro de soldadura; números mais altos são mais escuros."],
            ["Raios ultravioleta (UV)", "luz invisível do arco que queima os olhos e a pele."],
            ["Fumos", "partículas muito pequenas de metal e gases da soldadura que podem fazer mal aos pulmões e à saúde."],
            ["Pluma de fumos", "a nuvem de fumo que sobe da soldadura."],
            ["Aço galvanizado", "aço com uma camada de zinco; soldá-lo faz fumos perigosos."],
            ["Resistente às chamas", "tecido feito para não pegar fogo facilmente; em inglês \"flame-resistant (FR)\"."]
          ],
          slides: [
            { title: "Perigos da soldadura", bullets: ["Luz forte e raios UV", "Metal quente e faíscas", "Fumos e gases; barulho; choque"] },
            { title: "Olhos e cara", bullets: ["Máscara com a tonalidade de filtro certa (tabela da OSHA)", "Óculos de segurança por baixo da máscara", "Biombos protegem as pessoas à volta"] },
            { title: "Pele e pulmões", bullets: ["Roupa resistente às chamas, luvas e botas de couro", "Cabeça fora da pluma; ventilação ligada", "Respirador quando exigido; cuidado com os revestimentos"] },
            { title: "Ouvidos e ar", bullets: ["Proteção auditiva para rebarbar", "Nunca use oxigénio para ventilar"] }
          ],
          sources: [
            { name: "OSHA: Soldadura, corte e brasagem, requisitos gerais, 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "OSHA: Normas de soldadura, corte e brasagem", url: "https://www.osha.gov/welding-cutting-brazing/standards" },
            { name: "US Bureau of Labor Statistics: Soldadores, cortadores e brasadores", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm" }
          ],
          tryIt: "Comece a sua lista de verificação de segurança antes de soldar para este trabalho: \"Soldar com MIG suportes de aço numa oficina.\" Escreva quatro títulos: Olhos, Pele, Pulmões, Ouvidos. Debaixo de cada um, escreva o equipamento ou o passo da lição. Depois junte uma linha sobre o que verificar se o aço estiver pintado ou galvanizado. Guarde-a: vai ser a parte 3 da sua tarefa final.",
          youCanNow: "listar o equipamento e a ventilação que protegem os olhos, a pele, os pulmões e os ouvidos de um soldador.",
          quickCheck: [
            { objective: "O4", q: "Que roupa é a escolha segura para soldar?", options: ["Um fato de treino de poliéster", "Calções e uma t-shirt", "Um casaco de nylon", "Roupa resistente às chamas que cubra os braços e as pernas"], answer: 3, why: "Os tecidos sintéticos podem derreter na pele; a roupa resistente às chamas que cobre o corpo protege das faíscas e dos raios UV." },
            { objective: "O4", q: "Você vê fumo a subir da soldadura. O que faz com a cabeça?", options: ["Aproxima-a para ver melhor", "Mantém-na fora da pluma de fumos e usa a ventilação", "Prende a respiração", "Tira a máscara"], answer: 1, why: "Ficar fora da pluma e usar a ventilação reduz os fumos que respira." }
          ]
        },
        {
          title: "Fogo, choque elétrico e trabalho a quente",
          objectives: ["O4"],
          minutes: 6,
          goal: "Listar os cuidados contra incêndios e choques a ter antes, durante e depois de soldar.",
          text: [
            "As faíscas e a escória quente podem voar para longe e começar incêndios em sítios que você não vê. A regra de soldadura da OSHA (29 CFR 1910.252) diz que, sempre que possível, as coisas que podem arder devem ser afastadas pelo menos 35 pés (cerca de 11 metros) do trabalho, ou cobertas ou protegidas se não puderem ser mudadas. Só se solda em zonas que são seguras contra incêndios, ou que foram tornadas seguras, depois de a pessoa responsável verificar a zona; o melhor é essa aprovação ser dada por escrito, numa autorização muitas vezes chamada autorização de trabalho a quente.",
            "Quando pode começar um incêndio, por exemplo com coisas que ardem a menos de 35 pés, é obrigatório haver um vigia de incêndio: uma pessoa que vigia o fogo com um extintor pronto. A OSHA diz que o vigia de incêndio tem de ficar pelo menos meia hora depois de acabar a soldadura ou o corte, porque as coisas podem ficar a arder devagar e pegar fogo mais tarde.",
            "Choque elétrico: o arco usa corrente elétrica. Mantenha as luvas e a roupa secas, não fique em pé dentro de água nem em chão molhado, verifique se os cabos têm danos antes de os usar e nunca toque no elétrodo e no metal ao mesmo tempo. Segundo o BLS, os soldadores têm de ter formação da OSHA em segurança elétrica.",
            "As garrafas de gás para MIG, TIG e corte devem ser manuseadas como a sua formação ensina, mantidas em pé e presas para não caírem. Os espaços confinados, como os tanques, precisam de formação especial, autorizações e ventilação; nunca entre num sem isso."
          ],
          steps: [
            "Antes: obtenha a autorização, afaste as coisas que ardem 35 pés ou cubra-as, tenha um extintor pronto.",
            "Organize um vigia de incêndio quando pode começar um incêndio.",
            "Durante: mantenha-se seco, verifique os cabos, mantenha a zona livre.",
            "Depois: o vigia de incêndio fica pelo menos 30 minutos."
          ],
          words: [
            ["Trabalho a quente", "soldar, cortar, rebarbar e outros trabalhos que fazem faíscas ou chama."],
            ["Autorização de trabalho a quente", "uma aprovação escrita de que a zona foi verificada e tornada segura contra incêndios antes do trabalho a quente."],
            ["Vigia de incêndio", "uma pessoa com formação que vigia o fogo durante e depois do trabalho a quente, com um extintor pronto."],
            ["Escória", "a crosta dura que fica em algumas soldaduras e que está muito quente quando salta."],
            ["Espaço confinado", "um espaço como um tanque ou um poço, onde é difícil entrar e sair; precisa de formação especial e de autorizações."]
          ],
          slides: [
            { title: "Antes de soldar", bullets: ["Autorização de trabalho a quente: zona verificada e segura", "Afaste as coisas que ardem 35 pés, ou cubra-as", "Extintor pronto"] },
            { title: "Vigia de incêndio", bullets: ["Obrigatório quando pode começar um incêndio", "Fica pelo menos 30 minutos depois do trabalho"] },
            { title: "Choque elétrico", bullets: ["Luvas e roupa sempre secas", "Nunca fique em pé dentro de água", "Verifique os cabos antes de usar"] },
            { title: "Garrafas e espaços confinados", bullets: ["Garrafas em pé e presas", "Espaços confinados: primeiro a formação e as autorizações"] }
          ],
          sources: [
            { name: "OSHA: Soldadura, corte e brasagem, requisitos gerais (prevenção de incêndios), 29 CFR 1910.252", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.252" },
            { name: "US Bureau of Labor Statistics: Soldadores, como chegar a ser um", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" }
          ],
          tryIt: "Termine a sua lista de verificação de segurança antes de soldar. Junte três títulos novos à lista da Lição 4: Fogo antes, Fogo depois e Choque. Debaixo deles escreva: a autorização, a regra dos 35 pés, o extintor, o vigia de incêndio e quanto tempo fica, e três passos contra o choque. Leia a lista toda em voz alta, como se estivesse a explicar a um novo ajudante. É a parte 3 da sua tarefa final.",
          youCanNow: "listar os cuidados contra incêndios e choques a ter antes, durante e depois de soldar.",
          quickCheck: [
            { objective: "O4", q: "Segundo a OSHA, quanto tempo tem de ficar o vigia de incêndio depois de acabar a soldadura?", options: ["5 minutos", "Nenhum; pode ir embora", "Pelo menos meia hora", "Até à hora do almoço"], answer: 2, why: "A OSHA exige o vigia de incêndio durante pelo menos meia hora depois do trabalho, porque os incêndios podem começar mais tarde." },
            { objective: "O4", q: "Há caixas de cartão a 15 pés de onde vai soldar. O que faz?", options: ["Afasta-as pelo menos 35 pés, ou cobre-as ou protege-as", "Solda mais depressa", "Borrifa-as com oxigénio", "Nada; 15 pés chegam"], answer: 0, why: "A OSHA diz que as coisas que podem arder devem ser afastadas pelo menos 35 pés, sempre que possível, ou cobertas ou protegidas." }
          ]
        },
        {
          title: "Formação, certificação e o seu plano",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever um plano com datas para ter formação e fazer um teste de certificação de soldador.",
          text: [
            "O Bureau of Labor Statistics diz que os empregadores normalmente querem o diploma do ensino secundário ou equivalente, mais formação técnica e formação no próprio trabalho. A formação vem de aulas técnicas no ensino secundário, escolas profissionais, colégios comunitários, escolas privadas de soldadura e das forças armadas. Alguns empregadores têm programas de aprendizagem, e mesmo os soldadores com formação costumam ter vários meses de formação no próprio trabalho. Ajuda saber ler desenhos técnicos, fazer contas de oficina e conhecer o básico de eletricidade.",
            "Muitos empregadores querem soldadores certificados. A AWS descreve a sua certificação AWS Certified Welder como a forma de entrada mais comum. É um teste prático: você solda num processo, numa posição e num material definidos, e a sua soldadura é inspecionada segundo uma norma. Faz-se num AWS Accredited Test Facility (ATF, centro de testes acreditado pela AWS), e a AWS diz que não se pode obter uma certificação de soldadura totalmente pela internet. Algumas certificações têm de ser mantidas ou repetidas, por isso verifique as regras da sua no site da AWS. Alguns empregadores pagam a formação e o teste.",
            "Alguns estados e cidades dão licenças a soldadores, e as regras são diferentes, por isso verifique a página oficial do lugar onde trabalha. Antes de pagar uma escola, pergunte: Prepara para um teste da AWS, e posso fazer o teste lá? Quantos formados arranjam emprego na soldadura? Os antigos militares podem perguntar à VA (o serviço dos EUA para antigos militares) sobre o GI Bill. Se tem registo criminal, muitos empregadores de soldadura contratam pessoas com registo; pergunte ao programa que ligações tem a empregos."
          ],
          steps: [
            "Escreva o seu objetivo, por exemplo \"emprego de soldador MIG numa oficina de serralharia até ao verão\".",
            "Escolha o processo e a posição em que quer certificar-se primeiro, com base nos anúncios de emprego perto de você.",
            "Encontre dois programas de formação (colégio comunitário, escola de soldadura ou aprendizagem) e as datas de início.",
            "Encontre um AWS Accredited Test Facility perto de você no site da AWS.",
            "Verifique as regras do seu estado ou cidade e ponha uma data em cada passo."
          ],
          words: [
            ["AWS", "a American Welding Society (Sociedade Americana de Soldadura), que gere o programa Certified Welder e outras certificações de soldadura."],
            ["Certified Welder", "uma certificação da AWS que se obtém ao passar num teste prático de soldadura num processo, numa posição e num material definidos."],
            ["Accredited Test Facility (ATF)", "um lugar aprovado pela AWS para fazer testes de certificação de soldador."],
            ["Teste prático", "um teste em que você faz a tarefa; aqui, soldar uma peça de teste que depois é inspecionada."],
            ["Oficina de serralharia", "uma oficina que corta, dá forma e solda metal para fazer peças e estruturas; em inglês \"fabrication shop\"."]
          ],
          slides: [
            { title: "Formas de ter formação", bullets: ["Colégio comunitário ou escola de soldadura", "Aulas técnicas no secundário; as forças armadas", "Aprendizagem e formação no próprio trabalho"] },
            { title: "AWS Certified Welder", bullets: ["Teste prático: processo, posição, material", "Num AWS Accredited Test Facility", "Não se obtém totalmente pela internet"] },
            { title: "Antes de pagar", bullets: ["Prepara para um teste da AWS?", "Quantos formados arranjam emprego na soldadura?", "Verifique as regras do estado ou da cidade"] },
            { title: "O seu plano", bullets: ["Objetivo, processo e posição", "Dois programas e um centro de testes", "Uma data para cada passo"] }
          ],
          sources: [
            { name: "American Welding Society: Certificação", url: "https://www.aws.org/certification/" },
            { name: "US Bureau of Labor Statistics: Soldadores, como chegar a ser um", url: "https://www.bls.gov/ooh/production/welders-cutters-solderers-and-brazers.htm#tab-4" },
            { name: "Apprenticeship.gov: Procurador de aprendizagens", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Procurador de licenças", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Tarefa final: faça o seu plano de início na soldadura. Junte o seu quadro de processos (Lição 1), a sua folha de leitura com juntas, posições e defeitos (Lições 2 e 3) e a sua lista de verificação de segurança (Lições 4 e 5). Depois escreva o seu plano com datas: o seu objetivo, o processo e a posição em que quer certificar-se, dois programas de formação perto de você com as datas de início, um AWS Accredited Test Facility, o que o seu estado ou cidade exige (com o endereço do site) e uma data para cada passo.",
          youCanNow: "seguir o seu próprio plano com datas para ter formação e fazer um teste de certificação de soldador.",
          quickCheck: [
            { objective: "O5", q: "Onde se faz o teste AWS Certified Welder?", options: ["Totalmente pela internet, em casa", "Em qualquer loja de ferragens", "Num AWS Accredited Test Facility", "Neste curso"], answer: 2, why: "A AWS diz que a certificação se obtém com um teste num centro de testes acreditado, não totalmente pela internet." },
            { objective: "O5", q: "Que tipo de teste é o AWS Certified Welder?", options: ["Um teste de escrever no teclado", "Um teste prático em que você solda uma peça que é inspecionada", "Uma redação", "Só uma entrevista"], answer: 1, why: "É um teste prático num processo, numa posição e num material definidos." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: A segurança e o seu caminho",
        questions: [
          { objective: "O4", q: "Porque nunca deve olhar de relance para um arco sem proteção para os olhos?", options: ["É falta de educação", "A sua luz, incluindo os raios UV, pode queimar os olhos", "Torna a soldadura mais fraca", "Gasta mais gás"], answer: 1, why: "A luz do arco pode queimar os olhos mesmo com um olhar rápido." },
          { objective: "O4", q: "O aço que vai soldar é galvanizado (tem zinco). Porque é que isso importa?", options: ["Faz fumos ainda mais perigosos, por isso a ventilação e a proteção certa importam mais", "Não se pode soldar de forma nenhuma", "Torna a soldadura mais forte", "Não importa"], answer: 0, why: "Revestimentos como o zinco fazem fumos perigosos quando aquecem." },
          { objective: "O4", q: "Qual é uma forma segura de evitar o choque elétrico ao soldar?", options: ["Soldar em pé numa poça de água", "Usar luvas molhadas para ficar fresco", "Usar um cabo com o isolamento rachado", "Manter as luvas e a roupa secas e verificar os cabos primeiro"], answer: 3, why: "Equipamento seco e cabos sem danos impedem que a corrente passe pelo seu corpo." },
          { objective: "O5", q: "Que pergunta ajuda mais antes de pagar uma escola de soldadura?", options: ["De que cor é o logótipo?", "O estacionamento é grátis?", "Prepara para um teste da AWS, e quantos formados arranjam emprego na soldadura?", "Qual é o tamanho da receção?"], answer: 2, why: "Saber se um programa leva à certificação e ao emprego diz se vale o dinheiro." },
          { objective: "O5", q: "Que passo do plano está completo?", options: ["\"Aprender a soldar\"", "\"Certificar-me um dia\"", "\"Ver escolas\"", "\"Fazer o teste AWS Certified Welder em MIG, posição plana, no ATF do colégio até 20 de maio\""], answer: 3, why: "Diz o teste, o processo e a posição, o lugar e uma data." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Soldadura",
    questions: [
      { objective: "O1", q: "O que faz a soldadura?", options: ["Cola o metal com fita-cola", "Derrete o metal para que as peças se unam numa só", "Pinta o metal", "Dobra o metal a frio"], answer: 1, why: "A soldadura derrete o metal para que as peças se misturem e endureçam como uma só." },
      { objective: "O1", q: "Que processo usa uma vareta com revestimento de fluxo e funciona bem ao ar livre?", options: ["Elétrodo revestido (SMAW)", "TIG (GTAW)", "MIG (GMAW)", "Corte por plasma"], answer: 0, why: "O elétrodo revestido usa uma vareta com revestimento e não precisa de gás de proteção que o vento possa levar." },
      { objective: "O1", q: "Que processo usa um elétrodo de tungsténio e uma vareta de adição separada?", options: ["Fio fluxado", "Elétrodo revestido", "Oxicorte", "TIG (GTAW)"], answer: 3, why: "O TIG usa um elétrodo de tungsténio, e o soldador junta o metal de adição à mão." },
      { objective: "O1", q: "Porque é que uma soldadura precisa de proteção?", options: ["Para ficar brilhante", "Para arrefecer mais depressa", "Para manter o ar longe e a soldadura ficar forte", "Para fazer mais barulho"], answer: 2, why: "O gás ou o fluxo mantém o ar longe do metal quente." },
      { objective: "O2", q: "Duas peças estão com as pontas encostadas, em linha reta. Que junta é?", options: ["Junta sobreposta", "Junta de topo", "Junta de canto", "Junta em T"], answer: 1, why: "Uma junta de topo são duas peças com as pontas encostadas." },
      { objective: "O2", q: "Que posição de soldadura é normalmente a mais difícil?", options: ["Plana", "Horizontal", "Sobrecabeça", "Não há uma mais difícil"], answer: 2, why: "Soldar sobrecabeça é trabalhar de baixo, contra a gravidade." },
      { objective: "O2", q: "Num símbolo de soldadura, o que quer dizer um pequeno triângulo?", options: ["Uma soldadura de ângulo", "Uma soldadura em chanfro", "Parar o trabalho", "A cauda"], answer: 0, why: "O triângulo é o símbolo da soldadura de ângulo." },
      { objective: "O2", q: "O símbolo de soldadura está por cima da linha de referência. Onde se faz a soldadura?", options: ["Do lado da seta", "Dos dois lados", "Em lado nenhum", "Do outro lado"], answer: 3, why: "Por cima da linha quer dizer o outro lado; por baixo quer dizer o lado da seta." },
      { objective: "O3", q: "O que descreve uma boa soldadura?", options: ["Muitos buracos na superfície", "Um sulco nos bordos", "Largura e forma iguais, juntando-se às duas peças", "Muitos salpicos à volta"], answer: 2, why: "Uma boa soldadura é igual, junta-se bem às peças e não tem buracos nem fissuras." },
      { objective: "O3", q: "Qual é uma causa provável da porosidade?", options: ["Metal sujo ou gás de proteção fraco", "Uma máscara escura", "Metal limpo e seco", "Usar luvas de couro"], answer: 0, why: "A sujidade e a proteção fraca deixam o gás ficar preso em forma de buracos." },
      { objective: "O3", q: "Que defeito é uma linha que atravessa a soldadura ou fica ao lado dela e é muito grave?", options: ["Salpicos", "Uma fissura", "Sobreposição", "Porosidade"], answer: 1, why: "As fissuras podem fazer uma soldadura falhar e são defeitos graves." },
      { objective: "O3", q: "Uma soldadura não se fundiu com o metal de base. Qual é uma causa provável?", options: ["Calor a mais", "Usar máscara", "Limpar o metal", "Calor a menos ou avançar depressa demais"], answer: 3, why: "A falta de fusão vem muitas vezes de calor a menos ou de uma velocidade de avanço rápida." },
      { objective: "O4", q: "O que exige a OSHA para proteger os olhos na soldadura por arco?", options: ["Óculos de sol", "Uma máscara ou um escudo de mão com o filtro certo", "Nada se for rápido", "Uma máscara contra o pó"], answer: 1, why: "A OSHA exige uma máscara ou um escudo de mão com filtro para a soldadura por arco." },
      { objective: "O4", q: "O que nunca se pode usar para ventilar uma zona de soldadura?", options: ["Uma ventoinha", "A extração de fumos", "Oxigénio", "Portas abertas"], answer: 2, why: "O oxigénio faz o fogo arder muito mais depressa; a OSHA diz para nunca o usar para ventilar." },
      { objective: "O4", q: "A que distância da soldadura a OSHA diz que se devem afastar as coisas que ardem, sempre que possível?", options: ["Pelo menos 35 pés", "5 pés", "10 pés", "Não é preciso afastá-las"], answer: 0, why: "A regra da OSHA diz pelo menos 35 pés, ou cobri-las ou protegê-las." },
      { objective: "O4", q: "O que é um vigia de incêndio?", options: ["Um relógio na oficina", "Um alarme de fumo", "Um tipo de máscara", "Uma pessoa que vigia o fogo durante e depois do trabalho a quente, com um extintor"], answer: 3, why: "Um vigia de incêndio vigia o fogo e fica pelo menos meia hora depois do trabalho." },
      { objective: "O5", q: "Este curso vai:", options: ["Dar-lhe uma certificação da AWS", "Dar-lhe uma licença de soldador", "Preparar você para a formação e o teste; não dá certificação", "Deixar você soldar em casa"], answer: 2, why: "A certificação vem de um teste prático num centro de testes acreditado." },
      { objective: "O5", q: "Pode obter uma certificação de soldadura da AWS totalmente pela internet?", options: ["Não; faz o teste em pessoa num AWS Accredited Test Facility", "Sim, com um vídeo", "Sim, lendo um livro", "Sim, fazendo este questionário"], answer: 0, why: "A AWS diz que a certificação de soldadura não se pode obter totalmente pela internet." },
      { objective: "O5", q: "Quem diz que licença, se alguma, um soldador precisa onde você trabalha?", options: ["Um vídeo de soldadura", "O estado ou a cidade, na sua página oficial", "Um anúncio de emprego", "Os seus amigos"], answer: 1, why: "Alguns estados e cidades dão licenças a soldadores; a página oficial tem as regras." },
      { objective: "O5", q: "O que ajuda a escolher o processo em que se certificar primeiro?", options: ["A sua cor preferida", "A máscara mais barata", "Adivinhar", "Os processos pedidos nos anúncios de emprego perto de você"], answer: 3, why: "Os anúncios de emprego mostram que processos os empregadores da zona querem." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para que o questionário mostre quanto cada aluno aprendeu
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 4, 7, 9, 11, 12, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Quadro de processos", objective: "O1", notYet: "Menos de quatro processos, ou os trabalhos não servem para o processo.", meets: "Quatro processos, cada um ligado a um trabalho real para que serve.", exceeds: "Também diz porque cada processo serve, com palavras como ao ar livre, metal fino ou rapidez." },
      { name: "Juntas, posições e símbolos", objective: "O2", notYet: "Faltam juntas ou posições, ou têm o nome errado.", meets: "As cinco juntas desenhadas e com nome, as quatro posições escritas com os números.", exceeds: "Também lê bem um símbolo de soldadura: lado, tipo e tamanho." },
      { name: "Lista de defeitos", objective: "O3", notYet: "Menos de cinco defeitos, ou as causas estão erradas.", meets: "Cinco defeitos, cada um com uma causa provável.", exceeds: "Também diz como a oficina verificaria cada defeito." },
      { name: "Lista de verificação de segurança", objective: "O4", notYet: "Faltam os olhos, a pele, os pulmões, os ouvidos, o fogo ou o choque.", meets: "Cobre os olhos, a pele, os pulmões, os ouvidos, o choque e pelo menos três cuidados contra incêndios, incluindo a regra dos 35 pés e o vigia de incêndio.", exceeds: "Também cobre o metal com revestimento, as garrafas de gás e a autorização de trabalho a quente, e é clara o suficiente para explicar a um novo ajudante." },
      { name: "Plano com datas a partir de fontes oficiais", objective: "O5", notYet: "Os passos não têm datas, ou as regras vêm de anúncios ou publicações.", meets: "Dois programas reais, um AWS Accredited Test Facility, as regras do estado ou da cidade com o endereço do site oficial e uma data para cada passo.", exceeds: "Também diz as perguntas feitas a cada programa e um plano B, como um emprego de ajudante durante a formação." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de soldadura ou numa aprendizagem em 90 dias",
      "Alunos que passam num teste de certificação de soldador em 12 meses (dito por eles no seguimento)",
      "Alunos contratados como soldadores ou ajudantes de soldador em 6 meses",
      "Os programas parceiros dizem que os novos alunos chegam a conhecer as palavras básicas e os passos de segurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para as páginas da AWS, da OSHA, do BLS e do estado e para as fotos de soldaduras",
      "Papel, caneta, tesoura e tiras de papel ou cartão para os modelos de juntas",
      "Opcional: amostras de soldaduras (boas e más) de uma escola ou oficina local para ver, nunca para fazer",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Nada de soldar, cortar ou rebarbar neste curso. O trabalho prático é numa oficina com supervisão e com todo o EPI.",
      "Se puder, traga amostras de soldaduras ou uma máscara e luvas usadas para os alunos verem e pegarem (só peças frias e limpas).",
      "Convide um instrutor de soldadura, um AWS Accredited Test Facility ou uma oficina de serralharia local para falar do que procuram.",
      "Ajude cada aluno a verificar as regras do seu próprio estado ou cidade; não dê uma única resposta para o grupo todo.",
      "Ligue os alunos com registo criminal ou os antigos militares aos serviços de reintegração ou para antigos militares; não prometa nenhum resultado.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
