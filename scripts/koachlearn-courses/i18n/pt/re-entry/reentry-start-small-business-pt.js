"use strict";

// Koach Learn course (Portuguese translation of re-entry/reentry-start-small-business.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the United States (SBA, IRS, EIN, DBA, LLC, SCORE, SBDC); US names are kept and explained.

module.exports = {
  id: "reentry-start-small-business-pt",
  lang: "pt",
  translationOf: "reentry-start-small-business",
  category: "Re-Entry",
  name: "Como Montar e Começar um Pequeno Negócio",
  skills: "Escolher um negócio que pode começar já, Encontrar clientes e definir um preço, Escrever um plano de negócio de uma página com IA, Escolher a estrutura e o nome do negócio, Obter um EIN gratuito e as licenças certas, Manter registos e planear os impostos",
  outcome: "escrever um plano de negócio de uma página para um negócio simples de serviços com a ajuda da IA, e fazer uma lista de passos para montar o negócio com os passos oficiais dos Estados Unidos: estrutura e nome do negócio, um EIN gratuito do IRS, as licenças que a sua cidade, o seu condado e o seu estado exigem, uma conta bancária separada e registos para os impostos.",
  about: [
    "Muitas pessoas que voltam para casa escolhem trabalhar por conta própria: limpezas, cuidar de jardins, ajudar em mudanças, lavar e limpar carros a fundo, barbearia, cozinha, pintura, pequenas reparações e muito mais. Ter um negócio pode dar-lhe rendimento, independência e um futuro, mesmo quando alguns empregadores demoram a contratar.",
    "No Capítulo 1 vai escolher uma ideia de negócio que combine com as suas habilidades, descobrir quem são os seus clientes e quanto cobrar, e escrever um plano de uma página com um assistente de IA. No Capítulo 2 vai aprender os passos oficiais para montar o negócio nos Estados Unidos: estrutura do negócio, nome, um EIN gratuito do IRS, licenças, uma conta bancária, registos e impostos, e onde encontrar ajuda gratuita.",
    "As regras mudam de estado para estado, de condado para condado e de cidade para cidade, e mudam com o tempo. Este curso dá-lhe os passos e os sites oficiais onde verificar, como sba.gov e irs.gov; não é aconselhamento jurídico nem fiscal. Nunca escreva na IA o seu número da Segurança Social, detalhes do seu processo ou dados bancários. Cada lição dura cerca de cinco minutos. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de negócio de uma página para um negócio simples de serviços com a ajuda da IA (serviço, clientes, preço, como os clientes vão encontrar você, custos iniciais). Depois faça a sua lista de passos: a estrutura do negócio, o nome do negócio e se precisa de um DBA, obter um EIN gratuito em irs.gov, as licenças a verificar com a sua cidade, o seu condado e o seu estado, abrir uma conta bancária separada, e como vai manter registos e guardar dinheiro para os impostos. Inclua o site oficial de cada passo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração) e querem trabalhar por conta própria com um negócio simples de serviços, como limpezas, cuidar de jardins, ajudar em mudanças, limpar carros a fundo, barbearia, cozinha, pintura ou pequenas reparações.",
    startingPoint: "Têm habilidades práticas e sabem usar um telefone. Pouca ou nenhuma experiência com planos de negócio, preços, registo de negócios, EIN, licenças, contas bancárias de empresa ou registos para os impostos.",
    gap: "Alguns empregadores demoram a contratar pessoas com registo criminal, e trabalhar por conta própria pode dar rendimento e independência. Os alunos precisam de transformar uma habilidade num negócio planeado e de seguir os passos oficiais dos Estados Unidos, para evitarem burlas, multas e problemas com os impostos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca com internet",
      "Tempo: lições de cerca de 5 minutos, que cabem entre o trabalho e as consultas",
      "As regras mudam de estado, condado e cidade, e mudam com o tempo; o curso indica sites oficiais e não é aconselhamento jurídico nem fiscal",
      "Privacidade: nunca escrever na IA um número da Segurança Social, detalhes do processo ou dados bancários"
    ],
    prerequisites: "O curso \"Gestão do Dinheiro e da Vida com IA\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as suas habilidades e o dinheiro com que poderia começar", action: "escolher uma ideia de negócio que combine com as suas habilidades, o seu dinheiro e a sua situação", standard: "com custos iniciais baixos e qualquer licença estadual necessária já verificada" },
    { id: "O2", condition: "Com a sua ideia de negócio", action: "descrever os seus clientes e definir um preço inicial", standard: "com uma frase concreta sobre os clientes e um preço que cubra os custos, o tempo e os impostos" },
    { id: "O3", condition: "Usando um assistente de IA que lhe faz perguntas", action: "escrever um plano de negócio de uma página", standard: "com o serviço, os clientes, o preço, como os clientes encontram você e os custos iniciais, com os dados dados por você" },
    { id: "O4", condition: "Com a sua ideia de negócio e o nome", action: "escolher uma estrutura de negócio e descobrir se o seu nome precisa de um DBA", standard: "com o motivo da sua escolha e a página oficial do governo encontrada" },
    { id: "O5", condition: "Usando irs.gov e os sites do seu governo local", action: "encontrar o pedido gratuito do EIN e as licenças de que o seu negócio precisa", standard: "com o endereço oficial de cada um, e sem nenhum serviço pago de EIN" },
    { id: "O6", condition: "Com um negócio novo", action: "planear uma conta bancária separada, registos simples, dinheiro para os impostos e ajuda gratuita", standard: "com um registo que tenha data, quem, o quê e quanto, e o SCORE ou SBDC mais perto indicado pelo nome" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear o seu negócio",
      lessons: [
        {
          objectives: ["O1"],
          title: "Escolher um negócio que pode começar já",
          minutes: 5,
          goal: "Escolher uma ideia de negócio que combine com as suas habilidades, o seu dinheiro e a sua situação.",
          text: [
            "O melhor primeiro negócio é muitas vezes simples: um serviço que você já sabe fazer, que precisa de pouco dinheiro para começar e pelo qual as pessoas da sua zona pagam. Exemplos: limpeza de casas ou escritórios, cuidar de jardins, lavagem com jato de pressão, recolha de lixo e entulho, ajuda em mudanças, limpeza de carros a fundo, pintura, cozinha, cabeleireiro, costura ou reparações.",
            "Peça a um assistente de IA para o ajudar a pensar: \"Aprendi a cozinhar e a limpar e tenho cerca de $300 para começar. Ainda não tenho carro. Sugira cinco pequenos negócios de serviços que eu podia começar na minha cidade, com o que cada um precisa para começar.\"",
            "Alguns trabalhos precisam de uma licença do estado, como barbearia, cosmética, trabalhos de eletricidade ou de construção, e alguns conselhos de licenciamento têm regras sobre pessoas com registo criminal. Antes de escolher um destes, veja o site oficial do conselho de licenciamento do seu estado ou pergunte a um programa de reintegração. Muitos estados mudaram estas regras, por isso não pense logo que está impedido."
          ],
          steps: ["Escreva as suas habilidades e o que gosta de fazer.", "Anote o dinheiro e as ferramentas que tem para começar, como um carro.", "Peça à IA algumas ideias de negócio que combinem.", "Veja se a ideia precisa de uma licença do estado.", "Escolha uma ideia para planear."],
          words: [["Negócio de serviços", "um negócio que faz trabalho para as pessoas, como limpezas ou reparações, em vez de vender produtos."], ["Custos iniciais", "o dinheiro de que precisa para começar, como ferramentas e materiais."], ["Conselho de licenciamento", "o serviço do estado que dá licenças para alguns trabalhos."]],
          slides: [
            { title: "Comece simples", bullets: ["Um serviço que já sabe fazer", "Pouco dinheiro para começar", "As pessoas perto de você pagam por ele"] },
            { title: "Peça ideias à IA", bullets: ["As suas habilidades", "O seu orçamento e as suas ferramentas", "\"Sugira cinco negócios que eu podia começar.\""] },
            { title: "Trabalho com licença?", bullets: ["Barbearia, eletricidade, construção e outros", "Veja o conselho de licenciamento do seu estado", "As regras mudaram em muitos estados"] }
          ],
          tryIt: "Escreva as suas três principais habilidades e quanto dinheiro tem para começar. Peça a um assistente de IA cinco ideias de pequenos negócios que combinem, e depois escolha uma.",
          youCanNow: "escolher uma ideia de pequeno negócio que combine com as suas habilidades e o seu dinheiro.",
          quickCheck: [
            { objective: "O1", q: "O que são custos iniciais?", options: ["O dinheiro necessário para começar, como ferramentas e materiais", "O seu lucro semanal", "Os impostos que deve todos os anos", "O preço que cobra aos clientes"], answer: 0, why: "Os custos iniciais são o que gasta para pôr o negócio a funcionar." },
            { objective: "O1", q: "Quer começar um negócio de reparações elétricas. O que faz primeiro?", options: ["Começa logo a aceitar trabalhos", "Pergunta à IA se precisa de licença e confia na resposta", "Vê o site oficial do conselho de licenciamento do seu estado", "Imprime cartões de visita"], answer: 2, why: "Muitos ofícios precisam de uma licença do estado, e o conselho oficial tem as regras verdadeiras." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Clientes e preços",
          minutes: 5,
          goal: "Descrever os seus clientes e definir um preço inicial que cubra os seus custos.",
          text: [
            "Um negócio precisa de clientes que paguem. Diga com clareza quem são: \"famílias ocupadas do meu bairro\", \"pequenos escritórios no centro da cidade\", \"donos de casa mais velhos que não conseguem cortar a relva\". Saber quem são diz-lhe onde os encontrar.",
            "Para definir um preço, some os seus custos de um trabalho (materiais, combustível ou bilhete de autocarro, e o seu tempo) e depois veja quanto cobram outros perto de você. Pergunte à IA: \"Quero oferecer limpeza básica de casas em Atlanta. Os meus materiais custam cerca de $10 por trabalho e um trabalho leva 3 horas. Como posso calcular um preço inicial justo? O que preciso de verificar sobre os preços locais?\" Depois veja preços locais verdadeiros em anúncios locais ou a ligar para algumas empresas.",
            "Não cobre tão pouco que perca dinheiro. Um preço deve pagar os seus custos, o seu tempo e um pouco mais para os impostos e para poupar."
          ],
          steps: ["Descreva os seus clientes numa frase.", "Some os seus custos de um trabalho.", "Decida quanto vale o seu tempo por hora.", "Veja quanto cobram outros perto de você.", "Defina um preço que cubra os custos, o tempo e os impostos."],
          words: [["Cliente", "uma pessoa ou empresa que paga pelo seu serviço."], ["Lucro", "o dinheiro que sobra depois de pagar os seus custos."]],
          slides: [
            { title: "Conheça os seus clientes", bullets: ["Seja concreto", "\"Famílias ocupadas do meu bairro\"", "Isso diz-lhe onde os encontrar"] },
            { title: "Calcule o seu preço", bullets: ["Custos de um trabalho", "O seu tempo", "Quanto cobram outros perto de você"] },
            { title: "Não cobre pouco demais", bullets: ["Cubra os custos e o tempo", "Deixe espaço para os impostos e para poupar"] }
          ],
          tryIt: "Para a sua ideia, escreva uma frase a descrever os seus clientes. Peça à IA para o ajudar a calcular um preço inicial a partir dos seus custos e do seu tempo, e depois veja dois preços locais verdadeiros.",
          youCanNow: "descrever os seus clientes e definir um preço inicial que cubra os seus custos.",
          quickCheck: [
            { objective: "O2", q: "O que é lucro?", options: ["Todo o dinheiro que os clientes lhe pagam", "O dinheiro que sobra depois dos custos", "O custo das suas ferramentas", "Dinheiro que pede emprestado"], answer: 1, why: "O lucro é o que fica depois de pagar os seus custos." },
            { objective: "O2", q: "A IA sugere um preço para cuidar de jardins que parece muito baixo. O que faz?", options: ["Usa-o para ter mais clientes", "Duplica-o sem pensar", "Pede a amigos para adivinharem um preço", "Verifica os seus custos e o seu tempo, e compara com dois preços locais verdadeiros"], answer: 3, why: "Um preço tem de cobrir os seus custos e o seu tempo, e os preços locais mostram quanto os clientes pagam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Um plano de negócio de uma página com IA",
          minutes: 6,
          goal: "Escrever um plano de negócio de uma página com um assistente de IA.",
          text: [
            "Um plano de negócio é o seu mapa. A SBA (a agência do governo dos EUA para pequenas empresas) descreve um plano curto de \"arranque enxuto\" (em inglês, \"lean startup\") que cabe numa página, com coisas como os seus clientes, o valor que oferece, como chega aos clientes, os seus custos e como ganha dinheiro.",
            "Pergunte à IA: \"Ajude-me a escrever um plano de negócio de uma página para um negócio de cuidar de jardins na minha cidade. Use estes títulos: o que ofereço, quem são os meus clientes, porque me escolheriam, como me vão encontrar, custos iniciais, preço e o meu objetivo para o primeiro mês. Faça-me perguntas uma de cada vez para o preencher.\" Responda com as suas palavras.",
            "Leia o plano final com atenção. Mude tudo o que não for verdade ou não for realista. Pode mostrá-lo a um mentor; o SCORE oferece mentoria gratuita (veja a Lição 6)."
          ],
          steps: ["Peça à IA para lhe fazer perguntas uma de cada vez.", "Use títulos simples: oferta, clientes, porquê você, como o encontram, custos, preço, primeiro objetivo.", "Responda com as suas palavras.", "Corrija tudo o que não for realista.", "Guarde-o e mostre-o a um mentor."],
          words: [["Plano de negócio", "um plano escrito sobre como o seu negócio vai funcionar e ganhar dinheiro."], ["Plano de arranque enxuto", "um plano de negócio curto, de uma página (em inglês, \"lean startup plan\")."]],
          slides: [
            { title: "O seu mapa de uma página", bullets: ["O plano de arranque enxuto da SBA cabe numa página", "Clientes, valor, como chegar a eles, custos, dinheiro"] },
            { title: "Deixe a IA fazer-lhe perguntas", bullets: ["\"Faça-me uma pergunta de cada vez.\"", "Responda com as suas palavras"] },
            { title: "Torne-o real", bullets: ["Corrija o que não for realista", "Mostre-o a um mentor"] }
          ],
          sources: [{ name: "SBA: Escrever o seu plano de negócio (em inglês)", url: "https://www.sba.gov/business-guide/plan-your-business/write-your-business-plan" }],
          tryIt: "Peça a um assistente de IA para lhe fazer perguntas uma de cada vez e escrever um plano de uma página para a sua ideia de negócio. Guarde o plano.",
          youCanNow: "escrever um plano de negócio de uma página com a ajuda da IA.",
          quickCheck: [
            { objective: "O3", q: "O que é um plano de negócio de arranque enxuto?", options: ["Um relatório de 50 páginas para um banco", "Um plano curto, de uma página", "Uma lista de nomes de negócios", "Um formulário de impostos"], answer: 1, why: "Um plano enxuto põe as partes principais de um negócio numa página." },
            { objective: "O3", q: "A IA escreveu o seu plano e pôs um número de clientes que você nunca deu. O que faz?", options: ["Tira-o ou troca-o pelos seus dados verdadeiros", "Deixa-o porque fica bonito", "Acrescenta mais números assim", "Envia o plano a quem empresta dinheiro tal como está"], answer: 0, why: "Os dados do seu plano vêm de você, não da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear o seu negócio",
        questions: [
          { objective: "O1", q: "Qual é normalmente o melhor primeiro negócio?", options: ["Um sobre o qual não sabe nada", "Um negócio que precisa de $100,000 para começar", "Um serviço simples que já sabe fazer, com custos iniciais baixos", "Um sem clientes perto"], answer: 2, why: "Custos baixos e habilidades que já tem diminuem o risco." },
          { objective: "O1", q: "Quer ser barbeiro. O que deve verificar primeiro?", options: ["As regras do conselho de licenciamento do seu estado", "Nada", "Um boato nas redes sociais", "Só a IA"], answer: 0, why: "A barbearia precisa de uma licença do estado, e os conselhos definem as regras." },
          { objective: "O2", q: "Que descrição de clientes é mais útil?", options: ["\"Qualquer pessoa com dinheiro\"", "\"Toda a gente\"", "\"Pessoas\"", "\"Donos de casa mais velhos do meu bairro que não conseguem cortar a relva\""], answer: 3, why: "Clientes concretos dizem-lhe onde os encontrar." },
          { objective: "O2", q: "Um bom preço cobre:", options: ["Só os materiais", "Os seus custos, o seu tempo e algo para os impostos", "Nada; trabalhe de graça", "O que o concorrente mais barato cobrar, mesmo com prejuízo"], answer: 1, why: "Os preços têm de cobrir os custos e pagar o seu trabalho." },
          { objective: "O3", q: "Como pode a IA ajudar melhor a escrever um plano de negócio?", options: ["Inventar dados sobre o seu negócio", "Fazer-lhe perguntas uma de cada vez", "Assinar documentos legais", "Obter o EIN por você"], answer: 1, why: "Você dá os dados; a IA organiza-os." }
        ]
      }
    },
    {
      name: "Capítulo 2: Montar o negócio da forma oficial",
      lessons: [
        {
          objectives: ["O4"],
          title: "Estrutura do negócio e nome do negócio",
          minutes: 6,
          goal: "Escolher uma estrutura de negócio e descobrir se o nome do seu negócio precisa de ser registado.",
          text: [
            "A SBA explica que, se começar a fazer negócio sem se registar como outro tipo, fica automaticamente como empresário em nome individual (em inglês, \"sole proprietorship\"). É o mais simples: você e o negócio são o mesmo para os impostos e as dívidas, por isso você é pessoalmente responsável pelas dívidas do negócio.",
            "Uma sociedade de responsabilidade limitada (LLC) é registada no seu estado, normalmente através do Secretário de Estado (Secretary of State), e em geral protege os seus bens pessoais se o negócio for processado ou ficar com dívidas, embora essa proteção tenha limites. Custa dinheiro a criar e pode ter taxas anuais, que mudam de estado para estado; veja o custo atual no site do Secretário de Estado do seu estado.",
            "Se usar um nome de negócio que não é o seu nome legal, como \"Fresh Start Cleaning\", a maioria dos estados exige que o registe como DBA (\"doing business as\", ou seja, \"a fazer negócio como\") no estado, no condado ou na cidade. Se fizer negócio com o seu próprio nome legal, a SBA diz que pode não precisar de se registar em lado nenhum. Pergunte a um profissional de impostos ou a um parceiro da SBA que estrutura serve para você."
          ],
          steps: ["Decida: empresário em nome individual (automático) ou LLC (registada no estado).", "Para uma LLC, veja os custos no site do Secretário de Estado do seu estado.", "Escolha um nome para o negócio.", "Se não for o seu nome legal, descubra onde registar um DBA no seu estado, condado ou cidade.", "Se tiver dúvidas, pergunte a um profissional de impostos ou a um parceiro da SBA."],
          words: [["Empresário em nome individual", "um negócio de uma só pessoa, sem separação entre o dono e o negócio (em inglês, \"sole proprietorship\")."], ["LLC", "limited liability company, sociedade de responsabilidade limitada: um negócio registado que em geral protege os bens pessoais do dono."], ["DBA", "\"doing business as\": um nome de negócio registado que não é o seu nome legal."]],
          slides: [
            { title: "Empresário em nome individual", bullets: ["Automático quando começa a fazer negócio", "O mais simples", "Você é pessoalmente responsável pelas dívidas"] },
            { title: "LLC", bullets: ["Registada no seu estado", "Em geral protege os bens pessoais", "Os custos mudam por estado: veja o Secretário de Estado"] },
            { title: "O nome do seu negócio", bullets: ["Não é o seu nome legal? Normalmente registe um DBA", "No seu estado, condado ou cidade", "As regras mudam: verifique no seu local"] }
          ],
          sources: [{ name: "SBA: Escolher uma estrutura de negócio (em inglês)", url: "https://www.sba.gov/business-guide/launch-your-business/choose-business-structure" }, { name: "SBA: Registar o seu negócio (em inglês)", url: "https://www.sba.gov/business-guide/launch-your-business/register-your-business" }],
          tryIt: "Decida se começaria como empresário em nome individual ou como LLC, e escreva porquê. Escolha um nome de negócio e depois pesquise \"register DBA\" mais o seu condado ou estado e encontre a página oficial do governo (muitas vezes acaba em .gov).",
          youCanNow: "escolher uma estrutura de negócio e descobrir como registar o nome do seu negócio.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer DBA?", options: ["Daily business account (conta diária do negócio)", "Department of business affairs (departamento de assuntos comerciais)", "Doing business as (a fazer negócio como)", "Direct bank authorization (autorização bancária direta)"], answer: 2, why: "DBA quer dizer \"doing business as\", um nome diferente do seu nome legal." },
            { objective: "O4", q: "Quer chamar ao seu negócio \"Shine Car Care\". O que faz?", options: ["Usa-o sem verificar nada", "Procura a página oficial de DBA do seu condado ou estado", "Paga a um site qualquer para o registar", "Pede à IA para o registar por você"], answer: 1, why: "A maioria dos estados exige registar, num site oficial, um nome de negócio que não é o seu nome legal." }
          ]
        },
        {
          objectives: ["O5"],
          title: "O seu EIN gratuito e as licenças certas",
          minutes: 6,
          goal: "Encontrar o pedido gratuito do EIN no IRS e as licenças e autorizações de que o seu negócio precisa.",
          text: [
            "Um EIN (Employer Identification Number, número de identificação de empregador) é um número fiscal para o seu negócio. O IRS (a agência de impostos dos EUA) diz \"You never have to pay a fee for an EIN\", ou seja, nunca tem de pagar uma taxa por um EIN, e avisa sobre sites que cobram por ele. Faça o pedido diretamente em irs.gov. Se for aprovado, o número sai logo pela internet. Tem de terminar numa só sessão, por isso reserve tempo; a ferramenta na internet só está aberta em certas horas, indicadas em irs.gov. Os empresários em nome individual sem empregados muitas vezes podem usar o número da Segurança Social, mas muitos pedem um EIN para separar o negócio da vida pessoal.",
            "As licenças e autorizações vêm de níveis diferentes do governo. A SBA explica que as licenças federais são só para certas atividades (como álcool ou aviação); os estados dão licenças para muitos ofícios; e as cidades e os condados muitas vezes exigem uma licença comercial geral e autorizações para coisas como comida, construção ou venda na rua.",
            "Para encontrar as suas: veja os sites da sua cidade e do seu condado para a licença comercial, o site do seu estado para licenças de ofício e para o registo do imposto sobre vendas se vender produtos, e pergunte ao Centro de Desenvolvimento de Pequenas Empresas (SBDC) da sua zona. Escreva os seus números verdadeiros só nos sites oficiais .gov, nunca na IA."
          ],
          steps: ["Vá a irs.gov e pesquise \"apply for an EIN\"; nunca pague a um site por um.", "Veja as horas em que está aberto e termine numa só sessão.", "Imprima ou guarde a confirmação do seu EIN.", "Veja na sua cidade e no seu condado a licença comercial e as autorizações.", "Veja no seu estado as licenças de ofício e o registo do imposto sobre vendas."],
          words: [["EIN", "Employer Identification Number: um número fiscal gratuito para um negócio, dado pelo IRS."], ["Licença", "permissão oficial do governo para ter um negócio ou fazer certos trabalhos."], ["Autorização", "permissão oficial para uma atividade concreta, como vender comida (em inglês, \"permit\")."]],
          slides: [
            { title: "EIN: gratuito no IRS", bullets: ["\"You never have to pay a fee for an EIN\": nunca paga taxa", "Peça em irs.gov, sai logo pela internet", "Termine numa só sessão, nas horas em que está aberto"] },
            { title: "As licenças vêm de 3 níveis", bullets: ["Federal: só certas atividades", "Estado: muitos ofícios, imposto sobre vendas", "Cidade e condado: licença comercial, autorizações"] },
            { title: "Encontre as suas", bullets: ["Sites da cidade e do condado", "Site do estado", "Pergunte ao SBDC da sua zona"] }
          ],
          sources: [{ name: "IRS: Obter um número de identificação de empregador (em inglês)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" }, { name: "SBA: Pedir licenças e autorizações (em inglês)", url: "https://www.sba.gov/business-guide/launch-your-business/apply-licenses-permits" }],
          tryIt: "Abra a página do EIN em irs.gov e anote as horas em que está aberto e o que precisa para fazer o pedido (ainda não faça o pedido, a não ser que esteja pronto). Depois encontre a página da licença comercial da sua cidade ou condado e anote o endereço.",
          youCanNow: "obter um EIN gratuito do IRS e encontrar as licenças e autorizações de que o seu negócio precisa.",
          quickCheck: [
            { objective: "O5", q: "De onde vem normalmente uma licença comercial geral?", options: ["Do IRS", "Do seu banco", "De um site privado", "Da sua cidade ou do seu condado"], answer: 3, why: "As licenças comerciais gerais são normalmente dadas pela sua cidade ou pelo seu condado." },
            { objective: "O5", q: "Um site oferece-se para lhe obter um EIN por $150. O que faz?", options: ["Paga porque é mais rápido", "Faz o pedido de graça em irs.gov", "Pede a um amigo para pagar", "Nunca obtém um EIN"], answer: 1, why: "O IRS dá os EIN de graça no seu próprio site." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Conta bancária, registos, impostos e ajuda gratuita",
          minutes: 6,
          goal: "Montar registos simples do dinheiro, planear os impostos e encontrar ajuda gratuita para o negócio.",
          text: [
            "Mantenha o dinheiro do negócio separado. A SBA recomenda abrir uma conta bancária do negócio assim que começar a receber ou a gastar dinheiro com o negócio. Os bancos costumam pedir um EIN (ou o seu número da Segurança Social, se for empresário em nome individual), os documentos de criação do negócio e uma licença comercial; pergunte ao seu banco o que ele pede.",
            "Registe cada dólar que entra e sai: uma folha de cálculo simples ou um caderno com a data, quem, o quê e quanto, mais os recibos. A IA pode desenhar uma folha de registo simples para você: \"Faça-me um registo simples de receitas e despesas para um negócio de limpezas.\" Não cole lá dados bancários verdadeiros.",
            "Impostos: o IRS diz que quem trabalha por conta própria tem de entregar a declaração de impostos se o rendimento líquido for de $400 ou mais, e em geral paga o imposto de trabalho por conta própria (Segurança Social e Medicare) além do imposto sobre o rendimento, muitas vezes em pagamentos estimados de três em três meses. Os formulários incluem o Schedule C, o Schedule SE e o Form 1040-ES. Muitos donos guardam parte de cada pagamento para os impostos; um profissional de impostos ou a ajuda fiscal gratuita pode dizer-lhe quanto. Ajuda gratuita para o negócio: o SCORE oferece mentores voluntários sem custo, e os Centros de Desenvolvimento de Pequenas Empresas (SBDC) e os Centros de Negócios para Mulheres (Women's Business Centers) oferecem aconselhamento; encontre-os em sba.gov."
          ],
          steps: ["Abra uma conta bancária separada para o negócio; pergunte ao banco o que precisa.", "Registe cada dólar que entra e sai, com os recibos.", "Guarde parte de cada pagamento para os impostos.", "Conheça os formulários em irs.gov: Schedule C, Schedule SE, 1040-ES.", "Peça ajuda gratuita ao SCORE, a um SBDC ou a um Women's Business Center."],
          words: [["Imposto de trabalho por conta própria", "o imposto da Segurança Social e do Medicare que pagam as pessoas que trabalham por conta própria (em inglês, \"self-employment tax\")."], ["Imposto estimado", "imposto pago durante o ano, normalmente de três em três meses, quando nenhum empregador o desconta (em inglês, \"estimated tax\")."], ["Despesa", "dinheiro que gasta para fazer o negócio funcionar."]],
          slides: [
            { title: "Separe o dinheiro do negócio", bullets: ["Abra uma conta bancária do negócio", "Os bancos pedem EIN ou SSN, documentos, licença"] },
            { title: "Mantenha registos", bullets: ["Cada dólar que entra e sai", "Data, quem, o quê, quanto, recibos", "A IA pode desenhar o registo; sem dados bancários"] },
            { title: "Planeie os impostos", bullets: ["Declare se o rendimento líquido for de $400 ou mais", "Imposto de trabalho por conta própria mais imposto sobre o rendimento", "Schedule C, Schedule SE, 1040-ES"] },
            { title: "Ajuda gratuita", bullets: ["Mentores do SCORE sem custo", "Centros de Desenvolvimento de Pequenas Empresas (SBDC)", "Encontre-os em sba.gov"] }
          ],
          sources: [{ name: "SBA: Abrir uma conta bancária do negócio (em inglês)", url: "https://www.sba.gov/business-guide/launch-your-business/open-business-bank-account" }, { name: "IRS: Centro de impostos para trabalhadores por conta própria (em inglês)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }, { name: "SBA: Parceiros de apoio (em inglês)", url: "https://www.sba.gov/local-assistance/resource-partners" }],
          tryIt: "Tarefa final: termine o seu plano de uma página e faça a sua lista de passos com um site oficial para cada passo: estrutura, nome e DBA, EIN gratuito em irs.gov, licenças da cidade, do condado e do estado, uma conta bancária separada, um registo feito com IA, dinheiro guardado para os impostos, e o SCORE ou SBDC mais perto.",
          youCanNow: "planear um pequeno negócio e montá-lo da forma oficial, com registos, um plano para os impostos e ajuda gratuita.",
          quickCheck: [
            { objective: "O6", q: "O que deve ter um bom registo do negócio?", options: ["Data, quem, o quê e quanto, com os recibos", "Só o total do ano", "O seu número da Segurança Social", "Só o dinheiro que recebeu"], answer: 0, why: "Registos claros com recibos ajudam na altura dos impostos e mostram como vai o negócio." },
            { objective: "O6", q: "Recebe em dinheiro vivo por um trabalho de limpeza. O que faz?", options: ["Gasta tudo logo", "Não regista porque é dinheiro vivo", "Regista, põe na conta do negócio e guarda uma parte para os impostos", "Põe na conta de um amigo"], answer: 2, why: "Registar o que recebe, manter o dinheiro do negócio separado e guardar para os impostos evita problemas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Montar o negócio da forma oficial",
        questions: [
          { objective: "O4", q: "Começa a limpar casas sem registar nenhum tipo de negócio. Você é:", options: ["Uma organização sem fins lucrativos", "Uma LLC", "Uma sociedade anónima", "Um empresário em nome individual"], answer: 3, why: "A SBA diz que o empresário em nome individual surge automaticamente." },
          { objective: "O4", q: "O nome do seu negócio é \"Fresh Start Cleaning\", não o seu nome legal. A maioria dos estados exige:", options: ["Registá-lo como DBA", "Nunca nada", "Uma licença federal", "Primeiro uma marca registada"], answer: 0, why: "Um nome comercial normalmente tem de ser registado como DBA." },
          { objective: "O5", q: "Quanto cobra o IRS por um EIN?", options: ["$250", "$50", "Nada; é gratuito", "Depende do site"], answer: 2, why: "O IRS diz que nunca tem de pagar uma taxa por um EIN." },
          { objective: "O5", q: "De onde vem normalmente uma licença comercial geral?", options: ["De um site privado", "Do IRS", "Da FAA (a agência de aviação)", "Da sua cidade ou do seu condado"], answer: 3, why: "As cidades e os condados dão as licenças comerciais gerais." },
          { objective: "O6", q: "Quem trabalha por conta própria tem de entregar a declaração de impostos se o rendimento líquido for:", options: ["Nunca", "$40,000 ou mais", "$400 ou mais", "Só acima de $1 milhão"], answer: 2, why: "O IRS fixa o limite em $400 de rendimento líquido de trabalho por conta própria." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Como Montar e Começar um Pequeno Negócio",
    questions: [
      { objective: "O1", q: "Um negócio de serviços:", options: ["Só vende produtos", "Faz trabalho para as pessoas, como limpezas ou reparações", "É sempre pela internet", "Precisa de uma fábrica"], answer: 1, why: "Os serviços são trabalho feito para os clientes." },
      { objective: "O1", q: "Os custos iniciais são:", options: ["O dinheiro necessário para começar, como ferramentas e materiais", "O seu lucro", "Os seus impostos", "Os seus clientes"], answer: 0, why: "São o que gasta para começar." },
      { objective: "O1", q: "Se um trabalho precisa de uma licença do estado, deve verificar:", options: ["O site oficial do conselho de licenciamento do seu estado", "Só a IA", "Um boato", "Nada"], answer: 0, why: "Os conselhos de licenciamento definem as regras, que mudaram em muitos estados." },
      { objective: "O2", q: "Porquê descrever os clientes de forma concreta?", options: ["Faz subir os preços", "Diz-lhe onde os encontrar", "O IRS exige", "Substitui uma licença"], answer: 1, why: "Clientes concretos são mais fáceis de alcançar." },
      { objective: "O2", q: "Para definir um preço, comece por:", options: ["O preço mais baixo da cidade, mesmo com prejuízo", "Um número ao acaso", "Os seus custos de um trabalho e o seu tempo", "O que um amigo disser"], answer: 2, why: "Os preços têm de cobrir os custos e o tempo." },
      { objective: "O2", q: "O lucro é:", options: ["Um empréstimo", "Todo o dinheiro que entra", "A sua conta de impostos", "O dinheiro que sobra depois dos custos"], answer: 3, why: "Lucro = receitas menos custos." },
      { objective: "O3", q: "Um plano de negócio de arranque enxuto é:", options: ["Um formulário de impostos", "Um relatório de 100 páginas", "Um plano curto, de uma página", "Uma licença"], answer: 2, why: "A SBA descreve-o como um plano de uma página." },
      { objective: "O3", q: "Quando a IA ajuda a escrever o seu plano, quem dá os dados?", options: ["Você", "A IA", "Um desconhecido", "O IRS"], answer: 0, why: "A IA organiza; quem conhece o seu negócio é você." },
      { objective: "O4", q: "No empresário em nome individual, quem é responsável pelas dívidas do negócio?", options: ["Os seus clientes", "Ninguém", "O governo", "Você pessoalmente"], answer: 3, why: "Não há separação entre o dono e o negócio." },
      { objective: "O4", q: "Uma LLC é normalmente registada:", options: ["Só no IRS", "No seu estado, muitas vezes no Secretário de Estado", "No seu banco", "Numa rede social"], answer: 1, why: "São os estados que criam as LLC." },
      { objective: "O4", q: "Onde vê o custo atual de criar uma LLC?", options: ["Só na IA", "No site do Secretário de Estado do seu estado", "Num anúncio que aparece no ecrã", "Com um amigo"], answer: 1, why: "Os custos mudam de estado para estado e com o tempo." },
      { objective: "O4", q: "DBA quer dizer:", options: ["Debt before assets (dívida antes dos bens)", "Department of Business Affairs (departamento de assuntos comerciais)", "Daily bank account (conta bancária diária)", "Doing business as (a fazer negócio como)"], answer: 3, why: "Um DBA é um nome comercial registado." },
      { objective: "O5", q: "Um site cobra $200 para lhe obter um EIN. Você deve:", options: ["Fazer o pedido de graça em irs.gov", "Pagar", "Dar-lhe o seu SSN", "Pedir à IA para pagar"], answer: 0, why: "O IRS avisa sobre sites que cobram pelos EIN." },
      { objective: "O5", q: "O pedido do EIN na internet do IRS:", options: ["Está aberto 24 horas todos os dias", "Pode ser guardado e terminado na semana seguinte", "Tem de ser terminado numa só sessão, nas horas em que está aberto", "Custa uma taxa"], answer: 2, why: "O IRS diz que não pode guardar o pedido e indica horas fixas." },
      { objective: "O5", q: "Que nível do governo dá licenças para muitos ofícios, como trabalhos de eletricidade?", options: ["Os correios", "Só o governo federal", "O seu banco", "O estado"], answer: 3, why: "Os estados dão licenças para muitos ofícios." },
      { objective: "O5", q: "Onde deve escrever o seu número verdadeiro da Segurança Social quando pede um EIN?", options: ["Numa SMS para um desconhecido", "Num assistente de IA", "Só no site oficial irs.gov", "Em qualquer site"], answer: 2, why: "Os números privados vão só em sites oficiais." },
      { objective: "O6", q: "Porquê abrir uma conta bancária separada para o negócio?", options: ["Para não pagar nenhum imposto", "Para manter o dinheiro do negócio e o pessoal separados", "Substitui uma licença", "Para esconder dinheiro"], answer: 1, why: "A SBA diz que a separação protege você e ajuda nos registos." },
      { objective: "O6", q: "Bons registos do negócio incluem:", options: ["Data, quem, o quê e quanto, com os recibos", "Só as vendas grandes", "Nada", "As suas palavras-passe"], answer: 0, why: "Registos completos tornam os impostos mais fáceis." },
      { objective: "O6", q: "Que formulário declara o rendimento ou o prejuízo de um empresário em nome individual?", options: ["Schedule C", "Form W-2", "Form I-9", "Form DS-11"], answer: 0, why: "O IRS usa o Schedule C para os empresários em nome individual." },
      { objective: "O6", q: "Que parceiro da SBA oferece mentores voluntários para negócios sem custo?", options: ["O IRS", "O SCORE", "Um credor de empréstimos rápidos", "Uma agência de crédito"], answer: 1, why: "Os mentores do SCORE dão conselhos sem custo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [0, 2, 4, 6, 7, 8, 11, 12, 14, 16]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de uma página", objective: "O3", notYet: "Falta uma parte ao plano, ou tem dados que o aluno não deu.", meets: "Uma página com o serviço, os clientes, o preço, como os clientes o encontram e os custos iniciais.", exceeds: "O aluno sabe explicar cada parte do plano com as suas palavras." },
      { name: "Clientes e preço", objective: "O2", notYet: "Os clientes são \"toda a gente\", ou o preço não cobre os custos.", meets: "Uma descrição concreta dos clientes e um preço que cobre os custos, o tempo e os impostos.", exceeds: "O preço foi comparado com dois preços locais verdadeiros." },
      { name: "Estrutura e nome", objective: "O4", notYet: "Nenhuma estrutura escolhida, ou o nome não foi verificado.", meets: "Estrutura escolhida com um motivo, e a página oficial do DBA encontrada, se for preciso.", exceeds: "Também anota onde ver o custo atual de criar uma LLC." },
      { name: "EIN e licenças", objective: "O5", notYet: "Usa um serviço pago de EIN, ou não verificou as licenças.", meets: "Página do EIN em irs.gov e páginas das licenças da cidade, do condado e do estado indicadas.", exceeds: "Anota as horas do pedido do EIN na internet e o que ter pronto para o pedido." },
      { name: "Dinheiro, registos e ajuda", objective: "O6", notYet: "Nenhuma conta separada nem plano de registos.", meets: "Uma conta bancária separada, um registo, dinheiro guardado para os impostos, e um escritório do SCORE ou SBDC indicado pelo nome.", exceeds: "O registo tem uma primeira entrada verdadeira ou de prática com um recibo." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que obtêm um EIN ou registam um negócio em 90 dias (inquérito de seguimento)",
      "Alunos que ganham dinheiro com o seu negócio em 90 dias",
      "Alunos que se reúnem com um mentor do SCORE ou um conselheiro do SBDC em 60 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone ou um computador com internet",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Papel e caneta, ou uma aplicação de notas gratuita, para o plano e a lista de passos",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da sessão, procure as páginas de negócios do seu estado, condado e cidade para poder mostrar aos alunos os sites locais verdadeiros.",
      "Nunca peça aos alunos para escrever um número da Segurança Social, detalhes do processo ou dados bancários na IA ou num ecrã partilhado; os pedidos de EIN fazem-se só em irs.gov, em privado.",
      "Envie as perguntas sobre licenças e condenações passadas para o conselho de licenciamento do estado, não para a IA.",
      "Este curso não é aconselhamento jurídico nem fiscal; se puder, convide um mentor do SCORE ou um conselheiro do SBDC da sua zona para uma sessão.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
