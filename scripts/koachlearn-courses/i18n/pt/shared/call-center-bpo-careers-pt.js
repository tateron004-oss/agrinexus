"use strict";

// Koach Learn course (Portuguese translation of shared/call-center-bpo-careers.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The industry acronyms BPO, QA, KPI, AHT, FCR, CSAT, SME and WFM are kept in English (they are used on the job) and explained in Portuguese.

const BLS_CSR = { name: "US Bureau of Labor Statistics: Customer Service Representatives (education, training, schedules, work environment)", url: "https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm" };
const IBPAP = { name: "IBPAP: IT and Business Process Association Philippines (the Philippine IT-BPM industry association)", url: "https://www.ibpap.org/" };
const FTC_JOBS = { name: "US Federal Trade Commission: Job scams", url: "https://consumer.ftc.gov/articles/job-scams" };
const FTC_REPORT = { name: "US Federal Trade Commission: report a scam (US)", url: "https://reportfraud.ftc.gov/" };
const IOM_IRIS = { name: "IOM IRIS: ethical recruitment and the Employer Pays Principle", url: "https://iris.iom.int/" };
const ILO_FAIR = { name: "International Labour Organization (ILO): fair recruitment", url: "https://www.ilo.org/topics/fair-recruitment" };
const TESDA = { name: "TESDA, Philippines: Technical Education and Skills Development Authority (training and certification; TESDA Online Program)", url: "https://www.tesda.gov.ph/" };
const AJIRA = { name: "Kenya News Agency: youth urged to embrace the Ajira Digital Program (government programme for online work)", url: "https://www.kenyanews.go.ke/youth-urged-to-embrace-ajira-digital-program/" };

