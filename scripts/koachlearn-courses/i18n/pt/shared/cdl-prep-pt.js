"use strict";

// Koach Learn course (Portuguese translation of shared/cdl-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// This is a US course: CDL class and endorsement letters, 49 CFR rule numbers, FMCSA, DOT and the Training Provider Registry are kept as written.

const CFR_CLASSES = { name: "49 CFR 383.91: Grupos de veículos motorizados comerciais (cópia da regra federal no Cornell LII)", url: "https://www.law.cornell.edu/cfr/text/49/383.91" };
const CFR_ENDORSE = { name: "49 CFR 383.153: Códigos dos averbamentos na CDL e na CLP", url: "https://www.law.cornell.edu/cfr/text/49/383.153" };
const CFR_CLP = { name: "49 CFR 383.25: Licença de aprendiz comercial (CLP)", url: "https://www.law.cornell.edu/cfr/text/49/383.25" };
const CFR_ELDT = { name: "49 CFR 380.603: Quem tem de fazer a formação inicial de condutores", url: "https://www.law.cornell.edu/cfr/text/49/380.603" };
const TPR = { name: "FMCSA Training Provider Registry (registo oficial de formadores de ELDT)", url: "https://tpr.fmcsa.dot.gov/" };
const FMCSA_CDL = { name: "FMCSA: Commercial Driver's License (as páginas federais oficiais sobre a CDL)", url: "https://www.fmcsa.dot.gov/registration/commercial-drivers-license" };
const CFR_AGE = { name: "49 CFR 391.11: Requisitos dos condutores (idade, inglês, exame médico)", url: "https://www.law.cornell.edu/cfr/text/49/391.11" };
const CFR_MED = { name: "49 CFR 391.45: Quando os condutores têm de fazer o exame médico", url: "https://www.law.cornell.edu/cfr/text/49/391.45" };
const CFR_SKILLS = { name: "49 CFR 383.113: O que o exame prático da CDL avalia", url: "https://www.law.cornell.edu/cfr/text/49/383.113" };
const CFR_INSPECT = { name: "49 CFR 396.13: Inspeção feita pelo condutor antes de conduzir", url: "https://www.law.cornell.edu/cfr/text/49/396.13" };
const FMCSA_HOS = { name: "FMCSA: Regras das horas de serviço", url: "https://www.fmcsa.dot.gov/regulations/hours-of-service" };
const CFR_MIL = { name: "49 CFR 383.77: Dispensa do exame prático para condutores militares", url: "https://www.law.cornell.edu/cfr/text/49/383.77" };
const BLS_TRUCK = { name: "U.S. Bureau of Labor Statistics (BLS): Condutores de camiões pesados e de camiões com reboque", url: "https://www.bls.gov/ooh/transportation-and-material-moving/heavy-and-tractor-trailer-truck-drivers.htm" };

