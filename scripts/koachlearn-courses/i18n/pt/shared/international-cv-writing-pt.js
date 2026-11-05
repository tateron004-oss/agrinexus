"use strict";

// Koach Learn course (Portuguese translation of shared/international-cv-writing.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "international-cv-writing-pt",
  lang: "pt",
  translationOf: "international-cv-writing",
  category: "Workforce Development",
  name: "Escrever um CV para Empregos em Todo o Mundo",
  skills: "Escolher o formato de CV para um país, Escrever o cabeçalho e o perfil, Descrever o trabalho com resultados, Explicar qualificações e línguas, Adaptar o CV a um anúncio de emprego, Reconhecer recrutadores falsos",
  outcome: "escrever um CV claro e honesto, com duas páginas, para um anúncio de emprego real no seu país ou no estrangeiro: no formato que esse país espera, com o seu trabalho mostrado como resultados, as suas qualificações e línguas explicadas, as palavras-chave do anúncio e sem números de identificação privados, e verificar que o emprego é verdadeiro antes de o enviar.",
  about: [
    "Este curso é para quem precisa de um CV: jovens que acabaram a escola e recém-formados, pessoas com anos de trabalho informal ou num negócio de família, pessoas que mudam de profissão e pessoas que se candidatam a empregadores noutro país ou pela internet. Os exemplos vêm de África, da Ásia, da América Latina, do Médio Oriente, da Europa e da América do Norte.",
    "Você vai construir o seu próprio CV, uma parte de cada vez: o formato certo para o país, um cabeçalho e um perfil curto, o seu trabalho escrito como resultados, a sua formação e as suas línguas explicadas para que um empregador estrangeiro as entenda, e uma versão adaptada a um anúncio de emprego real. Também vai aprender os sinais de alerta de empregos falsos e de recrutadores falsos, porque os burlões atacam quem procura trabalho no estrangeiro.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\" em papel ou numa ferramenta gratuita como o Google Docs, o Microsoft Word online ou o LibreOffice Writer. Depois de cada lição há uma pequena verificação de duas perguntas, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso. No fim, o seu CV está pronto.",
    "Este curso ensina a escrever um CV. Não lhe dá um emprego, um visto nem uma autorização de trabalho. Para vistos e autorizações de trabalho, use só o site oficial do governo ou da embaixada do país onde quer trabalhar."
  ],
  finalTask: "Escolha um anúncio de emprego real (no seu país, no estrangeiro ou pela internet). Escreva para ele um CV com duas páginas ou menos: o formato e os dados pessoais que esse país espera, um cabeçalho e um perfil de 3-4 linhas, pelo menos três experiências de trabalho ou de atividades escritas como ação + resultado, a formação e as línguas explicadas para um leitor estrangeiro, e pelo menos cinco palavras-chave do anúncio usadas com honestidade. Guarde-o em PDF com um nome de ficheiro claro e preencha a lista de verificação contra burlas para esse emprego antes de enviar qualquer coisa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos à procura de trabalho, em muitos países: jovens que acabaram a escola, formados do ensino técnico-profissional (TVET) e da universidade, pessoas com trabalho informal, agrícola, no mercado ou num negócio de família, migrantes que regressam e pessoas que se candidatam a empregos no estrangeiro ou a empregadores pela internet. O curso está traduzido em muitas línguas.",
    startingPoint: "A maioria consegue escrever um documento curto num telefone ou num computador partilhado. Muitos nunca escreveram um CV, ou têm um copiado de um modelo que lista tarefas, inclui números de identificação privados ou tem quatro páginas ou mais. Poucos sabem que as regras do CV mudam de país para país.",
    gap: "Os empregadores e os recrutadores passam pouco tempo com cada CV. Um CV demasiado longo, no formato errado para o país, que esconde a experiência informal ou que usa qualificações que um empregador estrangeiro não entende é muitas vezes recusado. Quem procura trabalho no estrangeiro também é alvo de recrutadores falsos que pedem taxas e passaportes. Os alunos precisam de um CV forte e honesto e do hábito de verificar um emprego antes de se candidatarem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos leem inglês, francês ou espanhol como segunda língua",
      "Aparelhos: muitas vezes um telefone ou um computador partilhado num cibercafé, numa biblioteca ou num centro de formação; só ferramentas gratuitas",
      "Tempo: lições de 4 a 6 minutos; o CV completo pode ser feito em cerca de duas horas, em várias sessões",
      "As regras mudam de país para país: o curso ensina os padrões comuns e como verificar as instruções do próprio empregador ou do país",
      "Segurança: nunca colocar números de identificação, de passaporte ou do banco num CV ou num ficheiro de prática; sem conselhos sobre vistos nem conselhos jurídicos"
    ],
    prerequisites: "Saber escrever um pouco num telefone ou num computador. Quem é novo nos computadores pode fazer primeiro o curso \"Competências Básicas de Informática\"; os alunos nos EUA que querem um currículo americano de uma página e prática de entrevistas podem também fazer \"Currículos, LinkedIn e Entrevistas de Emprego\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um emprego num país indicado", action: "escolher o formato, o tamanho e os dados pessoais do CV que o país e o empregador esperam", standard: "seguindo as instruções do anúncio e deixando de fora os números de identificação e de passaporte" },
    { id: "O2", condition: "Usando as suas próprias informações", action: "escrever o cabeçalho do CV e um perfil de 3 a 4 linhas para um tipo de emprego", standard: "com contactos que funcionam e sem erros de ortografia" },
    { id: "O3", condition: "Com a sua experiência de trabalho, de estudo ou na comunidade, paga ou não paga", action: "escrever experiências que começam com um verbo de ação e mostram um resultado", standard: "com pelo menos um número ou um detalhe concreto em cada uma" },
    { id: "O4", condition: "Com os seus certificados, formações e línguas", action: "apresentar as suas qualificações e os seus níveis de língua para que um empregador de outro país os entenda", standard: "indicando a escola, o país, o ano e um nível que um leitor estrangeiro possa usar" },
    { id: "O5", condition: "Com um anúncio de emprego real", action: "adaptar o seu CV ao anúncio usando as palavras-chave dele e um formato que os sistemas de candidatura conseguem ler", standard: "usando pelo menos cinco palavras-chave com honestidade e guardando-o em PDF com um nome claro" },
    { id: "O6", condition: "Antes de enviar o seu CV para um emprego ou um recrutador", action: "verificar se a oferta tem os sinais de alerta de um emprego falso ou de um recrutador ilegal", standard: "sem pagar nenhuma taxa e sem entregar o passaporte nem documentos originais" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Construir a base do seu CV",
      lessons: [
        {
          title: "CV ou currículo: o que muda de país para país",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher o tamanho, o formato e os dados pessoais certos do CV para o país onde se candidata.",
          text: [
            "Um CV (curriculum vitae) é um documento curto que mostra a um empregador as suas competências, o seu trabalho e a sua formação. Nos Estados Unidos e no Canadá chama-se normalmente \"resume\" e tem muitas vezes uma ou duas páginas. A maioria dos países usa a palavra CV. Para a maioria dos empregos, duas páginas é um máximo seguro; os CV académicos longos são só para lugares de investigação e de universidade.",
            "Os dados pessoais mudam de país para país. Os empregadores nos EUA, no Canadá e no Reino Unido normalmente não querem foto, idade, estado civil nem religião, por causa das regras contra a discriminação. Em muitos países de África, do Médio Oriente, da Ásia e da América Latina (por exemplo a Nigéria, o Egito, Marrocos, a Índia, as Filipinas, o México e a Colômbia) muitos empregadores ainda esperam uma foto, a data de nascimento ou a nacionalidade. No Senegal ou na Costa do Marfim, o CV é normalmente escrito em francês.",
            "Não há uma regra única para o mundo, por isso siga três fontes por esta ordem: as instruções do próprio anúncio, a página de carreiras do empregador e depois o costume nesse país. Se o anúncio pedir uma foto, use uma foto simples e profissional da cabeça e dos ombros. Se se candidatar na Europa, muitos empregadores conhecem o formato de CV gratuito Europass.",
            "Há coisas que nunca entram num CV, em nenhum lugar: o seu número do bilhete de identidade, do passaporte ou da segurança social, os dados do banco ou uma cópia do passaporte. Um empregador verdadeiro só pede isso depois de uma oferta, por um processo seguro."
          ],
          steps: ["Leia as instruções do anúncio: língua, formato, foto, tamanho, como se candidatar.", "Veja a página de carreiras do empregador.", "Procure o costume do CV nesse país.", "Decida: tamanho (1-2 páginas), com ou sem foto, que dados pessoais.", "Deixe sempre de fora os números de identificação, de passaporte e do banco."],
          words: [["CV", "curriculum vitae: um documento curto com as suas competências, o seu trabalho e a sua formação, para um empregador."], ["Resume", "o nome habitual de um CV nos EUA e no Canadá, muitas vezes com uma ou duas páginas."], ["Europass", "um formato e uma ferramenta de CV gratuitos da União Europeia, conhecidos por muitos empregadores na Europa."], ["Discriminação", "tratar alguém de forma injusta por causa de coisas como a idade, o sexo, a religião ou a situação familiar."]],
          slides: [
            { title: "CV ou currículo", bullets: ["Um documento curto com as suas competências, trabalho e formação", "EUA e Canadá dizem \"resume\"; a maioria dos países diz CV", "Duas páginas é um máximo seguro para a maioria dos empregos"] },
            { title: "Os dados pessoais mudam de país para país", bullets: ["EUA, Canadá, Reino Unido: normalmente sem foto, idade ou estado civil", "Muitos países ainda esperam uma foto ou a data de nascimento", "África francófona: o CV é normalmente em francês"] },
            { title: "Siga por esta ordem", bullets: ["1. As instruções do anúncio", "2. A página de carreiras do empregador", "3. O costume nesse país"] },
            { title: "Nunca em nenhum CV", bullets: ["Números do bilhete de identidade, do passaporte ou da segurança social", "Dados do banco ou uma cópia do passaporte"] }
          ],
          sources: [{ name: "Europass: Create your Europass CV (União Europeia)", url: "https://europass.europa.eu/en/create-europass-cv" }],
          tryIt: "Escolha dois países onde poderia trabalhar, por exemplo o seu país e um no estrangeiro. Para cada um, escreva num papel: a língua do CV, o tamanho, foto sim ou não e que dados pessoais incluir. Depois encontre um anúncio de emprego real em cada um e veja se ele dá as suas próprias instruções.",
          youCanNow: "escolher o tamanho, a língua, a foto e os dados pessoais do CV para um país, e dizer o que nunca entra num CV.",
          quickCheck: [
            { objective: "O1", q: "Um anúncio de uma empresa no Canadá pede um \"resume\". Que dados pessoais deixa de fora?", options: ["O seu endereço de email", "A sua cidade", "O seu número de telefone", "A sua foto, idade e estado civil"], answer: 3, why: "Os empregadores do Canadá e dos EUA normalmente não querem foto, idade nem estado civil." },
            { objective: "O1", q: "Que coisa nunca deve estar num CV, em nenhum país?", options: ["O número do seu passaporte", "O seu endereço de email", "As línguas que fala", "O seu emprego mais recente"], answer: 0, why: "Os números de identificação e de passaporte podem ser usados para roubar a sua identidade; os empregadores só os pedem depois de uma oferta." }
          ]
        },
        {
          title: "O cabeçalho e o perfil: os primeiros dez segundos",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escrever o cabeçalho do CV e um perfil de 3-4 linhas para um tipo de emprego.",
          text: [
            "Os recrutadores muitas vezes olham para um CV só alguns segundos antes de decidirem continuar a ler. O topo da página tem de lhes dizer quem você é e o que sabe fazer.",
            "O cabeçalho tem o seu nome completo, um número de telefone com o indicativo do país (por exemplo +234 para a Nigéria, +254 para o Quénia, +63 para as Filipinas), um email profissional, a sua cidade e o seu país, e um link do LinkedIn se tiver um. Um email profissional é simples, como nome.apelido@ mais o seu serviço de email, e não uma alcunha.",
            "O perfil tem 3 a 4 linhas debaixo do cabeçalho. Diga o que você é (a sua profissão ou área), as suas melhores competências ou os anos de experiência, um resultado e o emprego que quer. Exemplo: \"Agente de atendimento ao cliente com 3 anos numa loja movimentada de dinheiro móvel em Acra. Atendi mais de 80 clientes por dia em inglês e twi, com muito poucas reclamações. Procuro um lugar num centro de atendimento telefónico.\"",
            "Escreva um perfil para um tipo de emprego. Se se candidatar a dois empregos diferentes, escreva dois perfis."
          ],
          steps: ["Escreva o seu nome completo em letras grandes.", "Junte o telefone com o indicativo do país, um email profissional, a cidade e o país.", "Escreva a linha 1: o que você é e os seus anos de experiência.", "Escreva as linhas 2-3: as suas melhores competências e um resultado.", "Escreva a última linha: o emprego que quer."],
          words: [["Cabeçalho", "o topo do CV, com o seu nome e os seus contactos."], ["Perfil", "3 a 4 linhas debaixo do cabeçalho que resumem quem você é e o emprego que quer; também se chama resumo."], ["Indicativo do país", "o número que se põe antes de um número de telefone quando se liga de outro país, como +233 para o Gana."]],
          slides: [
            { title: "Os primeiros dez segundos", bullets: ["Os recrutadores decidem depressa", "O topo da página 1 tem de dizer quem você é"] },
            { title: "Cabeçalho", bullets: ["Nome completo", "Telefone com o indicativo do país, por exemplo +254", "Email profissional, cidade e país"] },
            { title: "Perfil: 3 a 4 linhas", bullets: ["O que você é e a sua experiência", "As suas melhores competências e um resultado", "O emprego que quer"] },
            { title: "Um emprego, um perfil", bullets: ["Candidata-se a dois tipos de emprego? Escreva dois perfis"] }
          ],
          tryIt: "Escreva o seu cabeçalho. Verifique que o seu número de telefone tem o indicativo do país e que o seu email é profissional. Depois escreva um perfil de 3-4 linhas para um emprego que quer. Leia-o em voz alta: alguém consegue saber a sua profissão e o seu melhor resultado em dez segundos?",
          youCanNow: "escrever o cabeçalho do CV com contactos que funcionam e um perfil curto para um emprego.",
          quickCheck: [
            { objective: "O2", q: "Que endereço de email é melhor para um CV?", options: ["sweetgirl2004@...", "amina.okafor@...", "bigboss_money@...", "dontemailme@..."], answer: 1, why: "Um email simples com o seu nome parece profissional." },
            { objective: "O2", q: "Você candidata-se a partir do Quénia a um empregador noutro país. Como deve aparecer o seu número de telefone?", options: ["Sem os primeiros algarismos", "Só o seu nome no WhatsApp", "Com o indicativo do país, como +254", "Não deve dar número de telefone"], answer: 2, why: "O indicativo do país permite que um empregador no estrangeiro ligue para você." }
          ]
        },
        {
          title: "Escrever o seu trabalho como resultados, também o trabalho informal",
          objectives: ["O3"],
          minutes: 6,
          goal: "Escrever três experiências que começam cada uma com um verbo de ação e mostram um resultado.",
          text: [
            "Muitos CV listam tarefas: \"Responsável pelas vendas.\" Os empregadores querem saber o que você conseguiu. Comece cada linha com um verbo de ação (atendi, vendi, reparei, formei, organizei, reduzi) e junte um resultado com um número ou um detalhe claro.",
            "Tarefa: \"Responsável pelos clientes.\" Resultado: \"Atendi cerca de 60 clientes por dia e mantive os registos da loja num caderno, sem nenhum pagamento em falta durante 12 meses.\"",
            "O trabalho informal e o trabalho não pago contam. Vender num mercado em Lagos, reparar telefones em Nairobi, ajudar a gerir a quinta da família em Marrocos, fazer voluntariado na igreja ou num clube de jovens, ou fazer pequenos trabalhos pela internet é experiência verdadeira. Dê a cada um um título claro (por exemplo \"Comerciante por conta própria\" ou \"Coordenador voluntário de jovens\"), o lugar, as datas e os seus resultados.",
            "Ponha primeiro o trabalho mais recente. Use 2 a 4 linhas por emprego. Nunca invente empregos, títulos nem números; se fizer uma estimativa, diga \"cerca de\" e esteja pronto para a explicar numa entrevista."
          ],
          steps: ["Faça a lista de todos os empregos, negócios, trabalhos na quinta, voluntariado ou pequenos trabalhos que já teve.", "Dê a cada um um título claro, o lugar e as datas (mês e ano).", "Para cada um, escreva 2-4 linhas que começam com um verbo de ação.", "Junte um número ou um detalhe concreto a cada linha.", "Ponha o mais recente primeiro e verifique que cada linha é verdadeira."],
          words: [["Verbo de ação", "uma palavra de fazer que começa uma linha do CV, como atendi, vendi ou reparei."], ["Resultado", "o que mudou por causa do seu trabalho, mostrado com um número ou um detalhe claro."], ["Trabalho informal", "trabalho sem contrato formal, como vender no mercado, um negócio de família ou biscates."]],
          slides: [
            { title: "Tarefas ou resultados", bullets: ["Tarefa: \"Responsável pelos clientes\"", "Resultado: \"Atendi cerca de 60 clientes por dia sem pagamentos em falta\""] },
            { title: "Comece com um verbo de ação", bullets: ["Atendi, vendi, reparei, formei, organizei, reduzi", "Junte um número ou um detalhe claro"] },
            { title: "O trabalho informal conta", bullets: ["Vender no mercado, reparar telefones, a quinta da família", "Voluntariado e pequenos trabalhos pela internet", "Dê-lhe um título, um lugar e as datas"] },
            { title: "Seja verdadeiro", bullets: ["O mais recente primeiro, 2 a 4 linhas por emprego", "Diga \"cerca de\" nas estimativas", "Nunca invente empregos nem números"] }
          ],
          tryIt: "Escolha três experiências, pagas ou não pagas. Para cada uma, escreva um título, o lugar e as datas, e depois duas linhas que começam com um verbo de ação e têm um número ou um detalhe. Sublinhe cada número e verifique que o conseguiria explicar a um entrevistador.",
          youCanNow: "transformar o seu trabalho pago e não pago em experiências honestas no CV que mostram resultados.",
          quickCheck: [
            { objective: "O3", q: "Que linha mostra um resultado?", options: ["Responsável pela loja", "Trabalhei em vendas", "As tarefas incluíam limpeza", "Vendi cerca de 40 capas de telefone por semana e formei 2 novos funcionários"], answer: 3, why: "Começa com um verbo de ação e dá números que mostram o que conseguiu." },
            { objective: "O3", q: "Vendeu legumes num mercado durante três anos sem contrato. O que faz?", options: ["Põe-no como \"Comerciante por conta própria\" com datas e resultados", "Deixa-o de fora porque era informal", "Chama-lhe um lugar de gerente numa grande empresa", "Escreve só \"mercado\" sem detalhes"], answer: 0, why: "O trabalho informal é experiência verdadeira; dê-lhe um título claro e honesto e resultados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Construir a base do seu CV",
        questions: [
          { objective: "O1", q: "Você candidata-se a uma empresa na Costa do Marfim. O anúncio está em francês e não diz nada sobre a língua. Em que língua escreve o seu CV?", options: ["Em qualquer língua que quiser", "Em francês, a língua do anúncio", "Metade em inglês, metade em francês", "Em código, para ser privado"], answer: 1, why: "Siga a língua do anúncio e do país; na Costa do Marfim é normalmente o francês." },
          { objective: "O1", q: "Duas fontes não concordam sobre pôr uma foto. Qual vem primeiro?", options: ["O CV antigo de um amigo", "Um modelo qualquer da internet", "As instruções do próprio anúncio", "O que você prefere"], answer: 2, why: "As instruções do anúncio vêm primeiro, depois a página do empregador e depois o costume do país." },
          { objective: "O2", q: "O que pertence ao cabeçalho do CV?", options: ["O seu nome, o telefone com o indicativo do país, o email, a cidade e o país", "O número da sua conta bancária", "O número do seu passaporte", "A história completa da sua vida"], answer: 0, why: "O cabeçalho dá só o necessário para o empregador o identificar e o contactar." },
          { objective: "O2", q: "Que tamanho deve ter o perfil?", options: ["Uma palavra", "Uma página inteira", "Duas páginas", "3 a 4 linhas"], answer: 3, why: "Um perfil curto lê-se em segundos e mostra quem você é e o emprego que quer." },
          { objective: "O3", q: "Que experiência é a mais forte?", options: ["\"Fiz muitas coisas na quinta\"", "\"Responsável pelos animais\"", "\"Geri a alimentação de 200 galinhas e reduzi o desperdício de ração em cerca de um quinto numa época\"", "\"Quinta\""], answer: 2, why: "Começa com um verbo de ação e mostra um resultado com números." }
        ]
      }
    },
    {
      name: "Capítulo 2: Adaptar o CV ao emprego e manter-se em segurança",
      lessons: [
        {
          title: "Formação, certificados e línguas que um empregador estrangeiro entende",
          objectives: ["O4"],
          minutes: 5,
          goal: "Apresentar as suas qualificações e línguas para que um empregador de outro país as entenda.",
          text: [
            "Um empregador no estrangeiro pode não conhecer a sua escola nem os certificados do seu país, como o certificado WAEC ou NECO na África Ocidental, o KCSE no Quénia, o baccalauréat no Senegal ou em Marrocos, ou um TESDA National Certificate nas Filipinas. Para cada um, escreva o nome completo, a escola ou a entidade que o emite, a cidade e o país, o ano e uma explicação curta e simples, por exemplo \"(certificado nacional de fim do ensino secundário)\".",
            "Para trabalhar ou estudar noutro país, o empregador, uma ordem profissional ou um serviço de imigração pode pedir uma avaliação oficial ou o reconhecimento das suas qualificações. Na Europa, a rede ENIC-NARIC indica o centro de reconhecimento de cada país; nos EUA e no Canadá, serviços como o World Education Services (WES) avaliam qualificações estrangeiras. Pergunte ao empregador ou ao serviço oficial qual aceitam antes de pagar qualquer avaliação.",
            "As línguas são uma competência forte. Indique cada língua e o seu nível. Muitos empregadores entendem os níveis do Quadro Europeu Comum de Referência, A1 e A2 (básico), B1 e B2 (independente) e C1 e C2 (avançado), ou palavras simples como \"língua materna\", \"fluente\" ou \"básico\". Se tiver o resultado de um exame (por exemplo IELTS, TOEFL ou DELF), indique o exame e o ano.",
            "Os cursos curtos também contam: certificados online, programas técnico-profissionais (TVET), primeiros socorros ou cartas de condução. Ponha-os em \"Certificados e formações\" com a entidade e o ano."
          ],
          steps: ["Escreva cada qualificação com o nome completo, a escola ou a entidade, a cidade, o país e o ano.", "Junte uma explicação curta e simples para os certificados locais.", "Escreva cada língua com um nível (língua materna, fluente, B2, básico).", "Junte os nomes dos exames e os anos, se os tiver.", "Escreva os cursos curtos e as cartas com a entidade e o ano."],
          words: [["Avaliação de qualificações", "um relatório oficial que explica a que corresponde uma qualificação estrangeira noutro país."], ["ENIC-NARIC", "uma rede de centros nacionais que aconselham sobre o reconhecimento de qualificações de outros países."], ["QECR (CEFR)", "Quadro Europeu Comum de Referência: níveis de língua de A1 (iniciante) a C2 (muito avançado)."], ["TVET", "ensino e formação técnico-profissional: programas práticos de formação para um emprego."]],
          slides: [
            { title: "Explique os certificados locais", bullets: ["Nome completo, escola, cidade, país, ano", "Junte uma nota simples: \"(certificado nacional de fim do ensino secundário)\""] },
            { title: "Reconhecimento no estrangeiro", bullets: ["Alguns empregadores pedem uma avaliação oficial", "Europa: ENIC-NARIC; EUA e Canadá: serviços como o WES", "Pergunte qual aceitam antes de pagar"] },
            { title: "Línguas", bullets: ["Indique cada língua e um nível", "A1-A2 básico, B1-B2 independente, C1-C2 avançado", "Junte um exame e o ano, se tiver"] },
            { title: "Os cursos curtos contam", bullets: ["Certificados online, TVET, primeiros socorros, carta de condução", "Indique a entidade e o ano"] }
          ],
          sources: [
            { name: "Rede ENIC-NARIC: reconhecimento de qualificações", url: "https://www.enic-naric.net/" },
            { name: "World Education Services (WES): avaliação de qualificações para os EUA e o Canadá", url: "https://www.wes.org/" },
            { name: "Europass: Quadro Europeu Comum de Referência para as línguas", url: "https://europass.europa.eu/en/common-european-framework-reference-language-skills" }
          ],
          tryIt: "Escreva as suas secções de Formação, Certificados e Línguas. Dê a cada certificado local uma explicação curta e simples, e dê a cada língua um nível. Mostre-o a alguém de outro país ou região, ou leia-o como se fosse um empregador estrangeiro: há alguma coisa pouco clara?",
          youCanNow: "apresentar a sua formação, os seus certificados e as suas línguas para que um empregador de outro país os entenda.",
          quickCheck: [
            { objective: "O4", q: "Um empregador na Alemanha pode não conhecer o KCSE. O que escreve?", options: ["Só \"KCSE\"", "Nada sobre a escola", "Um diploma mais alto que não tem", "\"KCSE (Kenya Certificate of Secondary Education), [escola], Nairobi, Quénia, [ano]\""], answer: 3, why: "O nome completo, a escola, o lugar e o ano permitem que um empregador estrangeiro o entenda." },
            { objective: "O4", q: "Fala espanhol em casa e usa inglês no trabalho todos os dias. Como as pode indicar?", options: ["Espanhol: língua materna; inglês: fluente (C1)", "Línguas: algumas", "Espanhol e inglês: perfeitos em tudo", "Deixar as línguas de fora"], answer: 0, why: "Indique cada língua com um nível claro que um empregador possa usar." }
          ]
        },
        {
          title: "Adaptar o seu CV a um anúncio de emprego",
          objectives: ["O5"],
          minutes: 6,
          goal: "Adaptar o seu CV a um anúncio real com as palavras-chave dele e um formato que os sistemas de candidatura conseguem ler.",
          text: [
            "Enviar o mesmo CV para todos os empregos raramente funciona. Leia o anúncio e sublinhe as palavras-chave: nomes de cargos, competências, ferramentas, línguas e certificados (por exemplo \"atendimento ao cliente\", \"Excel\", \"bilingue francês-inglês\", \"carta de empilhador\"). Quando forem verdadeiras para você, use as mesmas palavras no seu perfil, nas competências e na experiência.",
            "Muitos grandes empregadores e sites de emprego usam um sistema de gestão de candidaturas (ATS), um programa que lê os CV e procura neles palavras-chave. Ajude-o a ler o seu: use títulos simples (Perfil, Experiência, Formação, Competências, Línguas), um tipo de letra comum, nenhum texto dentro de imagens ou caixas de texto e nenhuma tabela para informações importantes.",
            "Nunca copie o anúncio inteiro nem diga que tem competências que não tem. Texto escondido ou branco com palavras-chave pode fazer com que seja recusado, e as afirmações falsas podem custar-lhe o emprego mais tarde.",
            "Guarde o CV final em PDF, a não ser que o anúncio peça Word. Dê ao ficheiro um nome claro, como \"Amina-Okafor-CV-Atendimento-ao-Cliente.pdf\", e mantenha-o com duas páginas ou menos."
          ],
          steps: ["Sublinhe as palavras-chave do anúncio: cargos, competências, ferramentas, línguas, certificados.", "Marque as que são verdadeiras para você.", "Use essas mesmas palavras no seu perfil, nas competências e na experiência.", "Use títulos simples e um formato simples; nenhum texto em imagens.", "Guarde em PDF (ou em Word se for pedido) com o seu nome e o emprego no nome do ficheiro."],
          words: [["Palavras-chave", "as palavras importantes de um anúncio de emprego: competências, ferramentas, cargos e certificados."], ["ATS", "applicant tracking system, sistema de gestão de candidaturas: um programa que recolhe os CV e procura neles palavras-chave."], ["PDF", "um tipo de ficheiro que fica igual em todos os computadores e telefones."]],
          slides: [
            { title: "Um anúncio, um CV", bullets: ["Sublinhe as palavras-chave do anúncio", "Use as verdadeiras no seu próprio CV"] },
            { title: "Ajude o programa a lê-lo", bullets: ["Títulos simples: Perfil, Experiência, Formação, Competências", "Tipo de letra comum, nenhum texto em imagens ou caixas de texto", "Nenhuma tabela para informações importantes"] },
            { title: "Seja honesto", bullets: ["Não copie o anúncio", "Nenhuma palavra-chave escondida", "Diga só as competências que tem"] },
            { title: "Guarde e dê-lhe um nome", bullets: ["PDF, a não ser que o anúncio peça Word", "Nome-CV-Emprego.pdf", "Duas páginas ou menos"] }
          ],
          tryIt: "Encontre um anúncio de emprego real. Sublinhe dez palavras-chave. Marque as que são verdadeiras para você e junte pelo menos cinco delas ao seu CV nos lugares certos. Guarde-o em PDF com o seu nome e o emprego no nome do ficheiro.",
          youCanNow: "adaptar o seu CV a um anúncio com as palavras-chave dele e guardá-lo num formato que os empregadores e os seus programas conseguem ler.",
          quickCheck: [
            { objective: "O5", q: "O anúncio pede \"bilingue francês-inglês\" e você fala bem as duas línguas. O que faz?", options: ["Ignora", "Escreve essas palavras no seu perfil ou na secção de línguas", "Escreve-as em texto branco para só o programa as ver", "Diz que também fala mais cinco línguas"], answer: 1, why: "Usar as palavras-chave verdadeiras do anúncio onde uma pessoa e o programa as veem é adaptar com honestidade." },
            { objective: "O5", q: "Que formato é mais fácil de ler para um sistema de gestão de candidaturas?", options: ["A sua experiência dentro de uma imagem", "Texto em muitas caixas de texto pequenas", "Títulos simples e texto simples", "Uma tabela com todas as suas competências em células minúsculas"], answer: 2, why: "Os programas leem com mais segurança texto simples debaixo de títulos simples." }
          ]
        },
        {
          title: "Antes de enviar: reconhecer empregos falsos e recrutadores ilegais",
          objectives: ["O6"],
          minutes: 6,
          goal: "Verificar uma oferta de emprego e um recrutador para ver os sinais de alerta de burla antes de enviar o seu CV.",
          text: [
            "Quem procura trabalho, sobretudo no estrangeiro, é um alvo preferido dos burlões. O maior sinal de alerta: alguém pede-lhe para pagar para ter o emprego, para \"processamento\", formação, exame médico, visto ou colocação. Os empregadores honestos não cobram para lhe dar um emprego, e os princípios de recrutamento justo da Organização Internacional do Trabalho (OIT) dizem que os trabalhadores não devem pagar taxas de recrutamento nem custos ligados a elas.",
            "Outros sinais de alerta: uma oferta sem entrevista; um salário muito alto para um trabalho fácil; mensagens só pelo WhatsApp ou de um email gratuito; pressão para decidir hoje; uma empresa que não consegue encontrar no seu próprio site; um pedido do seu passaporte, dos certificados originais ou dos dados do banco; ou um cheque enviado para você com o pedido de devolver parte do dinheiro.",
            "Verifique antes de se candidatar. Procure o site verdadeiro da empresa e contacte-a com os dados que você próprio encontrar. Para empregos no estrangeiro, verifique que a agência de recrutamento tem licença do serviço de trabalho ou de trabalhadores migrantes do seu governo (por exemplo o Department of Migrant Workers nas Filipinas ou a National Employment Authority no Quénia), e consulte as páginas oficiais de vistos e de autorizações de trabalho do país de destino.",
            "Guarde você próprio o seu passaporte e os documentos originais; envie só cópias quando um empregador verdadeiro as pedir depois de uma oferta. Se suspeitar de uma burla ou de tráfico de pessoas, pare o contacto e denuncie à polícia do seu país, ao ministério do trabalho ou à embaixada. A OIM e a OIT apoiam os migrantes e publicam orientações sobre o recrutamento justo."
          ],
          steps: ["Nunca pague uma taxa para ter um emprego ou um lugar através de um recrutador.", "Encontre o site verdadeiro da empresa e contacte-a você próprio.", "Para empregos no estrangeiro, verifique a licença da agência no serviço de trabalho ou de trabalhadores migrantes do seu governo.", "Leia as regras de vistos e de autorizações de trabalho só em sites oficiais do governo ou da embaixada.", "Guarde o seu passaporte e os originais; envie cópias só depois de uma oferta verdadeira.", "Pare e denuncie qualquer coisa que pareça errada."],
          words: [["Taxa de recrutamento", "dinheiro que se pede a um trabalhador para ter um emprego ou uma colocação; o recrutamento justo diz que o trabalhador não o deve pagar."], ["Agência licenciada", "uma agência de recrutamento que o seu governo aprovou e que pode verificar."], ["Tráfico de pessoas", "levar ou prender pessoas pela força, pela fraude ou por dívidas para explorar o seu trabalho."]],
          slides: [
            { title: "O maior sinal de alerta", bullets: ["Pedem-lhe para pagar para ter o emprego", "Recrutamento justo da OIT: os trabalhadores não devem pagar taxas de recrutamento"] },
            { title: "Outros sinais de alerta", bullets: ["Sem entrevista, salário muito alto para um trabalho fácil", "Só WhatsApp ou um email gratuito, pressão para decidir hoje", "Querem o seu passaporte, os originais ou os dados do banco"] },
            { title: "Verifique antes de se candidatar", bullets: ["Encontre você próprio o site verdadeiro da empresa", "Verifique a licença da agência junto do seu governo", "Regras de vistos: só páginas oficiais do governo ou da embaixada"] },
            { title: "Proteja-se", bullets: ["Guarde o seu passaporte e os documentos originais", "Envie cópias só depois de uma oferta verdadeira", "Pare e denuncie: polícia, ministério do trabalho, embaixada"] }
          ],
          sources: [
            { name: "Organização Internacional do Trabalho (OIT): Fair recruitment", url: "https://www.ilo.org/topics-and-sectors/fair-recruitment" },
            { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" }
          ],
          tryIt: "Tarefa final: pegue no seu CV adaptado e no anúncio de emprego. Preencha esta lista de verificação num papel: Há alguma taxa? Encontrei eu próprio o site verdadeiro da empresa? O recrutador tem licença (para empregos no estrangeiro)? Estou a guardar o meu passaporte e os originais? O meu CV está livre de números de identificação, de passaporte e do banco? Só se todas as respostas forem seguras, envie o seu CV.",
          youCanNow: "verificar um emprego e um recrutador para ver os sinais de alerta de burla e enviar com segurança um CV honesto e adaptado.",
          quickCheck: [
            { objective: "O6", q: "Um recrutador oferece-lhe um emprego num hotel noutro país e pede primeiro uma \"taxa de processamento\". O que é isto?", options: ["Normal em todos os empregos no estrangeiro", "Um sinal de uma boa empresa", "Um sinal de alerta; os empregadores honestos não cobram para lhe dar um emprego", "Um imposto que tem de pagar"], answer: 2, why: "Pedir aos trabalhadores para pagar para ter um emprego é o maior sinal de alerta de burla." },
            { objective: "O6", q: "Um novo empregador quer ficar com o seu passaporte \"por segurança\" antes de viajar. O que faz?", options: ["Guarda você próprio o passaporte e verifica a oferta em fontes oficiais", "Envia o original pelo correio", "Entrega-o; é normal", "Publica uma foto dele na internet"], answer: 0, why: "Guardar o seu passaporte protege você; ficar com os passaportes dos trabalhadores é um sinal de trabalho forçado e de tráfico de pessoas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Adaptar o CV ao emprego e manter-se em segurança",
        questions: [
          { objective: "O4", q: "Porque juntar uma explicação simples depois de um certificado local como o WAEC?", options: ["Para o CV ficar mais longo", "Para que um empregador de outro país entenda o que é", "Porque a lei o exige em todo o lado", "Para esconder as suas notas"], answer: 1, why: "Uma explicação curta ajuda um empregador estrangeiro a entender um certificado que talvez não conheça." },
          { objective: "O4", q: "Um empregador no estrangeiro pede uma avaliação oficial do seu diploma. Qual é o seu primeiro passo?", options: ["Pagar ao primeiro site que encontrar", "Fazer o seu próprio certificado", "Desistir do emprego", "Perguntar ao empregador ou ao serviço oficial que avaliação aceitam"], answer: 3, why: "Empregadores e países diferentes aceitam avaliações diferentes; verifique antes de pagar." },
          { objective: "O5", q: "O que é um sistema de gestão de candidaturas (ATS)?", options: ["Um modelo de CV gratuito", "Um tipo de passaporte", "Um programa que recolhe os CV e procura neles palavras-chave", "Um recrutador que cobra taxas"], answer: 2, why: "Muitos empregadores usam um ATS para ordenar os CV pelas palavras-chave." },
          { objective: "O5", q: "Que nome de ficheiro é o melhor para o seu CV?", options: ["Mohamed-Ali-CV-Eletricista.pdf", "document1.docx", "cv final final novo.pdf", "IMG_2045.jpg"], answer: 0, why: "Um nome claro com o seu nome e o emprego é fácil de encontrar para o empregador." },
          { objective: "O6", q: "Uma mensagem de emprego promete um salário muito alto, sem entrevista, e pede-lhe para decidir hoje. O que faz?", options: ["Aceita depressa", "Envia os dados do banco", "Trata-a como um sinal de alerta e verifica você próprio a empresa", "Envia o passaporte"], answer: 2, why: "Salário alto, sem entrevista e pressão são sinais comuns de burla." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Escrever um CV para Empregos em Todo o Mundo",
    questions: [
      { objective: "O1", q: "O que é um CV?", options: ["Um documento curto que mostra a um empregador as suas competências, trabalho e formação", "Um visto de trabalho", "Um formulário do banco", "Uma carta da sua escola"], answer: 0, why: "Um CV resume as suas competências, o seu trabalho e a sua formação para um empregador." },
      { objective: "O1", q: "Para a maioria dos empregos, qual é um tamanho máximo seguro para um CV?", options: ["Dez páginas", "Duas páginas", "Meia linha", "Cinco páginas"], answer: 1, why: "Duas páginas é um máximo seguro para a maioria dos empregos; os CV longos são para lugares académicos." },
      { objective: "O1", q: "Candidata-se a uma empresa dos EUA. Que dado deixa normalmente de fora?", options: ["As suas competências", "O seu percurso profissional", "O seu email", "A sua foto"], answer: 3, why: "Os empregadores dos EUA normalmente não querem foto, idade nem estado civil." },
      { objective: "O1", q: "Um empregador no Egito pede uma foto no anúncio. O que faz?", options: ["Envia uma foto de uma festa", "Recusa candidatar-se", "Junta uma foto simples e profissional da cabeça e dos ombros", "Envia uma cópia do passaporte"], answer: 2, why: "Siga as instruções do anúncio com uma foto simples e profissional." },
      { objective: "O2", q: "O que deve dizer o perfil no topo do seu CV?", options: ["A história completa da sua família", "O que você é, as suas melhores competências, um resultado e o emprego que quer", "O número do seu passaporte", "O seu salário em cada emprego"], answer: 1, why: "O perfil diz a um recrutador, em segundos, quem você é e o que quer." },
      { objective: "O2", q: "Porque juntar o indicativo do país ao seu número de telefone?", options: ["Para que um empregador no estrangeiro possa ligar para você", "É uma palavra-passe", "Torna o CV mais longo", "Para esconder o seu número"], answer: 0, why: "Sem o indicativo do país, quem liga de outro país não consegue falar com você." },
      { objective: "O2", q: "Quer um emprego de auxiliar de enfermagem e também um emprego num hotel. O que faz com o perfil?", options: ["Tira o perfil", "Usa um perfil para os dois", "Não fala de nenhum dos empregos", "Escreve um perfil diferente para cada emprego"], answer: 3, why: "Um perfil deve ser para um tipo de emprego." },
      { objective: "O3", q: "Que palavra é um verbo de ação para começar uma linha do CV?", options: ["Responsável", "Tarefas", "Reparei", "Vários"], answer: 2, why: "Verbos de ação como reparei, atendi e formei mostram o que você fez." },
      { objective: "O3", q: "Qual é a melhor forma de mostrar um resultado?", options: ["\"Trabalhei muito\"", "\"Formei 5 novos caixas em 3 meses\"", "\"Estive na loja\"", "\"Fiz tarefas\""], answer: 1, why: "Um número e um detalhe claro mostram o resultado do seu trabalho." },
      { objective: "O3", q: "Ajudou a gerir a loja da sua família durante dois anos. Como a indica?", options: ["Deixa-a de fora", "Chama-lhe uma empresa multinacional", "Escreve só \"família\"", "Dá-lhe um título claro, o lugar, as datas e os resultados"], answer: 3, why: "O trabalho familiar e informal é experiência verdadeira quando é indicado com honestidade e com resultados." },
      { objective: "O3", q: "Não tem a certeza de um número exato da sua experiência. O que faz?", options: ["Diz \"cerca de\" e está pronto para o explicar", "Inventa um número maior", "Junta zeros", "Deixa um número que não consegue explicar"], answer: 0, why: "Estimativas honestas marcadas com \"cerca de\" estão bem; números inventados podem custar-lhe o emprego." },
      { objective: "O4", q: "Como deve indicar um certificado local para um empregador estrangeiro?", options: ["Só a sigla", "Nome completo, escola, cidade, país, ano e uma nota simples", "Só o ano", "Não o indicar"], answer: 1, why: "Os dados completos e uma nota simples permitem que um leitor estrangeiro o entenda." },
      { objective: "O4", q: "Nos níveis de língua do QECR (CEFR), qual é o mais avançado?", options: ["A1", "B1", "A2", "C2"], answer: 3, why: "Os níveis do QECR vão de A1 (iniciante) a C2 (muito avançado)." },
      { objective: "O4", q: "Em que ajuda a rede ENIC-NARIC?", options: ["No reconhecimento de qualificações de outros países", "Na reserva de voos", "No pagamento a recrutadores", "Na obtenção de um visto"], answer: 0, why: "Os centros ENIC-NARIC aconselham sobre o reconhecimento de qualificações estrangeiras." },
      { objective: "O5", q: "O que são as palavras-chave de um anúncio de emprego?", options: ["As suas palavras-passe", "Palavras noutra língua", "As competências, ferramentas, cargos e certificados importantes que o empregador quer", "A morada da empresa"], answer: 2, why: "As palavras-chave dizem o que o empregador procura." },
      { objective: "O5", q: "O que é adaptar com honestidade?", options: ["Copiar o anúncio inteiro para o seu CV", "Juntar competências que não tem", "Esconder palavras-chave em texto branco", "Usar as palavras-chave verdadeiras do anúncio no seu perfil e na experiência"], answer: 3, why: "Use as palavras do anúncio só onde são verdadeiras para você." },
      { objective: "O5", q: "A não ser que o anúncio peça Word, como guarda o seu CV?", options: ["Como foto", "Em PDF", "Como mensagem de voz", "Como folha de cálculo"], answer: 1, why: "Um PDF fica igual em todos os aparelhos." },
      { objective: "O6", q: "Qual é o maior sinal de alerta de um emprego falso ou de um recrutador ilegal?", options: ["Pedem-lhe para pagar para ter o emprego", "Têm um site", "Pedem uma entrevista", "Dão uma descrição do emprego"], answer: 0, why: "Os empregadores honestos não cobram para lhe dar um emprego." },
      { objective: "O6", q: "Para um emprego no estrangeiro através de uma agência, o que verifica?", options: ["Quantos seguidores tem", "Se o escritório é grande", "Que a agência tem licença do serviço de trabalho ou de trabalhadores migrantes do seu governo", "Se promete o salário mais alto"], answer: 2, why: "Uma licença do governo é uma coisa que você próprio pode verificar." },
      { objective: "O6", q: "Onde deve ler as regras de um visto de trabalho?", options: ["Numa mensagem de WhatsApp de um recrutador", "Numa publicação nas redes sociais", "No palpite de um amigo", "No site oficial do governo ou da embaixada desse país"], answer: 3, why: "Só as páginas oficiais do governo e das embaixadas dão regras de vistos fiáveis." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 2, 4, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Formato certo para o país", objective: "O1", notYet: "Mais de duas páginas, ou dados pessoais que não servem para o país ou para o anúncio, ou um número de identificação ou de passaporte incluído.", meets: "Duas páginas ou menos; a língua, a foto e os dados pessoais seguem o anúncio e o país; nenhum número de identificação, de passaporte ou do banco.", exceeds: "Sabe explicar que fonte (anúncio, página do empregador, costume do país) decidiu cada escolha." },
      { name: "Cabeçalho e perfil", objective: "O2", notYet: "Faltam contactos, não há indicativo do país, o email não é profissional ou não há perfil.", meets: "Contactos que funcionam, com o indicativo do país, e um perfil de 3-4 linhas para este emprego.", exceeds: "O perfil inclui um resultado claro e o nome do cargo do anúncio." },
      { name: "Experiência como resultados", objective: "O3", notYet: "As experiências só listam tarefas, ou o trabalho informal ficou de fora.", meets: "Pelo menos três experiências, cada uma começando com um verbo de ação e com um número ou um detalhe concreto.", exceeds: "O trabalho informal ou não pago aparece com resultados fortes, e cada número pode ser explicado." },
      { name: "Qualificações e línguas explicadas", objective: "O4", notYet: "Os certificados locais aparecem só como siglas; as línguas não têm nível.", meets: "Cada qualificação tem o nome completo, o lugar, o país e o ano; cada língua tem um nível.", exceeds: "Indica que avaliação oficial o empregador aceita, ou dá um exame de língua e o ano." },
      { name: "Adaptado ao anúncio", objective: "O5", notYet: "O CV podia ser para qualquer emprego, ou usa texto em imagens ou palavras-chave escondidas.", meets: "Pelo menos cinco palavras-chave verdadeiras do anúncio, títulos simples, guardado em PDF com um nome claro.", exceeds: "O aluno sabe mostrar onde aparece cada palavra-chave e porque é verdadeira." },
      { name: "Verificado antes de enviar", objective: "O6", notYet: "A lista de verificação não foi feita, ou a oferta pede uma taxa ou o passaporte e o aluno candidatou-se mesmo assim.", meets: "Lista de verificação contra burlas preenchida: nenhuma taxa, empresa encontrada pelo próprio aluno, passaporte e originais guardados.", exceeds: "Para um emprego no estrangeiro, a licença da agência foi verificada no serviço do governo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam com um CV completo que cumpre a grelha de avaliação",
      "Alunos que enviam pelo menos uma candidatura adaptada em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista ou uma oferta de emprego em 90 dias, segundo o que dizem ao programa",
      "Alunos que dizem ter reconhecido e evitado um emprego falso ou um recrutador que cobra taxas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou um computador com um processador de texto gratuito (Google Docs, Microsoft Word online ou LibreOffice Writer), ou papel e caneta para os rascunhos",
      "Um ou dois anúncios de emprego reais que interessem ao aluno",
      "Cópias dos certificados do aluno só para consulta (nunca carregadas em ferramentas de prática nem partilhadas na turma)",
      "Cerca de duas horas no total, em sessões curtas: lições, prática, verificações e o CV final"
    ],
    facilitatorNotes: [
      "Peça aos alunos para trazerem um anúncio de emprego real; adaptar funciona melhor com um anúncio que eles querem mesmo.",
      "Ponha os alunos em pares para lerem em voz alta o perfil um do outro e darem cada um uma sugestão de melhoria.",
      "Ajude os alunos com trabalho informal a encontrar os seus resultados; muitos dão pouco valor à experiência no mercado, na quinta ou no negócio de família.",
      "Não dê conselhos sobre vistos, imigração nem conselhos jurídicos; indique aos alunos as páginas oficiais do governo e das embaixadas e as agências licenciadas.",
      "Verifique cada CV final para ver se tem números de identificação, de passaporte ou do banco antes de sair da sala, e avalie-o com a grelha de avaliação uma linha de cada vez."
    ]
  }
};
