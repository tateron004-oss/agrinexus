"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-poultry-production.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no vaccine or drug doses, no withdrawal periods as numbers; follow the vet and the label; avian influenza is notifiable.

const KENBRO = { name: "Kenchic: Kenbro (galinha indígena melhorada de dupla aptidão)", url: "https://www.kenchic.com/kenbro/" };
const KUROILER = { name: "Sharma et al. 2015, Livestock Research for Rural Development: Kuroiler e galinhas indígenas no Uganda", url: "https://lrrd.cipav.org.co/lrrd27/9/shar27178.html" };
const MU_BROODING = { name: "University of Missouri Extension G8351: Brooding and growing chicks (temperatura por semana, comportamento dos pintos)", url: "https://extension.missouri.edu/publications/g8351" };
const FAO_BIOSEC = { name: "FAO: Good biosecurity practices in small scale commercial and scavenging poultry production systems in Kenya (boas práticas de biossegurança nas aves)", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const WOAH_ND = { name: "Organização Mundial da Saúde Animal (WOAH): doença de Newcastle", url: "https://www.woah.org/en/disease/newcastle-disease/" };
const WOAH_AI = { name: "Organização Mundial da Saúde Animal (WOAH): gripe aviária", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS: Avian influenza (sinais de gripe aviária nas aves)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const KVB = { name: "Kenya Veterinary Board (registo de veterinários e paraprofissionais de veterinária no Quénia)", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Veterinary Council of Nigeria (registo de médicos veterinários na Nigéria)", url: "https://vcn.gov.ng" };
const FAO_PRUDENT = { name: "FAO: Prudent and efficient use of antimicrobials in pigs and poultry (veterinários, planos de saúde, intervalos de segurança)", url: "https://www.fao.org/3/ca6729en/CA6729EN.pdf" };

module.exports = {
  id: "agri-poultry-production-pt",
  lang: "pt",
  translationOf: "agri-poultry-production",
  category: "Agriculture (Africa)",
  name: "Produção Comercial de Aves",
  skills: "Escolher frangos de corte, poedeiras ou galinhas indígenas melhoradas, Preparar o aviário e criar os pintos com calor, Dar ração e água conforme a fase, Seguir um programa de vacinação e a biossegurança do lote com o veterinário, Manusear os ovos e manter registos do bando, Calcular o custo de um lote e o preço de equilíbrio",
  outcome: "planear e gerir um lote de galinhas com lucro: escolher frangos de corte, poedeiras ou aves indígenas melhoradas para o seu mercado, preparar o aviário e aquecer os pintos, dar ração e água conforme a fase, seguir um programa de vacinação feito com o seu veterinário e uma biossegurança rigorosa, manusear os ovos e manter registos, e calcular o custo do lote para saber o seu preço de equilíbrio.",
  about: [
    "Este curso é para agricultores, jovens empreendedores agrícolas, trabalhadores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, na Costa do Marfim e em toda a África que querem começar ou fazer crescer um negócio de aves com frangos de corte, poedeiras ou galinhas indígenas melhoradas.",
    "O Capítulo 1 prepara o lote: escolher o tipo de ave, o aviário, o espaço e o aquecimento dos pintos, e a ração e a água. O Capítulo 2 mostra como gerir o lote com lucro: um programa de vacinação com o seu veterinário e a biossegurança do lote, o manuseio dos ovos e os registos, e as contas do lote: custo por ave ou por bandeja, mortalidade e preço de equilíbrio.",
    "Este curso continua o curso \"Saúde e Maneio do Gado\", que trata das verificações diárias de saúde e do básico da doença de Newcastle. Não dá doses de vacinas nem de medicamentos: siga sempre o seu veterinário e o rótulo. Todos os preços são exemplos inventados; use os seus. Cada lição dura cerca de cinco minutos e termina com uma tarefa. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano com custos para um lote na sua machamba (ou um exemplo, como 500 frangos de corte perto de Thika, 300 poedeiras perto de Ibadan, 200 aves Kenbro ou Kuroiler perto de Tamale, ou 1,000 frangos de corte perto de Thiès): o tipo de ave e porquê; o tamanho do aviário e quantas aves cabem nele; a sua montagem para aquecer os pintos; as rações por fase e quanto espera comprar; o programa de vacinação combinado com o seu veterinário e as suas regras de biossegurança; os registos que vai manter; e uma folha de custos com todos os custos, uma mortalidade esperada, o custo por ave vendida ou por bandeja de ovos, e o seu preço de equilíbrio.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Agricultores, jovens empreendedores agrícolas, trabalhadores agrícolas e extensionistas na África Oriental, Ocidental e Central (incluindo os países de língua francesa) que começam ou fazem crescer um negócio de aves de algumas centenas a alguns milhares de aves.",
    startingPoint: "Muitos têm algumas galinhas de quintal ou já criaram um lote. A maioria compra pintos e ração sem um plano escrito, aquece os pintos por adivinhação, depende do agrovet para as vacinas, mantém poucos registos e não sabe o seu custo por ave ou por bandeja, por isso não sabe dizer se um lote deu dinheiro.",
    gap: "As aves podem dar dinheiro depressa, mas muitas mortes de pintos no aquecimento, surtos de doenças, ração desperdiçada e vendas abaixo do custo acabam com o lucro. Os agricultores que planeiam o lote, aquecem bem os pintos, vacinam segundo o programa do veterinário, mantêm registos e sabem o seu preço de equilíbrio perdem menos aves e conseguem fixar o preço e vender com confiança.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; só contas simples; o curso também existe em espanhol, francês e árabe",
      "Aparelhos: papel e caneta ou a calculadora do telefone; uma folha de cálculo no telefone é opcional",
      "Dinheiro: os preços em KES, NGN, GHS e XOF são exemplos inventados; os alunos usam preços locais",
      "Regras de saúde animal: nenhuma dose de vacina ou de medicamento e nenhum intervalo de segurança em números; siga o veterinário e o rótulo",
      "A gripe aviária é de declaração obrigatória: os casos suspeitos são comunicados de imediato ao veterinário ou aos serviços de veterinária"
    ],
    prerequisites: "Cuidados básicos com animais e contas simples. Recomenda-se fazer primeiro \"Saúde e Maneio do Gado\"; \"Nutrição Animal e Formulação de Rações\" ajuda com os custos da ração."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Tendo em conta o seu mercado, o seu dinheiro e o seu tempo", action: "escolher frangos de corte, poedeiras ou galinhas indígenas melhoradas e dar as razões", standard: "dizendo pelo menos três razões que servem para a sua machamba e os seus compradores" },
    { id: "O2", condition: "Antes de os pintos chegarem e durante o aquecimento", action: "preparar o aviário, fixar o número de aves para o espaço e ajustar o calor da criadeira observando os pintos", standard: "com o aviário pronto um dia antes e os pintos bem espalhados debaixo do calor" },
    { id: "O3", condition: "Para cada fase do seu lote", action: "planear o tipo de ração, as datas de mudança e o fornecimento de água", standard: "com água limpa sempre disponível e todas as fases cobertas" },
    { id: "O4", condition: "Com o seu veterinário ou técnico de saúde animal", action: "escrever um programa de vacinação e regras de biossegurança do lote, e registar cada vacinação", standard: "com todas as datas de vacinação fixadas pelo veterinário e nenhuma vacina dada fora do programa" },
    { id: "O5", condition: "Todos os dias do lote", action: "recolher e guardar os ovos corretamente e registar aves, mortes, ração, ovos e tratamentos", standard: "sem nenhum dia em falta no registo" },
    { id: "O6", condition: "Usando os seus preços locais e a mortalidade esperada", action: "calcular o custo por ave vendida ou por bandeja e o preço de equilíbrio de um lote", standard: "com todos os custos incluídos e as contas certas" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar o lote",
      lessons: [
        {
          title: "Frangos de corte, poedeiras ou galinhas indígenas melhoradas",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher o tipo de galinha que serve para o seu mercado, o seu dinheiro e o seu tempo.",
          text: [
            "Os frangos de corte são criados para carne. Crescem muito depressa e muitas vezes são vendidos em cerca de 5 a 7 semanas, conforme a raça e o peso que os compradores querem. O dinheiro volta depressa, mas precisam de ração de boa qualidade, cuidados próximos e um comprador pronto no dia em que estão prontos: cada dia a mais come ração e lucro.",
            "As poedeiras são criadas para ovos. Começam a pôr com cerca de 4 a 5 meses e põem durante mais de um ano, por isso você dá-lhes ração durante meses antes de ter qualquer rendimento, e precisa de um mercado de ovos estável. As galinhas indígenas melhoradas, ou de dupla aptidão, ficam no meio: são mais resistentes do que os frangos de corte e as poedeiras, podem procurar comida soltas com alguma ração a mais, e vendem-se para carne e ovos, muitas vezes a um preço melhor por ave, mas crescem e põem menos do que os híbridos comerciais.",
            "Exemplos: a Kenbro, vendida pela Kenchic no Quénia, é uma ave de dupla aptidão; a Kenchic diz que fica pronta para carne com cerca de 10 a 14 semanas ou põe a partir de cerca de 25 semanas, mas não chega à produção dos frangos de corte ou das poedeiras especializados. A Kuroiler, desenvolvida na Índia, é uma ave de dupla aptidão que procura comida solta; um estudo no Uganda mostrou que as Kuroiler ficaram mais pesadas do que as galinhas locais nas condições da aldeia. Compre qualquer raça só a uma incubadora em que os seus serviços de pecuária ou o seu veterinário confiam, e pergunte a outros agricultores como ela se portou."
          ],
          steps: ["Escreva quem vai comprar: aves vivas, carne, ovos, hotéis, mercados.", "Escreva quanto dinheiro pode gastar antes de o rendimento começar.", "Escreva quanto tempo pode dar por dia.", "Compare frangos de corte, poedeiras e aves indígenas melhoradas com as suas listas.", "Escolha um tipo, com três razões, e uma incubadora de confiança."],
          words: [["Frango de corte", "uma galinha criada para crescer depressa para carne."], ["Poedeira", "uma galinha criada para pôr muitos ovos."], ["Galinha indígena melhorada", "uma ave de dupla aptidão mais resistente, criada a partir de aves locais ou para as condições locais, para carne e ovos."], ["Incubadora", "uma empresa que choca ovos e vende pintos de um dia."]],
          slides: [
            { title: "Frangos de corte", bullets: ["Carne; muitas vezes vendidos em cerca de 5 a 7 semanas", "Dinheiro rápido; precisam de boa ração e cuidados próximos", "Precisam de um comprador pronto no dia"] },
            { title: "Poedeiras", bullets: ["Ovos; começam com cerca de 4 a 5 meses", "Meses de ração antes do rendimento", "Precisam de um mercado de ovos estável"] },
            { title: "Indígenas melhoradas", bullets: ["Mais resistentes; procuram comida com ração a mais", "Carne e ovos, muitas vezes melhor preço por ave", "Exemplos: Kenbro (Kenchic), Kuroiler (da Índia)"] },
            { title: "Escolher e comprar bem", bullets: ["Combine mercado, dinheiro e tempo", "Só uma incubadora de confiança", "Pergunte a agricultores que criaram a raça"] }
          ],
          sources: [KENBRO, KUROILER],
          tryIt: "Escreva as suas três listas: compradores, dinheiro disponível antes do rendimento e tempo por dia. Escolha frangos de corte, poedeiras ou aves indígenas melhoradas e escreva três razões, mais o nome de uma incubadora em que os seus serviços de pecuária ou o seu veterinário confiam.",
          youCanNow: "escolher frangos de corte, poedeiras ou galinhas indígenas melhoradas de acordo com o seu mercado, o seu dinheiro e o seu tempo.",
          quickCheck: [
            { objective: "O1", q: "Um agricultor tem pouco dinheiro para esperar e um hotel que compra aves de carne de seis em seis semanas. Que tipo serve melhor?", options: ["Poedeiras", "Frangos de corte", "Patos", "Galinhas de quintal soltas a procurar comida"], answer: 1, why: "Os frangos de corte vendem-se em semanas, o que combina com um comprador regular de carne e uma espera curta pelo rendimento." },
            { objective: "O1", q: "O que diz a Kenchic sobre a Kenbro em comparação com os frangos de corte e as poedeiras especializados?", options: ["Cresce mais depressa do que os frangos de corte", "Põe mais do que as poedeiras", "Não chega aos níveis de produção deles", "Não precisa de nenhuma ração"], answer: 2, why: "A Kenbro é mais resistente e de dupla aptidão, mas não iguala a produção dos híbridos especializados." }
          ]
        },
        {
          title: "Aviário, espaço e aquecimento dos pintos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Preparar o aviário, fixar o número de aves para o espaço e aquecer os pintos à temperatura certa.",
          text: [
            "Um bom aviário é seco, arejado e seguro. Nas zonas quentes, os lados abertos com rede de arame forte deixam passar o ar; um aviário comprido é muitas vezes virado de leste para oeste para entrar menos sol, com um beiral no telhado para não entrar a chuva. Use uma cama funda e seca, como aparas de madeira ou casca de arroz. Mantenha de fora ratos, cobras, aves selvagens e ladrões. Antes de os pintos chegarem, limpe e desinfete o aviário vazio e o equipamento e deixe-o vazio durante o período de descanso que o seu veterinário aconselhar.",
            "Espaço: o excesso de aves causa stress por calor, cama molhada, bicadas e doenças. A sua incubadora, o guia da raça ou o seu extensionista dá o número de aves por metro quadrado para a sua raça, idade e aviário. Multiplique a área do chão por esse número. Só um exemplo: um aviário de 5 m por 8 m tem 40 metros quadrados; se o seu guia diz 10 frangos de corte por metro quadrado na idade de venda, cabem 400 frangos de corte, não 500.",
            "Aquecimento: os pintos de um dia não conseguem manter-se quentes sozinhos. Monte um círculo de criação (um círculo de cartão ou de chapa) com cama, uma fonte de calor (criadeira a gás ou elétrica, lâmpadas, ou um fogareiro a carvão com boa ventilação, porque os fumos do carvão podem matar), comedouros e bebedouros, e aqueça-o antes de os pintos chegarem. A University of Missouri Extension indica cerca de 32 a 35 °C debaixo do aquecedor na primeira semana, e depois cerca de 3 °C a menos por semana. Observe os pintos: amontoados debaixo do calor quer dizer frio demais; longe e a ofegar quer dizer calor demais; apertados de um lado quer dizer corrente de ar; bem espalhados quer dizer que está certo."
          ],
          steps: ["Limpe e desinfete o aviário vazio e o equipamento; deixe-o descansar como o veterinário aconselhar.", "Espalhe uma cama funda e seca.", "Calcule quantas aves cabem no chão com o guia da sua raça.", "Monte o círculo de criação, a fonte de calor, os comedouros e os bebedouros.", "Aqueça-o antes de os pintos chegarem.", "Observe os pintos várias vezes por dia e ajuste o calor."],
          words: [["Aquecimento dos pintos", "manter os pintos novos quentes e alimentados nas primeiras semanas."], ["Círculo de criação", "um círculo de cartão ou de chapa que mantém os pintos perto do calor, da ração e da água."], ["Cama", "uma camada seca no chão, como aparas de madeira ou casca de arroz."], ["Densidade", "quantas aves se põem por metro quadrado de chão."]],
          slides: [
            { title: "Um bom aviário", bullets: ["Seco, arejado, lados abertos com rede no calor", "Beiral no telhado; muitas vezes de leste para oeste", "Cama funda e seca; sem ratos nem aves selvagens"] },
            { title: "Espaço", bullets: ["Aves a mais = stress por calor, cama molhada, doenças", "Aves por metro quadrado segundo o guia da raça", "Exemplo: 40 metros quadrados x 10 = 400 frangos de corte"] },
            { title: "Montagem do aquecimento", bullets: ["Círculo de criação, calor, comedouros e bebedouros", "Aqueça antes de os pintos chegarem", "Carvão: boa ventilação, os fumos podem matar"] },
            { title: "Leia os pintos", bullets: ["Cerca de 32 a 35 °C no início, cerca de 3 °C a menos por semana", "Amontoados = frio; longe = calor", "Apertados de um lado = corrente de ar; espalhados = certo"] }
          ],
          sources: [MU_BROODING, FAO_BIOSEC],
          tryIt: "Meça o seu aviário (ou um aviário planeado) e calcule a área do chão. Pergunte à sua incubadora ou ao seu extensionista quantas aves por metro quadrado para a sua raça e escreva quantas aves cabem. Desenhe a sua montagem de aquecimento.",
          youCanNow: "preparar um aviário, fixar o número de aves para o seu espaço e aquecer os pintos observando como se comportam.",
          quickCheck: [
            { objective: "O2", q: "Os seus pintos estão todos muito amontoados debaixo do aquecedor. O que quer dizer?", options: ["Têm calor demais", "Têm fome", "Estão prontos para sair do círculo de criação", "Têm frio; aumente o calor ou tape as correntes de ar"], answer: 3, why: "Amontoarem-se debaixo do calor quer dizer que os pintos têm frio." },
            { objective: "O2", q: "O seu aviário tem 6 m por 5 m. O guia diz 10 aves por metro quadrado. Quantas aves?", options: ["300", "110", "600", "50"], answer: 0, why: "6 x 5 = 30 metros quadrados, x 10 = 300 aves." }
          ]
        },
        {
          title: "Ração e água conforme a fase",
          objectives: ["O3"],
          minutes: 5,
          goal: "Planear a ração de cada fase, quando a mudar e um fornecimento constante de água limpa.",
          text: [
            "A ração é o maior custo de um lote, por isso dê a ração certa na fase certa. Frangos de corte: ração inicial de frango, depois ração de acabamento (alguns programas juntam uma ração de crescimento). Poedeiras: ração para pintos, depois ração de crescimento, e depois ração de postura a partir do início da postura, que tem o cálcio a mais de que as galinhas precisam para cascas fortes. Aves indígenas melhoradas: siga o guia da incubadora; em semiliberdade, continuam a precisar de uma ração equilibrada além do que encontram soltas, para crescer e pôr bem. Mude de ração durante alguns dias, misturando a antiga com a nova.",
            "Compre a ração a um fabricante de confiança, confirme que o saco tem rótulo, está seco e dentro do prazo, e guarde-o em paletes num lugar seco. Use comedouros suficientes para todas as aves comerem ao mesmo tempo, suba-os à altura das costas das aves à medida que crescem, e não os encha até cima, porque as aves esgravatam e deitam a ração fora.",
            "A água conta mais do que a ração: as galinhas bebem mais água do que comem ração, e deixam de comer e de pôr quando a água acaba ou fica quente. Dê água limpa e fresca sempre, com bebedouros suficientes, limpos todos os dias. Uma queda súbita no consumo de água é muitas vezes o primeiro sinal de doença. Se der uma vacina ou um medicamento na água, siga exatamente o veterinário e o rótulo; alguns precisam de água sem cloro nem desinfetante."
          ],
          steps: ["Escreva as fases do seu tipo de ave.", "Escreva a ração de cada fase e a idade para mudar.", "Planeie comedouros e bebedouros suficientes para todas as aves ao mesmo tempo.", "Suba os comedouros e os bebedouros à medida que as aves crescem; não encha demais.", "Limpe os bebedouros todos os dias; nunca deixe a água acabar.", "Anote o consumo diário de água; uma queda súbita quer dizer chamar o veterinário."],
          words: [["Ração inicial", "a primeira ração, rica em proteína, para os pintos novos."], ["Ração de acabamento", "a última ração dos frangos de corte antes da venda."], ["Ração de postura", "ração para galinhas poedeiras com cálcio a mais para a casca dos ovos."], ["Início da postura", "a idade em que as galinhas novas estão quase a começar a pôr."]],
          slides: [
            { title: "Rações por fase", bullets: ["Frangos de corte: inicial, depois acabamento", "Poedeiras: pintos, crescimento, depois postura", "Mude durante alguns dias"] },
            { title: "Comprar e usar bem a ração", bullets: ["Fabricante de confiança; com rótulo, seca, no prazo", "Comedouros suficientes; suba-os com o crescimento", "Não encha demais: esgravatar desperdiça ração"] },
            { title: "A água vem primeiro", bullets: ["As aves bebem mais do que comem", "Água limpa e fresca sempre", "Queda súbita no consumo de água = sinal de alerta"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Faça uma tabela de ração para o seu lote: fase, idade, tipo de ração e mais ou menos quantos sacos espera comprar (pergunte ao seu fornecedor de ração ou à incubadora). Acrescente quantos comedouros e bebedouros precisa e quem limpa os bebedouros todos os dias.",
          youCanNow: "planear a ração certa para cada fase, quando a mudar e um fornecimento constante de água limpa.",
          quickCheck: [
            { objective: "O3", q: "Porque é que as galinhas poedeiras precisam de ração de postura e não de ração de crescimento?", options: ["É mais barata", "Faz com que fiquem mais altas", "Tem o cálcio a mais necessário para cascas de ovo fortes", "Substitui a água"], answer: 2, why: "As galinhas poedeiras precisam de cálcio a mais para as cascas, e a ração de postura dá-o." },
            { objective: "O3", q: "Os seus frangos de corte de repente bebem muito menos água do que ontem. O que pode ser?", options: ["Podem estar a ficar doentes; observe-os e chame o veterinário", "Estão saudáveis e cheios", "A ração é boa demais", "Está na altura de os vender"], answer: 0, why: "Uma queda súbita no consumo de água é muitas vezes o primeiro sinal de doença." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar o lote",
        questions: [
          { objective: "O1", q: "Qual é um risco importante dos frangos de corte?", options: ["Levam dois anos a vender", "Põem ovos demais", "Não se podem comer", "Cada dia a mais antes da venda come ração e lucro, por isso precisa de um comprador pronto"], answer: 3, why: "Os frangos de corte continuam a comer; atrasos na venda cortam o lucro depressa." },
          { objective: "O1", q: "O que é verdade sobre as galinhas indígenas melhoradas, como a Kuroiler?", options: ["São mais resistentes e de dupla aptidão, mas produzem menos do que os híbridos especializados", "Não precisam de água", "São só para ovos", "São os frangos de corte que crescem mais depressa"], answer: 0, why: "As aves de dupla aptidão trocam alguma produção por resistência e por servirem para carne e ovos." },
          { objective: "O2", q: "Os pintos estão longe do aquecedor e a ofegar. O que faz?", options: ["Aumenta o calor", "Tapa toda a entrada de ar", "Baixa o calor ou sobe o aquecedor", "Junta mais pintos"], answer: 2, why: "Ficarem longe e a ofegar quer dizer que os pintos têm calor demais." },
          { objective: "O2", q: "Quando deve aquecer o círculo de criação?", options: ["Depois de os pintos chegarem", "Antes de os pintos chegarem", "Só à noite na semana 3", "Nunca; os pintos aquecem-se sozinhos"], answer: 1, why: "Os pintos de um dia precisam de calor desde o momento em que chegam." },
          { objective: "O3", q: "Como deve mudar de uma ração para a seguinte?", options: ["De um dia para o outro", "Primeiro deixar de dar comida durante um dia", "Só quando as aves parecem magras", "Durante alguns dias, misturando a antiga com a nova"], answer: 3, why: "Uma mudança aos poucos não perturba a forma como as aves comem e digerem." }
        ]
      }
    },
    {
      name: "Capítulo 2: Gerir um lote com lucro",
      lessons: [
        {
          title: "Um programa de vacinação e a biossegurança do lote",
          objectives: ["O4"],
          minutes: 6,
          goal: "Escrever um programa de vacinação com o seu veterinário e fixar regras de biossegurança para o lote.",
          text: [
            "A vacinação protege o lote das doenças comuns na sua zona. Que vacinas, em que idade e como se dão (na água de beber, em gota no olho, por injeção ou por picada na asa) tem de ser decidido por um veterinário registado ou por um técnico de saúde animal, porque as doenças mudam conforme a zona e a época. Exemplos comuns em África são a doença de Newcastle e a doença de Gumboro, mais a doença de Marek (muitas vezes dada na incubadora) e a bouba aviária; o seu veterinário pode juntar outras. Peça à incubadora um registo do que os pintos já receberam.",
            "Faça as vacinas funcionarem: compre-as num agrovet licenciado, confirme o prazo de validade, mantenha-as frescas desde a loja até às aves, dê-as exatamente como dizem o rótulo e o veterinário, vacine o bando inteiro, e escreva nos seus registos a data, a vacina, o número do lote da vacina e o método. Nunca trate aves doentes com antibióticos por sua conta: quem decide é o veterinário, e você regista o intervalo de segurança que está no rótulo para não vender ovos nem carne antes de ele acabar.",
            "Biossegurança do lote: compre os pintos a uma só incubadora de confiança e gira o aviário em sistema \"tudo dentro, tudo fora\" (todas as aves da mesma idade, entram juntas e saem juntas). Entre lotes, tire toda a cama, lave e desinfete o aviário e o equipamento, e deixe-o vazio durante o período de descanso que o seu veterinário aconselhar. Não deixe entrar visitas, use um pedilúvio e botas só da machamba, mantenha longe as aves selvagens e os ratos, e nunca traga aves do mercado para casa. A gripe aviária é de declaração obrigatória: mortes súbitas, cristas inchadas e roxas, aves a arfar ou uma queda forte dos ovos querem dizer: mantenha as aves fechadas, pare todas as vendas e movimentos, e chame o veterinário de imediato."
          ],
          steps: ["Pergunte à incubadora que vacinas os pintos já receberam.", "Sente-se com o seu veterinário e escreva o programa: doença, idade, método.", "Compre as vacinas num agrovet licenciado; confirme a validade; mantenha-as frescas.", "Vacine o bando inteiro exatamente como dizem o rótulo e o veterinário; registe.", "Use \"tudo dentro, tudo fora\"; limpe, desinfete e deixe o aviário descansar entre lotes.", "Suspeita de gripe aviária ou de doença de Newcastle: aves fechadas, vendas paradas, chame o veterinário."],
          words: [["Programa de vacinação", "um plano escrito de que vacinas o bando recebe, em que idade e como, feito pelo veterinário."], ["Tudo dentro, tudo fora", "todas as aves de um aviário têm a mesma idade, entram juntas e saem juntas."], ["Intervalo de segurança", "o tempo depois de um medicamento antes de se poderem vender ovos ou carne; está no rótulo."], ["Agrovet licenciado", "uma loja autorizada por lei a vender medicamentos e vacinas para animais."]],
          slides: [
            { title: "O veterinário faz o programa", bullets: ["Que vacinas, que idade, que método", "Comuns: Newcastle, Gumboro, Marek, bouba aviária", "Pergunte à incubadora o que os pintos já receberam"] },
            { title: "Faça as vacinas funcionarem", bullets: ["Agrovet licenciado; veja a validade; mantenha fresco", "Exatamente como o rótulo e o veterinário; bando inteiro", "Registe data, vacina, número do lote, método"] },
            { title: "Biossegurança do lote", bullets: ["Uma só incubadora; tudo dentro, tudo fora", "Limpe, desinfete e deixe descansar entre lotes", "Pedilúvio, botas da machamba, sem visitas nem aves do mercado"] },
            { title: "Gripe aviária: comunique já", bullets: ["Mortes súbitas, cristas roxas, aves a arfar, queda dos ovos", "Aves fechadas; pare vendas e movimentos", "Chame já o veterinário ou os serviços de veterinária"] }
          ],
          sources: [WOAH_ND, WOAH_AI, APHIS_AI, FAO_BIOSEC, FAO_PRUDENT, KVB, VCN],
          tryIt: "Marque uma conversa com o seu veterinário ou técnico de saúde animal. Leve uma tabela com colunas: doença, idade, método, data em que foi dada, número do lote. Preencha o programa que o veterinário fizer. Por baixo, escreva cinco regras de biossegurança para o seu lote.",
          youCanNow: "escrever um programa de vacinação com o seu veterinário, registar cada vacinação e aplicar uma biossegurança rigorosa no lote.",
          quickCheck: [
            { objective: "O4", q: "Quem deve decidir que vacinas o seu bando recebe e quando?", options: ["O vendedor de ração", "Um veterinário registado ou um técnico de saúde animal", "Um vizinho que tem galinhas", "Um grupo nas redes sociais"], answer: 1, why: "As doenças mudam conforme a zona, por isso um veterinário registado faz o programa." },
            { objective: "O4", q: "O que quer dizer \"tudo dentro, tudo fora\"?", options: ["As aves saem para procurar comida todos os dias", "As visitas podem entrar e sair à vontade", "Juntam-se aves novas todas as semanas", "Todas as aves de um aviário entram juntas e saem juntas"], answer: 3, why: "Uma só idade por aviário deixa limpá-lo e deixá-lo descansar por completo entre lotes, o que corta o ciclo das doenças." }
          ]
        },
        {
          title: "Manuseio dos ovos e registos do bando",
          objectives: ["O5"],
          minutes: 5,
          goal: "Recolher e guardar os ovos corretamente e manter registos diários do bando.",
          text: [
            "Os ovos perdem qualidade e apanham micróbios se ficarem nos ninhos. Recolha pelo menos duas vezes por dia, mais vezes com calor. Mantenha os ninhos limpos com cama nova para os ovos saírem limpos. Separe os ovos rachados, sujos e muito pequenos. Limpe os ovos pouco sujos com um pano seco; não os deixe de molho em água, porque isso pode puxar micróbios através da casca. Guarde os ovos em bandejas, com a ponta fina para baixo, num lugar fresco, à sombra e arejado, longe de cheiros fortes, e venda primeiro os mais antigos.",
            "Os registos mostram o que está a acontecer antes que seja tarde. Todos os dias escreva: número de aves, mortes e a causa provável, ração gasta, água gasta e ovos recolhidos (por bandeja e por classe). Registe também cada vacinação e tratamento, a data de fim do intervalo de segurança que está no rótulo, cada compra e cada venda. Um caderno serve; uma folha de cálculo no telefone faz os totais por você.",
            "Use os registos. Taxa de mortalidade = aves mortas / aves no início x 100. Taxa de postura = ovos recolhidos num dia / galinhas x 100. Se as mortes subirem, o consumo de água cair ou a taxa de postura baixar de repente, observe o bando e chame o veterinário. No fim do lote, os registos dão-lhe os números para a sua folha de custos."
          ],
          steps: ["Recolha os ovos pelo menos duas vezes por dia.", "Separe os ovos rachados, sujos e pequenos; limpe a seco os pouco sujos.", "Guarde-os em bandejas, ponta fina para baixo, em lugar fresco e à sombra; os mais antigos primeiro.", "Todos os dias registe aves, mortes, ração, água e ovos.", "Registe vacinações, tratamentos, datas de fim do intervalo de segurança, compras e vendas.", "Calcule a mortalidade e a taxa de postura todas as semanas e procure mudanças súbitas."],
          words: [["Taxa de mortalidade", "a parte das aves que morreu, em percentagem das aves com que começou."], ["Taxa de postura", "os ovos recolhidos num dia em percentagem do número de galinhas."], ["Classe", "a separação dos ovos por tamanho e qualidade."]],
          slides: [
            { title: "Manuseio dos ovos", bullets: ["Recolha pelo menos duas vezes por dia", "Ninhos limpos; separe ovos rachados e sujos", "Limpe a seco; não deixe de molho em água"] },
            { title: "Guardar os ovos", bullets: ["Bandejas, ponta fina para baixo", "Fresco, à sombra, arejado, sem cheiros fortes", "Venda primeiro os mais antigos"] },
            { title: "Registos diários", bullets: ["Aves, mortes e causa, ração, água, ovos", "Vacinações, tratamentos, fim do intervalo de segurança", "Cada compra e cada venda"] },
            { title: "Use os números", bullets: ["Mortalidade = mortas / no início x 100", "Taxa de postura = ovos por dia / galinhas x 100", "Mudança súbita: observe o bando, chame o veterinário"] }
          ],
          sources: [FAO_BIOSEC],
          tryIt: "Faça uma página de registo diário com colunas: data, aves, mortes e causa, ração gasta, água gasta, ovos recolhidos, notas. Preencha uma semana de exemplo. Depois calcule a taxa de mortalidade e, para as poedeiras, a taxa de postura de um dia.",
          youCanNow: "recolher e guardar os ovos corretamente e manter registos diários que mostram a mortalidade e a taxa de postura.",
          quickCheck: [
            { objective: "O5", q: "Como se devem guardar os ovos nas bandejas?", options: ["Ponta fina para cima, ao sol", "Ponta fina para baixo, num lugar fresco e à sombra", "Primeiro lavados e de molho", "Ao lado do petróleo e das cebolas"], answer: 1, why: "Com a ponta fina para baixo, em lugar fresco e à sombra, os ovos ficam frescos mais tempo." },
            { objective: "O5", q: "Começou com 500 frangos de corte e morreram 25. Qual é a taxa de mortalidade?", options: ["25 por cento", "2.5 por cento", "50 por cento", "5 por cento"], answer: 3, why: "25 / 500 x 100 = 5 por cento." }
          ]
        },
        {
          title: "As contas de um lote: custo por ave e preço de equilíbrio",
          objectives: ["O6"],
          minutes: 6,
          goal: "Calcular o custo por ave ou por bandeja e o preço de equilíbrio de um lote.",
          text: [
            "Faça a lista de todos os custos do lote: pintos, ração, vacinas e veterinário, cama, combustível ou eletricidade para o aquecimento, desinfetante, mão de obra, transporte e embalagem. Exemplo com preços inventados em xelins quenianos, 500 frangos de corte: pintos 50,000; ração 122,500; vacinas e veterinário 5,000; cama, aquecimento e eletricidade 8,000; transporte e outros 6,500. Total KES 192,000. Use os seus próprios orçamentos: os preços mudam conforme o lugar e a época, e em NGN, GHS ou XOF o método é o mesmo.",
            "A mortalidade muda tudo, porque as aves mortas também comeram ração. Se morrerem 5 por cento, vende 475 aves. Custo por ave vendida = 192,000 / 475 = KES 404. Esse é o seu preço de equilíbrio: se vender abaixo dele, perde dinheiro. Se morrerem 15 por cento, só vende 425, e o preço de equilíbrio sobe para cerca de KES 452. A um preço de venda de KES 550, 475 aves dão 261,250, um lucro de 69,250. Para saber quantas aves tem de vender para cobrir os custos: 192,000 / 550 = 349.1, ou seja, 350 aves.",
            "Poedeiras: faça as contas por semana. Exemplo: 300 galinhas com uma taxa de postura de 80 por cento dão 300 x 0.8 x 7 = 1,680 ovos, ou 56 bandejas de 30. Se a ração e os outros custos forem KES 15,000 por semana, o custo por bandeja é 15,000 / 56 = cerca de KES 268. Compare-o com o preço que os compradores pagam. Antes de começar, leia também até ao fim qualquer empréstimo ou contrato com um comprador ou fornecedor, e peça a opinião de um conselheiro de confiança."
          ],
          steps: ["Faça a lista de todos os custos do lote com os seus preços locais.", "Some-os para ter o custo total.", "Estime a mortalidade e calcule quantas aves vai vender.", "Custo por ave = custo total / aves vendidas: o seu preço de equilíbrio.", "Poedeiras: custo por bandeja = custos semanais / bandejas recolhidas.", "Compare com o preço de venda; calcule o lucro ou o prejuízo."],
          words: [["Preço de equilíbrio", "o preço por ave ou por bandeja em que o que entra cobre à justa todos os custos."], ["Lucro", "o que entra menos todos os custos."], ["Folha de custos", "uma lista de todos os custos do lote com os totais."]],
          slides: [
            { title: "Faça a lista de todos os custos", bullets: ["Pintos, ração, vacinas e veterinário, cama, combustível", "Mão de obra, transporte, embalagem", "Total de exemplo: KES 192,000 para 500 frangos de corte"] },
            { title: "A mortalidade sobe o custo por ave", bullets: ["5 por cento mortas: 475 vendidas, KES 404 cada", "15 por cento mortas: 425 vendidas, cerca de KES 452 cada", "As aves mortas também comeram ração"] },
            { title: "Preço de equilíbrio e lucro", bullets: ["Preço de equilíbrio = custo total / aves vendidas", "A KES 550: 475 x 550 - 192,000 = KES 69,250", "Aves para cobrir os custos: 192,000 / 550 = 350"] },
            { title: "Poedeiras: custo por bandeja", bullets: ["300 galinhas x 0.8 x 7 = 1,680 ovos = 56 bandejas", "KES 15,000 / 56 = cerca de KES 268 por bandeja", "Os preços são exemplos; use os seus"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano com custos para um lote: tipo de ave, tamanho do aviário e número de aves, montagem do aquecimento, rações por fase, programa de vacinação e regras de biossegurança, registos, e uma folha de custos com todos os custos, a mortalidade esperada, o custo por ave vendida ou por bandeja, e o seu preço de equilíbrio.",
          youCanNow: "calcular o custo de um lote, contar com a mortalidade e saber o seu custo por ave ou por bandeja e o seu preço de equilíbrio.",
          quickCheck: [
            { objective: "O6", q: "Um lote custa NGN 900,000 e espera vender 450 aves. Qual é o preço de equilíbrio por ave?", options: ["NGN 200", "NGN 450", "NGN 2,000", "NGN 20,000"], answer: 2, why: "900,000 / 450 = NGN 2,000 por ave." },
            { objective: "O6", q: "Porque é que uma mortalidade maior sobe o seu custo por ave?", options: ["As aves mortas comeram ração e custaram dinheiro, mas não são vendidas", "As aves mortas vendem-se a um preço mais alto", "A ração fica mais barata", "As vacinas custam menos"], answer: 0, why: "O mesmo custo total é dividido por menos aves vendidas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Gerir um lote com lucro",
        questions: [
          { objective: "O4", q: "Antes de comprar vacinas, o que deve verificar?", options: ["Que são as mais baratas", "Que vêm de um agrovet licenciado, estão dentro do prazo e foram mantidas frescas", "Que vêm sem rótulo", "Que um vizinho tem algumas que sobraram"], answer: 1, why: "Vacinas fora do prazo ou que aqueceram podem não proteger o bando." },
          { objective: "O4", q: "As suas poedeiras de repente morrem em grande número, com cristas roxas. O que faz?", options: ["Vende os ovos depressa", "Dá antibióticos comprados na loja", "Traz aves novas", "Mantém as aves fechadas, para todas as vendas e movimentos, e chama o veterinário de imediato"], answer: 3, why: "Estes sinais fazem pensar em gripe aviária, que é de declaração obrigatória e tem de ser comunicada de imediato." },
          { objective: "O5", q: "Porque recolher os ovos pelo menos duas vezes por dia?", options: ["Os ovos deixados nos ninhos perdem qualidade e apanham micróbios", "As galinhas só põem à noite", "Faz as galinhas pôr o dobro", "Os compradores preferem ovos quentes"], answer: 0, why: "Recolher muitas vezes mantém os ovos limpos e frescos." },
          { objective: "O5", q: "250 galinhas puseram 200 ovos hoje. Qual é a taxa de postura?", options: ["50 por cento", "125 por cento", "80 por cento", "20 por cento"], answer: 2, why: "200 / 250 x 100 = 80 por cento." },
          { objective: "O6", q: "Os custos semanais das poedeiras são GHS 2,400 e recolhe 60 bandejas. Qual é o custo por bandeja?", options: ["GHS 40", "GHS 144", "GHS 4", "GHS 400"], answer: 0, why: "2,400 / 60 = GHS 40 por bandeja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Produção Comercial de Aves",
    questions: [
      { objective: "O1", q: "Que tipo de galinha dá rendimento mais cedo?", options: ["Poedeiras", "Frangos de corte", "Galos reprodutores", "Aves indígenas melhoradas criadas para ovos"], answer: 1, why: "Os frangos de corte muitas vezes vendem-se em cerca de 5 a 7 semanas." },
      { objective: "O1", q: "De que precisam as poedeiras que os frangos de corte não precisam?", options: ["Um comprador num só dia fixo", "Nenhuma ração durante meses", "Meses de ração antes do rendimento e um mercado de ovos estável", "Ser vendidas em seis semanas"], answer: 2, why: "As poedeiras só começam a pôr com cerca de 4 a 5 meses e depois precisam de compradores regulares de ovos." },
      { objective: "O1", q: "Onde deve comprar os pintos de um dia?", options: ["A uma incubadora em que os seus serviços de pecuária ou o seu veterinário confiam", "A qualquer vendedor da beira da estrada", "No anúncio mais barato da internet", "Numa machamba com aves doentes"], answer: 0, why: "Uma incubadora de confiança dá pintos saudáveis da raça certa, com registos de vacinação." },
      { objective: "O2", q: "Os pintos apertam-se de um lado do círculo de criação, longe do aquecedor. Qual é a causa provável?", options: ["Calor demais", "Ração demais", "Estão com sono", "Uma corrente de ar"], answer: 3, why: "Apertarem-se de um lado, longe do calor, faz pensar numa corrente de ar." },
      { objective: "O2", q: "O que acontece se puser aves a mais num aviário?", options: ["Crescem mais depressa", "Stress por calor, cama molhada, bicadas e doenças", "Precisam de menos água", "Os ovos ficam maiores"], answer: 1, why: "O excesso de aves prejudica a saúde e o crescimento." },
      { objective: "O2", q: "Porque é que uma criadeira a carvão tem de ter boa ventilação?", options: ["Os fumos do carvão podem matar os pintos e as pessoas", "Para arrefecer os pintos", "Para deixar entrar as aves selvagens", "Para poupar carvão"], answer: 0, why: "O carvão a arder solta fumos mortais num espaço fechado." },
      { objective: "O2", q: "O que deve fazer ao aviário antes de chegar um lote novo?", options: ["Juntar aves novas às antigas", "Deixar a cama velha para aquecer", "Limpar, desinfetar e deixar descansar como o veterinário aconselhar", "Nada"], answer: 2, why: "Limpar, desinfetar e deixar descansar corta o ciclo das doenças entre lotes." },
      { objective: "O3", q: "Qual é a ordem habitual das rações para os frangos de corte?", options: ["Ração de postura, depois inicial", "Só ração de crescimento", "Ração para pintos, depois ração de postura", "Inicial, depois acabamento"], answer: 3, why: "Os frangos de corte começam com ração inicial rica em proteína e terminam com ração de acabamento." },
      { objective: "O3", q: "Porque não encher os comedouros até cima?", options: ["As aves esgravatam e deitam a ração fora", "A ração fica fria", "Faz as aves pôr menos", "Atrai os veterinários"], answer: 0, why: "Comedouros cheios demais desperdiçam ração, o maior custo do lote." },
      { objective: "O3", q: "Qual é muitas vezes o primeiro sinal de que as aves estão a ficar doentes?", options: ["Põem ovos maiores", "As penas ficam brancas", "Uma queda súbita no consumo de água", "Crescem mais depressa"], answer: 2, why: "As aves doentes bebem menos, muitas vezes antes de aparecerem outros sinais." },
      { objective: "O4", q: "Qual é uma vacina comum das aves em África, fixada pelo veterinário?", options: ["Doença de Newcastle", "Raiva", "Febre aftosa", "Febre da costa oriental"], answer: 0, why: "A doença de Newcastle é uma das vacinas mais comuns das aves; o veterinário faz o programa." },
      { objective: "O4", q: "O que deve registar sempre que vacina?", options: ["Só o tempo que faz", "Nada; o agrovet guarda os registos", "O preço dos ovos", "Data, vacina, número do lote e método"], answer: 3, why: "Registos completos mostram o que o bando recebeu e ajudam o veterinário." },
      { objective: "O4", q: "Quem decide se se dão antibióticos às aves doentes?", options: ["O trabalhador da machamba", "O veterinário", "O comprador de ovos", "O vendedor de ração"], answer: 1, why: "Quem decide é o veterinário, e você regista a data de fim do intervalo de segurança que está no rótulo." },
      { objective: "O5", q: "Como deve limpar um ovo pouco sujo?", options: ["Deixá-lo de molho em água", "Esfregá-lo com sabão", "Limpá-lo com um pano seco", "Deixá-lo no ninho"], answer: 2, why: "Limpar a seco evita puxar micróbios através da casca." },
      { objective: "O5", q: "O que entra no registo diário do bando?", options: ["Aves, mortes, ração, água e ovos", "Só os ovos vendidos", "As vendas do vizinho", "Nada, se tudo parece bem"], answer: 0, why: "Os números diários mostram cedo os problemas e alimentam a folha de custos." },
      { objective: "O5", q: "Começou com 1,000 frangos de corte e morreram 80. Qual é a taxa de mortalidade?", options: ["80 por cento", "0.8 por cento", "12.5 por cento", "8 por cento"], answer: 3, why: "80 / 1,000 x 100 = 8 por cento." },
      { objective: "O6", q: "O que é o preço de equilíbrio por ave?", options: ["O preço mais alto no mercado", "O custo total dividido pelas aves vendidas", "O preço de um pinto", "Só o custo da ração"], answer: 1, why: "A este preço, o que entra cobre à justa todos os custos." },
      { objective: "O6", q: "Um lote custa XOF 1,500,000 e vende 500 aves a XOF 4,000. Qual é o lucro?", options: ["XOF 2,000,000", "XOF 1,500,000", "XOF 500,000", "XOF 4,000"], answer: 2, why: "500 x 4,000 = 2,000,000 de receita; menos 1,500,000 de custo = XOF 500,000 de lucro." },
      { objective: "O6", q: "300 galinhas põem a 80 por cento durante uma semana. Mais ou menos quantas bandejas de 30 ovos?", options: ["56", "80", "240", "1,680"], answer: 0, why: "300 x 0.8 x 7 = 1,680 ovos; 1,680 / 30 = 56 bandejas." },
      { objective: "O6", q: "O seu custo por ave vendida é KES 404 e os compradores pagam KES 380. O que está a acontecer?", options: ["Ganha KES 24 de lucro por ave", "Fica no equilíbrio", "Nada; os preços não importam", "Perde cerca de KES 24 por ave"], answer: 3, why: "Vender abaixo do preço de equilíbrio dá prejuízo em cada ave." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 7, 9, 10, 13, 15, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique outra vez.",
    criteria: [
      { name: "Tipo de ave e mercado", objective: "O1", notYet: "Nenhuma razão para a escolha, ou nenhum comprador indicado.", meets: "Indica o tipo de ave, uma incubadora de confiança e pelo menos três razões que servem para o mercado, o dinheiro e o tempo.", exceeds: "Indica um comprador concreto e quando compra, e planeia o lote para combinar com isso." },
      { name: "Aviário, espaço e aquecimento", objective: "O2", notYet: "O número de aves não foi calculado a partir da área do chão, ou não há plano de aquecimento.", meets: "Área do chão x aves por metro quadrado segundo o guia; montagem do aquecimento com o calor verificado pelo comportamento dos pintos.", exceeds: "Trata também da limpeza, desinfeção e descanso do aviário e da ventilação segura da fonte de calor." },
      { name: "Plano de ração e água", objective: "O3", notYet: "Faltam fases ou tipos de ração, ou não há plano para a água.", meets: "Tipo de ração para cada fase, datas de mudança, comedouros e bebedouros suficientes, e água limpa sempre.", exceeds: "Estima os sacos de ração por fase e quem verifica a água todos os dias." },
      { name: "Vacinação e biossegurança", objective: "O4", notYet: "Nenhum veterinário envolvido, ou doses inventadas, ou nenhuma regra de biossegurança.", meets: "Programa feito por um veterinário registado, registado por escrito; tudo dentro, tudo fora e pelo menos quatro regras de biossegurança; comunicação da gripe aviária.", exceeds: "Inclui o nome e o número do veterinário e o registo de vacinação da incubadora." },
      { name: "Registos", objective: "O5", notYet: "Nenhum plano de registo diário.", meets: "Registo diário de aves, mortes, ração, água e ovos, mais vacinações, tratamentos e vendas.", exceeds: "Mostra como a mortalidade e a taxa de postura vão ser verificadas todas as semanas." },
      { name: "Folha de custos e preço de equilíbrio", objective: "O6", notYet: "Faltam custos, a mortalidade foi esquecida, ou as contas estão erradas.", meets: "Todos os custos na lista, mortalidade considerada, custo por ave ou por bandeja e preço de equilíbrio certos.", exceeds: "Compara o preço de equilíbrio com preços reais dos compradores e mostra o lucro com dois níveis de mortalidade." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem o lote seguinte com um plano escrito e registos diários (seguimento aos 30 dias)",
      "Mortalidade por lote indicada pelos alunos antes e depois do curso",
      "Alunos que sabem e conseguem dizer o seu custo por ave ou por bandeja quando vendem",
      "Casos suspeitos de gripe aviária ou de doença de Newcastle comunicados pelos alunos ao veterinário em menos de um dia"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, caneta e a calculadora do telefone; uma folha de cálculo no telefone é opcional",
      "Uma fita métrica para o aviário",
      "Preços locais de pintos, ração, vacinas e outros custos, e o nome e o número de um veterinário e de uma incubadora de confiança",
      "Cerca de 70 a 80 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Antes da sessão, junte preços locais de pintos, ração e vacinas para os alunos calcularem o custo de um lote com números reais.",
      "Convide um veterinário ou técnico de saúde animal local para a sessão do Capítulo 2 para mostrar um programa de vacinação para a sua zona; nunca dê você mesmo doses de vacinas ou de medicamentos.",
      "Se visitar uma exploração de aves, siga as regras de biossegurança dela e não visite outra exploração de aves no mesmo dia.",
      "Faça o exemplo do preço de equilíbrio no quadro e depois peça a pares que calculem o custo do seu próprio lote.",
      "Avalie cada plano de lote com custos com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
