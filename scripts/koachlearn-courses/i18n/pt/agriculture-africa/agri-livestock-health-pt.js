"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-livestock-health.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no drug or vaccine doses; follow the vet and the label.

const WOAH_ND = { name: "Organização Mundial da Saúde Animal (WOAH): doença de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const FAO_ND_VILLAGE = { name: "FAO: Doença de Newcastle nas galinhas de aldeia", url: "https://www.fao.org/4/y5162e/y5162e05.htm" };
const FAO_BIOSEC = { name: "FAO: Boas práticas de biossegurança na produção avícola comercial de pequena escala e de galinhas soltas no Quénia", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const FAO_PRUDENT = { name: "FAO: Uso prudente e eficiente de antimicrobianos em suínos e aves (veterinários, planos de saúde, intervalos de segurança)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };
const VCN = { name: "Veterinary Council of Nigeria (registo dos médicos veterinários da Nigéria)", url: "https://vcn.gov.ng" };

module.exports = {
  id: "agri-livestock-health-pt",
  lang: "pt",
  translationOf: "agri-livestock-health",
  category: "Agriculture (Africa)",
  name: "Saúde e Maneio do Gado",
  skills: "Distinguir um animal saudável de um doente, Alimentar e dar água bem, Manter as instalações limpas e seguras, Planear as vacinas com um veterinário, Proteger as aves da doença de Newcastle, Controlar os parasitas e manter registos de saúde",
  outcome: "seguir um plano de saúde simples para o seu gado bovino, cabras ou aves: ver todos os animais todos os dias à procura de sinais de doença, alimentá-los e dar-lhes água bem, manter as instalações limpas, seguir um calendário de vacinas feito com o seu veterinário local, manter a doença de Newcastle e os parasitas longe, registar cada tratamento e saber quando chamar o veterinário.",
  about: [
    "Este curso é para pequenos criadores e criadores em crescimento, pastores, avicultores, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que criam bois, cabras, ovelhas ou galinhas. Animais saudáveis crescem mais depressa, dão mais leite e ovos e valem mais no mercado; um único surto de doença pode acabar com anos de poupanças.",
    "O Capítulo 1 trata dos cuidados do dia a dia: distinguir um animal saudável de um doente, a alimentação e a água, e as instalações e a higiene. O Capítulo 2 trata da prevenção e do tratamento: calendários de vacinas com um veterinário, biossegurança das aves e doença de Newcastle, e parasitas, registos e quando chamar o veterinário.",
    "Este curso não dá doses de medicamentos nem de vacinas. As doenças, as vacinas e os medicamentos aprovados mudam de país para país e de zona para zona, por isso siga sempre o seu veterinário local ou técnico de saúde animal e o rótulo do produto. Cada lição dura cerca de cinco minutos e termina com uma tarefa com os seus próprios animais. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de saúde de uma página para os seus animais (os seus, ou um exemplo como 3 vacas leiteiras em Kiambu, 15 cabras em Kano ou 200 galinhas poedeiras perto de Kumasi): a sua verificação diária de saúde, o plano de alimentação e de água incluindo a época seca, duas regras de instalações e higiene, o calendário de vacinas combinado com o seu veterinário, as suas regras de biossegurança (para as aves: doença de Newcastle), como vai controlar as lombrigas e as carraças, os registos que vai manter e os sinais que o fazem chamar logo o veterinário, com o nome e o número do veterinário.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos criadores e criadores em crescimento, pastores, avicultores, trabalhadores agrícolas e jovens agricultores no Quénia, na Nigéria, no Gana e em toda a África que criam bois, cabras, ovelhas ou galinhas.",
    startingPoint: "A maioria olha para os animais todos os dias e trata a doença quando a vê, muitas vezes com medicamentos comprados sem o conselho de um veterinário. Poucos seguem um calendário de vacinas escrito, cumprem regras de biossegurança, registam os tratamentos e os intervalos de segurança, ou planeiam a alimentação e a água para a época seca.",
    gap: "Um único surto de doença pode acabar com anos de poupanças, e a má alimentação, as instalações sujas, os parasitas e o mau uso de medicamentos reduzem o leite, os ovos e o crescimento e podem fazer mal às pessoas. Um plano de saúde simples e escrito, feito com um veterinário, mantém os animais saudáveis, evita perdas e mantém seguros os alimentos que saem da exploração.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo de saúde animal é explicado",
      "Aparelhos: um telefone simples e um caderno para os registos e o número do veterinário",
      "Sem doses de medicamentos nem de vacinas: as doenças, as vacinas e os medicamentos aprovados mudam de zona para zona; os alunos seguem o veterinário e o rótulo",
      "Segurança: algumas doenças dos animais passam para as pessoas; nunca abra o corpo de um animal que morreu de repente a sangrar",
      "Tempo: lições de cerca de 5 minutos, que cabem entre os cuidados com os animais"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Durante a verificação diária dos seus animais", action: "identificar os sinais de um animal saudável e de um doente e separar um que possa estar doente", standard: "dizendo pelo menos cinco sinais de alerta e contactando o veterinário ou o técnico de saúde animal" },
    { id: "O2", condition: "Para os seus animais ao longo do ano", action: "planear a alimentação e a água limpa, incluindo a época seca", standard: "sem ração com bolor e com as mudanças de alimentação feitas devagar" },
    { id: "O3", condition: "Para as instalações dos seus animais", action: "verificar as instalações e definir regras de higiene para a exploração", standard: "com instalações secas, com sombra e sem animais apertados, os animais novos mantidos à parte e os doentes separados" },
    { id: "O4", condition: "Com um veterinário registado ou um técnico de saúde animal", action: "combinar um calendário de vacinas escrito e manter as vacinas frescas e dentro do prazo", standard: "com cada vacina, os animais, a idade e quando repetir" },
    { id: "O5", condition: "Para um bando de aves", action: "definir regras de biossegurança e um plano para um surto de doença de Newcastle", standard: "com a vacinação no calendário do veterinário e os passos a seguir se as aves morrerem de repente" },
    { id: "O6", condition: "Para a sua manada ou o seu bando", action: "planear o controlo dos parasitas com o seu veterinário, manter um registo dos tratamentos e fazer a lista dos sinais que pedem logo o veterinário", standard: "registando cada tratamento com o seu intervalo de segurança" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Cuidados do dia a dia",
      lessons: [
        {
          objectives: ["O1"],
          title: "Sinais de um animal saudável e de um animal doente",
          minutes: 5,
          goal: "Fazer uma verificação diária rápida e reparar num animal que possa estar doente.",
          text: [
            "Ninguém conhece os seus animais melhor do que você. Uma olhadela diária, à hora de dar de comer ou de ordenhar, apanha a doença cedo, quando o tratamento é mais barato e antes de ela se espalhar.",
            "Um animal saudável está atento e curioso, fica de pé e anda normalmente, come e bebe bem, e os bois, as cabras e as ovelhas ruminam quando descansam. Os olhos estão brilhantes e limpos, o focinho está limpo, o pelo ou as penas estão lisos e brilhantes, a respiração é calma, e o estrume e a urina parecem normais. Uma galinha saudável é ativa, tem a crista vermelha viva e põe ovos como de costume.",
            "Sinais de alerta: ficar afastado do grupo, cabeça baixa, não comer ou não ruminar, olhos baços ou a escorrer, focinho a escorrer, tosse ou respiração rápida, diarreia ou sangue no estrume, coxear, inchaços, feridas, uma queda repentina do leite ou dos ovos, penas eriçadas, pescoço torcido nas aves, ou mortes repentinas. Separe o animal doente dos outros e contacte o seu veterinário ou técnico de saúde animal."
          ],
          steps: ["Veja todos os animais uma vez por dia, à hora de dar de comer ou de ordenhar.", "Olhe: atento, de pé e a andar normalmente, a comer, a ruminar.", "Olhe mais de perto: olhos, focinho, pelo ou penas, respiração, estrume.", "Repare em qualquer queda do leite ou dos ovos.", "Separe qualquer animal com sinais de alerta.", "Escreva o que viu e ligue para o seu veterinário ou técnico de saúde animal."],
          words: [["Ruminar", "quando os bois, as cabras e as ovelhas fazem voltar a comida à boca e a mastigam outra vez; é um sinal de boa saúde."], ["Isolar", "manter um animal doente longe dos outros."], ["Técnico de saúde animal", "um trabalhador formado, do governo ou privado, que ajuda os criadores com a saúde dos animais."]],
          slides: [
            { title: "Saudável", bullets: ["Atento, anda normalmente, come e bebe", "Rumina; olhos brilhantes, focinho limpo", "Pelo ou penas lisos; estrume normal"] },
            { title: "Sinais de alerta", bullets: ["Sozinho, cabeça baixa, não come", "Olhos ou focinho a escorrer, tosse, diarreia", "Coxeia, inchaços, menos leite ou ovos"] },
            { title: "Agir cedo", bullets: ["Veja todos os animais todos os dias", "Separe qualquer animal doente", "Ligue para o veterinário ou técnico de saúde animal"] }
          ],
          tryIt: "Amanhã, à hora de dar de comer, veja cada animal com a lista: atento, a comer, a ruminar, olhos, focinho, pelo, respiração, estrume. Escreva uma linha por animal (ou por capoeira, para as aves). Marque os que vai vigiar ou por causa de quem vai chamar o veterinário.",
          youCanNow: "fazer uma verificação diária de saúde e reparar nos sinais de um animal doente.",
          quickCheck: [
            { objective: "O1", q: "Que sinal é de alerta numa galinha?", options: ["Uma crista vermelha viva", "Pôr ovos como de costume", "Estar ativa e comer bem", "Penas eriçadas"], answer: 3, why: "As penas eriçadas são um sinal de alerta; uma galinha saudável é ativa e tem a crista vermelha viva." },
            { objective: "O1", q: "Está ocupado e pensa ver os seus animais só uma vez por semana. Qual é o risco?", options: ["Os animais vão comer mais", "A doença é apanhada tarde, quando o tratamento custa mais e ela já se pode ter espalhado", "O leite vai melhorar", "Não há risco"], answer: 1, why: "Uma olhadela diária apanha a doença cedo, quando o tratamento é mais barato e antes de ela se espalhar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Alimentação e água",
          minutes: 5,
          goal: "Planear a alimentação e a água limpa dos seus animais ao longo do ano, incluindo a época seca.",
          text: [
            "A água vem primeiro. Os animais precisam de água limpa todos os dias, e de mais quando está calor; uma vaca a dar leite bebe muito mais do que uma vaca seca, e o leite baixa depressa sem água suficiente. Mantenha os bebedouros limpos e à sombra, e nunca deixe as aves beber água suja e parada.",
            "Os bois, as cabras e as ovelhas precisam de forragem grosseira (capim, forragens como o capim-elefante (Napier), o capim-de-rhodes, o desmódio ou a luzerna, e restos de culturas como a palha de milho e as ramas de feijão), e de energia e proteína para os animais que dão leite, estão prenhes ou estão a crescer. As cabras também comem arbustos e folhas de árvores. Dê blocos minerais ou sal como o seu veterinário ou extensionista aconselhar. As galinhas criadas para ovos ou para carne precisam de uma ração equilibrada; as galinhas de aldeia procuram comida sozinhas, mas põem e crescem melhor com algum grão a mais, verduras e água limpa.",
            "Planeie a época seca: cultive forragem e guarde feno, silagem ou restos de culturas secos quando há muito. Nunca dê comida com bolor: o bolor pode ter aflatoxina, que faz mal aos animais e passa para o leite e os ovos. Mude a alimentação devagar, ao longo de vários dias, para evitar problemas de estômago."
          ],
          steps: ["Dê água limpa todos os dias; mais quando está calor e para os animais a dar leite.", "Limpe os bebedouros e comedouros; mantenha-os à sombra.", "Planeie a forragem grosseira: pasto, forragens e restos de culturas.", "Junte energia e proteína para os animais a dar leite, prenhes e a crescer.", "Guarde feno, silagem ou restos de culturas para a época seca.", "Deite fora a comida com bolor; mude a alimentação devagar."],
          words: [["Forragem grosseira", "alimento volumoso como capim, feno e restos de culturas."], ["Forragem", "culturas semeadas para alimentar os animais, como o capim-elefante (Napier) ou a luzerna."], ["Silagem", "forragem verde guardada sem ar para durar meses."], ["Bloco mineral", "um bloco de sal e minerais que os animais lambem."]],
          slides: [
            { title: "A água primeiro", bullets: ["Água limpa todos os dias", "Mais com calor e para os animais a dar leite", "Bebedouros limpos, à sombra"] },
            { title: "Alimentação", bullets: ["Forragem grosseira: capim, forragens, restos de culturas", "Mais energia e proteína para dar leite e crescer", "Minerais como o veterinário aconselhar"] },
            { title: "Planear e proteger", bullets: ["Guarde feno, silagem ou restos para a época seca", "Nunca dê comida com bolor", "Mude a alimentação devagar"] }
          ],
          tryIt: "Faça a lista dos alimentos que os seus animais comem agora e de onde vem cada um. Marque os que acabam na época seca e escreva uma forma de guardar ou cultivar mais antes disso. Veja hoje todos os bebedouros e limpe os que estiverem sujos.",
          youCanNow: "planear a alimentação e a água limpa dos seus animais ao longo do ano.",
          quickCheck: [
            { objective: "O2", q: "Qual destes é forragem grosseira para os bois?", options: ["Palha de milho e ramas de feijão", "Só sal", "Só um bloco mineral", "Água limpa"], answer: 0, why: "A forragem grosseira inclui capim, forragens e restos de culturas como a palha de milho e as ramas de feijão." },
            { objective: "O2", q: "Num dia de calor, o bebedouro da sua vaca leiteira está vazio e sujo. O que faz?", options: ["Espera até à noite", "Dá-lhe mais comida seca em vez disso", "Limpa-o e enche-o com água limpa, à sombra", "Deixa-a beber numa poça de água parada"], answer: 2, why: "Os animais precisam de água limpa todos os dias, mais quando está calor, e o leite baixa depressa sem ela." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Instalações e higiene",
          minutes: 5,
          goal: "Verificar as instalações dos seus animais e definir três regras de higiene para a sua exploração.",
          text: [
            "Boas instalações mantêm os animais secos, à sombra, protegidos de ladrões e de animais selvagens, e sem estarem apertados. Precisam de ar fresco sem correntes de ar frio, de um chão seco que escoe a água e de espaço para cada animal se deitar, comer e beber. Instalações apertadas, húmidas e sujas espalham doenças, lombrigas e problemas nas patas.",
            "Mantenha-as limpas: tire muitas vezes o estrume e a cama molhada (dá um bom composto), limpe os comedouros e os bebedouros, e controle as moscas, os ratos e as aves selvagens. Para as aves, use cama seca e troque-a quando estiver molhada. Lave as mãos depois de mexer nos animais, sobretudo nos doentes.",
            "Mantenha a doença fora e não a deixe sair: mantenha os animais novos longe da sua manada ou do seu bando durante o tempo que o seu veterinário aconselhar antes de os juntar, e mantenha os animais doentes num curral à parte. Algumas doenças dos animais também passam para as pessoas, como a brucelose e o carbúnculo (antraz). Se um animal morrer de repente com sangue a sair do nariz ou de outras aberturas, não abra o corpo; mantenha as pessoas e os animais longe e chame logo o veterinário. Livre-se dos animais mortos como o seu veterinário ou técnico de saúde animal disser."
          ],
          steps: ["Verifique as instalações: secas, com sombra, arejadas, com escoamento, sem animais apertados.", "Tire muitas vezes o estrume e a cama molhada.", "Limpe os comedouros e bebedouros; controle as moscas e os ratos.", "Mantenha os animais novos à parte antes de os juntar, como o veterinário aconselhar.", "Tenha um curral à parte para os animais doentes.", "Lave as mãos depois de mexer nos animais; chame o veterinário se houver mortes repentinas."],
          words: [["Cama", "material seco, como aparas de madeira, posto no chão de um aviário."], ["Quarentena", "manter animais novos ou doentes à parte para a doença não se espalhar."], ["Zoonose", "uma doença que pode passar entre os animais e as pessoas."], ["Carcaça", "o corpo de um animal morto."]],
          slides: [
            { title: "Boas instalações", bullets: ["Secas, com sombra, arejadas, sem correntes de ar", "Chão que escoa a água", "Espaço para deitar, comer e beber; protegidas de ladrões"] },
            { title: "Manter limpo", bullets: ["Tire muitas vezes o estrume e a cama molhada", "Limpe os comedouros e bebedouros", "Controle as moscas, os ratos e as aves selvagens"] },
            { title: "Manter a doença fora", bullets: ["Animais novos à parte antes de os juntar", "Curral à parte para os animais doentes", "Lave as mãos depois de mexer nos animais"] },
            { title: "Morte repentina", bullets: ["Não abra a carcaça", "Mantenha as pessoas e os animais longe", "Chame logo o veterinário"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Percorra a casa ou o curral dos seus animais com a lista: seco, com sombra, arejado, com escoamento, sem animais apertados, bebedouros limpos. Escreva uma coisa para arranjar esta semana e três regras de higiene para todos os que trabalham com os seus animais.",
          youCanNow: "verificar as instalações e mantê-las limpas, manter os animais doentes e novos à parte, e agir com segurança perante uma morte repentina.",
          quickCheck: [
            { objective: "O3", q: "Porque é que se tira muitas vezes o estrume e a cama molhada?", options: ["Para os animais comerem menos", "Para poupar comida", "Instalações sujas e húmidas espalham doenças, lombrigas e problemas nas patas", "Para a casa parecer vazia"], answer: 2, why: "Instalações apertadas, húmidas e sujas espalham doenças, lombrigas e problemas nas patas." },
            { objective: "O3", q: "A chuva entrou no seu galinheiro e a cama está molhada. O que faz?", options: ["Troca a cama molhada por cama seca e arranja o buraco", "Deixa-a secar sozinha", "Põe comida por cima", "Leva as aves para a chuva"], answer: 0, why: "As aves precisam de cama seca; a cama molhada é trocada e a causa é arranjada." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Cuidados do dia a dia",
        questions: [
          { objective: "O1", q: "Qual é um sinal de uma vaca ou cabra saudável?", options: ["Ficar sozinha com a cabeça baixa", "Ruminar enquanto descansa", "Olhos e focinho a escorrer", "Não beber"], answer: 1, why: "Ruminar mostra que o estômago está a funcionar normalmente." },
          { objective: "O1", q: "Uma cabra não come e fica afastada da manada. O que faz primeiro?", options: ["Espera uma semana", "Vende-a logo", "Separa-a e contacta o seu veterinário ou técnico de saúde animal", "Dá-lhe qualquer medicamento da loja"], answer: 2, why: "Isolá-la protege a manada, e o veterinário pode descobrir a causa." },
          { objective: "O2", q: "O seu farelo de milho ganhou bolor. O que deve fazer?", options: ["Deitá-lo fora; não o dar aos animais", "Dá-lo às galinhas", "Misturá-lo com boa comida", "Dá-lo só às vacas a dar leite"], answer: 0, why: "O bolor pode ter aflatoxina, que faz mal aos animais e passa para o leite e os ovos." },
          { objective: "O2", q: "Como se deve preparar para a época seca?", options: ["Vender todos os bebedouros", "Dar feno com bolor", "Deixar de dar água", "Cultivar forragem e guardar feno, silagem ou restos de culturas"], answer: 3, why: "A comida guardada leva os animais até ao fim da época seca." },
          { objective: "O3", q: "Uma vaca morre de repente com sangue a sair do nariz. O que faz?", options: ["Abre-a para ver a causa", "Não a abre; mantém as pessoas longe e chama logo o veterinário", "Vende a carne depressa", "Deixa-a para os cães"], answer: 1, why: "Uma morte repentina com sangue pode ser carbúnculo (antraz), que pode passar para as pessoas; a carcaça não pode ser aberta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Prevenir e tratar doenças",
      lessons: [
        {
          objectives: ["O4"],
          title: "Calendários de vacinas com o seu veterinário local",
          minutes: 5,
          goal: "Combinar um calendário de vacinas escrito com um veterinário registado e manter as vacinas a funcionar.",
          text: [
            "As vacinas evitam muitas doenças graves do gado por muito menos dinheiro do que o tratamento. As vacinas de que os seus animais precisam, e quando, dependem do seu país, da sua zona e das doenças que lá existem. Exemplos comuns são a febre aftosa, a dermatose nodular, o carbúnculo (antraz) e o carbúnculo sintomático nos bois; a peste dos pequenos ruminantes (PPR) nas cabras e ovelhas; e a doença de Newcastle, a doença de Gumboro e a varíola aviária nas aves. Só um veterinário ou técnico de saúde animal que conheça a sua zona pode dar o calendário certo.",
            "Peça ao seu veterinário para escrever um calendário do ano: cada vacina, para que animais, com que idade e quando repetir. Use um médico veterinário registado ou um trabalhador de saúde animal formado. Na Nigéria, o Veterinary Council of Nigeria mantém o registo dos médicos veterinários; no Quénia, o Kenya Veterinary Board regista os veterinários e os paraveterinários; no Gana, a Veterinary Services Directorate do Ministério da Alimentação e Agricultura (MoFA) gere os serviços de saúde animal e as campanhas de vacinação. As campanhas do governo às vezes são grátis ou baratas, por isso esteja atento aos anúncios.",
            "As vacinas são produtos vivos ou delicados. Compre-as só em lojas agroveterinárias licenciadas, veja o prazo de validade, mantenha-as frescas (numa caixa térmica ou num frigorífico, longe do sol) desde a loja até ao animal, e use-as como dizem o rótulo e o veterinário. Uma vacina que aqueceu pode não proteger os seus animais."
          ],
          steps: ["Pergunte a um veterinário registado ou técnico de saúde animal que doenças são um risco na sua zona.", "Peça um calendário do ano por escrito: vacina, animais, idade, datas para repetir.", "Compre vacinas só em lojas agroveterinárias licenciadas; veja o prazo de validade.", "Mantenha as vacinas frescas desde a loja até ao animal.", "Use-as exatamente como dizem o rótulo e o veterinário.", "Registe cada vacinação: data, animais, vacina, lote, quem a deu."],
          words: [["Vacina", "um produto que ensina o corpo de um animal a lutar contra uma doença antes de ele ficar doente."], ["Calendário de vacinas", "um calendário de que vacinas dar, a que animais e quando."], ["Cadeia de frio", "manter as vacinas frescas durante todo o caminho, desde o fabricante até ao animal."], ["PPR", "peste dos pequenos ruminantes, uma doença mortal causada por um vírus nas cabras e ovelhas."]],
          slides: [
            { title: "Porquê vacinar", bullets: ["Prevenir é muito mais barato do que tratar", "As vacinas dependem da sua zona", "Só um veterinário local pode fazer o calendário"] },
            { title: "Exemplos comuns", bullets: ["Bois: febre aftosa, dermatose nodular, carbúnculo, carbúnculo sintomático", "Cabras e ovelhas: PPR", "Aves: doença de Newcastle, Gumboro, varíola aviária"] },
            { title: "Use ajuda registada", bullets: ["Nigéria: Veterinary Council of Nigeria", "Quénia: Kenya Veterinary Board", "Gana: Veterinary Services Directorate (MoFA)"] },
            { title: "Manter as vacinas a funcionar", bullets: ["Lojas agroveterinárias licenciadas; veja a validade", "Mantenha frescas desde a loja até ao animal", "Siga o rótulo e o veterinário"] }
          ],
          sources: [VCN],
          tryIt: "Ligue ou vá ter com o seu veterinário local ou técnico de saúde animal e pergunte: contra que doenças devo vacinar os meus animais aqui, e quando? Escreva a resposta como um calendário de 12 meses e guarde o número do veterinário no seu telefone.",
          youCanNow: "obter um calendário de vacinas de um veterinário registado e manter as vacinas frescas e eficazes.",
          quickCheck: [
            { objective: "O4", q: "Qual é uma doença das aves que se evita com vacina?", options: ["Febre da Costa Leste", "Doença de Newcastle", "Brucelose nas cabras", "Podridão dos cascos"], answer: 1, why: "A doença de Newcastle, a doença de Gumboro e a varíola aviária são doenças comuns das aves evitadas com vacinas." },
            { objective: "O4", q: "O seu veterinário deu as primeiras vacinas mas não escreveu nada. O que pede?", options: ["Uma vacina mais barata", "Nada; vai lembrar-se", "Uma vacina para todas as doenças do mundo", "Um calendário do ano por escrito: cada vacina, que animais, com que idade e quando repetir"], answer: 3, why: "Um calendário escrito pelo veterinário mantém todas as vacinas a tempo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Biossegurança das aves e doença de Newcastle",
          minutes: 5,
          goal: "Definir regras de biossegurança que mantenham a doença de Newcastle e outras infeções longe do seu bando.",
          text: [
            "A doença de Newcastle é uma das doenças mais graves das aves em África. A Organização Mundial da Saúde Animal (WOAH) descreve sinais como falta de ar, tosse e espirros; sinais nervosos como tremores, paralisia e pescoço torcido; diarreia; e uma queda na postura de ovos. As mortes podem chegar a 100 por cento de um bando, e quase todas as aves de um bando podem ficar infetadas em poucos dias.",
            "A WOAH explica que ela se espalha pelo contacto com aves doentes e com os seus excrementos, e pela comida, água, equipamento e roupa contaminados. É por isso que a biossegurança, os passos simples do dia a dia que mantêm os micróbios fora, é tão importante como a vacinação. O guia da FAO para bandos de pequena escala no Quénia sublinha que muitos destes passos custam pouco ou nada.",
            "Vacine o bando todo contra a doença de Newcastle no calendário que o seu veterinário der. Para as galinhas de aldeia, a FAO descreve vacinas que aguentam o calor (como a I-2) e que se podem dar em gotas nos olhos; pergunte ao seu técnico de saúde animal o que existe. Se muitas aves adoecerem ou morrerem de repente, mantenha o bando fechado, avise logo o veterinário ou o técnico de saúde animal, e não venda nem mude as aves de lugar. A WOAH aconselha deixar um aviário limpo sem aves durante 21 dias antes de pôr aves novas depois de um surto."
          ],
          steps: ["Não deixe visitas entrar no aviário; lave as mãos e use um pedilúvio ou sapatos só para lá.", "Compre aves só de fontes de confiança e saudáveis; mantenha primeiro as aves novas à parte.", "Mantenha as aves selvagens, os ratos e as aves dos outros longe da comida e da água.", "Limpe e desinfete muitas vezes os bebedouros, os comedouros e as caixas.", "Vacine o bando todo no calendário do veterinário.", "Se as aves adoecerem ou morrerem de repente: feche o bando, chame o veterinário, não venda nem mude as aves de lugar."],
          words: [["Biossegurança", "passos simples do dia a dia que mantêm os micróbios fora de uma exploração e não os deixam espalhar."], ["Doença de Newcastle", "uma doença das aves causada por um vírus, que se espalha depressa e pode matar um bando inteiro."], ["Pedilúvio", "um tabuleiro com desinfetante onde as pessoas põem os pés antes de entrar numa casa de animais."], ["Vacina termoestável", "uma vacina que aguenta melhor o calor, útil nas aldeias; mesmo assim deve ser mantida o mais fresca possível."]],
          slides: [
            { title: "Doença de Newcastle (WOAH)", bullets: ["Falta de ar, tosse, pescoço torcido, diarreia", "Menos ovos; mortes até 100 por cento", "Bando todo infetado em poucos dias"] },
            { title: "Como se espalha", bullets: ["Aves doentes e os seus excrementos", "Comida, água, equipamento e roupa contaminados", "A biossegurança trava-a; muito dela é grátis"] },
            { title: "Regras de biossegurança", bullets: ["Poucas visitas; lavar as mãos; pedilúvio", "Aves novas primeiro à parte", "Aves selvagens e ratos longe; bebedouros limpos"] },
            { title: "Vacinar e agir depressa", bullets: ["O bando todo, no calendário do veterinário", "Galinhas de aldeia: pergunte por vacinas em gotas nos olhos", "Mortes repentinas: feche, chame o veterinário, não venda"] }
          ],
          sources: [WOAH_ND, FAO_ND_VILLAGE, FAO_BIOSEC],
          tryIt: "Escreva cinco regras de biossegurança para as suas aves e afixe-as na porta do aviário. Depois pergunte ao seu veterinário ou técnico de saúde animal quando deve ser a próxima vacinação do seu bando contra a doença de Newcastle e junte-a ao seu calendário.",
          youCanNow: "proteger um bando da doença de Newcastle com biossegurança e vacinação, e agir depressa se as aves morrerem.",
          quickCheck: [
            { objective: "O5", q: "O que é a biossegurança?", options: ["Um tipo de vacina", "Uma raça de galinha", "Um suplemento alimentar", "Os passos simples do dia a dia que mantêm os micróbios fora de uma exploração"], answer: 3, why: "A biossegurança são os passos do dia a dia que mantêm os micróbios fora, e muitos custam pouco ou nada." },
            { objective: "O5", q: "Um vizinho cujas aves estiveram doentes quer pedir emprestados os seus tabuleiros de ovos e os seus comedouros. O que faz?", options: ["Empresta e volta a usá-los quando voltarem", "Não partilha o equipamento, porque os micróbios espalham-se nele", "Empresta só por um dia", "Troca as suas aves em vez disso"], answer: 1, why: "A doença de Newcastle espalha-se pela comida, água, equipamento e roupa contaminados." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Parasitas, registos e quando chamar o veterinário",
          minutes: 6,
          goal: "Planear o controlo dos parasitas com o seu veterinário, manter um registo dos tratamentos e conhecer os sinais que pedem logo o veterinário.",
          text: [
            "As lombrigas dentro dos intestinos e as carraças, os ácaros e as pulgas por fora tiram sangue, atrasam o crescimento e espalham doenças; as carraças espalham a febre da Costa Leste nos bois na África Oriental. Os sinais de lombrigas incluem crescimento fraco, pelo áspero, barriga inchada, diarreia e pálpebras ou gengivas pálidas. Reduza os parasitas com instalações limpas e secas, levando os animais que pastam para pasto novo, e sem os apertar. O seu veterinário pode dizer-lhe quando desparasitar, banhar ou pulverizar, e com que produto. Use sempre a dose do rótulo ou do veterinário: pouco demais deixa as lombrigas e as carraças ficarem resistentes, e demais pode fazer mal ao animal.",
            "Os medicamentos deixam resíduos. Cada medicamento tem um intervalo de segurança: o tempo depois do tratamento antes de o leite, os ovos ou a carne desse animal poderem ser vendidos ou comidos. A FAO sublinha que deve trabalhar com o seu veterinário num plano de saúde e registar cada tratamento com o seu intervalo de segurança. Nunca use antibióticos para fazer os animais crescer mais depressa nem sem o conselho de um veterinário.",
            "Os registos trocam a adivinhação pelo saber. Para cada animal ou bando, escreva: identificação, nascimentos, vacinas, tratamentos (data, produto, quem o deu, quando acaba o intervalo de segurança), pesos ou produção, e mortes. Um caderno serve; uma folha de cálculo no telefone também. Chame logo o veterinário em caso de: mortes repentinas, vários animais doentes ao mesmo tempo, um animal sem comer há mais de um dia, parto difícil, sangramento forte, sinais nervosos, ou qualquer doença que o seu governo diga que tem de ser declarada."
          ],
          steps: ["Peça ao seu veterinário um plano para os parasitas: quando desparasitar e banhar ou pulverizar, e com quê.", "Use a dose do rótulo ou do veterinário, nunca a olho.", "Leve os animais que pastam para pasto novo; mantenha as instalações secas.", "Registe cada tratamento com a data em que acaba o intervalo de segurança.", "Não venda leite, ovos nem carne antes de acabar o intervalo de segurança.", "Chame logo o veterinário se houver mortes repentinas, vários doentes, parto difícil ou sinais nervosos."],
          words: [["Parasita", "uma lombriga, carraça, ácaro ou pulga que vive no corpo ou dentro de um animal e lhe faz mal."], ["Desparasitar", "dar um medicamento para matar as lombrigas dentro de um animal."], ["Intervalo de segurança", "o tempo depois de um tratamento antes de o leite, os ovos ou a carne poderem ser vendidos ou comidos."], ["Resistência", "quando as lombrigas, as carraças ou os micróbios sobrevivem a um medicamento que antes os matava."]],
          slides: [
            { title: "Parasitas", bullets: ["Lombrigas: crescimento fraco, barriga inchada, pálpebras pálidas", "As carraças espalham doenças, por exemplo a febre da Costa Leste", "Instalações limpas, pasto novo, sem apertar"] },
            { title: "Tratar da forma certa", bullets: ["Plano do veterinário para desparasitar e banhar", "Dose do rótulo ou do veterinário; nunca a olho", "Doses erradas criam resistência"] },
            { title: "Intervalos de segurança", bullets: ["Tempo antes de vender o leite, os ovos ou a carne", "Registe a data do fim para cada tratamento", "Nada de antibióticos sem o conselho do veterinário"] },
            { title: "Chame logo o veterinário", bullets: ["Mortes repentinas; vários doentes ao mesmo tempo", "Sem comer há mais de um dia; parto difícil", "Sangramento, sinais nervosos, doenças de declaração obrigatória"] }
          ],
          sources: [FAO_PRUDENT, WOAH_ND],
          tryIt: "Tarefa final: escreva o seu plano de saúde de uma página. Inclua a sua verificação diária, o plano de alimentação e de água, as regras das instalações, o calendário de vacinas do seu veterinário, as regras de biossegurança, o plano para os parasitas, os registos que vai manter e os sinais que o fazem chamar o veterinário, com o nome e o número do veterinário no topo.",
          youCanNow: "controlar os parasitas com o seu veterinário, manter registos dos tratamentos com os intervalos de segurança e saber quando chamar o veterinário.",
          quickCheck: [
            { objective: "O6", q: "Que doença espalham as carraças nos bois na África Oriental?", options: ["Febre da Costa Leste", "Doença de Newcastle", "Varíola aviária", "PPR"], answer: 0, why: "As carraças espalham a febre da Costa Leste nos bois na África Oriental." },
            { objective: "O6", q: "Tratou uma cabra hoje. O que escreve no registo?", options: ["Nada, se a cabra parecer melhor", "Só o preço do medicamento", "A data, o produto, quem o deu e quando acaba o intervalo de segurança", "O nome do vizinho"], answer: 2, why: "Registar cada tratamento com o seu intervalo de segurança mantém o leite e a carne seguros para vender e comer." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Prevenir e tratar doenças",
        questions: [
          { objective: "O4", q: "Quem deve fazer o calendário de vacinas dos seus animais?", options: ["Um vizinho noutro país", "O cartaz da loja de rações", "Um veterinário registado ou técnico de saúde animal que conheça a sua zona", "Qualquer pessoa na internet"], answer: 2, why: "As vacinas necessárias, e quando, dependem das doenças que existem na sua zona." },
          { objective: "O4", q: "Compra uma vacina e viaja para casa durante três horas ao sol. Qual é o risco?", options: ["A vacina pode estragar-se com o calor e não proteger os seus animais", "Fica mais forte", "Nenhum risco", "Passa a ser um desparasitante"], answer: 0, why: "As vacinas têm de ser mantidas frescas desde a loja até ao animal." },
          { objective: "O5", q: "Qual é um sinal da doença de Newcastle nas galinhas?", options: ["Cristas mais vivas", "Mais ovos", "Crescimento mais rápido", "Pescoço torcido, falta de ar e mortes repentinas"], answer: 3, why: "A WOAH indica sinais na respiração e nervosos, queda dos ovos e muitas mortes." },
          { objective: "O5", q: "Muitas das suas aves morrem de repente. O que deve fazer?", options: ["Vender as restantes depressa no mercado", "Fechar o bando, chamar o veterinário e não mudar as aves de lugar nem as vender", "Dar as aves mortas aos vizinhos", "Comprar aves novas no mesmo dia"], answer: 1, why: "Mudar ou vender as aves espalha a doença; o veterinário tem de descobrir a causa." },
          { objective: "O6", q: "O que é um intervalo de segurança?", options: ["O tempo antes de o leite, os ovos ou a carne de um animal tratado poderem ser vendidos ou comidos", "Umas férias para os criadores", "O tempo que uma vacina dura", "O tempo para secar o grão"], answer: 0, why: "Mantém os resíduos de medicamentos fora dos alimentos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Saúde e Maneio do Gado",
    questions: [
      { objective: "O1", q: "Quando é uma boa hora para a verificação diária de saúde?", options: ["Uma vez por mês", "Só quando um animal morre", "À hora de dar de comer ou de ordenhar", "Nunca; os animais cuidam de si próprios"], answer: 2, why: "À hora de dar de comer ou de ordenhar, os animais estão juntos e ativos." },
      { objective: "O1", q: "Uma galinha saudável costuma ter:", options: ["Uma crista pálida e encolhida", "Penas eriçadas", "O pescoço torcido", "Uma crista vermelha viva e estar ativa"], answer: 3, why: "Cristas vivas e atividade são sinais de boa saúde." },
      { objective: "O1", q: "Qual é um sinal de alerta numa vaca leiteira?", options: ["Uma queda repentina do leite", "Ruminar", "Olhos brilhantes", "Comer bem"], answer: 0, why: "Uma queda repentina do leite muitas vezes quer dizer doença." },
      { objective: "O2", q: "O que vem primeiro na alimentação dos animais?", options: ["Suplementos caros", "Água limpa todos os dias", "Só blocos minerais", "Feno com bolor"], answer: 1, why: "Sem água limpa suficiente, a saúde e a produção baixam depressa." },
      { objective: "O2", q: "O capim-elefante (Napier) e a luzerna são exemplos de:", options: ["Vacinas", "Desparasitantes", "Forragem", "Cama"], answer: 2, why: "São culturas de forragem semeadas para alimentar os animais." },
      { objective: "O2", q: "Porque se muda a alimentação dos animais devagar, ao longo de vários dias?", options: ["Para evitar problemas de estômago", "Porque a comida nova é sempre má", "Para poupar água", "Não faz diferença"], answer: 0, why: "Mudanças repentinas de alimentação estragam a digestão." },
      { objective: "O3", q: "Boas instalações para os animais são:", options: ["Apertadas e quentes", "Húmidas e escuras", "Secas, com sombra, arejadas e sem animais apertados", "Abertas aos ladrões"], answer: 2, why: "Instalações secas, arejadas e sem animais apertados reduzem as doenças." },
      { objective: "O3", q: "Compra três cabras novas. O que deve fazer antes de as juntar à sua manada?", options: ["Juntá-las logo", "Mantê-las à parte durante o tempo que o seu veterinário aconselhar", "Vender as suas cabras antigas", "Dar-lhes antibióticos por precaução"], answer: 1, why: "Manter os animais novos à parte impede-os de trazer doenças." },
      { objective: "O3", q: "Uma zoonose é:", options: ["Um tipo de forragem", "Uma vacina", "Uma doença que pode passar entre os animais e as pessoas", "Um aviário"], answer: 2, why: "A brucelose e o carbúnculo (antraz) são exemplos." },
      { objective: "O4", q: "A PPR é uma doença grave de:", options: ["Cabras e ovelhas", "Galinhas", "Milho", "Peixes"], answer: 0, why: "A peste dos pequenos ruminantes afeta as cabras e as ovelhas." },
      { objective: "O4", q: "Na Nigéria, que organismo mantém o registo dos médicos veterinários?", options: ["A agência de meteorologia da Nigéria", "O Veterinary Council of Nigeria", "O Banco Central", "Uma empresa de rações"], answer: 1, why: "O VCN regista os médicos veterinários." },
      { objective: "O4", q: "Onde deve comprar as vacinas?", options: ["A qualquer pessoa na beira da estrada", "Na internet a vendedores desconhecidos", "No frigorífico velho de um vizinho", "Numa loja agroveterinária licenciada, vendo o prazo de validade"], answer: 3, why: "Vendedores licenciados e vacinas dentro do prazo têm mais probabilidade de funcionar." },
      { objective: "O5", q: "Segundo a WOAH, a doença de Newcastle espalha-se por:", options: ["Só pela luz do sol", "Água limpa", "Só aves vacinadas", "Aves doentes, excrementos, e comida, água, equipamento e roupa contaminados"], answer: 3, why: "O contacto direto e as coisas contaminadas espalham o vírus." },
      { objective: "O5", q: "Qual é um passo de biossegurança barato?", options: ["Deixar as visitas passar pelo aviário", "Partilhar caixas com outras explorações sem as limpar", "Lavar as mãos e usar um pedilúvio antes de entrar", "Deixar as aves selvagens comer no comedouro"], answer: 2, why: "A higiene simples mantém os micróbios fora." },
      { objective: "O5", q: "Para as galinhas de aldeia, a FAO descreve vacinas contra a doença de Newcastle que são:", options: ["Misturadas no cimento", "Só para os bois", "Nunca necessárias", "Dadas em gotas nos olhos e que aguentam melhor o calor"], answer: 3, why: "As vacinas termoestáveis como a I-2 servem bem os bandos de aldeia." },
      { objective: "O5", q: "Depois de um surto de doença de Newcastle, a WOAH aconselha deixar o aviário limpo sem aves durante:", options: ["1 dia", "21 dias", "2 horas", "Pode pôr aves novas logo"], answer: 1, why: "A WOAH indica 21 dias vazio antes de pôr aves novas." },
      { objective: "O6", q: "Qual é um sinal de lombrigas nas cabras?", options: ["Crescimento rápido e pelo brilhante", "Pálpebras vermelhas vivas", "Comer mais do que o costume e ganhar peso", "Crescimento fraco, barriga inchada e pálpebras pálidas"], answer: 3, why: "As lombrigas tiram sangue e nutrientes e causam estes sinais." },
      { objective: "O6", q: "Como decide a dose de um desparasitante?", options: ["A olho", "Usa metade para poupar dinheiro", "Segue o rótulo ou o seu veterinário", "Usa o dobro para ter a certeza"], answer: 2, why: "Doses erradas fazem mal aos animais ou criam resistência." },
      { objective: "O6", q: "Uma vaca foi tratada ontem e o intervalo de segurança ainda não acabou. E o leite dela?", options: ["Vende-o normalmente", "Não o vende nem o bebe até acabar o intervalo de segurança", "Mistura-o com outro leite", "Ferve-o e vende-o"], answer: 1, why: "O leite durante o intervalo de segurança pode ter resíduos de medicamentos." },
      { objective: "O6", q: "Que situação quer dizer que deve chamar logo o veterinário?", options: ["Vários animais doentes ao mesmo tempo", "Um animal a ruminar", "Galinhas a pôr ovos como de costume", "Um vitelo a beber bem"], answer: 0, why: "Vários animais doentes podem querer dizer uma doença a espalhar-se." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 6, 7, 9, 11, 12, 16, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      { name: "Verificação diária", objective: "O1", notYet: "Não há verificação diária, ou não há sinais de alerta na lista.", meets: "Uma verificação diária à hora de dar de comer ou de ordenhar, com os principais sinais de alerta e o que fazer.", exceeds: "Adapta a verificação a cada tipo de animal que cria." },
      { name: "Alimentação, água e instalações", objective: "O2", notYet: "Não há plano para a época seca, ou faltam as regras de instalações e higiene.", meets: "Alimentação e água limpa ao longo do ano com um plano para a época seca, e duas regras de instalações e higiene.", exceeds: "Inclui cultivar ou guardar forragem e manter os animais novos à parte." },
      { name: "Calendário de vacinas", objective: "O4", notYet: "Não há calendário, ou há um que não foi combinado com um veterinário.", meets: "Um calendário escrito de um veterinário registado, com a forma de manter as vacinas frescas e dentro do prazo.", exceeds: "Indica as campanhas do governo e o nome e o número do veterinário." },
      { name: "Biossegurança", objective: "O5", notYet: "Não há regras de biossegurança.", meets: "Regras de biossegurança e, para as aves, a vacinação contra a doença de Newcastle e os passos se as aves morrerem de repente.", exceeds: "Passos baratos como lavar as mãos e um pedilúvio já estão em prática." },
      { name: "Parasitas, registos e o veterinário", objective: "O6", notYet: "Não há registos, ou as doses são a olho.", meets: "Controlo dos parasitas planeado com o veterinário, um registo dos tratamentos com os intervalos de segurança, e os sinais que pedem logo o veterinário.", exceeds: "Os registos também incluem nascimentos, pesos ou produção, e mortes." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação do plano de saúde",
      "Alunos que dizem ter um calendário de vacinas escrito por um veterinário registado em 60 dias (inquérito de seguimento)",
      "Mudança nas mortes de animais ou de aves e na produção de leite ou de ovos indicada pelos alunos depois de seis meses",
      "Alunos que dizem manter registos dos tratamentos e respeitar os intervalos de segurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno ou uma folha de cálculo no telefone para os registos",
      "O número de telefone de um veterinário registado ou técnico de saúde animal",
      "Acesso aos próprios animais do aluno para a verificação diária",
      "Cerca de 60 minutos no total, em sessões curtas, mais o tempo para escrever o plano de saúde"
    ],
    facilitatorNotes: [
      "Num grupo de criadores: façam o teste inicial juntos e depois pratiquem a verificação diária de saúde com animais verdadeiros.",
      "Convide um veterinário registado ou técnico de saúde animal para explicar as doenças e as vacinas da zona; não dê doses você mesmo.",
      "Lave as mãos depois de mexer nos animais, e nunca mexa em animais que morreram de repente a sangrar.",
      "Ajude cada aluno a escrever o nome e o número do seu veterinário antes de sair.",
      "Avalie o plano de saúde com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