module.exports = {
  id: "call-center-bpo-careers-pt",
  lang: "pt",
  translationOf: "call-center-bpo-careers",
  category: "Workforce Development",
  name: "Carreiras em Centros de Chamadas e Subcontratação (BPO)",
  skills: "Conhecer os tipos de empregos BPO, Reconhecer recrutadores falsos, Passar nos testes de recrutamento, Atender uma chamada segundo uma grelha de QA, Cumprir os indicadores do centro de chamadas, Planear os turnos e a carreira",
  outcome: "candidatar-se a um emprego num centro de chamadas ou numa empresa de subcontratação (BPO) com um plano: escolher o tipo de trabalho BPO que lhe serve, confirmar que um empregador é verdadeiro, praticar os testes de dactilografia, de voz e de chamada simulada, atender uma chamada como a grelha de qualidade espera, explicar os indicadores com que vai ser avaliado e planear os seus turnos e o seu próximo passo.",
  about: [
    "Os centros de chamadas e as empresas de subcontratação (BPO) contratam muitas pessoas com o ensino secundário e boa capacidade de comunicação, em países como as Filipinas, a Índia, o Quénia, a Nigéria, o Gana, o Egito, Marrocos, o Senegal, o México, a Colômbia e os Estados Unidos. Muitas dão formação paga e algumas deixam trabalhar a partir de casa.",
    "Este curso é para quem procura emprego, jovens, pessoas que mudam de profissão e qualquer pessoa que queira saber como é realmente este trabalho antes de se candidatar. Você vai aprender os tipos de empregos BPO, como reconhecer um recrutador falso, como funcionam os testes de recrutamento, como as chamadas são avaliadas e como as pessoas sobem na carreira.",
    "O curso prepara você para se candidatar; não lhe dá um emprego nem um certificado. Cada empresa faz os seus próprios testes. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva o seu próprio plano de 90 dias para um emprego BPO: o tipo de trabalho BPO que quer e porquê, três empregadores verdadeiros que verificou nos sites oficiais, a sua lista contra burlas, um horário de prática com datas para dactilografia, leitura em voz alta e chamadas simuladas, uma chamada de prática gravada e avaliada com a grelha de QA de exemplo, o seu plano para os turnos ou para trabalhar em casa e um passo acima que quer dar dentro de um ano.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de emprego com cerca de 18 anos ou mais, em África, na Ásia, na América Latina e nos Estados Unidos: jovens que saíram da escola, diplomados sem trabalho, adultos que mudam de profissão, pessoas que voltam ao trabalho e pessoas com uma segunda língua. Muitos vão fazer o curso na sua própria língua e candidatar-se a empregos em inglês, francês ou espanhol.",
    startingPoint: "Sabem conversar e usar um telefone; a maioria sabe usar um pouco o computador. Poucos sabem como funciona o recrutamento no BPO, quais são os testes ou como o trabalho num centro de chamadas é medido. Muitos já viram anúncios de emprego nas redes sociais e não conseguem distinguir os verdadeiros dos falsos.",
    gap: "Os empregos BPO são muitas vezes o primeiro emprego formal, mas os candidatos falham testes que não conheciam, perdem dinheiro com recrutadores falsos que pedem taxas, ou desistem nos primeiros meses porque os turnos e as metas os surpreenderam. Os alunos precisam de conhecer o trabalho, verificar o empregador, praticar os testes e preparar-se para o horário.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; traduzido para dez línguas",
      "Aparelhos: muitas vezes só um telefone; algumas lições funcionam melhor num computador, mas todas as tarefas podem ser feitas em papel",
      "Tempo: lições de 4 a 6 minutos",
      "Os testes de recrutamento, os salários, os turnos e as leis do trabalho mudam de país para país e de empresa para empresa; os alunos verificam o empregador e o ministério do trabalho do seu país",
      "Risco alto de burlas: nenhum número de identificação, palavra-passe ou dado bancário verdadeiro nas tarefas de prática"
    ],
    prerequisites: "Nenhum. \"Excelência no Atendimento ao Cliente\" e \"IA para Carreiras no Atendimento ao Cliente\" são bons cursos para fazer a seguir ou ao mesmo tempo; quem está a aprender inglês pode fazer ao mesmo tempo \"Inglês para o Trabalho (ESL)\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com cinco descrições de empregos BPO", action: "classificar cada emprego como de voz ou sem voz e de entrada ou de saída, e dizer a principal competência de que precisa", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com um anúncio de emprego ou uma mensagem de um recrutador", action: "verificar o emprego à procura dos sinais de alerta de um recrutador falso e dizer o que fazer a seguir", standard: "nomeando pelo menos quatro sinais de alerta e sem nunca pagar uma taxa nem entregar documentos originais" },
    { id: "O3", condition: "Usando um guião de prática e um telefone ou papel", action: "fazer uma chamada simulada com um cliente que abre, verifica, resolve, resume e fecha", standard: "com Atinge em todas as linhas da grelha de QA de exemplo" },
    { id: "O4", condition: "Com um relatório de exemplo de um agente", action: "explicar o que medem o tempo médio de atendimento, a resolução no primeiro contacto, a satisfação do cliente, a nota de QA e o cumprimento do horário", standard: "com uma forma honesta de melhorar cada um" },
    { id: "O5", condition: "Para o emprego por turnos ou em casa que você quer", action: "escrever um plano de preparação para o sono, as deslocações, o equipamento e as pausas", standard: "com pelo menos cinco pontos, incluindo uma alternativa para a eletricidade ou a internet" },
    { id: "O6", condition: "Usando os seus próprios objetivos e sites verdadeiros de empregadores", action: "escrever um plano de 90 dias para ser contratado e um próximo passo na carreira BPO", standard: "com datas, três empregadores verificados e um objetivo de crescimento" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Entrar no trabalho BPO",
      lessons: [
        {
          title: "O que é o trabalho BPO e os tipos de empregos",
          objectives: ["O1"],
          minutes: 5,
          goal: "Classificar os empregos BPO como de voz ou sem voz e de entrada ou de saída, e dizer a competência de que cada um precisa.",
          text: [
            "BPO quer dizer, em inglês, subcontratação de processos de negócio: uma empresa paga a outra empresa para fazer parte do seu trabalho, como atender clientes, tratar formulários ou verificar conteúdos. A empresa que paga é o cliente, e o trabalho para um cliente chama-se conta ou campanha.",
            "Os empregos de voz são ao telefone. De entrada quer dizer que os clientes ligam para você (ajuda com uma conta, uma entrega, um plano de telefone). De saída quer dizer que você liga para eles (vendas, inquéritos, lembretes, cobranças). Os empregos sem voz são chat, e-mail, respostas nas redes sociais, introdução de dados, tratamento de processos internos e moderação de conteúdos; precisam mais de boa escrita e dactilografia do que de falar.",
            "O BPO dá muito emprego em vários países. As Filipinas e a Índia servem muitos clientes de língua inglesa. O Quénia, a Nigéria, o Gana, o Egito e a África do Sul estão a crescer. Marrocos, a Tunísia, o Senegal, a Côte d'Ivoire, Madagáscar e as Maurícias servem clientes de língua francesa. O México e a Colômbia servem os Estados Unidos e clientes de língua espanhola. Nos Estados Unidos, os centros de chamadas contratam em quase todos os setores.",
            "A língua é muitas vezes a competência principal. Uma conta pode precisar de inglês, francês, espanhol, árabe ou outra língua bem falada, mais paciência, saber ouvir e conhecimentos básicos de computador. Muitos empregos pedem o ensino secundário, não um curso superior."
          ],
          words: [
            ["BPO", "subcontratação de processos de negócio: uma empresa faz parte do trabalho de outra empresa por ela."],
            ["Cliente e conta", "o cliente é a empresa que paga ao BPO; a conta (ou campanha) é o trabalho para esse cliente."],
            ["Voz e sem voz", "os empregos de voz são chamadas telefónicas; os empregos sem voz são chat, e-mail, dados e trabalho interno."],
            ["De entrada e de saída", "de entrada: os clientes contactam você. De saída: você contacta os clientes."],
            ["Moderação de conteúdos", "verificar publicações, imagens ou vídeos de acordo com as regras de uma plataforma."]
          ],
          slides: [
            { title: "O BPO numa frase", bullets: ["Uma empresa paga a outra empresa para fazer parte do seu trabalho", "A empresa que paga é o cliente", "O trabalho para um cliente é a conta"] },
            { title: "Empregos de voz", bullets: ["De entrada: os clientes ligam para pedir ajuda", "De saída: você liga para vendas, inquéritos ou lembretes", "Competências principais: falar claro, ouvir, paciência"] },
            { title: "Empregos sem voz", bullets: ["Chat, e-mail, respostas nas redes sociais", "Introdução de dados, trabalho interno, moderação de conteúdos", "Competências principais: escrita, dactilografia, rigor"] },
            { title: "Onde o BPO contrata", bullets: ["Filipinas, Índia, Quénia, Nigéria, Gana, Egito", "Contas em francês: Marrocos, Tunísia, Senegal, Côte d'Ivoire", "Perto dos Estados Unidos: México, Colômbia"] }
          ],
          sources: [IBPAP, BLS_CSR],
          tryIt: "Em papel, faça uma tabela com quatro caixas: voz de entrada, voz de saída, chat ou e-mail, trabalho interno. Ponha em cada caixa um emprego que viu anunciado, escreva a principal competência de que precisa e faça um círculo na caixa que lhe serve melhor.",
          youCanNow: "distinguir os empregos BPO de voz e sem voz, e de entrada e de saída, e escolher o tipo que serve às suas competências.",
          quickCheck: [
            { objective: "O1", q: "Os clientes ligam para você para resolver problemas com as contas do telefone. Que tipo de emprego é este?", options: ["Voz de saída", "Introdução de dados interna", "Voz de entrada", "Moderação de conteúdos"], answer: 2, why: "Os clientes ligam e o trabalho é ao telefone: voz de entrada." },
            { objective: "O1", q: "Que emprego precisa mais de boa escrita e dactilografia do que de falar?", options: ["Apoio por e-mail e chat", "Chamadas de vendas de saída", "Apoio telefónico de entrada", "Inquéritos por telefone"], answer: 0, why: "E-mail e chat são empregos sem voz: os clientes leem as suas palavras, por isso a escrita e a dactilografia contam mais." }
          ]
        },
        {
          title: "Reconhecer recrutadores falsos e burlas de emprego",
          objectives: ["O2"],
          minutes: 5,
          goal: "Verificar um anúncio de emprego ou uma mensagem de um recrutador à procura dos sinais de burla e decidir o que fazer.",
          text: [
            "Os empregadores verdadeiros não cobram dinheiro para lhe dar um emprego. Os recrutadores falsos pedem uma \"taxa de processamento\", \"taxa de formação\", \"taxa médica\", \"taxa de farda\" ou dinheiro para um \"kit inicial\" ou equipamento. A Comissão Federal de Comércio dos Estados Unidos (FTC) diz que os empregadores honestos nunca pedem que você pague para ter um emprego, e o trabalho internacional pelo recrutamento justo da OIT (ILO) e da OIM (IOM) defende que sejam os empregadores, e não os trabalhadores, a pagar os custos de recrutamento.",
            "Outros sinais de alerta: salário alto por pouco trabalho; uma entrevista só por mensagens no WhatsApp ou no Telegram; um endereço de e-mail gratuito em vez do da empresa; pressão para decidir hoje; um cheque que tem de depositar e devolver uma parte; e um pedido para \"guardar\" o seu passaporte, bilhete de identidade ou certificados escolares. Guarde você mesmo os seus documentos originais. Dê só cópias, e só a um empregador que verificou.",
            "Para verificar um empregador: procure você mesmo o site oficial da empresa (não use a ligação da mensagem), procure o mesmo emprego na página de emprego do site e candidate-se lá. Para empregos no estrangeiro, confirme que a agência tem licença do ministério do trabalho ou do serviço de trabalhadores migrantes do seu país. Se alguma coisa estiver errada, pare, guarde as mensagens e denuncie à polícia ou ao serviço nacional do consumidor ou do trabalho (nos Estados Unidos: reportfraud.ftc.gov)."
          ],
          steps: [
            "Leia o anúncio e anote tudo o que pede dinheiro ou documentos originais.",
            "Procure você mesmo o site oficial da empresa, não pela ligação da mensagem.",
            "Procure o mesmo emprego na página de emprego oficial e candidate-se lá.",
            "Para empregos no estrangeiro, confirme que a agência de recrutamento tem licença do seu governo.",
            "Se alguma coisa estiver errada, pare, guarde capturas de ecrã e denuncie."
          ],
          words: [
            ["Recrutador", "uma pessoa ou agência que encontra trabalhadores para um empregador."],
            ["Taxa de recrutamento", "dinheiro cobrado a um trabalhador para ter um emprego; o recrutamento justo diz que os trabalhadores não a devem pagar."],
            ["Página de emprego", "a parte do site da própria empresa onde ela mostra os seus empregos verdadeiros."],
            ["Agência com licença", "uma agência de recrutamento registada no governo, que você pode procurar na lista oficial."]
          ],
          slides: [
            { title: "Os empregadores verdadeiros não cobram", bullets: ["Nenhuma taxa de processamento, formação, médica ou de farda para ser contratado", "Não se paga um kit inicial nem equipamento", "Nenhum cheque para depositar e devolver dinheiro"] },
            { title: "Mais sinais de alerta", bullets: ["Salário alto por pouco trabalho", "Entrevista só por mensagens no WhatsApp ou no Telegram", "E-mail gratuito, pressão para decidir hoje"] },
            { title: "Guarde os seus documentos", bullets: ["Nunca entregue o passaporte, o bilhete de identidade ou os certificados originais", "Dê só cópias, a um empregador que verificou"] },
            { title: "Verifique e depois candidate-se", bullets: ["Procure você mesmo o site oficial", "Candidate-se na página de emprego oficial", "Empregos no estrangeiro: verifique a licença da agência", "Algo errado: pare, guarde provas, denuncie"] }
          ],
          sources: [FTC_JOBS, FTC_REPORT, ILO_FAIR, IOM_IRIS],
          tryIt: "Leia esta mensagem de prática: \"Parabéns! Foi contratado para um emprego num centro de chamadas a partir de casa, a 900 dólares por semana. Envie hoje 50 dólares para os materiais de formação e uma foto do seu bilhete de identidade pelo WhatsApp.\" Escreva todos os sinais de alerta que encontrar (há pelo menos cinco) e o que faria.",
          youCanNow: "reconhecer um recrutador falso, manter os seus documentos em segurança e verificar um emprego no site do próprio empregador antes de se candidatar.",
          quickCheck: [
            { objective: "O2", q: "Um recrutador diz que conseguiu o emprego, mas tem de pagar primeiro uma taxa de formação. O que faz?", options: ["Paga, porque a formação é útil", "Paga metade agora e metade depois", "Pede a um amigo que pague por você", "Para: os empregadores verdadeiros não cobram para contratar"], answer: 3, why: "Pedir que você pague para ter um emprego é um dos principais sinais de burla." },
            { objective: "O2", q: "Um recrutador para um emprego no estrangeiro pede para ficar com o seu passaporte. Qual é a resposta segura?", options: ["Dar o original para tratarem mais depressa", "Ficar com o passaporte original e dar só uma cópia a um empregador verificado", "Enviá-lo pelo correio para a morada da mensagem", "Deixá-lo com um amigo do recrutador"], answer: 1, why: "Guardar os seus documentos protege você; entregá-los pode prendê-lo num trabalho injusto." }
          ]
        },
        {
          title: "Passar nas etapas e nos testes de recrutamento",
          objectives: ["O3"],
          minutes: 6,
          goal: "Praticar as partes de dactilografia, leitura em voz alta e chamada simulada de um recrutamento BPO.",
          text: [
            "As etapas mudam de empresa para empresa, mas muitos BPO seguem um caminho parecido: uma candidatura pela internet; uma avaliação com perguntas de dactilografia, gramática, leitura ou compreensão oral; um teste de voz ou de língua em que lê em voz alta ou responde a perguntas gravadas; uma entrevista; e uma chamada simulada, uma pequena dramatização em que o recrutador faz de cliente. Depois vêm a oferta de emprego, a verificação de antecedentes ou de documentos e a formação paga.",
            "O teste de voz verifica se as pessoas entendem você com facilidade: palavras claras, ritmo calmo, boa gramática e tom simpático. Não precisa de mudar o seu sotaque. Fale devagar o suficiente, termine as palavras e sorria enquanto fala; as pessoas ouvem isso.",
            "Pratique em casa de graça. Copie uma página de um livro ou jornal em qualquer editor de texto durante cinco minutos e conte as palavras. Leia em voz alta uma notícia curta, grave-a no telefone e depois ouça. Faça uma chamada simulada com um amigo a fazer de cliente. Depois de ser contratado, há normalmente uma formação em sala sobre os produtos do cliente e depois o período de acompanhamento (nesting): as primeiras semanas em chamadas reais com apoio extra."
          ],
          steps: [
            "Dactilografia: escreva durante 5 minutos a partir de uma página impressa, conte as palavras, divida por 5 e repita todos os dias.",
            "Leitura em voz alta: grave uma notícia de 1 minuto, ouça e corrija as palavras que disse depressa ou não terminou.",
            "Compreensão oral: peça a um amigo que leia uma mensagem curta, depois escreva-a e confira.",
            "Chamada simulada: um amigo faz de cliente com um problema simples; você abre, pergunta, resolve e fecha."
          ],
          words: [
            ["Avaliação", "um teste que verifica competências como dactilografia, gramática, leitura e compreensão oral."],
            ["Palavras por minuto", "quantas palavras escreve num minuto; uma forma de medir a velocidade de dactilografia."],
            ["Chamada simulada", "uma chamada de prática em que alguém faz de cliente, usada no recrutamento e na formação."],
            ["Nesting (acompanhamento)", "as primeiras semanas em chamadas reais depois da formação, com ajuda extra de um orientador."]
          ],
          slides: [
            { title: "Um caminho comum de recrutamento BPO", bullets: ["Candidatura e depois uma avaliação pela internet", "Teste de voz ou de língua e depois uma entrevista", "Chamada simulada, oferta, verificação de documentos, formação paga"] },
            { title: "O teste de voz", bullets: ["As pessoas entendem você com facilidade?", "Palavras claras, ritmo calmo, boa gramática, tom simpático", "Não precisa de mudar o seu sotaque"] },
            { title: "Pratique de graça em casa", bullets: ["Escreva a partir de uma página impressa 5 minutos por dia", "Grave-se a ler em voz alta e ouça depois", "Chamada simulada com um amigo a fazer de cliente"] },
            { title: "Depois de ser contratado", bullets: ["Formação em sala sobre os produtos do cliente", "Nesting: primeiras semanas em chamadas reais com um orientador"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Faça hoje três práticas curtas e anote os resultados: escreva durante 5 minutos e calcule as suas palavras por minuto; grave-se a ler uma história de 1 minuto e anote duas palavras para dizer com mais clareza; e escreva uma abertura de 3 linhas que usaria numa chamada simulada.",
          youCanNow: "descrever as etapas habituais do recrutamento BPO e praticar em casa os testes de dactilografia, de voz e de chamada simulada.",
          quickCheck: [
            { objective: "O3", q: "O que verifica principalmente um teste de voz BPO?", options: ["Se as pessoas entendem você com clareza", "Se tem um sotaque estrangeiro", "Se fala o mais depressa possível", "Se sabe os preços do cliente"], answer: 0, why: "O teste de voz verifica a fala clara, o ritmo, a gramática e o tom, não um sotaque em especial." },
            { objective: "O3", q: "Em 5 minutos escreve 150 palavras. Qual é mais ou menos a sua velocidade?", options: ["15 palavras por minuto", "75 palavras por minuto", "150 palavras por minuto", "30 palavras por minuto"], answer: 3, why: "150 palavras a dividir por 5 minutos são 30 palavras por minuto." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Entrar no trabalho BPO",
        questions: [
          { objective: "O1", q: "Você liga para as pessoas para lhes lembrar contas por pagar. Que tipo de emprego é este?", options: ["Voz de entrada", "Voz de saída", "Apoio por chat", "Trabalho interno"], answer: 1, why: "É você que faz as chamadas, por isso é voz de saída." },
          { objective: "O1", q: "No BPO, quem é o cliente?", options: ["A empresa que paga ao BPO para fazer o seu trabalho", "O consumidor que liga", "O chefe de equipa", "A agência de recrutamento"], answer: 0, why: "O cliente paga ao BPO; os consumidores do cliente são as pessoas que os agentes ajudam." },
          { objective: "O2", q: "Que mensagem é mais provavelmente uma burla?", options: ["Um e-mail do endereço da própria empresa a convidar para um teste pela internet", "Um emprego na página de emprego oficial da empresa", "Uma mensagem de WhatsApp com salário alto se enviar hoje uma taxa", "Uma entrevista por telefone marcada pelo site oficial"], answer: 2, why: "Salário alto, contacto só por WhatsApp, uma taxa e pressão para hoje são todos sinais de alerta." },
          { objective: "O2", q: "Como deve encontrar os empregos verdadeiros de uma empresa?", options: ["Clicar na ligação da mensagem do recrutador", "Procurar você mesmo o site oficial da empresa e usar a página de emprego", "Pedir ao recrutador uma captura de ecrã", "Confiar em qualquer página com o logótipo da empresa"], answer: 1, why: "Encontrar você mesmo o site oficial evita páginas falsas copiadas com o logótipo da empresa." },
          { objective: "O3", q: "O que é uma chamada simulada?", options: ["Uma chamada real com um cliente irritado", "Uma chamada que faz ao seu chefe", "Uma música gravada", "Uma dramatização de prática em que alguém faz de cliente"], answer: 3, why: "Uma chamada simulada é uma chamada de prática usada no recrutamento e na formação." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o trabalho e subir na carreira",
      lessons: [
        {
          title: "O fluxo da chamada e a grelha de QA",
          objectives: ["O3"],
          minutes: 6,
          goal: "Fazer uma chamada de prática que abre, verifica, resolve, resume e fecha, e avaliá-la com uma grelha de QA.",
          text: [
            "Cada conta tem um fluxo de chamada: os passos que o agente segue em cada chamada. Um fluxo comum é: abrir (cumprimentar, dizer o seu nome e a empresa, oferecer ajuda); verificar (confirmar quem é o cliente com as perguntas de segurança da conta); investigar (fazer perguntas para encontrar o problema real); resolver (corrigir ou explicar o próximo passo); resumir (repetir o que foi feito); e fechar (perguntar se há mais alguma coisa e agradecer).",
            "Uma equipa de garantia de qualidade (QA) ouve chamadas gravadas e avalia-as numa grelha de QA. As linhas incluem muitas vezes a abertura, a verificação, a escuta e a empatia, a informação correta, as notas que escreveu e o fecho. Algumas linhas são de conformidade: saltar a verificação ou partilhar dados privados pode fazer chumbar a chamada inteira.",
            "Verifique só da forma que a sua conta lhe ensina. Nunca peça a um cliente uma palavra-passe completa ou um código de uso único que ele não precisava de dar, e nunca leia dados privados a alguém que não verificou. Se não souber uma resposta, ponha o cliente em espera com educação e consulte a base de conhecimento ou pergunte a um chefe de equipa."
          ],
          steps: [
            "Abrir: \"Obrigado por ligar para a [empresa], fala [nome]. Em que posso ajudar hoje?\"",
            "Verificar: faça as perguntas de segurança da conta antes de falar da conta.",
            "Investigar: faça perguntas abertas e depois confirme o problema numa frase.",
            "Resolver: corrija, ou explique o próximo passo e quando vai acontecer.",
            "Resumir e fechar: diga o que foi feito, pergunte se há mais alguma coisa e agradeça."
          ],
          words: [
            ["Fluxo da chamada", "os passos fixos que o agente segue em cada chamada."],
            ["Verificação", "confirmar que quem liga é o titular da conta antes de falar da conta."],
            ["QA (garantia de qualidade)", "a equipa que ouve as chamadas e as avalia com uma grelha."],
            ["Conformidade", "cumprir as regras da lei e do cliente, como as regras de privacidade e de verificação."],
            ["Base de conhecimento", "a biblioteca da conta com respostas e passos aprovados."]
          ],
          slides: [
            { title: "Um fluxo de chamada comum", bullets: ["Abrir, verificar, investigar", "Resolver, resumir, fechar"] },
            { title: "A grelha de QA", bullets: ["A equipa de QA ouve chamadas gravadas", "Linhas: abertura, verificação, empatia, rigor, notas, fecho", "Erros de conformidade podem chumbar a chamada inteira"] },
            { title: "Proteja o cliente", bullets: ["Verifique antes de falar da conta", "Nunca peça uma palavra-passe de que não precisa", "Com dúvidas? Ponha em espera e consulte a base de conhecimento"] }
          ],
          tryIt: "Escreva um guião curto para uma chamada de prática: a internet de um cliente está lenta há dois dias. Use os seis passos. Depois faça a chamada com um amigo ou grave-se a fazer as duas partes, e avalie: para cada passo escreva Atinge ou Ainda não.",
          youCanNow: "seguir um fluxo de chamada da abertura ao fecho e comparar a sua própria chamada com uma grelha de QA.",
          quickCheck: [
            { objective: "O3", q: "Uma pessoa liga a perguntar o saldo da conta. O que vem primeiro?", options: ["Ler o saldo logo", "Pedir a palavra-passe completa", "Verificar quem é com as perguntas de segurança da conta", "Transferir para outra equipa"], answer: 2, why: "A verificação protege os dados privados do cliente e é normalmente uma linha de conformidade na grelha." },
            { objective: "O3", q: "Que passo vem logo antes do fecho?", options: ["O resumo: dizer o que foi feito", "A abertura", "A verificação", "O cumprimento"], answer: 0, why: "O resumo confirma o que foi feito, para o cliente sair com a certeza do resultado." }
          ]
        },
        {
          title: "Os indicadores, o horário e cuidar de si",
          objectives: ["O4", "O5"],
          minutes: 6,
          goal: "Explicar os cinco principais indicadores de um centro de chamadas e escrever um plano de preparação para turnos ou trabalho em casa.",
          text: [
            "Os agentes são medidos com números, muitas vezes chamados KPI. O tempo médio de atendimento (AHT) é a duração média de um contacto, incluindo a espera e as notas depois da chamada. A resolução no primeiro contacto (FCR) é quantas vezes o problema fica resolvido logo no primeiro contacto. A satisfação do cliente (CSAT) vem de inquéritos curtos depois do contacto. A nota de QA vem da grelha. O cumprimento do horário é quanto você segue o seu horário: entrar no sistema a horas e fazer as pausas nas horas planeadas.",
            "Os indicadores puxam uns contra os outros. Despachar baixa o tempo de atendimento, mas pode prejudicar o FCR e o CSAT quando os clientes voltam a ligar. A forma honesta de melhorar é conhecer bem a base de conhecimento, ouvir com atenção e escrever boas notas para o próximo agente não ter de começar do zero.",
            "Muitas contas funcionam 24 horas por dia, por isso os turnos podem ser à noite, aos fins de semana e nos feriados, muitas vezes no fuso horário do cliente. Planeie o sono (quarto escuro e silencioso, as mesmas horas todos os dias), deslocações seguras à noite, refeições e água. Para trabalhar em casa: um espaço silencioso, auscultadores com microfone, uma ligação suficientemente rápida e uma alternativa para a eletricidade ou a internet, além das regras da empresa sobre privacidade em casa."
          ],
          words: [
            ["KPI", "indicador-chave de desempenho: um número usado para medir se o trabalho é bem feito."],
            ["AHT (tempo médio de atendimento)", "a duração média de um contacto, incluindo a espera e o trabalho depois da chamada."],
            ["FCR (resolução no primeiro contacto)", "quantas vezes o problema fica resolvido na primeira chamada ou no primeiro chat."],
            ["CSAT (satisfação do cliente)", "uma nota que vem de inquéritos curtos aos clientes depois de um contacto."],
            ["Cumprimento do horário", "quanto o agente segue o horário planeado para entrar no sistema, fazer pausas e sair."]
          ],
          slides: [
            { title: "Cinco indicadores dos agentes", bullets: ["AHT: tempo médio de atendimento", "FCR: resolvido no primeiro contacto", "CSAT: nota do inquérito ao cliente", "Nota de QA e cumprimento do horário"] },
            { title: "Os indicadores puxam uns contra os outros", bullets: ["Despachar baixa o AHT, mas pode prejudicar o FCR e o CSAT", "Conheça a base de conhecimento, ouça, escreva boas notas"] },
            { title: "Trabalho por turnos", bullets: ["Noites, fins de semana e feriados no fuso horário do cliente", "Dormir às mesmas horas num quarto escuro e silencioso", "Planeie deslocações seguras à noite, refeições e água"] },
            { title: "Trabalhar em casa", bullets: ["Espaço silencioso e auscultadores com microfone", "Internet suficientemente rápida e alternativa de eletricidade ou dados", "Cumpra as regras de privacidade da empresa em casa"] }
          ],
          sources: [BLS_CSR],
          tryIt: "Relatório de prática: o AHT da Ama é de 4 minutos (o da equipa é de 6), o FCR dela é de 55 por cento (equipa: 75 por cento) e o CSAT dela é baixo. Em duas frases, explique o que se passa e uma solução honesta. Depois escreva o seu próprio plano de preparação com pelo menos cinco pontos: sono, deslocações, refeições, equipamento e uma alternativa para a eletricidade ou a internet.",
          youCanNow: "explicar o AHT, o FCR, o CSAT, a nota de QA e o cumprimento do horário, e planear o sono, as deslocações e a preparação para turnos ou trabalho em casa.",
          quickCheck: [
            { objective: "O4", q: "Um agente tem um tempo de atendimento muito curto, mas muitos clientes voltam a ligar. Que indicador deve estar baixo?", options: ["Cumprimento do horário", "Velocidade de dactilografia", "Número de pausas", "Resolução no primeiro contacto"], answer: 3, why: "Se os clientes voltam a ligar, os problemas não ficaram resolvidos da primeira vez, por isso o FCR está baixo." },
            { objective: "O5", q: "Trabalha em casa e na sua zona há cortes de eletricidade. O que deve estar no seu plano?", options: ["Nada; diz que está doente quando a luz falha", "Uma alternativa para a eletricidade ou a internet e avisar cedo o chefe de equipa", "Trabalhar num café cheio sem pedir", "Usar o altifalante numa sala partilhada"], answer: 1, why: "Uma alternativa e um aviso cedo mantêm você a trabalhar e cumprem as regras da empresa." }
          ]
        },
        {
          title: "Subir na carreira e o seu plano de 90 dias",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escrever um plano de 90 dias para ser contratado e dizer o seu próximo passo na carreira BPO.",
          text: [
            "O BPO tem uma escada. Os agentes podem passar a agentes seniores ou especialistas no assunto (SME), depois a chefes de equipa e depois a gestores de operações. Há também caminhos ao lado: analista de QA, formador, gestão da força de trabalho (planear horários e pessoal), recrutamento, relatórios e dados, e apoio informático. Muitas empresas preferem promover pessoas que já conhecem a conta.",
            "O que ajuda a subir: indicadores estáveis, boa assiduidade, ajudar a orientar os outros, uma segunda língua e cursos curtos. Alguns governos têm formação: nas Filipinas, a TESDA define normas e oferece formação e certificação, e no Quénia o Programa Ajira Digital promove o trabalho pela internet. Consulte as páginas oficiais para saber o que há agora.",
            "O seu plano de 90 dias junta tudo. Semanas 1 a 2: escolha o tipo de emprego e verifique três empregadores nos sites oficiais. Semanas 3 a 8: pratique dactilografia, leitura em voz alta e chamadas simuladas em dias marcados, e candidate-se nas páginas de emprego oficiais. Semanas 9 a 12: continue a candidatar-se, faça o seguimento com educação e prepare-se para a formação. Depois escreva um passo acima que quer dar dentro de um ano."
          ],
          steps: [
            "Escreva o tipo de emprego que quer (de voz ou sem voz, de entrada ou de saída) e porquê.",
            "Verifique três empregadores verdadeiros nos sites oficiais e escreva as ligações.",
            "Junte a sua lista contra burlas da Lição 2.",
            "Ponha datas de prática num calendário: dactilografia, leitura em voz alta, chamadas simuladas.",
            "Escreva o seu plano para os turnos ou para trabalhar em casa da Lição 5.",
            "Diga um passo acima para o próximo ano e uma coisa que vai fazer para lá chegar."
          ],
          words: [
            ["SME (especialista no assunto)", "um agente com experiência a quem os outros agentes pedem ajuda nos casos difíceis."],
            ["Chefe de equipa", "o supervisor que orienta uma equipa de agentes e acompanha os indicadores deles."],
            ["Gestão da força de trabalho (WFM)", "a equipa que prevê o número de chamadas e planeia os horários e o pessoal."],
            ["TESDA", "o serviço do governo das Filipinas para o ensino técnico e a formação profissional."]
          ],
          slides: [
            { title: "A escada do BPO", bullets: ["Agente, agente sénior ou SME, chefe de equipa, gestor de operações", "Caminhos ao lado: QA, formador, gestão da força de trabalho, recrutamento, informática"] },
            { title: "O que ajuda a subir", bullets: ["Indicadores estáveis e boa assiduidade", "Orientar os outros e uma segunda língua", "Cursos curtos e programas de formação oficiais"] },
            { title: "O seu plano de 90 dias", bullets: ["Semanas 1-2: tipo de emprego e três empregadores verificados", "Semanas 3-8: praticar e candidatar-se nos sites oficiais", "Semanas 9-12: fazer o seguimento e preparar-se para a formação"] }
          ],
          sources: [TESDA, AJIRA, IBPAP],
          tryIt: "Comece já o seu plano de 90 dias. Em papel ou num documento, escreva a data de hoje, o tipo de emprego que quer, os nomes e os endereços dos sites oficiais de três empregadores que verificou e as datas das suas três primeiras sessões de prática.",
          youCanNow: "escrever um plano de 90 dias com datas para ser contratado no BPO e dizer o seu próximo passo na carreira.",
          quickCheck: [
            { objective: "O6", q: "Qual é um passo acima verdadeiro a partir de agente em muitos BPO?", options: ["Consumidor", "Cliente", "Chefe de equipa", "Taxa de recrutamento"], answer: 2, why: "Os agentes passam muitas vezes a SME, depois a chefe de equipa e depois a gestor de operações." },
            { objective: "O6", q: "De onde devem vir os empregadores do seu plano?", options: ["Dos sites oficiais deles, que você mesmo encontrou", "De um grupo de WhatsApp que vende listas de empregos", "De qualquer anúncio que promete salário alto", "De um recrutador que pede uma taxa"], answer: 0, why: "Os sites oficiais que você mesmo encontrou são a forma mais segura de confirmar que um empregador é verdadeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o trabalho e subir na carreira",
        questions: [
          { objective: "O3", q: "Em muitas grelhas de QA, que erro pode fazer chumbar a chamada inteira?", options: ["Dizer obrigado duas vezes", "Uma pequena pausa antes de responder", "Sorrir enquanto fala", "Saltar a verificação antes de partilhar dados da conta"], answer: 3, why: "A verificação é uma linha de conformidade; saltá-la põe em risco os dados do cliente." },
          { objective: "O4", q: "O que mede o CSAT?", options: ["Quanto tempo durou a chamada", "Quão satisfeitos os clientes dizem que ficaram num inquérito", "Quantas vezes entrou no sistema a horas", "A rapidez com que escreve"], answer: 1, why: "O CSAT é a nota de satisfação do cliente que vem de inquéritos curtos depois de um contacto." },
          { objective: "O4", q: "Volta sempre da pausa com 10 minutos de atraso. Que indicador baixa?", options: ["Cumprimento do horário", "Resolução no primeiro contacto", "Velocidade de dactilografia", "Nota de verificação de QA"], answer: 0, why: "O cumprimento do horário mede quanto você segue as horas de entrada e de pausa." },
          { objective: "O5", q: "Começa turnos da noite na próxima semana. Qual é um bom plano?", options: ["Dormir a horas diferentes todos os dias", "Beber bebidas energéticas em vez de dormir", "Dormir às mesmas horas num quarto escuro e silencioso e ter uma forma segura de voltar para casa", "Ir a pé sozinho para casa por estradas sem luz"], answer: 2, why: "Sono regular num quarto escuro e deslocações seguras protegem a sua saúde e segurança nos turnos da noite." },
          { objective: "O6", q: "O que faz a gestão da força de trabalho (WFM)?", options: ["Só atende chamadas de clientes", "Prevê o número de chamadas e planeia os horários e o pessoal", "Vende produtos aos clientes", "Verifica o seu passaporte"], answer: 1, why: "A WFM planeia quantos agentes são precisos e quando." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras em Centros de Chamadas e Subcontratação (BPO)",
    questions: [
      { objective: "O1", q: "O que quer dizer BPO?", options: ["Subcontratação de processos de negócio", "Operações telefónicas básicas", "Balcão de pagamentos do banco", "Encomenda de produtos da empresa"], answer: 0, why: "BPO é a subcontratação de processos de negócio: uma empresa faz parte do trabalho de outra empresa." },
      { objective: "O1", q: "Responde a e-mails e chats de clientes de uma loja na internet. Que tipo de emprego é este?", options: ["Voz de saída", "Voz de entrada", "Apoio sem voz", "Vendas no terreno"], answer: 2, why: "E-mail e chat são trabalho sem voz." },
      { objective: "O1", q: "Uma conta serve clientes de língua francesa. Que competência conta mais para os seus agentes?", options: ["Conduzir um carro", "Francês falado e escrito com clareza", "Escrever à mão depressa", "Conhecer muitos modelos de telefone"], answer: 1, why: "A língua da conta é muitas vezes a competência principal que os BPO procuram." },
      { objective: "O2", q: "Qual é um sinal de alerta de um emprego falso?", options: ["Um teste pela internet no site da própria empresa", "Um emprego na página de emprego oficial", "Uma entrevista marcada pelo e-mail da própria empresa", "Uma taxa que tem de pagar antes de começar"], answer: 3, why: "Os empregadores verdadeiros não cobram para contratar." },
      { objective: "O2", q: "Um \"recrutador\" envia-lhe um cheque para depositar e pede que devolva uma parte para equipamento. O que é isto?", options: ["Uma burla comum de cheque falso", "Uma forma normal de comprar auscultadores", "Um prémio de assinatura", "Um subsídio de formação"], answer: 0, why: "O cheque é devolvido mais tarde e você fica a dever ao banco o dinheiro que enviou." },
      { objective: "O2", q: "Uma agência oferece-lhe um emprego num centro de chamadas no estrangeiro. O que verifica primeiro?", options: ["Quantos seguidores tem nas redes sociais", "Se promete salário alto", "Se tem licença do serviço do trabalho ou dos trabalhadores migrantes do seu governo", "Se quer o seu passaporte original"], answer: 2, why: "Uma agência com licença pode ser verificada na lista oficial; as que não têm licença são um grande risco." },
      { objective: "O3", q: "Qual é a melhor forma de se preparar para um teste de voz BPO?", options: ["Tentar imitar outro sotaque", "Gravar-se a ler em voz alta e corrigir as palavras pouco claras", "Falar o mais depressa possível", "Decorar os preços do cliente"], answer: 1, why: "Gravar-se e ouvir depois ajuda a falar com clareza e num ritmo calmo." },
      { objective: "O3", q: "O que é o nesting?", options: ["As suas primeiras semanas em chamadas reais com apoio extra", "Uma sala de descanso", "Um tipo de taxa de recrutamento", "Um prémio do turno da noite"], answer: 0, why: "O nesting vem depois da formação em sala: chamadas reais com orientação." },
      { objective: "O3", q: "No fluxo da chamada, o que faz o passo de investigar?", options: ["Agradece ao cliente", "Termina a chamada", "Põe o cliente em espera", "Faz perguntas para encontrar o problema real"], answer: 3, why: "Investigar encontra o problema real antes de tentar resolvê-lo." },
      { objective: "O3", q: "Não sabe a resposta à pergunta de um cliente. O que faz?", options: ["Adivinha para a chamada ser mais curta", "Desliga", "Põe em espera com educação e consulta a base de conhecimento ou um chefe de equipa", "Diz-lhe para ligar para outra empresa"], answer: 2, why: "Consultar a resposta aprovada mantém a informação correta e a chamada profissional." },
      { objective: "O4", q: "O que inclui o AHT?", options: ["Só o tempo em que fala", "O tempo de conversa, de espera e das notas depois da chamada", "Só o tempo das pausas", "O tempo entre turnos"], answer: 1, why: "O tempo médio de atendimento conta o contacto inteiro, incluindo a espera e o trabalho depois da chamada." },
      { objective: "O4", q: "Qual é uma forma honesta de melhorar a resolução no primeiro contacto?", options: ["Desligar as chamadas difíceis", "Dizer aos clientes para ligarem mais tarde", "Marcar chamadas como resolvidas quando não estão", "Conhecer a base de conhecimento e confirmar a solução antes de fechar"], answer: 3, why: "Saber as respostas e confirmar a solução resolve mais problemas no primeiro contacto." },
      { objective: "O4", q: "Quem dá normalmente a nota de QA?", options: ["A equipa de qualidade, com uma grelha, a partir de chamadas gravadas", "O cliente, num inquérito", "O advogado do cliente", "A agência de recrutamento"], answer: 0, why: "Os analistas de QA ouvem as chamadas e avaliam-nas com a grelha; o CSAT vem dos clientes." },
      { objective: "O5", q: "Porque é que muitos empregos BPO têm turnos da noite?", options: ["As chamadas da noite não pagam impostos", "Os escritórios são mais baratos à noite", "As contas seguem muitas vezes o fuso horário do cliente e funcionam 24 horas", "Os clientes só ligam à noite"], answer: 2, why: "Muitas contas servem clientes noutros fusos horários ou funcionam de dia e de noite." },
      { objective: "O5", q: "Que coisa deve estar num plano de preparação para trabalhar em casa?", options: ["Uma sala partilhada com barulho", "Auscultadores com microfone e uma alternativa para a eletricidade ou a internet", "Um e-mail pessoal para os dados dos clientes", "A televisão ligada durante as chamadas"], answer: 1, why: "Os auscultadores e uma alternativa mantêm as chamadas claras e você a trabalhar durante os cortes." },
      { objective: "O5", q: "Qual é o plano mais seguro para voltar para casa depois de um turno tardio?", options: ["Planear antes do turno uma boleia segura ou o transporte da empresa", "Aceitar boleia de qualquer desconhecido", "Ir a pé sozinho por ruas sem luz", "Decidir quando o turno acabar"], answer: 0, why: "Planear com antecedência uma deslocação segura protege você à noite." },
      { objective: "O6", q: "Qual é um caminho ao lado numa carreira BPO?", options: ["Consumidor", "Taxa de recrutamento", "Pessoa que liga", "Analista de garantia de qualidade"], answer: 3, why: "QA, formação, gestão da força de trabalho e recrutamento são caminhos ao lado comuns." },
      { objective: "O6", q: "O que entra nas semanas 3 a 8 do seu plano de 90 dias?", options: ["Nada; esperar por uma chamada", "Pagar a um recrutador para lhe arranjar emprego", "Praticar em dias marcados e candidatar-se nas páginas de emprego oficiais", "Entregar o seu passaporte a uma agência"], answer: 2, why: "Praticar com regularidade e candidatar-se nas páginas oficiais é o centro do plano." },
      { objective: "O6", q: "O que ajuda um agente a ser promovido a chefe de equipa?", options: ["Indicadores estáveis, boa assiduidade e ajudar os outros", "Voltar tarde das pausas", "Evitar a orientação", "Mudar de conta todos os meses"], answer: 0, why: "Indicadores fiáveis, assiduidade e orientar os outros mostram liderança." },
      { objective: "O2", q: "Descobre que uma oferta de emprego era falsa depois de enviar a foto do seu documento de identidade. O que faz?", options: ["Envia mais documentos para provar quem é", "Paga a taxa para devolverem a foto", "Apaga as mensagens e esquece", "Corta o contacto, guarda capturas de ecrã e denuncia à polícia ou ao serviço oficial contra a fraude"], answer: 3, why: "Guardar provas e denunciar ajuda a proteger você e os outros do uso indevido da sua identidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 6, 10, 13, 16, 8] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Tipo de emprego escolhido", objective: "O1", notYet: "Não há tipo de emprego, ou confunde voz e sem voz.", meets: "Diz se é de voz ou sem voz e de entrada ou de saída, com a principal competência de que precisa.", exceeds: "Também explica porque serve às suas próprias competências e línguas." },
      { name: "Empregadores verificados e burlas evitadas", objective: "O2", notYet: "Os empregadores vêm de anúncios ou mensagens, ou o plano inclui pagar uma taxa.", meets: "Três empregadores com ligações para os sites oficiais e uma lista contra burlas com pelo menos quatro sinais.", exceeds: "Também diz como verificar a licença de uma agência para empregos no estrangeiro e onde denunciar uma burla." },
      { name: "Chamada de prática", objective: "O3", notYet: "A chamada gravada salta passos ou salta a verificação.", meets: "Abre, verifica, investiga, resolve, resume e fecha; Atinge em todas as linhas da grelha.", exceeds: "O aluno diz uma coisa a melhorar e grava uma segunda tentativa melhor." },
      { name: "Conhece os indicadores", objective: "O4", notYet: "Não sabe dizer o que medem o AHT, o FCR, o CSAT, a nota de QA e o cumprimento do horário.", meets: "Explica os cinco, cada um com uma forma honesta de melhorar.", exceeds: "Explica como despachar pode baixar o AHT mas prejudicar o FCR e o CSAT." },
      { name: "Plano de preparação", objective: "O5", notYet: "Menos de cinco pontos, ou nenhuma alternativa.", meets: "Pelo menos cinco pontos: sono, deslocações, refeições, equipamento e uma alternativa para a eletricidade ou a internet.", exceeds: "Junta as regras de privacidade do empregador para o trabalho em casa e um plano para avisar cedo o chefe de equipa sobre problemas." },
      { name: "Plano de 90 dias", objective: "O6", notYet: "Não tem datas, ou não diz nenhum passo acima.", meets: "Passos de prática e de candidatura com datas ao longo de 90 dias e um passo acima dentro de um ano.", exceeds: "Diz uma competência ou um curso concreto para o passo acima e quando vai começar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos três empregadores BPO verificados em 30 dias (inquérito de seguimento)",
      "Alunos que são chamados para um teste de recrutamento ou uma entrevista, e que são contratados, em 90 dias",
      "Alunos que dizem ter reconhecido uma tentativa de burla e não pagaram",
      "Alunos contratados que continuam a trabalhar depois de 90 dias (os primeiros meses são quando muitas pessoas saem)"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet; papel e caneta para todas as tarefas",
      "Um telefone que grave áudio para a prática de leitura em voz alta e de chamadas simuladas",
      "Um parceiro para as chamadas simuladas (um amigo, um familiar ou um colega), ou o próprio aluno a fazer as duas partes",
      "Uma página impressa de um livro ou jornal para a prática de dactilografia, e qualquer editor de texto",
      "Cerca de 70 minutos no total, em sessões curtas, mais a prática ao longo do plano de 90 dias"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos. Depois façam um capítulo por sessão, com chamadas simuladas em pares durante o Capítulo 2.",
      "Traga anúncios de emprego locais verdadeiros, sem os nomes das empresas, e peça aos alunos que os classifiquem por tipo de emprego e procurem sinais de burla.",
      "Se puder, convide um chefe de equipa, um recrutador ou um formador de um BPO local para explicar as etapas reais de recrutamento; os testes mudam de empresa para empresa.",
      "Nunca peça aos alunos para partilhar números de identificação, palavras-passe ou dados bancários verdadeiros na prática; use dados de conta inventados.",
      "Para empregos no estrangeiro, mostre aos alunos a lista oficial de agências de recrutamento com licença no seu país e onde denunciar o recrutamento ilegal.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
