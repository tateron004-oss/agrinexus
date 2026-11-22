"use strict";

// Koach Learn course (Portuguese translation of africa-life/afr-clean-water-hygiene.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Safety rule kept from the English: prevention and danger signs only; no medicine doses, treatment or diagnosis.

const WHO_WATER = { name: "Organização Mundial da Saúde (OMS/WHO): ficha informativa sobre água potável", url: "https://www.who.int/news-room/fact-sheets/detail/drinking-water" };
const CDC_SAFE_WATER = { name: "Centros de Controlo e Prevenção de Doenças dos EUA (CDC): como tornar a água segura (ferver, decantar e filtrar, desinfetar)", url: "https://www.cdc.gov/healthywater/emergency/making-water-safe.html" };
const CDC_HANDS = { name: "CDC: sobre a lavagem das mãos (momentos-chave e passos)", url: "https://www.cdc.gov/clean-hands/about/index.html" };
const JMP_SANITATION = { name: "Programa Conjunto de Monitorização OMS/UNICEF (JMP): escada do saneamento", url: "https://washdata.org/monitoring/sanitation" };
const WHO_DIARRHOEA = { name: "Organização Mundial da Saúde: ficha informativa sobre doenças diarreicas", url: "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease" };
const WHO_CHOLERA = { name: "Organização Mundial da Saúde: ficha informativa sobre a cólera", url: "https://www.who.int/news-room/fact-sheets/detail/cholera" };

