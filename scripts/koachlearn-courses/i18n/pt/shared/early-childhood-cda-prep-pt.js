"use strict";

// Koach Learn course (Portuguese translation of shared/early-childhood-cda-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US CDA Credential and US rules (Council for Professional Recognition, childcare.gov, Pearson VUE); many readers are immigrants in the US.

module.exports = {
  id: "early-childhood-cda-prep-pt",
  lang: "pt",
  translationOf: "early-childhood-cda-prep",
  category: "Workforce Development",
  name: "Educação de Infância e Preparação para a Credencial CDA",
  skills: "Conhecer os requisitos da CDA, Manter as crianças seguras e saudáveis, Denunciar suspeitas de abuso, Escrever notas de observação, Planear uma atividade de aprendizagem, Fazer um plano CDA com datas",
  outcome: "começar o seu caminho para a Credencial Child Development Associate (CDA): listar o que o Conselho exige para o seu contexto, manter as crianças seguras, escrever notas de observação justas, planear uma atividade de aprendizagem e juntar tudo num plano com datas para a formação, a experiência, o portefólio, o exame e a visita.",
  about: [
    "Creches, programas Head Start, escolas pré-primárias e creches familiares precisam de adultos atenciosos e com formação. A Credencial Child Development Associate (CDA), dada pelo Council for Professional Recognition (Conselho para o Reconhecimento Profissional), é a primeira credencial mais conhecida na educação de infância nos Estados Unidos (EUA).",
    "Este curso é para quem procura emprego, pais, jovens adultos, pessoas que saíram da prisão e qualquer pessoa que queira trabalhar com crianças pequenas. Prepara você para o caminho da CDA. Não dá a credencial e não conta como horas de formação oficial, a não ser que um programa diga que conta.",
    "Você vai aprender os passos da CDA, o básico da segurança das crianças e da denúncia obrigatória, como observar e escrever sobre o que uma criança faz e como planear uma atividade simples. No fim, você faz o seu próprio plano CDA com datas reais.",
    "Cada lição dura cerca de cinco minutos, com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no fim."
  ],
  finalTask: "Faça o seu próprio plano de preparação para a CDA em papel ou num documento gratuito: o seu contexto, onde vai fazer as 120 horas de formação (com 10 ou mais em cada uma das oito áreas temáticas), como vai registar as suas horas de trabalho, uma data para começar o portefólio, datas-alvo para o exame e para a Visita de Verificação, e um plano de atividade escrito para uma criança da pré-primária que possa entrar no seu portefólio.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Adultos e adolescentes mais velhos que querem trabalhar em creches, pré-primárias, Head Start ou creches familiares nos EUA: pais, pessoas à procura de emprego, pessoas que mudam de profissão, imigrantes, cônjuges de veteranos e pessoas que saíram da prisão. Muitos já cuidam de crianças em casa, mas não têm formação oficial.",
    startingPoint: "Sabem cuidar de crianças no dia a dia e ler instruções simples. A maioria nunca ouviu falar das áreas temáticas da CDA, do portefólio ou da Visita de Verificação, e nunca escreveu notas de observação nem planos de aula.",
    gap: "Muitos empregos em creches e muitas regras estaduais de licenciamento pedem formação ou uma credencial como a CDA. Os alunos precisam de conhecer os passos exatos, manter as crianças seguras desde o primeiro dia e praticar a escrita que o portefólio e o exame esperam. Sem um plano, as pessoas fazem a formação errada, perdem o controlo das horas ou deixam passar o prazo de 3 anos para a experiência e o prazo de 6 meses para o portefólio.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ao 8.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; todas as tarefas também se fazem em papel",
      "Tempo: lições de 4 a 6 minutos que cabem entre o trabalho e a família",
      "As regras mudam: os requisitos e as taxas da CDA verificam-se em cdacouncil.org; as regras de licenciamento e de denúncia obrigatória variam de estado para estado",
      "Privacidade das crianças: as notas de prática usam nomes inventados ou só a inicial do nome, nunca fotos nem dados reais de uma criança",
      "A verificação de antecedentes faz parte do trabalho com crianças; quem tem registo criminal verifica as regras do seu estado"
    ],
    prerequisites: "Nenhum. É preciso um diploma do ensino secundário ou o GED (exame de equivalência do secundário nos EUA) antes de se candidatar à CDA (ou estar inscrito no 11.º ou 12.º ano num programa técnico-profissional de educação de infância de uma escola secundária)."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Usando a página do Council for Professional Recognition para o seu contexto", action: "listar os passos de formação, experiência, portefólio, exame e Visita de Verificação da CDA", standard: "com as horas e os prazos certos" },
    { id: "O2", condition: "Com uma sala de creche ou a descrição de uma", action: "verificar a sala quanto a problemas de supervisão, lavagem das mãos, sono seguro e perigos", standard: "encontrando pelo menos 4 de 5 problemas escondidos" },
    { id: "O3", condition: "Com uma história em que uma criança pode estar a ser magoada", action: "descrever os passos para denunciar uma suspeita de abuso ou negligência", standard: "ligando primeiro para o 911 se a criança estiver em perigo, e seguindo a lei do estado e as regras do programa" },
    { id: "O4", condition: "Depois de observar uma criança a brincar durante cinco minutos", action: "escrever uma nota de observação que regista só o que viu e ouviu", standard: "sem rótulos nem suposições, e com a data, a hora e o local" },
    { id: "O5", condition: "Com a idade e um interesse de uma criança", action: "escrever um plano de atividade curto com um objetivo, materiais, passos e uma nota de segurança", standard: "que se adapta à idade e indica uma área temática da CDA" },
    { id: "O6", condition: "Usando o seu próprio calendário", action: "fazer um plano de preparação para a CDA com datas, da formação até à Visita de Verificação", standard: "que mantém a experiência dentro de 3 anos e o portefólio dentro de 6 meses antes da candidatura" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O caminho da CDA e a segurança das crianças",
      lessons: [
        {
          title: "O que é a CDA e os passos para a obter",
          objectives: ["O1"],
          minutes: 6,
          goal: "Listar os passos para obter a CDA no seu contexto.",
          text: [
            "A Credencial Child Development Associate (CDA) é dada pelo Council for Professional Recognition. Mostra que você sabe pôr em prática as Normas de Competência da CDA com crianças pequenas. Há caminhos para quatro contextos: Pré-primária (Preschool), Bebés e Crianças Pequenas (Infant-Toddler), Creche Familiar (Family Child Care) e Visitas Domiciliárias (Home Visitor). Cada um tem a sua própria página de requisitos.",
            "Para o contexto Pré-primária (crianças dos 3 aos 5 anos num centro), a página do Conselho pede: um diploma do ensino secundário ou o GED (ou estar inscrito no 11.º ou 12.º ano num programa de educação de infância de uma escola secundária); 120 horas de formação oficial em educação de infância, com pelo menos 10 horas em cada uma das oito áreas temáticas da CDA; e 480 horas de trabalho com crianças dos 3 aos 5 anos nos 3 anos antes da candidatura.",
            "Também tem de montar um portefólio profissional nos 6 meses antes da candidatura e escolher um Especialista em Desenvolvimento Profissional (PD Specialist) da CDA. Depois de a sua candidatura ser aprovada, faz o exame CDA: cerca de 65 perguntas num computador, num centro de exames Pearson VUE. Depois, um PD Specialist faz a Visita de Verificação: revê o seu portefólio, observa você a trabalhar com as crianças e conversa consigo sobre os seus pontos fortes e o que está a melhorar. O Conselho também oferece uma decisão mais rápida, sem visita, para alguns resultados do exame; veja a página de atualizações do processo.",
            "As taxas, as bolsas e as regras mudam. Verifique os valores atuais em cdacouncil.org e pergunte ao seu empregador ou ao seu estado sobre bolsas antes de pagar. A credencial dura 3 anos e depois é renovada."
          ],
          steps: ["Escolha o seu contexto: Pré-primária, Bebés e Crianças Pequenas, Creche Familiar ou Visitas Domiciliárias.", "Abra a página desse contexto em cdacouncil.org e escreva os requisitos.", "Encontre uma formação que cubra as oito áreas temáticas.", "Comece a registar as suas horas de trabalho com crianças.", "Monte o portefólio, candidate-se, faça o exame e depois tenha a Visita de Verificação."],
          words: [["CDA", "Child Development Associate: uma credencial nacional dos EUA para quem trabalha com crianças pequenas."], ["Council for Professional Recognition", "a organização que dá a CDA (o Conselho)."], ["Portefólio", "uma coleção dos seus próprios textos e recursos que mostra o seu trabalho com crianças e famílias."], ["Visita de Verificação", "uma visita em que um PD Specialist observa você a trabalhar, revê o seu portefólio e conversa consigo."], ["PD Specialist", "um Especialista em Desenvolvimento Profissional aprovado pelo Conselho para fazer a sua visita."]],
          slides: [
            { title: "A CDA numa frase", bullets: ["Dada pelo Council for Professional Recognition", "Contextos: Pré-primária, Bebés e Crianças Pequenas, Creche Familiar, Visitas Domiciliárias"] },
            { title: "Pré-primária: antes de se candidatar", bullets: ["Diploma ou GED (ou programa de educação de infância do secundário)", "120 horas de formação, 10+ em cada uma das 8 áreas temáticas", "480 horas de trabalho com crianças de 3-5 anos nos últimos 3 anos"] },
            { title: "Depois", bullets: ["Portefólio pronto nos 6 meses antes da candidatura", "Exame CDA num centro Pearson VUE", "Visita de Verificação por um PD Specialist"] },
            { title: "Verifique antes de pagar", bullets: ["As taxas e as regras mudam: cdacouncil.org", "Pergunte sobre bolsas", "Renove a cada 3 anos"] }
          ],
          sources: [
            { name: "CDA Council: caminho para a Pré-primária (Preschool)", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Conhecer a CDA", url: "https://www.cdacouncil.org/en/about/learn-about-the-cda/" },
            { name: "CDA Council: Atualizações do processo", url: "https://www.cdacouncil.org/en/cda-process-updates/" },
            { name: "CDA Council: Encontrar bolsas para a CDA", url: "https://www.cdacouncil.org/en/find-cda-scholarships/" },
            { name: "CDA Council: Renovar a CDA", url: "https://www.cdacouncil.org/en/renew-cda/" }
          ],
          tryIt: "Abra a página do CDA Council para o contexto que quer (ou use os números desta lição para a Pré-primária). Num papel, escreva os cinco passos por ordem e, ao lado de cada um, as horas ou o prazo.",
          youCanNow: "listar os passos para a CDA no seu contexto, com as horas de formação, as horas de trabalho e os prazos.",
          quickCheck: [
            { objective: "O1", q: "Para a CDA de Pré-primária, como se dividem as 120 horas de formação?", options: ["As 120 horas numa só área de que gosta", "Pelo menos 10 horas em cada uma das oito áreas temáticas", "Só horas de trabalho com crianças", "Quaisquer 120 horas de vídeos na internet"], answer: 1, why: "O Conselho pede 120 horas de formação, com pelo menos 10 em cada uma das oito áreas temáticas." },
            { objective: "O1", q: "Quem dá a Credencial CDA?", options: ["O serviço de viação do seu estado", "A escola do seu filho", "Qualquer creche", "O Council for Professional Recognition"], answer: 3, why: "O Council for Professional Recognition dá a CDA; um curso ou um empregador só ajuda você a preparar-se." }
          ]
        },
        {
          title: "Uma sala segura e saudável: licença, supervisão, mãos limpas, sono seguro",
          objectives: ["O2"],
          minutes: 6,
          goal: "Verificar uma sala de creche quanto a problemas comuns de segurança e saúde.",
          text: [
            "Nos EUA, as creches são licenciadas por cada estado ou território. O licenciamento define as regras mínimas de saúde e segurança que um programa tem de cumprir, como a verificação de antecedentes do pessoal, formação em saúde e segurança, as qualificações do pessoal e as inspeções. O número de crianças por adulto e as regras de formação variam de estado para estado; procure as do seu em childcare.gov.",
            "A supervisão vem primeiro: você vê e ouve todas as crianças, conta as crianças muitas vezes (sobretudo quando mudam de sala ou vão para fora) e nunca deixa as crianças sozinhas.",
            "Lavar as mãos trava os micróbios: lave com água e sabão, esfregando pelo menos 20 segundos, depois de ir à casa de banho ou de mudar fraldas, antes de comer ou de mexer em comida e depois de brincar lá fora. Ajude também as crianças a lavar as mãos.",
            "Sono seguro para bebés: deite o bebé de costas em todas as sestas e à noite, numa superfície firme, plana e direita, só com um lençol ajustável. Não ponha almofadas, cobertores, protetores de berço nem peluches no berço. Procure também perigos: tomadas, fios, objetos pequenos com que uma criança pequena se pode engasgar, produtos de limpeza ao alcance e saídas bloqueadas."
          ],
          steps: ["Conte as crianças e confirme que vê e ouve todas.", "Procure perigos: fios, tomadas, objetos pequenos, produtos químicos, saídas bloqueadas.", "Confirme que o lavatório tem sabão e toalhas e que os adultos o usam.", "Nas salas de bebés: dormir de costas, superfície firme e plana, nada no berço além de um lençol ajustável.", "Resolva o que puder agora e informe o seu supervisor do resto."],
          words: [["Licenciamento", "as regras mínimas de saúde e segurança do estado que um programa tem de cumprir para funcionar legalmente."], ["Rácio", "quantas crianças um adulto pode cuidar; é definido pelo estado e varia com a idade."], ["Supervisão", "conseguir sempre ver e ouvir as crianças ao seu cuidado."], ["Risco de engasgamento", "um objeto pequeno que uma criança pequena pode pôr na boca e com que se pode engasgar."]],
          slides: [
            { title: "O licenciamento é de cada estado", bullets: ["Regras mínimas de saúde e segurança", "Verificação de antecedentes, formação, inspeções", "Procure o seu estado em childcare.gov"] },
            { title: "Supervisione e conte", bullets: ["Veja e ouça todas as crianças", "Conte a cada mudança", "Nunca deixe as crianças sozinhas"] },
            { title: "Lavar as mãos", bullets: ["Água e sabão, esfregar 20 segundos", "Depois da casa de banho ou das fraldas, antes de comer, depois de brincar lá fora"] },
            { title: "Sono seguro para bebés", bullets: ["De costas, sempre que dorme", "Superfície firme, plana e direita, só lençol ajustável", "Sem almofadas, cobertores, protetores nem brinquedos"] }
          ],
          sources: [
            { name: "Childcare.gov: Como são reguladas as creches?", url: "https://childcare.gov/consumer-education/how-is-child-care-regulated" },
            { name: "Childcare.gov: Recursos por estado e território", url: "https://childcare.gov/state-resources" },
            { name: "Safe to Sleep (NIH): Um ambiente de sono seguro", url: "https://safetosleep.nichd.nih.gov/reduce-risk/safe-sleep-environment" }
          ],
          tryIt: "Percorra uma divisão da sua casa (ou imagine uma sala de aula). Escreva cinco coisas que verificaria para a segurança e a saúde, e uma solução para cada uma. Depois, encontre a página de creches do seu estado em childcare.gov e escreva quem licencia as creches aí.",
          youCanNow: "verificar uma sala quanto a problemas de supervisão, lavagem das mãos, sono seguro e perigos, e dizer quem licencia as creches no seu estado.",
          quickCheck: [
            { objective: "O2", q: "Um bebé adormece no berço. Qual destas formas é segura?", options: ["De barriga para baixo com um cobertor macio", "De lado com uma almofada para apoiar", "De costas, colchão firme, só lençol ajustável", "De costas com peluches para o confortar"], answer: 2, why: "O Safe to Sleep diz: dormir de costas, numa superfície firme e plana, só com um lençol ajustável." },
            { objective: "O2", q: "O seu grupo volta do recreio. O que faz primeiro?", options: ["Conta as crianças", "Começa logo a atividade seguinte", "Vê o seu telefone", "Deixa-as ir sozinhas à casa de banho"], answer: 0, why: "Contar a cada mudança garante que nenhuma criança ficou para trás." }
          ]
        },
        {
          title: "Proteger as crianças: a denúncia obrigatória",
          objectives: ["O3"],
          minutes: 5,
          goal: "Descrever os passos para denunciar uma suspeita de abuso ou negligência de uma criança.",
          text: [
            "Na maioria dos estados, quem trabalha em creches é denunciante obrigatório (mandated reporter). Isso quer dizer que a lei obriga você a denunciar quando tem motivos para suspeitar que uma criança está a sofrer abuso ou negligência. Não precisa de provas. A lei de cada estado diz quem tem de denunciar e como, e o seu programa terá regras escritas. Conheça as duas antes do primeiro dia.",
            "Se uma criança estiver em perigo imediato, ligue primeiro para o 911 (o número de emergência nos EUA). Se não, siga o processo do seu estado (muitas vezes uma linha estadual contra o abuso de crianças) e as regras do seu programa. Se não souber para onde ligar, a Childhelp National Child Abuse Hotline (1-800-422-4453), uma linha nacional de apoio, pode ajudar.",
            "O seu papel é denunciar, não investigar. Não faça perguntas à criança vezes sem conta nem confronte a família. Se uma criança lhe contar alguma coisa, fique calmo, ouça, não prometa guardar segredo e escreva as palavras exatas dela, a data e a hora. Mantenha tudo em privado: partilhe só com as pessoas que a lei e as regras do programa indicam."
          ],
          steps: ["Se uma criança estiver em perigo agora, ligue para o 911.", "Ouça com calma; não prometa guardar segredo.", "Escreva o que viu ou ouviu, palavra por palavra, com a data e a hora.", "Denuncie como exigem a lei do seu estado e as regras do programa.", "Mantenha tudo em privado e não investigue por conta própria."],
          words: [["Denunciante obrigatório", "uma pessoa que a lei obriga a denunciar suspeitas de abuso ou negligência de crianças."], ["Negligência", "não dar a uma criança os cuidados básicos de que precisa, como comida, segurança, supervisão ou cuidados médicos."], ["Suspeitar", "ter um motivo para pensar que alguma coisa pode estar a acontecer, sem provas."]],
          slides: [
            { title: "Você pode ser denunciante obrigatório", bullets: ["A maioria dos estados inclui quem trabalha em creches", "Denuncia um motivo para suspeitar, não uma prova", "Conheça a lei do seu estado e as regras do programa"] },
            { title: "Perigo agora? Ligue para o 911", bullets: ["Depois siga o processo de denúncia do seu estado", "Tem dúvidas? Childhelp: 1-800-422-4453"] },
            { title: "Denuncie, não investigue", bullets: ["Ouça com calma; não prometa segredo", "Escreva as palavras exatas, a data e a hora", "Partilhe só como a lei e as regras indicam"] }
          ],
          sources: [
            { name: "Child Welfare Information Gateway: Como denunciar abuso e negligência de crianças", url: "https://www.childwelfare.gov/how-report-child-abuse-and-neglect/" },
            { name: "Childcare.gov: Comunicar uma preocupação com uma creche", url: "https://childcare.gov/health-and-safety-reporting" }
          ],
          tryIt: "Procure como denunciar uma suspeita de abuso de crianças no seu estado (pesquise o nome do seu estado mais \"report child abuse\" e use a página .gov). Escreva o número ou o site num cartão e, no verso, os cinco passos desta lição.",
          youCanNow: "descrever os passos para denunciar uma suspeita de abuso ou negligência e encontrar onde denunciar no seu estado.",
          quickCheck: [
            { objective: "O3", q: "Uma criança conta-lhe um segredo sobre ser magoada em casa e pede-lhe que não diga a ninguém. O que responde?", options: ["\"Prometo que não conto a ninguém.\"", "\"Tens a certeza? Conta outra vez.\"", "\"Estás a inventar isso.\"", "\"Obrigado por me contares. Tenho de contar a pessoas que podem ajudar a manter-te em segurança.\""], answer: 3, why: "Você fica calmo e nunca promete segredo, porque tem de denunciar." },
            { objective: "O3", q: "Você vê marcas que o preocupam, mas não tem provas. O que faz um denunciante obrigatório?", options: ["Espera até haver provas", "Denuncia como exigem a lei do estado e as regras do programa", "Liga aos pais para perguntar o que aconteceu", "Tira fotos e publica-as para avisar os outros"], answer: 1, why: "A lei pede que denuncie um motivo para suspeitar; investigar é o trabalho da agência." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O caminho da CDA e a segurança das crianças",
        questions: [
          { objective: "O1", q: "Para a CDA de Pré-primária, quantas horas de trabalho com crianças dos 3 aos 5 anos são precisas, e em que prazo?", options: ["480 horas nos 3 anos antes da candidatura", "120 horas em 1 ano", "1000 horas em qualquer altura", "Não são precisas horas de trabalho"], answer: 0, why: "A página de Pré-primária do Conselho pede 480 horas nos 3 anos antes de enviar a candidatura." },
          { objective: "O1", q: "Por que ordem acontecem o exame e a Visita de Verificação?", options: ["A visita é sempre antes da candidatura", "Os dois acontecem no mesmo dia", "Primeiro o exame, depois a visita", "Nenhum faz parte da CDA"], answer: 2, why: "Depois da aprovação, marca o exame; a visita é marcada depois do exame." },
          { objective: "O2", q: "Quem define as regras de licenciamento das creches, como os rácios e a formação?", options: ["Os pais de cada criança", "Cada estado ou território", "O CDA Council", "Cada educador"], answer: 1, why: "O licenciamento é feito pelos estados e territórios, por isso as regras mudam de lugar para lugar." },
          { objective: "O2", q: "Qual é um perigo que deve resolver numa sala de crianças pequenas?", options: ["Moedas e missangas numa prateleira baixa", "Sabão no lavatório", "Um lençol ajustável no colchão do berço", "Uma lista de números de emergência junto à porta"], answer: 0, why: "Os objetos pequenos são um risco de engasgamento para as crianças pequenas." },
          { objective: "O3", q: "Uma criança chega com uma ferida grave e está em perigo agora. O que faz primeiro?", options: ["Escreve nas suas notas para a próxima semana", "Pergunta aos amigos da criança o que aconteceu", "Espera que o supervisor volte do almoço", "Liga para o 911"], answer: 3, why: "Perigo imediato quer dizer ligar primeiro para o 911 e depois seguir o processo de denúncia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ensinar, observar e o seu plano CDA",
      lessons: [
        {
          title: "Observar e escrever: notas de observação",
          objectives: ["O4"],
          minutes: 5,
          goal: "Escrever uma nota de observação que regista só o que viu e ouviu.",
          text: [
            "Observar e registar o comportamento das crianças é uma das oito áreas temáticas da CDA. Os educadores observam as crianças para saber o que cada uma consegue fazer, do que gosta e do que precisa a seguir. Boas notas também ajudam quando fala com as famílias.",
            "Uma boa nota é objetiva: diz o que você viu e ouviu, não o que pensa que significa. Escreva \"M. empilhou seis blocos, depois deitou-os abaixo e riu-se\" em vez de \"M. é uma criança feliz e inteligente\". Rótulos como preguiçoso, mau, tímido ou malcomportado não entram nas notas.",
            "Inclua a data, a hora, o local e a inicial do nome da criança. Escreva entre aspas as palavras exatas da criança. Mantenha as notas em privado: são sobre uma criança real e pertencem ao programa."
          ],
          steps: ["Escreva a data, a hora, o local e a inicial do nome da criança.", "Observe durante alguns minutos.", "Escreva só ações e palavras exatas.", "Risque qualquer rótulo ou suposição.", "Junte uma pergunta ou um próximo passo para a criança, marcado como ideia sua."],
          words: [["Observação", "ver uma criança com atenção para saber o que ela consegue fazer."], ["Objetivo", "só factos que se podem ver ou ouvir, sem opiniões."], ["Registo de episódio", "uma nota curta escrita sobre uma coisa que uma criança fez ou disse."]],
          slides: [
            { title: "Porque observamos", bullets: ["Saber o que cada criança consegue fazer", "Planear o que vem a seguir", "Partilhar factos com as famílias"] },
            { title: "Factos, não rótulos", bullets: ["Sim: \"empilhou 6 blocos, riu-se\"", "Não: \"inteligente\", \"tímido\", \"mau\"", "Escreva as palavras exatas da criança"] },
            { title: "Cada nota tem", bullets: ["Data, hora, local", "Só a inicial do nome", "Guardada em privado"] }
          ],
          tryIt: "Observe uma criança que conhece (com autorização dos pais), ou um vídeo de crianças, durante cinco minutos. Escreva uma nota de observação com a data, a hora e o local. Depois, faça um círculo à volta de qualquer palavra que seja um rótulo ou uma suposição e reescreva-a como um facto.",
          youCanNow: "escrever uma nota de observação justa e objetiva, sem rótulos.",
          quickCheck: [
            { objective: "O4", q: "Que frase pertence a uma nota de observação?", options: ["\"J. é um desordeiro.\"", "\"J. parece triste hoje.\"", "\"J. é mais inteligente do que os outros.\"", "\"J. disse 'é a minha vez' e tirou o camião vermelho ao T.\""], answer: 3, why: "Regista só o que se viu e ouviu, com as palavras exatas da criança." },
            { objective: "O4", q: "O que deve ter cada nota de observação?", options: ["Data, hora, local e a inicial do nome da criança", "O nome completo e a morada da criança", "A sua opinião sobre os pais", "Uma foto da criança publicada na internet"], answer: 0, why: "A data, a hora, o local e uma inicial dão contexto e protegem a privacidade da criança." }
          ]
        },
        {
          title: "Planear uma atividade de aprendizagem",
          objectives: ["O5"],
          minutes: 6,
          goal: "Escrever um plano de atividade curto que se adapta à idade da criança.",
          text: [
            "As crianças pequenas aprendem a brincar. Uma boa atividade parte daquilo de que as crianças gostam e que quase conseguem fazer, por isso é um pequeno desafio divertido. Promover o desenvolvimento físico e intelectual das crianças é uma das oito áreas temáticas da CDA, tal como o desenvolvimento social e emocional e a criação de relações com as famílias.",
            "Um plano de atividade curto tem seis partes: o grupo de idade, um objetivo (o que as crianças vão fazer), os materiais, os passos, uma nota de segurança e como vai saber que resultou. Exemplo para crianças de 3 e 4 anos: Objetivo: separar folhas pelo tamanho. Materiais: folhas apanhadas lá fora, três cestos. Passos: mostrar uma folha grande, uma média e uma pequena; as crianças separam; perguntar \"Qual é a maior?\" Segurança: lavar as mãos no fim, ver se há paus afiados. Como vai saber: as crianças põem a maior parte das folhas no cesto certo e usam as palavras grande e pequeno.",
            "Planeie para todas as crianças: ofereça uma forma mais fácil e uma mais difícil de fazer, use palavras e imagens e convide as famílias a mandar ideias de casa. Use materiais grandes o suficiente para não serem risco de engasgamento para a idade."
          ],
          steps: ["Escolha o grupo de idade e uma coisa de que as crianças gostam.", "Escreva um objetivo que as crianças vão fazer.", "Liste materiais seguros, gratuitos ou baratos.", "Escreva 3 a 5 passos.", "Junte uma nota de segurança e como vai saber que resultou.", "Indique a área temática da CDA que a atividade apoia."],
          words: [["Adequado ao desenvolvimento", "que se adapta ao que as crianças daquela idade normalmente conseguem fazer, com um pequeno desafio."], ["Motricidade fina", "movimentos pequenos das mãos e dos dedos, como apanhar ou recortar."], ["Motricidade global", "movimentos grandes do corpo, como correr, saltar ou trepar."]],
          slides: [
            { title: "As crianças aprendem a brincar", bullets: ["Parta daquilo de que gostam", "Um pequeno desafio divertido"] },
            { title: "Seis partes de um plano", bullets: ["Idade, objetivo, materiais", "Passos, nota de segurança", "Como vai saber que resultou"] },
            { title: "Planeie para todas as crianças", bullets: ["Uma forma mais fácil e uma mais difícil", "Palavras e imagens", "Ideias das famílias"] }
          ],
          tryIt: "Escreva um plano de atividade de uma página para crianças dos 3 aos 5 anos, com coisas que tem em casa (copos, meias, papel, folhas). Inclua as seis partes e indique a área temática da CDA que a atividade apoia.",
          youCanNow: "escrever um plano de atividade curto e seguro, adequado à idade das crianças, que indica uma área temática da CDA.",
          quickCheck: [
            { objective: "O5", q: "Que objetivo é melhor para crianças de 3 e 4 anos?", options: ["Escrever um parágrafo inteiro sobre folhas", "Separar folhas em grandes e pequenas", "Fazer divisões longas com folhas", "Ler sozinhas um livro de ciências"], answer: 1, why: "Separar pelo tamanho é um pequeno desafio, em forma de jogo, para crianças da pré-primária." },
            { objective: "O5", q: "O seu plano para crianças de 3 anos usa missangas pequenas. O que falta no plano?", options: ["Uma lista de passos mais longa", "Um objetivo mais difícil", "Uma nota de segurança: as missangas são risco de engasgamento, por isso use objetos maiores", "Mais missangas"], answer: 2, why: "Todo o plano precisa de uma nota de segurança, e os objetos pequenos são um risco de engasgamento para as crianças pequenas." }
          ]
        },
        {
          title: "O portefólio, o exame, a visita e o seu plano",
          objectives: ["O6"],
          minutes: 6,
          goal: "Fazer um plano de preparação para a CDA com datas, da formação até à Visita de Verificação.",
          text: [
            "O portefólio reúne os seus próprios textos e recursos sobre o seu trabalho com crianças e famílias. O livro de Normas de Competência (Competency Standards book) do Conselho para o seu contexto (para a Pré-primária, a edição verde) explica exatamente o que deve conter. Arranje o livro cedo e vá preenchendo o portefólio; tem de estar pronto nos 6 meses antes da candidatura.",
            "Planeie de trás para a frente, a partir das datas importantes. As horas de trabalho só contam se forem dos 3 anos antes da candidatura, por isso comece já um registo simples: data, local, idades e horas, assinado por um supervisor se o seu programa permitir. Escolha uma formação que cubra as oito áreas temáticas e guarde todos os certificados.",
            "Prepare-se para o exame revendo as oito áreas temáticas, praticando perguntas com situações como as deste curso e marcando um centro de exames Pearson VUE depois de receber o aviso Ready to Schedule (pronto para marcar). Antes da Visita de Verificação, pratique falar sobre os seus pontos fortes e sobre uma área em que está a melhorar. Verifique todas as taxas e passos em cdacouncil.org e pergunte sobre bolsas."
          ],
          steps: ["Escreva a data de hoje e o seu contexto.", "Escolha um programa de formação e uma data-alvo para acabar as 120 horas.", "Comece um registo de horas de trabalho e marque uma data para chegar às horas que o seu contexto pede.", "Marque uma data para começar o portefólio e uma data de candidatura nos 6 meses seguintes.", "Junte os meses-alvo para o exame e para a Visita de Verificação.", "Ponha as datas no calendário do telefone ou num calendário de papel."],
          words: [["Livro de Normas de Competência", "o livro do Conselho para o seu contexto que explica o portefólio e as normas."], ["Aviso Ready to Schedule", "a mensagem do Conselho a dizer que já pode marcar o exame ou a visita."], ["Registo de horas de trabalho", "um registo das datas e das horas em que trabalhou com crianças."]],
          slides: [
            { title: "O seu portefólio", bullets: ["Arranje o livro de Normas de Competência do seu contexto", "Vá preenchendo aos poucos", "Pronto nos 6 meses antes da candidatura"] },
            { title: "Planeie de trás para a frente", bullets: ["Horas de trabalho: nos 3 anos antes da candidatura", "Formação: as 8 áreas temáticas, guarde os certificados", "Registe as horas desde o primeiro dia"] },
            { title: "Exame e visita", bullets: ["Reveja as 8 áreas temáticas", "Marque na Pearson VUE depois do aviso Ready to Schedule", "Pratique falar sobre os seus pontos fortes"] }
          ],
          sources: [
            { name: "CDA Council: caminho para a Pré-primária (Preschool)", url: "https://www.cdacouncil.org/en/educator-pathways/preschool/" },
            { name: "CDA Council: Caminhos para educadores (todos os contextos)", url: "https://www.cdacouncil.org/en/educator-pathways/" },
            { name: "Pearson VUE: exame CDA", url: "https://home.pearsonvue.com/cdaexam" }
          ],
          tryIt: "Tarefa final: faça o seu plano de preparação para a CDA com datas reais para a formação, as horas de trabalho, o portefólio, a candidatura, o exame e a Visita de Verificação. Junte o seu plano de atividade da Lição 5 como a primeira peça do género portefólio.",
          youCanNow: "transformar os passos da CDA no seu próprio plano com datas, pronto para começar.",
          quickCheck: [
            { objective: "O6", q: "Trabalhou numa pré-primária há quatro anos e quer candidatar-se no próximo mês. O que deve verificar?", options: ["Nada; todas as horas antigas contam para sempre", "Se ainda precisa de um diploma", "Se o exame é opcional", "Se as suas horas estão dentro dos 3 anos antes da candidatura"], answer: 3, why: "As horas de experiência têm de ser dos 3 anos antes de enviar a candidatura." },
            { objective: "O6", q: "Quando deve começar o seu registo de horas de trabalho?", options: ["Já, desde o primeiro dia com crianças", "Depois de passar no exame", "Só depois da Visita de Verificação", "Nunca; o Conselho conta-as por você"], answer: 0, why: "Um registo desde o primeiro dia deixa as horas e as datas claras quando se candidatar." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ensinar, observar e o seu plano CDA",
        questions: [
          { objective: "O4", q: "Qual é uma observação objetiva?", options: ["\"A. é preguiçoso na arrumação.\"", "\"A. sentou-se no tapete e ficou a ver enquanto os outros arrumavam os blocos.\"", "\"A. nunca ajuda.\"", "\"A. é o que ouve pior.\""], answer: 1, why: "Descreve só o que se viu, sem rótulos." },
          { objective: "O4", q: "Como deve proteger a privacidade de uma criança nas suas notas?", options: ["Publicar as notas num grupo de conversa dos pais", "Usar o nome completo e a morada da criança", "Usar a inicial do nome e guardar as notas no programa", "Partilhá-las com quem pedir"], answer: 2, why: "As iniciais e guardar as notas no programa protegem a criança." },
          { objective: "O5", q: "Que parte diz se uma atividade resultou?", options: ["Como vai saber que resultou", "A lista de materiais", "O grupo de idade", "O título"], answer: 0, why: "Dizer como vai saber que resultou permite verificar o objetivo." },
          { objective: "O5", q: "Como planeia para crianças com capacidades diferentes na mesma atividade?", options: ["Dá a todos a versão mais difícil", "Deixa de fora as crianças com mais dificuldade", "Faz a atividade só uma vez por ano", "Oferece uma forma mais fácil e uma mais difícil de fazer"], answer: 3, why: "Versões mais fáceis e mais difíceis deixam todas as crianças participar e esforçar-se um pouco." },
          { objective: "O6", q: "O portefólio da CDA de Pré-primária tem de ser preparado em que prazo antes da candidatura?", options: ["3 anos", "6 meses", "1 semana", "10 anos"], answer: 1, why: "A página do Conselho diz para preparar o portefólio nos 6 meses antes de enviar a candidatura." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Educação de Infância e Preparação para a Credencial CDA",
    questions: [
      { objective: "O1", q: "O que faz este curso pela sua CDA?", options: ["Dá-lhe a CDA", "Substitui o exame", "Prepara você; o Conselho dá a credencial", "Conta como a sua Visita de Verificação"], answer: 2, why: "O Council for Professional Recognition dá a CDA; este curso prepara você." },
      { objective: "O1", q: "Quantas áreas temáticas da CDA têm de cobrir as suas 120 horas de formação?", options: ["Oito, com pelo menos 10 horas cada", "Duas", "Só uma, à sua escolha", "Doze, com 5 horas cada"], answer: 0, why: "O Conselho pede pelo menos 10 horas em cada uma das oito áreas temáticas." },
      { objective: "O1", q: "Onde se faz o exame CDA?", options: ["Na sua creche", "Num centro de exames Pearson VUE", "No serviço de viação (DMV)", "Por telefone"], answer: 1, why: "O exame CDA é feito no computador, num centro de exames Pearson VUE." },
      { objective: "O1", q: "O que acontece na Visita de Verificação?", options: ["Paga a taxa em dinheiro", "Faz o exame escrito", "Um pai avalia o seu ensino", "Um PD Specialist revê o seu portefólio, observa você a trabalhar e conversa consigo"], answer: 3, why: "O PD Specialist revê o portefólio, observa você com as crianças e faz uma conversa de reflexão." },
      { objective: "O2", q: "Onde encontra os contactos de licenciamento de creches do seu estado?", options: ["Num grupo de redes sociais", "Nos recursos por estado de childcare.gov", "Num blogue qualquer", "No exame CDA"], answer: 1, why: "O childcare.gov tem ligações para os recursos de cada estado e território." },
      { objective: "O2", q: "Durante quanto tempo deve esfregar as mãos com sabão?", options: ["Pelo menos 20 segundos", "2 segundos", "Só se parecerem sujas", "Basta passar por água"], answer: 0, why: "Esfregar com sabão durante pelo menos 20 segundos tira os micróbios." },
      { objective: "O2", q: "O que deve estar no berço de um bebé para dormir?", options: ["Uma almofada e um cobertor", "Peluches", "Protetores de berço", "Só um lençol ajustável num colchão firme e plano"], answer: 3, why: "O Safe to Sleep diz: nada no berço além de um lençol ajustável numa superfície firme, plana e direita." },
      { objective: "O2", q: "Os rácios (quantas crianças por adulto) são:", options: ["Iguais em todo o lado", "Escolhidos por cada educador", "Definidos pelas regras de licenciamento de cada estado", "Definidos pelos pais"], answer: 2, why: "Os estados definem os rácios, e eles variam com o estado e a idade." },
      { objective: "O3", q: "Um denunciante obrigatório tem de denunciar quando:", options: ["Tem provas", "Tem um motivo para suspeitar de abuso ou negligência", "A família dá autorização", "Acaba uma investigação"], answer: 1, why: "A lei pede uma denúncia quando há uma suspeita razoável; não precisa de provas." },
      { objective: "O3", q: "O que faz parte do SEU papel depois de uma criança lhe contar que foi magoada?", options: ["Escrever as palavras exatas dela, a data e a hora", "Fazer muitas perguntas à criança", "Confrontar os pais", "Prometer guardar segredo"], answer: 0, why: "Você regista os factos e denuncia; a agência investiga." },
      { objective: "O3", q: "Não sabe onde denunciar no seu estado. Quem pode ajudar?", options: ["Um vizinho", "Os colegas de turma da criança", "A Childhelp National Child Abuse Hotline", "Ninguém, por isso espera"], answer: 2, why: "A Childhelp (1-800-422-4453) ajuda a chegar ao sítio certo; ligue para o 911 se uma criança estiver em perigo." },
      { objective: "O4", q: "Que palavra NÃO pertence a uma nota de observação?", options: ["\"andou\"", "\"disse\"", "\"empilhou\"", "\"malcomportado\""], answer: 3, why: "\"Malcomportado\" é um rótulo; as notas registam ações e palavras." },
      { objective: "O4", q: "Porque escrevem os educadores notas de observação?", options: ["Para castigar as crianças", "Para saber o que cada criança consegue fazer e planear os próximos passos", "Para publicar na internet", "Para comparar as famílias das crianças"], answer: 1, why: "As notas ajudam a planear e a partilhar factos com as famílias." },
      { objective: "O4", q: "Uma criança diz: \"Fiz um foguetão!\" Como regista isso?", options: ["Escreve as palavras exatas entre aspas", "Escreve \"a criança é criativa\"", "Não regista", "Escreve o que acha que ela quis dizer"], answer: 0, why: "Escrever as palavras exatas entre aspas mantém a nota objetiva." },
      { objective: "O5", q: "As crianças pequenas aprendem melhor:", options: ["Com longas explicações", "Com fichas o dia todo", "A brincar, com um pequeno desafio divertido", "Sentadas, quietas, à espera"], answer: 2, why: "Brincar com um pequeno desafio é a forma como as crianças pequenas aprendem." },
      { objective: "O5", q: "Qual é um plano de atividade completo?", options: ["\"Fazer arte.\"", "\"Folhas.\"", "\"Divertir-se.\"", "Idade, objetivo, materiais, passos, nota de segurança e como vai saber que resultou"], answer: 3, why: "As seis partes fazem um plano que outra pessoa pode usar." },
      { objective: "O5", q: "Correr, saltar e trepar são:", options: ["Capacidades de motricidade global", "Capacidades de motricidade fina", "Capacidades de leitura", "Capacidades de matemática"], answer: 0, why: "A motricidade global usa os músculos grandes do corpo." },
      { objective: "O6", q: "As suas horas de experiência só contam se forem:", options: ["Dos 10 anos antes da candidatura", "Dos 3 anos antes da candidatura", "Do mês antes da candidatura", "De qualquer altura da sua vida"], answer: 1, why: "A página do Conselho diz: nos 3 anos antes de enviar a candidatura." },
      { objective: "O6", q: "Que livro explica o que vai no seu portefólio?", options: ["Qualquer revista sobre educação dos filhos", "O manual de condução do seu estado", "O livro de Normas de Competência do Conselho para o seu contexto", "Um livro de receitas"], answer: 2, why: "O livro de Normas de Competência do seu contexto tem as instruções do portefólio." },
      { objective: "O6", q: "Qual é o melhor primeiro passo para o seu plano CDA?", options: ["Marcar hoje a Visita de Verificação", "Pagar todas as taxas antes de verificar", "Esperar até ter 480 horas e só depois pensar nisso", "Escolher o seu contexto e escrever datas para a formação, as horas, o portefólio, o exame e a visita"], answer: 3, why: "Um plano com datas que começa pelo seu contexto mantém você dentro dos prazos." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 6, 8, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atende ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Requisitos certos", objective: "O1", notYet: "Faltam passos, ou as horas e os prazos estão errados.", meets: "Indica corretamente o contexto, as 120 horas de formação nas oito áreas temáticas, as horas de trabalho, o portefólio, o exame e a visita.", exceeds: "Indica também a taxa atual, uma bolsa a que se candidatar e a data de renovação, tudo verificado em cdacouncil.org." },
      { name: "Plano com datas", objective: "O6", notYet: "Sem datas, ou com datas que não respeitam os prazos de 3 anos ou de 6 meses.", meets: "Datas-alvo reais para cada passo, que mantêm a experiência dentro de 3 anos e o portefólio dentro de 6 meses antes da candidatura.", exceeds: "Inclui um registo de horas de trabalho começado hoje e lembretes no calendário." },
      { name: "Plano de atividade", objective: "O5", notYet: "Falta um objetivo, uma nota de segurança ou uma forma de verificar que resultou.", meets: "Idade, objetivo, materiais, passos, nota de segurança, como vai saber que resultou e uma área temática da CDA.", exceeds: "Junta uma versão mais fácil e uma mais difícil e uma forma de envolver as famílias." },
      { name: "Pensar na segurança", objective: "O2", notYet: "A atividade ou o plano ignora a supervisão, a lavagem das mãos ou os riscos de engasgamento.", meets: "A nota de segurança cobre a supervisão e qualquer perigo nos materiais.", exceeds: "Indica quem licencia as creches no seu estado e uma formação que esse estado exige." },
      { name: "Pronto para observar e denunciar", objective: "O4", notYet: "A nota de exemplo usa rótulos, ou não há um contacto de denúncia do estado escrito.", meets: "Inclui uma nota de observação objetiva e o cartão com o contacto de denúncia do estado.", exceeds: "A nota leva a um próximo passo claro para a criança, marcado como ideia do aluno." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem numa formação CDA que cobre as oito áreas temáticas em 60 dias",
      "Alunos que se candidatam à CDA, e que a recebem, em 12 a 18 meses (inquérito de acompanhamento)",
      "Alunos contratados ou promovidos num emprego em creche, Head Start ou pré-primária em 6 meses",
      "Os programas parceiros dizem que o novo pessoal conhece o sono seguro, a supervisão e a denúncia obrigatória desde o primeiro dia"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para abrir cdacouncil.org e childcare.gov, ou essas páginas impressas",
      "Papel, caneta e um calendário de papel ou do telefone",
      "Objetos do dia a dia para o plano de atividade (copos, meias, papel, folhas)",
      "Opcional: o livro de Normas de Competência do Conselho para o contexto do aluno",
      "Cerca de 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Este curso prepara os alunos; não conta como horas de formação CDA, a não ser que o seu programa esteja organizado para as dar. Encaminhe os alunos para uma formação aprovada para as 120 horas.",
      "Antes de ensinar, verifique os requisitos, as taxas e as bolsas atuais da CDA em cdacouncil.org, e as regras de licenciamento e de denúncia obrigatória do seu estado; elas mudam.",
      "Prática de observação: use vídeos de crianças ou o filho do próprio aluno, com autorização dos pais. Nunca recolha fotos nem nomes reais de filhos de outras pessoas.",
      "A denúncia obrigatória pode trazer memórias difíceis. Avise sobre o conteúdo antes da Lição 3, permita pausas e partilhe recursos de apoio locais.",
      "Alunos com registo criminal: a verificação de antecedentes faz parte do trabalho com crianças. Ajude-os a procurar as regras do seu estado e ponha-os em contacto com apoio jurídico, em vez de adivinhar.",
      "Avalie a tarefa final com a grelha de avaliação e dê feedback sobre uma linha em Ainda não de cada vez."
    ]
  }
};
