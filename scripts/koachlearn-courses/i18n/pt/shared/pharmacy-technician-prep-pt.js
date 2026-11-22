"use strict";

// Koach Learn course (Portuguese translation of shared/pharmacy-technician-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US-specific course: PTCB, NHA, NABP, FDA, DEA, HHS and HIPAA names are kept. Safety: no real doses; every drug and number is made up and marked practice only.

module.exports = {
  id: "pharmacy-technician-prep-pt",
  lang: "pt",
  translationOf: "pharmacy-technician-prep",
  category: "Workforce Development",
  name: "Preparação para Técnico de Farmácia",
  skills: "Escolher uma certificação e verificar as regras do estado, Ler uma receita médica, Praticar a matemática da farmácia, Fazer verificações de segurança dos medicamentos, Saber o que vai para o farmacêutico, Proteger a privacidade dos doentes (HIPAA)",
  outcome: "fazer o seu próprio plano de estudo e de exame para um exame de técnico de farmácia e mostrar as competências principais que ele avalia: ler uma receita de prática, resolver contas de farmácia de prática, fazer as verificações de segurança que um técnico faz, passar as perguntas clínicas ao farmacêutico e manter privadas as informações dos doentes.",
  about: [
    "Os técnicos de farmácia ajudam os farmacêuticos em farmácias de bairro, hospitais, farmácias que enviam por correio e clínicas. Recebem receitas, registam-nas no computador, contam e rotulam medicamentos, gerem o stock e ajudam os clientes. Nos Estados Unidos, muitos estados exigem que os técnicos se registem no conselho estadual de farmácia (state board of pharmacy), e muitos empregadores pedem uma certificação nacional.",
    "Este curso prepara você para esse caminho. Vai comparar as duas certificações nacionais (o CPhT da PTCB, obtido ao passar no exame PTCE, e o CPhT da NHA, obtido ao passar no exame ExCPT), verificar as regras do seu estado, ler receitas de prática, fazer contas de farmácia de prática, aprender as verificações de segurança e as regras federais que um técnico segue e proteger a privacidade dos doentes segundo a lei HIPAA.",
    "Este curso não certifica nem regista você, e nunca dá conselhos médicos. Todas as receitas e contas são inventadas e marcadas como só para prática. As perguntas dos doentes sobre medicamentos vão sempre para o farmacêutico.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" em papel. Depois de cada lição há uma pequena verificação, no fim de cada capítulo há uma verificação de conhecimentos e no fim do curso há um questionário de 20 perguntas. A sua tarefa final é o seu próprio plano de estudo e de exame, com um caderno de prática."
  ],
  finalTask: "Faça o seu próprio plano de estudo e de exame de técnico de farmácia: diga que exame vai fazer (PTCE ou ExCPT), o que o conselho de farmácia do seu estado exige e as datas de estudo de cada semana até à data do exame que escolheu. Junte um caderno de prática: 5 receitas inventadas que leu e verificou, 10 contas de prática com os cálculos mostrados e uma lista de 5 perguntas de clientes que passaria ao farmacêutico.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram um trabalho estável na área da saúde sem um curso longo: pessoas à procura de emprego, jovens adultos, imigrantes, antigos militares e adultos que voltam a estudar. Alguns já trabalham no comércio. Muitos nunca trabalharam numa farmácia.",
    startingPoint: "Sabem ler inglês do dia a dia, fazer contas simples com uma calculadora e usar um telefone ou um computador da biblioteca. A maioria não conhece nomes de medicamentos, abreviaturas das receitas, a matemática da farmácia nem as leis da farmácia.",
    gap: "Os empregos e os exames de técnico de farmácia esperam uma leitura exata das receitas, contas cuidadosas, verificações de segurança, conhecimento das regras federais e estaduais e privacidade rigorosa. Os erros podem fazer mal aos doentes. Os alunos precisam de conhecer o caminho para a certificação e as regras do seu estado, e de praticar estas competências com segurança antes da formação ou do exame.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra de farmácia é explicada",
      "Aparelhos: um telefone ou um computador da biblioteca; papel e uma calculadora simples bastam",
      "Segurança: nenhuma dose verdadeira nem conselho sobre doses; todos os medicamentos e números são inventados e marcados como só para prática",
      "As regras mudam de estado para estado: os alunos verificam o conselho de farmácia do seu próprio estado",
      "A certificação e o registo no estado podem perguntar sobre registo criminal; os alunos verificam as regras oficiais",
      "Privacidade: nenhuma informação verdadeira de doentes em nenhuma tarefa"
    ],
    prerequisites: "Contas simples: frações, números decimais e multiplicação. O curso \"Literacia em Saúde\" ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando as páginas oficiais da PTCB, da NHA e do conselho de farmácia do estado", action: "comparar os dois exames nacionais de técnico e escrever um plano de estudo e de exame que cumpra as regras do seu estado", standard: "com cada exigência verificada numa página oficial" },
    { id: "O2", condition: "Com uma receita inventada", action: "dizer as suas partes e reescrever as instruções com palavras simples", standard: "acertando completamente pelo menos 4 de 5 receitas de prática" },
    { id: "O3", condition: "Com problemas só para prática, com números inventados e uma calculadora simples", action: "resolver contas de farmácia de conversão de unidades, quantidade e dias de tratamento", standard: "acertando pelo menos 8 de 10 com os cálculos mostrados" },
    { id: "O4", condition: "Com um pedido de prática já preparado e o seu frasco de stock", action: "comparar o doente, o medicamento, a dosagem e o NDC com a receita e assinalar qualquer diferença", standard: "encontrando todas as diferenças colocadas de propósito" },
    { id: "O5", condition: "Com situações de farmácia de prática", action: "separar cada tarefa em trabalho do técnico ou trabalho do farmacêutico e seguir as regras extra para as substâncias controladas", standard: "passando todas as perguntas clínicas ao farmacêutico" },
    { id: "O6", condition: "No balcão da farmácia ou ao telefone", action: "partilhar informações dos doentes só com quem precisa delas, e só o mínimo de que precisa", standard: "em todas as situações de prática, seguindo a HIPAA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, as receitas e a matemática",
      lessons: [
        {
          title: "O trabalho, as certificações e as regras do seu estado",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar os exames PTCE e ExCPT e encontrar as regras para técnicos do seu estado.",
          text: [
            "Os técnicos de farmácia recebem receitas, escrevem-nas no computador, contam e rotulam medicamentos, gerem o stock, trabalham na caixa e ajudam os clientes. Um farmacêutico verifica o trabalho e responde a todas as perguntas sobre medicamentos.",
            "Há duas certificações nacionais, e as duas dão o título de Técnico de Farmácia Certificado (Certified Pharmacy Technician, CPhT). A PTCB (Pharmacy Technician Certification Board, o conselho de certificação de técnicos de farmácia) dá-o a quem passa no exame PTCE. Para se poder candidatar, é preciso um programa de formação reconhecido pela PTCB ou experiência de trabalho suficiente. A NHA (National Healthcareer Association) dá-o a quem passa no exame ExCPT, com um programa de formação ou experiência de trabalho supervisionada.",
            "O conselho de farmácia do seu estado decide o que os técnicos podem fazer e se você tem de se registar ou ter licença antes de trabalhar. As regras mudam muito de estado para estado. A NABP (National Association of Boards of Pharmacy, a associação nacional dos conselhos de farmácia) tem a lista de todos os conselhos estaduais.",
            "As taxas, as condições para se candidatar e as regras dos exames mudam, e as duas certificações pedem que declare ações criminais ou disciplinares. Leia as páginas oficiais antes de pagar. Este curso prepara você; não certifica nem regista você."
          ],
          steps: ["Abra a página do CPhT da PTCB e a página de técnico de farmácia da NHA.", "Anote para cada uma: o nome do exame, como se pode candidatar e de quanto em quanto tempo renova.", "Encontre o conselho de farmácia do seu estado na lista da NABP.", "Escreva o que o seu estado exige antes de poder trabalhar como técnico.", "Escolha o seu exame e um mês para o fazer."],
          words: [["Técnico de farmácia", "um trabalhador formado que ajuda o farmacêutico a preparar e entregar medicamentos."], ["Farmacêutico", "o profissional com licença que verifica as receitas e aconselha os doentes sobre os medicamentos."], ["CPhT", "Certified Pharmacy Technician (Técnico de Farmácia Certificado), o título dado pela PTCB ou pela NHA depois dos seus exames."], ["Conselho de farmácia do estado", "o serviço do estado (state board of pharmacy) que dá licença aos farmacêuticos e faz as regras para os técnicos."]],
          slides: [
            { title: "O que os técnicos fazem", bullets: ["Recebem e registam receitas", "Contam, rotulam e arrumam medicamentos", "Ajudam os clientes; o farmacêutico verifica e aconselha"] },
            { title: "Dois exames nacionais", bullets: ["PTCB: o exame PTCE", "NHA: o exame ExCPT", "Os dois dão o título CPhT"] },
            { title: "Quem decide é o seu estado", bullets: ["Registo ou licença antes de trabalhar", "O que os técnicos podem fazer", "Encontre o seu conselho na lista da NABP"] },
            { title: "Verifique antes de pagar", bullets: ["As taxas e as regras mudam", "Os dois perguntam sobre ações criminais ou disciplinares", "Este curso prepara você; não certifica"] }
          ],
          sources: [
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" },
            { name: "NHA: Certified Pharmacy Technician (ExCPT)", url: "https://www.nhanow.com/certifications/pharmacy-technician" },
            { name: "NABP: Conselhos estaduais de farmácia", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Faça uma tabela com duas colunas: PTCE e ExCPT. Preencha, a partir das páginas oficiais, quem dá o exame, como se pode candidatar e de quanto em quanto tempo renova. Por baixo, escreva o que o conselho de farmácia do seu estado exige antes de poder trabalhar como técnico e o endereço do site onde o encontrou.",
          youCanNow: "dizer o que os técnicos fazem, dizer os dois exames nacionais e quem os dá e encontrar as regras para técnicos do seu estado.",
          quickCheck: [
            { objective: "O1", q: "Quem dá o exame PTCE?", options: ["O serviço de viação do seu estado", "Qualquer farmácia", "A PTCB, o conselho de certificação de técnicos de farmácia", "A FDA"], answer: 2, why: "A PTCB dá o PTCE; quem passa recebe o CPhT da PTCB." },
            { objective: "O1", q: "Quem decide se você tem de se registar antes de trabalhar como técnico?", options: ["O conselho de farmácia do seu estado", "O gerente da loja", "O cliente", "Um anúncio de formação"], answer: 0, why: "Cada conselho estadual de farmácia faz as regras de registo e de trabalho dos técnicos." }
          ]
        },
        {
          title: "Ler uma receita médica",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dizer as partes de uma receita de prática e reescrever as instruções com palavras simples.",
          text: [
            "Uma receita tem partes fixas: o nome e a data de nascimento do doente, o nome do medicamento, a dosagem (por exemplo 10 mg), a forma (comprimido, cápsula, líquido), as instruções (chamadas \"sig\"), a quantidade, o número de repetições, a data e o nome e a assinatura de quem passou a receita.",
            "As instruções usam muitas vezes abreviaturas do latim. As mais comuns: po (pela boca), bid (duas vezes por dia), tid (três vezes por dia), qid (quatro vezes por dia), prn (quando for preciso), hs (ao deitar). O rótulo tem de estar em palavras simples, por isso \"1 tab po bid\" passa a ser \"Tome 1 comprimido pela boca duas vezes por dia.\"",
            "Algumas abreviaturas causam erros, por isso os grupos de segurança dizem para não as usar. Por exemplo, \"QD\" (uma vez por dia) já foi confundido com \"QID\" (quatro vezes por dia), e \"U\" de unidades já foi lido como um zero. Cuidado também com as casas decimais: escreva 0.5 mg (com um zero à frente), nunca .5 mg, e nunca 5.0 mg (um zero no fim pode ser lido como 50).",
            "Se alguma coisa não estiver clara, faltar ou parecer errada, não adivinhe. Assinale-a para o farmacêutico."
          ],
          steps: ["Confirme o nome e a data de nascimento do doente.", "Encontre o nome do medicamento, a dosagem e a forma.", "Leia o sig e reescreva-o com palavras simples.", "Confirme a quantidade, as repetições, a data e quem passou a receita.", "Assinale para o farmacêutico tudo o que não está claro ou que falta."],
          words: [["Sig", "as instruções numa receita que dizem ao doente como tomar o medicamento."], ["Dosagem", "quanto medicamento há em cada unidade, por exemplo 10 mg num comprimido."], ["Forma", "o tipo de medicamento: comprimido, cápsula, líquido, creme e outros."], ["Repetição", "uma nova entrega da mesma receita que é permitida (em inglês, \"refill\")."], ["Prescritor", "a pessoa com licença que passou a receita, como um médico ou um enfermeiro especialista."]],
          slides: [
            { title: "Partes de uma receita", bullets: ["Nome e data de nascimento do doente", "Medicamento, dosagem e forma", "Sig, quantidade, repetições, data, prescritor"] },
            { title: "Abreviaturas comuns", bullets: ["po = pela boca  •  prn = quando for preciso", "bid = duas vezes por dia  •  tid = três vezes", "qid = quatro vezes  •  hs = ao deitar"] },
            { title: "Escrita que causa erros", bullets: ["QD pode ser lido como QID: escreva \"uma vez por dia\"", "U pode parecer 0: escreva \"unidades\"", "Escreva 0.5 (zero à frente), nunca 5.0 (zero no fim)"] },
            { title: "Na dúvida", bullets: ["Não adivinhe", "Assinale para o farmacêutico"] }
          ],
          tryIt: "Só para prática, medicamentos inventados. Reescreva cada sig com palavras simples: (1) \"Drug X 1 tab po bid\" (2) \"Drug Y 2 caps po hs\" (3) \"Drug Z 1 tab po q6h prn\". Respostas: (1) Tome 1 comprimido pela boca duas vezes por dia. (2) Tome 2 cápsulas pela boca ao deitar. (3) Tome 1 comprimido pela boca de 6 em 6 horas, quando for preciso. Depois escreva as partes que faltam nesta nota: \"Drug X 10 mg, #30, Dr. Lee\".",
          youCanNow: "dizer as partes de uma receita, ler as abreviaturas comuns do sig, reconhecer a escrita que causa erros e assinalar receitas pouco claras.",
          quickCheck: [
            { objective: "O2", q: "Na prática, o que quer dizer \"1 tab po tid\"?", options: ["Tome 1 comprimido ao deitar", "Tome 1 comprimido pela boca três vezes por dia", "Tome 1 comprimido dia sim, dia não", "Tome 3 comprimidos de uma vez"], answer: 1, why: "po quer dizer pela boca e tid quer dizer três vezes por dia." },
            { objective: "O2", q: "Uma receita de prática não tem instruções (sig). O que faz?", options: ["Escreve você mesmo as instruções habituais", "Deixa o rótulo em branco", "Pergunta ao cliente como o toma", "Assinala para o farmacêutico"], answer: 3, why: "Uma parte que falta ou não está clara nunca se adivinha; o farmacêutico trata dela com o prescritor." }
          ]
        },
        {
          title: "Praticar a matemática da farmácia",
          objectives: ["O3"],
          minutes: 6,
          goal: "Resolver problemas só para prática de conversões, quantidade e dias de tratamento.",
          text: [
            "Só para prática: estes números são inventados para treinar para o exame e nunca são instruções para um doente verdadeiro. No trabalho real, o farmacêutico verifica todos os cálculos.",
            "Conversões a saber: 1 grama (g) = 1,000 miligramas (mg). 1 litro (L) = 1,000 mililitros (mL). 1 quilograma (kg) é cerca de 2.2 libras (lb). 1 colher de chá (tsp) = 5 mL e 1 colher de sopa (tbsp) = 15 mL. 1 onça líquida (fl oz) é cerca de 30 mL.",
            "Os dias de tratamento dizem quanto tempo o medicamento vai durar: dias de tratamento = quantidade ÷ quantidade usada por dia. Prática: Drug X, 1 comprimido duas vezes por dia, 60 comprimidos. Usados por dia = 2. 60 ÷ 2 = 30 dias. A quantidade calcula-se ao contrário: quantidade = quantidade por dia × dias. Prática: Drug Y, 1 cápsula três vezes por dia durante 10 dias = 3 × 10 = 30 cápsulas.",
            "Escreva sempre as unidades, monte o problema antes de carregar na calculadora e veja se a resposta faz sentido. Um tratamento de 30 dias com 6,000 comprimidos não faz."
          ],
          steps: ["Escreva o que sabe, com as unidades.", "Escreva o que precisa de encontrar.", "Se for preciso, converta para as mesmas unidades.", "Monte o problema e depois calcule.", "Pergunte: a resposta faz sentido?"],
          words: [["mg", "miligrama: a milésima parte de um grama."], ["mL", "mililitro: a milésima parte de um litro."], ["Dias de tratamento", "quantos dias uma receita vai durar se for tomada como indicado (em inglês, \"days' supply\")."], ["Conversão", "mudar um número de uma unidade para outra, como de gramas para miligramas."]],
          slides: [
            { title: "Só para prática", bullets: ["Números inventados para treinar para o exame", "O farmacêutico verifica todos os cálculos reais"] },
            { title: "Conversões a saber", bullets: ["1 g = 1,000 mg  •  1 L = 1,000 mL", "1 kg ≈ 2.2 lb  •  1 fl oz ≈ 30 mL", "1 tsp = 5 mL  •  1 tbsp = 15 mL"] },
            { title: "Dias de tratamento e quantidade", bullets: ["Dias = quantidade ÷ quantidade por dia", "60 comprimidos ÷ 2 por dia = 30 dias", "Quantidade = por dia × dias: 3 × 10 = 30"] },
            { title: "Trabalhe como um profissional", bullets: ["Escreva sempre as unidades", "Monte o problema antes de calcular", "Veja se a resposta faz sentido"] }
          ],
          tryIt: "Só para prática, números inventados. Resolva e mostre os cálculos: (1) 2.5 g = ? mg (2) 3 tsp = ? mL (3) 132 lb = ? kg (4) Drug X, 1 comprimido 3 vezes por dia, 90 comprimidos: dias de tratamento? (5) Drug Y, 2 cápsulas duas vezes por dia durante 14 dias: quantidade? Respostas: 2,500 mg; 15 mL; 60 kg; 30 dias; 56 cápsulas.",
          youCanNow: "converter unidades comuns e calcular os dias de tratamento e a quantidade em problemas de prática, mostrando os cálculos.",
          quickCheck: [
            { objective: "O3", q: "Só para prática: quantos miligramas há em 0.5 gramas?", options: ["5 mg", "50 mg", "5,000 mg", "500 mg"], answer: 3, why: "1 g = 1,000 mg, por isso 0.5 × 1,000 = 500 mg." },
            { objective: "O3", q: "Só para prática: Drug X, 1 comprimido duas vezes por dia, 28 comprimidos. Quantos dias de tratamento?", options: ["14 dias", "28 dias", "56 dias", "7 dias"], answer: 0, why: "Dias de tratamento = 28 comprimidos ÷ 2 por dia = 14 dias." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, as receitas e a matemática",
        questions: [
          { objective: "O1", q: "Que exame a NHA dá aos técnicos de farmácia?", options: ["PTCE", "CPC", "ExCPT", "NCLEX"], answer: 2, why: "O exame de técnico de farmácia da NHA é o ExCPT." },
          { objective: "O1", q: "Onde encontra o conselho de farmácia do seu estado?", options: ["Na lista de conselhos de farmácia da NABP", "Num anúncio de uma empresa de medicamentos", "Num site de cupões de desconto", "Nas costas de um frasco de comprimidos"], answer: 0, why: "A NABP tem a lista de todos os conselhos estaduais de farmácia, com os seus sites." },
          { objective: "O2", q: "O que quer dizer \"prn\" numa receita de prática?", options: ["Pela boca", "Ao deitar", "Duas vezes por dia", "Quando for preciso"], answer: 3, why: "prn quer dizer quando for preciso." },
          { objective: "O2", q: "Que forma de escrever uma dosagem é segura?", options: [".5 mg", "0.5 mg", "5.0 mg", "5.00 mg"], answer: 1, why: "Use um zero à frente e nenhum zero no fim, para que 0.5 mg não seja mal lido." },
          { objective: "O3", q: "Só para prática: 2 colheres de sopa são quantos mililitros?", options: ["10 mL", "15 mL", "30 mL", "60 mL"], answer: 2, why: "1 tbsp = 15 mL, por isso 2 tbsp = 30 mL." }
        ]
      }
    },
    {
      name: "Capítulo 2: Segurança, regras e privacidade",
      lessons: [
        {
          title: "Verificações de segurança: o medicamento certo para o doente certo",
          objectives: ["O4"],
          minutes: 5,
          goal: "Comparar um pedido de prática com a receita e assinalar qualquer diferença.",
          text: [
            "A maioria dos erros vem de pequenas distrações: o doente errado, um medicamento com um nome parecido, a dosagem errada ou o frasco errado da prateleira. Os técnicos ajudam a apanhá-los antes da verificação final do farmacêutico.",
            "Use dois identificadores do doente, como o nome completo e a data de nascimento, sempre que recebe ou entrega uma receita. Duas pessoas podem ter o mesmo nome.",
            "Cada embalagem de medicamento tem um NDC (National Drug Code, o código nacional do medicamento), o número da FDA em três partes que identifica o fabricante, o produto e a embalagem. Comparar o NDC do frasco de stock com o que está no computador (muitas vezes ao ler o código de barras) confirma que escolheu o medicamento, a dosagem e a embalagem certos. A FDA planeia mudar no futuro os NDC para um único formato de 12 algarismos, por isso aprenda a ideia, não um comprimento fixo.",
            "Cuidado com medicamentos de nomes parecidos na escrita ou no som. Leia o nome completo, a dosagem e a forma no frasco, não só as primeiras letras. Se alguma coisa não for igual, pare e diga ao farmacêutico."
          ],
          steps: ["Confirme dois identificadores do doente: nome e data de nascimento.", "Compare, letra a letra, o nome do medicamento no frasco com a receita.", "Compare a dosagem e a forma.", "Leia com o leitor ou compare o NDC do frasco de stock.", "Pare e assinale qualquer diferença para o farmacêutico."],
          words: [["NDC", "National Drug Code: o número da FDA em três partes para o fabricante, o produto e a embalagem de um medicamento."], ["Identificadores do doente", "dados como o nome completo e a data de nascimento, usados para ter a certeza de que é a pessoa certa."], ["Medicamentos com nomes parecidos", "medicamentos cujos nomes se parecem na escrita ou no som e se confundem facilmente."], ["Frasco de stock", "o recipiente grande de onde a farmácia conta os medicamentos."]],
          slides: [
            { title: "Pequenas distrações, grandes danos", bullets: ["Doente errado ou dosagem errada", "Nomes de medicamentos parecidos", "Frasco errado da prateleira"] },
            { title: "Dois identificadores do doente", bullets: ["Nome completo e data de nascimento", "Quando recebe e quando entrega"] },
            { title: "Compare o NDC", bullets: ["Número da FDA em três partes: fabricante, produto, embalagem", "Leia o código ou compare com o computador", "Confirma o medicamento, a dosagem e a embalagem"] },
            { title: "Leia o rótulo todo", bullets: ["Nome completo, dosagem e forma", "Não só as primeiras letras", "Não é igual? Pare e diga ao farmacêutico"] }
          ],
          sources: [
            { name: "FDA: Diretório do National Drug Code", url: "https://www.fda.gov/drugs/drug-approvals-and-databases/national-drug-code-directory" }
          ],
          tryIt: "Só para prática. Escreva em papel três pedidos de prática inventados, cada um com o nome do doente, a data de nascimento, o medicamento, a dosagem e o NDC. Peça a um amigo para os copiar como \"rótulos de frascos de stock\" e para mudar em segredo um dado em dois deles. Compare cada par como aprendeu e faça um círculo à volta de cada diferença.",
          youCanNow: "comparar um pedido de prática com a receita usando dois identificadores do doente e o NDC, e assinalar todas as diferenças.",
          quickCheck: [
            { objective: "O4", q: "Que par são dois identificadores do doente?", options: ["Nome completo e data de nascimento", "Nome e cor preferida", "Nome do medicamento e dosagem", "Modelo do telefone e email"], answer: 0, why: "O nome completo e a data de nascimento costumam ser usados juntos para confirmar o doente certo." },
            { objective: "O4", q: "O NDC do frasco de stock não é igual ao do computador. O que faz?", options: ["Prepara na mesma; o nome é parecido", "Muda o computador para ficar igual", "Pára e diz ao farmacêutico", "Dá um desconto ao cliente"], answer: 2, why: "Um NDC diferente pode querer dizer medicamento, dosagem ou embalagem errados, por isso pare e assinale." }
          ]
        },
        {
          title: "O seu papel, o papel do farmacêutico e as substâncias controladas",
          objectives: ["O5"],
          minutes: 5,
          goal: "Separar tarefas de prática em trabalho do técnico ou trabalho do farmacêutico.",
          text: [
            "Os técnicos fazem o trabalho técnico: recebem e registam receitas, contam, rotulam, gerem o stock, tratam dos seguros e ajudam na caixa. Os farmacêuticos fazem o trabalho clínico: a verificação final, o aconselhamento sobre como tomar um medicamento, os efeitos secundários, as interações entre medicamentos e qualquer pergunta do tipo \"Isto é seguro para mim?\". O seu estado define a linha exata, por isso aprenda as regras do seu estado.",
            "Uma regra simples: se um cliente pergunta sobre a sua saúde ou o seu medicamento, a resposta é \"Vou chamar o farmacêutico para si.\" Nunca dê o seu próprio conselho, mesmo que ache que sabe.",
            "As substâncias controladas são medicamentos que a DEA (Drug Enforcement Administration, a agência federal de controlo de drogas) coloca nas Listas I a V (Schedules), segundo o seu uso médico aceite e o seu risco de abuso e de dependência. Os medicamentos da Lista I não têm uso médico aceite nos EUA; os da Lista II têm um risco alto de abuso; o risco vai baixando até à Lista V. Têm regras extra para guardar, contar, registar e repetir, e os estados podem acrescentar mais.",
            "Para os exames, saiba as cinco listas, que a farmácia guarda registos cuidadosos de cada medicamento controlado e que qualquer falta na contagem é comunicada logo ao farmacêutico."
          ],
          steps: ["Pergunte: é uma tarefa técnica ou uma pergunta de saúde?", "Técnica: faça-a com cuidado, seguindo as regras da loja e do estado.", "Pergunta de saúde ou sobre o medicamento: chame o farmacêutico.", "Substância controlada: siga as regras extra para contagens, registos e armazenamento.", "Alguma coisa falta ou parece estranha: diga logo ao farmacêutico."],
          words: [["Aconselhamento", "quando o farmacêutico explica a um doente como tomar um medicamento e a que deve estar atento."], ["Substância controlada", "um medicamento que a lei controla mais de perto porque pode ser usado de forma abusiva ou causar dependência."], ["DEA", "a Drug Enforcement Administration, a agência federal que faz cumprir as leis sobre substâncias controladas."], ["Lista (Schedule)", "um dos cinco grupos (I a V) em que as substâncias controladas são colocadas."]],
          slides: [
            { title: "Trabalho do técnico", bullets: ["Registar, contar, rotular, arrumar", "Seguros e caixa", "Feito com cuidado, segundo as regras do estado"] },
            { title: "Trabalho do farmacêutico", bullets: ["Verificação final e aconselhamento", "Efeitos secundários e interações", "Qualquer pergunta \"Isto é seguro para mim?\""] },
            { title: "Substâncias controladas", bullets: ["Listas I a V da DEA", "I: sem uso médico aceite; II: risco alto de abuso", "Regras extra para guardar, contar, registar, repetir"] },
            { title: "Diga sempre", bullets: ["\"Vou chamar o farmacêutico para si.\"", "Nunca dê o seu próprio conselho médico"] }
          ],
          sources: [
            { name: "DEA: Classificação dos medicamentos (Drug scheduling)", url: "https://www.dea.gov/drug-information/drug-scheduling" },
            { name: "NABP: Conselhos estaduais de farmácia (regras para técnicos)", url: "https://nabp.pharmacy/about/boards-of-pharmacy/" }
          ],
          tryIt: "Só para prática. Separe em Técnico ou Farmacêutico: (1) contar comprimidos para um pedido, (2) uma cliente pergunta se pode tomar o novo medicamento com os comprimidos para a alergia, (3) arrumar uma entrega, (4) um cliente pergunta que efeitos secundários pode ter, (5) registar uma nova receita. Respostas: 1, 3 e 5 Técnico; 2 e 4 Farmacêutico. Depois escreva as palavras exatas que vai dizer para passar uma pergunta ao farmacêutico.",
          youCanNow: "distinguir o trabalho do técnico do trabalho do farmacêutico, passar todas as perguntas de saúde ao farmacêutico e dizer as cinco listas de substâncias controladas.",
          quickCheck: [
            { objective: "O5", q: "Um cliente pergunta se o novo medicamento é seguro com álcool. O que diz?", options: ["\"Deve estar tudo bem.\"", "\"Veja na internet.\"", "\"Nunca mais beba.\"", "\"Vou chamar o farmacêutico para si.\""], answer: 3, why: "As perguntas sobre segurança e interações são clínicas; só o farmacêutico responde." },
            { objective: "O5", q: "Que agência federal coloca os medicamentos nas Listas I a V?", options: ["A DEA", "Os correios", "O IRS (os impostos)", "O serviço de viação do estado"], answer: 0, why: "A DEA faz cumprir as listas de substâncias controladas." }
          ]
        },
        {
          title: "Privacidade no balcão, e o seu plano de estudo",
          objectives: ["O6"],
          minutes: 5,
          goal: "Partilhar informações dos doentes só com quem precisa delas, e só o que precisa.",
          text: [
            "Uma farmácia guarda informações privadas de saúde: nomes, datas de nascimento, medicamentos, seguros. A HIPAA, a lei federal de privacidade da saúde, protege-as. A sua ideia de \"mínimo necessário\" quer dizer que só usa e partilha o que é preciso para a tarefa.",
            "No balcão: fale baixo, não leia nomes de medicamentos em voz alta para a fila ouvir e confirme dois identificadores antes de entregar um saco. Ao telefone: confirme quem está a ligar antes de partilhar alguma coisa e siga as regras da loja sobre quem pode levantar medicamentos por outra pessoa.",
            "Nunca publique nada sobre clientes, nunca procure por curiosidade o registo de um vizinho ou de uma pessoa famosa e mantenha os ecrãs e os papéis fora da vista. Comunique logo os erros de privacidade ao farmacêutico ou ao responsável pela privacidade.",
            "Agora faça a sua tarefa final: o seu plano de estudo e de exame e o caderno de prática."
          ],
          steps: ["Pergunte: esta pessoa precisa desta informação para o seu trabalho ou para o tratamento?", "Partilhe só o mínimo de que ela precisa.", "Confirme dois identificadores antes de entregar medicamentos.", "Fale baixo e mantenha ecrãs e papéis escondidos.", "Comunique logo os erros de privacidade."],
          words: [["HIPAA", "a lei federal dos EUA que protege a privacidade e a segurança das informações de saúde."], ["PHI", "protected health information: informações de saúde protegidas, que podem identificar uma pessoa."], ["Mínimo necessário", "usar ou partilhar só a informação que é precisa para a tarefa."]],
          slides: [
            { title: "A HIPAA na farmácia", bullets: ["Nomes, datas de nascimento, medicamentos, seguros", "Partilhe só o mínimo necessário"] },
            { title: "No balcão", bullets: ["Fale baixo", "Não leia nomes de medicamentos em voz alta", "Dois identificadores antes de entregar um saco"] },
            { title: "Nunca", bullets: ["Publique nada sobre clientes", "Procure registos por curiosidade", "Deixe ecrãs ou papéis à vista"] },
            { title: "Tarefa final", bullets: ["O seu exame e as regras do seu estado", "Datas de estudo de cada semana até ao exame", "Caderno de prática junto"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profissionais (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" },
            { name: "PTCB: Certified Pharmacy Technician (CPhT)", url: "https://www.ptcb.org/credentials/certified-pharmacy-technician" }
          ],
          tryIt: "Tarefa final. Escreva o seu plano de estudo e de exame: o exame (PTCE ou ExCPT), o que o conselho do seu estado exige e as datas de estudo de cada semana até à data do exame. Junte o seu caderno de prática: 5 receitas inventadas que leu e verificou, 10 contas de prática com os cálculos mostrados e 5 perguntas de clientes que passaria ao farmacêutico. Não use nenhuma informação verdadeira de doentes.",
          youCanNow: "proteger a privacidade dos doentes no balcão e ao telefone, e seguir o seu próprio plano escrito até um exame de técnico de farmácia.",
          quickCheck: [
            { objective: "O6", q: "Um homem liga, diz que é vizinho de uma cliente e pergunta que medicamento ela levantou. O que faz?", options: ["Diz-lhe; ele só está a ser simpático", "Lê-lhe a lista dela", "Não partilha nada e segue as regras da loja", "Diz-lhe só o primeiro medicamento"], answer: 2, why: "A HIPAA protege as informações dela; um vizinho não tem direito a elas." },
            { objective: "O6", q: "O que ajuda a proteger a privacidade no balcão?", options: ["Ler os nomes dos medicamentos em voz alta", "Falar baixo e confirmar dois identificadores", "Deixar sacos abertos em cima do balcão", "Mostrar o ecrã à fila"], answer: 1, why: "Falar baixo e confirmar a identidade mantêm privadas as informações de saúde." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Segurança, regras e privacidade",
        questions: [
          { objective: "O4", q: "O que identifica o NDC?", options: ["O seguro do doente", "A licença do farmacêutico", "A morada da loja", "O fabricante, o produto e a embalagem do medicamento"], answer: 3, why: "O NDC é o número da FDA em três partes para o fabricante, o produto e a embalagem." },
          { objective: "O4", q: "Dois clientes têm o mesmo nome. Como garante que entrega o saco ao certo?", options: ["Pede também a data de nascimento", "Entrega a quem chegou primeiro", "Pergunta para que é o medicamento", "Olha para os sapatos deles"], answer: 0, why: "Um segundo identificador, como a data de nascimento, distingue pessoas com o mesmo nome." },
          { objective: "O5", q: "Que tarefa é trabalho do farmacêutico?", options: ["Arrumar as prateleiras", "Aconselhar um doente sobre efeitos secundários", "Trabalhar na caixa", "Contar comprimidos"], answer: 1, why: "Aconselhar sobre efeitos secundários é trabalho clínico do farmacêutico." },
          { objective: "O5", q: "Na contagem de uma substância controlada falta alguma coisa. O que faz?", options: ["Corrige o número no registo", "Ignora até ao próximo mês", "Diz logo ao farmacêutico", "Encomenda mais sem dizer nada"], answer: 2, why: "As substâncias controladas têm registos rigorosos; qualquer falta na contagem é comunicada logo." },
          { objective: "O6", q: "O que quer dizer \"mínimo necessário\" na farmácia?", options: ["Usar os sacos mais pequenos", "Preparar o menor número de pedidos", "Cobrar o preço mais baixo", "Partilhar só a informação precisa para a tarefa"], answer: 3, why: "Segundo a HIPAA, só usa e partilha o que é preciso." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Preparação para Técnico de Farmácia",
    questions: [
      { objective: "O1", q: "Quem passa no PTCE recebe que título?", options: ["Técnico de Farmácia Certificado (CPhT) da PTCB", "Farmacêutico registado", "Codificador Profissional Certificado", "Enfermeiro prático licenciado"], answer: 0, why: "A PTCB dá o CPhT a quem passa no PTCE." },
      { objective: "O1", q: "As regras para técnicos são diferentes em cada estado. Onde verifica as suas?", options: ["Num anúncio de medicamentos", "No conselho de farmácia do seu estado", "Com um amigo de outro estado", "Na página de recrutamento da DEA"], answer: 1, why: "Cada conselho estadual de farmácia faz as regras para os técnicos." },
      { objective: "O1", q: "O que este curso faz por você?", options: ["Regista você no seu estado", "Dá-lhe o CPhT", "Prepara você para um exame de técnico", "Deixa você aconselhar doentes"], answer: 2, why: "O curso prepara você; o exame e o estado dão as credenciais." },
      { objective: "O2", q: "Qual NÃO é uma das partes habituais de uma receita?", options: ["O nome do doente", "A dosagem do medicamento", "As instruções (sig)", "A loja preferida do doente"], answer: 3, why: "Uma receita tem doente, medicamento, dosagem, forma, sig, quantidade, repetições, data e prescritor." },
      { objective: "O2", q: "Na prática, \"hs\" numa receita quer dizer:", options: ["Ao deitar", "Pela boca", "Quando for preciso", "Quatro vezes por dia"], answer: 0, why: "hs quer dizer ao deitar." },
      { objective: "O2", q: "Porque está \"QD\" nas listas de abreviaturas a não usar?", options: ["É comprida demais", "Pode ser lida como QID (quatro vezes por dia)", "Quer dizer pela boca", "É o nome de um medicamento"], answer: 1, why: "QD já foi confundida com QID; escrever \"uma vez por dia\" evita o erro." },
      { objective: "O2", q: "Só para prática: \"Drug X 2 tabs po bid\" em palavras simples é:", options: ["Tome 2 comprimidos ao deitar", "Tome 1 comprimido duas vezes por dia", "Tome 2 comprimidos pela boca duas vezes por dia", "Tome 2 comprimidos de 2 em 2 horas"], answer: 2, why: "po quer dizer pela boca e bid quer dizer duas vezes por dia." },
      { objective: "O3", q: "Só para prática: 1 colher de chá é quantos mililitros?", options: ["1 mL", "15 mL", "30 mL", "5 mL"], answer: 3, why: "1 tsp = 5 mL." },
      { objective: "O3", q: "Só para prática: Drug X, 1 cápsula 4 vezes por dia, 120 cápsulas. Dias de tratamento?", options: ["30 dias", "40 dias", "120 dias", "4 dias"], answer: 0, why: "120 ÷ 4 por dia = 30 dias." },
      { objective: "O3", q: "Só para prática: 3 gramas são quantos miligramas?", options: ["30 mg", "300 mg", "3,000 mg", "0.003 mg"], answer: 2, why: "1 g = 1,000 mg, por isso 3 g = 3,000 mg." },
      { objective: "O3", q: "Só para prática: 176 lb são cerca de quantos quilogramas?", options: ["80 kg", "88 kg", "176 kg", "387 kg"], answer: 0, why: "176 ÷ 2.2 = 80 kg." },
      { objective: "O4", q: "Porque se compara o NDC do frasco de stock?", options: ["Para saber o preço", "Para confirmar o medicamento, a dosagem e a embalagem certos", "Para saber a morada do doente", "Não é preciso"], answer: 1, why: "O NDC identifica o produto e a embalagem exatos." },
      { objective: "O4", q: "Dois medicamentos têm nomes que começam da mesma maneira. O que protege o doente?", options: ["Ler só as primeiras letras", "Pegar no frasco mais perto de si", "Pedir ao cliente para escolher", "Ler o nome completo, a dosagem e a forma"], answer: 3, why: "Os nomes parecidos apanham-se lendo o rótulo todo." },
      { objective: "O4", q: "Vê uma diferença entre o pedido e o frasco. O que faz?", options: ["Pára e assinala para o farmacêutico", "Acaba depressa e espera que corra bem", "Corrige você mesmo a receita", "Deita o frasco fora"], answer: 0, why: "Qualquer diferença para o trabalho até o farmacêutico verificar." },
      { objective: "O5", q: "Uma cliente pergunta se dois dos seus medicamentos são seguros juntos. Quem responde?", options: ["O técnico", "Outro cliente", "O farmacêutico", "O operador de caixa"], answer: 2, why: "As perguntas sobre interações entre medicamentos são clínicas e vão para o farmacêutico." },
      { objective: "O5", q: "As substâncias controladas da Lista I são:", options: ["Medicamentos com o risco de abuso mais baixo", "Medicamentos sem uso médico aceite nos EUA", "Vitaminas", "Todos os medicamentos com receita"], answer: 1, why: "Os medicamentos da Lista I não têm uso médico aceite nos EUA e têm um risco alto de abuso." },
      { objective: "O5", q: "Qual é trabalho do técnico?", options: ["Aconselhar sobre efeitos secundários", "Fazer a verificação final", "Aconselhar sobre interações", "Registar uma nova receita no computador"], answer: 3, why: "Registar receitas é trabalho técnico; o farmacêutico verifica e aconselha." },
      { objective: "O6", q: "Que lei protege as informações de saúde dos doentes?", options: ["A HIPAA", "A OSHA", "A Clean Air Act (lei do ar limpo)", "O código dos impostos"], answer: 0, why: "A HIPAA protege a privacidade das informações de saúde." },
      { objective: "O6", q: "Uma pessoa famosa leva uma receita à sua loja. O que faz?", options: ["Procura o registo dela para ver o que toma", "Publica que ela esteve lá", "Trata-a como qualquer cliente e não partilha nada", "Conta aos seus amigos"], answer: 2, why: "Ver ou partilhar um registo sem razão de trabalho viola as regras da HIPAA." },
      { objective: "O6", q: "Repara que um colega deixou os papéis de um cliente no balcão. O que faz?", options: ["Deixa-os ficar", "Lê-os", "Entrega-os ao cliente seguinte", "Põe-nos fora da vista e diz ao farmacêutico"], answer: 3, why: "Proteja as informações e comunique o erro de privacidade." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 8, 11, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de estudo e de exame", objective: "O1", notYet: "Nenhum exame indicado, ou as regras do estado faltam ou foram adivinhadas.", meets: "Indica o exame e quem o dá, a exigência do conselho do estado com o endereço do site e as datas de cada semana até à data do exame.", exceeds: "Também indica um programa de formação e como o aluno vai cumprir as condições para se candidatar ao exame." },
      { name: "Receitas lidas", objective: "O2", notYet: "Menos de 4 de 5 receitas lidas corretamente, ou uma parte em falta não foi assinalada.", meets: "Pelo menos 4 de 5 receitas de prática têm todas as partes indicadas e as instruções em palavras simples.", exceeds: "As 5 estão certas e todas as abreviaturas que causam erros foram encontradas." },
      { name: "Contas de prática", objective: "O3", notYet: "Menos de 8 de 10 certas, ou sem cálculos mostrados.", meets: "Pelo menos 8 de 10 contas de prática certas, com unidades e cálculos mostrados.", exceeds: "10 de 10 certas, com uma verificação de bom senso escrita para cada resposta." },
      { name: "Verificações de segurança", objective: "O4", notYet: "Uma diferença colocada de propósito não foi encontrada.", meets: "Todas as diferenças colocadas de propósito no nome, na dosagem ou no NDC foram marcadas com um círculo.", exceeds: "Explica como cada diferença podia ter feito mal a um doente." },
      { name: "Perguntas para o farmacêutico", objective: "O5", notYet: "Dá o seu próprio conselho numa pergunta de saúde.", meets: "Escreve 5 perguntas de clientes que vão para o farmacêutico e as palavras para as passar.", exceeds: "Também explica as regras extra para as substâncias controladas." },
      { name: "Privacidade", objective: "O6", notYet: "Usa informações verdadeiras de doentes em alguma parte do caderno.", meets: "Usa só informações inventadas.", exceeds: "Escreve três hábitos no balcão ou ao telefone que protegem a privacidade." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de formação de técnico de farmácia ou se registam no conselho do seu estado em 90 dias",
      "Alunos que passam no PTCE ou no ExCPT (dito pelo próprio aluno)",
      "Alunos contratados como técnicos de farmácia ou técnicos em formação em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para as páginas da PTCB, da NHA, da NABP e do conselho do estado",
      "Papel, caneta e uma calculadora simples",
      "Receitas e rótulos de stock inventados, impressos, para a prática das verificações de segurança",
      "Cerca de 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Mantenha todos os medicamentos e números inventados; não responda às perguntas dos alunos sobre os seus próprios medicamentos. Mande-os ao seu farmacêutico.",
      "Imprima a página para técnicos do conselho de farmácia do seu estado, para o grupo ver as regras verdadeiras.",
      "Coloque diferenças de propósito (nome, dosagem, NDC) nos rótulos de prática e deixe os pares encontrá-las.",
      "Peça aos alunos para dizer \"Vou chamar o farmacêutico para si\" em voz alta nas dramatizações.",
      "Alunos com registo criminal: diga-lhes para lerem as regras da PTCB, da NHA e do conselho do seu estado sobre a declaração de antecedentes antes de pagarem uma formação.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
