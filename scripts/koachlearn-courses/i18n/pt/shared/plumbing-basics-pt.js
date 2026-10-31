"use strict";

// Koach Learn course (Portuguese translation of shared/plumbing-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US (BLS, OSHA, EPA, apprenticeship.gov, US state licenses); units (inches, feet) are kept as in the English.

const BLS = "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm";

module.exports = {
  id: "plumbing-basics-pt",
  lang: "pt",
  translationOf: "plumbing-basics",
  category: "Workforce Development",
  name: "Noções Básicas de Canalização",
  skills: "Seguir os sistemas de abastecimento de água e de esgoto, Explicar os sifões e os respiros, Medir tubos e calcular a inclinação do esgoto, Reconhecer os perigos do trabalho de canalização, Pôr reparações simples numa ordem segura, Planear o seu caminho para uma aprendizagem de canalizador",
  outcome: "explicar como a água entra num edifício e como os resíduos saem, medir tubos e calcular a inclinação de um esgoto, nomear os perigos do trabalho de canalização e como se proteger, pôr uma reparação simples numa ordem segura e seguir um plano com datas rumo a uma aprendizagem e a uma licença de canalizador.",
  about: [
    "Os canalizadores levam água limpa para casas, escolas, hospitais e fábricas e levam as águas usadas para longe com segurança. Todos os edifícios precisam deles, e a maioria dos canalizadores aprende a profissão numa aprendizagem paga, e não na universidade. Este curso é para quem pensa nesse caminho: jovens, antigos militares, pessoas que voltam da prisão, pessoas à procura de emprego e adultos que voltam a estudar.",
    "Você vai aprender os dois sistemas que existem em todos os edifícios (abastecimento de água; e esgoto, resíduos e respiro), porque os sifões e os respiros impedem a entrada do gás de esgoto, os materiais de tubo e as peças de ligação mais comuns, e a matemática que os canalizadores usam todos os dias: comprimentos de corte e inclinação do esgoto. Depois vai aprender os perigos da profissão, a ordem segura para reparações simples e como funcionam as aprendizagens e as licenças.",
    "Este curso prepara você. Não lhe dá uma licença nem um certificado. Nos Estados Unidos, a maioria dos estados e algumas cidades exigem licença aos canalizadores e definem as regras de experiência e de exame. As competências práticas, como cortar e unir tubos, soldar com maçarico, trabalhar em tubos de gás e trabalhar em valas, aprendem-se pessoalmente com um instrutor qualificado, nunca só com um vídeo.",
    "Cada lição dura cerca de cinco minutos, com uma pequena tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. O seu produto final é o seu próprio plano de início na canalização, com datas reais."
  ],
  finalTask: "Faça o seu plano de início na canalização: (1) um desenho à mão de uma casa de banho ou de uma cozinha que mostre os tubos de água quente e fria, as válvulas de corte, o sifão, o esgoto e o respiro, com setas no sentido em que a água corre; (2) uma folha de cálculos com dois comprimentos de corte de tubo e uma inclinação de esgoto, com os cálculos à vista; (3) uma lista de perigos de um trabalho de canalização, com a proteção para cada perigo; e (4) um plano com datas que nomeie duas aprendizagens ou programas de formação perto de você, o que o seu estado ou cidade exige para a licença de canalizador (tirado da página oficial, com o endereço do site) e uma data para cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens adultos e adultos que procuram uma profissão técnica que não exija um curso universitário de quatro anos: pessoas à procura de emprego, antigos militares, pessoas que voltam da prisão, imigrantes e adultos que voltam a estudar. Alguns já fizeram trabalho manual (manutenção, construção, forças armadas); muitos nunca trabalharam com tubos.",
    startingPoint: "Sabem ler instruções curtas, usar uma fita métrica ou uma régua e fazer contas com números inteiros. A maioria sabe onde estão o lava-loiça e a sanita, mas não sabe explicar de onde vem a água, porque um esgoto tem sifão, como se mede um tubo nem como alguém se torna canalizador com licença.",
    gap: "Os empreiteiros e os programas de aprendizagem querem ajudantes que conheçam as peças e as palavras básicas, saibam medir e fazer contas simples e levem a segurança a sério. Os alunos precisam dessa base, e de um plano honesto com datas, para se candidatarem com confiança e evitarem pagar formações que não levam a um emprego.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano); cada palavra da profissão é explicada",
      "Neste curso não há trabalho com maçarico, tubos de gás, valas ou esgotos: isso aprende-se pessoalmente com um instrutor qualificado e o equipamento de proteção certo",
      "Aparelhos: um telefone ou um computador da biblioteca para ler páginas oficiais; papel, caneta e uma fita métrica ou régua para praticar",
      "Tempo: lições de 5 a 6 minutos, que cabem entre o trabalho, a escola e as consultas",
      "As licenças mudam de estado para estado e de cidade para cidade: os alunos verificam as regras na página oficial do lugar onde vivem"
    ],
    prerequisites: "Nenhum. O curso \"Começar uma Carreira nas Profissões Técnicas\" é um bom primeiro passo para escolher uma profissão; este curso aprofunda a canalização."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um desenho ou uma foto de uma cozinha ou casa de banho", action: "seguir o abastecimento de água e o sistema de esgoto, resíduos e respiro e nomear cada parte", standard: "com as válvulas de corte, o sifão, o esgoto e o respiro identificados e as setas do sentido da água corretas" },
    { id: "O2", condition: "Com a descrição de um trabalho de canalização", action: "listar os perigos do trabalho e a proteção para cada um", standard: "nomeando pelo menos cinco perigos, cada um ligado a um passo seguro ou a um equipamento de proteção" },
    { id: "O3", condition: "Com medidas de tubos e um troço de esgoto", action: "calcular comprimentos de corte de tubo e a descida de que um esgoto precisa", standard: "acertando pelo menos 4 de 5 exercícios de prática, com os cálculos à vista" },
    { id: "O4", condition: "Com um problema simples de canalização em casa", action: "pôr os passos da reparação numa ordem segura", standard: "começando por fechar a água e terminando com a verificação de fugas, sem nenhum passo perigoso" },
    { id: "O5", condition: "Usando os sites oficiais do seu estado", action: "escrever um plano com datas para entrar numa aprendizagem de canalizador e avançar para uma licença", standard: "com pelo menos cinco passos com datas e uma fonte oficial para cada exigência" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona a canalização",
      lessons: [
        {
          title: "Os dois sistemas: a água entra, os resíduos saem",
          objectives: ["O1"],
          minutes: 5,
          goal: "Seguir o caminho da água limpa que entra num edifício e da água usada que sai dele.",
          text: [
            "Todos os edifícios têm dois sistemas de canalização separados. O sistema de abastecimento de água traz água limpa sob pressão. O sistema de esgoto, resíduos e respiro (DWV, sigla em inglês) leva a água usada e os resíduos para fora, pela força da gravidade. Os dois nunca se misturam: é isso que mantém a água de beber segura.",
            "Abastecimento: a água vem da conduta pública ou de um poço, passa pelo contador de água (na água da rede) e pela válvula de corte geral, e depois entra no edifício. Um ramal vai para o esquentador ou termoacumulador; a partir daí, há um tubo de água fria e um de água quente que vão até cada aparelho. A maioria dos aparelhos tem também as suas próprias pequenas válvulas de corte, debaixo do lava-loiça ou atrás da sanita.",
            "Esgoto, resíduos e respiro: quando a água sai de um lava-loiça, desce por um sifão e entra num tubo de esgoto. Os esgotos juntam-se em tubos maiores e correm para o esgoto do edifício, e depois para o esgoto público ou para uma fossa séptica. Os tubos de respiro sobem e saem pelo telhado para deixar entrar ar nos esgotos.",
            "Os canalizadores também instalam e reparam aparelhos sanitários (lava-loiças, sanitas, banheiras, chuveiros) e equipamentos que usam água, como esquentadores e máquinas de lavar loiça. Os montadores de tubagens fazem um trabalho parecido em sistemas maiores, em fábricas e grandes edifícios."
          ],
          steps: [
            "Comece no contador de água ou no poço e encontre a válvula de corte geral.",
            "Siga o tubo de água fria até ao esquentador; a partir daí, um tubo de água quente e um de água fria vão até aos aparelhos.",
            "Em cada aparelho, encontre as pequenas válvulas de corte.",
            "Siga a água usada para baixo, pelo sifão, até ao esgoto e para fora, até ao esgoto público ou à fossa séptica."
          ],
          words: [
            ["Sistema de abastecimento de água", "os tubos que trazem água limpa para dentro de um edifício, sob pressão."],
            ["DWV (esgoto, resíduos e respiro)", "os tubos que levam a água usada e os resíduos para fora pela gravidade, mais os respiros que deixam entrar ar."],
            ["Válvula de corte geral", "a válvula que fecha a água de todo o edifício."],
            ["Aparelho sanitário", "tudo o que usa ou guarda água e a escoa: um lava-loiça, uma sanita, uma banheira ou um chuveiro."],
            ["Conduta pública", "o tubo público grande, debaixo da rua, que traz a água da rede."],
            ["Fossa séptica", "um tanque debaixo da terra que trata os resíduos da casa onde não há esgoto público."]
          ],
          slides: [
            { title: "Dois sistemas que nunca se misturam", bullets: ["Abastecimento: água limpa entra, sob pressão", "DWV: água usada sai, pela gravidade"] },
            { title: "Seguir o abastecimento", bullets: ["Contador ou poço, depois a válvula de corte geral", "O esquentador dá origem ao tubo de água quente", "Pequenas válvulas de corte em cada aparelho"] },
            { title: "Seguir o esgoto", bullets: ["Aparelho, depois sifão, depois tubo de esgoto", "Esgoto do edifício para o esgoto público ou fossa séptica", "Os respiros sobem e saem pelo telhado"] },
            { title: "Em que trabalham os canalizadores", bullets: ["Tubos, aparelhos sanitários e esquentadores", "Montadores de tubagens: sistemas maiores em grandes edifícios"] }
          ],
          sources: [
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Canalizadores e montadores de tubagens", url: BLS }
          ],
          tryIt: "Vá à cozinha ou à casa de banho onde vive. Sem desmontar nada, olhe debaixo do lava-loiça. Num papel, desenhe o que vê: os dois tubos de abastecimento (quente e frio), as pequenas válvulas de corte, o sifão curvo e o esgoto a entrar na parede. Acrescente setas no sentido em que a água corre. Depois descubra onde está a válvula de corte geral do edifício (pergunte ao senhorio ou ao administrador se não tiver a certeza). Guarde o desenho: é o início da parte 1 da sua tarefa final.",
          youCanNow: "seguir o caminho da água limpa que entra num edifício e da água usada que sai dele.",
          quickCheck: [
            { objective: "O1", q: "O que faz a água andar no sistema de esgoto?", options: ["A pressão da água da rede", "A gravidade", "O esquentador", "As válvulas de corte"], answer: 1, why: "Os esgotos levam a água usada para fora pela gravidade, por isso os tubos de esgoto têm de descer." },
            { objective: "O1", q: "Um tubo rebenta e a água espirra por todo o lado. Que válvula fecha a água de todo o edifício?", options: ["A pequena válvula debaixo de um lava-loiça", "A válvula de esvaziamento do esquentador", "A tampa do respiro no telhado", "A válvula de corte geral"], answer: 3, why: "A válvula de corte geral fecha o abastecimento de água de todo o edifício." }
          ]
        },
        {
          title: "Sifões, respiros e inclinação: manter o gás de esgoto fora",
          objectives: ["O1", "O3"],
          minutes: 5,
          goal: "Explicar o que fazem um sifão e um respiro, e calcular a descida de que um tubo de esgoto precisa.",
          text: [
            "Olhe debaixo de um lava-loiça e verá um tubo curvo, muitas vezes com a forma de um P. É o sifão. Tem sempre um pouco de água. Essa água faz de selo e impede que o gás de esgoto, que cheira mal e pode fazer mal às pessoas, suba pelo ralo até à divisão. As sanitas já têm um sifão por dentro.",
            "Os respiros são tubos ligados aos esgotos que sobem e saem pelo telhado. Deixam entrar ar no sistema de esgoto para que a água corra bem e não puxe a água dos sifões. Se um lava-loiça faz barulho de gorgolejo ou um sifão seca e a divisão cheira a esgoto, a causa pode ser um respiro em falta ou entupido.",
            "Os tubos de esgoto têm de descer para os resíduos correrem. Se ficarem planos demais, os resíduos param e entopem. Os códigos de canalização definem a inclinação. Para tubos de esgoto pequenos, os códigos pedem muitas vezes cerca de 1/4 de polegada de descida por cada pé de tubo; o código local define o número exato. Para achar a descida total, multiplique a inclinação pelo comprimento: um esgoto de 12 pés a 1/4 de polegada por pé precisa de 3 polegadas de descida.",
            "Um código de canalização é o conjunto de regras para uma canalização segura. Muitos lugares usam o International Plumbing Code (IPC) ou o Uniform Plumbing Code (UPC), muitas vezes com mudanças locais. O departamento de obras local diz-lhe que código se aplica e verifica o trabalho com uma inspeção."
          ],
          steps: [
            "Veja a inclinação que o código ou o instrutor indica (prática: 1/4 de polegada por pé).",
            "Meça o comprimento do troço de esgoto em pés.",
            "Multiplique: comprimento x inclinação = descida total em polegadas.",
            "Verifique: a ponta mais distante tem de ficar mais baixa do que o início nessa medida."
          ],
          words: [
            ["Sifão", "o tubo curvo debaixo de um aparelho que guarda água para bloquear o gás de esgoto."],
            ["Gás de esgoto", "o gás com mau cheiro e perigoso que se forma nos esgotos e nos tubos de esgoto."],
            ["Respiro", "um tubo que deixa entrar ar nos esgotos e sai pelo telhado, para que os sifões mantenham a água."],
            ["Inclinação (ou pendente)", "quanto um tubo de esgoto desce por cada pé de comprimento, para os resíduos correrem para baixo."],
            ["Código de canalização", "as regras para uma canalização segura que um estado ou cidade adota e que os inspetores verificam."],
            ["Inspeção", "uma visita do departamento de obras para verificar se o trabalho cumpre o código."]
          ],
          slides: [
            { title: "O sifão: um selo de água", bullets: ["Tubo curvo que guarda sempre água", "Impede o gás de esgoto de entrar na divisão", "As sanitas já têm um por dentro"] },
            { title: "Os respiros deixam os esgotos respirar", bullets: ["Sobem e saem pelo telhado", "Mantêm a água nos sifões", "Gorgolejo ou cheiro a esgoto: verifique o respiro"] },
            { title: "Os esgotos descem", bullets: ["Planos demais: os resíduos param e entopem", "Descida total = comprimento x inclinação", "Prática: 12 pés x 1/4 pol = 3 pol"] },
            { title: "O código e o inspetor", bullets: ["Muitos lugares usam o IPC ou o UPC, com mudanças locais", "O departamento de obras inspeciona o trabalho"] }
          ],
          tryIt: "Só para praticar: num papel, calcule a descida total de três esgotos a 1/4 de polegada por pé: 8 pés, 10 pés e 16 pés. Mostre os cálculos (por exemplo, 8 x 1/4 = 2 polegadas). Depois olhe outra vez debaixo de um lava-loiça e aponte para o sifão. Escreva uma frase sobre porque é que ele tem de ter sempre água. Respostas: 2 polegadas, 2 1/2 polegadas, 4 polegadas.",
          youCanNow: "explicar o que fazem um sifão e um respiro e calcular a descida de que um tubo de esgoto precisa.",
          quickCheck: [
            { objective: "O1", q: "Porque é que um sifão tem sempre um pouco de água?", options: ["Para impedir o gás de esgoto de entrar na divisão", "Para manter o tubo fresco", "Para aquecer mais a água", "Para medir quanta água foi usada"], answer: 0, why: "A água no sifão é um selo que mantém o gás de esgoto fora." },
            { objective: "O3", q: "Só para praticar: um esgoto tem 20 pés de comprimento e tem de descer 1/4 de polegada por pé. Que descida total precisa?", options: ["4 polegadas", "20 polegadas", "5 polegadas", "1/4 de polegada"], answer: 2, why: "20 x 1/4 = 5, por isso o esgoto precisa de 5 polegadas de descida." }
          ]
        },
        {
          title: "Tubos, peças de ligação e medir um corte",
          objectives: ["O3"],
          minutes: 6,
          goal: "Nomear os materiais de tubo mais comuns e calcular o comprimento de corte de um tubo a partir de uma medida de centro a centro.",
          text: [
            "Os canalizadores usam vários materiais de tubo. O cobre é usado nos tubos de abastecimento de água; une-se com soldadura feita com maçarico, ou com acessórios de pressão ou de encaixe rápido. O PEX é um tubo de plástico flexível para o abastecimento, unido com acessórios de cravar ou de expansão. O PVC e o ABS são tubos de plástico rígido, usados sobretudo nos esgotos e respiros. Casas mais antigas podem ter aço galvanizado ou ferro fundido. Nos EUA, a lei federal exige que os tubos e acessórios para água de beber sejam sem chumbo.",
            "As peças de ligação (acessórios) mudam a direção ou unem tubos: uma curva (cotovelo) vira uma esquina, um tê faz um ramal, uma união junta duas peças retas e um adaptador junta dois materiais diferentes. Os tamanhos dos tubos são nominais: um tubo de 1/2 polegada é um tamanho comercial, não uma medida exata do interior nem do exterior.",
            "Os canalizadores medem muitas vezes de centro a centro: do centro de um acessório ao centro do seguinte. Mas o tubo não chega ao centro do acessório. Cada acessório tem uma folga de encaixe (em inglês, take-off): a distância do seu centro até onde o tubo para lá dentro. Para achar o comprimento de corte, subtraia a folga de encaixe de cada ponta.",
            "Exemplo (só para praticar, com números inventados): de centro a centro são 24 polegadas, e cada curva tem uma folga de encaixe de 1/2 polegada. Comprimento de corte = 24 - 1/2 - 1/2 = 23 polegadas. As folgas de encaixe reais vêm da tabela do fabricante ou do instrutor, e você mede sempre duas vezes e corta uma."
          ],
          steps: [
            "Meça de centro a centro entre os dois acessórios.",
            "Procure a folga de encaixe de cada acessório (tabela do fabricante ou instrutor).",
            "Subtraia a folga de cada ponta: comprimento de corte = centro a centro - folga 1 - folga 2.",
            "Meça duas vezes, marque o tubo e depois corte."
          ],
          words: [
            ["Cobre", "tubo de metal usado nos tubos de água, muitas vezes unido com soldadura."],
            ["PEX", "tubo de plástico flexível usado para a água quente e fria."],
            ["PVC e ABS", "tubos de plástico rígido usados sobretudo nos esgotos e respiros."],
            ["Acessório (peça de ligação)", "uma peça que une tubos ou muda a sua direção: curva, tê, união, adaptador."],
            ["Tamanho nominal", "o nome comercial do tamanho de um tubo, não uma medida exata."],
            ["Centro a centro", "uma medida do centro de um acessório até ao centro do seguinte."],
            ["Folga de encaixe (take-off)", "a distância do centro de um acessório até onde o tubo para lá dentro."],
            ["Sem chumbo", "pela lei federal dos EUA, tubos e acessórios com uma média ponderada de no máximo 0.25% de chumbo nas superfícies que tocam na água, e solda e fluxo com no máximo 0.2% de chumbo."]
          ],
          slides: [
            { title: "Materiais de tubo comuns", bullets: ["Cobre e PEX: abastecimento de água", "PVC e ABS: esgotos e respiros", "Casas antigas: aço galvanizado, ferro fundido"] },
            { title: "Acessórios", bullets: ["A curva vira, o tê faz um ramal", "A união junta, o adaptador muda de material", "As peças para água de beber têm de ser sem chumbo"] },
            { title: "Medir um corte", bullets: ["Meça de centro a centro", "Subtraia a folga de encaixe em cada ponta", "Exemplo: 24 - 1/2 - 1/2 = 23 polegadas"] },
            { title: "Meça duas vezes, corte uma", bullets: ["As folgas vêm da tabela do fabricante", "Os tamanhos são nominais (comerciais)"] }
          ],
          sources: [
            { name: "EPA (Agência de Proteção Ambiental dos EUA): Uso de tubos, acessórios, aparelhos, solda e fluxo sem chumbo para água de beber", url: "https://www.epa.gov/sdwa/use-lead-free-pipes-fittings-fixtures-solder-and-flux-drinking-water" }
          ],
          tryIt: "Só para praticar, com números inventados: calcule o comprimento de corte de dois tubos. Tubo A: de centro a centro 36 polegadas, cada folga de encaixe 3/4 de polegada. Tubo B: de centro a centro 18 1/2 polegadas, folgas de encaixe de 1/2 polegada e de 1 polegada. Mostre os cálculos. Depois use uma fita métrica para marcar o comprimento de corte do Tubo A numa tira de papel ou de cartão. Respostas: 34 1/2 polegadas e 17 polegadas. Guarde esta folha para a parte 2 da sua tarefa final.",
          youCanNow: "nomear os materiais de tubo mais comuns e calcular o comprimento de corte de um tubo a partir de uma medida de centro a centro.",
          quickCheck: [
            { objective: "O3", q: "Só para praticar: de centro a centro são 30 polegadas e cada folga de encaixe é de 1/2 polegada. Qual é o comprimento de corte?", options: ["30 polegadas", "31 polegadas", "29 1/2 polegadas", "29 polegadas"], answer: 3, why: "30 - 1/2 - 1/2 = 29 polegadas." },
            { objective: "O3", q: "Que tubo é mais usado nos esgotos e respiros das casas mais novas?", options: ["Cobre", "PVC", "Mangueira de jardim", "PEX"], answer: 1, why: "O tubo de plástico rígido, como o PVC (ou o ABS), é usado sobretudo nos esgotos e respiros." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona a canalização",
        questions: [
          { objective: "O1", q: "Que frase sobre os dois sistemas de canalização é verdadeira?", options: ["A água do abastecimento e a do esgoto misturam-se no esquentador", "O sistema de abastecimento funciona pela gravidade", "O abastecimento traz água limpa sob pressão; o esgoto leva os resíduos para fora pela gravidade", "Os respiros levam água limpa até ao telhado"], answer: 2, why: "O abastecimento está sob pressão, os esgotos funcionam pela gravidade, e os dois nunca se misturam." },
          { objective: "O1", q: "Uma casa de banho cheira a esgoto e o lava-loiça gorgoleja. Qual é uma causa provável?", options: ["O esquentador está quente demais", "Um respiro entupido ou um sifão seco", "A válvula de corte geral está aberta", "Os tubos de abastecimento são de cobre"], answer: 1, why: "Os respiros mantêm a água nos sifões; se um respiro entope ou um sifão seca, o gás de esgoto pode entrar." },
          { objective: "O1", q: "Onde começa o tubo de água quente?", options: ["No esquentador", "No respiro do telhado", "No sifão", "No esgoto"], answer: 0, why: "A água fria entra no esquentador, e o tubo de água quente vai dali até aos aparelhos." },
          { objective: "O3", q: "Só para praticar: um esgoto de 16 pés tem de descer 1/4 de polegada por pé. Qual é a descida total?", options: ["2 polegadas", "16 polegadas", "8 polegadas", "4 polegadas"], answer: 3, why: "16 x 1/4 = 4 polegadas." },
          { objective: "O3", q: "Porque é que se subtrai a folga de encaixe de uma medida de centro a centro?", options: ["Para poupar dinheiro em tubo", "Porque o tubo para dentro do acessório antes do centro", "Porque os tubos encolhem com o frio", "Só é preciso no PEX"], answer: 1, why: "O tubo acaba onde encaixa no acessório, não no centro do acessório." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança, reparações simples e o seu caminho",
      lessons: [
        {
          title: "Os perigos da canalização e como se proteger",
          objectives: ["O2"],
          minutes: 6,
          goal: "Listar os perigos de um trabalho de canalização e a proteção para cada um.",
          text: [
            "O BLS (o departamento de estatísticas do trabalho dos EUA) lista as lesões mais comuns dos canalizadores: cortes com ferramentas afiadas, queimaduras com tubos quentes e equipamento de soldar, e quedas de escadas. Os canalizadores também levantam materiais pesados, trabalham em espaços apertados e muitas vezes trabalham ao ar livre com qualquer tempo.",
            "O esgoto tem micróbios. Use luvas e proteção para os olhos quando abrir um esgoto, lave as mãos antes de comer ou de tocar na cara e mantenha as feridas tapadas. A água quente e o vapor queimam, por isso deixe arrefecer um tubo do esquentador e abra-o só como o instrutor lhe mostrar. O trabalho com maçarico (soldadura) pode provocar incêndios dentro das paredes: os canalizadores formados usam uma proteção contra o calor, têm um extintor perto e vigiam a zona depois de acabar.",
            "Gás: se sentir cheiro a gás, não acenda nada nem mexa em interruptores. Saia do edifício e ligue para a companhia do gás ou para o 911 (o número de emergência dos EUA) lá de fora. O trabalho em tubos de gás exige formação e, em alguns estados, uma licença especial. Eletricidade e água são uma mistura mortal: nunca fique dentro de água perto de fios elétricos e mantenha os cabos e as ferramentas longe das zonas molhadas.",
            "Valas e espaços confinados: a OSHA (a agência de segurança no trabalho dos EUA) diz que o desabamento de valas é o maior risco para a vida dos trabalhadores nas escavações. Nunca entre numa vala se ela não tiver sido inspecionada e protegida com taludes, escoramento ou uma caixa de proteção, com uma forma segura de entrar e sair. Os desvãos e os espaços apertados exigem um colega e bom ar."
          ],
          steps: [
            "Leia o trabalho: o que vai abrir, cortar, aquecer ou levantar?",
            "Escreva cada perigo: micróbios, queimaduras, fogo, cortes, quedas, gás, eletricidade, vala, peso.",
            "Ligue cada perigo a uma proteção: luvas, óculos, proteção contra o calor, extintor, verificar a escada, sair e ligar, zona seca, vala inspecionada, levantar com ajuda.",
            "Se alguma coisa não for segura, pare e pergunte ao seu supervisor."
          ],
          words: [
            ["Perigo", "tudo o que, no trabalho, pode magoar você."],
            ["EPI", "equipamento de proteção individual: luvas, óculos de segurança, botas, proteção auditiva."],
            ["Soldadura", "unir tubos e acessórios de cobre com solda derretida, aquecida por um maçarico."],
            ["Proteção contra o calor", "uma placa resistente ao fogo posta atrás de uma junta para proteger a parede do maçarico."],
            ["Caixa de proteção de vala", "uma caixa forte de aço posta numa vala para proteger os trabalhadores se as paredes caírem."],
            ["Espaço confinado", "um espaço apertado com poucas formas de entrar e sair, como um desvão ou uma caixa subterrânea."]
          ],
          slides: [
            { title: "Lesões comuns na canalização", bullets: ["Cortes com ferramentas afiadas", "Queimaduras com tubos quentes e maçaricos", "Quedas de escadas"] },
            { title: "Micróbios, calor e fogo", bullets: ["Esgoto: luvas, óculos, lavar as mãos", "A água quente e o vapor queimam", "Maçarico: proteção contra o calor e extintor"] },
            { title: "Gás e eletricidade", bullets: ["Cheiro a gás: saia e ligue lá de fora", "Nunca fique dentro de água perto de fios elétricos"] },
            { title: "Valas e espaços apertados", bullets: ["Nunca entre numa vala sem proteção", "Taludes, escoramento ou caixa de proteção", "Desvãos: um colega e bom ar"] }
          ],
          sources: [
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Canalizadores, ambiente de trabalho", url: BLS + "#tab-3" },
            { name: "OSHA: Valas e escavações", url: "https://www.osha.gov/trenching-excavation" }
          ],
          tryIt: "Escolha um trabalho: \"desentupir o esgoto do lava-loiça da cozinha\", \"substituir um esquentador\" ou \"reparar uma fuga debaixo de uma casa, num desvão\". Num papel, faça duas colunas: Perigo e Proteção. Escreva pelo menos cinco perigos desse trabalho e a proteção para cada um. Guarde-o: é a parte 3 da sua tarefa final.",
          youCanNow: "listar os perigos de um trabalho de canalização e a proteção para cada um.",
          quickCheck: [
            { objective: "O2", q: "Sente cheiro a gás numa cave onde está a trabalhar. O que faz primeiro?", options: ["Acende um fósforo para encontrar a fuga", "Liga as luzes para ver melhor", "Continua a trabalhar e avisa alguém mais tarde", "Sai do edifício e liga para a companhia do gás ou para o 911 lá de fora"], answer: 3, why: "Faíscas ou chamas podem incendiar o gás, por isso saia primeiro e ligue lá de fora." },
            { objective: "O2", q: "Que proteção é mais importante quando abre um esgoto?", options: ["Luvas e proteção para os olhos, e depois lavar as mãos", "Uma proteção contra o calor", "Só proteção auditiva", "Uma caixa de proteção de vala"], answer: 0, why: "O esgoto tem micróbios, por isso protege a pele e os olhos e lava as mãos." }
          ]
        },
        {
          title: "Reparações simples numa ordem segura",
          objectives: ["O4"],
          minutes: 6,
          goal: "Pôr os passos de uma reparação simples de canalização numa ordem segura, desde fechar a água até verificar se há fugas.",
          text: [
            "Os ajudantes e os aprendizes novos começam muitas vezes com trabalhos simples. Todos seguem o mesmo padrão seguro: fechar a água, aliviar a pressão, proteger a zona, fazer a reparação, abrir a água devagar e verificar se há fugas.",
            "Autoclismo que não para de correr: a água continua a cair na sanita. Uma comporta (a vedação de borracha no fundo do tanque) gasta é uma causa comum. Feche a válvula de corte da sanita, puxe o autoclismo para esvaziar o tanque, troque a comporta por uma que sirva nessa sanita, abra a água e veja o tanque encher. Se uma gota de corante alimentar no tanque aparecer na sanita sem puxar o autoclismo, ainda há fuga.",
            "Lava-loiça que escoa devagar: primeiro experimente um desentupidor. Se não resultar, ponha um balde debaixo do sifão, calce luvas, desaperte as porcas do sifão à mão ou com um alicate, tire o sifão e limpe-o. Volte a montá-lo com as anilhas viradas para o lado certo, deixe correr água e veja se pinga.",
            "Conheça o seu limite. Tubos de gás, queimadores de esquentadores, esgotos principais e tudo o que precise de licença de obra são trabalho para canalizadores com licença. Na casa de outra pessoa, faça só o que o seu supervisor lhe der. Aqui pratique estes passos no papel; a parte prática aprende-se com um instrutor."
          ],
          steps: [
            "Feche a água na válvula do aparelho (ou na geral, se não houver).",
            "Alivie a pressão: abra a torneira ou puxe o autoclismo para escoar a água.",
            "Proteja a zona: balde, toalhas, luvas e proteção para os olhos.",
            "Faça a reparação (troque a peça ou limpe o sifão).",
            "Abra a água outra vez, devagar.",
            "Verifique se há fugas e teste o aparelho."
          ],
          words: [
            ["Comporta", "a vedação de borracha no fundo do tanque da sanita que deixa passar a água para a sanita quando puxa o autoclismo."],
            ["Porca do sifão", "a porca grande que segura as partes do sifão do lava-loiça; muitas vezes pode ser desapertada à mão."],
            ["Desentupidor", "uma ventosa de borracha num cabo que empurra e puxa a água para desfazer um entupimento."],
            ["Aliviar a pressão", "abrir uma torneira ou puxar o autoclismo depois de fechar a água, para a água não espirrar quando abre o tubo."],
            ["Licença de obra", "autorização oficial do departamento de obras para fazer certos trabalhos de canalização, seguida de uma inspeção."]
          ],
          slides: [
            { title: "O padrão seguro para todas as reparações", bullets: ["Fechar, aliviar a pressão, proteger a zona", "Reparar, abrir devagar, verificar fugas"] },
            { title: "Autoclismo que não para", bullets: ["Feche e puxe o autoclismo para esvaziar o tanque", "Troque a comporta gasta por uma que sirva", "Teste do corante para ver se há fugas"] },
            { title: "Lava-loiça que escoa devagar", bullets: ["Experimente primeiro um desentupidor", "Balde e luvas, depois tire o sifão", "Volte a montar e veja se pinga"] },
            { title: "Conheça o seu limite", bullets: ["Gás, queimadores, esgoto principal e obras com licença: canalizadores com licença", "Faça só o que o supervisor lhe der"] }
          ],
          tryIt: "Escreva cada um destes passos num papelinho separado, misture-os e depois ponha-os numa ordem segura para um autoclismo que não para de correr: \"Ver o tanque encher\", \"Fechar a válvula de corte da sanita\", \"Trocar a comporta\", \"Puxar o autoclismo para esvaziar o tanque\", \"Fazer o teste do corante\", \"Abrir a água outra vez, devagar\". Depois escreva, com as suas palavras, a ordem segura para limpar o sifão de um lava-loiça, começando pelo balde.",
          youCanNow: "pôr os passos de uma reparação simples de canalização numa ordem segura, desde fechar a água até verificar se há fugas.",
          quickCheck: [
            { objective: "O4", q: "Qual é o primeiro passo antes de tirar o tubo de abastecimento de um lava-loiça?", options: ["Desapertar a porca depressa", "Abrir a torneira", "Fechar a válvula de corte desse lava-loiça", "Ligar para a câmara municipal"], answer: 2, why: "Fechar a água primeiro evita que o tubo espirre quando o abre." },
            { objective: "O4", q: "Acabou de voltar a montar o sifão de um lava-loiça. O que vem a seguir?", options: ["Ir embora logo", "Deixar correr água e ver se pinga", "Pintar o tubo", "Fechar a válvula geral"], answer: 1, why: "Todas as reparações terminam com um teste e uma verificação de fugas." }
          ]
        },
        {
          title: "O seu caminho: aprendizagem, licença e um plano com datas",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever um plano com datas para entrar numa aprendizagem de canalizador e avançar para uma licença, usando fontes oficiais.",
          text: [
            "O BLS diz que a maioria dos canalizadores e montadores de tubagens aprende a profissão numa aprendizagem de 4 ou 5 anos, com cerca de 2,000 horas por ano de formação paga no trabalho, mais aulas. Os sindicatos, as associações profissionais e as empresas patrocinam aprendizagens. Algumas pessoas começam primeiro como ajudantes. Normalmente é exigido o diploma do ensino secundário ou um equivalente.",
            "O BLS também diz que a maioria dos estados e algumas localidades exigem que os canalizadores tenham licença, muitas vezes depois de 2 a 5 anos de experiência e de um exame. Alguns estados exigem uma licença especial para trabalhar em tubos de gás. As regras mudam, por isso verifique a página oficial de licenças do seu estado ou cidade. O License Finder (localizador de licenças) do CareerOneStop pode ajudar a encontrá-la. Se tiver registo criminal, pergunte à entidade de licenças como avalia os registos antes de pagar uma formação.",
            "Para encontrar aprendizagens, use o Apprenticeship Job Finder (pesquisa de aprendizagens) no apprenticeship.gov, ligue para o sindicato local de canalizadores e montadores de tubagens, pergunte a empreiteiros de canalização se contratam ajudantes e pergunte ao centro de emprego local (American Job Center). Os antigos militares podem perguntar sobre usar os benefícios do GI Bill (apoio à formação para veteranos dos EUA) numa aprendizagem aprovada.",
            "Os salários e o número de empregos mudam todos os anos. Leia os números atuais, e o ano a que se referem, na página do BLS, em vez de confiar em anúncios ou vídeos. Antes de pagar a qualquer escola, pergunte: leva a uma aprendizagem ou a um emprego, e conta para as horas da licença no seu estado?"
          ],
          steps: [
            "Abra a página de licenças de canalização do seu estado (experimente o License Finder do CareerOneStop). Escreva os níveis de licença, as horas e o exame que ela indica, com o endereço do site.",
            "Pesquise no apprenticeship.gov aprendizagens de canalização perto de você. Anote duas, com como e quando se candidatar.",
            "Escreva um emprego de ajudante ou um empreiteiro que possa contactar enquanto espera.",
            "Liste o que precisa primeiro: diploma ou GED, carta de condução, prática de matemática básica.",
            "Ponha uma data em cada passo e partilhe o plano com alguém que vá acompanhar você."
          ],
          words: [
            ["Aprendizagem", "um emprego pago em que aprende a profissão com trabalhadores experientes, mais aulas."],
            ["Oficial (journeyman)", "um canalizador que acabou a formação e passou no nível de licença que lhe permite trabalhar sem supervisão direta."],
            ["Ajudante", "um trabalhador iniciante que ajuda os canalizadores e aprende no trabalho."],
            ["Licença", "autorização oficial de um estado ou cidade para fazer trabalhos de canalização."],
            ["American Job Center", "um serviço público gratuito dos EUA que ajuda as pessoas a encontrar formação e emprego."]
          ],
          slides: [
            { title: "Como aprende a maioria dos canalizadores", bullets: ["Aprendizagem paga de 4 ou 5 anos", "Cerca de 2,000 horas pagas por ano no trabalho", "Mais aulas"] },
            { title: "Licenças", bullets: ["A maioria dos estados e algumas cidades exigem licença", "Muitas vezes 2 a 5 anos de experiência e um exame", "Verifique a página oficial do seu estado"] },
            { title: "Onde procurar", bullets: ["Job Finder do apprenticeship.gov", "Sindicato local, empreiteiros, American Job Center"] },
            { title: "O seu plano", bullets: ["Regras oficiais da licença, com o endereço do site", "Duas aprendizagens, um emprego de ajudante", "Uma data em cada passo"] }
          ],
          sources: [
            { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Canalizadores, como se tornar um", url: BLS + "#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (pesquisa de aprendizagens)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License Finder (localizador de licenças)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Siga os passos para escrever o seu plano num papel ou num documento gratuito. Escreva pelo menos cinco passos, cada um com uma data, e o endereço de cada página oficial que usou. Junte-o ao seu desenho, à sua folha de cálculos e à sua lista de perigos: juntos, são o seu plano de início na canalização.",
          youCanNow: "escrever um plano com datas para entrar numa aprendizagem de canalizador e avançar para uma licença, usando fontes oficiais.",
          quickCheck: [
            { objective: "O5", q: "Onde deve verificar o que o seu estado exige para a licença de canalizador?", options: ["Num comentário de um vídeo", "Num anúncio de uma escola de formação", "Na opinião de um amigo", "Na página oficial da entidade de licenças do estado ou da cidade"], answer: 3, why: "As regras da licença mudam de lugar para lugar, e a página oficial é a que conta." },
            { objective: "O5", q: "Que passo do plano está escrito da forma mais útil?", options: ["\"Candidatar-me a duas aprendizagens de canalização do apprenticeship.gov até 1 de março\"", "\"Ver isso da canalização\"", "\"Tirar uma licença um dia\"", "\"Aprender muito\""], answer: 0, why: "Um passo útil diz a ação exata, onde e uma data." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança, reparações simples e o seu caminho",
        questions: [
          { objective: "O2", q: "Um canalizador vai soldar um tubo de cobre perto de uma parede de madeira. O que protege a parede?", options: ["Uma caixa de proteção de vala", "Uma proteção contra o calor, com um extintor por perto", "Proteção auditiva", "Um desentupidor"], answer: 1, why: "A proteção contra o calor bloqueia a chama, e o extintor está pronto em caso de incêndio." },
          { objective: "O2", q: "A sua equipa precisa de trabalhar numa vala funda com paredes de terra a direito e sem suporte. O que faz?", options: ["Entra depressa e sai depressa", "Entra se a terra parecer seca", "Não entra até ela ser inspecionada e protegida com taludes, escoramento ou uma caixa de proteção", "Manda entrar primeiro o trabalhador mais novo"], answer: 2, why: "A OSHA diz para nunca entrar numa vala se ela não tiver sido inspecionada e protegida." },
          { objective: "O4", q: "Ponha por ordem para um autoclismo que não para: (a) trocar a comporta, (b) fechar a válvula de corte, (c) verificar se há fugas, (d) puxar o autoclismo para esvaziar o tanque.", options: ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, b, a, d"], answer: 0, why: "Fechar, esvaziar o tanque, fazer a reparação e depois verificar se há fugas." },
          { objective: "O4", q: "Que trabalho deve um ajudante novo deixar para um canalizador com licença?", options: ["Usar o desentupidor num lava-loiça lento", "Trocar a comporta de uma sanita", "Mudar um tubo de gás para um fogão novo", "Pôr um balde debaixo de um sifão"], answer: 2, why: "O trabalho em tubos de gás exige formação e, em alguns estados, uma licença especial." },
          { objective: "O5", q: "Segundo o BLS, como aprende a profissão a maioria dos canalizadores?", options: ["Num curso online de duas semanas", "Num curso universitário de quatro anos", "A ver vídeos em casa", "Numa aprendizagem paga de 4 ou 5 anos"], answer: 3, why: "O BLS diz que a maioria aprende numa aprendizagem de 4 ou 5 anos, com formação paga no trabalho." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Canalização",
    questions: [
      { objective: "O1", q: "Que sistema leva a água usada e os resíduos para fora de um edifício?", options: ["O sistema de abastecimento de água", "O sistema de esgoto, resíduos e respiro", "O contador de água", "O esquentador"], answer: 1, why: "O sistema DWV leva os resíduos para fora pela gravidade e deixa entrar ar pelos respiros." },
      { objective: "O1", q: "Onde ficam normalmente as pequenas válvulas de corte de um lava-loiça?", options: ["Debaixo do lava-loiça", "No telhado", "Dentro do sifão", "No esgoto"], answer: 0, why: "As válvulas de corte dos aparelhos ficam normalmente debaixo do lava-loiça ou atrás da sanita." },
      { objective: "O1", q: "Para que serve um tubo de respiro?", options: ["Leva água quente ao chuveiro", "Guarda água para bloquear o gás de esgoto", "Mede o consumo de água", "Deixa entrar ar nos esgotos para que os sifões mantenham a água"], answer: 3, why: "Os respiros deixam entrar ar para que a água corra bem e não seja puxada para fora dos sifões." },
      { objective: "O1", q: "O que impede o gás de esgoto de subir pelo ralo de um lava-loiça?", options: ["A válvula de corte", "O contador de água", "O selo de água no sifão", "A torneira"], answer: 2, why: "A água guardada no sifão é um selo contra o gás de esgoto." },
      { objective: "O3", q: "Só para praticar: um esgoto de 10 pés tem de descer 1/4 de polegada por pé. Qual é a descida total?", options: ["2 1/2 polegadas", "10 polegadas", "1/4 de polegada", "4 polegadas"], answer: 0, why: "10 x 1/4 = 2 1/2 polegadas." },
      { objective: "O3", q: "Só para praticar: de centro a centro são 40 polegadas e cada folga de encaixe é de 1 polegada. Qual é o comprimento de corte?", options: ["40 polegadas", "39 polegadas", "42 polegadas", "38 polegadas"], answer: 3, why: "40 - 1 - 1 = 38 polegadas." },
      { objective: "O3", q: "Que tubo é de plástico flexível e usado no abastecimento de água?", options: ["Ferro fundido", "PEX", "ABS", "Aço galvanizado"], answer: 1, why: "O PEX é um tubo flexível para a água quente e fria." },
      { objective: "O3", q: "O que quer dizer \"tamanho nominal\" num tubo?", options: ["A sua medida exata por fora", "O seu peso", "Um tamanho comercial, não uma medida exata", "O seu preço"], answer: 2, why: "Os tamanhos dos tubos são nomes comerciais; as medidas reais por dentro e por fora são diferentes." },
      { objective: "O2", q: "Segundo o BLS, qual é uma lesão comum na canalização?", options: ["Queimaduras com tubos quentes e equipamento de soldar", "Escaldões causados por ecrãs", "Vista cansada de ler", "Perda de audição por causa da música"], answer: 0, why: "O BLS lista cortes, queimaduras com tubos quentes e equipamento de soldar, e quedas de escadas." },
      { objective: "O2", q: "Está a reparar uma fuga numa cave molhada perto de uma tomada. Qual é a escolha segura?", options: ["Ficar dentro da água para chegar mais depressa", "Manter-se longe dos fios elétricos enquanto está na água e perguntar ao supervisor sobre desligar a corrente", "Usar um berbequim com fio dentro da água", "Tocar na tomada para ver se funciona"], answer: 1, why: "Eletricidade e água são uma mistura mortal, por isso fique afastado e trate primeiro da corrente." },
      { objective: "O2", q: "Porque deve lavar as mãos depois de desentupir um esgoto, mesmo que tenha usado luvas?", options: ["Para fazer o tubo brilhar", "É só um hábito", "As luvas não são permitidas", "O esgoto tem micróbios que podem fazer você adoecer"], answer: 3, why: "As luvas ajudam, mas lavar as mãos tira os micróbios antes de comer ou de tocar na cara." },
      { objective: "O4", q: "Qual é o padrão seguro para uma reparação simples?", options: ["Reparar primeiro, depois fechar a água", "Fechar, aliviar a pressão, proteger a zona, reparar, abrir devagar, verificar fugas", "Abrir a água toda e depois reparar", "Verificar fugas antes de começar e depois ir embora"], answer: 1, why: "Todas as reparações simples começam por fechar a água e terminam com a verificação de fugas." },
      { objective: "O4", q: "Depois de fechar a água de um lava-loiça, porque abrir a torneira antes de tirar um tubo?", options: ["Para aliviar a pressão e a água não espirrar", "Para aquecer o tubo", "Para testar o respiro", "Para encher o sifão"], answer: 0, why: "Abrir a torneira escoa a pressão que ficou no tubo." },
      { objective: "O4", q: "Um lava-loiça escoa devagar. O que experimenta primeiro?", options: ["Cortar o tubo de esgoto", "Pedir uma licença de obra", "Um desentupidor", "Fechar o gás geral"], answer: 2, why: "O desentupidor é o primeiro passo simples antes de desmontar o sifão." },
      { objective: "O4", q: "Uma gota de corante alimentar no tanque da sanita aparece na sanita sem puxar o autoclismo. O que isso lhe diz?", options: ["O respiro está entupido", "O esquentador está avariado", "O sifão está seco", "A comporta ainda tem fuga"], answer: 3, why: "Se a cor passa para a sanita sem puxar o autoclismo, a água está a fugir pela comporta." },
      { objective: "O5", q: "Este curso vai:", options: ["Dar-lhe uma licença de canalizador", "Contar como a sua aprendizagem", "Preparar você para se formar e se candidatar; não lhe dá licença", "Substituir o exame do seu estado"], answer: 2, why: "As licenças vêm do estado ou da cidade, depois da experiência e do exame que exigem." },
      { objective: "O5", q: "Que site gratuito pode ajudar a encontrar aprendizagens de canalização perto de você?", options: ["Um anúncio que aparece no ecrã", "apprenticeship.gov", "Um fórum de empregos qualquer", "Uma secção de comentários de vídeos"], answer: 1, why: "O apprenticeship.gov é o site do Departamento do Trabalho dos EUA, com um Apprenticeship Job Finder." },
      { objective: "O5", q: "O que diz o BLS sobre as licenças de canalizador?", options: ["A maioria dos estados e algumas localidades exigem-nas, muitas vezes depois de 2 a 5 anos de experiência e de um exame", "Nenhum estado exige licença", "Só os canalizadores das grandes cidades precisam", "Recebe-se uma ao comprar ferramentas"], answer: 0, why: "O BLS diz que a maioria dos estados e algumas localidades exigem licença, muitas vezes com experiência e exame." },
      { objective: "O5", q: "Uma escola promete um curso rápido de canalização. Que pergunta ajuda mais antes de pagar?", options: ["O edifício é novo?", "De que cor são as camisolas?", "Posso começar numa segunda-feira?", "Leva a uma aprendizagem ou a um emprego, e as horas contam para a licença do meu estado?"], answer: 3, why: "Uma boa formação leva a um emprego e conta para as regras da licença no lugar onde vive." },
      { objective: "O5", q: "Que passo do plano está completo?", options: ["\"Ligar para o sindicato local de canalizadores sobre a aprendizagem de canalização até 10 de abril, depois de ler a página de licenças do estado\"", "\"Aprender canalização\"", "\"Candidatar-me a algum lado em breve\"", "\"Pensar numa licença\""], answer: 0, why: "Diz a ação, a quem, quando e a fonte oficial a verificar primeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno ganhou
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 5, 8, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Desenho do abastecimento e do esgoto", objective: "O1", notYet: "Faltam partes, ou as setas apontam para o lado errado.", meets: "Água quente e fria, válvulas de corte, sifão, esgoto e respiro estão identificados, com as setas no sentido certo.", exceeds: "Mostra também onde está a válvula de corte geral e explica numa frase porque o sifão e o respiro são importantes." },
      { name: "Matemática da canalização", objective: "O3", notYet: "Os comprimentos de corte ou a inclinação têm erros, ou os cálculos não estão à vista.", meets: "Dois comprimentos de corte e uma inclinação de esgoto, pelo menos 4 de 5 exercícios certos, com os cálculos à vista.", exceeds: "Tudo certo, e o aluno explica de onde vêm as folgas de encaixe e as inclinações reais." },
      { name: "Lista de perigos", objective: "O2", notYet: "Menos de cinco perigos, ou a proteção não corresponde ao perigo.", meets: "Pelo menos cinco perigos, cada um ligado a um passo seguro ou ao equipamento certo.", exceeds: "Inclui também o que fazer se sentir cheiro a gás e quando parar e perguntar ao supervisor." },
      { name: "Ordem segura da reparação", objective: "O4", notYet: "Uma reparação começa sem fechar a água ou acaba sem verificar fugas.", meets: "As duas reparações estão numa ordem segura, desde fechar a água até verificar fugas.", exceeds: "Diz também que trabalhos são para um canalizador com licença e porquê." },
      { name: "Plano com datas e fontes oficiais", objective: "O5", notYet: "Os passos não têm datas, ou as regras da licença vêm de anúncios ou publicações.", meets: "Pelo menos cinco passos com datas, duas aprendizagens ou programas reais, e as regras da licença tiradas da página oficial, com o endereço do site.", exceeds: "Inclui também um emprego de ajudante para se candidatar enquanto espera e perguntas a fazer a cada programa." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a uma aprendizagem ou programa de formação de canalização em 90 dias",
      "Alunos aceites numa aprendizagem ou contratados como ajudantes de canalizador em 6 meses",
      "Alunos que ficam na aprendizagem ou no emprego de ajudante pelo menos 6 meses (dito por eles no seguimento)",
      "Os programas parceiros dizem que os candidatos chegam a conhecer as peças, as palavras, a matemática e os passos de segurança básicos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para ler as páginas do BLS, da OSHA, da EPA, do apprenticeship.gov e de licenças do estado",
      "Papel, caneta, uma fita métrica ou régua e uma calculadora (a calculadora do telefone serve)",
      "Opcional: um lava-loiça ou uma sanita para observar (nunca desmonte nada neste curso), ou fotos de um sifão e de acessórios de tubos",
      "Opcional, para programas: amostras de tubos e acessórios (PVC, PEX, cobre) para passar de mão em mão, sem ferramentas nem maçaricos"
    ],
    facilitatorNotes: [
      "Este curso ensina conhecimentos, passos e segurança. Não ponha os alunos a soldar, cortar tubos ou trabalhar em água, gás ou esgotos ativos neste curso; as competências práticas são para uma oficina supervisionada, com um instrutor qualificado.",
      "Antes da sessão, procure a página de licenças de canalização do seu estado e as aprendizagens próximas, para os alunos as poderem ver juntos.",
      "Pratique no quadro os cálculos de comprimento de corte e de inclinação com vários exemplos inventados; muitos alunos precisam de ajuda com frações.",
      "Convide um canalizador local, um coordenador de formação de um sindicato ou um patrocinador de aprendizagens para falar de um dia normal de trabalho e de como se candidatar.",
      "Os alunos com registo criminal devem perguntar à entidade de licenças como avalia os registos antes de pagar uma formação.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
