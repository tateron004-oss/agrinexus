"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-tailoring-fashion-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const KE_BRS = { name: "Business Registration Service (Quénia): registo de nomes comerciais através do eCitizen", url: "https://brs.go.ke/" };
const NG_CAC = { name: "Corporate Affairs Commission (Nigéria): registo de nomes comerciais e de empresas", url: "https://www.cac.gov.ng/" };
const GH_ORC = { name: "Office of the Registrar of Companies (Gana): nomes comerciais (empresários em nome individual)", url: "https://orc.gov.gh/" };

module.exports = {
  id: "afr-tailoring-fashion-business-pt",
  lang: "pt",
  translationOf: "afr-tailoring-fashion-business",
  category: "Africa: Life and Work",
  name: "Gerir um Negócio de Alfaiataria e Moda",
  skills: "Manter uma oficina segura, Tirar medidas e usar fichas de encomenda, Calcular o custo e o preço de uma peça, Planear encomendas e prazos, Registar o dinheiro com segurança, Mostrar o seu trabalho aos clientes",
  outcome: "gerir a sua costura como um negócio: manter uma oficina segura, receber encomendas numa ficha clara, pôr a cada peça um preço que compense, planear a semana para entregar a tempo, registar o dinheiro e mostrar o seu trabalho a novos clientes.",
  about: [
    "Muitos alfaiates e costureiras cosem muito bem, mas mesmo assim têm dificuldades: um preço que não cobre o forro e a linha, um cliente que nunca volta para levantar a peça, três encomendas de casamento para o mesmo sábado, um sinal que ninguém anotou. Este curso é para alfaiates, costureiras, estilistas e aprendizes em cidades e aldeias do Quénia, Nigéria, Gana, Senegal, Costa do Marfim, Camarões, Marrocos e de toda a África.",
    "Você vai tornar a sua oficina mais segura, usar uma ficha de encomenda para cada trabalho, calcular quanto uma peça custa de verdade e quanto cobrar, planear a semana de acordo com as suas horas, manter um caderno de contas simples, proteger o dinheiro móvel contra burlas, saber como registar o nome do seu negócio e mostrar o seu trabalho no WhatsApp ou na sua loja.",
    "Este curso é sobre gerir o negócio, não sobre técnicas de costura. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" para a sua própria oficina. Todos os valores em dinheiro são exemplos, não preços reais."
  ],
  finalTask: "Prepare um kit inicial para o seu negócio de alfaiataria: uma lista de preços de pelo menos cinco peças que faz, cada uma com o custo calculado; uma ficha de encomenda em branco que vai usar em cada trabalho; um plano para uma semana cheia que caiba nas suas horas reais; uma página do caderno de contas com sinais e gastos; e uma publicação ou item de catálogo que mostre uma peça acabada, com o preço e como encomendar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Alfaiates, costureiras, estilistas, aprendizes e jovens que estão a terminar a aprendizagem, em cidades e aldeias de toda a África. Muitos trabalham sozinhos ou com um ou dois ajudantes, numa pequena loja, numa banca do mercado ou em casa.",
    startingPoint: "Sabem coser e acabar peças, e já recebem algumas encomendas de familiares, vizinhos e membros da igreja ou da mesquita. A maioria põe preços por hábito ou pelo que os outros cobram, anota medidas em pedaços de papel e guarda as contas de cabeça ou num só bolso.",
    gap: "Sem cálculo de custos, fichas de encomenda, um plano semanal e registos de dinheiro, os alfaiates perdem dinheiro com trabalho mal pago, falham prazos nas épocas de muito movimento, discutem com clientes sobre o que foi combinado e não conseguem mostrar a quem empresta dinheiro ou a um grande cliente como vai o negócio. Estas ferramentas simples transformam a habilidade de costura num rendimento estável.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua",
      "Aparelhos: um telefone simples ou um smartphone, muitas vezes com dados caros; um caderno, uma caneta e uma calculadora",
      "Dinheiro: orçamentos pequenos; não são precisos programas nem equipamentos caros",
      "Regras: as regras e as taxas de registo de empresas variam de país para país e mudam; os alunos confirmam no registo nacional",
      "Tempo: lições de 4 a 6 minutos, que cabem entre um cliente e outro"
    ],
    prerequisites: "Saber coser pelo menos um tipo de peça do início ao fim. Saber somar, multiplicar e dividir."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "No seu próprio espaço de costura, com a sua máquina e as suas ferramentas", action: "verificar uma oficina de costura à procura de riscos de agulhas, tesouras, ferros, eletricidade e fogo, e corrigi-los", standard: "encontrando e corrigindo pelo menos três riscos" },
    { id: "O2", condition: "Com um cliente que quer mandar fazer uma peça", action: "tirar as medidas do cliente e preencher uma ficha de encomenda com o modelo, o tecido, o preço, o sinal e a data de entrega", standard: "com todas as partes preenchidas e lidas em voz alta ao cliente" },
    { id: "O3", condition: "Com os materiais, o tempo e as despesas fixas de uma peça", action: "calcular o custo total da peça e definir um preço que o cubra com lucro", standard: "contando os materiais, o seu tempo e as despesas fixas, e comparando com o mercado local" },
    { id: "O4", condition: "Com as suas encomendas em aberto e as horas que pode trabalhar", action: "planear uma semana de encomendas com datas de entrega realistas", standard: "sem aceitar mais trabalho do que as suas horas permitem, com tempo guardado para provas e épocas de muito movimento" },
    { id: "O5", condition: "Com uma semana de sinais, pagamentos e gastos", action: "registar as entradas e saídas de dinheiro num caderno de contas e reconhecer burlas com dinheiro móvel", standard: "com o saldo certo e sem nunca partilhar um PIN" },
    { id: "O6", condition: "Com uma peça acabada e um telefone", action: "fazer uma publicação ou item de catálogo que mostre a peça, o preço e como encomendar", standard: "com uma foto nítida e sem mostrar dados privados de nenhum cliente sem autorização" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Encomendas que compensam",
      lessons: [
        {
          title: "Uma oficina segura e arrumada",
          objectives: ["O1"],
          minutes: 5,
          goal: "Verificar a sua oficina à procura de riscos e corrigir pelo menos três.",
          text: [
            "As suas mãos, os seus olhos e as suas costas são o seu negócio. Um ferimento pode parar o seu trabalho durante semanas, e um incêndio pode queimar o tecido de todos os clientes. Alguns hábitos protegem você e os seus aprendizes.",
            "Ferramentas cortantes: mantenha os dedos longe da agulha e use o calcador; nunca cosa por cima de alfinetes; guarde tesouras, lâminas e descosedores num só lugar, com as pontas para baixo; guarde agulhas e alfinetes numa almofada ou numa lata, nunca na boca. Deite as agulhas partidas numa lata fechada, não no chão onde passam crianças e clientes.",
            "Calor e eletricidade: nunca deixe sozinho um ferro quente ou um ferro a carvão, e ponha-o onde não possa cair; mantenha panos e papéis longe dele. Verifique se os cabos das máquinas e do ferro têm cortes ou fichas soltas. Não sobrecarregue uma tomada com muitas fichas. Desligue máquinas e ferros da tomada quando fechar. Tenha um balde de areia ou de água, ou um extintor se puder, perto da porta.",
            "O seu corpo: sente-se com as costas apoiadas e a mesa à altura dos cotovelos, use boa luz, e levante-se e estique o corpo a cada hora. Mantenha as passagens livres de rolos de tecido e de cabos para ninguém tropeçar."
          ],
          steps: ["Dê uma volta devagar pela sua oficina.", "Procure ferramentas cortantes, ferros quentes, cabos estragados, tomadas sobrecarregadas, coisas onde se pode tropeçar e pouca luz.", "Anote cada risco que encontrar.", "Corrija três hoje, por exemplo uma lata para alfinetes, um suporte seguro para o ferro e passagens livres.", "Ensine as mesmas regras aos seus aprendizes."],
          words: [["Calcador", "a peça da máquina de costura que segura o tecido plano debaixo da agulha."], ["Tomada sobrecarregada", "demasiadas fichas ligadas numa só tomada; pode aquecer e provocar um incêndio."], ["Aprendiz", "um jovem que aprende o ofício a trabalhar com você."]],
          slides: [
            { title: "O seu corpo é o seu negócio", bullets: ["Um ferimento pode parar o trabalho durante semanas", "Um incêndio pode queimar o tecido de todos os clientes", "Hábitos simples mantêm você seguro"] },
            { title: "Ferramentas cortantes", bullets: ["Dedos longe da agulha; nunca cosa por cima de alfinetes", "Tesouras e lâminas num só lugar, pontas para baixo", "Alfinetes numa almofada ou lata, nunca na boca"] },
            { title: "Calor e eletricidade", bullets: ["Nunca deixe sozinho um ferro quente ou a carvão", "Verifique os cabos; nada de tomadas sobrecarregadas", "Desligue ao fechar; areia, água ou extintor perto da porta"] },
            { title: "O seu corpo e o seu espaço", bullets: ["Costas apoiadas, boa luz", "Levante-se e estique o corpo a cada hora", "Passagens livres: sem rolos de tecido nem cabos no chão"] }
          ],
          tryIt: "Dê agora uma volta pela sua oficina. Anote todos os riscos que vir. Corrija três deles hoje e risque-os da sua lista.",
          youCanNow: "verificar a sua oficina à procura de riscos de ferramentas cortantes, calor, eletricidade e tropeções, e corrigi-los.",
          quickCheck: [
            { objective: "O1", q: "Onde deve guardar os alfinetes enquanto trabalha?", options: ["Numa almofada de alfinetes ou numa lata", "Na boca, para os ter sempre à mão", "No chão ao lado da cadeira", "Dentro do rolo de tecido"], answer: 0, why: "Uma almofada ou uma lata mantém os alfinetes longe da boca, do chão e do tecido do cliente." },
            { objective: "O1", q: "Há cinco fichas numa só tomada e ela está morna. O que faz?", options: ["Continua; é normal", "Desliga algumas e reparte-as ou usa uma extensão segura", "Deita água por cima para arrefecer", "Tapa-a com um pano"], answer: 1, why: "Uma tomada morna e sobrecarregada pode provocar um incêndio; reduza a carga e nunca use água perto da eletricidade." }
          ]
        },
        {
          title: "As medidas e a ficha de encomenda",
          objectives: ["O2"],
          minutes: 5,
          goal: "Tirar as medidas de um cliente e preencher uma ficha de encomenda completa.",
          text: [
            "Muitas discussões com clientes começam porque nada foi escrito. \"Eu disse mangas compridas.\" \"Você disse sexta-feira.\" \"Paguei-lhe metade.\" Uma ficha de encomenda acaba com isto. É uma página ou um cartão para cada trabalho, com uma cópia ou uma foto para o cliente.",
            "Uma ficha de encomenda mostra: o nome e o número de telefone do cliente; a data; o modelo (um desenho ou uma foto do modelo que quer); as medidas; o tecido (quem o traz, quantas jardas ou metros, um pequeno retalho agrafado); o preço, o sinal pago e o que falta pagar; a data da prova e a data de entrega; e a sua assinatura e a do cliente.",
            "Tire as medidas sempre da mesma maneira, pela mesma ordem, com uma boa fita métrica. Escreva a unidade (cm ou polegadas). Leia as medidas e os detalhes em voz alta ao cliente antes de ele sair. Para uma encomenda de aso ebi em Lagos, um kaba e saia em Kumasi ou um bubu em Dacar para o Tabaski, a ficha é a mesma: você e o cliente sabem exatamente o que foi combinado."
          ],
          steps: ["Escreva o nome do cliente, o número de telefone e a data.", "Desenhe o modelo ou junte uma foto.", "Meça pela sua ordem habitual e escreva a unidade.", "Escreva os detalhes do tecido e agrafe um pequeno retalho.", "Escreva o preço, o sinal, o que falta pagar, a data da prova e a data de entrega.", "Leia tudo em voz alta, assinem os dois e dê ao cliente uma cópia ou deixe-o tirar uma foto."],
          words: [["Ficha de encomenda", "um registo escrito de um trabalho: o quê, para quem, quanto e quando."], ["Sinal", "dinheiro pago antes de começar o trabalho."], ["Valor em falta", "o dinheiro que ainda falta pagar depois do sinal."]],
          slides: [
            { title: "Porquê escrever", bullets: ["\"Eu disse mangas compridas.\" \"Você disse sexta-feira.\"", "Uma ficha acaba com a discussão", "Uma ficha por trabalho; uma cópia para o cliente"] },
            { title: "O que a ficha mostra", bullets: ["Nome, telefone, data; desenho ou foto do modelo", "Medidas com a unidade", "Detalhes do tecido e um pequeno retalho"] },
            { title: "Dinheiro e datas", bullets: ["Preço, sinal pago, valor em falta", "Data da prova e data de entrega", "Os dois assinam"] },
            { title: "Antes de o cliente sair", bullets: ["Leia cada detalhe em voz alta", "Corrija já qualquer erro", "O cliente fica com uma cópia ou uma foto"] }
          ],
          tryIt: "Desenhe a sua própria ficha de encomenda numa página, com todas as partes desta lição. Preencha-a para um amigo ou familiar como se ele tivesse encomendado uma peça e depois leia-a em voz alta para ele.",
          youCanNow: "tirar medidas sempre da mesma maneira e preencher uma ficha de encomenda com que você e o cliente concordam.",
          quickCheck: [
            { objective: "O2", q: "Uma cliente diz: \"Você nunca me disse sexta-feira.\" O que teria evitado isto?", options: ["Um letreiro maior na loja", "Coser mais depressa", "Uma ficha de encomenda com a data de entrega, assinada pelos dois", "Cobrar menos"], answer: 2, why: "Uma ficha assinada com a data de entrega mostra o que foi combinado." },
            { objective: "O2", q: "Acabou de tirar as medidas. O que faz antes de o cliente sair?", options: ["Deita fora o pedaço de papel", "Pede só o preço completo", "Começa logo a cortar", "Lê cada detalhe em voz alta e dá-lhe uma cópia ou uma foto da ficha"], answer: 3, why: "Ler em voz alta apanha os erros, e uma cópia faz com que os dois tenham o mesmo registo." }
          ]
        },
        {
          title: "Calcular o custo e o preço de uma peça",
          objectives: ["O3"],
          minutes: 6,
          goal: "Calcular o custo total de uma peça e definir um preço que dê lucro.",
          text: [
            "Muitos alfaiates copiam o preço da loja ao lado. Mas se os seus custos forem mais altos, pode estar a trabalhar de graça. Calcule primeiro o seu custo e depois decida o preço.",
            "Materiais: tudo o que entra na peça se for você a comprar, como forro, entretela, linha, fecho, botões, linha de bordar e embalagem. Se o cliente trouxer o tecido, não conte o tecido, mas conte todo o resto.",
            "O seu tempo: quantas horas a peça leva (cortar, coser, provar, acabar) vezes o que quer ganhar por hora. Despesas fixas: renda, eletricidade ou combustível para o gerador, reparações da máquina, agulhas, dados do telefone, uma parte para cada peça. Uma forma simples: some as despesas fixas de um mês e divida pelo número de peças que faz num mês.",
            "Exemplo (os valores são só exemplos): um vestido de senhora no Quénia. Materiais KES 450, tempo 4 horas a KES 200 = KES 800, despesas fixas KES 250. Custo = KES 1,500. Junte um lucro, por exemplo 30%, que é KES 450. Preço = KES 1,950. Depois compare com o mercado. Se o preço do mercado for muito mais baixo, procure um método mais barato ou um modelo mais simples. Não baixe simplesmente o preço abaixo do custo."
          ],
          steps: ["Liste e some os materiais de uma peça.", "Multiplique as horas pelo que quer ganhar por hora.", "Junte uma parte das despesas fixas de um mês.", "Some as três: esse é o seu custo.", "Junte um lucro para ter o seu preço.", "Compare com o mercado e ajuste o modelo ou o método, não só o lucro."],
          words: [["Custo", "todo o dinheiro e tempo que leva fazer uma peça."], ["Despesas fixas", "o dinheiro que gasta para manter a oficina aberta, como a renda e a eletricidade."], ["Lucro", "o que fica para você e para o negócio depois de pagar todos os custos."], ["Margem", "o lucro que junta por cima do custo."]],
          slides: [
            { title: "Primeiro o custo, depois o preço", bullets: ["Copiar a loja ao lado pode ser trabalhar de graça", "Conheça o seu próprio custo"] },
            { title: "Três partes do custo", bullets: ["Materiais: forro, linha, fecho, botões, embalagem", "O seu tempo: horas x o que quer por hora", "Despesas fixas: renda, energia, reparações, dados"] },
            { title: "Exemplo (KES, só exemplo)", bullets: ["Materiais 450 + tempo 800 + despesas 250 = 1,500", "Junte 30% de lucro: 450", "Preço: KES 1,950"] },
            { title: "Se o mercado for mais baixo", bullets: ["Modelo mais simples ou método mais barato", "Procure clientes que valorizam a sua qualidade", "Nunca ponha o preço abaixo do custo"] }
          ],
          tryIt: "Escolha a peça que faz mais vezes. Calcule os materiais, o seu tempo e a parte das despesas fixas. Junte um lucro e escreva o preço. Compare-o com o que cobra agora.",
          youCanNow: "calcular quanto uma peça lhe custa de verdade e definir um preço que pague a você e ao negócio.",
          quickCheck: [
            { objective: "O3", q: "A cliente traz o seu próprio tecido. O que continua a contar nos materiais?", options: ["Nada", "O forro, a linha, o fecho e os botões que você compra", "Só o tecido", "O transporte da cliente"], answer: 1, why: "Se é você quem compra o forro, a linha, o fecho e os botões, são custos seus mesmo que o tecido não seja." },
            { objective: "O3", q: "Materiais GHS 60, tempo GHS 90, despesas fixas GHS 30. Qual é o custo antes do lucro? (Valores de exemplo.)", options: ["GHS 150", "GHS 120", "GHS 180", "GHS 90"], answer: 2, why: "60 + 90 + 30 = 180; o lucro junta-se por cima disto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Encomendas que compensam",
        questions: [
          { objective: "O1", q: "O seu aprendiz deixa o ferro a carvão em pé em cima de uma pilha de panos enquanto atende o telefone. O que ensina?", options: ["Os ferros podem ficar em cima dos panos", "Virar o ferro para baixo em cima da mesa", "Nunca deixar sozinho um ferro quente e pô-lo onde não possa cair, longe dos panos", "Atender o telefone mais depressa"], answer: 2, why: "Um ferro quente deixado em cima ou perto de panos pode provocar um incêndio em segundos." },
          { objective: "O2", q: "Qual destes deve estar numa ficha de encomenda?", options: ["O PIN do cliente", "Data de entrega, preço, sinal e valor em falta", "Os preços do seu vizinho", "O número de identificação do cliente"], answer: 1, why: "A ficha regista o trabalho, o dinheiro e as datas; números privados não pertencem a ela." },
          { objective: "O2", q: "Porque agrafar um pequeno retalho do tecido à ficha?", options: ["Para juntar o tecido certo à encomenda certa", "Para usar como almofada de alfinetes", "Porque a lei obriga", "Para cobrar mais"], answer: 0, why: "Um retalho evita confusões quando há tecidos de muitos clientes na loja." },
          { objective: "O3", q: "O seu vizinho cobra NGN 8,000 por um modelo que lhe custa NGN 9,000 a fazer. O que faz? (Valores de exemplo.)", options: ["Cobra NGN 7,500 para ganhar clientes", "Cobra NGN 8,000 e perde NGN 1,000 de cada vez", "Deixa de fazer esse modelo para sempre", "Procura um método mais barato ou um modelo mais simples, e põe o preço acima do seu custo"], answer: 3, why: "Um preço abaixo do custo perde dinheiro em cada peça; mude antes o método ou o modelo." },
          { objective: "O3", q: "Como pode calcular a parte da renda e da eletricidade de cada peça?", options: ["Adivinha um número", "Soma as despesas fixas de um mês e divide pelas peças que faz num mês", "Pede ao cliente para pagar a renda", "Deixa de fora; é pouco"], answer: 1, why: "Repartir as despesas fixas do mês pelas peças do mês dá uma parte justa a cada uma." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir o negócio",
      lessons: [
        {
          title: "Planear a semana e os prazos",
          objectives: ["O4"],
          minutes: 5,
          goal: "Planear uma semana de encomendas para que cada data de entrega caiba nas suas horas reais.",
          text: [
            "As épocas de mais movimento, como o Natal, o Eid, o Tabaski, a Páscoa, o início das aulas e a época dos casamentos, são quando os alfaiates perdem clientes por prometerem demais. Um plano semanal simples ajuda você a dizer sim só ao que consegue acabar.",
            "Primeiro, conte as suas horas reais de costura numa semana, sem contar o tempo para os clientes, para comprar materiais, os cortes de energia e o descanso. Depois, escreva quantas horas cada encomenda em aberto precisa (do seu cálculo de custos). Em seguida, ponha cada encomenda num dia, a data de entrega mais próxima primeiro, com a prova antes do acabamento. Deixe livre cerca de uma hora em cada cinco para imprevistos, como um corte de energia ou uma máquina avariada.",
            "Quando a semana está cheia, está cheia. Ofereça a próxima data livre, peça o sinal para reservar a vaga ou diga que não com educação. Numa época de muito movimento, marque um último dia para novas encomendas, por exemplo duas semanas antes do Tabaski em Dacar ou antes do Natal em Acra, e avise os clientes cedo no seu estado do WhatsApp e na loja."
          ],
          steps: ["Conte as suas horas reais de costura desta semana.", "Liste as encomendas em aberto com as horas de cada uma e a data de entrega.", "Ponha as encomendas nos dias, a data de entrega mais próxima primeiro, com as provas antes do acabamento.", "Deixe livre cerca de uma hora em cada cinco para imprevistos.", "Quando a semana estiver cheia, ofereça a próxima data livre ou diga que não com educação."],
          words: [["Data de entrega", "o dia em que prometeu que a peça estaria pronta."], ["Prova", "quando o cliente experimenta a peça para você a poder ajustar."], ["Último dia para encomendas", "o último dia em que aceita novas encomendas antes de uma festa com muito movimento."]],
          slides: [
            { title: "Épocas cheias quebram promessas", bullets: ["Natal, Eid, Tabaski, Páscoa, casamentos, início das aulas", "Prometa só o que as suas horas permitem"] },
            { title: "Planeie a semana", bullets: ["Conte as suas horas reais de costura", "Horas precisas para cada encomenda", "Data de entrega mais próxima primeiro; prova antes do acabamento"] },
            { title: "Guarde algum tempo livre", bullets: ["Cerca de uma hora em cada cinco para imprevistos", "Cortes de energia, máquinas avariadas, dias de doença"] },
            { title: "Quando a semana está cheia", bullets: ["Ofereça a próxima data livre", "Um sinal reserva a vaga", "Anuncie cedo o último dia para encomendas das festas"] }
          ],
          tryIt: "Escreva as suas horas reais de costura da próxima semana. Liste as encomendas em aberto com as horas de cada uma e a data de entrega. Ponha-as nos dias. Alguma vai atrasar? Decida já o que vai dizer a esse cliente.",
          youCanNow: "planear uma semana de encomendas que caiba nas suas horas e marcar um último dia para encomendas numa época de muito movimento.",
          quickCheck: [
            { objective: "O4", q: "Tem 30 horas reais de costura esta semana e encomendas que precisam de 40. O que faz?", options: ["Promete todas na mesma", "Cose todas as noites, a noite inteira", "Ignora as datas de entrega", "Muda já algumas datas de entrega com os clientes, ou não aceita novas encomendas"], answer: 3, why: "Avisar os clientes cedo e não aceitar mais do que as suas horas permitem mantém as suas promessas e o seu bom nome." },
            { objective: "O4", q: "Porque deixar livre cerca de uma hora em cada cinco no seu plano?", options: ["Para imprevistos como cortes de energia ou uma máquina avariada", "Para ir ao mercado", "Porque os clientes gostam de esperar", "Não é preciso"], answer: 0, why: "O tempo livre absorve os imprevistos para que não atrasem as encomendas." }
          ]
        },
        {
          title: "Registos de dinheiro, segurança no dinheiro móvel e registo do negócio",
          objectives: ["O5"],
          minutes: 6,
          goal: "Registar as entradas e saídas de dinheiro de uma semana e reconhecer burlas com dinheiro móvel.",
          text: [
            "Mantenha o dinheiro do negócio separado do dinheiro da família. Um caderno de contas simples tem quatro colunas: data, o que foi, entrada, saída. Escreva cada sinal, cada valor em falta pago e cada compra no mesmo dia. No fim da semana, some as entradas, tire as saídas e confira o resultado com o dinheiro e o dinheiro móvel que tem de verdade. Na Costa do Marfim ou no Senegal pode escrever em XOF; nos Camarões em XAF; o método é o mesmo.",
            "O dinheiro móvel é rápido, e os burlões sabem disso. Sinais de alerta: uma mensagem a dizer que lhe enviaram dinheiro \"por engano\" e a pedir que o devolva (veja primeiro o seu saldo real e peça ao seu operador para reverter, nunca o envie você mesmo); qualquer pessoa que peça o seu PIN ou um código enviado para o seu telefone; uma chamada de um \"agente do apoio ao cliente\" de um número normal; uma encomenda grande e urgente de um desconhecido que quer que pague primeiro uma \"taxa de entrega\". Um operador de dinheiro móvel verdadeiro nunca pede o seu PIN.",
            "Registar o nome do seu negócio pode ajudar a abrir uma conta bancária do negócio, concorrer a contratos com escolas e empresas e parecer sério aos clientes. No Quénia, trata disso o Business Registration Service, através do eCitizen; na Nigéria, a Corporate Affairs Commission; no Gana, o Office of the Registrar of Companies; no Senegal, pergunte à APIX. As regras, os passos e as taxas mudam, por isso confirme no site ou no balcão oficial, e cuidado com falsos agentes que oferecem \"registo grátis\"."
          ],
          steps: ["Abra um caderno ou uma nota no telefone com quatro colunas: data, o quê, entrada, saída.", "Escreva cada sinal, pagamento e compra no mesmo dia.", "No fim da semana: total das entradas menos total das saídas.", "Confira o resultado com o seu dinheiro real e o saldo do dinheiro móvel.", "Nunca partilhe o seu PIN; confirme qualquer \"envio por engano\" com o seu operador antes de fazer alguma coisa."],
          words: [["Caderno de contas", "um registo simples do dinheiro que entra e que sai."], ["PIN", "o seu número secreto do dinheiro móvel; só você o deve saber."], ["Reversão", "quando o operador devolve dinheiro que foi para a pessoa errada."], ["Registo do nome comercial", "pôr o nome do seu negócio na lista oficial do governo."]],
          slides: [
            { title: "Um caderno de contas simples", bullets: ["Data, o quê, entrada, saída", "Escreva no mesmo dia", "Dinheiro do negócio separado do dinheiro da família"] },
            { title: "Confira todas as semanas", bullets: ["Total das entradas menos total das saídas", "Compare com o dinheiro real e o dinheiro móvel", "Encontre a diferença enquanto ainda se lembra"] },
            { title: "Sinais de burla no dinheiro móvel", bullets: ["\"Enviei por engano, devolva por favor\"", "Alguém que pede o seu PIN ou um código", "\"Apoio ao cliente\" de um número normal; taxas antes de uma encomenda grande", "Um operador verdadeiro nunca pede o seu PIN"] },
            { title: "Registe o nome do seu negócio", bullets: ["Quénia: BRS pelo eCitizen; Nigéria: CAC", "Gana: Registrar of Companies; Senegal: pergunte à APIX", "As regras e as taxas mudam: confirme no site oficial"] }
          ],
          sources: [KE_BRS, NG_CAC, GH_ORC],
          tryIt: "Comece hoje o seu caderno de contas. Escreva todos os valores dos últimos três dias de que se lembra. Depois escreva o registo oficial do seu país e uma coisa que vai confirmar lá.",
          youCanNow: "manter um caderno de contas semanal, reconhecer burlas com dinheiro móvel e saber que serviço regista nomes comerciais no seu país.",
          quickCheck: [
            { objective: "O5", q: "Uma SMS diz que lhe enviaram KES 5,000 por engano e pede que os devolva. O que faz primeiro?", options: ["Devolve logo", "Partilha o seu PIN para eles resolverem", "Vê o seu saldo real e contacta o operador pela linha oficial", "Responde com o seu número de identificação"], answer: 2, why: "Muitas mensagens de \"envio por engano\" são falsas; é o operador que trata das reversões verdadeiras." },
            { objective: "O5", q: "No fim da semana o seu caderno de contas mostra mais dinheiro do que tem de verdade. O que faz?", options: ["Ignora", "Procura um pagamento ou uma compra que se esqueceu de anotar", "Arranca a página", "Pede emprestado para bater certo"], answer: 1, why: "Uma diferença quer dizer quase sempre que algo não foi anotado; encontre-o enquanto ainda se lembra." }
          ]
        },
        {
          title: "Mostrar o seu trabalho e encontrar clientes",
          objectives: ["O6"],
          minutes: 5,
          goal: "Fazer uma publicação ou item de catálogo que mostre uma peça acabada, o preço e como encomendar.",
          text: [
            "A sua melhor publicidade é o seu trabalho. Uma foto nítida de uma peça acabada, partilhada no estado do WhatsApp, num catálogo do WhatsApp Business, no Facebook, no Instagram ou no TikTok, ou impressa na parede da loja, traz novos clientes. Uma estilista em Casablanca pode mostrar um cafetã, e um alfaiate em Kumasi um vestido de kente, da mesma maneira.",
            "Uma boa foto: luz do dia, um fundo liso, a peça inteira e depois um grande plano de um detalhe ou do acabamento. Se for um cliente a vestir a peça, pergunte primeiro se pode partilhar a foto, e nunca partilhe o nome, o número de telefone ou as medidas dele. Alguns clientes dizem que não; respeite.",
            "Cada publicação diz o que é, um preço ou um preço \"a partir de\", quanto tempo leva e como encomendar (o seu número de telefone ou \"mande-me mensagem\"). Uma lista de preços na parede ou como imagem no telefone também ajuda: cinco a dez das suas peças principais com os preços, com base no seu cálculo de custos. Poupe dados partilhando uma boa foto em vez de muitas."
          ],
          steps: ["Escolha uma peça acabada.", "Tire uma foto à luz do dia num fundo liso, mais um grande plano.", "Peça autorização se houver um cliente na foto.", "Escreva o que é, o preço, quanto tempo leva e como encomendar.", "Publique, ou junte-a ao seu catálogo ou à sua lista de preços."],
          words: [["Catálogo", "uma lista dos seus produtos com fotos e preços, por exemplo no WhatsApp Business."], ["Lista de preços", "uma lista das suas peças principais e de quanto custa encomendar cada uma."], ["Autorização", "o cliente dizer que sim antes de você partilhar a foto dele."]],
          slides: [
            { title: "O seu trabalho é a sua publicidade", bullets: ["Estado ou catálogo do WhatsApp, Facebook, Instagram, TikTok", "Ou impressa na parede da loja"] },
            { title: "Uma boa foto", bullets: ["Luz do dia, fundo liso", "A peça inteira mais um grande plano", "Há um cliente na foto? Pergunte primeiro"] },
            { title: "O que cada publicação diz", bullets: ["O que é", "Preço ou preço \"a partir de\"; quanto tempo leva", "Como encomendar"] },
            { title: "Proteja os clientes", bullets: ["Sem nomes, números de telefone ou medidas nas publicações", "Se disserem que não, não partilhe"] }
          ],
          tryIt: "Tire uma foto de uma peça acabada à luz do dia. Escreva uma publicação com o que é, o preço do seu cálculo de custos, quanto tempo leva e como encomendar. Partilhe-a no seu estado ou guarde-a para o seu catálogo.",
          youCanNow: "mostrar o seu trabalho com uma foto nítida, um preço e como encomendar, protegendo a privacidade dos seus clientes.",
          quickCheck: [
            { objective: "O6", q: "O que deve ter uma publicação sobre a sua peça?", options: ["As medidas do cliente", "Só uma foto, mais nada", "O preço que pagou pela linha", "O que é, um preço, quanto tempo leva e como encomendar"], answer: 3, why: "Os clientes precisam de saber o que é, quanto custa, quando a podem ter e como encomendar." },
            { objective: "O6", q: "Quer partilhar a foto de uma cliente com o seu vestido. O que faz?", options: ["Pergunta-lhe primeiro, e não partilha nome nem número de telefone", "Publica com o nome dela para as pessoas lhe perguntarem", "Publica; ela é sua cliente", "Publica também as medidas dela"], answer: 0, why: "A foto e os dados de uma cliente são dela; pergunte primeiro e deixe os dados privados de fora." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir o negócio",
        questions: [
          { objective: "O4", q: "Faltam três semanas para o Tabaski e a sua semana já está cheia. Um novo cliente quer um bubu. O que faz?", options: ["Promete-o para o Tabaski na mesma", "Oferece com honestidade a próxima data livre, ou diz que não com educação", "Aceita e entrega-o a um ajudante sem formação", "Recebe um sinal e não diz nada sobre a data"], answer: 1, why: "Datas honestas mantêm o seu bom nome; prometer demais numa época cheia faz perder clientes." },
          { objective: "O4", q: "No seu plano semanal, que encomenda vem primeiro?", options: ["A que tem a data de entrega mais próxima", "A mais fácil", "A do seu amigo", "A que paga mais"], answer: 0, why: "A data de entrega mais próxima primeiro faz cumprir cada promessa a tempo." },
          { objective: "O5", q: "Alguém que liga como \"apoio ao cliente do dinheiro móvel\" pede o seu PIN para arranjar a sua conta. O que é verdade?", options: ["Tem de o dar", "Dê só metade do PIN", "Dê-o se souberem o seu nome", "Um operador verdadeiro nunca pede o seu PIN; desligue"], answer: 3, why: "Quem pede o seu PIN é um burlão, mesmo que saiba o seu nome." },
          { objective: "O5", q: "Porque manter o dinheiro do negócio separado do dinheiro da família?", options: ["Para ver se o negócio dá mesmo lucro", "Porque o banco manda", "Para a família não comer", "Não faz diferença"], answer: 0, why: "Misturá-los esconde se o negócio ganha ou perde dinheiro." },
          { objective: "O6", q: "Que foto mostra melhor o seu trabalho?", options: ["Tirada à noite com flash num quarto desarrumado", "Metade da peça com um fundo cheio de coisas do mercado", "Luz do dia, fundo liso, a peça inteira mais um grande plano", "Uma foto do trabalho de outra pessoa"], answer: 2, why: "Boa luz, um fundo liso e uma foto de um detalhe mostram a qualidade do seu trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Gerir um Negócio de Alfaiataria e Moda",
    questions: [
      { objective: "O1", q: "Qual é o lugar mais seguro para as agulhas partidas?", options: ["No chão", "Numa lata fechada", "No saco do cliente", "No seu bolso"], answer: 1, why: "Uma lata fechada mantém as agulhas partidas longe dos pés, das mãos e das crianças." },
      { objective: "O1", q: "Repara que o cabo de uma máquina tem um corte e se veem os fios. O que faz?", options: ["Enrola-o num pano e continua a coser", "Continua a usá-lo com cuidado", "Desliga-o da tomada e manda reparar ou trocar o cabo antes de o usar", "Deixa o aprendiz usá-lo em vez de você"], answer: 2, why: "Os cabos estragados podem dar choque ou provocar um incêndio; pare e repare primeiro." },
      { objective: "O1", q: "Que hábito protege as suas costas e os seus olhos?", options: ["Coser num canto escuro", "Ficar sentado e dobrado durante seis horas", "Trabalhar só à noite", "Boa luz, costas apoiadas e esticar o corpo a cada hora"], answer: 3, why: "Luz, postura e pausas evitam o cansaço nos longos dias de costura." },
      { objective: "O2", q: "O que se escreve numa ficha de encomenda?", options: ["Modelo, medidas, tecido, preço, sinal, valor em falta, prova e data de entrega", "Só o nome do cliente", "Só o preço", "O PIN do banco do cliente"], answer: 0, why: "Uma ficha completa regista todo o acordo; números privados nunca vão nela." },
      { objective: "O2", q: "Porque escrever a unidade (cm ou polegadas) com as medidas?", options: ["Fica bonito", "Para você ou um ajudante não cortarem no tamanho errado", "O cliente pede", "Não é preciso"], answer: 1, why: "Confundir cm com polegadas estraga uma peça." },
      { objective: "O2", q: "Uma cliente diz que pagou mais do que a ficha mostra. O que ajuda mais?", options: ["Gritar", "Recusar acabar o vestido", "A ficha assinada e o que escreveu no caderno de contas nesse dia", "Perguntar ao vizinho"], answer: 2, why: "Registos escritos e assinados mostram o que foi pago e quando." },
      { objective: "O2", q: "Antes de uma cliente de aso ebi sair, o que faz com a ficha de encomenda?", options: ["Guarda-a em segredo", "Deita-a fora depois de cortar", "Preenche-a mais tarde de memória", "Lê-a em voz alta, assinam os dois e dá uma cópia ou deixa tirar uma foto"], answer: 3, why: "Ler em voz alta e partilhar a ficha faz com que os dois concordem com os mesmos detalhes." },
      { objective: "O3", q: "Que três partes formam o custo de uma peça?", options: ["Materiais, o seu tempo e as despesas fixas", "Tecido, lucro e transporte", "Renda, telefone e comida", "Só os materiais"], answer: 0, why: "Materiais, tempo e despesas fixas juntos são o custo verdadeiro; o lucro vai por cima." },
      { objective: "O3", q: "O custo é GHS 200 e junta 25% de lucro. Qual é o preço? (Valores de exemplo.)", options: ["GHS 225", "GHS 250", "GHS 275", "GHS 200"], answer: 1, why: "25% de 200 é 50, por isso o preço é 250." },
      { objective: "O3", q: "Porque incluir o seu próprio tempo no custo?", options: ["Não é preciso se a loja for sua", "Só conta o tempo dos aprendizes", "As suas horas de trabalho valem dinheiro; sem elas trabalha de graça", "Os clientes pedem para ver"], answer: 2, why: "Se o seu tempo não estiver no preço, o negócio não paga a você." },
      { objective: "O3", q: "O seu preço está acima do mercado. Qual é um bom primeiro passo?", options: ["Baixar abaixo do seu custo", "Fechar o negócio", "Copiar os modelos de outro alfaiate", "Procurar um modelo mais simples ou um método mais barato, ou clientes que valorizam a sua qualidade"], answer: 3, why: "Mude a forma de fazer ou a quem vende antes de cortar no seu custo." },
      { objective: "O4", q: "Qual é o primeiro passo para planear a sua semana?", options: ["Contar as suas horas reais de costura", "Aceitar todas as encomendas que aparecem", "Comprar mais tecido", "Publicar nas redes sociais"], answer: 0, why: "Não consegue planear as encomendas sem saber quantas horas tem de verdade." },
      { objective: "O4", q: "Porque marcar um último dia para encomendas antes do Natal ou do Eid?", options: ["Para irritar os clientes", "Para aceitar só o que consegue acabar a tempo", "Para subir os preços", "É a lei"], answer: 1, why: "Um último dia protege as suas promessas nas semanas de mais movimento." },
      { objective: "O4", q: "Onde fica a prova no seu plano?", options: ["Depois da data de entrega", "Não é precisa", "Antes do acabamento, com tempo para ajustar", "Na mesma hora da entrega"], answer: 2, why: "Uma prova antes do acabamento deixa tempo para fazer mudanças antes da data de entrega." },
      { objective: "O5", q: "Qual é um sinal de burla com dinheiro móvel?", options: ["O seu próprio saldo subir depois de uma venda", "Um recibo do número oficial do seu operador", "Um cliente pagar o valor em falta", "Um desconhecido pedir que pague uma \"taxa de entrega\" antes de uma encomenda grande"], answer: 3, why: "Um desconhecido pedir primeiro uma taxa é um tipo de burla comum." },
      { objective: "O5", q: "Com que frequência deve escrever no seu caderno de contas?", options: ["No mesmo dia de cada sinal, pagamento ou compra", "Uma vez por ano", "Só quando há um problema", "Nunca; guarde tudo de cabeça"], answer: 0, why: "Escrever no mesmo dia mantém o registo certo e completo." },
      { objective: "O5", q: "Quer registar o nome do seu negócio na Nigéria. Onde confirma os passos e as taxas atuais?", options: ["Com um senhor na paragem do autocarro", "No site ou no balcão oficial da Corporate Affairs Commission", "Numa página qualquer das redes sociais", "Com os seus clientes"], answer: 1, why: "O registo oficial dá as regras e as taxas atuais; os falsos agentes são comuns." },
      { objective: "O6", q: "O que deve mostrar uma lista de preços?", options: ["Os preços dos seus concorrentes", "Os nomes dos clientes", "As suas peças principais com preços baseados no seu cálculo de custos", "O seu caderno de contas"], answer: 2, why: "Uma lista de preços feita a partir do seu cálculo diz aos clientes o que esperar e protege o seu lucro." },
      { objective: "O6", q: "Os dados são caros para os seus clientes. Como publica?", options: ["Envia vinte vídeos por dia", "Não publica nada", "Envia todas as fotos que tirou", "Partilha uma foto nítida com o preço e como encomendar"], answer: 3, why: "Uma boa foto com detalhes claros funciona e poupa dados." },
      { objective: "O6", q: "O que nunca deve aparecer numa publicação sobre a peça de uma cliente?", options: ["O nome, o número de telefone ou as medidas dela sem autorização", "O nome do modelo", "O preço", "Como encomendar"], answer: 0, why: "Os dados privados de uma cliente são dela; nunca os partilhe sem autorização." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Oficina segura", objective: "O1", notYet: "Nenhum risco listado, ou riscos listados mas nenhum corrigido.", meets: "Pelo menos três riscos encontrados e corrigidos, como uma lata para alfinetes, um suporte seguro para o ferro e passagens livres.", exceeds: "Todos os riscos listados e corrigidos, e as regras ensinadas aos aprendizes." },
      { name: "Ficha de encomenda", objective: "O2", notYet: "Falta na ficha o preço, o sinal, o valor em falta ou a data de entrega.", meets: "A ficha tem modelo, medidas com unidades, tecido, preço, sinal, valor em falta, prova e data de entrega, e espaço para as duas assinaturas.", exceeds: "Usada com um cliente real, lida em voz alta e partilhada como cópia ou foto." },
      { name: "Lista de preços com custos", objective: "O3", notYet: "Os preços são copiados ou adivinhados, sem custo calculado.", meets: "Pelo menos cinco peças, cada uma com materiais, tempo e despesas fixas calculados e um preço acima do custo.", exceeds: "Cada preço também é comparado com o mercado local, com uma nota sobre o que mudar se for alto demais." },
      { name: "Plano semanal", objective: "O4", notYet: "O plano tem mais horas de trabalho do que as horas disponíveis, ou não tem datas de entrega.", meets: "Encomendas postas por data de entrega dentro das horas reais, com provas antes do acabamento e algum tempo livre.", exceeds: "Inclui um último dia para encomendas na próxima época de muito movimento e como os clientes serão avisados." },
      { name: "Caderno de contas", objective: "O5", notYet: "Nenhum registo, ou dinheiro do negócio e da família misturados.", meets: "Uma semana de sinais, pagamentos e gastos com o saldo certo, e a regra do PIN escrita.", exceeds: "O saldo é conferido com o dinheiro real e o dinheiro móvel, e o registo do país do aluno está anotado." },
      { name: "Mostrar o trabalho", objective: "O6", notYet: "Nenhuma foto, ou uma foto sem preço nem forma de encomendar.", meets: "Uma foto nítida à luz do dia com o que é, o preço, o tempo e como encomendar, e sem dados privados de nenhum cliente.", exceeds: "Juntada a um catálogo ou lista de preços, com a autorização anotada para qualquer cliente na foto." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que usam uma ficha de encomenda em cada trabalho em 30 dias (inquérito de seguimento)",
      "Alunos que sobem ou corrigem pelo menos um preço depois de calcular o custo",
      "Menos encomendas atrasadas e discussões com clientes na próxima época de muito movimento",
      "Alunos que registam um nome comercial ou abrem uma conta do negócio em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno, uma caneta e uma calculadora (ou a calculadora do telefone)",
      "Uma fita métrica e a própria oficina do aluno para verificar",
      "Um telefone com câmara para a publicação final (um telefone simples e fotos impressas também servem)",
      "Cerca de 60 a 90 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Funciona bem com associações de alfaiates, grupos de mulheres e de jovens, centros de formação profissional e programas de aprendizagem; façam o teste inicial juntos.",
      "Peça aos alunos para trazerem os seus preços reais e uma encomenda real; é ao calcular o custo da sua própria peça que a maioria descobre que cobra pouco.",
      "Use a moeda local e as festas locais (Natal, Eid, Tabaski, Páscoa, época dos casamentos) em todos os exemplos.",
      "Nunca peça aos alunos para mostrarem ao grupo o PIN, o saldo ou números privados; pratique com valores de exemplo.",
      "As regras e as taxas de registo mudam: confirme no site oficial do registo nacional antes da sessão e partilhe só o que lá está escrito.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