module.exports = {
  id: "afr-clean-water-hygiene-pt",
  lang: "pt",
  translationOf: "afr-clean-water-hygiene",
  category: "Africa: Life and Work",
  name: "Água Limpa, Saneamento e Higiene em Casa",
  skills: "Escolher a fonte de água mais segura, Tornar a água de beber mais segura, Guardar a água com segurança, Lavar as mãos com sabão, Manter seguras a latrina e as fezes das crianças, Reconhecer os sinais de perigo da diarreia e da cólera",
  outcome: "manter seguras a água, as mãos e a latrina da sua família: escolher a água mais segura, torná-la mais segura em casa, guardá-la tapada, lavar as mãos com sabão nos momentos-chave, tratar as fezes com segurança e conhecer os sinais de alerta que dizem que tem de ir já ao centro de saúde.",
  about: [
    "Os micróbios na água, nas mãos e nas fezes causam diarreia, cólera e febre tifoide. A diarreia é uma das doenças que mais matam crianças pequenas, e a maior parte pode ser evitada com água segura, sabão e uma latrina limpa. Este curso é para mães, pais, avós, cuidadores e jovens nas cidades e aldeias do Quénia, Nigéria, Gana, RD Congo, Senegal, Egito e de toda a África.",
    "Você vai comparar as fontes de água perto de si, tornar a água de beber mais segura fervendo-a ou com um produto de cloro, guardá-la para que fique limpa, preparar um lugar para lavar as mãos com sabão, manter seguras a latrina e as fezes das crianças, e aprender os sinais de perigo da diarreia e da cólera.",
    "Este curso ensina a prevenção e quando pedir ajuda. Não diz como tratar doenças nem que medicamento dar: isso é com o centro de saúde, o agente comunitário de saúde e o ministério da saúde do seu país. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em casa."
  ],
  finalTask: "Faça um plano de uma página de água limpa e higiene para a sua casa: a sua fonte de água mais segura e uma de reserva, como vai tornar a água de beber mais segura, como a vai guardar e servir, onde fica o seu lugar de lavar as mãos e os momentos-chave em que a família lava as mãos, como mantém seguras a latrina e as fezes das crianças, e um cartão de sinais de perigo com o nome e o número de telefone do centro de saúde ou do agente comunitário de saúde mais próximo.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Mães, pais, avós, cuidadores e jovens de toda a África, em cidades, bairros informais e aldeias. Muitos vão buscar água a um furo, poço, quiosque, rio ou fontanário partilhado, ou compram-na em saquinhos ou bidões, e partilham uma casa de banho ou latrina.",
    startingPoint: "Sabem que a água suja pode fazer adoecer e muitas vezes fervem a água para os bebés. Muitos não tratam toda a água de beber, guardam-na em recipientes abertos, metem copos lá dentro com a mão, lavam as mãos sem sabão ou só com água, e não têm a certeza de que sinais de diarreia precisam do centro de saúde imediatamente.",
    gap: "A diarreia, a cólera e a febre tifoide espalham-se pela água insegura, pelas mãos por lavar e pelas fezes, e matam muitas crianças pequenas. As famílias precisam de alguns hábitos diários, água segura, sabão nos momentos certos e latrinas seguras, e de saber quando ir imediatamente ao centro de saúde, para proteger os seus filhos.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos alunos falam português como segunda língua",
      "Aparelhos: um telefone simples com dados caros; as lições funcionam sem internet depois de carregadas",
      "Dinheiro: orçamentos baixos; usar métodos baratos (ferver, produtos de cloro vendidos para a água, sabão, um lugar simples para lavar as mãos)",
      "Saúde: só prevenção e sinais de alerta; nada de doses de medicamentos, tratamento ou diagnóstico; os alunos seguem o centro de saúde, o agente comunitário de saúde e o ministério da saúde",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho de casa e o emprego"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com as fontes de água perto da sua casa", action: "ordenar as fontes de água da mais segura para a mais arriscada e escolher uma para beber", standard: "dando uma razão para cada uma e indicando uma fonte de reserva" },
    { id: "O2", condition: "Com água da sua fonte e as coisas que tem em casa", action: "tornar a água de beber mais segura fervendo-a ou com um produto de cloro vendido para a água", standard: "seguindo todos os passos, incluindo deixar assentar ou filtrar primeiro a água turva e seguir o rótulo do produto" },
    { id: "O3", condition: "Com água tratada e os recipientes da sua casa", action: "guardar e servir a água de beber sem que mãos ou sujidade lhe toquem", standard: "usando um recipiente limpo e tapado e despejando ou usando uma torneira, sem nunca meter nada lá dentro" },
    { id: "O4", condition: "Com sabão ou cinza e água em casa", action: "lavar as mãos com sabão nos momentos-chave e preparar um lugar para lavar as mãos", standard: "esfregando todas as partes das mãos durante pelo menos 20 segundos, com o lugar perto da latrina e da cozinha" },
    { id: "O5", condition: "Com a sua casa de banho ou latrina e crianças pequenas em casa", action: "manter a latrina limpa e deitar fora as fezes das crianças com segurança", standard: "sem fezes deixadas ao ar livre e com uma tampa ou cobertura em uso" },
    { id: "O6", condition: "Com um familiar com diarreia ou fezes líquidas", action: "reconhecer os sinais de perigo da desidratação e da cólera e levar a pessoa imediatamente ao centro de saúde", standard: "indicando pelo menos quatro sinais de perigo e o centro de saúde ou o agente comunitário de saúde mais próximo" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Água segura para beber",
      lessons: [
        {
          title: "Escolher a fonte de água mais segura",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ordenar as fontes de água perto da sua casa da mais segura para a mais arriscada.",
          text: [
            "A água pode parecer limpa e mesmo assim ter micróbios. O maior perigo é as fezes (de pessoas ou de animais) entrarem na água. A OMS diz que a água insegura pode espalhar diarreia, cólera, disenteria, febre tifoide, hepatite A e poliomielite. A água dos rios e lagos também pode ter vermes que causam a bilharziose (schistosomíase).",
            "As fontes mais seguras são normalmente a água canalizada, um furo ou poço protegido com tampa e bomba, nascentes protegidas e a água da chuva recolhida num tanque limpo e tapado. As fontes mais arriscadas são os poços abertos, as nascentes não protegidas, os rios, charcos, lagos e barragens, onde pessoas e animais se lavam, nadam e bebem. A água de um quiosque, de um camião-cisterna ou de um saquinho só é tão segura como o lugar de onde veio e a forma como foi manuseada.",
            "Observe cada fonte perto de si. Está tapada? Há uma latrina, uma casa de banho ou um curral perto dela, ou mais acima? As pessoas lavam ali a roupa ou deixam os animais beber? Escolha a mais segura para beber e cozinhar, e uma de reserva para quando ela secar ou avariar. Até a água boa pode ficar suja no caminho para casa, por isso vai na mesma tratá-la e guardá-la bem (próximas lições)."
          ],
          steps: ["Faça a lista de todas as fontes de água que a sua família usa.", "Para cada uma pergunte: está tapada, protegida e longe de latrinas e animais?", "Ordene-as da mais segura para a mais arriscada.", "Escolha uma para beber e cozinhar, e uma de reserva.", "Use a água mais arriscada só para lavar, e trate sempre a água que bebe."],
          words: [["Fezes", "os excrementos de pessoas ou de animais (cocó)."], ["Fonte protegida", "um poço, furo ou nascente tapado e vedado para que a sujidade e a água da chuva não entrem."], ["Bilharziose (schistosomíase)", "uma doença causada por vermes muito pequenos que vivem em alguns rios e lagos."]],
          slides: [
            { title: "Água limpa à vista não é o mesmo que água segura", bullets: ["Fezes na água espalham micróbios", "Diarreia, cólera, febre tifoide, hepatite A", "Rios e lagos podem ter os vermes da bilharziose"] },
            { title: "Normalmente mais seguras", bullets: ["Água canalizada", "Furo ou poço protegido com tampa e bomba", "Nascente protegida; chuva num tanque limpo e tapado"] },
            { title: "Normalmente mais arriscadas", bullets: ["Poços abertos e nascentes não protegidas", "Rios, charcos, lagos e barragens", "Quiosque, camião-cisterna, saquinho: só tão seguros como a origem"] },
            { title: "Verifique cada fonte", bullets: ["Tapada? Longe de latrinas e animais?", "Escolha a mais segura para beber, e uma de reserva", "Mesmo assim trate-a e guarde-a bem"] }
          ],
          sources: [WHO_WATER],
          tryIt: "Escreva todas as fontes de água que a sua família usa. Marque cada uma como mais segura ou mais arriscada, e porquê. Faça um círculo à volta da que vai usar para beber e da de reserva.",
          youCanNow: "comparar as fontes de água perto de si e escolher a mais segura para beber, com uma de reserva.",
          quickCheck: [
            { objective: "O1", q: "Que fonte é normalmente a mais segura para beber?", options: ["Um furo protegido com tampa e bomba", "Um rio onde o gado bebe", "Um charco aberto", "Uma barragem onde as pessoas lavam a roupa"], answer: 0, why: "Uma fonte protegida e tapada impede a entrada das fezes e da água suja da chuva." },
            { objective: "O1", q: "A água do rio parece limpa. O que é verdade?", options: ["A água limpa à vista é sempre segura", "A água limpa à vista pode ter micróbios, por isso trate-a antes de beber", "Só a água castanha é perigosa", "Os rios limpam-se sozinhos"], answer: 1, why: "Os micróbios não se veem; a água que parece limpa pode tê-los." }
          ]
        },
        {
          title: "Tornar a água de beber mais segura em casa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Tornar a água de beber mais segura fervendo-a ou com um produto de cloro vendido para a água.",
          text: [
            "Se a sua água pode não ser segura, trate-a antes de beber, antes de preparar papas ou leite em pó para o bebé e antes de lavar os dentes. Duas formas comuns são ferver e usar cloro. As duas funcionam melhor com água transparente.",
            "Se a água estiver turva, deixe-a primeiro assentar num recipiente limpo para a sujidade ir para o fundo, e depois despeje a água limpa por um pano limpo dobrado várias vezes. Deixar assentar e filtrar com pano não torna a água segura sozinho; só a prepara para ferver ou para o cloro.",
            "Ferver: deixe a água ferver em cachão, com bolhas grandes, durante 1 minuto. Nas montanhas altas, acima de cerca de 2.000 metros, ferva durante 3 minutos. Deixe arrefecer, tapada, na mesma panela ou num recipiente limpo.",
            "Cloro: use um produto de cloro vendido para a água de beber (líquido, comprimidos ou saquetas) ou um que o seu agente de saúde lhe dê. Siga o rótulo à risca: quanto produto para quanta água e quanto tempo esperar antes de beber (muitas vezes pelo menos 30 minutos). A água turva pode precisar de mais; o rótulo diz-lhe. Guarde o cloro longe das crianças. Se não tiver rótulo ou tiver dúvidas, pergunte ao agente comunitário de saúde ou ao centro de saúde. A OMS testa alguns produtos de tratamento da água em casa; o ministério da saúde pode dizer quais são aprovados onde você vive."
          ],
          steps: ["Se estiver turva: deixe assentar e depois despeje-a por um pano limpo dobrado.", "Ferver: em cachão durante 1 minuto (3 minutos nas montanhas altas), depois deixe arrefecer tapada.", "Ou cloro: junte o produto como diz o rótulo, mexa e espere o tempo indicado no rótulo.", "Despeje-a num recipiente limpo e tapado.", "Guarde os produtos de cloro fora do alcance das crianças."],
          words: [["Ferver em cachão", "água a ferver com força, com bolhas grandes que não param quando se mexe."], ["Produto de cloro", "um líquido, comprimido ou saqueta vendido para matar os micróbios da água de beber."], ["Deixar assentar", "deixar a água parada para a sujidade ir para o fundo."]],
          slides: [
            { title: "Quando tratar a água", bullets: ["Antes de beber", "Antes de preparar papas ou leite em pó para o bebé", "Antes de lavar os dentes"] },
            { title: "Água turva primeiro", bullets: ["Deixe assentar", "Despeje por um pano limpo dobrado", "Isto prepara a água; ainda não é segura"] },
            { title: "Ferver", bullets: ["Em cachão durante 1 minuto", "3 minutos acima de cerca de 2.000 metros", "Deixe arrefecer tapada"] },
            { title: "Cloro", bullets: ["Um produto vendido para a água de beber", "Siga o rótulo: quantidade e tempo de espera", "Dúvidas? Pergunte ao agente de saúde; longe das crianças"] }
          ],
          sources: [CDC_SAFE_WATER, WHO_WATER],
          tryIt: "Escolha uma forma, ferver ou um produto de cloro, e trate hoje um recipiente de água de beber, passo a passo. Escreva cada passo que fez.",
          youCanNow: "tornar mais segura para beber a água turva ou duvidosa, deixando-a assentar e depois fervendo-a ou usando um produto de cloro como diz o rótulo.",
          quickCheck: [
            { objective: "O2", q: "A sua água está turva. O que faz antes de a ferver ou de juntar cloro?", options: ["Junta açúcar", "Bebe-a depressa", "Deixa-a assentar e despeja-a por um pano limpo dobrado", "Nada; a água turva está boa"], answer: 2, why: "Deixar assentar e filtrar tira a sujidade, e assim ferver ou o cloro funcionam melhor." },
            { objective: "O2", q: "Em altitudes normais, quanto tempo deixa a água a ferver em cachão?", options: ["Só até ficar morna", "5 segundos", "Até metade desaparecer", "1 minuto"], answer: 3, why: "O CDC aconselha ferver em cachão durante 1 minuto, ou 3 minutos nas montanhas altas." }
          ]
        },
        {
          title: "Guardar e servir a água com segurança",
          objectives: ["O3"],
          minutes: 4,
          goal: "Guardar e servir a água de beber sem que mãos ou sujidade lhe toquem.",
          text: [
            "A água segura pode voltar a ficar suja em casa. Os micróbios entram quando se metem mãos ou copos no recipiente, quando fica aberto ou quando o próprio recipiente está sujo.",
            "Guarde a água de beber num recipiente limpo com tampa, de preferência com gargalo estreito ou torneira. Mantenha-o fora do chão e longe dos animais. Despeje a água ou use a torneira; nunca meta lá dentro um copo ou a mão. Lave o recipiente e a tampa muitas vezes com sabão e água segura, e deixe secar de boca para baixo.",
            "Tapar a água também impede os mosquitos de porem lá os ovos. Mantenha a água de beber separada da água para lavar. Uma família em Kumasi, Lubumbashi ou Kano pode usar a mesma regra: um recipiente de água de beber limpo e tapado em cada casa, e ninguém mete nada lá dentro."
          ],
          steps: ["Use um recipiente limpo com tampa, gargalo estreito ou torneira.", "Mantenha-o levantado do chão, longe dos animais.", "Despeje ou use a torneira: não meta copos nem mãos.", "Lave o recipiente muitas vezes com sabão e água segura.", "Mantenha a água de beber separada da água para lavar."],
          words: [["Recipiente", "um bidão, balde, panela ou garrafa que guarda água."], ["Meter lá dentro", "pôr um copo ou a mão na água para tirar um pouco."]],
          slides: [
            { title: "A água segura pode voltar a ficar suja", bullets: ["Meter mãos ou copos", "Recipientes abertos", "Recipientes sujos"] },
            { title: "Guarde bem", bullets: ["Recipiente limpo com tampa, gargalo estreito ou torneira", "Fora do chão, longe dos animais", "Separado da água para lavar"] },
            { title: "Sirva bem", bullets: ["Despeje, ou use a torneira", "Nunca meta um copo ou a mão", "Lave o recipiente com sabão muitas vezes"] }
          ],
          sources: [WHO_WATER, CDC_SAFE_WATER],
          tryIt: "Veja como a sua casa guarda a água de beber. Está tapada? Alguém mete copos lá dentro? Faça hoje uma mudança, como uma tampa, uma concha de cabo comprido pendurada num gancho, ou um recipiente com torneira.",
          youCanNow: "guardar e servir a água de beber para que continue limpa depois de a tratar.",
          quickCheck: [
            { objective: "O3", q: "Qual é a forma mais segura de tirar água do recipiente onde está guardada?", options: ["Meter um copo lá dentro", "Despejá-la ou usar uma torneira", "Meter a mão lá dentro", "Deixar a tampa aberta para ser mais rápido"], answer: 1, why: "Despejar ou usar uma torneira mantém as mãos e os copos fora da água limpa." },
            { objective: "O3", q: "Porque manter uma tampa no recipiente da água de beber?", options: ["Impede a entrada de sujidade, mãos e mosquitos", "Deixa a água mais fria", "É só para ficar bonito", "Faz a água ferver"], answer: 0, why: "Uma tampa impede a entrada de sujidade, micróbios e ovos de mosquito." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Água segura para beber",
        questions: [
          { objective: "O1", q: "Há uma latrina mesmo acima de um poço aberto e pouco fundo. O que faz?", options: ["Bebe dele; a água parece limpa", "Usa o poço só para beber", "Escolhe uma fonte mais segura para beber e trata a água que bebe", "Põe uma tampa só na latrina"], answer: 2, why: "As fezes podem escorrer de uma latrina para um poço aberto perto; escolha uma fonte mais segura e trate a água de beber." },
          { objective: "O2", q: "Que frase sobre os produtos de cloro para a água está certa?", options: ["Use quanto quiser", "Beba logo a seguir", "Qualquer lixívia é igual", "Siga o rótulo: quanto usar e quanto tempo esperar"], answer: 3, why: "O rótulo dá a quantidade certa e o tempo de espera para esse produto." },
          { objective: "O2", q: "Vive nas montanhas altas, acima de cerca de 2.000 metros. Quanto tempo ferve a água?", options: ["3 minutos em cachão", "10 segundos", "Só 1 minuto", "Não é preciso ferver"], answer: 0, why: "Lá em cima a água ferve a uma temperatura mais baixa, por isso o CDC aconselha 3 minutos." },
          { objective: "O3", q: "O seu filho mete um copo no balde da água. Qual é a melhor mudança?", options: ["Dizer-lhe para meter mais depressa", "Usar um recipiente tapado de onde se despeja, ou um com torneira", "Deixar o balde aberto", "Juntar açúcar à água"], answer: 1, why: "Despejar ou usar uma torneira impede que mãos e copos sujos cheguem à água limpa." },
          { objective: "O1", q: "A água de um quiosque ou de um camião-cisterna é...", options: ["Sempre segura", "Nunca segura", "Só segura quando está morna", "Só tão segura como a sua origem e a forma como foi manuseada"], answer: 3, why: "A água comprada pode estar limpa ou suja; pergunte de onde vem e guarde-a bem na mesma." }
        ]
      }
    },
    {
      name: "Capítulo 2: Mãos limpas, latrinas seguras, ação rápida",
      lessons: [
        {
          title: "Lavar as mãos com sabão nos momentos-chave",
          objectives: ["O4"],
          minutes: 5,
          goal: "Lavar as mãos com sabão nos momentos-chave e preparar um lugar para lavar as mãos em casa.",
          text: [
            "Lavar as mãos com sabão é uma das formas mais baratas de evitar a diarreia e as infeções do peito. Só água não chega; o sabão tira os micróbios das mãos.",
            "Momentos-chave: depois de usar a latrina; depois de limpar o rabo de uma criança ou de mudar uma fralda; antes, durante e depois de preparar a comida; antes de comer e antes de dar de comer a uma criança; depois de cuidar de alguém doente com diarreia ou vómitos; depois de assoar o nariz, tossir ou espirrar; e depois de tocar em animais ou no lixo.",
            "Como: molhe as mãos com água limpa a correr, ponha sabão, esfregue as palmas, as costas das mãos, entre os dedos e debaixo das unhas durante pelo menos 20 segundos (mais ou menos o tempo de cantar duas vezes uma canção curta), enxague em água a correr e deixe secar ao ar ou use um pano limpo. Onde não há torneira, ajuda ter um lugar para lavar as mãos: um bidão ou garrafa com um pequeno furo e uma tampa, pendurado ou inclinado com um pau que se pisa (muitas vezes chamado \"tippy tap\"), com sabão preso num fio e um pouco de cascalho por baixo para a água suja. Ponha-o perto da latrina e perto de onde cozinha."
          ],
          steps: ["Molhe as mãos com água limpa a correr.", "Ponha sabão.", "Esfregue as palmas, as costas, entre os dedos e debaixo das unhas durante pelo menos 20 segundos.", "Enxague em água a correr.", "Deixe secar ao ar ou use um pano limpo.", "Prepare um lugar para lavar as mãos perto da latrina e da cozinha."],
          words: [["Momentos-chave", "os momentos em que lavar as mãos trava mais micróbios."], ["Lugar para lavar as mãos", "um sítio fixo com água e sabão para lavar as mãos."], ["Tippy tap", "um lugar simples para lavar as mãos feito com um bidão ou garrafa que se inclina com um pedal de pé."]],
          slides: [
            { title: "Sabão, não só água", bullets: ["O sabão tira os micróbios das mãos", "Evita a diarreia e as infeções do peito"] },
            { title: "Momentos-chave", bullets: ["Depois da latrina ou de limpar o rabo de uma criança", "Antes de cozinhar, comer ou dar de comer a uma criança", "Depois de cuidar de doentes; depois de animais ou lixo"] },
            { title: "Como lavar", bullets: ["Molhar, pôr sabão, esfregar pelo menos 20 segundos", "Palmas, costas, entre os dedos, debaixo das unhas", "Enxaguar em água a correr; secar ao ar ou com pano limpo"] },
            { title: "Um lugar em casa", bullets: ["Bidão ou garrafa com torneira ou pau para inclinar", "Sabão preso num fio; cascalho por baixo", "Perto da latrina e da cozinha"] }
          ],
          sources: [CDC_HANDS, WHO_WATER],
          tryIt: "Prepare ou melhore hoje um lugar para lavar as mãos em casa, com água e sabão, perto da latrina ou da cozinha. Depois mostre a cada pessoa da casa como lavar durante 20 segundos.",
          youCanNow: "lavar bem as mãos com sabão nos momentos-chave e preparar um lugar para lavar as mãos em casa.",
          quickCheck: [
            { objective: "O4", q: "Quando tem de lavar as mãos com sabão?", options: ["Só uma vez por dia", "Só antes de ir à igreja ou à mesquita", "Depois da latrina, depois de limpar o rabo de uma criança e antes de cozinhar ou comer", "Só quando parecem sujas"], answer: 2, why: "Estes momentos-chave impedem que os micróbios das fezes cheguem à comida e à boca." },
            { objective: "O4", q: "Durante quanto tempo deve esfregar com sabão?", options: ["2 segundos", "Até o sabão acabar", "Só as palmas, depressa", "Pelo menos 20 segundos, todas as partes das mãos"], answer: 3, why: "Esfregar todas as partes durante pelo menos 20 segundos tira os micróbios." }
          ]
        },
        {
          title: "Latrinas seguras e as fezes das crianças",
          objectives: ["O5"],
          minutes: 5,
          goal: "Manter a sua latrina limpa e deitar fora as fezes das crianças com segurança.",
          text: [
            "As fezes deixadas ao ar livre, no mato, num campo, numa vala ou num rio, têm micróbios que as moscas, os pés, a chuva e as mãos trazem de volta para a comida e a água. A OMS e a UNICEF consideram uma latrina mais segura quando separa as fezes das pessoas: uma sanita com autoclismo ou com balde de água, ou uma latrina de fossa com laje. Uma latrina que a sua casa não partilha com outras é ainda melhor.",
            "Mantenha a casa de banho ou a latrina limpa: lave a laje ou o assento muitas vezes, mantenha a tampa ou a cobertura no buraco para afastar as moscas, e tenha um lugar para lavar as mãos mesmo ao lado. As crianças também precisam de uma latrina que possam usar com segurança, como um bacio ou uma pequena cobertura para o buraco.",
            "As fezes das crianças pequenas são tão perigosas como as dos adultos. Ponha-as logo na latrina, incluindo as das fraldas e dos bacios, e depois lave o bacio e as mãos com sabão. Não as deixe no quintal nem as deite na vala ou no lixo."
          ],
          steps: ["Lave a laje ou o assento muitas vezes.", "Mantenha a tampa ou a cobertura no buraco.", "Tenha sabão e água mesmo ao lado da latrina.", "Ponha logo as fezes das crianças na latrina.", "Lave o bacio e as mãos com sabão."],
          words: [["Latrina", "uma casa de banho por cima de uma fossa no chão."], ["Laje", "o chão firme por cima de uma latrina de fossa, onde se põem os pés."], ["Defecação ao ar livre", "fazer as necessidades em campos, no mato, em rios ou noutros lugares abertos."]],
          slides: [
            { title: "As fezes ao ar livre voltam", bullets: ["Moscas, pés, chuva e mãos levam os micróbios", "Para a comida e a água"] },
            { title: "Uma latrina mais segura", bullets: ["Sanita com autoclismo ou balde de água, ou latrina de fossa com laje", "É melhor não a partilhar com outras casas", "Tampa ou cobertura posta; sabão e água ao lado"] },
            { title: "As fezes das crianças", bullets: ["Tão perigosas como as dos adultos", "Logo para a latrina", "Lave o bacio e as mãos com sabão"] }
          ],
          sources: [JMP_SANITATION, WHO_DIARRHOEA],
          tryIt: "Verifique hoje a sua casa de banho ou latrina: está limpa, tapada e perto de sabão e água? Corrija uma coisa. Combine com a família para onde vão sempre as fezes das crianças.",
          youCanNow: "manter uma casa de banho ou latrina limpa e tapada e deitar fora as fezes das crianças com segurança.",
          quickCheck: [
            { objective: "O5", q: "Para onde vão as fezes de um bebé que estão na fralda?", options: ["Logo para a latrina", "Para o quintal", "Para a vala", "Para o monte de lixo"], answer: 0, why: "As fezes das crianças também têm micróbios e têm de ir para a latrina." },
            { objective: "O5", q: "Porque manter uma tampa ou cobertura no buraco da latrina?", options: ["Para a manter quente", "Para as moscas não levarem micróbios para a comida", "Só para esconder o cheiro", "Não é preciso"], answer: 1, why: "As moscas que pousam nas fezes podem levar micróbios para a comida." }
          ]
        },
        {
          title: "Diarreia e cólera: quando ir já ao centro de saúde",
          objectives: ["O6"],
          minutes: 6,
          goal: "Reconhecer os sinais de perigo da desidratação e da cólera e pedir ajuda imediatamente.",
          text: [
            "A diarreia tira água e sais do corpo. A isto chama-se desidratação, e pode matar uma criança pequena muito depressa. A cólera pode causar quantidades enormes de fezes líquidas e, diz a OMS, pode matar em poucas horas se não for tratada. Não espere para ver se melhora.",
            "Vá JÁ ao centro de saúde, posto de saúde ou agente comunitário de saúde se a pessoa: está muito sonolenta, fraca, mole ou difícil de acordar; não consegue beber ou bebe muito mal; tem os olhos encovados; tem a pele que volta ao lugar muito devagar quando se belisca; tem muitas fezes líquidas, como água de arroz; tem sangue nas fezes; vomita várias vezes seguidas; ou tem diarreia que dura muitos dias. Um bebé ou uma criança pequena com diarreia precisa de cuidado redobrado.",
            "Os sais de reidratação oral (SRO) repõem a água e os sais perdidos, e os agentes de saúde também dão zinco às crianças. Pergunte ao centro de saúde, ao agente comunitário de saúde ou à farmácia como usar os SRO; dê-os no caminho, como eles disserem, mas vá na mesma. Continue a amamentar. Num surto de cólera, ouça o ministério da saúde: pode fazer campanhas de vacinação e abrir centros de tratamento. Escreva num cartão o nome e o número de telefone do centro de saúde e do agente comunitário de saúde mais próximos, e guarde dinheiro para o transporte se puder."
          ],
          steps: ["Observe de perto qualquer pessoa com diarreia, sobretudo as crianças pequenas.", "Procure os sinais de perigo.", "Se vir algum, vá já ao centro de saúde ou ligue ao agente comunitário de saúde.", "Pergunte ao agente de saúde como dar os SRO, e continue a amamentar.", "Lave as mãos com sabão depois de cada contacto e limpe com segurança."],
          words: [["Desidratação", "quando o corpo perde demasiada água e sal."], ["SRO (sais de reidratação oral)", "uma mistura de sais e açúcar que, misturada com água segura, repõe o que a diarreia tira."], ["Cólera", "uma doença da água ou comida suja que causa diarreia muito líquida e pode matar depressa."], ["Surto", "muitos casos de uma doença na mesma zona ao mesmo tempo."]],
          slides: [
            { title: "A diarreia pode matar depressa", bullets: ["O corpo perde água e sais", "A cólera pode matar em poucas horas", "Não espere"] },
            { title: "Vá JÁ ao centro de saúde se", bullets: ["Muito sonolenta, mole, difícil de acordar; não consegue beber", "Olhos encovados; a pele beliscada volta devagar", "Muitas fezes como água de arroz; sangue nas fezes", "Vomita várias vezes seguidas; dura muitos dias"] },
            { title: "No caminho", bullets: ["Pergunte a um agente de saúde como dar os SRO", "Continue a amamentar", "Lave as mãos depois de cada contacto"] },
            { title: "Esteja preparado", bullets: ["Cartão com os números do centro de saúde e do agente de saúde", "Dinheiro para o transporte, se puder", "Num surto, siga o ministério da saúde"] }
          ],
          sources: [WHO_DIARRHOEA, WHO_CHOLERA],
          tryIt: "Faça um cartão de sinais de perigo: escreva quatro ou mais sinais de perigo, o nome e o número de telefone do centro de saúde ou do agente comunitário de saúde mais próximo, e como chegaria lá. Pendure-o na parede.",
          youCanNow: "reconhecer os sinais de perigo da desidratação e da cólera e levar a pessoa imediatamente ao centro de saúde.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um sinal de perigo que quer dizer ir já ao centro de saúde?", options: ["Uma única vez fezes moles", "Uma criança a brincar normalmente", "Uma criança muito sonolenta que não consegue beber", "Ter sede depois do futebol"], answer: 2, why: "Estar muito sonolento e não conseguir beber são sinais de desidratação grave." },
            { objective: "O6", q: "Durante um surto de cólera, um vizinho tem muitíssimas fezes líquidas como água de arroz. O que faz?", options: ["Espera até amanhã", "Dá qualquer medicamento que tenha em casa", "Esconde isso dos agentes de saúde", "Ajuda-o a ir já a um centro de saúde ou centro de tratamento"], answer: 3, why: "A cólera pode matar em poucas horas; um tratamento rápido no centro de saúde salva vidas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Mãos limpas, latrinas seguras, ação rápida",
        questions: [
          { objective: "O4", q: "No lugar de lavar as mãos há água mas não há sabão. O que é verdade?", options: ["Só água chega", "É preciso sabão para tirar os micróbios; arranje sabão para esse lugar", "As mãos não precisam de ser lavadas", "Use o balde da água de beber"], answer: 1, why: "O sabão tira os micróbios que a água sozinha deixa ficar." },
          { objective: "O4", q: "Qual é o melhor sítio para um lugar de lavar as mãos?", options: ["Perto da latrina e perto de onde cozinha", "Longe de casa", "Dentro do balde da água de beber", "No quarto"], answer: 0, why: "Perto da latrina e da cozinha, é fácil lavar as mãos nos momentos-chave." },
          { objective: "O5", q: "Há fezes de uma criança pequena no quintal. O que faz?", options: ["Varre-as para a vala", "Deixa-as secar", "Tapa-as com areia e deixa-as lá", "Põe-nas na latrina e lava as mãos com sabão"], answer: 3, why: "O lugar das fezes das crianças é a latrina; depois lave as mãos." },
          { objective: "O6", q: "O seu filho tem diarreia e os olhos encovados, e a pele beliscada volta devagar. O que faz?", options: ["Espera dois dias", "Para de lhe dar qualquer bebida", "Vai já ao centro de saúde e pergunta como dar os SRO no caminho", "Dá-lhe um medicamento de adulto"], answer: 2, why: "Estes são sinais de desidratação; um agente de saúde tem de ver a criança já." },
          { objective: "O6", q: "Para que servem os SRO?", options: ["Matam os mosquitos", "Repõem a água e os sais perdidos na diarreia", "Limpam a latrina", "Fazem a água ferver mais depressa"], answer: 1, why: "Os SRO repõem a água e os sais que a diarreia tira do corpo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Água Limpa, Saneamento e Higiene em Casa",
    questions: [
      { objective: "O1", q: "Qual é o maior perigo para a segurança da água de beber?", options: ["Fezes a entrar na água", "Água fria", "Água dura", "Água com sabor a ferro"], answer: 0, why: "A OMS diz que os micróbios das fezes são o maior risco para a água de beber." },
      { objective: "O1", q: "Que pergunta ajuda a avaliar um poço?", options: ["De que cor é o balde?", "Está tapado e longe de latrinas e animais?", "Quem o cavou?", "Fica perto do mercado?"], answer: 1, why: "Uma fonte tapada e longe de latrinas e animais tem menos probabilidade de ter fezes." },
      { objective: "O1", q: "O furo que costuma usar está avariado. O que faz?", options: ["Bebe água do rio sem a tratar", "Deixa de beber", "Usa a fonte de reserva e trata a água antes de beber", "Usa a água para lavar"], answer: 2, why: "Uma fonte de reserva e o tratamento mantêm a água de beber mais segura quando a fonte principal falha." },
      { objective: "O2", q: "Que duas formas tornam a água de beber mais segura em casa?", options: ["Juntar açúcar ou sal", "Deixá-la ao sol durante uma hora ou abaná-la", "Arrefecê-la ou congelá-la", "Fervê-la, ou usar um produto de cloro vendido para a água"], answer: 3, why: "Ferver e os produtos de cloro matam os micróbios; as outras formas não." },
      { objective: "O2", q: "Despejar água turva por um pano torna-a segura?", options: ["Não; tira a sujidade, mas ainda tem de a ferver ou juntar cloro", "Sim, sempre", "Só se o pano for novo", "Sim, se o fizer duas vezes"], answer: 0, why: "O pano tira a sujidade, não todos os micróbios; ainda precisa de ferver ou usar cloro." },
      { objective: "O2", q: "Tem um produto de cloro mas perdeu o rótulo. O que faz?", options: ["Adivinha a quantidade", "Põe muito para ter a certeza", "Pergunta ao agente comunitário de saúde ou ao centro de saúde como o usar", "Bebe logo depois de o juntar"], answer: 2, why: "A quantidade certa e o tempo de espera são importantes; um agente de saúde pode dizer-lhe." },
      { objective: "O2", q: "Antes de preparar o leite em pó do bebé, a água deve estar...", options: ["Acabada de tirar do rio", "Tratada: fervida e arrefecida, ou tratada com segurança", "Morna do sol", "Qualquer água serve"], answer: 1, why: "Os bebés correm mais risco; a água deles tem de ser tratada primeiro." },
      { objective: "O3", q: "Qual é o melhor recipiente para a água de beber?", options: ["Um balde aberto no chão", "Um recipiente usado para combustível", "Um recipiente limpo e tapado, com gargalo estreito ou torneira, fora do chão", "Qualquer panela"], answer: 2, why: "Limpo, tapado e fora do chão mantém segura a água tratada." },
      { objective: "O3", q: "Porque ninguém deve meter um copo na água de beber?", options: ["As mãos e os copos levam micróbios para a água limpa", "Gasta água", "Faz barulho", "É falta de educação"], answer: 0, why: "Meter um copo leva os micróbios das mãos e dos copos para todo o recipiente." },
      { objective: "O3", q: "Com que frequência deve lavar o recipiente da água?", options: ["Nunca", "Uma vez por ano", "Só quando cheira mal", "Muitas vezes, com sabão e água segura, e depois secar de boca para baixo"], answer: 3, why: "Lavar com regularidade impede que os micróbios se acumulem dentro do recipiente." },
      { objective: "O4", q: "Qual destes é um momento-chave para lavar as mãos?", options: ["Antes de dar de comer a uma criança", "Depois de ver televisão", "Só antes de dormir", "Depois de beber água"], answer: 0, why: "Mãos limpas antes de dar de comer a uma criança mantêm os micróbios longe da boca dela." },
      { objective: "O4", q: "Que partes das mãos deve esfregar?", options: ["Só as pontas dos dedos", "Palmas, costas, entre os dedos e debaixo das unhas", "Só as palmas", "Só a mão direita"], answer: 1, why: "Os micróbios escondem-se em todas as partes da mão, por isso esfregue todas." },
      { objective: "O4", q: "Não tem torneira em casa. Como pode lavar as mãos em água a correr?", options: ["Mete as mãos no balde da água de beber", "Só as limpa a um pano", "Faz um lugar para lavar as mãos com um bidão ou garrafa que deita água, com sabão preso num fio", "Não as lava"], answer: 2, why: "Um lugar simples dá água a correr para lavar sem estragar a água guardada." },
      { objective: "O5", q: "Que latrina a OMS e a UNICEF consideram mais segura?", options: ["Um campo longe de casa", "Um balde despejado na vala", "Uma fossa sem laje", "Uma latrina de fossa com laje, ou uma sanita com autoclismo ou balde de água"], answer: 3, why: "Estas separam as fezes das pessoas; uma fossa sem laje ou os campos abertos não." },
      { objective: "O5", q: "O que deve estar sempre ao lado da latrina?", options: ["Sabão e água para lavar as mãos", "O recipiente da água de beber", "Comida", "Nada"], answer: 0, why: "Lavar as mãos logo depois da latrina impede os micróbios de se espalharem." },
      { objective: "O5", q: "Porque são perigosas as fezes das crianças?", options: ["Não são perigosas", "Têm micróbios tal como as fezes dos adultos", "Só porque cheiram mal", "Só quando a criança está doente"], answer: 1, why: "As fezes das crianças têm os mesmos micróbios e têm de ir para a latrina." },
      { objective: "O6", q: "Qual destes precisa já do centro de saúde?", options: ["Uma vez fezes moles e a criança está a brincar", "Uma criança com sede depois de correr", "Sangue nas fezes", "Uma criança que quer comer"], answer: 2, why: "Sangue nas fezes é um sinal de perigo que precisa de um agente de saúde." },
      { objective: "O6", q: "Porque não deve esperar quando alguém tem sinais de cólera?", options: ["Porque é uma vergonha", "Porque o centro de saúde fecha cedo", "Passa sozinha", "A cólera pode matar em poucas horas sem tratamento"], answer: 3, why: "A OMS diz que a cólera pode ser mortal em poucas horas se não for tratada." },
      { objective: "O6", q: "Um bebé tem diarreia. O que continua a fazer enquanto procura ajuda?", options: ["Continua a amamentar", "Para todo o leite", "Para todas as bebidas", "Dá um medicamento de adulto"], answer: 0, why: "Amamentar continua a dar água e alimento ao bebé; o agente de saúde aconselha o resto." },
      { objective: "O6", q: "O que deve ter o seu cartão de sinais de perigo?", options: ["O PIN do seu dinheiro móvel", "Os sinais de perigo e o nome e número do centro de saúde ou do agente de saúde mais próximo", "Uma lista de medicamentos e doses", "Nada; vai lembrar-se"], answer: 1, why: "Numa emergência, os sinais e a quem ligar são o que precisa logo." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 8, 11, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Fonte de água", objective: "O1", notYet: "Nenhuma fonte escolhida, ou uma fonte arriscada escolhida sem razão.", meets: "Fontes ordenadas com razões; a mais segura escolhida para beber e uma de reserva indicada.", exceeds: "Também indica o que torna cada fonte arriscada (latrinas, animais, sem tampa) e a quem avisar sobre uma fonte avariada ou suja." },
      { name: "Tornar a água mais segura", objective: "O2", notYet: "Nenhum método de tratamento, ou um método a que faltam passos (sem tempo de fervura, sem tempo de espera do rótulo).", meets: "Ferver ou um produto de cloro, deixando primeiro assentar a água turva, com todos os passos e a regra do rótulo.", exceeds: "Também tem um método de reserva planeado, e o cloro está fora do alcance das crianças." },
      { name: "Guardar e servir", objective: "O3", notYet: "Recipiente aberto, ou ainda se metem copos lá dentro.", meets: "Um recipiente limpo e tapado, fora do chão, de onde se despeja ou com torneira, lavado muitas vezes.", exceeds: "A água de beber fica separada da água para lavar, e todos em casa conhecem a regra de não meter nada lá dentro." },
      { name: "Lavar as mãos", objective: "O4", notYet: "Nenhum lugar para lavar as mãos ou sem sabão; faltam os momentos-chave.", meets: "Um lugar com água e sabão perto da latrina ou da cozinha, e os momentos-chave escritos.", exceeds: "Lugares perto da latrina e da cozinha, e foi mostrada a cada pessoa da família a lavagem de 20 segundos." },
      { name: "Latrina e fezes das crianças", objective: "O5", notYet: "Fezes deixadas ao ar livre ou nenhum plano para as fezes das crianças.", meets: "A latrina está limpa e tapada, e as fezes das crianças vão sempre para lá.", exceeds: "A limpeza é dividida entre os membros da família, com sabão ao lado da latrina." },
      { name: "Cartão de sinais de perigo", objective: "O6", notYet: "Menos de quatro sinais de perigo, ou nenhum contacto do centro de saúde.", meets: "Pelo menos quatro sinais de perigo e o nome e número do centro de saúde ou do agente de saúde mais próximo.", exceeds: "Também como chegar lá e um plano para o dinheiro do transporte, sem nenhuma dose de medicamento no cartão." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Casas que tratam toda a água de beber e a guardam tapada 30 dias depois (inquérito de seguimento)",
      "Casas com um lugar para lavar as mãos com sabão 30 dias depois",
      "Menos episódios de diarreia nas crianças pequenas, segundo as famílias ou os agentes comunitários de saúde, na estação seguinte",
      "Chegada mais rápida ao centro de saúde em casos de diarreia com sinais de perigo, segundo os agentes comunitários de saúde"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Sabão, um recipiente de água com tampa e um bidão ou garrafa para um lugar de lavar as mãos",
      "Uma panela para ferver a água, ou um produto de cloro vendido para a água de beber, com o rótulo",
      "Papel e caneta para o plano e o cartão de sinais de perigo",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Funciona bem com grupos de mulheres, clubes de mães, escolas, grupos religiosos e visitas do agente comunitário de saúde; façam o teste inicial juntos.",
      "Construam juntos um lugar para lavar as mãos durante a Lição 4; é a parte de que os alunos mais se lembram.",
      "Convide o agente comunitário de saúde ou o enfermeiro do centro de saúde local para a sessão sobre os sinais de perigo e os SRO.",
      "Não dê doses de medicamentos nem conselhos de tratamento; envie todas as perguntas sobre tratamento para o centro de saúde, o agente comunitário de saúde ou o ministério da saúde.",
      "Num surto de cólera, use as mensagens atuais do ministério da saúde e os locais dos centros de tratamento.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
