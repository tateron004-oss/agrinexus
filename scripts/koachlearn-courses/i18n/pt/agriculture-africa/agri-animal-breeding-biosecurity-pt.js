"use strict";

// Koach Learn course (Portuguese translation of agriculture-africa/agri-animal-breeding-biosecurity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: no drug, vaccine or hormone doses and no withdrawal periods; ASF and avian influenza are reported to the vet at once.

const WOAH_ASF = { name: "Organização Mundial da Saúde Animal (WOAH): peste suína africana", url: "https://www.woah.org/en/disease/african-swine-fever/" };
const WOAH_ASF_VACCINE = { name: "WOAH (junho de 2025): use só vacinas contra a PSA de alta qualidade que cumpram a nova norma", url: "https://www.woah.org/en/asf-woah-stresses-the-importance-of-using-high-quality-vaccines-that-comply-with-newly-adopted-standard" };
const FAO_ASF = { name: "FAO: peste suína africana (sem vacina nem tratamento eficaz; a prevenção é o controlo)", url: "https://www.fao.org/animal-health/animal-diseases/african-swine-fever/en" };
const WOAH_AI = { name: "Organização Mundial da Saúde Animal (WOAH): gripe aviária", url: "https://www.woah.org/en/disease/avian-influenza/" };
const APHIS_AI = { name: "USDA APHIS (serviço de saúde animal dos EUA): gripe aviária (sinais nas aves)", url: "https://www.aphis.usda.gov/livestock-poultry-disease/avian/avian-influenza" };
const FAO_PIG_BIOSEC = { name: "FAO: Boas práticas de biossegurança no setor suíno (Documento de Produção e Saúde Animal 169)", url: "https://www.fao.org/4/i1435e/i1435e00.htm" };
const FAO_POULTRY_BIOSEC = { name: "FAO: Boas práticas de biossegurança na produção avícola de pequena escala e de quintal no Quénia", url: "https://www.fao.org/4/al838e/al838e00.pdf" };
const UGA_HEAT = { name: "Extensão da Universidade da Geórgia (EUA): deteção do cio em vacas leiteiras (cio de aceitação, regra manhã-tarde)", url: "https://fieldreport.caes.uga.edu/publications/B1212/heat-detection-strategies-for-dairy-cattle" };
const KAGRC = { name: "Centro de Recursos Genéticos Animais do Quénia (KAGRC): sémen e material de IA", url: "https://kagrc.go.ke/" };
const KVB = { name: "Conselho Veterinário do Quénia (Kenya Veterinary Board): registo de veterinários e paraprofissionais", url: "https://www.kenyavetboard.or.ke/" };
const VCN = { name: "Conselho Veterinário da Nigéria (Veterinary Council of Nigeria): registo de médicos veterinários", url: "https://vcn.gov.ng" };
const ILRI_AI = { name: "ILRI: Formação de prestadores de serviços de inseminação artificial de base comunitária", url: "https://www.ilri.org/knowledge/publications/training-artificial-insemination-service-providers-community-based" };
const FAO_DADIS = { name: "FAO DAD-IS: Sistema de Informação sobre a Diversidade dos Animais Domésticos (raças por país)", url: "https://www.fao.org/dad-is/en/" };

