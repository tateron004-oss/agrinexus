"use strict";

// Koach Learn course (Portuguese translation of shared/everyday-math.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Numbers, US units, dollar amounts and the decimal point are kept exactly as in the English. All money and pay examples are made up for practice.

const DOL_OT = { name: "U.S. Department of Labor: Overtime pay", url: "https://www.dol.gov/agencies/whd/overtime" };
const IRS_751 = { name: "IRS Topic 751: Social Security and Medicare withholding rates", url: "https://www.irs.gov/taxtopics/tc751" };
const CFPB = { name: "CFPB: Your Money, Your Goals (free budgeting materials)", url: "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/" };

module.exports = {
  id: "everyday-math-pt",
  lang: "pt",
  translationOf: "everyday-math",
  category: "Workforce Development",
  name: "Matemática do Dia a Dia para o Trabalho e a Vida",
  skills: "Frações, decimais e percentagens, Descontos, impostos, gorjetas e aumentos, Preços por unidade e a melhor compra, Medidas e horas de trabalho, Verificar um recibo de vencimento, Fazer um orçamento mensal",
  outcome: "fazer as contas que encontra no trabalho e em casa: usar frações, decimais e percentagens, encontrar a melhor compra, medir e converter unidades, verificar o seu recibo de vencimento e fazer um orçamento mensal a partir do seu salário.",
  about: [
    "Este curso é para adultos que querem voltar a sentir-se seguros com os números: quem procura trabalho, quem volta para casa depois da prisão, imigrantes, pais e qualquer pessoa que regressa aos estudos. Não precisa de se lembrar da matemática da escola. Começamos do início, com coisas reais como uma etiqueta de promoção, uma fita métrica e um salário.",
    "Você vai praticar frações, decimais e percentagens; calcular descontos, imposto sobre vendas, gorjetas e aumentos; comparar preços por unidade na loja; medir e converter para uma tarefa de trabalho; verificar cada linha de um recibo de vencimento; e fazer um orçamento mensal.",
    "São as mesmas habilidades com que começam muitos testes de emprego e o teste de Matemática do GED (o exame americano equivalente ao ensino secundário). Quando terminar, o curso \"Preparação para o Exame GED: Matemática\" é um bom passo seguinte. Este curso não dá certificado nem diploma; desenvolve as habilidades.",
    "Cada lição dura cerca de cinco minutos, com exemplos resolvidos e uma tarefa \"Experimente agora\" em papel ou na calculadora do telefone. Há uma pequena verificação de 2 perguntas depois de cada lição, uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso. Todos os exemplos de salário e de dinheiro são inventados para praticar."
  ],
  finalTask: "Faça a sua própria \"Folha de Contas do Trabalho e do Dinheiro\" numa só página: (1) verifique um recibo de vencimento de prática (ou o seu, com os números privados tapados) linha a linha: horas vezes valor por hora, horas extra, descontos e salário líquido; (2) transforme esse salário em rendimento mensal e faça um orçamento mensal com uma linha de poupança, em que os gastos não passem do rendimento; (3) compare os preços por unidade de 3 coisas que compra muitas vezes e escreva que tamanho é a melhor compra. Guarde a folha e atualize-a todos os meses.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que regressam aos estudos: quem procura trabalho, quem volta para casa depois da prisão, imigrantes, pais e trabalhadores mais velhos. Muitos deixaram a escola cedo ou não fazem contas no papel há anos, e alguns sentem ansiedade com os números.",
    startingPoint: "Sabem somar, subtrair e usar a calculadora do telefone para contas simples. Muitos têm dúvidas com frações, percentagens, conversão de unidades e descontos do recibo de vencimento, e poucos têm um orçamento escrito.",
    gap: "O trabalho e a vida do dia a dia pedem contas rápidas e certas: medir no trabalho, contar as horas, verificar o salário, encontrar os preços reais e fazer o dinheiro chegar ao fim do mês. Os erros custam dinheiro e podem passar despercebidos num recibo de vencimento. Estas habilidades são também a base do teste de Matemática do GED e de muitos testes de contratação.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; muitos exemplos resolvidos",
      "Ferramentas: papel, lápis e uma calculadora simples do telefone; nenhum programa especial",
      "Ansiedade com a matemática: passos pequenos, verificar as respostas de duas maneiras, sem pressão de tempo",
      "Privacidade: os recibos de prática são inventados; num recibo verdadeiro, tape os números da Segurança Social e das contas",
      "Regras que mudam (taxas de impostos, horas extra) remetem para fontes oficiais; as regras de cada estado são diferentes"
    ],
    prerequisites: "Saber somar, subtrair e multiplicar, com ou sem calculadora."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com frações, decimais, percentagens e uma fita métrica", action: "converter entre frações, decimais e percentagens e ler uma fita métrica até ao 1/8 de polegada mais próximo", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com um preço, uma conta ou um valor por hora", action: "calcular um desconto, o imposto sobre vendas, uma gorjeta ou um aumento usando percentagens", standard: "até ao cêntimo" },
    { id: "O3", condition: "Com dois tamanhos do mesmo produto e os seus preços", action: "calcular o preço por unidade de cada um e escolher a melhor compra", standard: "escolhendo bem em pelo menos 4 de 5 pares" },
    { id: "O4", condition: "Com uma tarefa de trabalho, como pôr chão numa sala ou registar um turno", action: "converter unidades e calcular a área ou as horas trabalhadas", standard: "com a unidade certa, e arredondando para cima quando precisa de peças inteiras" },
    { id: "O5", condition: "Com um recibo de vencimento", action: "verificar linha a linha as horas, o valor por hora, as horas extra, os descontos e o salário líquido", standard: "com todas as linhas certas até ao cêntimo, ou o erro anotado para perguntar" },
    { id: "O6", condition: "Com um salário regular", action: "fazer um orçamento mensal que inclua poupança e em que os gastos fiquem iguais ou abaixo do rendimento", standard: "com todas as categorias escritas e os totais verificados" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Números que usa todos os dias",
      lessons: [
        {
          title: "Frações, decimais, percentagens e a fita métrica",
          objectives: ["O1"],
          minutes: 6,
          goal: "Converter entre frações, decimais e percentagens e ler uma fita métrica.",
          text: [
            "Frações, decimais e percentagens são três maneiras de escrever a mesma quantidade. Meia pizza é 1/2, ou 0.5, ou 50%. Um quarto é 1/4, 0.25 ou 25%. Três quartos é 3/4, 0.75 ou 75%.",
            "Para passar uma fração para decimal, divida o número de cima pelo número de baixo: 3/8 é 3 a dividir por 8, que dá 0.375. Para passar um decimal para percentagem, mova o ponto decimal duas casas para a direita: 0.375 é 37.5%. Para passar de percentagem para decimal, mova-o duas casas para a esquerda: 15% é 0.15.",
            "Uma fita métrica nos Estados Unidos mostra as polegadas divididas em 16 marcas pequenas. A marca mais comprida no meio de uma polegada é 1/2. As marcas a seguir em tamanho são 1/4 e 3/4. Depois vêm 1/8, 3/8, 5/8 e 7/8. As mais curtas são dezasseis avos. Se a fita para 3 marcas de 1/8 depois do 5, a medida é 5 e 3/8 polegadas.",
            "Somar frações com o mesmo número de baixo é fácil: some os de cima e mantenha o de baixo. 1/8 + 3/8 = 4/8, que é o mesmo que 1/2."
          ],
          steps: ["Fração para decimal: divida o de cima pelo de baixo.", "Decimal para percentagem: mova o ponto 2 casas para a direita.", "Percentagem para decimal: mova o ponto 2 casas para a esquerda.", "Fita métrica: encontre a polegada inteira e depois conte as marcas a seguir.", "Simplifique: 4/8 é o mesmo que 1/2."],
          words: [["Fração", "uma parte de um todo, escrita como um número em cima de outro, como 3/4."], ["Numerador", "o número de cima de uma fração: quantas partes você tem."], ["Denominador", "o número de baixo de uma fração: quantas partes iguais fazem um todo."], ["Decimal", "um número com ponto, como 0.75, que mostra partes de um todo."], ["Percentagem (%)", "partes em 100. 25% quer dizer 25 em cada 100."]],
          slides: [
            { title: "Três maneiras de escrever a mesma quantidade", bullets: ["1/2 = 0.5 = 50%", "1/4 = 0.25 = 25%", "3/4 = 0.75 = 75%"] },
            { title: "Converter", bullets: ["Fração para decimal: divida o de cima pelo de baixo (3/8 = 0.375)", "Decimal para percentagem: ponto 2 casas para a direita (37.5%)", "Percentagem para decimal: ponto 2 casas para a esquerda (15% = 0.15)"] },
            { title: "Ler uma fita métrica", bullets: ["Marca mais comprida no meio: 1/2", "Depois 1/4 e 3/4, depois oitavos, depois dezasseis avos", "5 polegadas e 3 marcas de oitavo = 5 3/8 pol"] }
          ],
          tryIt: "Prática (respostas em baixo): (1) Escreva 1/4 como decimal e como percentagem. (2) Escreva 0.6 como percentagem. (3) Escreva 8% como decimal. (4) Passe 5/8 para decimal. (5) Some 1/4 + 1/4. Respostas: (1) 0.25 e 25%; (2) 60%; (3) 0.08; (4) 0.625; (5) 2/4, que é 1/2. Se tiver uma fita métrica ou uma régua, meça 3 coisas em casa até ao 1/8 de polegada mais próximo.",
          youCanNow: "passar entre frações, decimais e percentagens e ler uma fita métrica até ao 1/8 de polegada mais próximo.",
          quickCheck: [
            { objective: "O1", q: "Quanto é 3/4 em percentagem?", options: ["34%", "0.34%", "75%", "43%"], answer: 2, why: "3 a dividir por 4 dá 0.75, e mover o ponto duas casas para a direita dá 75%." },
            { objective: "O1", q: "Quanto é 6% em decimal?", options: ["0.06", "0.6", "6.0", "60"], answer: 0, why: "Mova o ponto duas casas para a esquerda: 6% = 0.06." }
          ]
        },
        {
          title: "Descontos, imposto sobre vendas, gorjetas e aumentos",
          objectives: ["O2"],
          minutes: 6,
          goal: "Calcular descontos, imposto sobre vendas, gorjetas e aumentos com percentagens.",
          text: [
            "Para encontrar uma percentagem de um número, passe a percentagem para decimal e multiplique. 20% de $45 é 0.20 x 45 = $9.",
            "Desconto: tire-o do preço. Um casaco de $45 com 20% de desconto custa 45 - 9 = $36. Imposto sobre vendas: some-o. Se a taxa do imposto for 8%, o imposto sobre $36 é 0.08 x 36 = $2.88, por isso paga $38.88. As taxas do imposto sobre vendas são diferentes em cada estado e cidade; consulte o serviço de impostos do seu estado ou veja um talão de compra.",
            "Gorjeta sem calculadora: encontre os 10% movendo o ponto uma casa para a esquerda e depois construa a partir daí. Numa conta de $28, 10% é $2.80, 5% é metade disso, $1.40, por isso 15% é $2.80 + $1.40 = $4.20. 20% é o dobro de 10%: $5.60.",
            "Aumento: um aumento de 3% sobre $16.00 por hora é 0.03 x 16 = $0.48, por isso o novo valor é $16.48 por hora. Atenção às palavras: \"20% de desconto\" quer dizer que paga 80% do preço; \"20% a mais\" quer dizer que paga 120%."
          ],
          steps: ["Passe a percentagem para decimal.", "Multiplique pela quantia.", "Desconto: subtraia. Imposto ou gorjeta: some. Aumento: some ao valor antigo.", "Arredonde o dinheiro ao cêntimo.", "Verifique: a resposta faz sentido? Um desconto tem de ser menor do que o preço."],
          words: [["Desconto", "dinheiro tirado ao preço."], ["Imposto sobre vendas (sales tax)", "um imposto somado ao preço na caixa; a taxa depende do seu estado e da sua cidade."], ["Gorjeta", "dinheiro extra que se dá pelo serviço, muitas vezes calculado como uma percentagem da conta."], ["Aumento", "uma subida do seu valor por hora ou do seu salário."], ["Arredondar", "tornar um número mais simples; o dinheiro arredonda-se ao cêntimo."]],
          slides: [
            { title: "Percentagem de um número", bullets: ["Passe a percentagem para decimal", "Multiplique: 20% de $45 = 0.20 x 45 = $9"] },
            { title: "Desconto e imposto", bullets: ["20% de desconto em $45: 45 - 9 = $36", "8% de imposto sobre $36: 0.08 x 36 = $2.88", "Paga $38.88; as taxas mudam de estado para estado e de cidade para cidade"] },
            { title: "Gorjeta de cabeça", bullets: ["10%: mova o ponto uma casa para a esquerda", "Conta de $28: 10% = $2.80, 5% = $1.40", "15% = $4.20, 20% = $5.60"] },
            { title: "Aumentos", bullets: ["3% de $16.00 = $0.48", "Novo valor: $16.48 por hora", "20% de desconto = paga 80%; 20% a mais = paga 120%"] }
          ],
          tryIt: "Prática (respostas em baixo): (1) Umas botas de trabalho de $60 têm 25% de desconto. Qual é o preço em promoção? (2) O imposto é 7% sobre um artigo de $50. Qual é o total? (3) Calcule uma gorjeta de 20% numa conta de $35. (4) O seu valor de $15.50 por hora tem um aumento de 4%. Qual é o novo valor? Respostas: (1) $45; (2) $3.50 de imposto, $53.50 no total; (3) $7.00; (4) mais $0.62, $16.12 por hora. Depois veja um talão de compra verdadeiro e encontre a taxa de imposto cobrada na sua zona.",
          youCanNow: "calcular descontos, imposto sobre vendas, gorjetas e aumentos até ao cêntimo.",
          quickCheck: [
            { objective: "O2", q: "Um casaco de $80 tem 25% de desconto. Qual é o preço em promoção?", options: ["$55", "$20", "$105", "$60"], answer: 3, why: "25% de 80 é 20, e 80 - 20 = $60." },
            { objective: "O2", q: "Quanto é uma gorjeta de 15% numa conta de $40?", options: ["$4.00", "$6.00", "$15.00", "$0.60"], answer: 1, why: "10% é $4.00 e 5% é $2.00, por isso 15% é $6.00." }
          ],
          sources: [{ name: "Federation of Tax Administrators: State tax agency links", url: "https://taxadmin.org/state-tax-agencies/" }]
        },
        {
          title: "Preços por unidade: encontrar a melhor compra",
          objectives: ["O3"],
          minutes: 5,
          goal: "Calcular preços por unidade e escolher a melhor compra.",
          text: [
            "O preço por unidade é o custo de uma unidade: uma onça, uma libra, um artigo. Permite comparar tamanhos diferentes de forma justa. Para o encontrar, divida o preço pelo número de unidades.",
            "Exemplo: uma caixa de cereais de 24 onças custa $4.80. $4.80 / 24 = $0.20 por onça. Uma caixa de 36 onças custa $6.12. $6.12 / 36 = $0.17 por onça. A caixa maior é a melhor compra.",
            "O maior nem sempre é mais barato. Um saco de arroz de 2 libras por $3.18 dá $1.59 por libra. Um saco de 5 libras por $8.45 dá $1.69 por libra. Aqui o saco pequeno é a melhor compra. Muitas lojas imprimem o preço por unidade em letra pequena na etiqueta da prateleira; confirme que as duas etiquetas usam a mesma unidade.",
            "A melhor compra só é melhor se a usar antes de se estragar e se puder pagá-la esta semana. Os preços por unidade também ajudam no trabalho, por exemplo ao encomendar materiais."
          ],
          steps: ["Escreva o preço e o tamanho de cada artigo.", "Confirme que as unidades são iguais (onças com onças).", "Divida: preço / tamanho = preço por unidade.", "Compare: o preço por unidade mais baixo é a melhor compra.", "Pergunte: vou usar tudo, e posso pagar agora?"],
          words: [["Preço por unidade", "o custo de uma unidade, como uma onça ou uma libra."], ["Onça (oz)", "uma pequena unidade de peso usada nos EUA; 16 onças fazem 1 libra."], ["Libra (lb)", "uma unidade de peso usada nos EUA, igual a 16 onças."], ["Etiqueta da prateleira", "a etiqueta do preço na prateleira da loja; muitas vezes mostra o preço por unidade."]],
          slides: [
            { title: "Preço por unidade = preço / tamanho", bullets: ["Custo de uma onça, uma libra ou um artigo", "Compare tamanhos diferentes de forma justa"] },
            { title: "Exemplo dos cereais", bullets: ["24 oz por $4.80 = $0.20 por onça", "36 oz por $6.12 = $0.17 por onça", "Aqui ganha a caixa maior"] },
            { title: "O maior nem sempre é mais barato", bullets: ["Arroz de 2 lb a $3.18 = $1.59 por libra", "Arroz de 5 lb a $8.45 = $1.69 por libra", "Aqui ganha o saco pequeno"] },
            { title: "Comprar com inteligência", bullets: ["Veja a etiqueta da prateleira, com a mesma unidade nas duas", "Vai usá-lo antes de se estragar?", "Pode pagá-lo esta semana?"] }
          ],
          tryIt: "Prática (respostas em baixo): (1) 12 ovos por $3.60 ou 18 ovos por $5.04? (2) 64 oz de sumo por $3.84 ou 128 oz por $6.40? Respostas: (1) $0.30 por ovo contra $0.28 por ovo: os 18 ovos são melhores; (2) $0.06 por onça contra $0.05 por onça: os 128 oz são melhores. Depois, numa loja ou no site de uma loja, encontre os preços por unidade de 3 coisas que compra muitas vezes, em dois tamanhos, e anote a melhor compra. Isto vai para a folha da sua tarefa final.",
          youCanNow: "encontrar preços por unidade e escolher a melhor compra, e saber quando o tamanho maior não vale a pena.",
          quickCheck: [
            { objective: "O3", q: "Um saco de batatas de 10 libras custa $5.90. Qual é o preço por unidade?", options: ["$0.59 por libra", "$5.90 por libra", "$1.69 por libra", "$59.00 por libra"], answer: 0, why: "$5.90 / 10 = $0.59 por libra." },
            { objective: "O3", q: "Sabonete A: 3 barras por $2.70. Sabonete B: 8 barras por $8.00. Qual é a melhor compra?", options: ["O sabonete B, porque tem mais barras", "Custam o mesmo por barra", "O sabonete B, porque custa mais", "O sabonete A, a $0.90 por barra contra $1.00"], answer: 3, why: "$2.70 / 3 = $0.90 e $8.00 / 8 = $1.00, por isso o A custa menos por barra." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Números que usa todos os dias",
        questions: [
          { objective: "O1", q: "Quanto é 1/8 em decimal?", options: ["0.18", "0.8", "0.125", "1.8"], answer: 2, why: "1 a dividir por 8 dá 0.125." },
          { objective: "O1", q: "Numa fita métrica, a marca mais comprida entre as 4 e as 5 polegadas é:", options: ["4 1/2 polegadas", "4 1/8 polegadas", "4 1/16 polegadas", "5 polegadas"], answer: 0, why: "A marca mais comprida no meio de uma polegada é a marca de 1/2." },
          { objective: "O2", q: "O imposto sobre vendas é 6% numa compra de $25. Quanto é o imposto?", options: ["$6.00", "$0.25", "$31.00", "$1.50"], answer: 3, why: "0.06 x 25 = $1.50." },
          { objective: "O2", q: "O seu salário passa de $14.00 para $14.70 por hora. Que aumento em percentagem é esse?", options: ["7%", "5%", "70%", "0.5%"], answer: 1, why: "O aumento é $0.70, e 0.70 / 14.00 = 0.05, que é 5%." },
          { objective: "O3", q: "Qual é a melhor compra: 16 oz de manteiga de amendoim por $3.20 ou 40 oz por $7.20?", options: ["16 oz, a $0.20 por onça", "São iguais", "40 oz, a $0.18 por onça", "Não se pode saber"], answer: 2, why: "$3.20 / 16 = $0.20 e $7.20 / 40 = $0.18, por isso o frasco de 40 oz custa menos por onça." }
        ]
      }
    },
    {
      name: "Capítulo 2: Matemática para o trabalho e o dinheiro",
      lessons: [
        {
          title: "Medir, converter e contar as horas de trabalho",
          objectives: ["O4"],
          minutes: 6,
          goal: "Converter unidades e calcular a área e as horas trabalhadas numa tarefa de trabalho.",
          text: [
            "Unidades comuns nos EUA: 12 polegadas = 1 pé, 3 pés = 1 jarda, 16 onças = 1 libra, 2 pintas = 1 quarto (quart), 4 quartos = 1 galão. Alguns trabalhos usam o sistema métrico: 1 polegada = 2.54 centímetros, e 1 quilograma é cerca de 2.2 libras. Para passar de uma unidade grande para unidades pequenas, multiplique; para passar de unidades pequenas para uma unidade grande, divida. 90 polegadas / 12 = 7.5 pés.",
            "A área é o espaço que uma superfície plana ocupa: comprimento x largura, em unidades quadradas. Uma sala de 12 pés por 10 pés tem 12 x 10 = 120 pés quadrados. Se uma caixa de pavimento cobre 20 pés quadrados, precisa de 120 / 20 = 6 caixas. Os trabalhadores muitas vezes juntam cerca de 10% a mais para cortes e erros: 120 x 1.10 = 132, e 132 / 20 = 6.6. Não pode comprar 0.6 de uma caixa, por isso arredonde PARA CIMA, para 7.",
            "Horas trabalhadas: conte do início ao fim e depois tire as pausas não pagas. Um turno das 7:30 am às 4:00 pm são 8 1/2 horas; menos um almoço de 30 minutos não pago dá 8 horas. Muitos cartões de ponto usam horas em decimal: 15 minutos = 0.25, 30 minutos = 0.5, 45 minutos = 0.75. Alguns locais de trabalho usam o relógio de 24 horas: 15:00 é 3:00 pm."
          ],
          steps: ["Escreva o que tem e a unidade de que precisa.", "De unidade grande para pequena: multiplique. De pequena para grande: divida.", "Área: comprimento x largura, em unidades quadradas.", "Precisa de peças inteiras (caixas, sacos): arredonde sempre para cima.", "Horas: hora do fim menos hora do início, menos as pausas não pagas; passe os minutos para decimal dividindo por 60."],
          words: [["Unidade", "aquilo em que mede, como polegadas, pés, libras ou horas."], ["Converter", "mudar uma medida de uma unidade para outra."], ["Área", "o espaço que uma superfície plana ocupa: comprimento vezes largura, em unidades quadradas."], ["Pés quadrados (sq ft)", "a unidade de área quando mede em pés."], ["Sistema métrico", "o sistema de medidas usado na maior parte do mundo: centímetros, metros, quilogramas, litros."], ["Horas em decimal", "o tempo escrito como decimal, como 7.75 horas para 7 horas e 45 minutos."]],
          slides: [
            { title: "Unidades a conhecer", bullets: ["12 pol = 1 pé; 3 pés = 1 jarda", "16 oz = 1 lb; 4 quartos = 1 galão", "1 pol = 2.54 cm; 1 kg é cerca de 2.2 lb", "De grande para pequena: multiplique. De pequena para grande: divida"] },
            { title: "Área para um trabalho", bullets: ["Sala de 12 pés x 10 pés = 120 pés quadrados", "Junte 10% para cortes: 132 pés quadrados", "20 pés quadrados por caixa: 6.6, por isso compre 7 caixas"] },
            { title: "Contar as horas", bullets: ["Das 7:30 am às 4:00 pm = 8.5 horas", "Menos 30 min de almoço não pago = 8 horas", "15 min = 0.25, 30 min = 0.5, 45 min = 0.75"] }
          ],
          tryIt: "Prática (respostas em baixo): (1) Passe 5 pés para polegadas. (2) Passe 48 onças para libras. (3) Um armazém tem 9 pés por 14 pés. Qual é a área? (4) A tinta cobre cerca de 350 pés quadrados por galão (nesta lata inventada). Tem de cobrir 800 pés quadrados. Quantos galões compra? (5) Trabalha das 6:45 am às 3:15 pm com um almoço de 30 minutos não pago. Quantas horas, em decimal? Respostas: (1) 60 polegadas; (2) 3 libras; (3) 126 pés quadrados; (4) 800 / 350 = 2.29, por isso compre 3 galões; (5) 8.5 horas menos 0.5 = 8.0 horas.",
          youCanNow: "converter unidades, calcular a área, arredondar para cima quando precisa de peças inteiras e contar as suas horas de trabalho em decimal.",
          quickCheck: [
            { objective: "O4", q: "Precisa de 4.2 sacos de cimento. Quantos sacos compra?", options: ["4", "4.2", "42", "5"], answer: 3, why: "Não pode comprar parte de um saco, por isso arredonde para cima, para 5." },
            { objective: "O4", q: "Quanto são 7 horas e 45 minutos em decimal?", options: ["7.45", "7.75", "7.5", "8.45"], answer: 1, why: "45 / 60 = 0.75, por isso são 7.75 horas." }
          ]
        },
        {
          title: "Verificar o seu recibo de vencimento",
          objectives: ["O5"],
          minutes: 6,
          goal: "Verificar as horas, o valor por hora, as horas extra, os descontos e o salário líquido num recibo de vencimento.",
          text: [
            "O recibo de vencimento mostra como o seu salário foi calculado. O salário bruto é o que ganhou antes de se tirar alguma coisa. Os descontos são as quantias tiradas, como os impostos. O salário líquido é o que recebe de facto: salário bruto menos descontos. YTD (year to date) quer dizer \"desde o início do ano\": o total até agora este ano.",
            "Recibo de prática (inventado): 45 horas a $18.00 por hora. Pela lei federal dos EUA, os trabalhadores pagos à hora que estão cobertos recebem horas extra pelas horas acima de 40 numa semana de trabalho, a pelo menos uma vez e meia o valor. Então: 40 x $18.00 = $720.00 de salário normal. O valor das horas extra é $18.00 x 1.5 = $27.00, e 5 x $27.00 = $135.00. Salário bruto = $855.00. Alguns estados têm regras extra de horas extra; consulte o serviço do trabalho do seu estado.",
            "Descontos neste recibo: Segurança Social (Social Security) 6.2% de $855.00 = $53.01. Medicare (o seguro de saúde federal) 1.45% = $12.40. Imposto federal sobre o rendimento $60.00 e imposto estadual $20.00 (estes dependem do seu formulário W-4 e do seu estado; aqui são inventados). Total dos descontos = $145.41. Salário líquido = $855.00 - $145.41 = $709.59.",
            "Se uma linha estiver errada, anote a data do pagamento, a linha e o que esperava, e pergunte primeiro ao departamento de salários ou ao seu supervisor. Se não for corrigido, pode contactar o serviço do trabalho do seu estado ou a Wage and Hour Division (Divisão de Salários e Horas) do U.S. Department of Labor. Guarde os seus recibos, e tape o seu número da Segurança Social antes de mostrar um recibo a alguém."
          ],
          steps: ["Compare as horas com o seu próprio registo das horas que trabalhou.", "Salário normal: até 40 horas x o seu valor por hora.", "Horas extra: horas acima de 40 x (valor x 1.5), se estiver coberto.", "Salário bruto = salário normal + horas extra + qualquer outro pagamento.", "Some todos os descontos.", "Salário líquido = salário bruto - total dos descontos. Bate certo com o recibo?", "Se não bater, anote e pergunte ao departamento de salários."],
          words: [["Recibo de vencimento", "o papel ou registo na internet que mostra como o seu salário foi calculado."], ["Salário bruto", "o que ganhou antes de se tirar alguma coisa."], ["Salário líquido", "o que leva para casa depois dos descontos."], ["Desconto", "uma quantia tirada do seu salário, como impostos ou seguro."], ["Horas extra", "pagamento extra, de pelo menos 1.5 vezes o seu valor por hora, pelas horas cobertas acima de 40 numa semana de trabalho, pela lei federal dos EUA."], ["YTD (year to date)", "o total desde 1 de janeiro até este pagamento."], ["W-4", "o formulário que entrega ao empregador e que define quanto imposto federal sobre o rendimento é retido."]],
          slides: [
            { title: "Palavras do recibo de vencimento", bullets: ["Salário bruto: ganho antes dos descontos", "Descontos: impostos e outras quantias tiradas", "Salário líquido: o que leva para casa", "YTD: total até agora este ano"] },
            { title: "Recibo de prática: 45 horas a $18.00", bullets: ["Normal: 40 x $18.00 = $720.00", "Horas extra: 5 x $27.00 = $135.00", "Salário bruto: $855.00"] },
            { title: "Descontos e salário líquido", bullets: ["Segurança Social 6.2% = $53.01; Medicare 1.45% = $12.40", "Federal $60.00 + estadual $20.00 (inventados)", "Líquido: $855.00 - $145.41 = $709.59"] },
            { title: "Se alguma coisa estiver errada", bullets: ["Anote a data, a linha e o que esperava", "Pergunte primeiro ao departamento de salários ou ao supervisor", "Depois ao serviço do trabalho do estado ou à DOL Wage and Hour Division"] }
          ],
          tryIt: "Prática (respostas em baixo): Trabalhou 42 horas a $16.00 por hora. Descontos: Segurança Social 6.2%, Medicare 1.45%, imposto federal $45.00, imposto estadual $15.00 (inventados). Calcule (1) o salário normal, (2) as horas extra, (3) o salário bruto, (4) o total dos descontos, (5) o salário líquido. Respostas: (1) $640.00; (2) 2 x $24.00 = $48.00; (3) $688.00; (4) $42.66 + $9.98 + $45.00 + $15.00 = $112.64; (5) $575.36. Depois verifique da mesma maneira um recibo verdadeiro seu, com os números privados tapados.",
          youCanNow: "verificar todas as linhas de um recibo de vencimento e saber o que fazer se alguma coisa não bater certo.",
          quickCheck: [
            { objective: "O5", q: "O salário bruto é $600.00 e os descontos somam $95.00. Qual é o salário líquido?", options: ["$695.00", "$95.00", "$505.00", "$600.00"], answer: 2, why: "Salário líquido = salário bruto - descontos = 600 - 95 = $505.00." },
            { objective: "O5", q: "Ganha $20.00 por hora e está coberto pelas horas extra federais. Qual é o seu valor das horas extra?", options: ["$30.00", "$20.00", "$40.00", "$21.50"], answer: 0, why: "Uma vez e meia: $20.00 x 1.5 = $30.00." }
          ],
          sources: [DOL_OT, IRS_751]
        },
        {
          title: "Fazer um orçamento mensal a partir do seu salário",
          objectives: ["O6"],
          minutes: 6,
          goal: "Fazer um orçamento mensal com poupança em que os gastos fiquem iguais ou abaixo do rendimento.",
          text: [
            "Um orçamento é um plano para o seu dinheiro. Comece pelo salário líquido mensal (o que leva para casa). Os meses são um pouco mais compridos do que 4 semanas, por isso não multiplique simplesmente o salário semanal por 4. Pago todas as semanas: líquido semanal x 52 / 12. Pago de duas em duas semanas: líquido x 26 / 12. Exemplo: $700 por semana x 52 = $36,400 por ano, / 12 = $3,033.33 por mês.",
            "Faça a lista dos seus gastos: primeiro as necessidades (renda da casa, água e luz, comida, transporte, telefone, cuidado das crianças, pagamentos mínimos de dívidas), depois a poupança, depois os desejos. Exemplo: renda $1,200, água e luz $150, telefone $50, comida $400, transporte $200, dívidas $150, poupança $150. Isso dá $2,300 no total, o que deixa $733.33 para outras necessidades e desejos.",
            "A regra: o total dos gastos (incluindo a poupança) tem de ser igual ou menor do que o rendimento. Se for maior, corte um desejo, baixe uma conta ou encontre mais rendimento. Verifique os totais somando uma segunda vez, ou com a calculadora.",
            "Acompanhe durante um mês. Anote o que gasta de verdade, depois compare com o seu plano e ajuste. Os materiais gratuitos \"Your Money, Your Goals\" do Consumer Financial Protection Bureau (o serviço de proteção financeira do consumidor dos EUA) têm fichas que pode imprimir."
          ],
          steps: ["Encontre o salário líquido mensal (semanal x 52 / 12, ou de duas em duas semanas x 26 / 12).", "Faça a lista das necessidades: renda, água e luz, comida, transporte, telefone, cuidado das crianças, mínimos das dívidas.", "Junte uma linha de poupança, mesmo pequena.", "Junte os desejos no fim.", "O total dos gastos tem de ficar igual ou abaixo do rendimento.", "Acompanhe durante um mês e ajuste."],
          words: [["Orçamento", "um plano de como vai usar o seu dinheiro em cada mês."], ["Rendimento", "o dinheiro que entra, como o seu salário líquido."], ["Despesa", "o dinheiro que sai, como a renda ou as compras de comida."], ["Despesa fixa", "uma despesa que é igual todos os meses, como a renda."], ["Despesa variável", "uma despesa que muda de mês para mês, como a comida ou o combustível."]],
          slides: [
            { title: "Rendimento mensal", bullets: ["Salário semanal x 52 / 12", "De duas em duas semanas: x 26 / 12", "$700 por semana = $3,033.33 por mês"] },
            { title: "Ordem dos gastos", bullets: ["Primeiro as necessidades: renda, água e luz, comida, transporte", "Depois a poupança, mesmo uma quantia pequena", "Depois os desejos"] },
            { title: "A regra", bullets: ["Gastos + poupança iguais ou abaixo do rendimento", "Se passar: corte um desejo, baixe uma conta ou ganhe mais", "Some os totais duas vezes para verificar"] },
            { title: "Acompanhar e ajustar", bullets: ["Anote os gastos reais durante um mês", "Compare com o seu plano", "Fichas gratuitas do CFPB: Your Money, Your Goals"] }
          ],
          tryIt: "Termine a sua tarefa final. Use o salário líquido do recibo da Lição 5 (ou o seu) e transforme-o em rendimento mensal. Escreva um orçamento com necessidades, uma linha de poupança e desejos. Some duas vezes. Se os gastos forem maiores do que o rendimento, mude até caber. Ponha a verificação do recibo, o orçamento e as 3 comparações de preços por unidade numa só página: a sua \"Folha de Contas do Trabalho e do Dinheiro\".",
          youCanNow: "transformar um salário em rendimento mensal e fazer um orçamento equilibrado que inclua poupança.",
          quickCheck: [
            { objective: "O6", q: "Leva para casa $500 por semana. Qual é o seu rendimento mensal?", options: ["$2,000.00", "$2,166.67", "$500.00", "$6,000.00"], answer: 1, why: "$500 x 52 / 12 = $2,166.67; multiplicar por 4 deixa de fora os dias a mais." },
            { objective: "O6", q: "Os gastos que planeou são $50 a mais do que o seu rendimento. O que faz?", options: ["Fica com o plano e espera que corra bem", "Tira a linha de poupança e esquece", "Usa um empréstimo rápido (payday loan) todos os meses", "Corta ou baixa algumas despesas até os gastos caberem"], answer: 3, why: "Um orçamento só funciona quando os gastos ficam iguais ou abaixo do rendimento." }
          ],
          sources: [CFPB]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Matemática para o trabalho e o dinheiro",
        questions: [
          { objective: "O4", q: "Uma sala tem 15 pés por 11 pés. Qual é a área?", options: ["26 pés quadrados", "165 pés quadrados", "52 pés quadrados", "1,511 pés quadrados"], answer: 1, why: "Área = comprimento x largura = 15 x 11 = 165 pés quadrados." },
          { objective: "O4", q: "Quantos pés são 60 polegadas?", options: ["5 pés", "720 pés", "6 pés", "48 pés"], answer: 0, why: "De unidade pequena para grande: divida. 60 / 12 = 5 pés." },
          { objective: "O5", q: "Num recibo de vencimento, o que é o salário bruto?", options: ["O que leva para casa", "Só os impostos", "O pagamento de uma hora", "O que ganhou antes dos descontos"], answer: 3, why: "O salário bruto é o total ganho antes de se tirar alguma coisa." },
          { objective: "O5", q: "O seu recibo mostra 38 horas, mas o seu próprio registo diz 41. O que faz primeiro?", options: ["Não diz nada", "Deixa o emprego", "Anota as datas e as horas e pergunta ao departamento de salários", "Muda o recibo você mesmo"], answer: 2, why: "Comece pelo departamento de salários ou pelo supervisor, com o seu próprio registo na mão." },
          { objective: "O6", q: "O que pertence à parte das necessidades de um orçamento?", options: ["A renda da casa", "Um jogo de vídeo novo", "Bilhetes para um concerto", "Comida de take-away todas as noites"], answer: 0, why: "A renda é uma necessidade; as outras são desejos." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Matemática do Dia a Dia para o Trabalho e a Vida",
    questions: [
      { objective: "O1", q: "Qual é o mesmo que 50%?", options: ["0.05", "1/5", "1/2", "5.0"], answer: 2, why: "50% quer dizer 50 em cada 100, que é 1/2 ou 0.5." },
      { objective: "O1", q: "Quanto é 0.4 em percentagem?", options: ["40%", "4%", "0.4%", "400%"], answer: 0, why: "Mova o ponto duas casas para a direita: 0.4 = 40%." },
      { objective: "O1", q: "1/8 + 5/8 = ?", options: ["6/16", "5/64", "4/8", "6/8, que é 3/4"], answer: 3, why: "O mesmo número de baixo: some os de cima. 6/8 simplifica para 3/4." },
      { objective: "O2", q: "Quanto é 10% de $73.00?", options: ["$73.00", "$7.30", "$0.73", "$10.00"], answer: 1, why: "Mova o ponto uma casa para a esquerda: $7.30." },
      { objective: "O2", q: "Um berbequim de $120 tem 30% de desconto. Qual é o preço em promoção?", options: ["$36", "$90", "$84", "$150"], answer: 2, why: "30% de 120 é 36, e 120 - 36 = $84." },
      { objective: "O2", q: "\"20% de desconto\" quer dizer que paga que percentagem do preço?", options: ["80%", "20%", "120%", "100%"], answer: 0, why: "100% - 20% = 80% do preço." },
      { objective: "O2", q: "As taxas do imposto sobre vendas:", options: ["São iguais em todo o lado nos EUA", "São sempre 10%", "São definidas pela loja", "Mudam de estado para estado e de cidade para cidade, por isso consulte o serviço de impostos do seu estado ou um talão"], answer: 3, why: "Os estados e muitas cidades definem as suas próprias taxas de imposto sobre vendas." },
      { objective: "O3", q: "Como encontra o preço por unidade?", options: ["Preço x tamanho", "Preço / tamanho", "Tamanho / 100", "Preço - tamanho"], answer: 1, why: "Divida o preço pelo número de unidades." },
      { objective: "O3", q: "Detergente: 50 oz por $6.00 ou 100 oz por $13.00. Qual é a melhor compra?", options: ["100 oz, porque é maior", "São iguais", "50 oz, a $0.12 por onça contra $0.13", "Não se pode saber"], answer: 2, why: "$6.00 / 50 = $0.12 e $13.00 / 100 = $0.13, por isso a garrafa mais pequena custa menos por onça." },
      { objective: "O3", q: "Antes de comprar o tamanho maior, também deve perguntar:", options: ["Vou usá-lo antes de se estragar, e posso pagá-lo agora?", "A caixa tem uma cor bonita?", "Está na prateleira de cima?", "A loja tem parque de estacionamento?"], answer: 0, why: "Um preço por unidade mais baixo só poupa dinheiro se o usar e puder pagá-lo." },
      { objective: "O4", q: "Quantos quartos (quarts) há em 3 galões?", options: ["7", "3", "16", "12"], answer: 3, why: "4 quartos = 1 galão, por isso 3 x 4 = 12 quartos." },
      { objective: "O4", q: "As caixas de mosaico cobrem 15 pés quadrados. Precisa de 100 pés quadrados. Quantas caixas?", options: ["6", "7", "6.67", "15"], answer: 1, why: "100 / 15 = 6.67, e arredonda para cima, para 7 caixas inteiras." },
      { objective: "O4", q: "Trabalha das 8:00 am às 4:30 pm com um almoço de 30 minutos não pago. Quantas horas?", options: ["8.5", "8.3", "8.0", "9.0"], answer: 2, why: "Das 8:00 às 4:30 são 8.5 horas, menos 0.5 horas = 8.0 horas." },
      { objective: "O5", q: "O salário líquido é:", options: ["O salário bruto menos os descontos", "O salário bruto mais os descontos", "Só as suas horas extra", "O seu valor por hora"], answer: 0, why: "O salário líquido é o que fica depois de tirar os descontos." },
      { objective: "O5", q: "Pela lei federal dos EUA, os trabalhadores pagos à hora que estão cobertos recebem horas extra pelas horas acima de:", options: ["35 numa semana de trabalho", "8 num mês", "50 numa semana de trabalho", "40 numa semana de trabalho"], answer: 3, why: "A regra federal é uma vez e meia pelas horas acima de 40 numa semana de trabalho." },
      { objective: "O5", q: "Trabalhou 44 horas a $15.00 por hora com horas extra. Qual é o salário bruto?", options: ["$660.00", "$690.00", "$600.00", "$900.00"], answer: 1, why: "40 x $15 = $600, mais 4 x $22.50 = $90, por isso $690.00." },
      { objective: "O5", q: "Antes de mostrar um recibo de vencimento a alguém que o está a ajudar, deve:", options: ["Publicá-lo na internet", "Escrever nele a sua palavra-passe", "Tapar o seu número da Segurança Social", "Deitá-lo fora"], answer: 2, why: "O seu número da Segurança Social é privado e pode ser usado para roubo de identidade." },
      { objective: "O6", q: "É pago de duas em duas semanas e leva para casa $1,200. Qual é o seu rendimento mensal?", options: ["$2,400.00", "$2,600.00", "$1,200.00", "$4,800.00"], answer: 1, why: "$1,200 x 26 / 12 = $2,600.00." },
      { objective: "O6", q: "Num orçamento equilibrado, o total dos gastos, incluindo a poupança, é:", options: ["Maior do que o rendimento", "Igual ou menor do que o rendimento", "Sempre exatamente $0", "Não escrito"], answer: 1, why: "Gastar o mesmo ou menos do que o rendimento evita novas dívidas." },
      { objective: "O6", q: "Qual é uma despesa variável?", options: ["Uma renda que fica sempre igual", "Uma prestação fixa do carro", "Um plano de telefone fixo", "As compras de comida, que mudam todos os meses"], answer: 3, why: "As despesas variáveis mudam de mês para mês." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 1, 4, 7, 8, 11, 12, 13, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, refaça essa parte com os passos da lição e verifique outra vez.",
    criteria: [
      { name: "Recibo verificado", objective: "O5", notYet: "Algumas linhas não foram verificadas, ou há erros de contas no salário bruto ou líquido.", meets: "Horas, valor por hora, horas extra, descontos e salário líquido verificados; todas as linhas batem certo até ao cêntimo ou o erro está anotado.", exceeds: "Também escreve o que dizer ao departamento de salários sobre qualquer erro e onde ir a seguir." },
      { name: "Rendimento mensal", objective: "O6", notYet: "O salário semanal foi multiplicado por 4, ou foi usado o salário bruto em vez do líquido.", meets: "Salário líquido mensal encontrado com x 52 / 12 ou x 26 / 12.", exceeds: "Mostra as contas e verifica-as de uma segunda maneira." },
      { name: "Orçamento equilibrado", objective: "O6", notYet: "Os gastos são maiores do que o rendimento, ou não há linha de poupança.", meets: "Necessidades, poupança e desejos escritos; gastos iguais ou abaixo do rendimento; totais verificados.", exceeds: "Inclui um plano para acompanhar os gastos reais e uma data para o rever." },
      { name: "Preços por unidade", objective: "O3", notYet: "Menos de 3 comparações, ou as unidades não são iguais.", meets: "3 comparações com preços por unidade certos e a melhor compra marcada.", exceeds: "Anota quando o tamanho maior não é a melhor escolha e porquê." },
      { name: "Percentagens", objective: "O2", notYet: "As respostas da prática de descontos, impostos, gorjetas ou aumentos estão muitas vezes erradas.", meets: "Pelo menos 4 de 5 problemas de percentagens certos, até ao cêntimo.", exceeds: "Sabe explicar o atalho (10%, e depois construir) a outra pessoa." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e completam a Folha de Contas do Trabalho e do Dinheiro segundo a grelha de avaliação",
      "Alunos que dizem ter encontrado um erro no recibo de vencimento ou poupado dinheiro com os preços por unidade em 30 dias (inquérito de seguimento)",
      "Alunos que mantêm um orçamento escrito durante pelo menos 2 meses",
      "Alunos que avançam para \"Preparação para o Exame GED: Matemática\" ou passam no teste de matemática de um emprego em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Papel, lápis e uma calculadora simples (a calculadora do telefone serve)",
      "Uma fita métrica ou régua com marcas de 1/8 de polegada",
      "O recibo de vencimento de prática inventado da Lição 5, ou o do próprio aluno com os números privados tapados",
      "Talões de compra ou etiquetas de prateleira para os preços por unidade",
      "Cerca de 2 horas no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Muitos adultos sentem ansiedade com a matemática. Comece com o teste inicial como um aquecimento \"sem nota\" e celebre o progresso no questionário final.",
      "Resolva primeiro cada exemplo no quadro e depois deixe os alunos tentar o seguinte a pares.",
      "Ensine a verificar as respostas de duas maneiras (estimar e depois calcular) para que os alunos confiem no seu próprio trabalho.",
      "Quando os alunos trouxerem recibos verdadeiros, peça-lhes para taparem primeiro os números da Segurança Social e do banco. Perguntas sobre impostos e horas extra além do básico vão para o departamento de salários, o serviço do trabalho do estado ou a DOL Wage and Hour Division.",
      "Não julgue o orçamento de ninguém; o objetivo é um plano equilibrado, não um plano perfeito.",
      "Indique \"Preparação para o Exame GED: Matemática\" aos alunos que querem um diploma."
    ]
  }
};
