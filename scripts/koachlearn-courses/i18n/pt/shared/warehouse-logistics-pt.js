"use strict";

// Koach Learn course (Portuguese translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// It does not grant any credential. Forklift driving is covered in "Forklift Operator Basics".

const BLS_MOVERS = { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Trabalhadores braçais e de movimentação de materiais", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): Empregados de registo de materiais", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) e Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "Programa de Formação Outreach da OSHA (aulas de 10 e de 30 horas)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Armazenagem", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Perigos e soluções na armazenagem", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Exposição ao calor", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Veículos industriais motorizados (travões do reboque e calços das rodas)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: encontre um American Job Center perto de si", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-pt",
  lang: "pt",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Carreiras em Armazém e Logística",
  skills: "Conhecer os empregos e os certificados de armazém, Encontrar artigos pelo SKU e pela localização, Receber uma entrega, Montar uma palete segura, Trabalhar com segurança e a bom ritmo",
  outcome: "dizer os principais empregos de armazém e os certificados que ajudam a consegui-los, seguir as mercadorias desde a receção até à expedição, encontrar um artigo pelo seu SKU e código de localização, conferir uma entrega com os seus documentos e registar qualquer problema, planear uma carga segura numa palete e fazer um plano para ser contratado.",
  about: [
    "Os armazéns e os centros de distribuição movimentam os produtos que compramos todos os dias e contratam durante todo o ano. Este curso é para quem procura emprego, para pessoas que voltam para casa depois da prisão, para antigos militares e para qualquer pessoa que queira um primeiro emprego estável na logística, com espaço para crescer.",
    "Você vai aprender os empregos de um armazém, como as mercadorias passam do camião para a prateleira e para o cliente, como ler os códigos de localização, como receber uma entrega e contar o stock com exatidão, como montar uma palete segura e como manter a segurança sem perder o ritmo.",
    "Este curso prepara você. Não lhe dá nenhum certificado. Se quiser um, o Manufacturing Skill Standards Council (MSSC), um conselho nacional dos EUA, oferece o Certified Logistics Associate (CLA) e o Certified Logistics Technician (CLT). Conduzir um empilhador exige formação dada pelo empregador; veja o nosso curso \"Noções Básicas de Operador de Empilhador\".",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" que pode fazer com papel e lápis. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um dossiê inicial para um emprego de armazém: um relatório de receção de uma entrega de prática (contagens conferidas com a lista de embalagem, com cada falta, excesso e dano registado), uma lista de recolha posta em ordem de percurso usando os códigos de localização, um desenho do plano de uma carga segura numa palete com pesos e camadas, e um plano de uma página para ser contratado, com três empregadores ou programas, o certificado que vai procurar obter e duas linhas honestas para o currículo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram um primeiro emprego num armazém, num centro de distribuição ou na logística: pessoas à procura de emprego, pessoas que voltam para casa depois da prisão, antigos militares e militares com experiência em abastecimento, jovens adultos e pessoas que mudam de carreira.",
    startingPoint: "Sabem contar, ler números e etiquetas e seguir instruções. Pouca experiência com códigos de localização, documentos de receção, contagens de inventário ou montagem de paletes. Alguns já fizeram trabalho físico, mas não aprenderam a levantar pesos com segurança.",
    gap: "Os armazéns contratam muitas pessoas, mas os novos trabalhadores que erram nas contagens, trocam as localizações ou se magoam não ficam muito tempo. Os alunos precisam dos hábitos básicos de exatidão e segurança, e de um caminho claro para um certificado e uma promoção, para serem contratados e ficarem.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo é explicado",
      "Matemática: números inteiros, somas e multiplicações simples; os números de prática são inventados",
      "Não é preciso equipamento: pratique com papel, objetos de casa ou caixas",
      "Neste curso não se usa empilhador nem nenhum equipamento motorizado",
      "Aparelhos: um telefone ou um computador da biblioteca para páginas oficiais e procura de emprego"
    ],
    prerequisites: "Nenhum. \"Noções Básicas de Segurança no Trabalho (OSHA)\" e \"Noções Básicas de Operador de Empilhador\" são bons cursos para fazer a seguir."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma lista de anúncios de emprego de armazém", action: "identificar as funções, o que cada uma faz e os certificados que ajudam a ser contratado", standard: "dizendo pelo menos quatro funções e um certificado verdadeiro, com quem o dá" },
    { id: "O2", condition: "Com uma lista de recolha com SKUs e códigos de localização", action: "encontrar a localização de cada artigo e pôr as recolhas em ordem de percurso", standard: "lendo bem todas as localizações" },
    { id: "O3", condition: "Com uma entrega de prática e a sua lista de embalagem", action: "receber a entrega e registar qualquer falta, excesso ou dano", standard: "com todas as contagens e notas certas" },
    { id: "O4", condition: "Com caixas e os seus pesos", action: "planear uma carga segura numa palete, com os artigos pesados em baixo e dentro do limite de peso", standard: "cumprindo todas as regras da lista de verificação da palete" },
    { id: "O5", condition: "Com uma tarefa ou um perigo no armazém", action: "escolher a forma segura de levantar, mover ou comunicar, mantendo o ritmo", standard: "acertando pelo menos 4 de 5 situações" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funciona um armazém",
      lessons: [
        {
          title: "Os empregos de armazém e os certificados que ajudam",
          objectives: ["O1"],
          minutes: 5,
          goal: "Identificar os principais empregos de armazém e um certificado que pode ajudar a ser contratado.",
          text: [
            "Empregos comuns para começar: operador de movimentação de materiais ou auxiliar de armazém (mover mercadorias), separador e embalador (preparar as encomendas dos clientes), repositor ou preparador de encomendas, empregado de expedição e receção (conferir as mercadorias que entram e saem), empregado de inventário (contar e corrigir os registos) e operador de empilhador. Com experiência pode chegar a chefe de equipa, supervisor ou coordenador de inventário ou de logística.",
            "A maioria dos empregos para começar não pede um curso superior. As pessoas costumam aprender no trabalho, muitas vezes em um mês ou menos, e aprendem regras de segurança baseadas nas normas da OSHA (a agência de segurança no trabalho dos EUA). Os empregadores procuram pessoas que chegam a horas, contam com cuidado e trabalham com segurança.",
            "Os certificados podem ajudar você a destacar-se. O Manufacturing Skill Standards Council (MSSC) oferece o Certified Logistics Associate (CLA) e o Certified Logistics Technician (CLT); tem de passar no CLA antes de fazer o CLT. A aula Outreach de 10 horas da OSHA dá um cartão de conclusão; é voluntária, e a OSHA diz que não é uma certificação. Operar um empilhador exige sempre a formação e a avaliação do próprio empregador.",
            "O salário e as vagas variam de lugar para lugar. Consulte o Occupational Outlook Handbook oficial em bls.gov para ver salários e perspetivas, e veja anúncios de emprego reais perto de si."
          ],
          words: [["Logística", "planear e mover mercadorias desde onde são feitas até onde são precisas."], ["Centro de distribuição", "um grande armazém que envia mercadorias para lojas ou clientes."], ["Certificado", "um documento ou cartão que mostra que passou num exame ou terminou uma formação."], ["MSSC", "o Manufacturing Skill Standards Council, um grupo nacional dos EUA que dá os certificados CLA e CLT."]],
          slides: [
            { title: "Empregos para começar", bullets: ["Movimentação de materiais, separador, embalador, repositor", "Empregado de expedição e receção, empregado de inventário", "Operador de empilhador (com formação do empregador)"] },
            { title: "Como as pessoas começam", bullets: ["Normalmente não é preciso curso superior", "Aprende-se no trabalho, muitas vezes em um mês ou menos", "Chegar a horas, contar com cuidado, trabalhar com segurança"] },
            { title: "Certificados que ajudam", bullets: ["MSSC: primeiro o CLA, depois o CLT", "Cartão OSHA de 10 horas: voluntário, não é uma certificação", "Empilhador: formação e avaliação do empregador"] },
            { title: "Verifique os dados", bullets: ["Salário e perspetivas: Occupational Outlook Handbook em bls.gov", "Anúncios de emprego reais perto de si"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Encontre três anúncios de emprego de armazém perto de si. Para cada um, escreva o nome do emprego, o turno, o que o emprego faz numa linha e qualquer certificado ou habilidade que peça. Depois abra a página do CLT do MSSC e escreva quem dá o CLA e o CLT.",
          youCanNow: "dizer os principais empregos de armazém, o que cada um faz e os certificados que podem ajudar a ser contratado.",
          quickCheck: [
            { objective: "O1", q: "Que emprego confere as mercadorias que entram e saem com os documentos?", options: ["Empregado de expedição e receção", "Embalador", "Mecânico de empilhadores", "Guarda de segurança"], answer: 0, why: "Os empregados de expedição e receção acompanham as entregas que entram e saem e conferem-nas." },
            { objective: "O1", q: "Quem dá o certificado Certified Logistics Technician (CLT)?", options: ["A OSHA", "O IRS (os impostos dos EUA)", "O Manufacturing Skill Standards Council (MSSC)", "Qualquer agência de trabalho temporário"], answer: 2, why: "O CLT, e o CLA que vem primeiro, são certificados do MSSC." }
          ]
        },
        {
          title: "O fluxo das mercadorias e os códigos de localização",
          objectives: ["O2"],
          minutes: 5,
          goal: "Encontrar um artigo pelo SKU e pelo código de localização, e pôr as recolhas em ordem de percurso.",
          text: [
            "As mercadorias passam pelo armazém sempre pela mesma ordem. Receção: as mercadorias chegam e são conferidas. Arrumação: são guardadas num lugar fixo. Armazenagem. Recolha: os trabalhadores tiram os artigos para uma encomenda. Embalagem. Expedição: as encomendas saem em camiões.",
            "Cada produto tem um SKU (em inglês \"stock keeping unit\", unidade de stock), um código para esse artigo exato, por exemplo uma camisa azul no tamanho grande. Cada lugar de armazenagem tem um código de localização. Muitos armazéns usam zona, corredor, estante (ou módulo) e nível, por isso A-12-03-B pode querer dizer zona A, corredor 12, estante 3, nível B. O seu armazém vai ensinar-lhe o seu próprio padrão.",
            "A maioria dos armazéns usa leitores de código de barras. Você lê a localização e o artigo para que o sistema informático (um sistema de gestão de armazém) saiba o que se moveu. Se o artigo no lugar não corresponder ao SKU, pare e avise o seu chefe de equipa; não pegue numa coisa que parece parecida.",
            "Para poupar passos, recolha em ordem de percurso: ordene a sua lista por corredor e depois por estante, para passar por cada corredor só uma vez."
          ],
          steps: ["Leia o SKU e o código de localização de cada linha.", "Divida o código de localização nas suas partes: zona, corredor, estante, nível.", "Ordene a lista por zona, depois por corredor, depois por estante.", "Em cada lugar, leia o código ou confirme que o SKU corresponde antes de recolher.", "Se não corresponder ou o lugar estiver vazio, comunique."],
          words: [["SKU", "unidade de stock (em inglês \"stock keeping unit\"): um código para um produto exato."], ["Código de localização", "o endereço de um lugar de armazenagem, como zona, corredor, estante e nível."], ["Arrumação", "levar as mercadorias recebidas para o seu lugar de armazenagem."], ["Recolha", "tirar artigos do armazém para preparar uma encomenda."], ["Sistema de gestão de armazém (WMS)", "o sistema informático que regista onde está cada artigo."]],
          slides: [
            { title: "O fluxo das mercadorias", bullets: ["Receção, arrumação, armazenagem", "Recolha, embalagem, expedição"] },
            { title: "Os códigos que usa", bullets: ["SKU: o artigo exato", "Localização: zona, corredor, estante, nível", "Exemplo: A-12-03-B"] },
            { title: "Recolher certo, recolher com inteligência", bullets: ["Leia o código do lugar e do artigo", "Artigo errado ou lugar vazio? Comunique", "Ordene por corredor para passar por cada corredor uma só vez"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Só para praticar. Ponha esta lista de recolha em ordem de percurso (zona, corredor, estante, nível): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Depois escreva o que quer dizer cada parte de A-12-03-B. Verifique: a ordem começa por A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "ler um código de localização, encontrar um artigo pelo seu SKU e pôr uma lista de recolha em ordem de percurso.",
          quickCheck: [
            { objective: "O2", q: "O que é um SKU?", options: ["Um tipo de empilhador", "Um código para um produto exato", "Um camião de entregas", "Uma regra de segurança"], answer: 1, why: "Uma unidade de stock (SKU) é um código para um artigo exato." },
            { objective: "O2", q: "Vai a uma localização e o artigo não corresponde ao SKU da sua lista. O que faz?", options: ["Pega numa coisa que parece parecida", "Salta a linha e não diz nada", "Pega em dois de outra coisa", "Para e comunica ao seu chefe de equipa"], answer: 3, why: "Uma diferença tem de ser comunicada para que a encomenda e os registos fiquem certos." }
          ]
        },
        {
          title: "Receber uma entrega e contar o stock",
          objectives: ["O3"],
          minutes: 6,
          goal: "Conferir uma entrega com a sua lista de embalagem e registar qualquer problema.",
          text: [
            "Quando chega um camião, a receção confirma que o que chegou é o que foi encomendado. Você compara as mercadorias com a lista de embalagem (e com a nota de encomenda, se a tiver). O motorista também entrega um conhecimento de carga, o documento de transporte que você assina.",
            "Conte todas as linhas. Verifique o SKU, a quantidade e o estado. Se uma caixa estiver esmagada, molhada ou aberta, tire uma fotografia se o seu local de trabalho o permitir e anote. Se recebeu menos do que está na lista, é uma falta; mais é um excesso. Escreva todos os problemas no documento antes de assinar, como diz o procedimento do seu local de trabalho. Assinar um recibo sem notas pode querer dizer que aceitou tudo como estando bem.",
            "As contagens de inventário funcionam da mesma forma. Uma contagem cíclica é contar algumas localizações por dia em vez do armazém inteiro de uma só vez. Se a sua contagem não corresponder ao sistema, conte outra vez e depois comunique. Aqui a exatidão é mais importante do que a rapidez."
          ],
          steps: ["Pegue na lista de embalagem (e na nota de encomenda, se a tiver).", "Conte cada linha: SKU certo, quantidade certa.", "Verifique o estado de todas as caixas.", "Escreva cada falta, excesso ou dano no documento.", "Siga o procedimento do seu local de trabalho antes de assinar o conhecimento de carga.", "Comunique os problemas ao seu chefe de equipa."],
          words: [["Lista de embalagem", "uma lista do que está numa entrega."], ["Nota de encomenda (PO)", "o pedido do comprador que mostra o que foi comprado e em que quantidade."], ["Conhecimento de carga (BOL)", "o documento de transporte que a transportadora entrega; assiná-lo diz que recebeu as mercadorias."], ["Falta", "chegaram menos artigos do que diz o documento."], ["Excesso", "chegaram mais artigos do que diz o documento."], ["Contagem cíclica", "contar algumas localizações de cada vez para manter os registos certos."]],
          slides: [
            { title: "O que a receção confere", bullets: ["SKU certo", "Quantidade certa", "Bom estado"] },
            { title: "Problemas a registar", bullets: ["Falta: menos do que está na lista", "Excesso: mais do que está na lista", "Dano: esmagado, molhado ou aberto"] },
            { title: "Antes de assinar", bullets: ["Escreva todos os problemas", "Siga o procedimento do seu local de trabalho", "Uma assinatura sem notas pode querer dizer que estava tudo bem"] },
            { title: "Contar o stock", bullets: ["Contagem cíclica: alguns lugares por dia", "Não corresponde? Conte outra vez e depois comunique", "Exatidão antes da rapidez"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Só para praticar. A lista de embalagem diz: SKU 1001, 12 caixas; SKU 1002, 8 caixas; SKU 1003, 20 caixas. Você conta 12 do 1001, 6 do 1002 e 21 do 1003, com uma caixa do 1003 esmagada. Escreva um relatório de receção: cada linha, o que era esperado, o que chegou e o problema. Resposta: 1002 com falta de 2; 1003 com excesso de 1 e 1 danificada.",
          youCanNow: "conferir uma entrega com a sua lista de embalagem e registar faltas, excessos e danos.",
          quickCheck: [
            { objective: "O3", q: "A lista de embalagem diz 10 caixas, mas chegaram 8. Como se chama isto?", options: ["Um excesso", "Uma falta", "Uma contagem cíclica", "Uma arrumação"], answer: 1, why: "Menos artigos do que os que estão no documento é uma falta." },
            { objective: "O3", q: "Uma caixa de uma entrega está molhada e rasgada. O que faz?", options: ["Anota o dano no documento antes de assinar, como diz o procedimento do seu local de trabalho", "Assina o documento e não diz nada", "Deita a caixa fora", "Esconde-a lá atrás"], answer: 0, why: "O dano tem de ser registado para poder ser reclamado e não ser culpa do armazém." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funciona um armazém",
        questions: [
          { objective: "O1", q: "O que precisa antes de operar um empilhador num armazém?", options: ["Só um cartão feito pela internet", "Nada", "Uma carta de condução de carro", "A formação e a avaliação do próprio empregador"], answer: 3, why: "A OSHA exige que o empregador forme e avalie cada operador de empilhador." },
          { objective: "O1", q: "O que é verdade sobre o cartão OSHA de 10 horas?", options: ["É uma licença de empilhador", "É uma formação voluntária e não é uma certificação", "É obrigatório por lei para todos os empregos", "É dado pelo MSSC"], answer: 1, why: "A OSHA diz que a formação Outreach é voluntária e não é uma certificação." },
          { objective: "O2", q: "No código A-12-03-B, o que é mais provavelmente o 12?", options: ["O corredor", "O preço", "O SKU", "O peso"], answer: 0, why: "Num padrão zona-corredor-estante-nível, a segunda parte é o corredor." },
          { objective: "O2", q: "Que passo vem logo a seguir à receção?", options: ["Expedição", "Embalagem", "Arrumação", "Recolha"], answer: 2, why: "Depois de as mercadorias serem conferidas, são arrumadas no seu lugar de armazenagem." },
          { objective: "O3", q: "A sua contagem cíclica dá 14, mas o sistema diz 16. O que faz primeiro?", options: ["Muda o sistema para 14", "Escreve 16 para corresponder", "Ignora", "Conta outra vez e comunica se ainda não corresponder"], answer: 3, why: "Primeiro volte a contar; se ainda não corresponder, comunique para que seja verificado." }
        ]
      }
    },
    {
      name: "Capítulo 2: Trabalhar com segurança e ser contratado",
      lessons: [
        {
          title: "Levantar pesos com segurança e os perigos do armazém",
          objectives: ["O5"],
          minutes: 5,
          goal: "Escolher a forma segura de levantar, mover e comunicar perigos num armazém.",
          text: [
            "A OSHA diz quais são os principais perigos do armazém: empilhadores e outros veículos motorizados, levantar pesos e o esforço repetitivo, a movimentação de materiais, os produtos químicos, os escorregões, tropeções e quedas, e os robôs e tapetes rolantes. As lesões mais comuns são distensões por levantar pesos e ser atingido por empilhadores.",
            "Levante com inteligência. Planeie o levantamento e o caminho. Aproxime-se da carga, dobre os joelhos, mantenha as costas direitas e a carga junto ao corpo, e não torça o tronco: vire-se com os pés. Use um carrinho, um carro de mão ou um porta-paletes sempre que puder. Para artigos pesados ou difíceis de pegar, peça para levantar em equipa.",
            "Perto do equipamento: fique nos corredores de peões, olhe nos olhos dos condutores de empilhadores e nunca passe por baixo de garfos levantados. Mantenha as mãos longe dos tapetes rolantes em movimento. Com calor, beba água muitas vezes, faça as suas pausas e avise alguém se se sentir tonto ou mal.",
            "O ritmo é importante, mas nunca use um atalho que não seja seguro. Comunique logo ao seu chefe de equipa perigos como líquidos derramados, estantes danificadas ou saídas bloqueadas."
          ],
          steps: ["Planeie: qual é o peso, para onde vai, o caminho está livre?", "Aproxime-se, dobre os joelhos, costas direitas.", "Levante com as pernas, carga junto ao corpo.", "Vire-se com os pés; não torça o tronco.", "Para cargas pesadas, use um carrinho ou um porta-paletes, ou peça para levantar em equipa.", "Comunique os perigos logo."],
          words: [["Ergonomia", "adaptar o trabalho ao corpo para evitar esforço e lesões."], ["Porta-paletes", "uma ferramenta empurrada à mão ou motorizada que levanta e move paletes por uma curta distância."], ["Levantar em equipa", "duas ou mais pessoas a levantar juntas um artigo pesado ou difícil de pegar."], ["Doença do calor", "doença causada por trabalhar com calor, como a exaustão pelo calor ou o golpe de calor."]],
          slides: [
            { title: "Principais perigos do armazém", bullets: ["Empilhadores e veículos motorizados", "Levantar pesos e esforço repetitivo", "Escorregões, tropeções, quedas, tapetes rolantes, calor"] },
            { title: "Levante com inteligência", bullets: ["Planeie, aproxime-se, dobre os joelhos", "Carga junto ao corpo; vire-se com os pés", "Carrinho, porta-paletes ou levantar em equipa para cargas pesadas"] },
            { title: "Perto do equipamento", bullets: ["Fique nos corredores de peões; olhe nos olhos dos condutores", "Nunca por baixo de garfos levantados", "Mãos longe dos tapetes rolantes em movimento"] },
            { title: "Ritmo seguro", bullets: ["Água e pausas com calor", "Nenhum atalho inseguro", "Comunique os perigos logo"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Pratique em casa com uma caixa vazia ou com pouco peso. Levante-a seguindo todos os passos e diga cada passo em voz alta. Depois escreva três perigos que pode ver num armazém e o que faria em cada caso.",
          youCanNow: "levantar e mover artigos com segurança e comunicar os perigos do armazém da forma certa.",
          quickCheck: [
            { objective: "O5", q: "Precisa de se virar enquanto carrega uma caixa. Como faz?", options: ["Torce a cintura", "Vira-se com os pés", "Atira a caixa", "Primeiro levanta-a acima da cabeça"], answer: 1, why: "Virar-se com os pés protege as costas; torcer o tronco ao levantar causa lesões." },
            { objective: "O5", q: "Vê um empilhador a vir pelo seu corredor. O que é mais seguro?", options: ["Passar depressa atrás dele", "Pôr-se por baixo dos garfos levantados", "Ficar no corredor de peões e olhar nos olhos do condutor", "Acenar e continuar a andar no caminho dele"], answer: 2, why: "Os corredores de peões e o contacto visual ajudam o condutor a ver você e mantêm você fora do caminho dele." }
          ]
        },
        {
          title: "Montar uma carga segura numa palete",
          objectives: ["O4"],
          minutes: 6,
          goal: "Planear uma carga numa palete com os artigos pesados em baixo, camadas iguais e um total dentro do limite de peso.",
          text: [
            "Uma boa palete chega inteira e mantém as pessoas seguras. Primeiro verifique a própria palete: nenhuma tábua partida nem pregos de fora.",
            "As caixas pesadas vão em baixo e as mais leves em cima. Faça camadas iguais e planas. Mantenha as caixas dentro das bordas da palete (nada a sair para fora). Rode uma camada sim, uma camada não, para que as caixas se cruzem umas com as outras (chama-se amarração); isto ajuda a pilha a manter-se unida. Fique abaixo dos limites de altura e de peso do seu local de trabalho.",
            "Some o peso. Exemplo (só para praticar): 20 caixas de 25 lb cada dão 500 lb, mais uma palete de cerca de 40 lb dá 540 lb (lb é a libra, a unidade de peso usada nos EUA). Confirme que está abaixo do limite da palete, da estante e do equipamento.",
            "Envolva a carga com filme estirável, bem apertado de baixo para cima, e prenda-o também à palete. Ponha as etiquetas viradas para fora, onde podem ser lidas. Antes de carregar os camiões, os travões do reboque são acionados e as rodas são calçadas; as cargas são distribuídas por igual dentro do reboque."
          ],
          steps: ["Verifique a palete: nenhuma tábua partida nem pregos.", "As caixas mais pesadas na camada de baixo.", "Camadas iguais, dentro das bordas, amarradas.", "Some o peso total e verifique os limites.", "Envolva bem com filme estirável, de baixo para cima, incluindo a palete.", "Etiquetas viradas para fora."],
          words: [["Palete", "uma base plana de madeira ou de plástico onde se empilham as mercadorias para serem movidas juntas."], ["Amarração", "rodar cada camada de caixas para que se sobreponham à camada de baixo."], ["Saliência", "caixas a sair para fora da borda da palete."], ["Filme estirável", "uma película fina de plástico enrolada à volta de uma carga para a manter unida."]],
          slides: [
            { title: "Comece bem", bullets: ["Verifique se a palete tem tábuas partidas ou pregos", "As caixas mais pesadas em baixo"] },
            { title: "Empilhe bem", bullets: ["Camadas iguais e planas", "Nada a sair para fora", "Amarre as camadas"] },
            { title: "Verifique o peso", bullets: ["Caixas x peso, mais a palete", "Abaixo dos limites da palete, da estante e do equipamento"] },
            { title: "Termine bem", bullets: ["Envolva bem apertado, de baixo para cima", "Etiquetas viradas para fora"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Só para praticar. Tem 8 caixas de 50 lb, 12 caixas de 20 lb e 6 caixas de 10 lb. Desenhe a palete vista de lado: que caixas vão em que camada. Some o peso total com uma palete de 40 lb e confirme que está abaixo de um limite de 1,000 lb. Resposta: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "planear uma carga segura numa palete, com os artigos pesados em baixo, camadas iguais e um total dentro do limite.",
          quickCheck: [
            { objective: "O4", q: "Onde vão as caixas mais pesadas numa palete?", options: ["Na camada de cima", "A sair para fora da borda", "Só na camada do meio", "Na camada de baixo"], answer: 3, why: "Os artigos pesados em baixo mantêm a carga estável e protegem as caixas mais leves." },
            { objective: "O4", q: "Prática: 30 caixas de 20 lb numa palete de 40 lb. Qual é o peso total?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, mais a palete de 40 lb = 640 lb." }
          ]
        },
        {
          title: "Ser contratado e subir na carreira",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Escrever um plano para ser contratado, com empregadores, um objetivo de certificado e linhas honestas para o currículo.",
          text: [
            "Onde procurar: os sites de emprego das grandes lojas e das empresas de transporte, os sites locais de anúncios de emprego, as agências de trabalho temporário e o seu American Job Center local (um centro público de emprego dos EUA), que em alguns casos também pode ajudar a pagar formações e certificados. Muitos armazéns contratam pessoas com registo criminal; pergunte no centro de emprego por empregadores de segunda oportunidade.",
            "O que os empregadores querem: chegar a horas, contar com cuidado, hábitos seguros e ritmo constante. Os armazéns medem muitas vezes a sua produtividade, como recolhas por hora. Cumpra-a trabalhando com inteligência (ordem de percurso, leitura cuidadosa dos códigos) e nunca saltando a segurança.",
            "Adapte o seu currículo ao emprego. Use verbos de ação e exemplos reais: \"Contei e conferi entregas com as listas de embalagem\" ou \"Concluí formação em segurança e logística de armazém (Koach Learn), 2026\". Antigos militares: as funções de abastecimento, de parque de viaturas e de logística contam, por isso escreva-as com palavras do dia a dia.",
            "Planeie o seu crescimento. Um certificado como o CLA do MSSC, depois o CLT, e a formação em empilhador dada pelo empregador podem levar a funções mais bem pagas, como chefe de equipa, controlo de inventário ou coordenador de logística."
          ],
          steps: ["Faça uma lista de três empregadores ou programas perto de si, incluindo o seu American Job Center.", "Escolha um objetivo de certificado (por exemplo o CLA do MSSC) e uma data.", "Escreva duas linhas honestas para o currículo a partir deste curso ou de trabalhos anteriores.", "Pratique uma resposta de 30 segundos: \"Como se mantém exato e seguro a um ritmo rápido?\""],
          words: [["Produtividade", "quanto trabalho faz num certo tempo, como recolhas por hora."], ["American Job Center", "um centro público e gratuito dos EUA que ajuda as pessoas a encontrar emprego e formação."], ["Empregador de segunda oportunidade", "uma empresa que contrata pessoas com registo criminal."]],
          slides: [
            { title: "Onde procurar", bullets: ["Sites de emprego das empresas e sites de anúncios", "Agências de trabalho temporário", "O seu American Job Center local"] },
            { title: "O que os empregadores querem", bullets: ["A horas, exato, seguro", "Cumprir a produtividade trabalhando com inteligência", "Nunca saltando a segurança"] },
            { title: "O seu currículo", bullets: ["Verbos de ação e exemplos reais", "Honesto sobre formações e certificados", "Antigos militares: traduzam as funções de abastecimento e logística"] },
            { title: "Subir na carreira", bullets: ["CLA do MSSC, depois CLT", "Formação em empilhador dada pelo empregador", "Chefe de equipa, controlo de inventário, coordenador"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Escreva o seu plano para ser contratado: três empregadores ou programas perto de si, o seu objetivo de certificado e a data, duas linhas honestas para o currículo e a sua resposta de 30 segundos a \"Como se mantém exato e seguro a um ritmo rápido?\" Leia a resposta em voz alta.",
          youCanNow: "escrever um plano para ser contratado num armazém, com um objetivo de certificado e linhas honestas para o currículo.",
          quickCheck: [
            { objective: "O5", q: "Está abaixo da sua produtividade de recolhas por hora. Qual é a forma certa de recuperar?", options: ["Saltar a leitura do código para ir mais depressa", "Correr nos corredores", "Recolher em ordem de percurso e ler os códigos com cuidado", "Trepar às estantes em vez de usar um escadote"], answer: 2, why: "Trabalhar com inteligência poupa tempo; os atalhos inseguros causam lesões e erros." },
            { objective: "O1", q: "Que linha do currículo é honesta e forte?", options: ["\"Certificado CLT do MSSC\" (antes de ter passado)", "\"Trabalhador esforçado\"", "\"Certificado em empilhador\" (sem avaliação do empregador)", "\"Contei e conferi entregas com as listas de embalagem\""], answer: 3, why: "Usa um verbo de ação e uma tarefa real, e não diz nada que você não tenha." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Trabalhar com segurança e ser contratado",
        questions: [
          { objective: "O5", q: "Uma caixa é pesada demais para levantar sozinho. O que faz?", options: ["Levanta-a depressa antes que doa", "Usa um carrinho ou um porta-paletes, ou pede para levantar em equipa", "Arrasta-a com as costas dobradas", "Deixa-a no corredor"], answer: 1, why: "Use equipamento ou levante em equipa as cargas pesadas para evitar lesões nas costas." },
          { objective: "O5", q: "Vê um líquido derramado num corredor. Qual é a ação certa?", options: ["Contorna-o e não diz nada", "Espera que outra pessoa o veja", "Mantém as pessoas afastadas e comunica logo", "Tapa-o com uma caixa"], answer: 2, why: "Comunique os perigos logo para que sejam limpos antes de alguém escorregar." },
          { objective: "O4", q: "Para que serve amarrar as camadas numa palete?", options: ["Ajuda a pilha a manter-se unida", "Torna-a mais pesada", "Esconde as etiquetas", "Deixa as caixas sair para fora da borda"], answer: 0, why: "As camadas sobrepostas prendem a pilha para que não se separe." },
          { objective: "O4", q: "Que palete está pronta para ser movida?", options: ["Caixas a sair para fora da borda", "Caixas leves em baixo", "Solta, sem filme", "Caixas pesadas em baixo, camadas iguais, envolvida, etiquetas para fora"], answer: 3, why: "Cumpre todas as regras: pesado em baixo, camadas iguais, envolvida e etiquetada." },
          { objective: "O1", q: "Que serviço pode ajudar você a encontrar empregos de armazém e formação de graça?", options: ["O seu American Job Center local", "Uma bilheteira", "O DMV (o serviço de cartas de condução dos EUA)", "Um banco"], answer: 0, why: "Os American Job Centers são centros públicos e gratuitos de emprego e formação." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Carreiras em Armazém e Logística",
    questions: [
      { objective: "O1", q: "Que emprego prepara as encomendas dos clientes tirando artigos das prateleiras?", options: ["Empregado de receção", "Separador", "Mecânico de camiões", "Guarda de segurança"], answer: 1, why: "Os separadores tiram artigos do armazém para preparar as encomendas." },
      { objective: "O1", q: "Em que certificado tem de passar antes de fazer o CLT do MSSC?", options: ["Uma CDL (carta de condução profissional dos EUA)", "O cartão OSHA de 30 horas", "O Certified Logistics Associate (CLA) do MSSC", "Um cartão de empilhador"], answer: 2, why: "O MSSC exige o CLA antes da avaliação do CLT." },
      { objective: "O1", q: "Onde deve verificar o salário e as perspetivas dos empregos de armazém?", options: ["No Occupational Outlook Handbook em bls.gov", "Numa publicação nas redes sociais", "No palpite de um amigo", "Num videojogo"], answer: 0, why: "O manual do BLS é a fonte oficial para salários e perspetivas." },
      { objective: "O2", q: "Qual é a ordem certa do fluxo das mercadorias?", options: ["Expedição, recolha, receção", "Embalagem, receção, arrumação", "Recolha, receção, armazenagem", "Receção, arrumação, armazenagem, recolha, embalagem, expedição"], answer: 3, why: "As mercadorias entram, são guardadas e depois são recolhidas, embaladas e expedidas." },
      { objective: "O2", q: "Prática: qual é a primeira localização em ordem de percurso?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Ordene por zona e depois por corredor: zona A corredor 02 vem antes de A corredor 07 e de toda a zona B." },
      { objective: "O2", q: "Porque lê o código da localização e do artigo quando recolhe?", options: ["Para que o sistema saiba exatamente o que se moveu", "Para ir mais devagar", "Para ver as horas", "É só por diversão"], answer: 0, why: "Ler os códigos mantém certos os registos do sistema de gestão de armazém." },
      { objective: "O2", q: "O lugar do seu SKU está vazio. O que faz?", options: ["Pega em qualquer artigo ali perto", "Comunica ao seu chefe de equipa", "Marca a encomenda como completa", "Deixa a linha em branco e não diz nada"], answer: 1, why: "Um lugar vazio é comunicado para que o stock seja encontrado e os registos corrigidos." },
      { objective: "O3", q: "O que é um conhecimento de carga?", options: ["Uma lista de compras", "Um sinal de segurança", "Um recibo de salário", "O documento de transporte que assina numa entrega"], answer: 3, why: "O conhecimento de carga é o documento de transporte da transportadora." },
      { objective: "O3", q: "A lista diz 15 caixas; chegaram 17. O que é?", options: ["Um excesso", "Uma falta", "Um dano", "Uma arrumação"], answer: 0, why: "Mais do que está no documento é um excesso." },
      { objective: "O3", q: "Que três coisas confere em cada linha na receção?", options: ["Cor, tamanho e cheiro", "SKU certo, quantidade certa, bom estado", "Preço, imposto e gorjeta", "Nome do motorista, cor do camião, hora"], answer: 1, why: "A receção confere o artigo, a quantidade e o estado." },
      { objective: "O3", q: "O que é uma contagem cíclica?", options: ["Contar bicicletas", "Contar o armazém inteiro só uma vez por ano", "Contar algumas localizações de cada vez para manter os registos certos", "Contar as suas horas"], answer: 2, why: "As contagens cíclicas verificam alguns lugares por dia para os registos se manterem exatos." },
      { objective: "O4", q: "O que verifica primeiro quando monta uma palete?", options: ["A cor da etiqueta", "Que a palete não tem tábuas partidas nem pregos de fora", "O tempo lá fora", "O rádio do camião"], answer: 1, why: "Uma palete danificada pode partir-se e deixar cair a carga." },
      { objective: "O4", q: "Prática: 10 caixas de 30 lb e 10 caixas de 15 lb numa palete de 40 lb. Total?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Porque é que as caixas não devem sair para fora da borda da palete?", options: ["A saliência esmaga as caixas e pode tornar a carga instável", "Só porque fica desarrumado", "Torna a carga mais leve", "É mais rápido de envolver"], answer: 0, why: "As caixas que saem para fora perdem apoio, são esmagadas e podem fazer a carga cair." },
      { objective: "O4", q: "Como se deve aplicar o filme estirável?", options: ["Só à volta da camada de cima", "Solto, para sair com facilidade", "Por cima das etiquetas para que não se possam ler", "Bem apertado, de baixo para cima, e também à volta da palete"], answer: 3, why: "Envolver bem apertado e prender à palete mantém toda a carga unida." },
      { objective: "O5", q: "Quais são as lesões mais comuns no armazém, segundo a OSHA?", options: ["Cortes com papel", "Distensões por levantar pesos e ser atingido por empilhadores", "Queimaduras de sol", "Cansaço dos olhos por causa dos ecrãs"], answer: 1, why: "A OSHA diz que as distensões ao levantar pesos e ser atingido por veículos motorizados são as mais comuns." },
      { objective: "O5", q: "Como deve levantar uma caixa do chão?", options: ["Aproximar-se, dobrar os joelhos, manter as costas direitas e a carga junto ao corpo", "Dobrar-se pela cintura com as pernas esticadas", "Torcer o tronco enquanto levanta", "Segurá-la longe do corpo"], answer: 0, why: "Usar as pernas e manter a carga junto ao corpo protege as costas." },
      { objective: "O5", q: "Está muito calor no armazém e sente-se tonto. O que faz?", options: ["Continua a trabalhar para cumprir a produtividade", "Salta a pausa", "Avisa alguém, bebe água e descansa num lugar fresco", "Vai para casa sem avisar ninguém"], answer: 2, why: "As tonturas podem ser doença do calor; avise alguém, arrefeça e beba água." },
      { objective: "O5", q: "Qual é a forma segura de manter a sua produtividade?", options: ["Saltar a leitura do código", "Andar em cima de um porta-paletes", "Trepar às estantes para chegar aos artigos", "Trabalhar com inteligência: ordem de percurso, leitura cuidadosa, nenhum atalho inseguro"], answer: 3, why: "Os métodos inteligentes poupam tempo sem arriscar lesões ou erros." },
      { objective: "O1", q: "O que é verdade sobre o cartão Outreach de 10 horas da OSHA?", options: ["É uma formação voluntária e a OSHA diz que não é uma certificação", "Deixa-o conduzir qualquer empilhador", "É o mesmo que o CLT do MSSC", "É obrigatório por lei federal para todos os empregos de armazém"], answer: 0, why: "A OSHA diz que as aulas Outreach são voluntárias e que nenhuma delas é uma certificação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e verifique outra vez.",
    criteria: [
      { name: "Relatório de receção", objective: "O3", notYet: "Uma contagem está errada ou falta uma falta, um excesso ou um dano.", meets: "Cada linha mostra o esperado e o recebido, e todos os problemas estão registados.", exceeds: "Também diz o que fazer antes de assinar o conhecimento de carga e a quem avisar." },
      { name: "Lista de recolha em ordem de percurso", objective: "O2", notYet: "As localizações estão fora de ordem ou um código foi mal lido.", meets: "Todas as recolhas ordenadas por zona, corredor, estante e nível, com cada código bem lido.", exceeds: "Explica o que fazer se um artigo não corresponder ou um lugar estiver vazio." },
      { name: "Plano de carga da palete", objective: "O4", notYet: "Caixas pesadas em cima, caixas a sair para fora, ou o peso total errado ou acima do limite.", meets: "Caixas pesadas em baixo, camadas iguais e amarradas, total certo abaixo do limite, envolvida e etiquetada.", exceeds: "Acrescenta a verificação da palete e os passos de segurança do reboque." },
      { name: "Plano para ser contratado", objective: "O1", notYet: "Sem empregadores, sem objetivo de certificado, ou uma linha do currículo que diz algo que não é verdade.", meets: "Três empregadores ou programas, um certificado verdadeiro com quem o dá e uma data, duas linhas honestas para o currículo.", exceeds: "Inclui uma resposta de 30 segundos praticada sobre exatidão e segurança." },
      { name: "Trabalho seguro", objective: "O5", notYet: "O plano sugere atalhos inseguros para cumprir a produtividade.", meets: "A resposta de 30 segundos e o plano põem a segurança em primeiro lugar, com levantamento seguro e comunicação de perigos.", exceeds: "Diz um perigo concreto da página de armazenagem da OSHA e como evitá-lo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e um dossiê inicial que cumpre a grelha de avaliação",
      "Alunos que se candidatam a pelo menos três empregos de armazém em 30 dias (inquérito de seguimento)",
      "Alunos contratados para funções de armazém ou de logística em 90 dias (relatórios dos parceiros e de seguimento)",
      "Alunos que se inscrevem no CLA do MSSC ou começam a formação em empilhador dada pelo empregador"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, lápis e uma calculadora (a calculadora do telefone serve)",
      "Um telefone ou computador com internet para procurar emprego e ver páginas oficiais",
      "Opcional: algumas caixas vazias ou notas autocolantes para praticar as camadas da palete e os percursos de recolha",
      "Cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Monte um mini-armazém com prateleiras etiquetadas (notas autocolantes como A-01-01-A) e faça uma corrida de recolha cronometrada, pontuada primeiro pela exatidão.",
      "Use uma lista de embalagem de prática impressa e uma caixa com artigos variados para a atividade de receção.",
      "Pratique o levantamento só com caixas vazias ou leves.",
      "Convide um supervisor de armazém local ou um funcionário do American Job Center para falar sobre contratação, produtividade e contratação de segunda oportunidade.",
      "Avalie o dossiê inicial com a grelha de avaliação e reveja uma linha Ainda não de cada vez."
    ]
  }
};
