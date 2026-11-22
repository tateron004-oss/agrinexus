"use strict";

// Koach Learn course (Portuguese translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about US real estate (HUD, Fair Housing Act, CAN-SPAM, California DRE); US names are kept and explained.

const HUD_FHA = { name: "HUD: visão geral da Lei de Habitação Justa (Fair Housing Act)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: anúncios, declarações e avisos discriminatórios", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "Departamento de Imobiliário da Califórnia (DRE, exemplo de regulador estadual)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: Lei CAN-SPAM, guia de cumprimento para empresas", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-pt",
  lang: "pt",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "IA para Agentes Imobiliários",
  skills: "Escrever descrições de imóveis que respeitam a habitação justa, Transformar notas em atualizações para clientes, Criar um plano de seguimento, Resumir dados de mercado que você fornece, Preparar visitas e casas abertas, Proteger as informações dos clientes",
  outcome: "usar a IA no seu negócio imobiliário para escrever descrições de imóveis corretas que seguem as regras de habitação justa, manter compradores e vendedores informados, seguir um plano de contacto com os seus contactos e transformar números de mercado que tirou do seu MLS num resumo claro para o cliente, sem colocar informações privadas dos clientes em ferramentas de IA.",
  about: [
    "Este curso é para agentes imobiliários, corretores e assistentes nos Estados Unidos, sobretudo agentes independentes e novos a construir um negócio, incluindo muitos agentes de minorias que servem as suas próprias comunidades e pessoas que compram casa pela primeira vez.",
    "Você vai usar um assistente de IA gratuito para escrever anúncios mais depressa, manter os clientes informados, contactar os seus contactos com regularidade e explicar números de mercado com clareza. Também vai aprender onde a IA cria riscos no imobiliário: linguagem de habitação justa, dados errados nos anúncios e privacidade dos clientes.",
    "Este curso não é aconselhamento jurídico. A lei de habitação justa, as regras de publicidade e as regras de licença aplicam-se a você; verifique no HUD, no regulador imobiliário do seu estado (na Califórnia, o Departamento de Imobiliário) e com o seu corretor. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Monte um kit de IA de agente: uma descrição de imóvel verificada linha a linha quanto aos dados e à linguagem de habitação justa, um modelo de atualização semanal para o vendedor, um modelo de atualização de procura para o comprador, um plano de seguimento de 30 dias com quatro mensagens para os contactos, um resumo de mercado de uma página feito com números que você mesmo tirou, e uma lista de verificação para a casa aberta. Nenhuma informação privada de clientes entra na ferramenta de IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agentes imobiliários, corretores e assistentes, sobretudo agentes independentes e novos a construir um negócio, incluindo muitos agentes de minorias que servem as suas próprias comunidades e pessoas que compram casa pela primeira vez.",
    startingPoint: "Têm licença ou trabalham sob um corretor, e sabem tirar anúncios e números do MLS. Muitos já experimentaram a IA para uma ou duas publicações, mas não têm um processo fixo, e poucos pensaram nos riscos da IA para a habitação justa e a privacidade.",
    gap: "Escrever anúncios, atualizações e mensagens de seguimento leva horas, e um seguimento irregular faz perder clientes. A IA poupa esse tempo, mas pode inventar dados, escrever violações da habitação justa e expor dados dos clientes. Os alunos precisam de uma forma segura e repetível de a usar que proteja a sua licença e os seus clientes.",
    constraints: [
      "Não é aconselhamento jurídico: as regras de habitação justa, publicidade e licença vêm do HUD, do regulador estadual e do corretor",
      "As políticas da imobiliária sobre ferramentas de IA aplicam-se",
      "Privacidade: nada de nomes de clientes com moradas, dados financeiros, condições de ofertas ou estratégia de negociação em ferramentas de IA",
      "Os números de mercado têm de vir do MLS ou de outra fonte de confiança, não da IA",
      "Tempo: agentes ocupados, por isso cada lição dura cerca de 5 minutos"
    ],
    prerequisites: "Nenhum. Quem é novo nos assistentes de IA pode fazer primeiro um curso de introdução à IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com dados verificados nos registos, com o vendedor e na sua própria visita", action: "escrever uma descrição de imóvel com ajuda da IA e verificar cada dado linha a linha", standard: "retirando tudo o que não consegue verificar" },
    { id: "O2", condition: "Com um anúncio escrito com IA", action: "identificar e reescrever a linguagem que mostra uma preferência sobre pessoas em vez de descrever o imóvel", standard: "para que cada linha descreva só o imóvel e as suas características" },
    { id: "O3", condition: "Com um anúncio já verificado", action: "criar uma publicação nas redes sociais e um e-mail de marketing que seguem as regras de publicidade para licenciados e de e-mail", standard: "com os dados da licença e da imobiliária quando exigidos, uma morada postal e uma opção de cancelar a subscrição" },
    { id: "O4", condition: "Com as suas notas rápidas da semana", action: "escrever uma atualização para o vendedor ou o comprador com a IA, usando marcadores para os dados privados", standard: "sem nenhuma informação privada do cliente na ferramenta de IA" },
    { id: "O5", condition: "Com um novo contacto que aceitou receber notícias suas", action: "planear um seguimento de 30 dias com quatro mensagens úteis e uma próxima data registada", standard: "com todos os links de programas verificados nas páginas oficiais" },
    { id: "O6", condition: "Com números de mercado que tirou do seu MLS", action: "criar um resumo de mercado em palavras simples e uma lista de verificação para a casa aberta", standard: "sem números inventados e com a fonte e a data acrescentadas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Anúncios e habitação justa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escrever descrições de imóveis a partir dos seus dados",
          minutes: 5,
          goal: "Escrever uma descrição de imóvel correta e atraente a partir de dados verificados.",
          text: [
            "Uma descrição de imóvel vende as características da casa: a disposição, as obras feitas, a luz, o espaço exterior e o que há perto, como parques ou transportes. A IA escreve depressa, mas só sabe o que você lhe diz.",
            "Dê-lhe só dados verificados: \"3 quartos, 2 casas de banho, 1,450 pés quadrados segundo os registos do condado, construída em 1962, cozinha remodelada em 2021, telhado novo em 2023, quintal vedado com limoeiro, a 0.3 milhas do metro de superfície.\" Peça uma descrição de 120 palavras num tom caloroso e profissional, e uma versão curta para as redes sociais.",
            "Depois verifique cada dado: a fonte da área, o ano das obras, os nomes das escolas, as distâncias. A IA pode acrescentar coisas que não existem (\"bancadas de granito\", \"vista para o mar\"). Dados falsos num anúncio podem levar a queixas e a problemas legais."
          ],
          steps: ["Junte dados verificados nos registos, com o vendedor e na sua própria visita.", "Peça à IA uma descrição longa e uma curta.", "Verifique cada dado linha a linha.", "Retire tudo o que não consegue verificar."],
          words: [["Descrição de imóvel", "o texto escrito que descreve um imóvel à venda ou para arrendar."], ["MLS", "Multiple Listing Service: a base de dados que os agentes nos Estados Unidos usam para partilhar imóveis."], ["Dado verificado", "algo que você confirmou nos registos, com o vendedor ou na sua própria visita."]],
          slides: [
            { title: "Venda as características", bullets: ["Disposição, obras, luz, espaço exterior", "Parques e transportes perto"] },
            { title: "Entram dados, saem palavras", bullets: ["Dê à IA só dados verificados", "Peça uma versão longa e uma curta"] },
            { title: "Verifique linha a linha", bullets: ["Fonte da área, anos das obras, distâncias", "A IA pode inventar características", "Dados falsos podem trazer queixas"] }
          ],
          tryIt: "Escolha um imóvel que conhece (ou um exemplo). Escreva dez dados verificados, peça à IA uma descrição de 120 palavras e verifique cada linha, apagando tudo o que não está nos seus dados.",
          youCanNow: "escrever uma descrição de imóvel a partir de dados verificados e apanhar os detalhes que a IA inventa.",
          quickCheck: [
            { objective: "O1", q: "O que a IA sabe sobre uma casa quando escreve um anúncio?", options: ["Só o que você lhe diz", "Tudo o que está nos registos do condado", "O que o vendedor disse ao seu escritório", "Os dados do MLS da casa em tempo real"], answer: 0, why: "A IA só sabe o que você lhe dá, por isso dê-lhe só dados verificados." },
            { objective: "O1", q: "O anúncio da IA diz \"bancadas de granito\", mas você não as viu na visita. O que faz?", options: ["Deixa ficar; os compradores gostam de granito", "Retira, a não ser que o consiga verificar", "Põe \"talvez\" antes", "Pergunta à IA se tem a certeza"], answer: 1, why: "Você verifica cada dado e retira tudo o que não consegue verificar." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Linguagem de habitação justa: o que a IA não pode escrever",
          minutes: 6,
          goal: "Encontrar e corrigir linguagem num anúncio que mostra preferência com base numa classe protegida.",
          text: [
            "A Lei federal de Habitação Justa (Fair Housing Act) proíbe a discriminação na habitação por raça, cor, origem nacional, religião, sexo, situação familiar e deficiência. A regra do HUD em 24 CFR 100.75 proíbe anúncios, declarações e avisos que mostrem preferência, limitação ou discriminação com base nestas classes, incluindo através de palavras, fotografias ou dos lugares onde escolhe anunciar. Muitos estados, incluindo a Califórnia, protegem mais grupos; verifique o seu estado.",
            "Descreva o imóvel, não as pessoas que quer que lá vivam. Frases de risco: \"perfeito para jovens profissionais\", \"ideal para um casal\", \"sem crianças\", \"ótimo bairro cristão\", \"apartamento de solteiro\", \"perto de [um local de culto] para famílias dessa fé\", \"pessoas sem deficiência\". Melhor: \"três quartos\", \"rua sossegada\", \"a 0.3 milhas dos transportes\", \"tudo num só piso\".",
            "A IA pode copiar padrões com preconceito daquilo com que aprendeu. Leia sempre o que ela escreve à procura de problemas de habitação justa e peça-lhe: \"Reescreva para descrever só o imóvel e as suas características.\" Na dúvida, pergunte ao seu corretor ou a um serviço de habitação justa."
          ],
          steps: ["Leia cada linha e pergunte: isto descreve o imóvel ou as pessoas?", "Retire as palavras sobre quem deve viver lá.", "Troque-as por características do imóvel.", "Verifique também as fotografias e onde põe o anúncio.", "Na dúvida, pergunte ao seu corretor."],
          words: [["Fair Housing Act", "a lei federal dos Estados Unidos que proíbe a discriminação na habitação com base em classes protegidas."], ["Classe protegida", "um grupo que a lei protege da discriminação, como a raça ou a situação familiar."], ["Situação familiar", "ter crianças com menos de 18 anos em casa, ou estar grávida."], ["HUD", "o Departamento de Habitação e Desenvolvimento Urbano dos Estados Unidos."]],
          slides: [
            { title: "Classes protegidas federais", bullets: ["Raça, cor, origem nacional, religião", "Sexo, situação familiar, deficiência", "Muitos estados, como a Califórnia, protegem mais"] },
            { title: "Os anúncios não podem mostrar preferência", bullets: ["24 CFR 100.75: palavras, fotos, lugar do anúncio", "Descreva o imóvel, não as pessoas"] },
            { title: "Corrija as frases de risco", bullets: ["\"Perfeito para jovens profissionais\" -> retirar", "\"Sem crianças\" -> retirar", "Use características: \"3 quartos\", \"perto dos transportes\""] },
            { title: "A IA pode copiar preconceitos", bullets: ["Leia cada resposta à procura de problemas", "Peça: \"Descreva só o imóvel\"", "Na dúvida? Pergunte ao seu corretor"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Peça à IA uma descrição de uma casa de tamanho familiar. Marque cada frase que descreve pessoas em vez do imóvel e reescreva-as como características.",
          youCanNow: "encontrar e corrigir problemas de habitação justa na linguagem dos anúncios, incluindo textos escritos pela IA.",
          quickCheck: [
            { objective: "O2", q: "O que deve descrever um anúncio?", options: ["O tipo de pessoas que deve comprar", "A religião dos vizinhos", "O imóvel e as suas características", "Quem se vai dar bem na rua"], answer: 2, why: "Descreva o imóvel, não as pessoas que quer que lá vivam." },
            { objective: "O2", q: "A IA escreve \"ideal para um casal\". O que faz?", options: ["Deixa ficar; é simpático", "Acrescenta \"ou uma pessoa sozinha\"", "Passa para o fim", "Troca por características do imóvel, como \"dois quartos, rua sossegada\""], answer: 3, why: "\"Ideal para um casal\" é uma frase de risco sobre pessoas; descreva antes o imóvel." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Promover os seus imóveis e a si mesmo, dentro das regras",
          minutes: 5,
          goal: "Criar publicações e e-mails para um imóvel que seguem as regras de publicidade e de e-mail.",
          text: [
            "A IA pode transformar o seu anúncio verificado em publicações, num e-mail para o seu círculo, no texto de um folheto e num guião curto de vídeo. Use os mesmos dados verificados e a mesma verificação de habitação justa em cada peça.",
            "O regulador do seu estado e o seu corretor têm regras de publicidade para licenciados, muitas vezes incluindo mostrar o número da sua licença e o nome da imobiliária. Na Califórnia, esse regulador é o Departamento de Imobiliário (DRE); verifique as regras do seu próprio estado e a política da sua imobiliária.",
            "Os e-mails de marketing têm de seguir a lei CAN-SPAM: remetente e assunto honestos, dizer que é publicidade, incluir uma morada postal e uma opção de cancelar a subscrição, e respeitar os pedidos de saída em 10 dias úteis."
          ],
          steps: ["Transforme o anúncio verificado numa publicação, num e-mail e num folheto com a IA.", "Faça a verificação de habitação justa em cada um.", "Acrescente os dados da licença e da imobiliária que o seu estado e o seu corretor exigem.", "Acrescente uma morada postal e a opção de cancelar a subscrição nos e-mails de marketing."],
          words: [["Círculo", "as pessoas que você conhece que podem comprar, vender ou recomendar: antigos clientes, amigos, família."], ["Licenciado", "uma pessoa com licença de agente imobiliário."]],
          slides: [
            { title: "Um anúncio, muitas peças", bullets: ["Publicações, e-mail, folheto, guião de vídeo", "Mesmos dados, mesma verificação de habitação justa"] },
            { title: "Regras de publicidade para licenciados", bullets: ["Muitas vezes: número da licença e nome da imobiliária", "Califórnia: Departamento de Imobiliário", "Verifique o seu estado e a política do corretor"] },
            { title: "Básico do e-mail de marketing", bullets: ["Remetente e assunto honestos; diga que é publicidade", "Morada postal e opção de cancelar a subscrição", "Respeite os pedidos de saída em 10 dias úteis"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Transforme o seu anúncio verificado numa publicação nas redes sociais e num e-mail curto. Faça a verificação de habitação justa e acrescente os dados da licença e da imobiliária que o seu estado e o seu corretor exigem.",
          youCanNow: "promover um imóvel em vários canais seguindo as regras de habitação justa, de licenciados e de e-mail.",
          quickCheck: [
            { objective: "O3", q: "Que regra de e-mail cobre os e-mails de marketing nesta lição?", options: ["CAN-SPAM", "O Código Alimentar", "HIPAA", "A regra da FTC sobre avaliações"], answer: 0, why: "Os e-mails de marketing têm de seguir a CAN-SPAM, incluindo uma morada postal e uma opção de cancelar a subscrição." },
            { objective: "O3", q: "Transforma o seu anúncio numa publicação com a IA. O que mais faz antes de publicar?", options: ["Publica já; o anúncio já foi verificado", "Faz a verificação de habitação justa e acrescenta os dados da licença e da imobiliária exigidos", "Retira o preço", "Acrescenta uma foto de banco de imagens de outra casa"], answer: 1, why: "Cada peça passa pela mesma verificação de habitação justa e leva os dados que o seu estado e o seu corretor exigem." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Anúncios e habitação justa",
        questions: [
          { objective: "O1", q: "O anúncio da IA diz \"vista para o mar\", mas a casa não tem. O que faz?", options: ["Deixa ficar; os compradores gostam", "Apaga", "Acrescenta uma foto do mar", "Pergunta à IA se é verdade"], answer: 1, why: "Só dados verificados entram num anúncio." },
          { objective: "O2", q: "Qual é uma classe protegida pela Lei federal de Habitação Justa?", options: ["Cor do cabelo", "Clube de desporto preferido", "Marca do carro", "Situação familiar"], answer: 3, why: "A situação familiar é uma das sete classes federais." },
          { objective: "O2", q: "Que frase é um risco de habitação justa?", options: ["\"Perfeito para jovens profissionais\"", "\"Três quartos\"", "\"Telhado novo em 2023\"", "\"A 0.3 milhas do metro de superfície\""], answer: 0, why: "Mostra uma preferência sobre quem deve viver lá." },
          { objective: "O2", q: "As regras de publicidade de habitação justa podem cobrir:", options: ["Só cartazes de rua", "Só palavras", "Palavras, fotos e onde põe os anúncios", "Nada na internet"], answer: 2, why: "A 24 CFR 100.75 cobre palavras, imagens e a escolha dos meios." },
          { objective: "O3", q: "Onde verifica as regras de publicidade para licenciados na Califórnia?", options: ["Com um comprador", "Numa conversa com a IA", "No Departamento de Imobiliário e com o seu corretor", "Num grupo de redes sociais"], answer: 2, why: "O DRE regula os licenciados da Califórnia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Clientes, contactos e dados de mercado",
      lessons: [
        {
          objectives: ["O4"],
          title: "Atualizações para clientes sem partilhar informações privadas",
          minutes: 5,
          goal: "Transformar as suas notas em atualizações claras para vendedores e compradores usando marcadores.",
          text: [
            "Os clientes querem ter notícias suas muitas vezes. Uma atualização semanal para o vendedor fala das visitas, das opiniões, das visualizações na internet e dos próximos passos. Uma atualização para o comprador fala de novos imóveis que servem, de visitas marcadas e do que se passa na sua faixa de preço.",
            "Use a IA para transformar notas rápidas numa atualização clara, com marcadores: \"Transforme estas notas numa atualização semanal simpática para [nome do vendedor]: 6 visitas, 2 segundas visitas, as opiniões dizem que a cozinha é ótima mas o quintal precisa de limpeza, 1,200 visualizações na internet. Sugira um próximo passo.\"",
            "Nunca coloque dados privados dos clientes em ferramentas de IA: nomes completos com moradas, informações financeiras, valores de pré-aprovação de crédito, números da Segurança Social, condições de ofertas ou estratégia de negociação. Preencha-os você mesmo no seu e-mail ou CRM. Siga as regras da sua imobiliária sobre ferramentas de IA."
          ],
          steps: ["Escreva notas rápidas no fim da semana.", "Troque os nomes e os dados privados por marcadores.", "Peça à IA uma atualização clara com um próximo passo.", "Preencha você mesmo os dados reais e envie."],
          words: [["CRM", "gestão da relação com clientes: um programa para acompanhar clientes e contactos."], ["Marcador", "um espaço em branco como [nome do vendedor] usado no lugar de dados privados reais."]],
          slides: [
            { title: "Os clientes querem notícias", bullets: ["Vendedor: visitas, opiniões, visualizações, próximo passo", "Comprador: novos imóveis, visitas, mudanças do mercado"] },
            { title: "Entram notas, sai a atualização", bullets: ["Notas rápidas com marcadores", "Peça uma atualização simpática e um próximo passo"] },
            { title: "Nunca coloque na IA", bullets: ["Nomes com moradas, finanças, números da Segurança Social", "Valores de pré-aprovação e condições de ofertas", "Estratégia de negociação"] }
          ],
          tryIt: "Escreva notas rápidas sobre a semana de um vendedor de exemplo. Use marcadores, peça à IA uma atualização semanal com um próximo passo e verifique que não tem dados privados.",
          youCanNow: "enviar atualizações claras aos clientes feitas com a IA, mantendo privadas as informações dos clientes.",
          quickCheck: [
            { objective: "O4", q: "O que cobre uma atualização semanal para o vendedor?", options: ["O valor de pré-aprovação do comprador", "O seu plano de negociação", "Visitas, opiniões, visualizações na internet e próximos passos", "As ofertas de outros clientes"], answer: 2, why: "Uma atualização para o vendedor cobre visitas, opiniões, visualizações e próximos passos." },
            { objective: "O4", q: "As suas notas têm o nome completo do comprador e as condições da oferta. O que faz antes de as colar na IA?", options: ["Cola-as como estão", "Encurta as notas", "Traduz primeiro", "Troca os dados privados por marcadores e preenche-os você mesmo depois"], answer: 3, why: "Os dados privados dos clientes ficam fora das ferramentas de IA; você preenche-os você mesmo." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Um plano de seguimento para os contactos",
          minutes: 5,
          goal: "Criar um plano de seguimento de 30 dias com quatro mensagens para novos contactos.",
          text: [
            "A maioria dos contactos não está pronta hoje. Um plano de seguimento regular e útil faz com que se lembrem de você. Exemplo de plano de 30 dias: dia 1, agradecimento e uma pergunta; dia 7, uma dica útil (programas para quem compra casa pela primeira vez a investigar); dia 14, um retrato do mercado na zona deles; dia 30, uma mensagem para saber como estão.",
            "Peça à IA para escrever cada mensagem com a sua voz, com os espaços [nome próprio] e [zona]. Mantenha-as úteis, sem pressionar. Dê links só para páginas oficiais de programas que você verificou.",
            "Acompanhe os contactos no seu CRM ou numa folha de cálculo: nome, origem, data, fase, próxima data de seguimento. Envie e-mails ou SMS só a pessoas que aceitaram receber notícias suas, e siga as regras de e-mail e de SMS."
          ],
          steps: ["Planeie quatro contactos em 30 dias.", "Peça à IA para escrever cada um com espaços em branco.", "Torne-os úteis e verifique os dados de programas nas páginas oficiais.", "Registe a próxima data de seguimento de cada contacto.", "Contacte só pessoas que aceitaram."],
          words: [["Contacto (lead)", "uma pessoa que pode comprar, vender ou arrendar, mas ainda não assinou com você."], ["Toque", "um contacto com um potencial cliente: uma chamada, uma SMS ou um e-mail."]],
          slides: [
            { title: "Um plano de 30 dias", bullets: ["Dia 1: agradecimento e uma pergunta", "Dia 7: dica útil; Dia 14: retrato do mercado", "Dia 30: saber como estão"] },
            { title: "Útil, sem pressionar", bullets: ["A IA escreve com [nome próprio] e [zona]", "Links só para páginas oficiais que verificou"] },
            { title: "Registe e respeite", bullets: ["Nome, origem, fase, próxima data", "Contacte só quem aceitou"] }
          ],
          tryIt: "Peça à IA o rascunho do seu plano de seguimento de 30 dias com quatro mensagens. Ajuste cada uma à sua voz e crie uma folha de registo de contactos com uma coluna para a próxima data de seguimento.",
          youCanNow: "seguir um plano regular e útil de contacto com novos potenciais clientes.",
          quickCheck: [
            { objective: "O5", q: "No plano de exemplo, qual é a mensagem do dia 14?", options: ["Um retrato do mercado na zona deles", "Um pedido de recomendação", "Um contrato para assinar", "Um cartão de aniversário"], answer: 0, why: "O plano é: dia 1 agradecimento, dia 7 dica, dia 14 retrato do mercado, dia 30 saber como estão." },
            { objective: "O5", q: "Conheceu alguém numa festa que nunca aceitou receber notícias suas. Deve pô-lo no seu plano de SMS?", options: ["Sim, qualquer pessoa que conhece é um contacto", "Não, contacte só pessoas que aceitaram receber notícias suas", "Sim, se as mensagens forem curtas", "Sim, mas só aos fins de semana"], answer: 1, why: "Envie e-mails ou SMS só a quem aceitou, e siga as regras de e-mail e de SMS." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Resumos de mercado e preparação de visitas",
          minutes: 5,
          goal: "Transformar números de mercado que tirou num resumo claro para o cliente e preparar uma casa aberta.",
          text: [
            "Os clientes perguntam: \"Como está o mercado?\" Tire você mesmo os números do seu MLS ou de outra fonte de confiança: preço mediano, dias no mercado, número de imóveis ativos e relação entre preço de venda e preço pedido, nos últimos meses.",
            "Cole os números (sem dados de clientes) na IA e peça: \"Explique estes números de mercado a quem compra casa pela primeira vez, em palavras simples, em 150 palavras. Não acrescente números que eu não lhe dei.\" Verifique que não inventou estatísticas e acrescente a sua fonte e a data. A IA não tem dados de mercado atuais de confiança; você tem.",
            "Para visitas e casas abertas, peça à IA uma lista de verificação: antes (luzes, temperatura, folhetos, registo de visitantes), durante (segurança, receção, notas), depois (seguimento em 24 horas). Acrescente as práticas de segurança da sua imobiliária."
          ],
          steps: ["Tire números atuais do seu MLS ou de uma fonte de confiança.", "Peça à IA para os explicar em palavras simples sem acrescentar números.", "Verifique cada número e acrescente a fonte e a data.", "Peça à IA uma lista de verificação para a casa aberta e acrescente passos de segurança."],
          words: [["Preço mediano", "o preço do meio: metade das casas vendeu-se por mais, metade por menos."], ["Dias no mercado", "quanto tempo as casas levam a vender-se."], ["Relação venda/preço pedido", "o preço de venda dividido pelo preço pedido, mostrado em percentagem."]],
          slides: [
            { title: "Você tira os números", bullets: ["Preço mediano e dias no mercado", "Imóveis ativos e relação venda/preço pedido", "Do seu MLS ou de uma fonte de confiança"] },
            { title: "A IA explica", bullets: ["\"Explique em palavras simples; não acrescente números\"", "Verifique cada número; acrescente fonte e data"] },
            { title: "Lista para a casa aberta", bullets: ["Antes: luzes, folhetos, registo de visitantes", "Durante: segurança e notas", "Depois: seguimento em 24 horas"] }
          ],
          tryIt: "Tarefa final: monte o seu kit de IA de agente: uma descrição de imóvel verificada, modelos de atualização para vendedor e comprador, o plano de seguimento de 30 dias, um resumo de mercado com números que você tirou e uma lista de verificação para a casa aberta.",
          youCanNow: "explicar números de mercado com clareza e preparar visitas com ajuda da IA, usando os seus próprios dados.",
          quickCheck: [
            { objective: "O6", q: "O que compara a relação entre preço de venda e preço pedido?", options: ["A renda com a prestação da casa", "Os dias no mercado com os imóveis ativos", "Por quanto as casas se venderam com o preço por que foram anunciadas", "Os agentes com os compradores"], answer: 2, why: "Compara o preço de venda com o preço pedido." },
            { objective: "O6", q: "O resumo de mercado da IA tem um número que você não lhe deu. O que faz?", options: ["Deixa ficar; a IA tem dados atuais", "Arredonda", "Passa-o para uma nota de rodapé", "Retira-o e verifica cada número na sua fonte"], answer: 3, why: "A IA não tem dados de mercado atuais de confiança, por isso retire os números inventados e acrescente a sua fonte e a data." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Clientes, contactos e dados de mercado",
        questions: [
          { objective: "O4", q: "O que nunca deve entrar numa ferramenta de IA?", options: ["O valor de pré-aprovação e o nome de um comprador", "\"6 visitas esta semana\"", "\"A cozinha teve boas opiniões\"", "\"[nome do vendedor]\""], answer: 0, why: "Os dados financeiros dos clientes são privados." },
          { objective: "O5", q: "Qual é uma boa mensagem de seguimento no dia 7?", options: ["Nada", "Um \"Assine já!\" a pressionar", "A pontuação de crédito deles", "Uma dica útil para a situação deles"], answer: 3, why: "Contactos úteis criam confiança." },
          { objective: "O6", q: "De onde devem vir os números de mercado?", options: ["Da memória da IA", "Do seu MLS ou de outra fonte de confiança que você consultou", "De um palpite", "De um vizinho"], answer: 1, why: "A IA não tem dados de mercado atuais de confiança." },
          { objective: "O6", q: "A IA acrescenta \"os preços subiram 12% este ano\", mas você nunca lhe deu esse número. Você:", options: ["Retira-o", "Deixa ficar", "Arredonda para cima", "Publica-o"], answer: 0, why: "Não use números que você não forneceu nem verificou." },
          { objective: "O6", q: "O que é o preço mediano?", options: ["A renda média", "O preço mais alto", "O preço do meio: metade vendeu-se por mais, metade por menos", "O preço pedido"], answer: 2, why: "A mediana é o valor do meio." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para Agentes Imobiliários",
    questions: [
      { objective: "O1", q: "O que deve dar à IA para escrever um anúncio?", options: ["O número da Segurança Social do vendedor", "Só dados verificados", "Palpites", "O anúncio de um concorrente"], answer: 1, why: "Entram dados, saem palavras corretas." },
      { objective: "O1", q: "MLS quer dizer:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Os agentes partilham imóveis no MLS." },
      { objective: "O1", q: "Porque verificar a área num anúncio feito pela IA?", options: ["Não é preciso", "Para o tornar mais longo", "Por diversão", "Dados falsos podem levar a queixas e a problemas legais"], answer: 3, why: "Dados errados causam problemas." },
      { objective: "O2", q: "Quantas classes protegidas tem a Lei federal de Habitação Justa?", options: ["Três", "Sete", "Dez", "Duas"], answer: 1, why: "Raça, cor, origem nacional, religião, sexo, situação familiar, deficiência." },
      { objective: "O2", q: "Qual é uma característica do imóvel, e não uma preferência sobre pessoas?", options: ["\"Sem crianças\"", "\"Ideal para um casal\"", "\"Tudo num só piso\"", "\"Ótimo para jovens profissionais\""], answer: 2, why: "Descreve a casa." },
      { objective: "O2", q: "Porque pode a IA escrever problemas de habitação justa?", options: ["Pode copiar padrões com preconceito daquilo com que aprendeu", "Conhece perfeitamente a lei de habitação justa", "Nunca erra", "É um advogado"], answer: 0, why: "Reveja sempre o que a IA escreve." },
      { objective: "O2", q: "A Califórnia protege mais grupos do que a lei federal?", options: ["Só aos fins de semana", "Não, nunca", "Sim; verifique as regras do seu estado", "Só para arrendamentos"], answer: 2, why: "Muitos estados, incluindo a Califórnia, protegem mais grupos." },
      { objective: "O3", q: "Os anúncios de licenciados muitas vezes têm de incluir:", options: ["Número da licença e nome da imobiliária, segundo as regras do estado e do corretor", "A morada da sua casa", "Nomes de clientes", "Nada"], answer: 0, why: "Verifique as regras de publicidade do seu estado." },
      { objective: "O3", q: "Um e-mail de marketing para o seu círculo tem de incluir:", options: ["As condições das ofertas dos clientes", "Uma morada postal e uma opção de cancelar a subscrição", "Um remetente falso", "Nada"], answer: 1, why: "A CAN-SPAM exige as duas coisas." },
      { objective: "O3", q: "O que é o seu círculo?", options: ["Um credor", "Um objeto redondo", "O MLS", "Pessoas que você conhece que podem comprar, vender ou recomendar"], answer: 3, why: "Antigos clientes, amigos e família." },
      { objective: "O4", q: "Uma atualização semanal para o vendedor inclui:", options: ["Visitas, opiniões, visualizações e um próximo passo", "As finanças de outros clientes", "A sua palavra-passe", "Nada"], answer: 0, why: "Isto mantém os vendedores informados." },
      { objective: "O4", q: "Qual é um marcador?", options: ["Um número da Segurança Social", "O nome completo e a morada do vendedor", "Um número de conta bancária", "[nome do vendedor]"], answer: 3, why: "Os marcadores mantêm os dados privados de fora." },
      { objective: "O4", q: "A estratégia de negociação deve ser:", options: ["Publicada na internet", "Colada em conversas", "Mantida fora das ferramentas de IA", "Partilhada com todos os compradores"], answer: 2, why: "É informação confidencial do cliente." },
      { objective: "O5", q: "Um plano de seguimento de 30 dias tem cerca de:", options: ["Cem chamadas", "Quatro contactos úteis", "Nenhum", "SMS diárias a pressionar"], answer: 1, why: "Regular e útil funciona melhor." },
      { objective: "O5", q: "A quem deve enviar e-mails ou SMS de marketing?", options: ["A desconhecidos", "A qualquer pessoa cujo número encontre", "A listas compradas", "A pessoas que aceitaram receber notícias suas"], answer: 3, why: "A autorização vem primeiro." },
      { objective: "O5", q: "Antes de pôr o link de um programa para quem compra casa pela primeira vez, você:", options: ["Adivinha as regras", "Confia no link da IA", "Verifica a página oficial do programa", "Não verifica"], answer: 2, why: "Os dados dos programas mudam." },
      { objective: "O6", q: "Os dias no mercado medem:", options: ["Quanto tempo as casas levam a vender-se", "O horário da casa aberta", "Os dias de comissão", "Os feriados"], answer: 0, why: "Mostram a rapidez do mercado." },
      { objective: "O6", q: "Quando a IA explica números de mercado, deve dizer-lhe:", options: ["Invente mais números", "Não acrescente números que eu não lhe dei", "Adivinhe o futuro", "Use qualquer site"], answer: 1, why: "Isto reduz as estatísticas inventadas." },
      { objective: "O6", q: "Quando deve fazer o seguimento depois de uma casa aberta?", options: ["No próximo ano", "Em 24 horas", "Nunca", "Só se ligarem"], answer: 1, why: "Um seguimento rápido ganha clientes." },
      { objective: "O2", q: "Este curso é:", options: ["Não é aconselhamento jurídico; verifique no HUD, no regulador do seu estado e com o corretor", "Aconselhamento jurídico", "Uma licença", "Um contrato"], answer: 0, why: "As fontes oficiais e o seu corretor têm a última palavra." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 3, 5, 7, 11, 13, 17]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Anúncio correto", objective: "O1", notYet: "O anúncio tem um dado que não foi verificado, como uma característica que a casa não tem.", meets: "Cada dado foi verificado linha a linha nos registos, com o vendedor ou na sua visita.", exceeds: "Indica a fonte dos dados principais, como a área." },
      { name: "Linguagem de habitação justa", objective: "O2", notYet: "Uma linha descreve quem deve viver lá em vez do imóvel.", meets: "Cada linha descreve só o imóvel e as suas características.", exceeds: "Também verifica as fotos e onde põe o anúncio, e sabe explicar cada correção." },
      { name: "Atualizações privadas para clientes", objective: "O4", notYet: "O nome de um cliente com morada, um dado financeiro ou as condições de uma oferta entraram na ferramenta de IA.", meets: "Os modelos de atualização para vendedor e comprador usam marcadores, com um próximo passo claro.", exceeds: "Os marcadores só são preenchidos no e-mail ou no CRM do próprio agente." },
      { name: "Plano de seguimento de contactos", objective: "O5", notYet: "Menos de quatro mensagens, ou mensagens que pressionam ou não foram verificadas.", meets: "Quatro mensagens úteis em 30 dias, com espaços em branco e uma próxima data registada.", exceeds: "Os links de programas foram verificados em páginas oficiais e anotados." },
      { name: "Resumo de mercado e casa aberta", objective: "O6", notYet: "O resumo tem um número que não veio da sua fonte.", meets: "Resumo em palavras simples com os seus próprios números, a fonte e a data, mais uma lista de verificação para a casa aberta.", exceeds: "A lista inclui os passos de segurança da imobiliária e o seguimento em 24 horas." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Agentes que dizem usar um plano regular de seguimento de contactos em 30 dias (inquérito de seguimento)",
      "Agentes que dizem poupar tempo todas as semanas com anúncios e atualizações para clientes",
      "Alunos que começam outro curso de pequenos negócios da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet",
      "Um assistente de IA gratuito",
      "Dados verificados de um imóvel real ou de exemplo e números recentes do seu MLS",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Lembre aos alunos que este curso não é aconselhamento jurídico; as perguntas sobre habitação justa, publicidade e licenças vão para o HUD, o regulador estadual e o seu corretor.",
      "Faça um exercício em grupo: leiam em voz alta anúncios de exemplo feitos pela IA e encontrem juntos os riscos de habitação justa.",
      "Use anúncios de exemplo e marcadores na aula; nunca cole dados privados reais de clientes em ferramentas de IA.",
      "Peça aos alunos para verificarem a política da sua imobiliária sobre ferramentas de IA antes de as usarem com clientes.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
