"use strict";

// Koach Learn course (Portuguese translation of shared/medical-billing-coding.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// The course stays about the US system (HIPAA, CMS, NHA, AAPC, AHIMA, the 1500 form). Codes are practice examples only.

module.exports = {
  id: "medical-billing-coding-pt",
  lang: "pt",
  translationOf: "medical-billing-coding",
  category: "Workforce Development",
  name: "Noções Básicas de Faturação e Codificação Médica",
  skills: "Escolher uma certificação de faturação e codificação, Seguir o ciclo de faturação, Escolher o conjunto de códigos certo, Procurar um código da forma certa, Preencher uma reclamação de prática, Proteger a privacidade do paciente (HIPAA)",
  outcome: "transformar uma consulta médica inventada numa reclamação de prática completa: escolher os códigos certos do diagnóstico e dos serviços, preencher as caixas principais do formulário, verificá-lo antes de o enviar e manter privadas as informações do paciente.",
  about: [
    "Os faturadores e os codificadores médicos transformam uma consulta médica em códigos e numa reclamação (o pedido de pagamento), para o consultório receber o dinheiro da seguradora. Muitos destes trabalhos são feitos num escritório, e alguns são à distância. Este curso é um primeiro passo para quem procura emprego, antigos militares, pessoas que voltam da prisão e adultos que mudam de profissão.",
    "Você vai aprender o que é o trabalho, que certificações os empregadores pedem (como a CBCS da NHA, a CPC da AAPC e a CCA da AHIMA), como uma conta passa da chegada do paciente ao pagamento, os três conjuntos de códigos principais, como procurar um código da forma certa, como preencher uma reclamação de prática e como proteger a privacidade do paciente segundo a lei HIPAA.",
    "Este curso prepara você. Não dá um certificado. Cada certificação tem as suas próprias regras, formação, taxas e exame, por isso vai verificá-las na página oficial. Todos os pacientes e consultas deste curso são inventados, e os códigos são só para praticar: os códigos mudam todos os anos, por isso um codificador verdadeiro usa sempre o livro de códigos atual.",
    "Cada lição dura cerca de cinco minutos e acaba com uma tarefa \"Experimente agora\" em papel ou numa folha de cálculo gratuita. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Transforme a consulta inventada da Lição 6 numa reclamação de prática completa: escreva o código do diagnóstico e os códigos dos serviços, preencha as caixas principais de um formulário de reclamação 1500 de prática (em papel ou numa folha de cálculo), verifique-o com a sua lista de verificação antes do envio e escreva um plano de uma página com a certificação que vai procurar, onde vai fazer a formação e a data em que quer fazer o exame.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que procuram trabalho de escritório estável na área da saúde: pessoas à procura de emprego, antigos militares, pessoas que voltam da prisão, jovens adultos, imigrantes e adultos que voltam a estudar. Muitos nunca trabalharam num consultório médico. Alguns querem trabalhar à distância.",
    startingPoint: "Sabem ler e escrever inglês do dia a dia e usar um telefone ou um computador da biblioteca. A maioria não conhece as palavras médicas, os conjuntos de códigos, os termos dos seguros nem como uma reclamação é paga.",
    gap: "Os trabalhos de faturação e codificação pedem uma certificação e habilidades básicas desde o primeiro dia: conhecer o ciclo de faturação, escolher o conjunto de códigos certo, procurar os códigos com cuidado, preencher uma reclamação e manter privadas as informações de saúde. Os alunos precisam de um mapa claro do trabalho e das certificações, e de praticar cada passo, antes de pagarem um programa de formação ou um exame.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; todas as palavras médicas e de seguros são explicadas",
      "Aparelhos: um telefone ou um computador da biblioteca; todas as tarefas podem ser feitas em papel",
      "Os livros de códigos e algumas ferramentas de codificação custam dinheiro; o curso usa ferramentas oficiais gratuitas e exemplos inventados",
      "Os códigos mudam todos os anos: todos os códigos mostrados são só para praticar",
      "Privacidade: não se usa nenhuma informação verdadeira de pacientes em nenhuma parte do curso",
      "Algumas certificações fazem perguntas sobre o passado da pessoa; os alunos verificam as regras de cada programa"
    ],
    prerequisites: "Nenhum. Os cursos \"Excel e Folhas de Cálculo\" e \"Literacia em Saúde\" ajudam, mas não são obrigatórios."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando as páginas oficiais da NHA, da AAPC e da AHIMA", action: "comparar três certificações de faturação e codificação e escrever um plano de estudo e de exame com datas", standard: "com os requisitos verificados na página oficial, sem adivinhar" },
    { id: "O2", condition: "Com os passos de uma consulta médica fora de ordem", action: "pôr por ordem os passos do ciclo de faturação, da marcação ao pagamento", standard: "sem faltar nenhum passo" },
    { id: "O3", condition: "Com cinco partes de uma consulta inventada", action: "ligar cada parte ao conjunto de códigos certo: ICD-10-CM para o diagnóstico, CPT para o serviço do médico, HCPCS Level II para os materiais", standard: "acertando pelo menos 4 de 5" },
    { id: "O4", condition: "Com um diagnóstico de uma nota de consulta inventada", action: "procurar um código de diagnóstico encontrando o termo no índice e depois confirmando-o na lista de códigos", standard: "todas as vezes, sem nunca codificar só a partir do índice" },
    { id: "O5", condition: "Com uma consulta inventada e um formulário de reclamação de prática em branco", action: "preencher as caixas principais da reclamação e encontrar a razão por que uma reclamação de prática foi recusada", standard: "com o paciente, o seguro, os códigos e os valores iguais aos da consulta" },
    { id: "O6", condition: "Em situações de prática no trabalho", action: "partilhar as informações do paciente só com quem precisa delas, e só o mínimo de que precisa", standard: "em todas as situações, seguindo a HIPAA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, as certificações e os códigos",
      lessons: [
        {
          title: "O trabalho e as certificações que os empregadores pedem",
          objectives: ["O1"],
          minutes: 5,
          goal: "Comparar três certificações de faturação e codificação e escolher uma para procurar.",
          text: [
            "Um codificador médico lê as notas do médico e transforma o diagnóstico e os serviços em códigos. Um faturador médico usa esses códigos para enviar uma reclamação à seguradora e acompanha-a até ser paga. Nos consultórios pequenos, muitas vezes uma só pessoa faz as duas coisas.",
            "Os empregadores pedem muitas vezes uma certificação. Três comuns: a Certified Billing and Coding Specialist (CBCS) da NHA, a National Healthcareer Association; a Certified Professional Coder (CPC) da AAPC; e a Certified Coding Associate (CCA) da AHIMA, a American Health Information Management Association.",
            "Cada uma tem as suas regras. Por exemplo, a CBCS da NHA pede o diploma do ensino secundário ou o GED (o diploma equivalente nos Estados Unidos) mais um programa de formação ou experiência de trabalho supervisionada. As taxas, as regras do exame e os requisitos mudam, por isso leia a página oficial de cada uma antes de pagar qualquer coisa. Este curso prepara você; não dá um certificado.",
            "Tenha cuidado com programas que prometem um emprego ou um certificado em poucos dias. Pergunte a qualquer escola para que exame de certificação ela prepara você, e verifique esse exame na página oficial."
          ],
          steps: ["Abra a página oficial da CBCS (nhanow.com), da CPC (aapc.com) e da CCA (ahima.org).", "Para cada uma, escreva quem a dá, o que precisa antes do exame e como se faz o exame.", "Veja os anúncios de emprego perto de você e conte que certificação pedem mais.", "Escolha uma para procurar e escreva o mês em que quer fazer o exame."],
          words: [["Codificador médico", "uma pessoa que transforma as notas do médico em códigos padrão."], ["Faturador médico", "uma pessoa que envia reclamações às seguradoras e as acompanha até serem pagas."], ["Certificação", "prova dada por uma organização de exames de que você passou no seu exame; também se chama credencial."], ["Reclamação (claim)", "uma conta enviada a uma seguradora a pedir que pague uma consulta."]],
          slides: [
            { title: "Codificador e faturador", bullets: ["Codificador: transforma as notas do médico em códigos", "Faturador: envia a reclamação e acompanha-a até ser paga", "Consultórios pequenos: muitas vezes uma só pessoa faz as duas coisas"] },
            { title: "Três certificações comuns", bullets: ["CBCS da NHA", "CPC da AAPC", "CCA da AHIMA"] },
            { title: "Verifique antes de pagar", bullets: ["As regras, as taxas e os exames mudam", "Leia cada página oficial", "Este curso prepara você; não é um certificado"] },
            { title: "Escolha o seu caminho", bullets: ["Conte o que pedem os anúncios de emprego da sua zona", "Escolha uma certificação", "Escreva o mês em que quer fazer o exame"] }
          ],
          sources: [
            { name: "NHA: Certified Billing and Coding Specialist (CBCS)", url: "https://www.nhanow.com/certifications/billing-coding" },
            { name: "AAPC: Certified Professional Coder (CPC)", url: "https://www.aapc.com/certifications/cpc" },
            { name: "AHIMA: Certified Coding Associate (CCA)", url: "https://www.ahima.org/certification-careers/certifications-overview/cca/" }
          ],
          tryIt: "Faça uma tabela de três colunas em papel ou numa folha de cálculo: CBCS, CPC, CCA. Para cada uma, escreva quem a dá e o que precisa antes do exame, tirado da página oficial. Depois veja cinco anúncios de emprego da sua zona e marque com um círculo a certificação que vai procurar.",
          youCanNow: "dizer o que fazem os faturadores e os codificadores, dar o nome de três certificações e de quem as dá, e escolher uma para procurar.",
          quickCheck: [
            { objective: "O1", q: "Quem dá a certificação CPC?", options: ["O consultório onde trabalha", "A AAPC", "O serviço de viação do seu estado", "Qualquer escola na internet"], answer: 1, why: "A Certified Professional Coder (CPC) é a certificação da AAPC." },
            { objective: "O1", q: "Um site diz que pode ser codificador certificado em três dias por uma pequena taxa. O que faz primeiro?", options: ["Paga depressa antes de o preço subir", "Diz aos empregadores que é certificado", "Verifica as regras do exame verdadeiro na página oficial", "Não faz formação; o site chega"], answer: 2, why: "Só a organização que dá a certificação pode dizer quais são as suas regras e o seu exame verdadeiros." }
          ]
        },
        {
          title: "Como uma conta avança: o ciclo de faturação",
          objectives: ["O2"],
          minutes: 5,
          goal: "Pôr por ordem os passos do ciclo de faturação, da marcação ao pagamento.",
          text: [
            "O ciclo de faturação, também chamado ciclo de receita, é o caminho desde o momento em que um paciente marca uma consulta até ao momento em que o consultório recebe tudo.",
            "Os passos principais: 1) Marcar a consulta e verificar o seguro. 2) Registar a chegada do paciente: confirmar o nome, a data de nascimento e o cartão do seguro. 3) O médico vê o paciente e escreve notas. 4) O codificador transforma as notas em códigos. 5) O faturador faz a reclamação e verifica-a. 6) A reclamação é enviada à seguradora. 7) A seguradora paga, paga uma parte ou recusa, e envia uma explicação. 8) O consultório cobra ao paciente o que ele deve, como o copagamento, e acompanha tudo o que não foi pago.",
            "Os erros no início do ciclo causam problemas mais tarde. Um número de seguro errado na chegada pode fazer uma reclamação ser recusada semanas depois. Por isso, um registo cuidadoso na chegada é tão importante como uma codificação cuidadosa."
          ],
          steps: ["Marcar e verificar o seguro.", "Registar a chegada do paciente e confirmar os seus dados.", "O médico vê o paciente e escreve notas.", "Codificar a consulta.", "Fazer e verificar a reclamação.", "Enviar a reclamação.", "Ler o pagamento ou a recusa.", "Cobrar a parte do paciente e acompanhar."],
          words: [["Ciclo de faturação (ciclo de receita)", "todos os passos desde a marcação de uma consulta até receber tudo."], ["Copagamento (copay)", "um valor fixo que o paciente paga por uma consulta."], ["Franquia (deductible)", "o valor que um paciente paga em cada ano antes de o seguro começar a pagar muitos serviços."], ["Pagador (payer)", "a seguradora ou o programa do governo que paga a reclamação."], ["Recusa (denial)", "quando o pagador se recusa a pagar uma reclamação."]],
          slides: [
            { title: "Da marcação ao pagamento", bullets: ["Chama-se ciclo de faturação ou ciclo de receita", "Cada passo afeta o pagamento"] },
            { title: "Início do ciclo", bullets: ["1. Marcar e verificar o seguro", "2. Chegada: nome, data de nascimento, cartão do seguro", "3. O médico vê o paciente e escreve notas"] },
            { title: "Meio do ciclo", bullets: ["4. Codificar a consulta", "5. Fazer e verificar a reclamação", "6. Enviá-la ao pagador"] },
            { title: "Fim do ciclo", bullets: ["7. O pagador paga, paga uma parte ou recusa", "8. Cobrar a parte do paciente e acompanhar", "Erros no início causam recusas mais tarde"] }
          ],
          tryIt: "Escreva os oito passos do ciclo de faturação em oito pedaços de papel. Misture-os e depois ponha-os outra vez por ordem sem olhar. Ao lado de cada passo, escreva um erro que pode acontecer ali, por exemplo um nome mal escrito na chegada.",
          youCanNow: "dizer por ordem os passos do ciclo de faturação e explicar como um erro no início pode causar uma recusa mais tarde.",
          quickCheck: [
            { objective: "O2", q: "Que passo vem logo depois de o codificador transformar as notas em códigos?", options: ["Marcar a consulta", "Registar a chegada do paciente", "O pagador envia o pagamento", "O faturador faz e verifica a reclamação"], answer: 3, why: "Primeiro vem a codificação; depois o faturador faz a reclamação com esses códigos e verifica-a." },
            { objective: "O2", q: "Na chegada, o número do seguro do paciente é escrito errado. Qual é o resultado mais provável?", options: ["A reclamação pode ser recusada mais tarde", "Nada; o codificador vai reparar", "O médico recebe mais depressa", "O copagamento do paciente baixa"], answer: 0, why: "O pagador compara a reclamação com os registos dos seus membros; um número errado leva muitas vezes a uma recusa." }
          ]
        },
        {
          title: "Os três conjuntos de códigos",
          objectives: ["O3"],
          minutes: 6,
          goal: "Ligar cada parte de uma consulta ao conjunto de códigos certo.",
          text: [
            "Uma reclamação responde a duas perguntas: porque é que o paciente veio, e o que é que o consultório fez? Cada pergunta tem os seus conjuntos de códigos.",
            "Os códigos ICD-10-CM dizem PORQUÊ: o diagnóstico, o sinal ou o sintoma. Começam com uma letra, depois números, e podem ter um ponto, por exemplo I10 para tensão alta sem causa conhecida (exemplo de prática). Nos Estados Unidos, o National Center for Health Statistics (NCHS) do CDC mantém o ICD-10-CM.",
            "Os códigos CPT dizem O QUE o médico ou outro profissional fez: uma consulta, uma análise, um procedimento. Têm cinco algarismos, por exemplo 36415 para tirar sangue de uma veia (exemplo de prática). A American Medical Association (AMA) é dona do CPT e atualiza-o. O CMS chama ao CPT \"HCPCS Level I\".",
            "Os códigos HCPCS Level II cobrem o que o CPT não cobre, como materiais, equipamento e viagens de ambulância. Têm uma letra e quatro algarismos. O CMS (os Centers for Medicare & Medicaid Services) mantém-nos. Todos os conjuntos de códigos são atualizados todos os anos, por isso use sempre o livro ou a ferramenta atual."
          ],
          words: [["Diagnóstico", "o problema de saúde que o médico encontra ou trata."], ["ICD-10-CM", "o conjunto de códigos para os diagnósticos nos Estados Unidos."], ["CPT", "o conjunto de códigos de cinco algarismos da AMA para serviços e procedimentos; também se chama HCPCS Level I."], ["HCPCS Level II", "o conjunto de códigos do CMS para materiais, equipamento e outras coisas que o CPT não cobre; uma letra e quatro algarismos."], ["CMS", "os Centers for Medicare & Medicaid Services, o serviço federal que gere o Medicare e trabalha com os estados no Medicaid."]],
          slides: [
            { title: "Duas perguntas em cada reclamação", bullets: ["PORQUE é que o paciente veio? (diagnóstico)", "O QUE é que o consultório fez? (serviço ou material)"] },
            { title: "ICD-10-CM: o porquê", bullets: ["Diagnósticos, sinais e sintomas", "Letra + números, muitas vezes um ponto: I10", "Mantido nos EUA pelo NCHS do CDC"] },
            { title: "CPT: o quê", bullets: ["Serviços de médicos e de outros profissionais", "Cinco algarismos: 36415 (exemplo de prática)", "É da AMA; também se chama HCPCS Level I"] },
            { title: "HCPCS Level II: materiais e extras", bullets: ["Materiais, equipamento, viagens de ambulância", "Uma letra + quatro algarismos", "Mantido pelo CMS; todos os conjuntos mudam todos os anos"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" },
            { name: "CMS: HCPCS (o Level I é o CPT; o Level II é mantido pelo CMS)", url: "https://www.cms.gov/medicare/coding-billing/healthcare-common-procedure-system" }
          ],
          tryIt: "Só para praticar. Para esta consulta inventada, escreva o conjunto de códigos de cada parte: (1) dor de garganta, (2) consulta com o médico, (3) teste rápido de estreptococo, (4) tensão alta, (5) um par de muletas que o paciente leva para casa. Respostas: 1 e 4 são ICD-10-CM, 2 e 3 são CPT, 5 é HCPCS Level II.",
          youCanNow: "dizer que conjunto de códigos responde porque é que o paciente veio e qual responde o que foi feito, e ligar partes de uma consulta ao ICD-10-CM, ao CPT ou ao HCPCS Level II.",
          quickCheck: [
            { objective: "O3", q: "Que conjunto de códigos usa para o diagnóstico do paciente?", options: ["CPT", "HCPCS Level II", "ICD-10-CM", "Um código postal"], answer: 2, why: "Os códigos ICD-10-CM dizem porque é que o paciente veio: o diagnóstico, o sinal ou o sintoma." },
            { objective: "O3", q: "Um paciente vai para casa com um andarilho. Que conjunto de códigos costuma cobrir o andarilho?", options: ["HCPCS Level II", "ICD-10-CM", "CPT", "Não é preciso código"], answer: 0, why: "O equipamento e os materiais que o CPT não cobre usam códigos HCPCS Level II." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, as certificações e os códigos",
        questions: [
          { objective: "O1", q: "Que certificação de faturação e codificação dá a NHA?", options: ["CPC", "CCA", "CDL", "CBCS"], answer: 3, why: "A certificação de faturação e codificação da NHA é a Certified Billing and Coding Specialist (CBCS)." },
          { objective: "O2", q: "O que é o ciclo de faturação?", options: ["Os passos desde a marcação de uma consulta até receber tudo", "Uma bicicleta para quem trabalha no escritório", "O horário diário do médico", "A ordem dos códigos numa reclamação"], answer: 0, why: "O ciclo de faturação (de receita) vai da marcação até ao último pagamento." },
          { objective: "O2", q: "O pagador paga uma parte de uma reclamação. Qual é normalmente o passo seguinte?", options: ["Apagar a reclamação", "Cobrar ao paciente a sua parte e acompanhar", "Mudar o diagnóstico", "Marcar uma nova consulta"], answer: 1, why: "Depois da parte do pagador, o consultório cobra a parte do paciente, como o copagamento ou a franquia." },
          { objective: "O3", q: "Qual é o formato de um código CPT?", options: ["Uma letra e quatro algarismos", "Uma letra, números e um ponto", "Cinco algarismos", "Uma palavra de dez letras"], answer: 2, why: "Os códigos CPT têm cinco algarismos; o ICD-10-CM começa com uma letra e o HCPCS Level II é uma letra mais quatro algarismos." },
          { objective: "O3", q: "Quem mantém o ICD-10-CM nos Estados Unidos?", options: ["O National Center for Health Statistics do CDC", "A American Medical Association", "Cada consultório médico", "O empregador do paciente"], answer: 0, why: "O NCHS do CDC mantém a versão dos EUA do ICD-10, chamada ICD-10-CM." }
        ]
      }
    },
    {
      name: "Capítulo 2: Códigos, reclamações e privacidade",
      lessons: [
        {
          title: "Procurar um código da forma certa",
          objectives: ["O4"],
          minutes: 5,
          goal: "Procurar um código de diagnóstico no índice e confirmá-lo na lista de códigos.",
          text: [
            "O ICD-10-CM tem duas partes principais. O índice alfabético mostra as doenças pelo nome, como o índice de um livro. A lista tabular mostra todos os códigos por ordem, com notas sobre quando os usar e quando não os usar.",
            "A regra que os codificadores seguem: primeiro encontre a palavra principal no índice e depois confirme sempre o código na lista tabular. Nunca codifique só a partir do índice, porque a lista tabular pode dizer para acrescentar um carácter ou usar outro código.",
            "Procure a doença, não a parte do corpo. Para \"dor de garganta aguda\", a palavra principal é faringite (a palavra médica para uma garganta dorida e inchada). Depois leia as notas na lista tabular antes de escolher o código. O CPT também tem o seu próprio índice e a sua lista de códigos, e funciona da mesma forma.",
            "Prática gratuita: a ICD-10-CM Browser Tool do CDC deixa procurar no conjunto de códigos pela internet. Num trabalho verdadeiro, usa o livro de códigos atual ou a ferramenta que o empregador paga, e as notas do médico, nunca um palpite."
          ],
          steps: ["Leia a nota do médico e encontre o diagnóstico.", "Encontre no índice alfabético a palavra principal da doença.", "Escreva o código que o índice indica.", "Vá a esse código na lista tabular.", "Leia as notas: \"includes\" (inclui), \"excludes\" (exclui) e se são precisos mais caracteres.", "Escolha o código que corresponde exatamente à nota."],
          words: [["Índice alfabético", "a parte do livro de códigos que mostra as doenças pelo nome, de A a Z."], ["Lista tabular", "a parte do livro de códigos que mostra todos os códigos por ordem, com as regras para os usar."], ["Termo principal", "a palavra da doença que procura primeiro, não a parte do corpo."], ["Especificidade", "o quanto um código é exato; os codificadores usam o código mais exato que as notas do médico permitem."]],
          slides: [
            { title: "Duas partes do livro de códigos", bullets: ["Índice alfabético: doenças de A a Z", "Lista tabular: todos os códigos por ordem, com regras"] },
            { title: "A regra dos dois passos", bullets: ["1. Encontre a palavra principal no índice", "2. Confirme o código na lista tabular", "Nunca codifique só a partir do índice"] },
            { title: "Procure a doença", bullets: ["Palavra principal = a doença, não a parte do corpo", "Leia as notas \"includes\" e \"excludes\"", "Use o código mais exato que as notas permitem"] },
            { title: "Pratique de graça", bullets: ["A ICD-10-CM Browser Tool do CDC", "No trabalho: o livro atual ou a ferramenta do empregador", "Codifique a partir das notas do médico, nunca de um palpite"] }
          ],
          sources: [
            { name: "CDC NCHS: ICD-10-CM e a ICD-10-CM Browser Tool", url: "https://www.cdc.gov/nchs/icd/icd-10-cm/index.html" }
          ],
          tryIt: "Só para praticar. Abra a ICD-10-CM Browser Tool do CDC a partir do link da fonte. Procure estes diagnósticos inventados (a ferramenta está em inglês): \"acute pharyngitis\" (faringite aguda), \"essential hypertension\" (hipertensão essencial) e \"type 2 diabetes without complications\" (diabetes tipo 2 sem complicações). Para cada um, escreva a palavra principal que procurou, o código que encontrou e uma nota que leu antes de o escolher.",
          youCanNow: "procurar um código de diagnóstico em dois passos, o índice e depois a lista tabular, e dizer porque nunca para no índice.",
          quickCheck: [
            { objective: "O4", q: "Encontrou um código no índice alfabético. O que faz a seguir?", options: ["Põe-no logo na reclamação", "Confirma-o na lista tabular e lê as notas", "Pergunta ao paciente se lhe parece bem", "Escolhe o código mais curto ali perto"], answer: 1, why: "A lista tabular tem as regras e pode pedir mais caracteres; nunca codifique só a partir do índice." },
            { objective: "O4", q: "A nota diz \"bronquite aguda\". Qual é a palavra principal a procurar?", options: ["Aguda", "Peito", "Pulmões", "Bronquite"], answer: 3, why: "Procura a doença (bronquite) e depois encontra \"aguda\" debaixo dela." }
          ]
        },
        {
          title: "Preencher uma reclamação e corrigir uma recusa",
          objectives: ["O5"],
          minutes: 6,
          goal: "Preencher as caixas principais de uma reclamação 1500 de prática e encontrar porque uma reclamação foi recusada.",
          text: [
            "Os consultórios médicos faturam com o formulário de reclamação 1500, mantido pelo National Uniform Claim Committee (NUCC). A versão em papel usada é o formulário 02/12. Hoje a maioria das reclamações é enviada por via eletrónica, mas a reclamação eletrónica tem as mesmas informações, por isso aprender o formulário em papel ensina os dados.",
            "Caixas principais a conhecer (prática): Caixa 1a, o número de identificação do segurado, do cartão do seguro. Caixa 2, o nome do paciente. Caixa 21, os códigos de diagnóstico, marcados A, B, C e assim por diante. Caixa 24, as linhas de serviço: a data do serviço (24A), o código CPT ou HCPCS (24D), o indicador de diagnóstico, que liga o serviço a uma letra de diagnóstico da Caixa 21 (24E), e o valor cobrado (24F). Caixa 33, o prestador que fatura.",
            "Antes de uma reclamação sair, verifique-a: o paciente e o número certos, cada serviço tem um indicador de diagnóstico, os códigos são atuais, as datas e os valores correspondem à consulta. Apanhar os erros agora custa menos do que corrigir uma recusa depois.",
            "Quando uma reclamação é recusada, o pagador envia um aviso de pagamento (uma explicação do pagamento) com uma razão. Razões comuns: número ou nome errado, código em falta ou inválido, serviço não coberto, falta de autorização prévia, reclamação duplicada, ou enviada tarde demais. Encontre a razão, corrija-a e volte a enviar ou recorra seguindo as regras do pagador."
          ],
          steps: ["Copie o número do segurado (1a) e o nome do paciente (2) exatamente do cartão inventado.", "Escreva os códigos de diagnóstico na Caixa 21 como A, B, C.", "Em cada linha de serviço da Caixa 24, escreva a data, o código CPT ou HCPCS, o indicador de diagnóstico e o valor.", "Preencha o prestador que fatura (33).", "Verifique a reclamação com a sua lista de verificação antes do envio.", "Se voltar recusada, leia a razão, corrija a causa e volte a enviar seguindo as regras do pagador."],
          words: [["Formulário de reclamação 1500", "o formulário de reclamação em papel padrão dos consultórios médicos, mantido pelo NUCC."], ["Indicador de diagnóstico (diagnosis pointer)", "a letra numa linha de serviço (A, B, C) que a liga a um diagnóstico da Caixa 21."], ["Aviso de pagamento (EOB ou ERA)", "a explicação do pagador sobre o que pagou ou recusou, e porquê."], ["Autorização prévia", "a aprovação do pagador antes de se fazerem alguns serviços."], ["Reclamação limpa (clean claim)", "uma reclamação sem erros, que pode ser paga à primeira."]],
          slides: [
            { title: "O formulário de reclamação 1500", bullets: ["Mantido pelo NUCC; versão em papel 02/12", "As reclamações eletrónicas têm os mesmos dados"] },
            { title: "Caixas principais (prática)", bullets: ["1a: número do segurado  •  2: nome do paciente", "21: códigos de diagnóstico A, B, C...", "24: data, código, indicador, valor  •  33: prestador que fatura"] },
            { title: "Verifique antes de enviar", bullets: ["Paciente e número certos", "Cada linha de serviço tem um indicador", "Códigos atuais; datas e valores correspondem"] },
            { title: "Razões comuns de recusa", bullets: ["Número ou nome errado; código em falta ou inválido", "Não coberto; sem autorização prévia", "Duplicada ou enviada tarde: corrija e volte a enviar"] }
          ],
          sources: [
            { name: "NUCC: formulário de reclamação 1500 (1500 Claim Form)", url: "https://www.nucc.org/index.php/1500-claim-form-mainmenu-35" }
          ],
          tryIt: "Só para praticar. Paciente inventado: Sam Rivera, número do segurado ABC123456. Consulta numa data que você escolhe: consulta no consultório (99213) por dor de garganta (J02.9) com um teste rápido de estreptococo (87880), valores de $100 e $25 (inventados). Em papel ou numa folha de cálculo, preencha as Caixas 1a, 2, 21, 24 (duas linhas) e 33 (\"Practice Clinic\"). Depois a reclamação volta: \"invalid member ID\" (número de membro inválido). Escreva o que verificaria e corrigiria.",
          youCanNow: "preencher as caixas principais de uma reclamação de prática, verificá-la antes de sair, e encontrar e corrigir a razão de uma recusa.",
          quickCheck: [
            { objective: "O5", q: "Onde vão os códigos de diagnóstico no formulário 1500?", options: ["Caixa 2", "Caixa 33", "Caixa 21", "Caixa 1a"], answer: 2, why: "A Caixa 21 tem os códigos de diagnóstico, marcados A, B, C e assim por diante." },
            { objective: "O5", q: "Uma reclamação é recusada com \"o serviço precisa de autorização prévia\". O que faltou?", options: ["A aprovação do pagador antes do serviço", "O nome do meio do paciente", "Uma segunda cópia da reclamação", "A assinatura do médico na ficha em papel"], answer: 0, why: "A autorização prévia é a aprovação do pagador antes de alguns serviços; sem ela a reclamação é recusada." }
          ]
        },
        {
          title: "Proteger a privacidade do paciente, e a sua reclamação de prática",
          objectives: ["O6"],
          minutes: 5,
          goal: "Partilhar as informações do paciente só com quem precisa delas, e só o que precisa.",
          text: [
            "Os faturadores e os codificadores veem informações de saúde privadas todos os dias: nomes, datas de nascimento, diagnósticos, números de seguro. A HIPAA é a lei federal dos Estados Unidos que as protege. A sua Regra de Privacidade (Privacy Rule) cobre os planos de saúde, a maioria dos consultórios médicos e hospitais, e as empresas que trabalham para eles, como as empresas de faturação.",
            "As informações de saúde protegidas (PHI) são qualquer informação de saúde que possa identificar uma pessoa. A regra do \"mínimo necessário\" quer dizer que usa e partilha só o que é preciso para o trabalho. Um pagador pode precisar do código de diagnóstico na reclamação; um colega na sala de pausa não precisa de o ouvir.",
            "Hábitos do dia a dia: bloqueie o ecrã quando se afasta, nunca fale de pacientes em público, confirme a identidade de quem telefona, envie reclamações só por sistemas aprovados e nunca envie PHI por email ou SMS de uma conta pessoal. Se vir um erro de privacidade, diga logo ao seu supervisor ou ao responsável pela privacidade.",
            "Agora junte tudo na sua tarefa final: uma reclamação de prática completa e o seu plano de certificação."
          ],
          steps: ["Antes de partilhar, pergunte: esta pessoa tem uma razão de trabalho para saber?", "Partilhe só o mínimo de que ela precisa.", "Confirme quem está a telefonar antes de dar qualquer coisa.", "Bloqueie o ecrã e use só sistemas aprovados.", "Comunique os erros de privacidade ao seu supervisor ou ao responsável pela privacidade."],
          words: [["HIPAA", "a lei federal dos EUA que protege a privacidade e a segurança das informações de saúde."], ["PHI", "informações de saúde protegidas: informações de saúde que podem identificar uma pessoa."], ["Mínimo necessário", "a ideia da HIPAA de usar ou partilhar só as informações precisas para a tarefa."], ["Responsável pela privacidade (privacy officer)", "a pessoa no trabalho encarregada das regras e das comunicações de privacidade."]],
          slides: [
            { title: "A HIPAA protege os pacientes", bullets: ["Lei federal de privacidade das informações de saúde", "Cobre planos de saúde, a maioria dos médicos e as suas empresas de faturação"] },
            { title: "Mínimo necessário", bullets: ["Partilhe só com quem precisa para o trabalho", "Partilhe só o que essa pessoa precisa"] },
            { title: "Hábitos do dia a dia", bullets: ["Bloqueie o ecrã", "Não fale de pacientes em público", "Confirme quem está a telefonar", "Só sistemas aprovados, nunca email pessoal"] },
            { title: "Tarefa final", bullets: ["Complete a reclamação de prática", "Verifique-a com a sua lista antes do envio", "Escreva o seu plano de certificação com datas"] }
          ],
          sources: [
            { name: "HHS: HIPAA para profissionais (Privacy Rule)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Tarefa final, só para praticar. Consulta inventada: Ana Lee, número do segurado XYZ987654, vai ao médico (99213) por tensão alta (I10) e tira sangue de uma veia (36415); valores inventados de $100 e $15. Preencha uma reclamação 1500 de prática (Caixas 1a, 2, 21, 24, 33), verifique-a com uma lista de verificação antes do envio escrita por você e junte um plano de uma página: a sua certificação, onde vai fazer a formação e a data em que quer fazer o exame. Não use nenhuma informação verdadeira de pacientes.",
          youCanNow: "proteger as informações do paciente com a regra do mínimo necessário e transformar uma consulta inventada numa reclamação de prática completa e verificada.",
          quickCheck: [
            { objective: "O6", q: "Uma pessoa telefona, diz que é irmã de um paciente e pede o diagnóstico dele. O que faz?", options: ["Lê-lhe o diagnóstico para ajudar", "Envia-lho por SMS mais tarde", "Diz-lhe só o código do diagnóstico", "Segue as regras do consultório para confirmar quem pode receber informações; não o partilha"], answer: 3, why: "A HIPAA limita quem pode receber PHI; siga as regras do consultório e não partilhe nada antes de confirmar." },
            { objective: "O6", q: "O que quer dizer \"mínimo necessário\"?", options: ["Partilhar só as informações precisas para a tarefa", "Trabalhar o menor número de horas possível", "Codificar só um diagnóstico por reclamação", "Cobrar o preço mais baixo"], answer: 0, why: "Segundo a HIPAA, usa e partilha só as informações precisas para o trabalho." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Códigos, reclamações e privacidade",
        questions: [
          { objective: "O4", q: "Porque é que os codificadores nunca codificam só a partir do índice alfabético?", options: ["O índice está sempre desatualizado", "O índice não tem códigos", "A lista tabular tem regras e pode pedir mais caracteres", "Os pagadores não aceitam códigos do índice"], answer: 2, why: "As notas da lista tabular podem mudar o código ou pedir mais caracteres." },
          { objective: "O5", q: "O que faz o indicador de diagnóstico na Caixa 24E?", options: ["Mostra a morada do pagador", "Liga uma linha de serviço a um diagnóstico da Caixa 21", "Indica a casa do paciente", "Mostra a licença do médico"], answer: 1, why: "A letra do indicador liga cada serviço ao diagnóstico que o explica." },
          { objective: "O5", q: "Uma reclamação é recusada como \"duplicada\". Qual é o melhor primeiro passo?", options: ["Verificar se a mesma reclamação já foi enviada ou paga", "Enviá-la mais três vezes", "Mudar os códigos para parecer diferente", "Cobrar tudo ao paciente"], answer: 0, why: "Uma recusa por duplicação quer dizer que o pagador já a tem; verifique o seu estado em vez de a voltar a enviar." },
          { objective: "O6", q: "Precisa de se afastar da secretária com uma reclamação no ecrã. O que faz?", options: ["Deixa aberta; vai ser rápido", "Pede a um visitante para olhar por ela", "Vira o ecrã para a parede", "Bloqueia o ecrã"], answer: 3, why: "Bloquear o ecrã protege as PHI de quem não as deve ver." },
          { objective: "O6", q: "Qual destas é uma informação de saúde protegida (PHI)?", options: ["Um formulário de reclamação em branco", "O horário de abertura do consultório", "O nome de um paciente com o seu diagnóstico", "O nome de um livro de códigos"], answer: 2, why: "Uma informação de saúde que pode identificar uma pessoa é PHI." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções Básicas de Faturação e Codificação Médica",
    questions: [
      { objective: "O1", q: "O que faz um codificador médico?", options: ["Transforma as notas do médico em códigos padrão", "Tira sangue aos pacientes", "Vende planos de seguro", "Repara os computadores do escritório"], answer: 0, why: "Os codificadores transformam em códigos os diagnósticos e os serviços das notas." },
      { objective: "O1", q: "Onde deve verificar os requisitos e as taxas atuais de uma certificação?", options: ["Numa publicação nas redes sociais", "Com um amigo que a fez há anos", "Na página oficial da organização que a dá", "Em qualquer anúncio de formação"], answer: 2, why: "As regras e as taxas mudam; a página oficial tem as atuais." },
      { objective: "O1", q: "Que par está certo?", options: ["CPC da NHA", "CBCS da AHIMA", "CCA da AAPC", "CCA da AHIMA"], answer: 3, why: "A CCA é da AHIMA; a CPC é da AAPC; a CBCS é da NHA." },
      { objective: "O1", q: "O que lhe dá este curso?", options: ["Uma licença de codificação", "Preparação para um exame de certificação", "Um emprego garantido", "Um certificado CPC"], answer: 1, why: "O curso prepara você; as certificações só vêm de passar no exame oficial." },
      { objective: "O2", q: "Qual é o primeiro passo do ciclo de faturação?", options: ["Marcar a consulta e verificar o seguro", "Enviar a reclamação", "Cobrar ao paciente", "Codificar a consulta"], answer: 0, why: "O ciclo começa quando a consulta é marcada e o seguro é verificado." },
      { objective: "O2", q: "Que passo vem logo antes de enviar a reclamação?", options: ["Registar a chegada do paciente", "Fazer e verificar a reclamação", "Marcar a consulta", "O pagamento do pagador"], answer: 1, why: "O faturador faz e verifica a reclamação, e depois envia-a." },
      { objective: "O2", q: "O que é um copagamento?", options: ["Uma cópia da reclamação", "Um pagamento do pagador ao médico", "Um valor fixo que o paciente paga por uma consulta", "Um erro de codificação"], answer: 2, why: "O copagamento é um valor fixo que o paciente paga." },
      { objective: "O3", q: "Um paciente chega com tosse. Que conjunto de códigos descreve a tosse?", options: ["CPT", "HCPCS Level II", "Nenhum", "ICD-10-CM"], answer: 3, why: "Os sinais, os sintomas e os diagnósticos usam o ICD-10-CM." },
      { objective: "O3", q: "Quem é dono do conjunto de códigos CPT e o atualiza?", options: ["A American Medical Association", "O empregador do paciente", "Cada estado", "O NUCC"], answer: 0, why: "A AMA é dona do CPT; o CMS chama-lhe HCPCS Level I." },
      { objective: "O3", q: "Que código parece um código HCPCS Level II?", options: ["99213", "I10", "E0100 (exemplo de prática)", "36415"], answer: 2, why: "Os códigos HCPCS Level II têm uma letra seguida de quatro algarismos." },
      { objective: "O3", q: "Com que frequência mudam os conjuntos de códigos?", options: ["Nunca", "Todos os anos", "De 50 em 50 anos", "Só quando um médico pede"], answer: 1, why: "Os conjuntos de códigos são atualizados todos os anos, por isso os codificadores usam o livro ou a ferramenta atual." },
      { objective: "O4", q: "No livro de códigos, que parte mostra as doenças de A a Z?", options: ["O índice alfabético", "A lista tabular", "O formulário de reclamação", "O aviso de pagamento"], answer: 0, why: "O índice alfabético mostra as doenças pelo nome." },
      { objective: "O4", q: "O médico escreve \"sinusite crónica\". O que procura primeiro?", options: ["Crónica", "Nariz", "Sinusite", "Cabeça"], answer: 2, why: "Procure a doença (sinusite) e depois a palavra \"crónica\" debaixo dela." },
      { objective: "O4", q: "Qual é uma ferramenta oficial gratuita para praticar a procura no ICD-10-CM?", options: ["Um fórum de codificação qualquer", "Um questionário nas redes sociais", "O formulário de reclamação 1500", "A ICD-10-CM Browser Tool do CDC"], answer: 3, why: "O NCHS do CDC oferece uma ICD-10-CM Browser Tool gratuita." },
      { objective: "O5", q: "Onde vai o número do segurado no formulário 1500?", options: ["Caixa 21", "Caixa 1a", "Caixa 24F", "Caixa 33"], answer: 1, why: "A Caixa 1a tem o número do segurado, do cartão do seguro." },
      { objective: "O5", q: "Quem mantém o formulário de reclamação 1500?", options: ["O National Uniform Claim Committee (NUCC)", "O paciente", "A AMA", "Cada médico"], answer: 0, why: "O NUCC mantém o formulário de reclamação 1500." },
      { objective: "O5", q: "O que é uma \"reclamação limpa\"?", options: ["Uma reclamação impressa em papel novo", "Uma reclamação sem valores", "Uma reclamação sem erros que pode ser paga à primeira", "Uma reclamação enviada por email"], answer: 2, why: "Uma reclamação limpa não tem erros, por isso o pagador pode pagá-la à primeira." },
      { objective: "O5", q: "O que diz um aviso de pagamento (EOB ou ERA)?", options: ["A morada do paciente", "O horário de amanhã", "O número da licença do médico", "O que o pagador pagou ou recusou, e porquê"], answer: 3, why: "O aviso de pagamento explica o pagamento ou a recusa e dá a razão." },
      { objective: "O6", q: "Um colega na pausa pergunta o que tem um paciente que você codificou. O que faz?", options: ["Diz-lhe; ele também trabalha aqui", "Não partilha; ele não tem razão de trabalho para saber", "Diz-lhe em voz baixa", "Mostra-lhe a reclamação"], answer: 1, why: "Segundo a regra do mínimo necessário, as PHI só vão para quem precisa delas para o trabalho." },
      { objective: "O6", q: "Que hábito protege as PHI?", options: ["Enviar reclamações a partir do seu email pessoal", "Falar de pacientes no autocarro", "Usar só sistemas de trabalho aprovados para enviar reclamações", "Deixar reclamações na impressora"], answer: 2, why: "Os sistemas aprovados protegem as PHI; o email pessoal e as conversas em público não." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 4, 7, 9, 11, 14, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Plano de certificação", objective: "O1", notYet: "Nenhuma certificação nomeada, ou requisitos adivinhados em vez de verificados.", meets: "Nomeia uma certificação e quem a dá, com os requisitos e a data do exame tirados da página oficial.", exceeds: "Também indica um programa de formação, datas de estudo semanais e o que pedem os anúncios de emprego da zona." },
      { name: "Conjuntos de códigos certos", objective: "O3", notYet: "Um diagnóstico está codificado com CPT, ou um serviço com ICD-10-CM.", meets: "O diagnóstico usa ICD-10-CM e cada serviço usa CPT.", exceeds: "Sabe explicar porque cada código pertence ao seu conjunto de códigos." },
      { name: "Códigos procurados da forma certa", objective: "O4", notYet: "Códigos copiados sem verificar, ou tirados só do índice.", meets: "Cada diagnóstico foi encontrado no índice e confirmado na lista tabular (ou na ferramenta do CDC).", exceeds: "Anota a palavra principal procurada e uma regra lida para cada código." },
      { name: "Caixas da reclamação preenchidas", objective: "O5", notYet: "Faltam caixas, ou o número, os códigos ou os valores não correspondem à consulta.", meets: "As Caixas 1a, 2, 21, 24 e 33 estão preenchidas e correspondem à consulta; cada linha de serviço tem um indicador.", exceeds: "Inclui uma lista de verificação escrita antes do envio que apanha pelo menos um erro colocado de propósito." },
      { name: "Ciclo de faturação e acompanhamento", objective: "O2", notYet: "Não sabe dizer o que acontece depois de a reclamação ser enviada.", meets: "Diz os passos do envio ao pagamento e o que fazer se for recusada.", exceeds: "Nomeia duas razões de recusa e a correção de cada uma." },
      { name: "Privacidade mantida", objective: "O6", notYet: "Usa informações verdadeiras de pacientes, ou partilha PHI com alguém que não precisa delas.", meets: "Usa só informações inventadas e mantém a reclamação privada.", exceeds: "Indica três hábitos diários que protegem as PHI no trabalho." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se inscrevem num programa de formação em faturação e codificação ou num exame de certificação em 90 dias",
      "Alunos que passam num exame CBCS, CPC ou CCA (segundo eles próprios)",
      "Alunos contratados para trabalhos de faturação, codificação, receção ou registo de pacientes em 6 meses"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para as páginas oficiais das certificações e a ICD-10-CM Browser Tool do CDC",
      "Papel e caneta, ou uma folha de cálculo gratuita (Google Sheets ou Excel), para a reclamação de prática",
      "Um modelo impresso ou desenhado do formulário de reclamação 1500 de prática (caixas 1a, 2, 21, 24, 33)",
      "Cerca de 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Sublinhe que todos os códigos do curso são exemplos de prática; confirme que os alunos sabem que os códigos mudam todos os anos.",
      "Nunca use fichas verdadeiras de pacientes nem cartões de seguro verdadeiros na aula; use só os pacientes inventados.",
      "Traga cópias impressas de anúncios de emprego da zona para os alunos verem que certificações os empregadores pedem.",
      "Coloque de propósito um erro (um número errado ou um indicador em falta) numa reclamação de exemplo e deixe os grupos encontrá-lo.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez.",
      "Alunos com registo criminal: diga-lhes para perguntarem a cada organização de certificação e a cada programa de formação quais são as suas regras, e para verificarem os requisitos de emprego no seu estado."
    ]
  }
};