module.exports = {
  id: "agri-animal-breeding-biosecurity-pt",
  lang: "pt",
  translationOf: "agri-animal-breeding-biosecurity",
  category: "Agriculture (Africa)",
  name: "Criação Animal, Reprodução e Biossegurança na Exploração",
  skills: "Escolher raças para o seu clima e o seu mercado, Detetar o cio e manter registos de reprodução, Organizar a inseminação artificial com um técnico formado, Evitar a consanguinidade, Escrever um plano de biossegurança da exploração, Reconhecer e comunicar a peste suína africana e a gripe aviária",
  outcome: "reproduzir os seus bovinos, cabras, porcos ou aves com um plano e manter as doenças fora: escolher uma raça adequada ao seu clima e ao seu mercado, apanhar os cios e registar cada cobrição, usar um técnico de IA formado, evitar a consanguinidade, seguir um plano de biossegurança escrito e comunicar de imediato ao veterinário qualquer suspeita de peste suína africana ou de gripe aviária.",
  about: [
    "Este curso é para pequenos criadores e criadores em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas no Quénia, na Nigéria, no Gana, no Senegal, nos Camarões e em toda a África que criam vacas leiteiras, cabras, porcos ou aves e querem aumentar o rebanho ou o bando sem trazer doenças.",
    "O Capítulo 1 fala de reproduzir bem: escolher a raça certa, apanhar os cios e manter registos de reprodução, e usar a inseminação artificial (IA) através de um técnico formado, evitando a consanguinidade. O Capítulo 2 fala de manter as doenças fora: um plano de biossegurança com zonas, pedilúvios e regras para visitantes, quarentena dos animais novos e eliminação segura dos animais mortos, e as duas doenças que todo o criador de porcos e de aves tem de conhecer: a peste suína africana e a gripe aviária.",
    "Este curso continua o curso \"Saúde e Maneio do Gado\", que trata das verificações diárias de saúde, da vacinação com um veterinário e da doença de Newcastle. Não dá doses de medicamentos, vacinas nem hormonas: siga sempre o seu veterinário e o rótulo do produto. Cada lição dura cerca de cinco minutos e termina com uma tarefa na sua própria exploração. Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Escreva um plano de biossegurança de uma página para a sua própria unidade (a sua exploração, ou um exemplo como 20 porcos perto de Abeokuta, 500 poedeiras perto de Kumasi, 4 vacas leiteiras em Nyeri ou 300 frangos perto de Thiès): um desenho com as zonas limpa, de transição e suja e a única entrada; as suas regras de pedilúvio e de lavagem das mãos; as suas regras para visitantes e veículos, com um registo de visitantes; como vai pôr os animais novos em quarentena; como vai eliminar os animais mortos; os sinais de alerta da peste suína africana ou da gripe aviária e o que vai fazer na primeira hora, com o nome e o número de telefone do seu veterinário ou do serviço veterinário.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pequenos criadores e criadores comerciais em crescimento, trabalhadores agrícolas, jovens empreendedores agrícolas e extensionistas na África Oriental, Ocidental e Central (incluindo os países de língua francesa) que criam vacas leiteiras, cabras, porcos ou aves.",
    startingPoint: "Sabem alimentar e cuidar dos animais e reconhecem um animal que parece doente. Muitos põem as fêmeas a cobrir com o macho que estiver mais perto, mantêm poucos registos escritos de reprodução e deixam entrar na exploração visitantes, comerciantes e animais novos sem nenhuma regra.",
    gap: "Os criadores que querem mais leite, carne ou ovos compram muitas vezes raças que não se adaptam ao seu clima nem à sua alimentação, perdem cios, desperdiçam inseminações e deixam a consanguinidade entrar aos poucos. Um só visitante, camião ou porco novo pode trazer a peste suína africana, que não tem vacina nem tratamento eficaz, ou a gripe aviária, que pode matar a maior parte de um bando. Uma rotina de reprodução e um plano de biossegurança escritos protegem a exploração e os vizinhos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos leem o inglês como segunda língua, e o curso existe também em espanhol, francês, árabe e outras línguas",
      "Aparelhos: um telefone simples ou um smartphone, papel e caneta; poucos dados móveis",
      "Dinheiro: primeiro as medidas de baixo custo; os valores em KES, NGN, GHS e XOF são só exemplos",
      "Regras de saúde animal: nenhuma dose de medicamentos, vacinas ou hormonas e nenhum intervalo de segurança; siga o veterinário e o rótulo",
      "A PSA e a gripe aviária são de declaração obrigatória: as suspeitas são comunicadas de imediato ao veterinário ou à autoridade veterinária, e as regras nacionais variam de país para país"
    ],
    prerequisites: "Cuidados básicos com os animais. Recomenda-se fazer primeiro \"Saúde e Maneio do Gado\" (Agricultura (África))."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com o seu clima, a comida disponível e o seu mercado", action: "escolher uma raça ou um cruzamento para a sua exploração e dar as razões da escolha", standard: "indicando pelo menos três razões que se aplicam à sua exploração" },
    { id: "O2", condition: "Usando um caderno ou o telefone durante as observações de duas vezes por dia", action: "registar os sinais de cio, as cobrições e as datas previstas de parto de cada fêmea reprodutora", standard: "sem nenhuma data em falta para os animais que reproduz" },
    { id: "O3", condition: "Quando uma vaca ou uma cabra mostra o cio de aceitação", action: "organizar a inseminação artificial com um técnico de IA formado e registado, no momento certo", standard: "chamando o técnico no mesmo dia e registando os dados do sémen ou do reprodutor" },
    { id: "O4", condition: "Com os seus registos de reprodução", action: "planear cobrições que evitam acasalar parentes próximos", standard: "sem nenhuma cobrição entre pais e filhos ou entre irmãos no plano" },
    { id: "O5", condition: "Para a sua própria exploração ou unidade", action: "escrever um plano de biossegurança com zonas, um pedilúvio, regras para visitantes, quarentena e eliminação dos animais mortos", standard: "cobrindo as cinco partes numa página" },
    { id: "O6", condition: "Quando porcos ou aves mostram sinais de alerta ou morrem de repente", action: "identificar os sinais da peste suína africana ou da gripe aviária e comunicá-los ao veterinário ou à autoridade veterinária", standard: "de imediato, sem mover, vender nem comer os animais" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Reproduzir para um rebanho melhor",
      lessons: [
        {
          title: "Escolher raças para o seu clima e o seu mercado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escolher uma raça ou um cruzamento que se adapte ao seu clima, à sua comida e aos seus compradores.",
          text: [
            "A melhor raça é a que dá dinheiro na sua exploração, não a que tem os números maiores num folheto. Uma vaca leiteira exótica de alta produção precisa de muita comida boa, água limpa, sombra e cuidados de saúde próximos. Numa zona quente e seca com pasto pobre, ela pode dar menos leite do que um cruzamento local resistente e ficar doente mais vezes.",
            "As raças locais, como o zebu da África Oriental, a cabra anã da África Ocidental ou o gado N'Dama da África Ocidental, aguentam o calor, as carraças e a comida pobre, mas crescem e produzem menos. As raças exóticas, como as vacas leiteiras Frísia ou Ayrshire, os porcos Large White ou as galinhas híbridas comerciais, produzem mais quando você as pode alimentar e proteger bem. Os cruzamentos ficam muitas vezes no meio.",
            "Comece pelo seu mercado: quem compra, o que paga (leite, peso vivo, carne magra, ovos, uma cabra para a festa) e quando. Depois veja o que consegue garantir durante todo o ano: comida, água, abrigo, mão de obra e um veterinário. Pergunte ao seu extensionista, a uma associação de criadores ou ao instituto nacional de investigação que raças se dão bem na sua zona. A base de dados DAD-IS da FAO mostra as raças criadas em cada país."
          ],
          steps: ["Escreva o que os seus compradores querem e por que pagam.", "Escreva o que consegue garantir durante todo o ano: comida, água, abrigo, mão de obra, veterinário.", "Liste duas ou três raças ou cruzamentos que os criadores perto de você têm.", "Pergunte sobre cada um ao seu extensionista ou a uma associação de criadores.", "Escolha a raça que serve as duas listas e escreva três razões."],
          words: [["Raça", "um grupo de animais da mesma espécie com o mesmo aspeto e as mesmas características, passadas dos pais para as crias."], ["Raça exótica", "uma raça criada noutra região, muitas vezes mais produtiva mas menos adaptada ao calor, às doenças e à comida locais."], ["Cruzamento", "um animal cujos pais são de duas raças diferentes."]],
          slides: [
            { title: "A raça certa dá dinheiro na SUA exploração", bullets: ["Números grandes no folheto pedem muitos recursos", "Comida pobre e calor baixam depressa a produção", "Escolha para a sua exploração, não para uma fotografia"] },
            { title: "Local, exótica ou cruzamento", bullets: ["Local: resistente, aguenta calor, carraças e comida pobre", "Exótica: alta produção, precisa de boa comida e cuidados", "Cruzamento: muitas vezes no meio"] },
            { title: "Comece pelo mercado", bullets: ["Por que pagam os compradores: leite, carne, ovos?", "Quando compram?", "O que consegue garantir durante todo o ano?"] },
            { title: "Pergunte antes de comprar", bullets: ["Extensionista ou associação de criadores", "Criadores perto de você que têm a raça", "A DAD-IS da FAO mostra as raças por país"] }
          ],
          sources: [FAO_DADIS],
          tryIt: "Escreva duas listas curtas para a sua exploração: o que os seus compradores querem e o que consegue garantir durante todo o ano. Indique duas raças ou cruzamentos e escolha um, com três razões.",
          youCanNow: "escolher uma raça ou um cruzamento que se adapte ao seu clima, à sua comida e ao seu mercado, e explicar porquê.",
          quickCheck: [
            { objective: "O1", q: "Um criador numa zona quente e seca com pasto pobre quer vacas leiteiras. Que escolha serve melhor?", options: ["A vaca exótica mais produtiva que encontrar", "Qualquer vaca que seja a mais barata no mercado", "Um cruzamento local resistente que aguente o calor e a comida", "Uma raça escolhida pela fotografia de um folheto"], answer: 2, why: "Uma raça que aguenta o calor e a comida que ele tem de verdade vai produzir mais com o tempo do que uma que precisa de recursos que ele não consegue dar." },
            { objective: "O1", q: "O que deve escrever PRIMEIRO quando escolhe uma raça?", options: ["O nome da raça de que o seu vizinho gosta", "O que os seus compradores querem e por que pagam", "A cor de que mais gosta", "A raça com os animais maiores"], answer: 1, why: "O mercado decide o que dá lucro; depois veja o que a sua exploração consegue garantir." }
          ]
        },
        {
          title: "Deteção do cio e registos de reprodução",
          objectives: ["O2"],
          minutes: 5,
          goal: "Reconhecer uma fêmea com cio e registar os cios, as cobrições e as datas de parto.",
          text: [
            "Uma vaca, uma cabra ou uma porca só pode emprenhar durante pouco tempo, quando está \"com cio\". Se o perder, espera cerca de três semanas pelo próximo, e continua a alimentá-la. As vacas, as cabras e as porcas costumam entrar em cio mais ou menos a cada 21 dias, mas isto varia, por isso observe com atenção.",
            "O sinal mais seguro numa vaca é o cio de aceitação: ela fica parada quando outro animal a monta. Outros sinais são montar outros animais, inquietação, mugidos, um corrimento claro e pegajoso da vulva e menos leite. As cabras abanam a cauda, berram e procuram o bode. Uma porca com cio fica parada quando você lhe carrega no dorso. Observe pelo menos duas vezes por dia, de manhã cedo e ao fim da tarde, durante 20 a 30 minutos, quando os animais estão calmos.",
            "Os registos transformam palpites num plano. Para cada fêmea escreva: a identificação, a data e a hora de cada cio, a data da cobrição, com que touro, bode ou varrasco ou com que palheta de IA, e a data prevista de parto. Assim sabe quando ver se o cio volta, cerca de 3 semanas depois, quando secar uma vaca e que fêmeas não conseguem emprenhar. A gestação dura cerca de 9 meses numa vaca, cerca de 5 meses numa cabra e cerca de 3 meses, 3 semanas e 3 dias numa porca; o seu veterinário ou extensionista pode dar-lhe os números exatos para a sua raça."
          ],
          steps: ["Dê a cada fêmea reprodutora uma identificação: brinco, nome ou número.", "Observe o cio duas vezes por dia, de manhã e ao fim da tarde.", "Escreva a data, a hora e os sinais que viu.", "Escreva a data da cobrição e o macho ou a palheta de IA usada.", "Junte a data para ver se o cio volta, cerca de 3 semanas depois.", "Escreva a data prevista de parto e confirme a gestação com o veterinário ou o técnico."],
          words: [["Cio (estro)", "o pouco tempo em que a fêmea aceita o macho e pode ficar prenhe."], ["Cio de aceitação", "quando a vaca fica parada para ser montada; o sinal mais seguro de que está com cio."], ["Cobrição", "o acasalamento, com um macho ou por inseminação artificial."], ["Gestação", "o tempo desde a conceção até ao parto."]],
          slides: [
            { title: "O cio é curto; perdê-lo custa 3 semanas", bullets: ["Vacas, cabras e porcas: cerca de cada 21 dias", "Cio perdido = semanas de comida sem gestação"] },
            { title: "Sinais de cio", bullets: ["Vaca: fica parada para ser montada (sinal mais seguro)", "Monta outras, inquieta, corrimento claro", "Cabra: abana a cauda; porca: fica parada quando carregada"] },
            { title: "Observe duas vezes por dia", bullets: ["De manhã cedo e ao fim da tarde", "20 a 30 minutos, quando os animais estão calmos"] },
            { title: "O registo de reprodução", bullets: ["Identificação, data e hora do cio, data da cobrição", "Macho ou palheta de IA usada", "Data para ver se o cio volta e data de parto"] }
          ],
          sources: [UGA_HEAT],
          tryIt: "Faça uma página de registo de reprodução em papel ou numa nota do telefone com estas colunas: identificação do animal, data e hora do cio, sinais vistos, data da cobrição, macho ou palheta de IA, verificação do regresso do cio, data de parto. Preencha-a para uma das suas fêmeas, ou para uma vaca de exemplo.",
          youCanNow: "reconhecer os sinais de cio e manter um registo de reprodução com os cios, as cobrições e as datas de parto.",
          quickCheck: [
            { objective: "O2", q: "Qual é o sinal mais seguro de que uma vaca está com cio?", options: ["Come mais do que o costume", "Deita-se muito", "Fica parada quando outro animal a monta", "O pelo parece brilhante"], answer: 2, why: "Ficar parada para ser montada é o sinal mais seguro de cio; os outros sinais só o sugerem." },
            { objective: "O2", q: "A sua cabra foi coberta a 1 de março. Quando observa se o cio volta?", options: ["Cerca de 3 semanas depois, por volta de 22 de março", "No dia seguinte", "Depois de 6 meses", "Nunca; ela tem de estar prenhe"], answer: 0, why: "Os cios vêm mais ou menos a cada 21 dias, por isso uma fêmea que não emprenhou volta a mostrar cio cerca de 3 semanas depois." }
          ]
        },
        {
          title: "Inseminação artificial e evitar a consanguinidade",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Organizar a IA com um técnico formado no momento certo e planear cobrições que evitam parentes próximos.",
          text: [
            "A inseminação artificial (IA) põe sémen de um macho comprovado no aparelho reprodutor da fêmea. Dá a um pequeno criador os genes de um touro ou de um bode de topo sem ter de o manter, e baixa o risco de doenças passadas pelo acasalamento. A IA é feita por um técnico de IA formado ou por um veterinário, não pelo criador. Uma técnica errada pode ferir o animal, e o sémen tem de ficar congelado em azoto líquido até ao momento de o usar, senão morre.",
            "Procure um técnico formado e registado: pergunte ao serviço de pecuária do seu distrito, à sua cooperativa de leite ou a um veterinário registado. No Quénia, o KAGRC fornece sémen através de agentes nomeados, e os técnicos de IA devem estar registados no Conselho Veterinário do Quénia (Kenya Veterinary Board); na Nigéria, confirme que o veterinário está no registo do Conselho Veterinário da Nigéria (Veterinary Council of Nigeria). Uma regra comum para as vacas é a regra manhã-tarde: uma vaca vista pela primeira vez em cio de aceitação de manhã é inseminada nessa tarde ou ao fim do dia; uma vista pela primeira vez à tarde é inseminada na manhã seguinte. Chame o técnico logo que veja o cio e anote o nome ou o código do touro da palheta.",
            "Consanguinidade quer dizer acasalar parentes próximos: um pai com a filha, uma mãe com o filho, ou um irmão com a irmã. As crias são muitas vezes mais fracas, crescem devagar, adoecem mais e podem nascer com defeitos. Acontece sem se notar quando o mesmo touro, bode, varrasco ou galo fica numa exploração durante anos. Evite-a: registe a mãe e o pai de cada animal, troque ou venda o seu macho reprodutor antes de as filhas terem idade para cobrição, peça emprestados ou troque machos com criadores cujos animais não são parentes dos seus, e use palhetas de IA de um touro diferente sempre que cobrir uma filha."
          ],
          steps: ["Vê o cio de aceitação: escreva a hora.", "Chame logo o seu técnico de IA registado.", "Use a regra manhã-tarde para as vacas, ou o conselho do técnico.", "Confirme que a palheta é de um touro conhecido e escreva o nome ou o código.", "Antes de cada cobrição, veja os registos: este macho é o pai, o filho ou o irmão dela?", "Se for, use outro macho ou outro touro de IA."],
          words: [["Inseminação artificial (IA)", "pôr à mão sémen de um macho escolhido numa fêmea; é feita por um técnico formado."], ["Palheta", "um tubo fino com uma dose de sémen congelado, com o nome ou o código do touro."], ["Azoto líquido", "um líquido muito frio que mantém o sémen congelado até ao uso."], ["Consanguinidade", "acasalar parentes próximos, o que dá crias mais fracas e com mais defeitos."]],
          slides: [
            { title: "Porquê a IA", bullets: ["Genes de alta qualidade sem manter um touro", "Menos risco de doenças passadas pelo acasalamento", "Feita por um técnico formado, não pelo criador"] },
            { title: "Procure um técnico registado", bullets: ["Serviço de pecuária, cooperativa de leite ou veterinário", "Quénia: agentes do KAGRC, Kenya Veterinary Board", "Nigéria: registo do Veterinary Council of Nigeria"] },
            { title: "Momento: a regra manhã-tarde para as vacas", bullets: ["Cio visto de manhã: inseminar nessa tarde", "Cio visto à tarde: inseminar na manhã seguinte", "Registe o nome ou o código do touro da palheta"] },
            { title: "Evite a consanguinidade", bullets: ["Nada de pai-filha, mãe-filho, irmão-irmã", "Troque o seu macho antes de as filhas serem cobertas", "Use um touro de IA diferente para cada filha"] }
          ],
          sources: [UGA_HEAT, KAGRC, KVB, VCN, ILRI_AI],
          tryIt: "Escreva o nome e o número de telefone de um técnico de IA formado e registado perto de você (pergunte ao serviço de pecuária ou à cooperativa). Depois olhe para os seus animais: liste as fêmeas que são parentes próximas do seu macho reprodutor atual e escreva como as vai cobrir em vez disso.",
          youCanNow: "organizar a IA com um técnico formado no momento certo e planear cobrições que evitam parentes próximos.",
          quickCheck: [
            { objective: "O3", q: "Uma vaca mostra cio de aceitação às 7 da manhã. Com a regra manhã-tarde, quando deve ser inseminada?", options: ["Daqui a dois dias", "Nessa tarde ou ao fim do dia", "Na próxima semana", "Só quando deixar de mostrar cio"], answer: 1, why: "Uma vaca vista pela primeira vez com cio de manhã é inseminada nessa tarde ou ao fim do dia." },
            { objective: "O4", q: "O seu touro está na exploração há quatro anos e as filhas dele já estão prontas para cobrição. O que faz?", options: ["Continua a usá-lo em todas", "Usa-o só nas filhas maiores", "Para a reprodução durante um ano", "Usa outro touro ou IA de um touro sem parentesco para as filhas dele"], answer: 3, why: "Acasalar um touro com as filhas é consanguinidade; um macho sem parentesco ou outro touro de IA evita-a." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Reproduzir para um rebanho melhor",
        questions: [
          { objective: "O1", q: "Porque é que uma raça exótica de alta produção pode render menos do que um cruzamento local em algumas explorações?", options: ["As raças exóticas nunca dão muito leite", "Os animais locais vendem-se sempre mais caros", "As raças exóticas não podem comer capim", "Precisa de comida, água e cuidados que a exploração não consegue dar, por isso produz menos e adoece mais"], answer: 3, why: "A alta produção depende de boa comida e bons cuidados; sem eles, um cruzamento resistente muitas vezes dá-se melhor." },
          { objective: "O2", q: "Com que frequência deve observar os sinais de cio?", options: ["Pelo menos duas vezes por dia, de manhã e ao fim da tarde", "Uma vez por semana", "Só quando o animal está doente", "Uma vez por mês"], answer: 0, why: "O cio é curto, por isso observar duas vezes por dia, quando os animais estão calmos, apanha a maioria dos cios." },
          { objective: "O2", q: "Qual destes dados faz parte de um registo de reprodução?", options: ["O tempo que fez cada dia", "A data da cobrição e o macho ou a palheta de IA usada", "A cor do curral", "O preço do combustível"], answer: 1, why: "A data da cobrição e o reprodutor deixam-lhe ver se o cio volta, prever a data de parto e evitar a consanguinidade." },
          { objective: "O3", q: "Quem deve fazer a inseminação artificial?", options: ["Qualquer trabalhador da exploração depois de ver um vídeo", "A pessoa que vende a vaca", "Um técnico de IA formado e registado, ou um veterinário", "Um vizinho com um braço forte"], answer: 2, why: "A IA exige formação: uma técnica errada pode ferir o animal e o sémen tem de ser manuseado corretamente." },
          { objective: "O4", q: "Que cobrição é consanguinidade?", options: ["Uma vaca com um touro de IA sem parentesco", "Uma cabra com um bode emprestado de outra aldeia", "Uma marrã com um varrasco comprado numa exploração longe", "Um carneiro com a sua própria filha"], answer: 3, why: "Um pai com a filha é um acasalamento entre parentes próximos, ou seja, consanguinidade." }
        ]
      }
    },
    {
      name: "Capítulo 2: Manter as doenças fora",
      lessons: [
        {
          title: "O seu plano de biossegurança: zonas, pedilúvios e visitantes",
          objectives: ["O5"],
          minutes: 5,
          goal: "Desenhar as zonas de biossegurança da sua exploração e escrever regras para o pedilúvio e os visitantes.",
          text: [
            "Biossegurança é tudo o que você faz para impedir que os micróbios entrem na sua exploração, se espalhem lá dentro e saiam dela. A maioria das doenças chega com animais, pessoas, sapatos, roupa, veículos, caixas, sacos de ração ou equipamento. Muitas das melhores medidas custam pouco: uma vedação, um portão, um pedilúvio, sabão e uma regra cumprida todos os dias.",
            "Divida a exploração em zonas. A zona limpa é onde vivem os animais: só lá entram as pessoas que cuidam deles. A zona de transição fica à volta: o armazém, o lugar para mudar de roupa, o pedilúvio. A zona suja fica fora: a estrada, o estacionamento, as caixas do mercado. Tenha UMA só entrada para a zona dos animais, com um portão que possa fechar. Os camiões dos comerciantes ficam fora da vedação; carregue e descarregue no limite da exploração.",
            "Na entrada, ponha um pedilúvio com um desinfetante agrícola preparado como diz o rótulo, e mude-o quando estiver sujo ou depois da chuva; a sujidade impede o desinfetante de atuar, por isso tire primeiro a lama das botas com uma escova. Melhor ainda, tenha botas e roupa só para a exploração na entrada. Tenha sabão e água para as mãos. Deixe entrar só os visitantes que têm mesmo de vir, pergunte onde estiveram com animais e escreva cada visita num registo de visitantes: data, nome, telefone, motivo e última exploração visitada."
          ],
          steps: ["Desenhe a sua exploração: casas, currais, armazém, portão e estrada.", "Marque as zonas limpa, de transição e suja.", "Escolha uma só entrada para a zona dos animais, com um portão.", "Ponha um pedilúvio e um ponto de lavagem das mãos nessa entrada.", "Se puder, tenha lá botas e roupa só para a exploração.", "Comece um registo de visitantes e mantenha os veículos dos comerciantes fora da vedação."],
          words: [["Biossegurança", "medidas que impedem os micróbios de entrar numa exploração, de se espalhar nela e de sair dela."], ["Pedilúvio", "um tabuleiro baixo com desinfetante onde as pessoas pisam para limpar as botas."], ["Desinfetante", "um produto químico que mata os micróbios; use um produto agrícola preparado como diz o rótulo."], ["Registo de visitantes", "um caderno onde escreve o nome, o contacto, o motivo e a última exploração visitada de cada visitante."]],
          slides: [
            { title: "Os micróbios chegam com...", bullets: ["Animais novos, pessoas, sapatos e roupa", "Veículos, caixas, sacos de ração e ferramentas", "A maioria das boas medidas custa pouco"] },
            { title: "Três zonas", bullets: ["Limpa: onde vivem os animais", "Transição: armazém, lugar para mudar de roupa, pedilúvio", "Suja: estrada, estacionamento, caixas do mercado"] },
            { title: "Uma só entrada, com pedilúvio", bullets: ["Um portão para a zona dos animais", "Tire a lama com a escova, depois pise o pedilúvio", "Desinfetante preparado como diz o rótulo"] },
            { title: "Visitantes", bullets: ["Só quem tem mesmo de vir", "Botas da exploração e lavagem das mãos", "Registe data, nome, telefone, motivo, última exploração"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Desenhe a sua exploração num papel. Marque as zonas limpa, de transição e suja, a única entrada, o pedilúvio e onde os camiões vão parar. Escreva três regras para visitantes por baixo do desenho.",
          youCanNow: "desenhar as zonas de biossegurança da sua exploração e definir regras para o pedilúvio, a lavagem das mãos e os visitantes.",
          quickCheck: [
            { objective: "O5", q: "Um comerciante de porcos chega para comprar leitões desmamados. Onde deve parar o camião dele?", options: ["Fora da vedação, carregando no limite da exploração", "Ao lado dos currais dos porcos", "Dentro do armazém da ração", "Onde ele quiser"], answer: 0, why: "Os veículos que visitam muitas explorações levam micróbios, por isso ficam na zona suja, fora da vedação." },
            { objective: "O5", q: "O seu pedilúvio está cheio de lama depois da chuva. O que faz?", options: ["Deixa-o; ainda funciona", "Junta só mais água", "Esvazia-o, limpa-o e enche-o de novo com desinfetante preparado como diz o rótulo", "Tira-o até à estação seca"], answer: 2, why: "A sujidade e a diluição impedem o desinfetante de atuar, por isso um pedilúvio sujo tem de ser limpo e cheio de novo." }
          ]
        },
        {
          title: "Quarentena para animais novos e eliminação segura dos mortos",
          objectives: ["O5"],
          minutes: 5,
          goal: "Preparar a quarentena para os animais novos e uma forma segura de eliminar os animais mortos.",
          text: [
            "Os animais novos são o caminho mais comum por onde as doenças entram numa exploração. Um animal pode parecer saudável e mesmo assim levar micróbios ou parasitas. Compre em explorações conhecidas e saudáveis, peça o historial de vacinas e de tratamentos do animal e evite animais de mercados ou de zonas com notícias de doença.",
            "Quarentena quer dizer manter os animais novos ou que regressam num curral separado, longe do seu rebanho ou bando, durante o tempo que o seu veterinário aconselhar, muitas vezes algumas semanas. Trate deles em último lugar cada dia, com botas e ferramentas separadas, e observe-os todos os dias. Pergunte ao veterinário se deve fazer testes, tratar ou vacinar antes de se juntarem aos outros. Os animais que voltam por vender de um mercado ou de uma feira também vão para a quarentena.",
            "Os animais mortos passam doenças aos seus animais, aos cães, aos animais selvagens e aos vizinhos. Nunca venda, coma nem dê um animal que morreu de causa desconhecida. Mexa nas carcaças com luvas e depois elimine-as como dizem o veterinário ou as regras locais: muitas vezes numa cova funda, longe da água e das casas, que os cães e os animais selvagens não conseguem escavar. Se um animal morreu de repente, ou se vários estão doentes, não abra a carcaça nem a tire da exploração: chame primeiro o veterinário, porque pode ser uma doença de declaração obrigatória ou carbúnculo (antraz)."
          ],
          steps: ["Compre só em explorações conhecidas e saudáveis; peça o historial de saúde.", "Prepare um curral de quarentena separado, longe do rebanho ou do bando.", "Mantenha lá os animais novos e os que regressam durante o tempo que o veterinário aconselhar.", "Trate deles em último lugar cada dia, com botas e ferramentas separadas.", "Escolha com o veterinário um lugar para eliminar as carcaças, longe da água e das casas.", "Mortes súbitas ou sem explicação: não abra nem mova a carcaça; chame o veterinário."],
          words: [["Quarentena", "manter os animais novos ou que regressam separados durante um tempo, para ver se levam doenças."], ["Carcaça", "o corpo de um animal morto."], ["Doença de declaração obrigatória", "uma doença que a lei manda comunicar à autoridade veterinária."]],
          slides: [
            { title: "Os animais novos trazem doenças", bullets: ["Animais com ar saudável podem levar micróbios", "Compre em explorações conhecidas e saudáveis", "Peça o historial de saúde"] },
            { title: "Quarentena", bullets: ["Curral separado, longe do rebanho ou do bando", "Durante o tempo que o veterinário aconselhar", "Trate deles por último, com botas e ferramentas separadas"] },
            { title: "Animais mortos", bullets: ["Nunca vender, comer nem dar", "Luvas; eliminar como dizem o veterinário ou as regras locais", "Cova funda, longe da água; os cães não a escavam"] },
            { title: "Mortes súbitas", bullets: ["Não abra nem mova a carcaça", "Chame primeiro o veterinário"] }
          ],
          sources: [FAO_PIG_BIOSEC, FAO_POULTRY_BIOSEC],
          tryIt: "Marque um curral de quarentena no desenho da sua exploração, o mais longe possível dos seus animais, e escreva quanto tempo o veterinário aconselha manter lá os animais novos (pergunte se não souber). Depois marque onde e como vai eliminar os animais mortos e escreva a regra para as mortes súbitas.",
          youCanNow: "pôr os animais novos em quarentena, eliminar os animais mortos com segurança e saber quando chamar o veterinário antes de tocar numa carcaça.",
          quickCheck: [
            { objective: "O5", q: "Compra três cabras no mercado. O que faz quando chega a casa?", options: ["Junta-as logo ao seu rebanho", "Mantém-nas num curral separado durante o tempo que o veterinário aconselhar", "Vende-as de imediato", "Deixa-as pastar com as cabras do vizinho"], answer: 1, why: "A quarentena mostra se os animais novos levam doenças antes de poderem infetar o seu rebanho." },
            { objective: "O5", q: "Um porco morre de repente durante a noite. Qual é o primeiro passo certo?", options: ["Abri-lo para ver o que aconteceu", "Vender a carne depressa", "Deixar a carcaça onde está, afastar pessoas e animais e chamar o veterinário", "Atirá-lo ao rio"], answer: 2, why: "Uma morte súbita pode ser uma doença de declaração obrigatória; abrir ou mover a carcaça pode espalhá-la." }
          ]
        },
        {
          title: "Peste suína africana e gripe aviária: ver, travar, comunicar",
          objectives: ["O6"],
          minutes: 6,
          goal: "Identificar os sinais de alerta da peste suína africana e da gripe aviária e comunicá-los de imediato ao veterinário.",
          text: [
            "A peste suína africana (PSA) é uma doença dos porcos causada por um vírus, que provocou grandes perdas em vários países africanos, incluindo a Nigéria. A WOAH (Organização Mundial da Saúde Animal) indica febre alta, fraqueza, perda de apetite, manchas vermelhas ou roxas na pele, vómitos, diarreia, abortos nas porcas e morte, com até 100 por cento dos porcos a morrer nas formas graves. Passa pelo contacto com porcos doentes, pela carne de porco e pelos restos de comida (lavagem) de porcos infetados, por roupa, botas, veículos e equipamento contaminados, e pelas carraças moles onde existem. O vírus sobrevive muito tempo na carne de porco e no ambiente. Não infeta as pessoas. A FAO diz que não há vacina nem tratamento eficaz, por isso a prevenção é o único controlo; a WOAH avisa contra vacinas de má qualidade, por isso nunca use uma \"vacina contra a PSA\" que a autoridade veterinária do seu país não aprovou.",
            "A gripe aviária é uma doença das aves causada por um vírus. As formas graves podem matar a maior parte de um bando em poucos dias. Os sinais indicados pelo USDA APHIS (serviço de saúde animal dos EUA) incluem mortes súbitas sem aviso, aves fracas que deixam de comer, menos ovos ou ovos de casca mole, crista, barbelas e patas inchadas e roxas, falta de ar, tosse e pescoço torcido. Passa pelas aves selvagens, aves doentes, mercados de aves vivas, fezes, caixas, ração, água e equipamento. As pessoas raramente a apanham, sobretudo por contacto próximo com aves doentes, por isso nunca mexa em aves doentes ou mortas com as mãos nuas.",
            "As duas doenças são de declaração obrigatória: as suspeitas têm de ser comunicadas de imediato ao seu veterinário ou à autoridade veterinária. Só uma análise de laboratório as pode confirmar, porque outras doenças parecem iguais. Para as prevenir: nunca dê aos porcos lavagem não cozida, compre só em explorações saudáveis, mantenha os porcos fechados e as aves abrigadas longe das aves selvagens, e use o seu plano de biossegurança todos os dias. Se suspeitar de uma das doenças: mantenha todos os animais fechados, pare todas as vendas e movimentos de animais, carne, ovos e estrume, não deixe entrar visitantes e chame o veterinário."
          ],
          steps: ["Conheça os sinais da PSA (porcos) e da gripe aviária (aves).", "Observe os seus animais todos os dias.", "Suspeita de um caso: mantenha todos os animais nos currais ou nos pavilhões.", "Pare todas as vendas e movimentos: animais, carne, ovos, estrume, equipamento.", "Não abra, não venda nem coma animais doentes ou mortos; nada de mãos nuas.", "Chame de imediato o veterinário ou o serviço veterinário e siga as instruções."],
          words: [["Peste suína africana (PSA)", "uma doença mortal dos porcos causada por um vírus, sem vacina nem tratamento eficaz; não infeta as pessoas."], ["Gripe aviária", "uma doença das aves causada por um vírus; as formas graves matam a maior parte de um bando."], ["Lavagem", "restos de comida dados aos porcos; a lavagem não cozida com carne de porco pode espalhar a PSA."], ["Autoridade veterinária", "o serviço do governo responsável pelas doenças dos animais, como os serviços veterinários nacionais ou provinciais."]],
          slides: [
            { title: "Peste suína africana (porcos)", bullets: ["Febre alta, fraqueza, não come, pele vermelha ou roxa", "Vómitos, diarreia, abortos, mortes súbitas", "Sem vacina nem tratamento eficaz (FAO)"] },
            { title: "Como se espalha a PSA", bullets: ["Porcos doentes, carne de porco e lavagem não cozida", "Botas, roupa, veículos e ferramentas", "Não infeta as pessoas"] },
            { title: "Gripe aviária (aves)", bullets: ["Mortes súbitas; aves fracas; menos ovos", "Crista e barbelas inchadas e roxas; falta de ar", "Espalhada por aves selvagens, mercados, caixas, fezes"] },
            { title: "Declaração obrigatória: comunique já", bullets: ["Todos os animais fechados; pare vendas e movimentos", "Nada de mãos nuas; não abrir, vender nem comer", "Chame já o veterinário ou o serviço veterinário"] }
          ],
          sources: [WOAH_ASF, FAO_ASF, WOAH_ASF_VACCINE, WOAH_AI, APHIS_AI],
          tryIt: "Tarefa final: escreva o seu plano de biossegurança de uma página. Use o desenho da sua exploração com as zonas, as regras do pedilúvio e dos visitantes, a quarentena e a eliminação dos animais mortos, e depois junte os sinais de alerta da PSA ou da gripe aviária, o que faz na primeira hora e o nome e o número de telefone do seu veterinário.",
          youCanNow: "reconhecer os sinais de alerta da peste suína africana e da gripe aviária, parar todos os movimentos e comunicar de imediato ao veterinário os casos suspeitos.",
          quickCheck: [
            { objective: "O6", q: "Vários dos seus porcos têm febre alta e manchas roxas na pele, e dois morreram durante a noite. O que faz primeiro?", options: ["Vende depressa os outros antes que morram", "Compra uma vacina contra a PSA no mercado", "Trata-os com restos de medicamentos", "Mantém todos os porcos fechados, para todos os movimentos e vendas e chama de imediato o veterinário"], answer: 3, why: "Estes são sinais de alerta da PSA, uma doença de declaração obrigatória: pare os movimentos e comunique logo." },
            { objective: "O6", q: "Que prática ajuda a manter a peste suína africana fora?", options: ["Nunca dar aos porcos lavagem não cozida", "Dar aos porcos restos de comida de hotéis", "Deixar os porcos andar soltos pela aldeia", "Comprar porcos a qualquer comerciante de passagem"], answer: 0, why: "Os restos de comida não cozidos podem ter carne de porco com o vírus da PSA, que sobrevive muito tempo na carne." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Manter as doenças fora",
        questions: [
          { objective: "O5", q: "Num plano de biossegurança, que área é a zona limpa?", options: ["A estrada fora da exploração", "O estacionamento dos camiões", "Onde vivem os animais", "O mercado"], answer: 2, why: "A zona limpa é a zona dos animais, onde só entram as pessoas que cuidam deles." },
          { objective: "O5", q: "Para que serve principalmente um registo de visitantes?", options: ["Para cobrar aos visitantes", "Para saber quem veio, quando e de onde, se aparecer uma doença", "Para contar quantos amigos tem", "Para fazer publicidade da exploração"], answer: 1, why: "Se aparecer uma doença, o registo ajuda o veterinário a descobrir de onde pode ter vindo." },
          { objective: "O5", q: "Como deve eliminar uma cabra que morreu de causa desconhecida?", options: ["Vender a carne barata", "Dá-la aos cães", "Deixá-la no mato", "Usar luvas e eliminá-la como dizem o veterinário ou as regras locais, longe da água"], answer: 3, why: "As carcaças espalham doenças; eliminá-las com segurança, como o veterinário aconselha, protege os animais, as pessoas e a água." },
          { objective: "O6", q: "Há alguma vacina ou tratamento eficaz que possa usar contra a peste suína africana?", options: ["Não; a FAO diz que a prevenção pela biossegurança é o único controlo", "Sim, qualquer antibiótico a cura", "Sim, vende-se em todos os mercados", "Sim, uma mistura de ervas cura-a"], answer: 0, why: "A FAO diz que não há vacina nem tratamento eficaz para a PSA, por isso o controlo é a prevenção." },
          { objective: "O6", q: "As suas poedeiras deixam de pôr de repente, algumas têm a crista inchada e roxa e muitas morrem num dia. O que faz?", options: ["Vende hoje os ovos e as aves no mercado", "Enterra as aves mortas e não diz nada", "Mantém as aves fechadas, para todos os movimentos, evita tocar com as mãos nuas e comunica de imediato ao veterinário", "Solta as aves lá fora"], answer: 2, why: "Estes sinais fazem pensar em gripe aviária, que é de declaração obrigatória e tem de ser comunicada de imediato." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Criação Animal, Reprodução e Biossegurança na Exploração",
    questions: [
      { objective: "O1", q: "O que deve guiar mais a sua escolha de raça?", options: ["O que os seus compradores querem e o que a sua exploração consegue garantir durante todo o ano", "A raça do último anúncio", "A raça com os animais maiores", "O animal mais barato do mercado"], answer: 0, why: "Uma raça só dá lucro quando serve o mercado e a sua exploração a consegue alimentar e cuidar." },
      { objective: "O1", q: "Qual é um ponto forte de muitas raças locais, como a cabra anã da África Ocidental ou o gado N'Dama?", options: ["A maior produção de leite do mundo", "Aguentam o calor, as carraças e a comida pobre", "Nunca adoecem", "Não precisam de água"], answer: 1, why: "As raças locais são resistentes; em troca, crescem e produzem menos." },
      { objective: "O1", q: "Onde pode perguntar que raças se dão bem na sua zona?", options: ["Numa publicação qualquer nas redes sociais", "A um comerciante que só vende uma raça", "Ao seu extensionista, a uma associação de criadores ou a um instituto de investigação", "A ninguém; é só comprar e ver"], answer: 2, why: "Os especialistas e os criadores locais sabem que raças rendem nas suas condições." },
      { objective: "O2", q: "Mais ou menos com que frequência entram em cio as vacas, as cabras e as porcas quando não estão prenhes?", options: ["A cada 3 dias", "A cada 6 meses", "Uma vez por ano", "Cerca de cada 21 dias"], answer: 3, why: "O ciclo normal é de cerca de 21 dias, mas varia." },
      { objective: "O2", q: "Qual é a melhor altura para observar o cio?", options: ["Só ao meio-dia", "De manhã cedo e ao fim da tarde, quando os animais estão calmos", "Só à hora da comida nos dias de mercado", "Uma vez por semana"], answer: 1, why: "Os sinais de cio veem-se melhor quando os animais estão calmos, pelo menos duas vezes por dia." },
      { objective: "O2", q: "Porque escrever a data da cobrição?", options: ["Para ver se o cio volta e saber a data de parto", "Porque a lei exige uma fotografia", "Para fixar o preço do leite", "Para escolher a marca da ração"], answer: 0, why: "A data da cobrição diz-lhe quando ver se o cio volta e quando é o parto." },
      { objective: "O2", q: "Quanto tempo dura mais ou menos a gestação de uma porca?", options: ["Cerca de 9 meses", "Cerca de 3 semanas", "Cerca de 3 meses, 3 semanas e 3 dias", "Cerca de 1 ano"], answer: 2, why: "A gestação da porca dura cerca de 3 meses, 3 semanas e 3 dias; confirme para a sua raça com o veterinário." },
      { objective: "O3", q: "Qual é uma grande vantagem da inseminação artificial para um pequeno criador?", options: ["Substitui toda a alimentação", "Deixa de ser preciso ter registos", "Acaba com todas as doenças", "Acesso a genes de alta qualidade sem manter um touro"], answer: 3, why: "A IA leva genes comprovados a pequenas explorações que não podem manter um macho de topo." },
      { objective: "O3", q: "Uma vaca mostra pela primeira vez cio de aceitação à tarde. Quando deve o técnico inseminá-la?", options: ["Na manhã seguinte", "Logo, durante a noite", "Daqui a uma semana", "No próximo cio"], answer: 0, why: "Pela regra manhã-tarde, o cio visto pela primeira vez à tarde é inseminado na manhã seguinte." },
      { objective: "O3", q: "Como encontra um técnico de IA de confiança?", options: ["Qualquer pessoa com um botijão de sémen", "Um técnico formado e registado, através do serviço de pecuária, da cooperativa ou do veterinário", "A pessoa mais barata do mercado", "Um vídeo de instruções"], answer: 1, why: "A formação e o registo protegem os seus animais e o seu dinheiro." },
      { objective: "O3", q: "Porque é que o sémen tem de ficar em azoto líquido até ser usado?", options: ["Para ficar mais pesado", "Para mudar de cor", "Porque morre se aquecer", "Para lhe juntar vitaminas"], answer: 2, why: "O sémen congelado morre se não ficar muito frio até ao momento da inseminação." },
      { objective: "O4", q: "O que acontece às crias de pais com parentesco próximo?", options: ["São sempre mais fortes", "Crescem mais depressa", "Precisam de menos comida", "São muitas vezes mais fracas, mais doentes e podem ter defeitos"], answer: 3, why: "A consanguinidade aumenta as crias fracas, doentes e com defeitos." },
      { objective: "O4", q: "Qual é uma forma simples de evitar a consanguinidade com o seu próprio macho reprodutor?", options: ["Trocá-lo ou vendê-lo antes de as filhas terem idade para cobrição", "Ficar com ele para toda a vida", "Usá-lo só na época das chuvas", "Dar-lhe mais comida"], answer: 0, why: "Mudar de macho antes de as filhas serem cobertas impede as cobrições pai-filha." },
      { objective: "O4", q: "Que registos o ajudam a evitar a consanguinidade?", options: ["Os preços da ração", "A chuva", "A mãe e o pai de cada animal", "Os nomes dos visitantes"], answer: 2, why: "Conhecer os pais mostra que animais são parentes." },
      { objective: "O5", q: "Quantas entradas deve ter a zona dos animais?", options: ["O maior número possível", "Uma, com portão, pedilúvio e lavagem das mãos", "Nenhuma; os animais andam soltos", "Uma para cada visitante"], answer: 1, why: "Uma só entrada controlada torna as regras de biossegurança fáceis de cumprir." },
      { objective: "O5", q: "Porque tirar a lama das botas antes do pedilúvio?", options: ["A sujidade impede o desinfetante de atuar", "Para poupar água", "A lama torna as botas pesadas", "Não faz diferença"], answer: 0, why: "Os desinfetantes atuam mal em superfícies sujas." },
      { objective: "O5", q: "Uns porcos voltam do mercado sem serem vendidos. O que faz?", options: ["Junta-os logo aos outros", "Dá-os no portão", "Solta-os na aldeia", "Põe-nos em quarentena como se fossem animais novos"], answer: 3, why: "Os animais do mercado podem ter apanhado doenças, por isso vão para a quarentena." },
      { objective: "O6", q: "Qual destes espalha a peste suína africana?", options: ["A chuva no telhado", "Dar farelo de milho aos porcos", "Carne de porco em restos de comida não cozidos, porcos doentes e botas ou veículos sujos", "Água limpa para beber"], answer: 2, why: "A PSA espalha-se por porcos infetados, produtos de porco, lavagem e objetos contaminados." },
      { objective: "O6", q: "A peste suína africana infeta as pessoas?", options: ["Sim, sempre", "Só as crianças", "Só os trabalhadores agrícolas", "Não, não infeta as pessoas"], answer: 3, why: "A WOAH diz que a PSA não afeta a saúde humana, mas é mortal para os porcos." },
      { objective: "O6", q: "Porque é que uma suspeita de gripe aviária tem de ser comunicada de imediato?", options: ["É de declaração obrigatória e espalha-se depressa entre explorações", "Para receber sempre uma vacina grátis", "Porque as aves deixam de comer", "Para mudar o preço no mercado"], answer: 0, why: "As doenças de declaração obrigatória têm de ser comunicadas para que a autoridade veterinária possa travar a propagação." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  // teste inicial: estas perguntas do questionário, feitas antes da Lição 1, para o questionário mostrar quanto cada aluno aprendeu
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 8, 11, 14, 16, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte do plano e verifique-a outra vez.",
    criteria: [
      { name: "Zonas e entrada", objective: "O5", notYet: "Não há desenho, ou os animais e os veículos misturam-se sem zonas marcadas.", meets: "O desenho mostra as zonas limpa, de transição e suja, uma só entrada e onde os camiões param.", exceeds: "Mostra também o caminho da ração, do estrume e dos animais mortos, para nunca atravessarem a zona limpa." },
      { name: "Regras do pedilúvio e dos visitantes", objective: "O5", notYet: "Não há pedilúvio nem regras para visitantes, ou as regras não se conseguem cumprir.", meets: "Pedilúvio com desinfetante preparado como diz o rótulo, lavagem das mãos e um registo de visitantes com a última exploração visitada.", exceeds: "Botas e roupa só para a exploração, e uma pessoa indicada que verifica as regras todos os dias." },
      { name: "Quarentena e animais mortos", objective: "O5", notYet: "Os animais novos juntam-se logo ao rebanho, ou as carcaças são vendidas, comidas ou deitadas fora.", meets: "Curral de quarentena separado durante o tempo que o veterinário aconselha, e um lugar seguro de eliminação combinado com o veterinário.", exceeds: "Trata também dos animais que voltam do mercado e da regra de nunca abrir um animal que morreu de repente." },
      { name: "Resposta à PSA ou à gripe aviária", objective: "O6", notYet: "Faltam os sinais de alerta, ou o plano diz para vender, tratar ou esperar.", meets: "Lista os sinais de alerta e o que fazer na primeira hora: manter os animais fechados, parar todos os movimentos, comunicar de imediato.", exceeds: "Indica o serviço veterinário, o número de telefone e a pessoa que vai ligar, e a regra de não dar lavagem ou de afastar as aves selvagens." },
      { name: "Reprodução e animais novos", objective: "O4", notYet: "Compram-se reprodutores novos sem verificar nada, ou o plano permite cobrições entre parentes.", meets: "Os reprodutores novos vêm de explorações conhecidas e saudáveis e o plano evita cobrições entre parentes.", exceeds: "Usa IA de touros sem parentesco ou um plano de troca de machos, com registos dos pais." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Explorações com pedilúvio, uma só entrada controlada e um registo de visitantes em uso 30 dias depois do curso (inquérito de seguimento ou visita de extensão)",
      "Alunos que mantêm um registo de reprodução e dizem ter menos cios perdidos ou inseminações repetidas",
      "Casos suspeitos de PSA ou de gripe aviária comunicados pelos alunos ao veterinário no prazo de um dia",
      "Menos mortes por doença nos rebanhos e bandos dos alunos durante o ano seguinte"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um caderno e uma caneta, ou uma nota ou folha de cálculo no telefone, para os registos de reprodução e o registo de visitantes",
      "Papel para o desenho da exploração",
      "O nome e o número de telefone de um veterinário local, do serviço veterinário e de um técnico de IA registado",
      "Cerca de 60 a 75 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Faça o curso com um grupo de criadores ou uma cooperativa: façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas em explorações reais sempre que possível.",
      "Convide o veterinário local ou o técnico de saúde animal para a sessão do Capítulo 2, para explicar como comunicar a PSA e a gripe aviária no seu país e as regras locais de eliminação.",
      "Nunca dê nem discuta doses de medicamentos, vacinas ou hormonas nem intervalos de segurança; envie todas essas perguntas para o veterinário e o rótulo.",
      "Não deixe o grupo visitar várias explorações de porcos ou de aves no mesmo dia; pratiquem a biossegurança na própria formação.",
      "Avalie o plano de biossegurança de cada aluno com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
