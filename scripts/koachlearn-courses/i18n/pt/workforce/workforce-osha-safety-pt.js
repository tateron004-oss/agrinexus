"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-osha-safety.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: OSHA names, numbers and rules stay as in the English.

module.exports = {
  id: "workforce-osha-safety-pt",
  lang: "pt",
  translationOf: "workforce-osha-safety",
  category: "Workforce Development",
  name: "Noções Básicas de Segurança no Trabalho (OSHA)",
  skills: "Identificar perigos, Escolher e usar EPI, Prevenir escorregadelas, tropeções e quedas, Levantar cargas com segurança, Ler uma ficha de dados de segurança, Comunicar lesões e usar os seus direitos de segurança",
  outcome: "percorrer um local de trabalho e identificar perigos, escolher o EPI certo, levantar e mover cargas com segurança, encontrar o que precisa numa ficha de dados de segurança, comunicar uma lesão ou um perigo da forma certa, e explicar o seu direito a um trabalho seguro e o que são o OSHA 10 e o OSHA 30.",
  about: [
    "Este curso é para quem está a começar ou já trabalha em armazéns, construção, cozinhas, limpeza, comércio, fábricas, saúde ou qualquer trabalho onde as pessoas se podem magoar. Ensina as noções básicas de segurança que os empregadores esperam desde o primeiro dia.",
    "Vai praticar uma ronda de perigos, aprender a usar o equipamento de proteção, prevenir as lesões mais comuns (escorregadelas, tropeções, quedas e distensões ao levantar peso), ler a ficha de dados de segurança de um produto químico e saber comunicar uma lesão ou um perigo. Também vai aprender os seus direitos perante a OSHA (Occupational Safety and Health Administration, a agência federal dos Estados Unidos para a segurança e saúde no trabalho) e o que são os cartões OSHA de 10 horas e de 30 horas.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Este curso é educação geral sobre segurança. Siga sempre a formação e as regras do seu empregador para o seu trabalho e consulte osha.gov para as regras atuais."
  ],
  finalTask: "Faça uma ronda de perigos de 10 minutos num lugar real (o seu local de trabalho, um armazém, uma garagem ou a sua casa). Escreva um relatório de perigos com pelo menos cinco perigos, o tipo de cada um (escorregadela/tropeção/queda, levantamento de peso, químico, máquina, elétrico, outro), o EPI ou a correção necessária e a quem comunicaria cada um. Acrescente as secções da ficha de dados de segurança que leria para um produto químico que encontrou e escreva os passos que daria se alguém se magoasse.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de emprego e trabalhadores novos ou atuais em armazéns, construção, cozinhas, limpeza, comércio, fábricas e saúde, incluindo jovens trabalhadores, pessoas que mudam de profissão e pessoas que voltam ao trabalho.",
    startingPoint: "Têm alguma experiência de trabalho ou de casa e notam os perigos óbvios, mas nunca aprenderam a fazer uma ronda de perigos, a ler uma ficha de dados de segurança, a comunicar uma lesão nem quais são os seus direitos perante a OSHA.",
    gap: "Os empregadores esperam hábitos básicos de segurança desde o primeiro dia. Os trabalhadores que não sabem identificar perigos, escolher o EPI, levantar peso com segurança ou comunicar uma lesão da forma certa magoam-se mais e podem perder o direito à indemnização por acidente de trabalho. Saber estas noções também ajuda a ser contratado e a falar com segurança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um telefone ou um computador partilhado; a prática usa uma divisão em casa ou no trabalho",
      "Tempo: lições de cerca de cinco minutos, que cabem entre os turnos de trabalho",
      "Só educação geral sobre segurança: os alunos seguem a formação do seu empregador e consultam osha.gov para as regras atuais",
      "A prática tem de ser segura: sem subir a lugares altos, sem levantar cargas pesadas sozinho e sem misturar produtos químicos"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Durante uma ronda por um local de trabalho, um armazém ou uma casa", action: "identificar perigos, dizer o tipo de cada um e decidir se o corrige ou o comunica", standard: "listando pelo menos cinco perigos com o tipo certo" },
    { id: "O2", condition: "Com uma tarefa de trabalho e os seus perigos", action: "escolher e verificar o EPI certo para cada perigo", standard: "fazendo corresponder o equipamento a todos os perigos e detetando o equipamento danificado" },
    { id: "O3", condition: "Ao trabalhar em pisos, escadas de mão ou com cargas", action: "mostrar os passos que previnem escorregadelas, tropeções e quedas e um levantamento seguro", standard: "seguindo todos os passos sem torcer as costas" },
    { id: "O4", condition: "Com um produto químico", action: "encontrar os perigos, o EPI e os primeiros socorros no rótulo e na ficha de dados de segurança", standard: "dizendo as secções certas da FDS (2, 4 e 8)" },
    { id: "O5", condition: "Quando alguém se magoa ou você encontra um perigo", action: "listar os passos de resposta e escrever um pequeno relatório de lesão ou de perigo", standard: "incluindo o quê, quando, onde e quem viu, comunicado logo" },
    { id: "O6", condition: "Com um problema de segurança que não foi corrigido ou um trabalho que quer", action: "explicar os seus direitos de segurança, como apresentar uma queixa à OSHA e se o OSHA 10 ou o OSHA 30 lhe serve", standard: "dizendo os passos e o curso certos sem ajuda" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Identificar e prevenir perigos",
      lessons: [
        {
          objectives: ["O1"],
          title: "Identificar perigos com uma ronda de perigos",
          minutes: 5,
          goal: "Percorrer uma área e listar os perigos que vê, por tipo.",
          text: [
            "Um perigo é qualquer coisa no trabalho que pode magoar alguém: um chão molhado, um cabo atravessado num corredor, uma caixa pesada numa prateleira alta, uma máquina sem a sua proteção, um produto químico a verter, barulho forte ou uma saída bloqueada.",
            "Uma ronda de perigos é uma volta lenta e planeada por uma área. Olhe para baixo (chão, cabos, líquidos derramados), olhe para cima (prateleiras altas, cargas suspensas, escadas de mão), olhe à volta (máquinas, veículos, produtos químicos, saídas, extintores) e escute (barulho forte, alarmes, sons estranhos dos equipamentos).",
            "Agrupe o que encontrar: escorregadelas, tropeções e quedas; levantamento de peso e distensões; produtos químicos; máquinas e peças em movimento; eletricidade; veículos como empilhadores; calor, frio e barulho; e incêndio e saídas.",
            "Quando encontrar um perigo, corrija-o logo se for pequeno e seguro fazê-lo (limpar um líquido derramado, tirar uma caixa do corredor) e depois avise o seu supervisor. Se não for seguro ou se não teve formação, mantenha as pessoas afastadas e comunique-o."
          ],
          steps: ["Escolha uma área e ande devagar.", "Olhe para baixo: chão, cabos, líquidos derramados.", "Olhe para cima: prateleiras, cargas suspensas, escadas de mão.", "Olhe à volta: máquinas, veículos, produtos químicos, saídas.", "Escreva cada perigo e o seu tipo.", "Corrija os pequenos se for seguro e comunique tudo ao seu supervisor."],
          words: [["Perigo", "algo no trabalho que pode causar uma lesão ou uma doença."], ["Ronda de perigos", "uma volta lenta e planeada por uma área para procurar perigos."], ["Proteção da máquina", "uma tampa ou barreira numa máquina que mantém as mãos e o corpo longe das peças em movimento."]],
          slides: [
            { title: "O que é um perigo", bullets: ["Qualquer coisa que pode magoar alguém", "Chão molhado, cabos soltos, proteções em falta", "Produtos químicos, barulho, saídas bloqueadas"] },
            { title: "Olhe para baixo, para cima e à volta", bullets: ["Baixo: chão, cabos, líquidos derramados", "Cima: prateleiras altas, cargas suspensas", "À volta: máquinas, veículos, saídas"] },
            { title: "Tipos de perigo", bullets: ["Escorregadelas, tropeções e quedas; levantar peso", "Produtos químicos; máquinas; eletricidade", "Veículos; calor, frio, barulho; incêndio"] },
            { title: "O que fazer", bullets: ["Corrija os perigos pequenos se for seguro", "Mantenha as pessoas longe dos grandes", "Avise sempre o seu supervisor"] }
          ],
          tryIt: "Faça uma ronda de perigos de cinco minutos numa divisão da sua casa, num armazém ou no seu local de trabalho. Escreva pelo menos cinco perigos e o tipo de cada um.",
          youCanNow: "percorrer uma área, identificar perigos por tipo e decidir se corrige ou comunica cada um.",
          quickCheck: [
            { objective: "O1", q: "Numa ronda de perigos, o que quer dizer verificar \"olhando para baixo\"?", options: ["Chão, cabos e líquidos derramados", "Prateleiras altas e escadas de mão", "Máquinas e veículos", "Alarmes e sons estranhos"], answer: 0, why: "Olhar para baixo é verificar o chão: cabos, líquidos derramados e coisas em que pode tropeçar." },
            { objective: "O1", q: "Encontra uma máquina sem a proteção e não teve formação para a reparar. O que faz?", options: ["Repara-a você mesmo depressa", "Mantém as pessoas afastadas e comunica", "Ignora até à hora do intervalo", "Continua a usar a máquina com cuidado"], answer: 1, why: "Se não é seguro para você corrigir um perigo, mantenha as pessoas afastadas e comunique-o." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usar o EPI da forma certa",
          minutes: 5,
          goal: "Escolher, verificar e usar o equipamento de proteção certo para uma tarefa.",
          text: [
            "O equipamento de proteção individual (EPI) é o que você veste ou usa para proteger o corpo: óculos de segurança, viseiras, capacetes, luvas, botas com biqueira de proteção, proteção auditiva (tampões ou abafadores), coletes de alta visibilidade, máscaras respiratórias e arneses contra quedas.",
            "Faça corresponder o equipamento ao perigo: óculos para lascas que saltam ou salpicos; as luvas certas para o trabalho (resistentes a cortes para lâminas, luvas químicas para produtos químicos, como diz a ficha de dados de segurança); proteção auditiva para ferramentas barulhentas; capacete onde podem cair coisas; colete de alta visibilidade perto de veículos.",
            "Verifique-o antes de cada uso: sem fissuras, buracos ou correias gastas. Tem de servir bem. Uma máscara respiratória precisa de um teste de ajuste e de formação antes de ser usada.",
            "O EPI é a última linha de defesa. É melhor eliminar primeiro o perigo, por exemplo pondo uma proteção numa máquina ou guardando os objetos pesados em baixo. Pelas regras da OSHA, os empregadores em geral têm de fornecer o EPI obrigatório e ensinar você a usá-lo."
          ],
          steps: ["Veja a tarefa e os seus perigos.", "Escolha o EPI que corresponde a cada perigo.", "Verifique se tem danos.", "Vista-o e verifique se serve bem.", "Limpe-o e guarde-o depois de usar; comunique o equipamento danificado."],
          words: [["EPI", "equipamento de proteção individual: o que você usa para se proteger dos perigos."], ["Máscara respiratória", "uma máscara que protege os pulmões do pó, fumos ou gases; precisa de um teste de ajuste e de formação."], ["Teste de ajuste", "uma verificação de que a máscara respiratória fica bem vedada no rosto."]],
          slides: [
            { title: "EPI comum", bullets: ["Olhos e rosto: óculos, óculos fechados, viseiras", "Cabeça, mãos, pés: capacetes, luvas, botas", "Ouvidos, pulmões, visibilidade: tampões, máscaras, coletes"] },
            { title: "O equipamento certo para o perigo", bullets: ["Lascas que saltam: óculos de segurança", "Produtos químicos: as luvas que a ficha de dados de segurança indica", "Ferramentas barulhentas: proteção auditiva"] },
            { title: "Verifique antes de cada uso", bullets: ["Sem fissuras, buracos ou correias gastas", "Tem de servir bem", "Máscaras respiratórias: teste de ajuste e formação"] },
            { title: "A última linha de defesa", bullets: ["Elimine primeiro o perigo, se puder", "Em geral, o empregador tem de fornecer o EPI obrigatório"] }
          ],
          sources: [
            { name: "OSHA: Personal protective equipment (equipamento de proteção individual)", url: "https://www.osha.gov/personal-protective-equipment" }
          ],
          tryIt: "Pense em três tarefas: cortar caixas com um x-ato, passar a esfregona com um produto de limpeza e usar um soprador de folhas. Para cada uma, escreva o EPI que usaria e porquê.",
          youCanNow: "escolher, verificar e usar o EPI certo para uma tarefa, e saber que é a última linha de defesa.",
          quickCheck: [
            { objective: "O2", q: "Qual é a principal razão para verificar o EPI antes de cada uso?", options: ["Ver se é o modelo mais novo", "Ter a certeza de que a cor combina", "Encontrar fissuras, buracos ou correias gastas", "Contar quantos tem"], answer: 2, why: "O equipamento danificado pode não proteger, por isso verifica-se antes de cada uso." },
            { objective: "O2", q: "Vai cortar caixas com um x-ato o dia todo. Que luvas escolhe?", options: ["Luvas químicas", "Luvas finas de pano", "Nenhumas luvas", "Luvas resistentes a cortes"], answer: 3, why: "As luvas resistentes a cortes correspondem ao perigo de uma lâmina." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escorregadelas, tropeções, quedas e levantar peso com segurança",
          minutes: 5,
          goal: "Prevenir escorregadelas, tropeções e quedas e levantar uma carga com segurança.",
          text: [
            "As escorregadelas, os tropeções e as quedas estão entre as lesões de trabalho mais comuns. Para as prevenir: limpe logo os líquidos derramados e ponha um sinal de chão molhado; mantenha os corredores livres de cabos, caixas e mangueiras; use os corrimãos; use sapatos com boa aderência; e mantenha as áreas de trabalho bem iluminadas.",
            "Trabalho em altura: use a escada de mão certa, ponha-a em chão firme e nivelado, mantenha três pontos de apoio (duas mãos e um pé, ou dois pés e uma mão) e nunca suba ao último degrau. A proteção contra quedas, como guarda-corpos ou um arnês, é obrigatória a partir de certas alturas; a regra geral da OSHA é 4 pés (cerca de 1,2 m) na indústria em geral e 6 pés (cerca de 1,8 m) na construção. Siga a formação do seu local de trabalho.",
            "Levantar peso: planeie o levantamento e verifique o peso. Peça ajuda ou use um carrinho, um porta-paletes ou um empilhador para cargas pesadas ou difíceis de agarrar. Fique perto, com os pés afastados, dobre os joelhos, mantenha as costas direitas, segure a carga junto ao corpo, levante com as pernas e vire com os pés em vez de torcer as costas.",
            "Comunique a dor cedo. As pequenas distensões pioram se continuar a trabalhar com elas."
          ],
          steps: ["Limpe os líquidos derramados e sinalize o chão molhado.", "Mantenha os corredores livres.", "Numa escada de mão: chão firme, três pontos de apoio, não no último degrau.", "Antes de levantar: verifique o peso e peça ajuda ou um carrinho se for preciso.", "Levantar: dobre os joelhos, costas direitas, carga junto ao corpo, levante com as pernas, vire com os pés."],
          words: [["Três pontos de apoio", "ter sempre duas mãos e um pé, ou dois pés e uma mão, na escada de mão."], ["Proteção contra quedas", "guarda-corpos, redes de segurança ou arneses que impedem ou travam as quedas em altura."]],
          slides: [
            { title: "Evite escorregadelas e tropeções", bullets: ["Limpe o que derramou; use sinais de chão molhado", "Tire cabos e caixas dos corredores", "Bons sapatos e boa iluminação"] },
            { title: "Escadas de mão e altura", bullets: ["Chão firme e nivelado", "Três pontos de apoio; não no último degrau", "Proteção contra quedas: 4 pés indústria em geral, 6 pés construção"] },
            { title: "Levantar peso com segurança", bullets: ["Verifique o peso; peça ajuda ou um carrinho", "Dobre os joelhos, costas direitas, carga junto ao corpo", "Levante com as pernas; vire com os pés"] },
            { title: "Comunique a dor cedo", bullets: ["As pequenas distensões pioram se forem ignoradas"] }
          ],
          sources: [
            { name: "OSHA: Fall protection (proteção contra quedas)", url: "https://www.osha.gov/fall-protection" },
            { name: "OSHA: Walking-working surfaces (superfícies de passagem e de trabalho)", url: "https://www.osha.gov/walking-working-surfaces" }
          ],
          tryIt: "Pratique um levantamento seguro com uma caixa de livros ou de compras: verifique o peso, fique perto, dobre os joelhos, mantenha as costas direitas, levante com as pernas e vire com os pés. Depois escreva três coisas que corrigiria para evitar escorregadelas e tropeções onde trabalha ou vive.",
          youCanNow: "prevenir escorregadelas, tropeções e quedas, usar uma escada de mão com segurança e levantar uma carga da forma certa.",
          quickCheck: [
            { objective: "O3", q: "Onde nunca deve ficar de pé quando usa uma escada de mão?", options: ["No último degrau", "No primeiro degrau", "Num degrau do meio", "Em chão firme e nivelado"], answer: 0, why: "No último degrau é fácil perder o equilíbrio e cair." },
            { objective: "O3", q: "Precisa de se virar enquanto carrega uma caixa. Como faz?", options: ["Torce a cintura", "Vira com os pés", "Segura a caixa longe do corpo", "Estica os joelhos e gira"], answer: 1, why: "Virar com os pés mantém as costas direitas e evita distensões." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Identificar e prevenir perigos",
        questions: [
          { objective: "O1", q: "Vê um cabo elétrico esticado num corredor. Que tipo de perigo é?", options: ["Químico", "Barulho", "Escorregadela, tropeção ou queda", "Calor"], answer: 2, why: "Os cabos atravessados nos corredores fazem as pessoas tropeçar." },
          { objective: "O1", q: "O que deve fazer com um pequeno líquido derramado que pode limpar com segurança?", options: ["Passar à volta", "Limpá-lo, sinalizar o chão se estiver molhado e avisar o supervisor", "Tapá-lo com uma caixa", "Esperar pelo próximo turno"], answer: 1, why: "Corrigir logo os perigos pequenos e comunicá-los previne lesões." },
          { objective: "O2", q: "Que EPI serve para um trabalho com um soprador de folhas barulhento?", options: ["Proteção auditiva", "Só um capacete", "Um arnês contra quedas", "Nada"], answer: 0, why: "A proteção auditiva protege do barulho forte." },
          { objective: "O2", q: "Porque se diz que o EPI é a última linha de defesa?", options: ["É o mais caro", "É opcional", "Impede sempre todas as lesões", "É melhor eliminar primeiro o perigo"], answer: 3, why: "Eliminar ou proteger um perigo protege toda a gente; o EPI só protege quem o usa." },
          { objective: "O3", q: "Qual é um hábito seguro para levantar peso?", options: ["Torcer as costas para se virar", "Segurar a carga longe do corpo", "Dobrar os joelhos, manter a carga junto ao corpo e virar com os pés", "Levantar cargas pesadas sozinho para poupar tempo"], answer: 2, why: "Assim o esforço fica nas pernas, não nas costas." }
        ]
      }
    },
    {
      name: "Capítulo 2: Produtos químicos, lesões e os seus direitos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Produtos químicos e fichas de dados de segurança",
          minutes: 5,
          goal: "Encontrar os perigos, o EPI e os primeiros socorros de um produto químico na sua ficha de dados de segurança.",
          text: [
            "Muitos locais de trabalho usam produtos químicos perigosos: produtos de limpeza, lixívia, desengordurantes, tinta, combustível, pesticidas. A Norma de Comunicação de Perigos da OSHA (Hazard Communication Standard) diz que os trabalhadores têm o direito de conhecer os produtos químicos com que trabalham.",
            "As embalagens têm de ter rótulos com o nome do produto, pictogramas (símbolos com borda vermelha), uma palavra-sinal (\"Danger\", Perigo, para os perigos mais graves, e \"Warning\", Atenção, para os menos graves) e frases de perigo e de precaução.",
            "Cada produto químico perigoso tem uma ficha de dados de segurança (FDS; em inglês, SDS) com 16 secções sempre pela mesma ordem. As mais úteis: Secção 2, perigos; Secção 4, primeiros socorros; Secção 7, manuseamento e armazenamento seguros; Secção 8, controlo da exposição e EPI. O seu empregador tem de ter as FDS dos produtos que você usa e dar-lhe formação sobre elas. Pergunte onde estão guardadas.",
            "Hábitos seguros: nunca misture produtos químicos (lixívia e amoníaco fazem um gás tóxico), mantenha os produtos em embalagens com rótulo, use o EPI da Secção 8 e trabalhe com boa ventilação."
          ],
          steps: ["Leia o rótulo da embalagem: nome, pictogramas, palavra-sinal.", "Encontre a FDS do produto.", "Secção 2: quais são os perigos?", "Secção 8: de que EPI preciso?", "Secção 4: quais são os primeiros socorros?", "Nunca misture produtos químicos e mantenha-os com rótulo."],
          words: [["Ficha de dados de segurança (FDS)", "um documento de 16 secções sobre um produto químico: os seus perigos, manuseamento seguro, EPI e primeiros socorros. Em inglês: safety data sheet (SDS)."], ["Pictograma", "um símbolo dentro de um losango vermelho no rótulo de um produto químico que mostra o tipo de perigo."], ["Palavra-sinal", "\"Danger\" (Perigo, mais grave) ou \"Warning\" (Atenção, menos grave) no rótulo de um produto químico."]],
          slides: [
            { title: "O seu direito de saber", bullets: ["Rótulos em todas as embalagens", "Uma ficha de dados de segurança para cada produto perigoso", "Formação sobre os produtos que usa"] },
            { title: "Leia o rótulo", bullets: ["Nome do produto", "Pictogramas em losangos vermelhos", "Palavra-sinal: Danger (Perigo) ou Warning (Atenção)"] },
            { title: "Secções da FDS a conhecer", bullets: ["2: perigos", "4: primeiros socorros", "7: manuseamento e armazenamento", "8: controlo da exposição e EPI"] },
            { title: "Hábitos seguros", bullets: ["Nunca misture produtos químicos", "Mantenha tudo com rótulo", "Use o EPI da Secção 8"] }
          ],
          sources: [
            { name: "OSHA: Hazard Communication (comunicação de perigos)", url: "https://www.osha.gov/hazcom" }
          ],
          tryIt: "Encontre um produto de limpeza em casa ou no trabalho. Leia o rótulo (pictogramas e palavra-sinal). Depois procure o nome do produto mais \"safety data sheet\" no site do fabricante e escreva o que dizem as Secções 2, 4 e 8.",
          youCanNow: "ler o rótulo de um produto químico e encontrar os perigos, o EPI e os primeiros socorros na sua ficha de dados de segurança.",
          quickCheck: [
            { objective: "O4", q: "O que é um pictograma no rótulo de um produto químico?", options: ["O preço do produto", "O número de telefone do fabricante", "Um símbolo com borda vermelha que mostra um perigo", "A data de fabrico"], answer: 2, why: "Os pictogramas são símbolos com borda vermelha que mostram o tipo de perigo." },
            { objective: "O4", q: "Um produto salpica o olho de um colega. Que secção da FDS consulta?", options: ["Secção 2", "Secção 7", "Secção 8", "Secção 4"], answer: 3, why: "A Secção 4 da ficha de dados de segurança dá os passos de primeiros socorros." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Comunicar lesões e perigos",
          minutes: 5,
          goal: "Dar os passos certos quando alguém se magoa e comunicar da forma correta.",
          text: [
            "Se alguém estiver gravemente ferido, ligue primeiro para o 911 (o número de emergência dos Estados Unidos) ou para o número de emergência do seu local de trabalho. Não mexa na pessoa, a não ser que esteja em perigo. Chame a pessoa com formação em primeiros socorros, se o seu local tiver uma.",
            "Comunique logo ao seu supervisor todas as lesões ou doenças do trabalho, mesmo as pequenas, como um corte ou uma distensão. Comunicar cedo dá-lhe tratamento, protege o seu direito à indemnização por acidente de trabalho (workers' compensation) no seu estado e ajuda a corrigir o perigo para não magoar outra pessoa. Escreva o que aconteceu, quando, onde e quem viu.",
            "Os empregadores também têm deveres. Têm de comunicar à OSHA em 8 horas se um trabalhador morrer num acidente de trabalho, e em 24 horas se um trabalhador for internado num hospital, sofrer uma amputação ou perder um olho. Muitos empregadores também têm de manter registos de lesões, e os trabalhadores têm o direito de os ver.",
            "Comunique os perigos da mesma forma: avise o seu supervisor, escreva e mantenha as pessoas afastadas até estar corrigido. As regras da OSHA proíbem o empregador de castigar você por comunicar uma lesão ou um perigo."
          ],
          steps: ["Lesão grave: ligue primeiro para o 911 ou para o número de emergência do local.", "Receba primeiros socorros de uma pessoa com formação.", "Avise logo o seu supervisor, mesmo em lesões pequenas.", "Escreva o quê, quando, onde e quem viu.", "Pergunte sobre a indemnização por acidente de trabalho e acompanhe a correção."],
          words: [["Indemnização por acidente de trabalho (workers' compensation)", "seguro estadual que paga as despesas médicas e parte do salário perdido por lesões de trabalho."], ["Registo de lesões", "o registo do empregador com as lesões e doenças do trabalho; os trabalhadores têm o direito de o ver."]],
          slides: [
            { title: "Lesão grave", bullets: ["Ligue para o 911 ou o número de emergência do local", "Não mexa na pessoa, a não ser que esteja em perigo", "Chame a pessoa com formação em primeiros socorros"] },
            { title: "Comunique todas as lesões", bullets: ["Avise logo o seu supervisor", "Escreva o quê, quando, onde e quem viu", "Protege o seu pedido de indemnização"] },
            { title: "Deveres do empregador", bullets: ["Morte: comunicar à OSHA em 8 horas", "Internamento, amputação, perda de um olho: 24 horas", "Manter registos de lesões que os trabalhadores podem ver"] },
            { title: "Comunicar está protegido", bullets: ["Castigar você por comunicar é ilegal"] }
          ],
          sources: [
            { name: "OSHA: Report a fatality or severe injury (comunicar uma morte ou lesão grave)", url: "https://www.osha.gov/report" },
            { name: "OSHA: 29 CFR 1904.39 reporting rule (regra de comunicação)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1904/1904.39" }
          ],
          tryIt: "Escreva os passos que daria se um colega cortasse a mão gravemente com um x-ato. Depois escreva um pequeno relatório de lesão: o que aconteceu, quando, onde, quem viu e o que deve mudar.",
          youCanNow: "responder a uma lesão, comunicá-la da forma correta e a tempo, e saber o que o seu empregador tem de comunicar.",
          quickCheck: [
            { objective: "O5", q: "Que dados devem estar num relatório de lesão?", options: ["O que aconteceu, quando, onde e quem viu", "Só o nome do trabalhador ferido", "Quem você acha que tem a culpa", "A sua opinião sobre o supervisor"], answer: 0, why: "Um relatório claro diz o que aconteceu, quando, onde e quem viu." },
            { objective: "O5", q: "Faz uma distensão nas costas ao levantar peso, mas só dói um pouco. O que faz?", options: ["Continua a trabalhar e não diz nada", "Avisa logo o seu supervisor", "Espera um mês para ver se piora", "Só conta a um colega"], answer: 1, why: "Comunicar cedo dá-lhe tratamento e protege o seu direito à indemnização." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Os seus direitos de segurança, OSHA 10 e OSHA 30",
          minutes: 5,
          goal: "Explicar o seu direito a um trabalho seguro, como apresentar uma queixa à OSHA e o que são o OSHA 10 e o OSHA 30.",
          text: [
            "Pela Lei de Segurança e Saúde no Trabalho (Occupational Safety and Health Act), o seu empregador tem de oferecer um local de trabalho sem perigos graves conhecidos. Você tem direito a formação numa língua que entende, ao equipamento de segurança obrigatório, a ver os registos de lesões e os resultados de testes sobre perigos, a comunicar perigos e a pedir à OSHA que inspecione o seu local de trabalho.",
            "Se um perigo não for corrigido, pode apresentar uma queixa à OSHA pela internet, por telefone para o 1-800-321-OSHA (6742), por correio ou num escritório da OSHA, e pedir que o seu nome não seja dado ao empregador. Se o empregador castigar você por levantar uma questão de segurança, apresente uma queixa de denunciante (whistleblower) à OSHA o mais depressa possível; pela lei federal, o prazo é de 30 dias.",
            "O OSHA 10 e o OSHA 30 são cursos do Programa de Formação Outreach da OSHA, que é voluntário. O OSHA 10 é um curso de 10 horas para trabalhadores em início de carreira sobre como reconhecer perigos e os direitos dos trabalhadores. O OSHA 30 é um curso de 30 horas para supervisores e trabalhadores com responsabilidades de segurança. Há versões para a construção e para a indústria em geral. No fim recebe um cartão de conclusão do curso.",
            "Os cartões não são uma licença nem uma certificação, mas muitos empregadores, sindicatos e alguns estados pedem-nos. Só os formadores autorizados pela OSHA podem emitir cartões verdadeiros, por isso faça o curso com um formador ou entidade autorizados e desconfie de ofertas que parecem baratas ou rápidas demais."
          ],
          steps: ["Comunique primeiro o perigo ao seu supervisor, se for seguro.", "Se não for corrigido, apresente uma queixa à OSHA pela internet ou pelo 1-800-321-6742.", "Se quiser, peça que o seu nome fique em segredo.", "Se for castigado por comunicar, apresente uma queixa de denunciante em 30 dias.", "Escolha o OSHA 10 (início de carreira) ou o OSHA 30 (supervisor), construção ou indústria em geral, com um formador autorizado."],
          words: [["OSHA", "a Occupational Safety and Health Administration, a agência federal dos Estados Unidos para a segurança no trabalho."], ["Programa de Formação Outreach", "o programa voluntário da OSHA de cursos de segurança de 10 e de 30 horas dados por formadores autorizados."], ["Denunciante (whistleblower)", "um trabalhador que comunica um problema; a lei protege-o de ser castigado por isso."]],
          slides: [
            { title: "O seu direito a um trabalho seguro", bullets: ["Local de trabalho sem perigos graves conhecidos", "Formação numa língua que entende", "Ver os registos de lesões; pedir uma inspeção"] },
            { title: "Apresentar uma queixa", bullets: ["osha.gov ou 1-800-321-6742", "Pode pedir que o seu nome fique em segredo", "Castigado? Queixa de denunciante em 30 dias"] },
            { title: "OSHA 10 e OSHA 30", bullets: ["10 horas: trabalhadores em início de carreira", "30 horas: supervisores e funções de segurança", "Versões para construção ou indústria em geral"] },
            { title: "Sobre os cartões", bullets: ["Voluntários; não são licença nem certificação", "Muitos empregadores e sindicatos pedem-nos", "Só formadores autorizados emitem cartões verdadeiros"] }
          ],
          sources: [
            { name: "OSHA: Workers' rights (direitos dos trabalhadores)", url: "https://www.osha.gov/workers" },
            { name: "OSHA: File a safety and health complaint (apresentar uma queixa)", url: "https://www.osha.gov/workers/file-complaint" },
            { name: "OSHA: Outreach Training Program (Programa de Formação Outreach)", url: "https://www.osha.gov/training/outreach" },
            { name: "OSHA: The facts about obtaining an OSHA card (como obter um cartão OSHA)", url: "https://www.osha.gov/training/oshacardfacts" }
          ],
          tryIt: "Tarefa final: faça uma ronda de perigos de 10 minutos e escreva o seu relatório de perigos: cinco perigos, o seu tipo, o EPI ou a correção, a quem comunicaria cada um, as secções da FDS de um produto químico e os seus passos em caso de lesão. No fim, escreva se o OSHA 10 ou o OSHA 30 serve para o seu trabalho e porquê.",
          youCanNow: "explicar o seu direito a um trabalho seguro, apresentar uma queixa à OSHA e escolher entre o OSHA 10 e o OSHA 30.",
          quickCheck: [
            { objective: "O6", q: "O que é um cartão OSHA 10 ou OSHA 30?", options: ["Uma licença estadual para trabalhar", "Uma certificação profissional", "Um cartão de conclusão de curso dado por um formador autorizado", "Um cartão que substitui a formação do empregador"], answer: 2, why: "Os cartões mostram que terminou um curso Outreach voluntário; não são uma licença." },
            { objective: "O6", q: "Avisou o seu supervisor de uma saída de emergência bloqueada e nada mudou. O que pode fazer a seguir?", options: ["Nada; só os gestores podem agir", "Despedir-se logo", "Publicar primeiro na internet", "Apresentar uma queixa à OSHA e pedir que o seu nome fique em segredo"], answer: 3, why: "Se um perigo não for corrigido, pode apresentar uma queixa à OSHA e pedir que o seu nome não seja dado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Produtos químicos, lesões e os seus direitos",
        questions: [
          { objective: "O4", q: "Que secção da ficha de dados de segurança diz o EPI a usar?", options: ["Secção 1", "Secção 4", "Secção 16", "Secção 8"], answer: 3, why: "A Secção 8 trata do controlo da exposição e da proteção individual." },
          { objective: "O4", q: "No rótulo de um produto químico, que palavra-sinal indica o perigo mais grave?", options: ["Danger (Perigo)", "Warning (Atenção)", "Caution (Cuidado)", "Notice (Aviso)"], answer: 0, why: "\"Danger\" (Perigo) usa-se para os perigos mais graves; \"Warning\" (Atenção) para os menos graves." },
          { objective: "O5", q: "Faz um pequeno corte no trabalho. O que deve fazer?", options: ["Escondê-lo", "Esperar até piorar", "Avisar logo o supervisor e escrever o que aconteceu", "Despedir-se"], answer: 2, why: "Comunique cedo todas as lesões, mesmo as pequenas." },
          { objective: "O5", q: "Em quanto tempo o empregador tem de comunicar à OSHA uma morte ligada ao trabalho?", options: ["30 dias", "8 horas", "Uma semana", "Não tem de comunicar"], answer: 1, why: "A regra da OSHA é de 8 horas para uma morte." },
          { objective: "O6", q: "O que é o OSHA 10?", options: ["Uma licença obrigatória de eletricista", "Uma multa", "Um curso voluntário de segurança de 10 horas para trabalhadores em início de carreira", "Um rótulo de produto químico"], answer: 2, why: "É um curso do programa Outreach com cartão de conclusão, não uma licença." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Segurança no Trabalho (OSHA)",
    questions: [
      { objective: "O1", q: "O que é um perigo?", options: ["Qualquer coisa no trabalho que pode causar lesão ou doença", "Um cartaz de segurança", "Um tipo de EPI", "Uma sala de descanso"], answer: 0, why: "Um perigo é uma fonte de possível dano." },
      { objective: "O1", q: "Numa ronda de perigos, \"olhar para cima\" quer dizer verificar:", options: ["O chão, à procura de líquidos derramados", "O seu telefone", "Prateleiras altas, cargas suspensas e escadas de mão", "As horas"], answer: 2, why: "O que está em cima pode cair ou causar quedas." },
      { objective: "O1", q: "A proteção de uma máquina foi retirada. Você deve:", options: ["Usá-la com cuidado", "Não a usar, manter as pessoas afastadas e comunicar", "Pôr a mão para verificar", "Ignorar"], answer: 1, why: "As proteções em falta causam lesões graves; comunique e fique longe." },
      { objective: "O2", q: "Que luvas deve usar com um produto de limpeza químico?", options: ["Quaisquer luvas", "Nenhumas luvas", "Luvas resistentes a cortes", "O tipo que a ficha de dados de segurança indica"], answer: 3, why: "A FDS diz a proteção certa para esse produto." },
      { objective: "O2", q: "Antes de usar uma máscara respiratória, você precisa de:", options: ["Nada", "Um teste de ajuste e formação", "Só uma olhadela rápida", "A máscara de um colega"], answer: 1, why: "A máscara respiratória tem de vedar bem e ser usada corretamente." },
      { objective: "O2", q: "Quem, em geral, tem de fornecer o EPI obrigatório?", options: ["O empregador", "O trabalhador", "Um colega", "Ninguém"], answer: 0, why: "Pelas regras da OSHA, os empregadores em geral têm de fornecer o EPI obrigatório." },
      { objective: "O3", q: "Qual é uma boa forma de prevenir escorregadelas?", options: ["Deixar os líquidos derramados para depois", "Usar sapatos de sola lisa", "Apagar as luzes", "Limpar logo o que derramou e usar um sinal de chão molhado"], answer: 3, why: "Limpar depressa e avisar previne quedas." },
      { objective: "O3", q: "Numa escada de mão, \"três pontos de apoio\" quer dizer:", options: ["Três pessoas seguram a escada", "Três escadas juntas", "Duas mãos e um pé, ou dois pés e uma mão, na escada", "Ficar de pé nos três últimos degraus"], answer: 2, why: "Mantém você estável enquanto sobe." },
      { objective: "O3", q: "Na construção, a altura geral da OSHA para a proteção contra quedas é:", options: ["6 pés", "1 pé", "20 pés", "Não há regra"], answer: 0, why: "Na construção a regra geral é 6 pés; na indústria em geral é 4 pés." },
      { objective: "O3", q: "Uma caixa é pesada e difícil de agarrar. O que faz?", options: ["Levanta-a depressa", "Torce-se enquanto levanta", "Pede ajuda ou usa um carrinho ou um porta-paletes", "Leva-a longe do corpo"], answer: 2, why: "A ajuda ou o equipamento previnem lesões nas costas." },
      { objective: "O4", q: "O que quer dizer SDS (em português, FDS)?", options: ["Guia de entrega padrão", "Horário de serviço do pessoal", "Sinal de serviço do turno", "Ficha de dados de segurança"], answer: 3, why: "Uma ficha de dados de segurança descreve os perigos de um produto químico e o seu uso seguro." },
      { objective: "O4", q: "Que secção da FDS dá os primeiros socorros?", options: ["Secção 2", "Secção 4", "Secção 16", "Secção 8"], answer: 1, why: "A Secção 4 lista as medidas de primeiros socorros." },
      { objective: "O4", q: "Porque nunca deve misturar lixívia e amoníaco?", options: ["Ficam mais caros", "Perdem o cheiro", "Mancham o chão", "Fazem um gás tóxico"], answer: 3, why: "Misturá-los liberta um gás perigoso." },
      { objective: "O5", q: "Um colega está gravemente ferido. Qual é o primeiro passo?", options: ["Ligar para o 911 ou o número de emergência do local", "Acabar a sua tarefa", "Publicar uma fotografia", "Mexer logo na pessoa"], answer: 0, why: "A ajuda de emergência vem primeiro; não mexa na pessoa, a não ser que esteja em perigo." },
      { objective: "O5", q: "Porque comunicar mesmo uma lesão pequena?", options: ["Para ter um dia de folga", "Não é preciso", "Para ter tratamento, proteger o seu direito à indemnização e corrigir o perigo", "Para culpar alguém"], answer: 2, why: "Comunicar cedo protege você e os outros." },
      { objective: "O5", q: "Um trabalhador perde um olho num acidente de trabalho. O empregador tem de comunicar à OSHA em:", options: ["8 horas", "24 horas", "Um ano", "30 dias"], answer: 1, why: "O internamento hospitalar, a amputação e a perda de um olho têm de ser comunicados em 24 horas." },
      { objective: "O6", q: "Que número de telefone é o da OSHA?", options: ["1-800-321-6742", "1-800-669-4000", "911", "411"], answer: 0, why: "1-800-321-OSHA (6742) é o número da OSHA; 1-800-669-4000 é o da EEOC (a agência contra a discriminação no trabalho)." },
      { objective: "O6", q: "Tiraram-no do horário por ter comunicado um perigo. Pela lei federal, apresente uma queixa de denunciante em:", options: ["Um ano", "Não há prazo", "Cinco anos", "30 dias"], answer: 3, why: "O prazo federal para queixas de represálias por segurança é de 30 dias." },
      { objective: "O6", q: "Para quem é principalmente o OSHA 30?", options: ["Só para motoristas de camião", "Supervisores e trabalhadores com responsabilidades de segurança", "Crianças", "Pessoas que querem uma licença de eletricista"], answer: 1, why: "O OSHA 30 dá formação mais completa a supervisores e funções de segurança." },
      { objective: "O6", q: "O que é verdade sobre os cartões OSHA 10 e 30?", options: ["São uma licença", "Qualquer pessoa pode imprimir um", "São cartões de formação voluntária que só os formadores autorizados podem emitir", "Nunca expiram em lado nenhum"], answer: 2, why: "Não são certificações, e só os formadores autorizados emitem cartões verdadeiros." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 7, 9, 11, 13, 14, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Perigos encontrados", objective: "O1", notYet: "Menos de cinco perigos, ou os tipos faltam ou estão errados.", meets: "Pelo menos cinco perigos, cada um com o tipo certo.", exceeds: "Também diz que perigos corrigir já e quais comunicar." },
      { name: "EPI e correções", objective: "O2", notYet: "Sem EPI nem correção, ou equipamento que não corresponde ao perigo.", meets: "Cada perigo tem um EPI ou uma correção que lhe corresponde.", exceeds: "Indica uma forma de eliminar o perigo antes de depender do EPI." },
      { name: "Ficha de dados de segurança", objective: "O4", notYet: "Nenhum produto químico, ou as secções da FDS erradas.", meets: "Indica as Secções 2, 4 e 8 de um produto químico e o que cada uma trata.", exceeds: "Também anota a palavra-sinal e os pictogramas do rótulo." },
      { name: "Comunicação", objective: "O5", notYet: "Não diz a quem comunicar, ou faltam os passos em caso de lesão.", meets: "Diz a quem comunicar cada perigo e lista os passos em caso de lesão pela ordem certa.", exceeds: "Os passos em caso de lesão incluem escrever o quê, quando, onde e quem viu." },
      { name: "Direitos e formação", objective: "O6", notYet: "Não diz se o OSHA 10 ou o OSHA 30 serve.", meets: "Escolhe o OSHA 10 ou o OSHA 30 e dá uma razão que se ajusta ao seu trabalho.", exceeds: "Também explica como apresentar uma queixa à OSHA se um perigo não for corrigido." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num curso OSHA 10 ou OSHA 30 com um formador autorizado em 90 dias",
      "Alunos que conseguem ou mantêm um emprego numa área prática em 90 dias (inquérito de seguimento)",
      "Os parceiros de formação profissional dizem ver menos lesões ou mais perigos comunicados entre os participantes do programa"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador para ler as lições",
      "Uma divisão para a ronda de perigos: casa, armazém ou local de trabalho (com autorização)",
      "Um produto de limpeza doméstico com rótulo e internet para encontrar a sua ficha de dados de segurança",
      "Papel e caneta para o relatório de perigos",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam primeiro uma ronda de perigos em grupo na sala de formação e depois deixe os alunos fazer a sua.",
      "Pratique o levantamento seguro só com uma caixa leve; ninguém sobe a escadas de mão nem levanta cargas pesadas durante a formação.",
      "Nunca deixe os alunos abrir ou misturar produtos químicos na prática; só leem o rótulo e a FDS.",
      "Lembre aos alunos que este curso não substitui um cartão OSHA 10 ou OSHA 30 nem a formação do seu empregador.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
