"use strict";

// Koach Learn course (Portuguese translation of shared/carpentry-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US training (OSHA, BLS, apprenticeship.gov, NCCER); US names and URLs are kept. Inches and feet are kept as in the English.

module.exports = {
  id: "carpentry-basics-pt",
  lang: "pt",
  translationOf: "carpentry-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Carpintaria",
  skills: "Ler uma fita métrica até 1/16 de polegada, Escolher madeira e fixadores, Seguir a segurança com ferramentas e escadas, Marcar uma parede de montantes a partir de uma planta, Escrever uma lista de cortes, Planear o seu caminho para uma aprendizagem em carpintaria",
  outcome: "medir e somar comprimentos até 1/16 de polegada, escolher a madeira e os fixadores certos, explicar os passos de segurança para serras e escadas, marcar uma parede simples de montantes a partir de uma planta, escrever uma lista de cortes com pouco desperdício e seguir um plano com datas para entrar numa aprendizagem ou num programa de formação em carpintaria.",
  about: [
    "Os carpinteiros constroem e reparam as estruturas de casas e edifícios, colocam pisos, escadas, portas, janelas e acabamentos, e constroem as cofragens de madeira que seguram o betão. A maioria aprende no trabalho ou numa aprendizagem paga. Este curso é para quem procura emprego, jovens, antigos militares, pessoas que voltam para casa depois da prisão e adultos que mudam de profissão e querem chegar preparados a um programa ou ao primeiro estaleiro.",
    "Você vai aprender a ler uma fita métrica e a fazer as contas com frações que os carpinteiros usam todos os dias, a distinguir madeira, contraplacado e fixadores, e os hábitos de segurança com serras, pregadoras e escadas. Depois vai ler uma planta simples, marcar uma parede de montantes no papel, escrever uma lista de cortes para um pequeno projeto e planear como entrar numa formação.",
    "Este curso prepara você. Não dá uma licença nem uma certificação. O uso de uma serra ou de qualquer ferramenta elétrica aprende-se pessoalmente, com um instrutor qualificado, óculos de proteção e proteção auditiva. Nada neste curso pede que você corte com uma ferramenta elétrica em casa.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio dossiê inicial de carpintaria."
  ],
  finalTask: "Faça o seu dossiê inicial de carpintaria: (1) cinco medições com fita métrica de objetos em casa, até 1/16 de polegada, e duas delas somadas e subtraídas, com as contas mostradas; (2) uma lista de verificação de segurança antes do uso para uma serra circular e uma escada extensível; (3) uma marcação em papel de uma parede de montantes de 8 pés a 16 polegadas de centro a centro, com as travessas, cada marca de montante e o número de montantes; (4) uma lista de cortes para uma pequena prateleira ou floreira, com os tamanhos reais das tábuas, a margem para o corte da serra e quantas tábuas comprar; e (5) um plano com datas para se candidatar a dois programas de aprendizagem ou de formação em carpintaria perto de você, a partir de sites oficiais.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens que querem uma profissão da construção sem um curso de quatro anos: pessoas à procura de emprego, jovens em programas de emprego, antigos militares, pessoas que voltam para casa depois da prisão e adultos que mudam de profissão. Alguns já fizeram trabalho manual, militar ou nas oficinas da prisão; a maioria não tem formação formal em carpintaria.",
    startingPoint: "Sabem fazer contas com números inteiros e algumas frações e já usaram um martelo ou uma chave de fendas. A maioria ainda não sabe ler uma fita métrica até 1/16 de polegada, somar comprimentos com frações, distinguir o tamanho nominal do tamanho real da madeira, ler uma planta ou marcar uma parede.",
    gap: "Os programas de aprendizagem e os empreiteiros esperam que os novos trabalhadores meçam com precisão, conheçam os materiais e as ferramentas básicas e trabalhem com segurança desde o primeiro dia. Medidas erradas desperdiçam madeira e dinheiro; maus hábitos com serras e escadas causam ferimentos graves. Os alunos precisam da matemática de base, das palavras, dos hábitos de segurança e de um plano claro para se candidatarem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra da profissão é explicada",
      "Nada de cortar com ferramentas elétricas em casa: a prática usa uma fita métrica, papel, lápis, uma régua e restos de cartão ou de madeira",
      "Aparelhos: um telefone ou um computador da biblioteca para as páginas oficiais; uma calculadora ajuda, mas não é obrigatória",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho e as consultas",
      "Jovens com menos de 18 anos: as regras federais sobre trabalho infantil limitam o trabalho com serras elétricas e máquinas de madeira; as regras de licenças e dos programas variam de estado para estado"
    ],
    prerequisites: "Contas com números inteiros. O curso \"Começar uma Carreira num Ofício Técnico\" ajuda a escolher uma profissão; \"Noções Básicas de Segurança no Trabalho (OSHA)\" cobre a segurança geral no estaleiro. Este curso aprofunda a carpintaria."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma fita métrica e objetos em casa", action: "ler medidas até 1/16 de polegada e somar ou subtrair comprimentos com frações", standard: "acertando pelo menos 4 de 5, com as contas mostradas" },
    { id: "O2", condition: "Perante um trabalho simples de construção", action: "escolher a madeira, as placas e os fixadores para esse trabalho e dizer os seus tamanhos reais", standard: "com o material certo e o tamanho real em pelo menos 4 de 5 itens" },
    { id: "O3", condition: "Antes de usar uma serra, uma pregadora ou uma escada", action: "listar as verificações de segurança e o equipamento de proteção para a ferramenta", standard: "dizendo o equipamento de proteção e pelo menos quatro verificações para cada ferramenta" },
    { id: "O4", condition: "Com a planta simples de uma parede", action: "marcar uma parede de montantes a 16 polegadas de centro a centro e contar os montantes e as travessas", standard: "com cada marca de montante a menos de 1/16 de polegada e a contagem certa" },
    { id: "O5", condition: "Com o desenho de um pequeno projeto", action: "escrever uma lista de cortes com tamanhos reais, margem para o corte da serra e o número de tábuas a comprar", standard: "de forma que todas as peças caibam nas tábuas da lista" },
    { id: "O6", condition: "Usando sites oficiais da sua zona", action: "escrever um plano com datas para se candidatar a dois programas de aprendizagem ou de formação em carpintaria", standard: "com programas reais, os seus requisitos e uma data para cada passo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Medir, materiais e segurança",
      lessons: [
        {
          title: "Ler uma fita métrica e somar frações",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ler uma fita métrica até 1/16 de polegada e somar ou subtrair dois comprimentos.",
          text: [
            "A carpintaria funciona com a fita métrica. Nas fitas dos Estados Unidos, cada polegada está dividida em 16 espaços pequenos. A linha mais comprida no meio da polegada é 1/2. As linhas seguintes mais compridas são 1/4 e 3/4. Depois vêm os oitavos, e as linhas mais curtas são os dezasseis avos.",
            "Para ler um comprimento, encontre a última polegada inteira e conte as linhas pequenas depois dela. Dez dezasseis avos depois de 5 polegadas é 5-10/16, que se simplifica para 5-5/8. Muitas fitas também marcam cada 16 polegadas com outra cor, porque é um espaçamento comum entre montantes.",
            "O gancho de metal na ponta desliza um pouco de propósito. Sai quando você engancha a ponta de uma tábua e entra quando você encosta a fita a uma parede, por isso as duas leituras ficam certas. Nunca o endireite nem o lime.",
            "Para somar frações, ponha os números de baixo iguais. 5-3/8 + 2-7/16 é 5-6/16 + 2-7/16 = 7-13/16. Para subtrair de um número inteiro, peça emprestada uma polegada: 10 - 3-5/8 é 9-8/8 - 3-5/8 = 6-3/8. Meça duas vezes, corte uma vez."
          ],
          steps: ["Enganche a fita na ponta da tábua ou encoste-a bem à parede.", "Encontre a última polegada inteira antes do fim.", "Conte as linhas de dezasseis avos depois dessa polegada.", "Simplifique a fração (8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8).", "Escreva logo a medida e meça outra vez antes de marcar."],
          words: [
            ["Fração", "uma parte de uma polegada inteira, como 1/2, 3/8 ou 5/16."],
            ["Dezasseis avos", "1/16 de polegada, a marca mais pequena na maioria das fitas de carpinteiro."],
            ["Gancho", "a peça de metal na ponta da fita; desliza para que as leituras por dentro e por fora fiquem ambas certas."],
            ["Simplificar", "escrever uma fração com números mais pequenos que dizem o mesmo, como 10/16 = 5/8."]
          ],
          slides: [
            { title: "Dentro de uma polegada", bullets: ["16 espaços pequenos", "Linha mais comprida no meio: 1/2", "Depois 1/4 e 3/4, depois oitavos, depois dezasseis avos"] },
            { title: "Ler um comprimento", bullets: ["Encontre a última polegada inteira", "Conte os dezasseis avos depois dela", "Simplifique: 10/16 = 5/8"] },
            { title: "O gancho mexe-se de propósito", bullets: ["Sai quando engancha a ponta de uma tábua", "Entra quando encosta a uma parede", "Nunca o dobre nem o lime"] },
            { title: "Somar e subtrair", bullets: ["Ponha os números de baixo iguais", "5-3/8 + 2-7/16 = 7-13/16", "10 - 3-5/8 = 6-3/8", "Meça duas vezes, corte uma vez"] }
          ],
          tryIt: "Meça cinco coisas em casa (a largura de uma porta, um livro, uma prateleira, uma caixa, a borda de uma mesa) até 1/16 de polegada e escreva cada medida. Depois some duas delas e subtraia a mais curta da mais comprida, mostrando as contas. Guarde esta folha para o seu dossiê inicial.",
          youCanNow: "ler uma fita métrica até 1/16 de polegada e somar ou subtrair comprimentos com frações.",
          quickCheck: [
            { objective: "O1", q: "A fita mostra 6 polegadas inteiras e 12 dezasseis avos depois. Qual é o comprimento?", options: ["6-1/2 polegadas", "6-12 polegadas", "6-3/4 polegadas", "7-1/4 polegadas"], answer: 2, why: "12/16 simplifica-se para 3/4, por isso o comprimento é 6-3/4 polegadas." },
            { objective: "O1", q: "Quanto é 4-1/2 + 3-3/16?", options: ["7-4/18", "7-11/16", "8-1/16", "7-1/2"], answer: 1, why: "1/2 é 8/16, e 8/16 + 3/16 = 11/16, por isso o total é 7-11/16." }
          ]
        },
        {
          title: "Madeira, placas e fixadores",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escolher a tábua, a placa ou o fixador certo para um trabalho e dizer o seu tamanho real.",
          text: [
            "Nos Estados Unidos, a madeira vende-se por um tamanho nominal, o nome, que é maior do que o tamanho real. Um 2x4 tem na verdade cerca de 1-1/2 por 3-1/2 polegadas. Um 2x6 tem cerca de 1-1/2 por 5-1/2. Um 1x10 tem cerca de 3/4 por 9-1/4. Planeie sempre com o tamanho real, senão o seu projeto não encaixa.",
            "As placas vêm em folhas de 4 por 8 pés. O contraplacado é feito de camadas finas de madeira coladas em cruz; o OSB é feito de lascas de madeira prensadas. Os dois cobrem pisos, paredes e telhados. A madeira tratada sob pressão tem químicos que resistem ao apodrecimento e aos insetos, por isso usa-se no exterior e em contacto com o betão ou o chão. Use luvas e uma máscara contra o pó quando a cortar, e nunca queime os restos.",
            "Os pregos medem-se em \"penny\" (escrito d). Um prego comum 16d, com cerca de 3-1/2 polegadas, é um prego normal de estrutura. Os parafusos seguram melhor e saem com mais facilidade; faça um pequeno furo-guia perto da ponta de uma tábua para ela não rachar. No exterior, use fixadores revestidos ou de aço inoxidável para não enferrujarem.",
            "Olhe ao longo de cada tábua antes de a usar. A maioria das tábuas tem uma ligeira curva ao longo da borda, chamada coroa. Nas vigas do piso e nos caibros, a coroa fica para cima, para que o peso a empurre e a deixe plana."
          ],
          words: [
            ["Tamanho nominal", "o tamanho pelo nome da madeira, como 2x4, que é maior do que o tamanho verdadeiro."],
            ["Tamanho real", "o tamanho verdadeiro medido, como 1-1/2 por 3-1/2 polegadas para um 2x4."],
            ["Contraplacado e OSB", "folhas de 4 por 8 pés para pisos, paredes e telhados; o contraplacado é feito de camadas coladas, o OSB de lascas de madeira prensadas."],
            ["Tratada sob pressão", "madeira com químicos que resistem ao apodrecimento e aos insetos, usada no exterior e perto do chão."],
            ["Penny (d)", "o sistema de tamanhos dos pregos nos Estados Unidos; um prego comum 16d tem cerca de 3-1/2 polegadas."],
            ["Coroa", "a ligeira curva para cima ao longo da borda de uma tábua."]
          ],
          slides: [
            { title: "Nominal não é real", bullets: ["2x4 tem cerca de 1-1/2 x 3-1/2 pol.", "2x6 tem cerca de 1-1/2 x 5-1/2 pol.", "1x10 tem cerca de 3/4 x 9-1/4 pol.", "Planeie com o tamanho real"] },
            { title: "Placas e madeira tratada", bullets: ["Contraplacado e OSB: folhas de 4 x 8 pés", "Tratada sob pressão: exterior, perto do chão ou do betão", "Luvas e máscara ao cortar; nunca queime os restos"] },
            { title: "Fixadores", bullets: ["Prego comum 16d: cerca de 3-1/2 pol., para estrutura", "Parafusos seguram melhor; furo-guia perto das pontas", "No exterior: revestidos ou inoxidáveis"] },
            { title: "Olhe ao longo de cada tábua", bullets: ["Encontre a coroa", "Coroa para cima nas vigas e nos caibros"] }
          ],
          tryIt: "Numa loja, numa página de madeira na internet ou em sua casa, encontre uma tábua e uma placa. Escreva o tamanho nominal e depois o tamanho real. Depois escolha um fixador para cada um destes trabalhos e escreva porquê: montar a estrutura de uma parede, um deck no exterior, uma prateleira perto da ponta de uma tábua.",
          youCanNow: "distinguir o tamanho nominal do tamanho real da madeira e escolher tábuas, placas e fixadores que servem para o trabalho.",
          quickCheck: [
            { objective: "O2", q: "Você empilha três 2x4 deitados. Mais ou menos que espessura tem a pilha?", options: ["4-1/2 polegadas", "6 polegadas", "3 polegadas", "10-1/2 polegadas"], answer: 0, why: "Um 2x4 tem na verdade cerca de 1-1/2 polegadas de espessura, e 3 x 1-1/2 = 4-1/2 polegadas." },
            { objective: "O2", q: "Que madeira usa para um poste que toca no chão no exterior?", options: ["Contraplacado para interior", "Qualquer 2x4 sem tratamento", "OSB", "Madeira tratada sob pressão"], answer: 3, why: "A madeira tratada sob pressão resiste ao apodrecimento e aos insetos que o contacto com o chão traz." }
          ]
        },
        {
          title: "Segurança com ferramentas e escadas",
          objectives: ["O3"],
          minutes: 6,
          goal: "Listar o equipamento de proteção e as verificações antes do uso para uma serra circular, uma pregadora e uma escada.",
          text: [
            "Os ferimentos na carpintaria vêm muitas vezes de serras, pregadoras, quedas e levantamento de pesos. Use sempre óculos de proteção, proteção auditiva perto de ferramentas barulhentas, botas de trabalho e, no estaleiro, capacete. Use uma máscara contra o pó quando o corte faz pó. Nada de mangas largas, joias ou cabelo comprido solto perto de uma lâmina. Se tiver menos de 18 anos, as regras federais dos Estados Unidos proíbem a maior parte do trabalho com serras elétricas e máquinas de madeira no emprego; os aprendizes e os estudantes-estagiários com 16 anos ou mais em programas aprovados têm uma exceção limitada.",
            "Antes de usar uma serra circular: verifique o cabo e a ficha ou a bateria, confirme que a proteção da lâmina volta sozinha ao lugar, use uma lâmina afiada feita para o material e prenda a peça com grampos para que não se mexa. Desligue a serra da tomada ou tire a bateria antes de mudar a lâmina. Fique ao lado da linha de corte, mantenha as duas mãos longe dela e deixe a lâmina parar antes de levantar a serra. Uma lâmina que prende pode atirar a serra para trás, contra você.",
            "Pregadoras: mantenha o dedo fora do gatilho até estar pronto, nunca aponte uma para ninguém e desligue o ar ou a bateria para desencravar. Uma ferramenta com gatilho de disparo único (sequencial) é mais segura para principiantes.",
            "Escadas (segundo o cartão de segurança de escadas da OSHA, a agência de segurança no trabalho dos Estados Unidos): inspecione-a primeiro, mantenha três pontos de contacto, fique virado para a escada, afaste a base cerca de 1 pé por cada 4 pés de altura até ao apoio de cima, faça-a passar pelo menos 3 pés acima do patamar e não suba ao último degrau, a não ser que seja feito para isso. Atenção às linhas elétricas, sobretudo com uma escada de metal."
          ],
          steps: ["Ponha os óculos de proteção, a proteção auditiva e as botas.", "Verifique o cabo, a ficha ou a bateria e a proteção da lâmina.", "Prenda a peça com grampos.", "Desligue da tomada ou tire a bateria antes de mudar a lâmina ou desencravar.", "Coloque e verifique a escada antes de subir."],
          words: [
            ["EPI", "equipamento de proteção individual: óculos de proteção, proteção auditiva, luvas, botas, capacete."],
            ["Proteção da lâmina", "a tampa que volta por cima da lâmina da serra quando o corte acaba."],
            ["Recuo (kickback)", "quando a lâmina prende e a serra salta para trás, na direção de quem a usa."],
            ["Três pontos de contacto", "duas mãos e um pé, ou dois pés e uma mão, sempre na escada."]
          ],
          slides: [
            { title: "Use sempre", bullets: ["Óculos de proteção e proteção auditiva", "Botas de trabalho; capacete no estaleiro", "Máscara contra o pó quando o corte faz pó"] },
            { title: "Verificações da serra circular", bullets: ["Cabo, ficha ou bateria em bom estado", "A proteção volta sozinha ao lugar", "Lâmina afiada; peça presa com grampos", "Desligue da tomada antes de mudar a lâmina"] },
            { title: "Durante o corte", bullets: ["Fique ao lado da linha de corte", "Mãos longe da lâmina", "Deixe a lâmina parar antes de levantar"] },
            { title: "Escadas (OSHA)", bullets: ["Inspecione primeiro; três pontos de contacto", "1 pé para fora por cada 4 pés de altura", "3 pés acima do patamar; nada de último degrau", "Procure linhas elétricas"] }
          ],
          sources: [
            { name: "OSHA QuickCard: Segurança com escadas portáteis (em inglês)", url: "https://www.osha.gov/sites/default/files/publications/portable_ladder_qc.pdf" },
            { name: "Departamento do Trabalho dos EUA: Regras de trabalho infantil fora da agricultura (Fact Sheet 43, em inglês)", url: "https://www.dol.gov/agencies/whd/fact-sheets/43-child-labor-non-agriculture" }
          ],
          tryIt: "Escreva num cartão uma lista de verificação de segurança antes do uso para uma serra circular (pelo menos quatro verificações e o equipamento que usa) e outra para uma escada extensível (pelo menos quatro verificações). Se tiver uma escada em casa, faça só a inspeção e a verificação da colocação de 1 por 4; não use uma serra elétrica em casa sem formação. Guarde o cartão para o seu dossiê inicial.",
          youCanNow: "listar o equipamento e as verificações antes de usar uma serra, uma pregadora ou uma escada, sabendo que o corte se aprende pessoalmente com um instrutor qualificado.",
          quickCheck: [
            { objective: "O3", q: "Precisa de mudar a lâmina de uma serra circular com cabo. O que faz primeiro?", options: ["Segurar o bloqueio do gatilho desligado", "Desligar a serra da tomada", "Usar só luvas", "Pedir a alguém para segurar a proteção aberta"], answer: 1, why: "Desligar da tomada (ou tirar a bateria) faz com que a serra não possa arrancar enquanto as suas mãos estão perto da lâmina." },
            { objective: "O3", q: "O apoio de cima está a 12 pés de altura numa parede. Mais ou menos a que distância fica a base da escada?", options: ["1 pé", "6 pés", "12 pés", "3 pés"], answer: 3, why: "A regra da OSHA é cerca de 1 pé para fora por cada 4 pés de altura: 12 / 4 = 3 pés." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Medir, materiais e segurança",
        questions: [
          { objective: "O1", q: "Quanto é 10 - 4-3/8?", options: ["6-3/8", "5-5/8", "6-5/8", "5-3/8"], answer: 1, why: "Peça emprestada uma polegada: 9-8/8 - 4-3/8 = 5-5/8." },
          { objective: "O2", q: "A sua planta diz que uma prateleira é um 1x10. Mais ou menos que largura tem a tábua na realidade?", options: ["10 polegadas", "9-1/2 polegadas", "1 polegada", "9-1/4 polegadas"], answer: 3, why: "Um 1x10 tem cerca de 3/4 por 9-1/4 polegadas; planeie com o tamanho real." },
          { objective: "O2", q: "Vai aparafusar numa tábua a 1 polegada da ponta. O que evita que ela rache?", options: ["Fazer primeiro um furo-guia", "Usar um parafuso mais comprido", "Bater no parafuso com um martelo", "Usar OSB em vez dela"], answer: 0, why: "Um furo-guia dá espaço ao parafuso para que a madeira perto da ponta não rache." },
          { objective: "O3", q: "Onde fica quando faz um corte com uma serra circular?", options: ["Mesmo atrás da lâmina", "À frente da serra", "Ao lado da linha de corte", "Em cima da tábua que está a cortar"], answer: 2, why: "Se a serra recuar, vem a direito para trás ao longo da linha de corte; ficar ao lado tira você do caminho." },
          { objective: "O3", q: "Qual é uma regra certa da OSHA para escadas?", options: ["Subir ao último degrau para chegar mais alto", "Usar uma escada de metal perto de linhas elétricas", "Manter uma mão na escada", "Manter três pontos de contacto ao subir"], answer: 3, why: "Três pontos de contacto (duas mãos e um pé, ou dois pés e uma mão) evitam que caia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Plantas, marcação e o seu caminho de entrada",
      lessons: [
        {
          title: "Ler uma planta e marcar uma parede de montantes",
          objectives: ["O4"],
          minutes: 6,
          goal: "Marcar uma parede de montantes de 8 pés a 16 polegadas de centro a centro e contar os montantes e as travessas.",
          text: [
            "Uma planta é um desenho à escala. Em muitas plantas de casas nos Estados Unidos, 1/4 de polegada no papel é igual a 1 pé na vida real. Uma planta do piso vê de cima; um alçado mostra uma parede de lado. Os comprimentos escrevem-se em pés e polegadas, como 12'-6\" (12 pés e 6 polegadas). Nunca meça uma planta impressa com uma régua para obter um tamanho; use as medidas escritas ou pergunte.",
            "A estrutura básica de uma parede tem uma travessa de baixo, uma travessa de cima (muitas vezes dupla) e montantes de pé entre elas. Os montantes ficam normalmente a 16 polegadas de centro a centro (o.c., em inglês \"on center\"), ou seja, 16 polegadas do centro de um montante ao centro do seguinte. Algumas paredes usam 24 polegadas de centro a centro; siga a planta.",
            "Para marcar: ponha as travessas de baixo e de cima lado a lado, meça a partir de uma ponta e marque as duas ao mesmo tempo. Marque o primeiro montante na ponta, depois marcas a 16, 32, 48, 64 e 80 polegadas. Muitos carpinteiros marcam 3/4 de polegada antes de cada linha (15-1/4, 31-1/4 e assim por diante) e põem um X no lado onde vai o montante, para que as bordas das placas de 4 pés caiam no centro dos montantes. Ponha um último montante na outra ponta.",
            "Contar os montantes: comprimento da parede em polegadas a dividir pelo espaçamento, mais um. Uma parede de 8 pés tem 96 polegadas; 96 / 16 = 6 espaços, por isso 7 montantes. Os cantos, as portas e as janelas precisam de montantes extra; a planta ou o seu supervisor mostra quais."
          ],
          steps: ["Leia na planta o comprimento da parede e o espaçamento dos montantes.", "Ponha as travessas de cima e de baixo lado a lado, com as pontas alinhadas.", "Marque as duas travessas juntas a partir da mesma ponta.", "Marque um X onde vai cada montante, e um montante em cada ponta.", "Conte: comprimento / espaçamento + 1, mais os extra que a planta mostra."],
          words: [
            ["Escala", "a relação entre o tamanho do desenho e o tamanho real, como 1/4 de polegada = 1 pé."],
            ["Planta do piso e alçado", "a planta do piso vê de cima; o alçado mostra um lado de uma parede ou de um edifício."],
            ["Travessa", "a tábua deitada em baixo ou em cima de uma parede, onde os montantes se apoiam e que eles seguram."],
            ["Montante", "uma tábua vertical na estrutura de uma parede, muitas vezes um 2x4 ou um 2x6."],
            ["De centro a centro (o.c.)", "medido do centro de um montante ao centro do seguinte."]
          ],
          slides: [
            { title: "Ler uma planta", bullets: ["Desenhada à escala, muitas vezes 1/4 pol. = 1 pé", "Planta do piso: de cima; alçado: de lado", "Use as medidas escritas, não uma régua"] },
            { title: "Partes de uma parede", bullets: ["Travessa de baixo e travessa de cima", "Montantes entre elas", "Normalmente a 16 pol. de centro a centro"] },
            { title: "Marcar", bullets: ["Travessas lado a lado, marque as duas juntas", "Marcas a 16, 32, 48, 64, 80 pol.", "Marque um X onde vai cada montante"] },
            { title: "Contar os montantes", bullets: ["Comprimento em polegadas / espaçamento + 1", "Parede de 8 pés: 96 / 16 = 6, por isso 7 montantes", "Some os extra para cantos, portas, janelas"] }
          ],
          tryIt: "No papel (ou numa tira comprida de cartão colada até 96 polegadas, se tiver espaço), desenhe uma parede de 8 pés. Marque a travessa de baixo a 16 polegadas de centro a centro a partir da ponta esquerda, ponha um X onde vai cada montante e escreva quantos montantes e travessas precisa. Verifique cada marca com a sua fita. Guarde-a para o seu dossiê inicial.",
          youCanNow: "ler a planta simples de uma parede e marcar montantes a 16 polegadas de centro a centro com a contagem certa.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer 16 polegadas de centro a centro?", options: ["16 polegadas entre as bordas de dois montantes", "16 polegadas do centro de um montante ao centro do seguinte", "16 montantes na parede", "Uma parede com 16 polegadas de largura"], answer: 1, why: "De centro a centro mede-se de um centro ao outro, por isso todos os montantes ficam com o mesmo espaçamento." },
            { objective: "O4", q: "Quantos montantes precisa uma parede de 12 pés a 16 polegadas de centro a centro, sem portas nem janelas?", options: ["10", "9", "12", "8"], answer: 0, why: "12 pés são 144 polegadas; 144 / 16 = 9 espaços, mais 1 = 10 montantes." }
          ]
        },
        {
          title: "Fazer uma lista de cortes",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever uma lista de cortes para um pequeno projeto, com tamanhos reais, margem para o corte e tábuas a comprar.",
          text: [
            "Uma lista de cortes é uma tabela com todas as peças de que precisa: o nome da peça, quantas, o material e o comprimento e a largura exatos. Poupa madeira, dinheiro e idas à loja, e no estaleiro permite que um ajudante corte enquanto o carpinteiro principal constrói.",
            "Use os tamanhos reais. Exemplo: uma prateleira com 24 polegadas de largura total, feita de 1x10. Os dois lados têm 3/4 de polegada de espessura cada, por isso a tábua da prateleira entre eles tem 24 - 3/4 - 3/4 = 22-1/2 polegadas de comprimento.",
            "Cada corte de serra transforma uma tira de madeira em pó. Essa tira é o corte da serra (em inglês \"kerf\"), cerca de 1/8 de polegada em muitas lâminas. Some um corte por cada vez que corta quando planeia quantas peças cabem numa tábua.",
            "Depois planeie as tábuas. De um 1x10 de 8 pés (96 polegadas): dois lados de 30 polegadas e uma prateleira de 22-1/2 polegadas usam 82-1/2 polegadas, mais 3 cortes (3/8 de polegada) dá 82-7/8 polegadas, e sobram cerca de 13 polegadas de resto. As tábuas nem sempre estão perfeitamente em esquadria nem têm exatamente 96 polegadas, por isso apare primeiro a ponta de fábrica e compre um pouco a mais."
          ],
          steps: ["Liste todas as peças com o nome e quantas.", "Calcule cada comprimento e largura a partir dos tamanhos reais.", "Separe as peças por material.", "Encaixe as peças em tábuas de comprimento padrão, somando um corte de serra por cada corte.", "Escreva quantas tábuas comprar, mais um pouco a mais."],
          words: [
            ["Lista de cortes", "uma tabela com todas as peças a cortar, com quantas, o material e os tamanhos."],
            ["Corte da serra (kerf)", "a largura de madeira que uma lâmina de serra tira num corte, muitas vezes cerca de 1/8 de polegada."],
            ["Resto", "a madeira que sobra depois de cortar todas as suas peças."]
          ],
          slides: [
            { title: "O que tem uma lista de cortes", bullets: ["Nome da peça e quantas", "Material", "Comprimento e largura exatos"] },
            { title: "Use os tamanhos reais", bullets: ["Prateleira de 24 pol. com lados de 3/4 pol.", "24 - 3/4 - 3/4 = tábua de prateleira de 22-1/2 pol."] },
            { title: "Conte com o corte da serra", bullets: ["Cada corte tira cerca de 1/8 pol.", "Some um corte de serra por cada corte"] },
            { title: "Encaixe as peças nas tábuas", bullets: ["Tábua de 96 pol.: 30 + 30 + 22-1/2 + 3/8", "= 82-7/8 pol., cerca de 13 pol. de resto", "Apare a ponta de fábrica; compre um pouco a mais"] }
          ],
          tryIt: "Desenhe uma pequena prateleira ou floreira com as medidas totais. Escreva uma lista de cortes (peça, quantas, material, comprimento, largura) com os tamanhos reais das tábuas. Depois encaixe as peças em tábuas de 8 pés com 1/8 de polegada por corte e escreva quantas tábuas comprar. Guarde-a para o seu dossiê inicial.",
          youCanNow: "escrever uma lista de cortes a partir de um pequeno desenho e calcular quantas tábuas comprar.",
          quickCheck: [
            { objective: "O5", q: "Uma caixa tem 18 polegadas de largura total, com lados de 3/4 de polegada. Que comprimento tem a tábua do fundo que cabe entre os lados?", options: ["18 polegadas", "17-1/4 polegadas", "16-1/2 polegadas", "18-3/4 polegadas"], answer: 2, why: "Subtraia a espessura dos dois lados: 18 - 3/4 - 3/4 = 16-1/2 polegadas." },
            { objective: "O5", q: "Porque é que soma cerca de 1/8 de polegada por cada corte?", options: ["A fita métrica está errada", "A madeira cresce depois de cortada", "As tábuas são sempre mais compridas do que se diz", "A lâmina da serra transforma essa madeira em pó"], answer: 3, why: "O corte da serra é a madeira que a lâmina tira, por isso as peças precisam desse espaço na tábua." }
          ]
        },
        {
          title: "O seu caminho: aprendizagem, NCCER e o primeiro emprego",
          objectives: ["O6"],
          minutes: 5,
          goal: "Encontrar dois programas de aprendizagem ou de formação em carpintaria e escrever um plano com datas para se candidatar.",
          text: [
            "O Gabinete de Estatísticas do Trabalho dos EUA (BLS) diz que os carpinteiros aprendem normalmente no trabalho ou numa aprendizagem, muitas vezes apoiada por sindicatos e associações de empreiteiros. Cada ano de aprendizagem junta aulas técnicas com trabalho pago. Normalmente é preciso o diploma do ensino secundário ou equivalente. Consulte o salário e as perspetivas na página do BLS, não em anúncios.",
            "Encontre programas em apprenticeship.gov: o Apprenticeship Finder mostra vagas por profissão e local, e o Partner Finder mostra as entidades que aceitam novos aprendizes. Pergunte também nos American Job Centers (centros públicos de emprego), nas faculdades comunitárias, nos centros de formação dos sindicatos, no Helmets to Hardhats (para antigos militares) e nos programas de pré-aprendizagem para a reintegração.",
            "A NCCER é uma organização nacional de formação em construção nos Estados Unidos. O seu currículo de carpintaria começa com Carpintaria Geral (com temas como materiais de construção e fixadores, plantas de construção, marcação do terreno e do edifício, pisos, paredes, estrutura do telhado e escadas). A certificação NCCER exige passar numa avaliação escrita e numa verificação prática do desempenho. Consulte nccer.org para saber onde fazer a formação e o exame perto de você.",
            "Muitos empregadores também pedem um cartão OSHA de 10 horas para a construção. Ter o seu próprio negócio de carpintaria ou de empreitadas pode exigir uma licença estadual ou local; os empregados trabalham normalmente com a licença do empreiteiro. Consulte o conselho de licenças de empreiteiros do seu estado. Tem menos de 18 anos? As regras federais limitam o trabalho com serras elétricas e em telhados; consulte dol.gov/youthrules."
          ],
          steps: ["Leia a página do BLS sobre carpinteiros para conhecer a formação e as perspetivas.", "Procure carpintaria perto de você em apprenticeship.gov; escolha dois programas.", "Escreva os requisitos e as datas de candidatura de cada programa.", "Junte os documentos: identificação, diploma ou GED e o que mais for pedido.", "Ponha uma data em cada passo e um lembrete no seu telefone."],
          words: [
            ["Aprendizagem", "um emprego pago com aulas, onde aprende uma profissão com trabalhadores experientes."],
            ["Pré-aprendizagem", "um programa curto que ensina matemática, ferramentas, segurança e competências de trabalho para ajudar a entrar numa aprendizagem."],
            ["NCCER", "o National Center for Construction Education and Research (Centro Nacional de Ensino e Investigação em Construção), que prepara formações em construção e dá credenciais."],
            ["Verificação do desempenho", "um exame prático em que um avaliador observa você a fazer tarefas reais."]
          ],
          slides: [
            { title: "Como os carpinteiros aprendem", bullets: ["No trabalho ou numa aprendizagem", "Aulas mais trabalho pago todos os anos", "Normalmente é preciso diploma ou equivalente"] },
            { title: "Encontrar programas", bullets: ["apprenticeship.gov: Apprenticeship Finder e Partner Finder", "American Job Centers, faculdades, centros sindicais", "Helmets to Hardhats; pré-aprendizagens para a reintegração"] },
            { title: "Carpintaria NCCER", bullets: ["Carpintaria Geral: materiais, plantas, marcação, estrutura", "Avaliação escrita mais verificação prática", "Consulte nccer.org para formação e exames"] },
            { title: "Outros passos", bullets: ["Cartão OSHA 10: muitos empregadores pedem", "Negócio próprio: consulte o conselho de licenças do seu estado", "Menos de 18 anos: consulte dol.gov/youthrules"] }
          ],
          sources: [
            { name: "Gabinete de Estatísticas do Trabalho dos EUA (BLS): Carpinteiros (Occupational Outlook Handbook, em inglês)", url: "https://www.bls.gov/ooh/construction-and-extraction/carpenters.htm" },
            { name: "Apprenticeship.gov: Apprenticeship Finder (em inglês)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "NCCER: Carpintaria (em inglês)", url: "https://www.nccer.org/craft-catalog/carpentry/" },
            { name: "NCCER: Credenciais reconhecidas pelo setor (em inglês)", url: "https://www.nccer.org/credentials-certifications/industry-recognized-credentials/" },
            { name: "Departamento do Trabalho dos EUA: YouthRules (em inglês)", url: "https://www.dol.gov/agencies/whd/youthrules" }
          ],
          tryIt: "Use apprenticeship.gov e os outros locais desta lição para encontrar dois programas de carpintaria perto de você. Para cada um, escreva o nome, os requisitos, como se candidatar e o prazo. Depois escreva o seu plano com uma data para cada passo: documentos, prática de matemática, OSHA 10, candidatura e acompanhamento. Guarde-o para o seu dossiê inicial.",
          youCanNow: "encontrar programas de carpintaria em sites oficiais e seguir um plano com datas para se candidatar.",
          quickCheck: [
            { objective: "O6", q: "Onde consulta o salário e as perspetivas de emprego dos carpinteiros?", options: ["Num anúncio nas redes sociais", "No Occupational Outlook Handbook do BLS", "Na página de vendas de uma escola de formação", "Num comentário de um vídeo"], answer: 1, why: "O BLS é a fonte oficial dos EUA para salários e perspetivas, atualizada com regularidade." },
            { objective: "O6", q: "Em que precisa de passar para ter uma certificação NCCER numa profissão?", options: ["Numa avaliação escrita e numa verificação prática do desempenho", "Só num vídeo na internet", "Num pagamento e nada mais", "Num exame estadual de condução"], answer: 0, why: "A NCCER diz que a certificação exige passar numa avaliação escrita e numa verificação do desempenho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Plantas, marcação e o seu caminho de entrada",
        questions: [
          { objective: "O4", q: "Numa planta desenhada a 1/4 de polegada = 1 pé, uma parede tem 3 polegadas no papel. Que comprimento tem a parede real?", options: ["3 pés", "6 pés", "12 pés", "16 pés"], answer: 2, why: "3 polegadas têm doze quartos de polegada, e cada um vale 1 pé, por isso a parede tem 12 pés." },
          { objective: "O4", q: "Porque é que marca as travessas de cima e de baixo lado a lado ao mesmo tempo?", options: ["Para que os montantes fiquem direitos e alinhados", "Para poupar lápis", "Porque a planta diz isso em todos os trabalhos", "Para precisar de menos montantes"], answer: 0, why: "Marcar as duas juntas põe o topo e a base de cada montante no mesmo sítio, por isso os montantes ficam a prumo e com o mesmo espaçamento." },
          { objective: "O5", q: "O que deve estar numa lista de cortes?", options: ["O número de telefone da loja", "O seu pagamento por hora", "O nome de cada peça, quantas, o material e o tamanho", "A cor da fita métrica"], answer: 2, why: "Uma lista de cortes tem todas as peças com a quantidade, o material e o tamanho exato." },
          { objective: "O5", q: "Precisa de quatro peças de 23-3/4 polegadas de uma tábua de 96 polegadas, com 1/8 de polegada por corte. Cabem?", options: ["Não, precisam de 100 polegadas", "Não, não há espaço para nenhum corte de serra", "Só cabem três", "Sim: 95 + 1/2 = 95-1/2 polegadas, sobra 1/2 polegada"], answer: 3, why: "4 x 23-3/4 = 95 polegadas, mais 4 cortes de 1/8 = 1/2 polegada, dá 95-1/2 polegadas, por isso cabem e sobra 1/2 polegada." },
          { objective: "O6", q: "Um site promete uma licença de carpintaria garantida se pagar hoje. O que faz?", options: ["Pagar antes que o preço suba", "Partilhar os seus dados bancários para reservar um lugar", "Inscrever-se porque parece oficial", "Consultar primeiro o conselho de licenças do seu estado e apprenticeship.gov"], answer: 3, why: "As licenças vêm do seu estado ou da sua cidade, não de um site pago; consulte primeiro as fontes oficiais." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Carpintaria",
    questions: [
      { objective: "O1", q: "A fita mostra 9 polegadas inteiras e 6 dezasseis avos depois. Qual é o comprimento?", options: ["9-1/4 polegadas", "9-3/8 polegadas", "9-6 polegadas", "9-1/2 polegadas"], answer: 1, why: "6/16 simplifica-se para 3/8, por isso o comprimento é 9-3/8 polegadas." },
      { objective: "O1", q: "Porque é que o gancho na ponta de uma fita métrica desliza um pouco?", options: ["Está avariado e deve ser endireitado", "Para tornar a fita mais leve", "Para poder ser limado", "Para que enganchar uma tábua e encostar a uma parede deem ambas a leitura certa"], answer: 3, why: "O gancho mexe-se o equivalente à sua própria espessura, por isso as leituras por dentro e por fora ficam ambas certas." },
      { objective: "O1", q: "Quanto é 2-5/8 + 1-3/4?", options: ["4-3/8", "3-8/12", "4-1/8", "3-7/8"], answer: 0, why: "3/4 é 6/8; 5/8 + 6/8 = 11/8 = 1-3/8, e 2 + 1 + 1-3/8 = 4-3/8." },
      { objective: "O2", q: "Mais ou menos qual é o tamanho real de um 2x6?", options: ["2 por 6 polegadas", "1-3/4 por 6 polegadas", "1-1/2 por 5-1/2 polegadas", "1 por 5 polegadas"], answer: 2, why: "Um 2x6 tem cerca de 1-1/2 por 5-1/2 polegadas; os tamanhos nominais são maiores do que os reais." },
      { objective: "O2", q: "Está a construir um deck no exterior. Que fixadores escolhe?", options: ["Fixadores revestidos ou inoxidáveis feitos para o exterior", "Pregos simples de interior", "Quaisquer parafusos da gaveta das tralhas", "Só cola de madeira"], answer: 0, why: "Os fixadores de exterior são revestidos ou inoxidáveis para não enferrujarem e falharem." },
      { objective: "O2", q: "Olha ao longo de uma viga do piso e vê uma ligeira curva. Para que lado fica?", options: ["Curva para baixo, para o chão", "Não interessa", "Cortar primeiro a curva", "Coroa para cima, para que o peso a deixe plana"], answer: 3, why: "As vigas e os caibros ficam com a coroa para cima, para que a carga empurre a curva e a deixe plana." },
      { objective: "O3", q: "Que equipamento usa sempre que trabalha com uma serra circular?", options: ["Só luvas", "Óculos de proteção e proteção auditiva", "Uma camisa larga de mangas compridas", "Nada, se o corte for curto"], answer: 1, why: "As serras atiram lascas e fazem muito barulho, por isso os olhos e os ouvidos ficam protegidos em cada corte." },
      { objective: "O3", q: "A proteção da lâmina da serra fica presa aberta e não volta ao lugar. O que faz?", options: ["Prendê-la aberta com fita e continuar a trabalhar", "Usá-la com cuidado só desta vez", "Parar, desligá-la da tomada e comunicar para ser reparada", "Tirar a proteção"], answer: 2, why: "Uma proteção que não fecha deixa a lâmina à mostra; a serra não é segura até ser reparada." },
      { objective: "O3", q: "Uma escada extensível chega à borda de um telhado. Quanto deve passar acima da borda?", options: ["Pelo menos 3 pés", "6 polegadas", "Deve parar logo abaixo da borda", "Pelo menos 10 pés"], answer: 0, why: "O cartão de escadas da OSHA diz que uma escada usada para chegar a uma superfície mais alta passa pelo menos 3 pés acima do apoio." },
      { objective: "O3", q: "Uma pregadora encrava. Qual é o primeiro passo seguro?", options: ["Olhar para dentro da ponta e carregar no gatilho", "Bater com ela no chão", "Apontá-la a um colega para testar", "Desligar o ar ou tirar a bateria"], answer: 3, why: "Cortar a energia faz com que a ferramenta não possa disparar enquanto as suas mãos estão perto dela." },
      { objective: "O4", q: "Numa planta do piso, uma medida diz 10'-6\". O que quer dizer?", options: ["10,6 pés", "10 pés e 6 polegadas", "106 polegadas", "10 polegadas e 6 pés"], answer: 1, why: "O ' quer dizer pés e o \" quer dizer polegadas: 10 pés e 6 polegadas." },
      { objective: "O4", q: "Quantos montantes precisa uma parede de 16 pés a 16 polegadas de centro a centro, sem aberturas?", options: ["16", "12", "13", "11"], answer: 2, why: "16 pés são 192 polegadas; 192 / 16 = 12 espaços, mais 1 = 13 montantes." },
      { objective: "O4", q: "Que marcas vão numa travessa marcada a 16 polegadas de centro a centro a partir de uma ponta?", options: ["16, 32, 48, 64, 80 polegadas", "12, 24, 36, 48 polegadas", "10, 20, 30, 40 polegadas", "16, 30, 46, 60 polegadas"], answer: 0, why: "16 polegadas de centro a centro quer dizer a cada 16 polegadas: 16, 32, 48, 64, 80." },
      { objective: "O5", q: "O que é o corte da serra (kerf)?", options: ["Um tipo de prego", "A curva ao longo de uma tábua", "O resto que sobra", "A madeira que uma lâmina de serra tira num corte"], answer: 3, why: "O corte da serra é a tira de madeira que a lâmina transforma em pó, muitas vezes cerca de 1/8 de polegada." },
      { objective: "O5", q: "Uma estante tem 30 polegadas de largura total, com lados de 3/4 de polegada. Que comprimento tem cada prateleira entre os lados?", options: ["30 polegadas", "28-1/2 polegadas", "29-1/4 polegadas", "29-1/2 polegadas"], answer: 1, why: "30 - 3/4 - 3/4 = 28-1/2 polegadas." },
      { objective: "O5", q: "Porque fazer uma lista de cortes antes de ir à loja?", options: ["A loja exige uma", "Torna a madeira mais forte", "Compra as tábuas certas e desperdiça menos", "Substitui a planta"], answer: 2, why: "Uma lista de cortes mostra todas as peças, por isso compra o número certo de tábuas e desperdiça menos madeira e dinheiro." },
      { objective: "O5", q: "As suas peças somam exatamente 96 polegadas com os cortes de serra, e tem uma tábua de 96 polegadas. O que faz?", options: ["Comprar uma tábua a mais, porque a ponta precisa de ser aparada e as tábuas variam", "Cortar sem medir", "Esquecer o corte da serra", "Fazer todas as peças 1 polegada mais curtas sem ver a planta"], answer: 0, why: "As pontas de fábrica muitas vezes não estão em esquadria e os comprimentos variam, por isso um plano sem margem precisa de uma tábua a mais." },
      { objective: "O6", q: "Onde pode procurar vagas de aprendizagem em carpintaria por profissão e local?", options: ["Num anúncio que aparece no ecrã", "Num grupo qualquer nas redes sociais", "Numa mensagem de um desconhecido", "No Apprenticeship Finder em apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov é o site oficial do Departamento do Trabalho dos EUA para as aprendizagens." },
      { objective: "O6", q: "O que é uma aprendizagem?", options: ["Uma aula grátis sem emprego", "Um emprego pago com aulas, onde aprende com trabalhadores experientes", "Uma licença que se compra na internet", "Um vídeo de segurança de um dia"], answer: 1, why: "Uma aprendizagem junta trabalho pago no emprego com aulas técnicas." },
      { objective: "O6", q: "Um dia quer abrir o seu próprio negócio de carpintaria. Onde consulta as regras de licenças?", options: ["No palpite de um amigo", "Num fórum qualquer na internet", "No conselho de licenças de empreiteiros do seu estado", "Na loja de madeira"], answer: 2, why: "As licenças de empreiteiro são definidas pelo seu estado ou pela sua cidade, por isso o conselho oficial tem as regras atuais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Medir com precisão", objective: "O1", notYet: "Menos de 4 de 5 leituras certas até 1/16 de polegada, ou as contas com frações não mostram o trabalho.", meets: "Pelo menos 4 de 5 leituras certas até 1/16 de polegada, e a soma e a diferença certas, com as contas mostradas.", exceeds: "As cinco leituras estão certas, todas as frações estão simplificadas e o aluno sabe explicar o gancho que desliza." },
      { name: "Lista de verificação de segurança", objective: "O3", notYet: "Falta equipamento de proteção, ou há menos de quatro verificações para a serra ou para a escada.", meets: "Diz o equipamento e pelo menos quatro verificações para a serra circular e para a escada extensível, incluindo desligar da tomada e a colocação de 1 por 4.", exceeds: "Também fala do recuo, das linhas elétricas e dos três pontos de contacto, e diz que a serra se aprende com um instrutor." },
      { name: "Marcação da parede", objective: "O4", notYet: "As marcas dos montantes estão desviadas mais de 1/16 de polegada, ou a contagem de montantes está errada.", meets: "Travessas marcadas a 16 polegadas de centro a centro a partir de uma ponta, um X em cada montante e a contagem certa (7 montantes para 8 pés).", exceeds: "Também mostra o desvio de 3/4 de polegada para as bordas das placas e indica montantes extra para cantos ou aberturas." },
      { name: "Lista de cortes", objective: "O5", notYet: "Usa tamanhos nominais, esquece o corte da serra, ou as peças não cabem nas tábuas da lista.", meets: "Todas as peças com quantidade, material e tamanho real; corte da serra somado; todas as peças cabem nas tábuas a comprar.", exceeds: "Também mostra o resto que sobra em cada tábua e um pouco a mais para aparar." },
      { name: "Materiais escolhidos", objective: "O2", notYet: "A tábua ou o fixador não serve para o trabalho (por exemplo, madeira sem tratamento a tocar no chão).", meets: "A madeira e os fixadores servem para o projeto, com os tamanhos reais escritos.", exceeds: "Explica porque cada escolha serve, como fixadores para exterior ou a direção da coroa." },
      { name: "Plano com datas a partir de fontes oficiais", objective: "O6", notYet: "Os passos não têm datas, ou os programas e as regras vêm de anúncios ou publicações.", meets: "Dois programas reais com requisitos e prazos tirados de sites oficiais, e uma data para cada passo.", exceeds: "Também indica um programa de reserva e uma pessoa ou um serviço a quem ligar com perguntas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (rubrica)",
      "Alunos que se candidatam a uma aprendizagem, pré-aprendizagem ou programa de formação NCCER em carpintaria nos 30 dias seguintes (inquérito de acompanhamento)",
      "Alunos aceites num programa ou contratados como ajudante de carpinteiro ou aprendiz nos 90 dias seguintes",
      "Alunos que obtêm um cartão OSHA 10 para a construção ou uma credencial NCCER depois do curso",
      "Os parceiros dos programas dizem que menos formandos novos chumbam nas verificações de entrada de matemática ou de segurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Uma fita métrica (16 ou 25 pés), um lápis, papel e uma régua; uma calculadora ajuda",
      "Um telefone ou um computador da biblioteca para os sites oficiais (bls.gov, apprenticeship.gov, nccer.org, dol.gov)",
      "Opcional: uma tira comprida de cartão ou um resto de tábua para praticar a marcação da parede",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Numa sala de aula ou num programa de emprego: façam o teste inicial juntos, depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Façam exercícios de fita métrica e de frações em grupo; muitos alunos precisam de mais prática com os dezasseis avos.",
      "Não deixe os alunos usar serras ou pregadoras como parte deste curso. O uso prático das ferramentas é ensinado pessoalmente por um instrutor qualificado, com o equipamento de proteção certo.",
      "Para jovens com menos de 18 anos, siga as regras federais e estaduais sobre trabalho infantil; a maior parte do trabalho com serras elétricas e em telhados é proibida fora de programas aprovados de aprendizes ou de estudantes-estagiários.",
      "Avalie a tarefa final com a rubrica e convide um centro de formação sindical, um empreiteiro ou um programa de pré-aprendizagem local para rever os dossiês iniciais."
    ]
  }
};