module.exports = {
  id: "cdl-prep-pt",
  lang: "pt",
  translationOf: "cdl-prep",
  category: "Workforce Development",
  name: "Preparação para a Carta de Condução Comercial (CDL)",
  skills: "Escolher a classe de CDL e os averbamentos certos, Planear os passos da licença de aprendiz até à carta, Estudar o manual da CDL do estado, Fazer a inspeção antes da viagem, Tomar decisões seguras na condução",
  outcome: "escolher a classe de CDL e os averbamentos de que o trabalho que quer precisa, fazer a lista de todos os passos desde a licença de aprendiz até à carta, estudar para os exames teóricos do estado com o manual oficial, explicar em voz alta uma inspeção antes da viagem e juntar tudo num plano de estudo e de exames da CDL com datas.",
  about: [
    "Este curso é para quem quer um trabalho a conduzir um camião ou um autocarro nos Estados Unidos: quem procura emprego, veteranos, jovens adultos, pessoas que voltam para casa depois da prisão e adultos que mudam de profissão. Não precisa de mais experiência de condução do que uma carta de condução normal.",
    "Vai aprender de que carta de condução comercial (CDL) precisa, os passos para a obter, como estudar para os exames escritos, como fazer a inspeção antes da viagem com que começa o exame de condução, e os hábitos de condução segura que os examinadores procuram.",
    "Este curso prepara você. Não lhe dá uma carta nem uma licença. As regras federais vêm da FMCSA (Federal Motor Carrier Safety Administration, a agência federal de segurança dos transportes rodoviários), os exames são feitos pelo serviço de cartas de condução do seu estado, e a maioria dos novos condutores também tem de terminar a formação inicial de condutores com um formador registado. Cada lição diz onde verificar as regras oficiais.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso. No final, você faz o seu próprio plano de estudo e de exames da CDL com datas reais."
  ],
  finalTask: "Faça o seu próprio plano de estudo e de exames da CDL numa página: o trabalho que quer, a classe de CDL e os averbamentos de que precisa, os passos desde o exame médico até ao exame prático por ordem, com uma data-alvo para cada um, três formadores registados que encontrou no Training Provider Registry, as secções do manual do estado que vai estudar em cada semana, e uma lista escrita da inspeção antes da viagem para o tipo de veículo com que vai fazer o exame.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram o primeiro trabalho a conduzir um camião ou um autocarro: quem procura emprego, veteranos e militares a sair das forças armadas, jovens adultos, pessoas que voltam para casa depois da prisão e quem muda de profissão. Muitos têm uma carta de condução normal, mas nenhuma experiência de condução comercial.",
    startingPoint: "Sabem conduzir um carro e ler um manual simples. A maioria não conhece as classes de CDL, os passos da licença de aprendiz, a regra da formação nem o que é a inspeção antes da viagem. Alguns ouviram informações erradas de amigos ou em anúncios.",
    gap: "Os trabalhos de condução pagam salários estáveis e têm muitas vagas, mas as pessoas perdem tempo e dinheiro quando escolhem a classe errada, se inscrevem numa escola de formação que não está registada ou vão aos exames sem preparação. Os alunos precisam de uma ideia certa do caminho e de um plano que consigam seguir, antes de pagarem a formação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todos os termos técnicos explicados",
      "Aparelhos: um telefone ou um computador da biblioteca para ler o manual da CDL do estado e o registo oficial",
      "As regras mudam de estado para estado: o curso indica o manual e o serviço do estado para taxas, formulários e marcação de exames",
      "Neste curso não há condução real; as competências ao volante vêm de um formador registado",
      "Alguns alunos têm cadastro ou problemas de saúde: confirmam se podem candidatar-se com o estado e com um médico examinador, não com este curso"
    ],
    prerequisites: "Uma carta de condução normal válida, ou um plano para a tirar primeiro. Leitura básica em inglês, porque as regras federais exigem que os condutores leiam e falem inglês o suficiente para o trabalho."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com a descrição de um trabalho de condução", action: "identificar a classe de CDL (A, B ou C) e os averbamentos de que o trabalho precisa", standard: "acertando pelo menos 4 de 5 descrições de trabalho" },
    { id: "O2", condition: "Usando as fontes oficiais da FMCSA e do estado", action: "fazer a lista dos passos desde o exame médico até ao exame prático da CDL pela ordem certa", standard: "sem faltar nenhum passo e incluindo o tempo de espera e a regra da formação" },
    { id: "O3", condition: "Usando o manual gratuito da CDL do seu estado", action: "organizar uma rotina de estudo para os exames teóricos de que precisa e pontuar um conjunto de perguntas de prática", standard: "chegando a pelo menos 8 de 10 nas perguntas de prática antes de marcar o exame" },
    { id: "O4", condition: "De pé junto a um camião ou usando uma imagem de um", action: "dizer o nome de cada parte que verifica numa inspeção antes da viagem e o que verifica nela", standard: "cobrindo todas as áreas principais por ordem, sem saltar nenhuma" },
    { id: "O5", condition: "Com uma situação de condução", action: "escolher a ação segura quanto a distância, velocidade, marcha-atrás e aptidão para conduzir", standard: "acertando pelo menos 4 de 5 situações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O caminho para a CDL",
      lessons: [
        {
          title: "Classes de CDL e averbamentos: de qual precisa?",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ligar um trabalho de condução à classe de CDL e aos averbamentos de que ele precisa.",
          text: [
            "Uma carta de condução comercial (CDL) permite conduzir veículos grandes ou especiais no trabalho. Há três classes, conforme o veículo.",
            "A Classe A é para veículos combinados, como um trator a puxar um reboque, quando o conjunto tem um peso nominal de 26 001 libras ou mais e o reboque puxado tem um peso nominal de mais de 10 000 libras. A Classe B é para um só veículo grande com peso nominal de 26 001 libras ou mais, como um camião basculante, um camião de caixa fechada ou um autocarro urbano; pode puxar um reboque pequeno com peso nominal de 10 000 libras ou menos. A Classe C é para veículos mais pequenos que levam 16 pessoas ou mais (contando o condutor) ou que levam materiais perigosos que precisam de placas de aviso.",
            "Os averbamentos são letras extra na sua carta para trabalhos especiais. T: reboques duplos ou triplos. P: passageiros. N: veículos-cisterna. H: materiais perigosos. X: cisterna mais materiais perigosos. S: autocarro escolar. Cada um tem o seu próprio exame, e o averbamento H também precisa de uma verificação de antecedentes de segurança.",
            "Comece pelo trabalho que quer. Leia anúncios de emprego reais perto de você e procure a classe e os averbamentos que eles pedem."
          ],
          steps: ["Escolha um trabalho que quer, como longo curso, entregas locais, autocarro ou camião basculante.", "Pergunte: puxa um reboque grande? Normalmente é Classe A.", "É um só camião ou autocarro grande? Normalmente é Classe B.", "Leva passageiros, líquidos numa cisterna, reboques duplos ou materiais perigosos? Acrescente o averbamento."],
          words: [["CDL", "Commercial Driver's License, carta de condução comercial: a carta necessária para conduzir veículos grandes ou especiais no trabalho."], ["Veículo combinado", "um camião que puxa um reboque, como um camião trator com semirreboque."], ["Peso nominal", "o peso máximo para o qual o veículo foi feito, totalmente carregado, definido pelo fabricante (muitas vezes chamado GVWR)."], ["Averbamento", "uma autorização extra na sua CDL para trabalhos especiais, como passageiros ou cisternas (em inglês, \"endorsement\")."], ["Materiais perigosos (hazmat)", "cargas que podem fazer mal a pessoas ou bens, como combustível ou químicos, e que precisam de sinais de aviso chamados placas."]],
          slides: [
            { title: "Três classes de CDL", bullets: ["Classe A: camião a puxar um reboque pesado (camião trator com reboque)", "Classe B: um só camião ou autocarro pesado (basculante, autocarro urbano)", "Classe C: veículo mais pequeno com 16+ pessoas ou materiais perigosos com placas"] },
            { title: "Averbamentos: letras extra", bullets: ["T duplos/triplos, P passageiros, N cisterna", "H materiais perigosos, X cisterna mais materiais perigosos, S autocarro escolar", "Cada um tem o seu próprio exame"] },
            { title: "Comece pelo trabalho", bullets: ["Leia três anúncios de emprego reais perto de você", "Anote a classe e os averbamentos que pedem", "Essa é a carta que procura"] }
          ],
          sources: [CFR_CLASSES, CFR_ENDORSE, FMCSA_CDL],
          tryIt: "Encontre três anúncios reais de trabalhos de condução perto de você (num site de emprego ou no site da própria empresa). Para cada um, escreva o trabalho, a classe de CDL que pede e os averbamentos. Faça um círculo à volta do trabalho que mais quer.",
          youCanNow: "ligar um trabalho de condução à Classe A, B ou C e dizer os averbamentos de que precisa.",
          quickCheck: [
            { objective: "O1", q: "Um trabalho é conduzir um trator a puxar um reboque de 53 pés. Que classe é normalmente?", options: ["Classe C", "Classe B", "Classe A", "Não precisa de CDL"], answer: 2, why: "Um trator a puxar um reboque pesado é um veículo combinado, que é Classe A." },
            { objective: "O1", q: "Que averbamento acrescenta para conduzir um autocarro escolar?", options: ["S", "T", "N", "X"], answer: 0, why: "S é o averbamento de autocarro escolar; para autocarros também é preciso o averbamento P de passageiros." }
          ]
        },
        {
          title: "Os passos da licença de aprendiz até à carta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fazer a lista dos passos para a CDL por ordem e dizer quem trata de cada um.",
          text: [
            "A maioria dos novos condutores segue os mesmos passos. As regras federais vêm da FMCSA; o serviço de cartas de condução do seu estado faz os exames e define as taxas e os formulários.",
            "Primeiro, um exame médico (muitas vezes chamado DOT physical) feito por um médico examinador certificado. A maioria dos condutores tem de o repetir pelo menos a cada 24 meses. Segundo, passar nos exames teóricos escritos do estado para obter uma licença de aprendiz comercial (CLP). As regras federais dizem que quem tem uma CLP tem de ter pelo menos 18 anos e de esperar pelo menos 14 dias antes do exame prático. Enquanto pratica nas estradas públicas, uma pessoa com CDL da classe certa tem de ir sentada ao seu lado.",
            "Desde 7 de fevereiro de 2022, a maioria das pessoas que tiram a primeira CDL de Classe A ou B, ou o primeiro averbamento P, S ou H, tem de terminar a formação inicial de condutores (ELDT) com um formador que esteja no Training Provider Registry da FMCSA antes do exame. Depois faz o exame prático do estado: inspeção antes da viagem, controlo básico do veículo e condução na estrada.",
            "Idade: para conduzir entre estados tem de ter pelo menos 21 anos. Alguns estados deixam condutores dos 18 aos 20 anos conduzir só dentro do estado. Verifique as regras do seu estado."
          ],
          steps: ["Exame médico com um médico examinador certificado.", "Estude o manual da CDL do estado e passe nos exames teóricos.", "Obtenha a sua licença de aprendiz comercial (CLP).", "Termine a formação inicial de condutores com um formador registado, se se aplicar a você.", "Pratique com uma pessoa com CDL qualificada ao seu lado; espere pelo menos 14 dias.", "Faça o exame prático: inspeção antes da viagem, controlo básico, condução na estrada."],
          words: [["FMCSA", "a Federal Motor Carrier Safety Administration, a agência dos EUA que define as regras para camiões e autocarros."], ["CLP", "Commercial Learner's Permit, licença de aprendiz comercial: permite praticar a condução de um veículo comercial com uma pessoa com CDL qualificada ao seu lado."], ["ELDT", "Entry-Level Driver Training, formação inicial de condutores: a formação federal que a maioria dos novos condutores tem de terminar antes do exame."], ["Training Provider Registry", "a lista oficial da FMCSA das escolas e empregadores autorizados a dar a ELDT."], ["Médico examinador", "um profissional de saúde certificado para fazer o exame médico DOT dos condutores comerciais."]],
          slides: [
            { title: "Quem faz o quê", bullets: ["FMCSA: as regras federais", "O seu estado: os exames, as taxas e os formulários", "Formador registado: a formação obrigatória"] },
            { title: "Os passos por ordem", bullets: ["Exame médico, depois exames teóricos, depois a CLP", "Formação inicial de condutores, se se aplicar", "Esperar pelo menos 14 dias, depois o exame prático"] },
            { title: "As regras a lembrar", bullets: ["CLP: pelo menos 18 anos, pessoa com CDL ao seu lado", "Entre estados: pelo menos 21 anos", "O formador tem de estar no registo da FMCSA"] }
          ],
          sources: [CFR_CLP, CFR_ELDT, TPR, CFR_AGE, CFR_MED, CFR_SKILLS],
          tryIt: "Procure a página da CDL do seu estado (pesquise o nome do seu estado mais \"CDL\" e abra o site .gov). Escreva os seis passos por ordem e, ao lado de cada um, o que o seu estado diz sobre ele: os formulários, onde ir e as taxas indicadas.",
          youCanNow: "fazer a lista dos passos desde o exame médico até ao exame prático por ordem e dizer quem trata de cada um.",
          quickCheck: [
            { objective: "O2", q: "Acabou de obter a sua CLP. Pelas regras federais, quando pode fazer o exame prático?", options: ["No mesmo dia", "No dia seguinte", "Depois de 6 meses", "Depois de pelo menos 14 dias"], answer: 3, why: "As regras federais dizem que quem tem uma CLP tem de esperar pelo menos 14 dias antes do exame prático." },
            { objective: "O2", q: "Onde encontra uma escola que pode dar a formação inicial de condutores obrigatória?", options: ["Em qualquer anúncio nas redes sociais", "No Training Provider Registry da FMCSA", "Com um amigo que conduz camiões", "No stand de automóveis"], answer: 1, why: "Só os formadores do Training Provider Registry da FMCSA podem dar a formação obrigatória." }
          ]
        },
        {
          title: "Estudar para os exames teóricos",
          objectives: ["O3"],
          minutes: 5,
          goal: "Organizar uma rotina de estudo com o manual da CDL do seu estado e pontuar um conjunto de perguntas de prática.",
          text: [
            "Todos os estados têm um manual da CDL gratuito no site do serviço de cartas de condução. Os exames escritos vêm dele, por isso é o melhor livro de estudo que pode ter.",
            "A maioria dos novos condutores faz o exame de Conhecimentos Gerais (General Knowledge). Muitos também fazem Travões de Ar (Air Brakes), porque a maioria dos camiões grandes usa travões de ar, e Veículos Combinados (Combination Vehicles), para a Classe A. Cada averbamento tem o seu próprio exame. O manual do seu estado diz que secções correspondem a que exame.",
            "Estude uma secção de cada vez. Leia-a, feche o manual e escreva três coisas que aprendeu. Depois use as perguntas de prática do manual ou do site do seu estado. Tente acertar pelo menos 8 de 10 antes de marcar o exame verdadeiro.",
            "Cuidado com aplicações e sites pagos que prometem as \"perguntas verdadeiras do exame\". A prática gratuita do seu estado chega para a maioria das pessoas."
          ],
          steps: ["Descarregue o manual da CDL do seu estado a partir do site oficial .gov.", "Marque as secções de que precisa: Conhecimentos Gerais mais as da sua classe e dos seus averbamentos.", "Planeie uma secção por sessão de estudo, de 20 a 30 minutos.", "Depois de cada secção, escreva três coisas que aprendeu sem olhar.", "Faça perguntas de prática até acertar pelo menos 8 de 10."],
          words: [["Exame teórico", "o exame escrito (muitas vezes no computador) em que passa para obter a sua CLP."], ["Travões de ar", "travões que funcionam com ar comprimido, usados na maioria dos camiões e autocarros pesados (em inglês, \"air brakes\")."], ["Manual da CDL", "o livro de estudo oficial do seu estado para os exames da CDL."]],
          slides: [
            { title: "O seu livro de estudo é gratuito", bullets: ["Todos os estados têm um manual da CDL no seu site .gov", "Os exames escritos vêm dele"] },
            { title: "Que exames?", bullets: ["Conhecimentos Gerais para todos", "Travões de Ar e Veículos Combinados para a maioria da Classe A", "Um exame por averbamento"] },
            { title: "Como estudar", bullets: ["Uma secção por sessão", "Feche o livro e escreva três coisas que aprendeu", "Pratique até acertar 8 de 10"] }
          ],
          sources: [FMCSA_CDL],
          tryIt: "Descarregue o manual da CDL do seu estado. Leia a primeira parte da secção de Conhecimentos Gerais sobre a inspeção do veículo. Feche-o e escreva três coisas de que se lembra. Depois escreva cinco perguntas de prática suas com as respostas, e troque com um colega de estudo ou confira-as com o manual.",
          youCanNow: "encontrar o manual da CDL do seu estado, escolher as secções de que precisa e estudá-las em sessões curtas até acertar 8 de 10.",
          quickCheck: [
            { objective: "O3", q: "Qual é o melhor livro de estudo gratuito para os exames teóricos da CDL?", options: ["Uma aplicação paga com as \"respostas verdadeiras do exame\"", "Um vídeo de um desconhecido na internet", "O manual oficial da CDL do seu estado", "O código da estrada para carros"], answer: 2, why: "Os exames escritos vêm do manual oficial da CDL do seu estado." },
            { objective: "O3", q: "Quer uma Classe A para camiões com reboque com travões de ar. De que exames precisa normalmente?", options: ["Só Autocarro Escolar", "Só Passageiros", "Só Materiais Perigosos", "Conhecimentos Gerais, Travões de Ar e Veículos Combinados"], answer: 3, why: "A maioria dos condutores de Classe A de camiões com reboque faz Conhecimentos Gerais, Travões de Ar e Veículos Combinados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O caminho para a CDL",
        questions: [
          { objective: "O1", q: "Um trabalho é conduzir um só camião basculante com peso nominal de 33 000 libras. Que classe é normalmente?", options: ["Classe B", "Classe A", "Classe C", "Uma carta de condução normal de carro"], answer: 0, why: "Um só veículo pesado com peso nominal de 26 001 libras ou mais é Classe B." },
          { objective: "O1", q: "Que averbamento permite puxar reboques duplos ou triplos?", options: ["P", "S", "T", "N"], answer: 2, why: "T é o averbamento de reboques duplos e triplos." },
          { objective: "O2", q: "Que passo vem normalmente primeiro no caminho para a CDL?", options: ["O exame prático na estrada", "O exame médico e os exames teóricos para a CLP", "Comprar um camião", "Obter o averbamento H"], answer: 1, why: "Passa num exame médico e nos exames teóricos para obter uma CLP antes de fazer a formação e o exame na estrada." },
          { objective: "O2", q: "Enquanto pratica com uma CLP nas estradas públicas, quem tem de estar consigo?", options: ["Ninguém", "Qualquer amigo com carta de carro", "Um familiar", "Uma pessoa com CDL da classe certa, ao seu lado"], answer: 3, why: "Uma pessoa com CDL qualificada para esse veículo tem de ir sentada ao seu lado e supervisionar." },
          { objective: "O3", q: "Acerta 5 de 10 nas perguntas de prática de Travões de Ar. O que deve fazer?", options: ["Marcar o exame verdadeiro hoje", "Saltar os Travões de Ar", "Pagar uma aplicação com as respostas do exame", "Estudar essa secção outra vez e praticar até chegar a 8 de 10"], answer: 3, why: "Pratique até ter bons resultados antes de marcar o exame verdadeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Competências e o seu plano",
      lessons: [
        {
          title: "A inspeção antes da viagem",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dizer o nome de cada área de uma inspeção antes da viagem e o que verifica nela.",
          text: [
            "O exame prático começa com uma inspeção antes da viagem. Você anda à volta do veículo, aponta para cada parte e diz em voz alta o que está a verificar. As regras federais também dizem que todos os condutores têm de confirmar que o veículo está seguro antes de o conduzir, por isso este é um hábito para toda a sua carreira.",
            "Siga sempre a mesma ordem, para nunca saltar uma parte. Uma ordem comum é: compartimento do motor, cabine e arranque do motor, direção, suspensão, travões, rodas e pneus, os lados e a traseira com as luzes, e a zona de engate num veículo combinado. Em veículos com travões de ar também verifica os manómetros e os avisos dos travões de ar.",
            "Para cada parte, diga o que a torna segura: \"Bem fixo, sem rachas nem dobras, sem fugas.\" O manual do seu estado tem a lista completa para o seu tipo de veículo. O seu formador vai mostrar-lhe num camião verdadeiro.",
            "Se encontrar um defeito, o camião não sai do lugar até ser reparado. Comunique-o e escreva-o."
          ],
          steps: ["Use a lista do manual do seu estado para o seu tipo de veículo.", "Comece pelo compartimento do motor, depois a cabine, e depois ande à volta do camião sempre pela mesma ordem.", "Aponte para cada parte e diga o que verifica: bem fixo, sem danos, sem fugas.", "Verifique as luzes, os refletores e os pneus de todos os lados.", "Escreva e comunique qualquer defeito; não conduza até estar reparado."],
          words: [["Inspeção antes da viagem", "a verificação de segurança que o condutor faz ao veículo antes de o conduzir (em inglês, \"pre-trip inspection\")."], ["Defeito", "uma peça partida, gasta ou em falta que torna o veículo inseguro."], ["Engate", "as peças que ligam um trator a um reboque, como a quinta roda e o pino-rei (kingpin)."], ["Quinta roda", "a placa plana e redonda no trator onde o reboque fica preso (em inglês, \"fifth wheel\")."]],
          slides: [
            { title: "Porque a inspeção conta", bullets: ["O exame prático começa com ela", "A lei diz: verifique antes de conduzir", "Um defeito quer dizer que não conduz"] },
            { title: "Sempre a mesma ordem", bullets: ["Compartimento do motor, depois cabine e arranque", "Direção, suspensão, travões, rodas", "Lados, traseira, luzes, engate"] },
            { title: "Diga o que verifica", bullets: ["Bem fixo", "Sem rachas, dobras ou desgaste", "Sem fugas"] }
          ],
          sources: [CFR_SKILLS, CFR_INSPECT],
          tryIt: "Usando a secção de inspeção do manual da CDL do seu estado, escreva uma lista de inspeção antes da viagem para o veículo com que pensa fazer o exame. Depois pratique dizê-la em voz alta num carro, numa imagem de um camião ou num camião de brincar: aponte para cada área e diga o que verifica.",
          youCanNow: "fazer uma inspeção antes da viagem por ordem e dizer o que verifica em cada parte.",
          quickCheck: [
            { objective: "O4", q: "Porque faz a inspeção sempre pela mesma ordem?", options: ["Para nunca saltar uma parte", "Porque é mais rápido saltar partes", "Porque o examinador escolhe a ordem", "Não importa"], answer: 0, why: "Uma ordem fixa quer dizer que nenhuma área fica esquecida." },
            { objective: "O4", q: "Durante a inspeção encontra uma mangueira dos travões rachada. O que faz?", options: ["Conduz devagar até à próxima paragem", "Põe fita-cola e segue", "Comunica, escreve e não conduz até estar reparada", "Ignora se os travões ainda funcionam"], answer: 2, why: "Um defeito de segurança quer dizer que o veículo não sai do lugar até ser reparado." }
          ]
        },
        {
          title: "Controlo básico e hábitos de condução segura",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher a ação segura em situações comuns de condução de camiões.",
          text: [
            "Depois da inspeção, o exame prático avalia o controlo básico do veículo (andar para a frente e para trás, fazer marcha-atrás em linha reta e numa curva, e virar) e a condução na estrada.",
            "Os examinadores procuram hábitos seguros. Mantenha uma grande margem de segurança: os camiões precisam de muito mais espaço para parar do que os carros. Abrande com chuva, neve, curvas, obras e trânsito intenso, mesmo abaixo do limite de velocidade. Olhe para longe à frente e veja os espelhos muitas vezes. Faça as curvas largas à direita com cuidado para o reboque não bater no passeio ou num carro.",
            "Faça marcha-atrás o menos possível. Se não tiver a certeza do que está atrás, saia e olhe. Muitos condutores lembram-se de G.O.A.L. (em inglês, Get Out And Look): saia e olhe.",
            "Também tem de estar apto para conduzir. As regras federais das horas de serviço limitam quanto tempo pode conduzir e trabalhar antes de descansar, e os condutores fazem testes de drogas e álcool. Nunca conduza cansado, doente ou sob o efeito de álcool ou drogas."
          ],
          steps: ["Mantenha uma grande distância à frente; ainda mais com mau tempo.", "Escolha a velocidade conforme a estrada, o tempo e a carga, não só pelo sinal.", "Veja os espelhos a cada poucos segundos e antes de cada mudança de faixa.", "Antes da marcha-atrás: saia e olhe (G.O.A.L.), depois recue devagar.", "Pare e descanse quando estiver cansado; cumpra as regras das horas de serviço."],
          words: [["Margem de segurança", "o espaço vazio que mantém à volta do veículo para ter espaço para parar ou desviar (em inglês, \"space cushion\")."], ["Off-tracking", "quando, numa curva, as rodas de trás de um veículo comprido fazem um caminho mais curto do que as rodas da frente."], ["Horas de serviço", "as regras da FMCSA sobre quanto tempo um condutor pode conduzir e trabalhar antes de descansar."]],
          slides: [
            { title: "O que o exame prático avalia", bullets: ["Inspeção antes da viagem", "Controlo básico: marcha-atrás, curvas, paragens", "Condução na estrada"] },
            { title: "Espaço e velocidade", bullets: ["Os camiões precisam de muito mais espaço para parar", "Abrande com mau tempo, curvas e obras", "Olhe para longe; veja os espelhos muitas vezes"] },
            { title: "Marcha-atrás: G.O.A.L.", bullets: ["Get Out And Look: saia e olhe", "Recue devagar, o menos possível"] },
            { title: "Esteja apto para conduzir", bullets: ["Cumpra as regras das horas de serviço", "Nunca conduza cansado, doente ou sob o efeito de álcool ou drogas"] }
          ],
          sources: [CFR_SKILLS, FMCSA_HOS],
          tryIt: "Escreva cinco situações da secção de condução segura do manual do seu estado (por exemplo chuva à noite, uma zona de obras, marcha-atrás para uma doca de carga). Para cada uma, escreva a ação segura numa frase. Peça a um colega de estudo para lhe fazer perguntas sobre elas.",
          youCanNow: "escolher a ação segura quanto a espaço, velocidade, marcha-atrás e aptidão para conduzir.",
          quickCheck: [
            { objective: "O5", q: "Está a fazer marcha-atrás para uma doca de carga e não consegue ver um canto. O que faz?", options: ["Recua mais depressa para acabar logo", "Sai e olha antes de continuar a recuar", "Buzina e continua", "Usa só o rádio"], answer: 1, why: "G.O.A.L.: saia e olhe quando não tem a certeza do que está atrás." },
            { objective: "O5", q: "Começa a chover muito na autoestrada. Qual é a escolha segura?", options: ["Manter a mesma velocidade e distância", "Seguir mais perto do carro da frente para ver as luzes dele", "Acelerar para sair da chuva", "Abrandar e aumentar a distância para o veículo da frente"], answer: 3, why: "Com a estrada molhada a distância de travagem é maior, por isso abrande e deixe mais espaço." }
          ]
        },
        {
          title: "Escolher a formação e fazer o seu plano da CDL",
          objectives: ["O2", "O3"],
          minutes: 5,
          goal: "Escrever um plano da CDL com datas e formadores registados que pode contactar.",
          text: [
            "Antes de pagar ou de se inscrever em qualquer formação, confirme que a escola ou o empregador está no Training Provider Registry da FMCSA. Pode pesquisar no registo por localidade.",
            "Algumas empresas de transportes pagam a formação se aceitar conduzir para elas durante um tempo definido. Leia o contrato com atenção: o que acontece se sair mais cedo? Vai ter de devolver o dinheiro da formação? Pergunte antes de assinar.",
            "Veteranos: se conduziu veículos militares pesados, pergunte ao seu estado sobre a dispensa do exame prático para militares; a FMCSA permite que os estados a ofereçam aos militares e veteranos recentes que cumprem os requisitos. Se tem cadastro, ligue para o serviço de cartas do estado e pergunte cedo aos empregadores quais são as suas regras de contratação; o averbamento de materiais perigosos também precisa de uma verificação de segurança.",
            "Agora transforme tudo num plano. Um plano com datas tem muito mais hipóteses de acontecer do que um desejo."
          ],
          steps: ["Escreva o trabalho que quer e a classe e os averbamentos de que precisa.", "Pesquise no Training Provider Registry e faça a lista de três formadores perto de você.", "Ligue ou visite; pergunte pelo horário, pelo custo total, pelo contrato e pela colocação em emprego.", "Ponha uma data-alvo ao lado de cada passo, do exame médico ao exame prático.", "Planeie que secções do manual vai estudar em cada semana."],
          words: [["Contrato de formação", "um acordo em que uma empresa paga a sua formação se você trabalhar para ela durante um tempo definido."], ["Dispensa do exame prático", "uma opção que alguns estados oferecem para os condutores militares que cumprem os requisitos não fazerem o exame prático da CDL (em inglês, \"skills test waiver\")."]],
          slides: [
            { title: "Verifique antes de pagar", bullets: ["O formador está no Training Provider Registry da FMCSA?", "Pesquise no registo por localidade"] },
            { title: "Formação paga pela empresa", bullets: ["Leia o contrato", "E se sair mais cedo? Tem de devolver o dinheiro?"] },
            { title: "Pergunte cedo", bullets: ["Veteranos: perguntem pela dispensa do exame prático para militares", "Com cadastro: pergunte cedo ao estado e aos empregadores"] },
            { title: "Plano com datas", bullets: ["Cada passo tem uma data-alvo", "Secções para estudar em cada semana", "Três formadores para contactar"] }
          ],
          sources: [TPR, CFR_MIL, CFR_ELDT, BLS_TRUCK],
          tryIt: "Pesquise no Training Provider Registry três formadores perto de você. Escreva os nomes, como os contactar e três perguntas que vai fazer a cada um. Depois ponha uma data-alvo ao lado de cada passo do seu caminho para a CDL.",
          youCanNow: "confirmar que um formador está registado e escrever um plano da CDL com uma data para cada passo.",
          quickCheck: [
            { objective: "O2", q: "Uma escola diz que dá formação para a CDL mas não está no Training Provider Registry. O que deve fazer?", options: ["Inscrever-se depressa antes que o preço suba", "Pagar em dinheiro para ficar mais barato", "Escolher um formador que esteja no registo", "Pedir a um amigo para verificar mais tarde"], answer: 2, why: "A formação que conta para a maioria dos novos condutores tem de vir de um formador do registo da FMCSA." },
            { objective: "O3", q: "Que plano tem mais hipóteses de funcionar?", options: ["\"Um dia tiro a minha CDL.\"", "\"Exame médico até 3 de maio, exames teóricos até 24 de maio, estudar uma secção do manual por semana.\"", "\"Estudo quando tiver tempo.\"", "\"Faço o exame e vejo o que acontece.\""], answer: 1, why: "Um plano com datas e passos de estudo semanais transforma um objetivo em ações." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Competências e o seu plano",
        questions: [
          { objective: "O4", q: "Com que começa o exame prático da CDL?", options: ["A inspeção antes da viagem", "A condução na estrada", "A marcha-atrás numa curva", "Uma redação escrita"], answer: 0, why: "O exame prático começa com a inspeção antes da viagem." },
          { objective: "O4", q: "Durante a inspeção antes da viagem, o que diz sobre cada parte?", options: ["Só o nome dela", "O preço dela", "O que verifica: bem fixo, sem danos, sem fugas", "Nada; só olha"], answer: 2, why: "Aponta para cada parte e diz o que a torna segura." },
          { objective: "O5", q: "Porque é que os camiões mantêm uma distância maior do que os carros?", options: ["Só para poupar combustível", "Precisam de muito mais espaço para parar", "É só um hábito", "Para os outros condutores poderem ultrapassar"], answer: 1, why: "Os veículos pesados demoram muito mais a parar, por isso precisam de uma margem de segurança maior." },
          { objective: "O5", q: "Sente muito sono duas horas depois de começar a conduzir. Qual é a ação segura?", options: ["Abrir a janela e continuar", "Beber mais café e acelerar", "Aumentar o volume do rádio", "Parar num lugar seguro e descansar"], answer: 3, why: "Nunca conduza cansado; pare em segurança e descanse, e cumpra as regras das horas de serviço." },
          { objective: "O2", q: "Uma empresa oferece formação gratuita para a CDL se conduzir para ela durante um ano. O que faz primeiro?", options: ["Lê o contrato e pergunta o que acontece se sair mais cedo", "Assina logo", "Diz que decide depois da formação", "Ignora o contrato"], answer: 0, why: "A formação paga pela empresa tem muitas vezes uma regra de devolução, por isso leia e pergunte antes de assinar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para a Carta de Condução Comercial (CDL)",
    questions: [
      { objective: "O1", q: "Um trabalho a conduzir um autocarro urbano que leva 40 passageiros. Que classe e averbamento são mais prováveis?", options: ["Classe C com T", "Classe A com H", "Classe B com P", "Não precisa de CDL"], answer: 2, why: "Um só autocarro pesado é normalmente Classe B, e levar passageiros precisa do averbamento P." },
      { objective: "O1", q: "O que permite o averbamento H?", options: ["Transportar materiais perigosos", "Conduzir um autocarro escolar", "Puxar reboques duplos", "Conduzir só um veículo-cisterna"], answer: 0, why: "H é o averbamento de materiais perigosos; também precisa de uma verificação de antecedentes de segurança." },
      { objective: "O1", q: "Que veículo é normalmente Classe A?", options: ["Uma carrinha de 15 lugares", "Um só camião de caixa fechada com peso nominal de 30 000 libras", "Uma carrinha de caixa aberta (pickup)", "Um trator a puxar um reboque com peso nominal de mais de 10 000 libras"], answer: 3, why: "Um conjunto com peso nominal de 26 001 libras ou mais, com um reboque de peso nominal de mais de 10 000 libras, é Classe A." },
      { objective: "O1", q: "Quer transportar combustível num camião-cisterna que leva materiais perigosos com placas. Que averbamento cobre as duas coisas?", options: ["S", "X", "P", "T"], answer: 1, why: "X junta os averbamentos de veículo-cisterna e de materiais perigosos." },
      { objective: "O2", q: "Quem faz as regras federais para os condutores comerciais?", options: ["A FMCSA", "O IRS", "A OSHA", "A sua escola de formação"], answer: 0, why: "A FMCSA, a Federal Motor Carrier Safety Administration, define as regras federais." },
      { objective: "O2", q: "Quem faz os exames teóricos e práticos da CDL?", options: ["A FMCSA em Washington, D.C.", "Qualquer empresa de transportes", "O tribunal federal", "O serviço de cartas de condução do seu estado ou os examinadores aprovados por ele"], answer: 3, why: "O estado faz os exames e define as taxas e os formulários." },
      { objective: "O2", q: "Pelas regras federais, qual é a idade mínima para conduzir um veículo comercial entre estados?", options: ["16", "18", "21", "25"], answer: 2, why: "Os condutores têm de ter pelo menos 21 anos para conduzir veículos comerciais entre estados." },
      { objective: "O2", q: "Que ordem está certa?", options: ["Exame prático, depois CLP, depois exame médico", "Exame médico e exames teóricos, CLP, formação, depois exame prático", "Formação, exame prático, depois exames teóricos", "CLP, exame prático no mesmo dia, depois formação"], answer: 1, why: "O exame médico e os exames teóricos levam à CLP; a formação e a espera de 14 dias vêm antes do exame prático." },
      { objective: "O2", q: "Com que frequência a maioria dos condutores tem de repetir o exame médico DOT?", options: ["Pelo menos a cada 24 meses", "Só uma vez na vida", "A cada 10 anos", "Nunca depois dos 30 anos"], answer: 0, why: "A maioria dos condutores tem de ser examinada e certificada outra vez pelo menos a cada 24 meses; alguns precisam com mais frequência." },
      { objective: "O3", q: "De onde vêm as perguntas dos exames escritos da CDL?", options: ["De notícias", "Do manual da CDL do seu estado", "Das redes sociais", "Do rádio do camião"], answer: 1, why: "Os exames teóricos baseiam-se no manual oficial da CDL do estado." },
      { objective: "O3", q: "Qual é uma boa rotina de estudo para os exames teóricos?", options: ["Ler o manual todo na noite anterior", "Só ver vídeos", "Decorar respostas de uma aplicação paga", "Uma secção do manual por sessão, depois escrever três coisas que aprendeu e fazer perguntas de prática"], answer: 3, why: "Sessões curtas, lembrar por escrito e perguntas de prática ajudam a memorizar." },
      { objective: "O3", q: "Quando está pronto para marcar um exame teórico?", options: ["Quando leu a página do título", "Quando acerta pelo menos 8 de 10 nas perguntas de prática", "Quando um amigo diz que está", "Logo que recebe o manual"], answer: 1, why: "Ter bons resultados nas perguntas de prática é um bom sinal de que está pronto." },
      { objective: "O4", q: "O que é uma inspeção antes da viagem?", options: ["Uma verificação de segurança do veículo antes de o conduzir", "Um exame à sua vista", "Uma olhadela ao tempo", "Uma verificação do seu salário"], answer: 0, why: "É a verificação que o condutor faz para confirmar que o veículo está seguro antes de o conduzir." },
      { objective: "O4", q: "Qual é uma boa maneira de explicar uma parte na inspeção antes da viagem?", options: ["\"Isto é um pneu.\"", "\"Parece bem, acho eu.\"", "\"Bem fixo, sem rachas nem dobras, sem fugas.\"", "\"Verifico depois.\""], answer: 2, why: "Diz o nome da parte e diz exatamente o que a torna segura." },
      { objective: "O4", q: "Num camião com reboque, que área liga o trator ao reboque?", options: ["Os espelhos", "A zona de engate, como a quinta roda", "O depósito de combustível", "O rádio"], answer: 1, why: "A zona de engate, incluindo a quinta roda e o pino-rei, prende o reboque ao trator." },
      { objective: "O5", q: "O que quer dizer G.O.A.L. na marcha-atrás?", options: ["Go On And Leave", "Get Over All Lanes", "Gas Off At Lights", "Get Out And Look (saia e olhe)"], answer: 3, why: "Get Out And Look, saia e olhe: veja o que está atrás antes de fazer marcha-atrás." },
      { objective: "O5", q: "Está a passar por uma zona de obras. O que faz?", options: ["Abranda e deixa mais espaço", "Mantém a velocidade de autoestrada", "Muda de faixa muitas vezes", "Segue muito perto do carro da frente"], answer: 0, why: "As zonas de obras têm trabalhadores, faixas estreitas e paragens repentinas, por isso abrande e deixe espaço." },
      { objective: "O5", q: "Para que servem as regras das horas de serviço?", options: ["Definir o seu salário", "Limitar quanto tempo conduz e trabalha antes de descansar", "Dizer que estradas usar", "Decidir a data do seu exame"], answer: 1, why: "As regras das horas de serviço limitam o tempo de condução e de trabalho para os condutores não ficarem cansados demais." },
      { objective: "O5", q: "Está a virar à direita num camião comprido. Qual é o risco?", options: ["O reboque pode cortar a curva e bater no passeio ou num carro", "O motor vai parar", "Os espelhos vão dobrar", "Não há risco"], answer: 0, why: "Com o off-tracking, as rodas de trás fazem um caminho mais curto, por isso o reboque pode bater no que está do lado de dentro da curva." },
      { objective: "O4", q: "Na inspeção antes da viagem encontra uma luz que não funciona. O que faz?", options: ["Conduz à noite na mesma", "Ignora se for de dia", "Comunica e manda reparar antes de conduzir", "Tapa-a com fita-cola"], answer: 2, why: "Um defeito é comunicado e reparado antes de o veículo sair do lugar." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 5, 7, 9, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique o seu plano outra vez.",
    criteria: [
      { name: "Carta certa", objective: "O1", notYet: "A classe ou os averbamentos não correspondem ao trabalho, ou faltam.", meets: "A classe e todos os averbamentos correspondem ao trabalho que quer e a um anúncio de emprego real.", exceeds: "Também indica um segundo trabalho que a mesma carta abriria, ou um averbamento para acrescentar mais tarde." },
      { name: "Passos por ordem", objective: "O2", notYet: "Faltam passos ou estão fora de ordem, ou ficou de fora a regra da formação ou a espera de 14 dias.", meets: "Todos os passos estão por ordem, cada um com uma data-alvo, incluindo o exame médico, a CLP, a formação e a espera de 14 dias.", exceeds: "Cada passo também diz o serviço ou o site que trata dele." },
      { name: "Formação registada", objective: "O2", notYet: "Nenhum formador, ou formadores não verificados no registo.", meets: "Três formadores do Training Provider Registry com os contactos.", exceeds: "Inclui as respostas às perguntas feitas: custo, horário, condições do contrato." },
      { name: "Plano de estudo", objective: "O3", notYet: "Não há plano de estudo, ou não usa o manual do estado.", meets: "Secções semanais do manual do estado para cada exame necessário, com uma meta de pontuação na prática.", exceeds: "Inclui as pontuações de prática já alcançadas." },
      { name: "Lista da inspeção", objective: "O4", notYet: "A lista salta áreas principais ou não segue uma ordem fixa.", meets: "Cobre todas as áreas principais numa ordem fixa, com o que verificar em cada parte.", exceeds: "O aluno consegue dizê-la em voz alta, a apontar para as partes, sem ler." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e um plano da CDL que cumpre a grelha de avaliação",
      "Alunos que passam nos exames teóricos do estado e obtêm uma CLP em 90 dias (inquérito de seguimento)",
      "Alunos que se inscrevem num formador do Training Provider Registry",
      "Alunos que obtêm uma CDL e começam um trabalho de condução (relatórios dos parceiros e de seguimento)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir o manual da CDL do estado e o Training Provider Registry da FMCSA",
      "O manual da CDL do seu estado (gratuito no site .gov do estado)",
      "Papel, caneta e um calendário para o plano",
      "Opcional: uma imagem ou um modelo de camião, ou um carro, para praticar a explicação da inspeção antes da viagem",
      "Cerca de 60 a 75 minutos no total, mais o tempo de estudo semanal"
    ],
    facilitatorNotes: [
      "Em grupo, imprima a lista de inspeção do estado e peça aos alunos para praticarem a explicação em pares.",
      "Não recomende uma escola ou empresa específica; mostre aos alunos como consultar o Training Provider Registry e comparar.",
      "Lembre aos alunos que as regras, as taxas e os formulários mudam de estado para estado; verifiquem sempre o site .gov do estado.",
      "Para os veteranos, indique a página do estado sobre a dispensa do exame prático para militares; para os alunos com cadastro, ponha-os em contacto com um conselheiro de reintegração ou de emprego.",
      "Avalie o plano final com a grelha de avaliação e ajude o aluno a corrigir uma linha Ainda não de cada vez."
    ]
  }
};
