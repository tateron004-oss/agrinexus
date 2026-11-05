"use strict";

// Koach Learn course (Portuguese translation of workforce/workforce-essential-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "workforce-essential-ai-tools-pt",
  lang: "pt",
  translationOf: "workforce-essential-ai-tools",
  category: "Workforce Development",
  name: "Ferramentas de IA Essenciais para o Trabalho",
  skills: "Seguir a política de IA do seu empregador, Usar um assistente de conversa para escrever no trabalho, Usar a IA dentro do Microsoft 365 ou do Google Workspace, Resumir documentos e reuniões, Ter ajuda com folhas de cálculo, Verificar o trabalho da IA antes de o partilhar",
  outcome: "usar as ferramentas de IA que o seu local de trabalho permite para acabar mais depressa o trabalho do dia a dia: escrever e melhorar uma mensagem de trabalho, resumir um documento longo ou as notas de uma reunião, ter ajuda com uma folha de cálculo e verificar cada resultado antes de o partilhar, sem colocar informações confidenciais onde não devem estar.",
  about: [
    "Este curso é para trabalhadores e pessoas à procura de emprego que querem habilidades práticas de IA para o trabalho: pessoal de escritório e de administração, chefes de equipa no comércio e em armazéns, apoio na saúde, atendimento ao cliente e qualquer pessoa que escreve e-mails, lê regulamentos ou usa folhas de cálculo no trabalho.",
    "Vai começar pela regra mais importante, a política de IA do seu empregador, e depois praticar com assistentes de conversa (ChatGPT, Microsoft Copilot, Google Gemini) e com a ajuda de IA que vem dentro do Microsoft 365 e do Google Workspace em alguns planos. Vai resumir, escrever rascunhos, analisar e, sempre, verificar.",
    "As funções que vê dependem das licenças e das definições do seu empregador, por isso explicamos o que fazer em vez dos nomes exatos dos botões. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça um conjunto de tarefas de IA de trabalho usando só ferramentas que o seu local de trabalho permite (ou ferramentas gratuitas com dados inventados, se está à procura de emprego): (1) escreva as três regras principais da política de IA do seu local de trabalho, ou as três regras que seguiria; (2) transforme notas soltas num e-mail de trabalho claro; (3) resuma um documento longo em cinco tópicos e três tarefas a fazer; (4) peça ajuda à IA para pôr uma fórmula numa folha de cálculo; e (5) anote o que verificou em cada uma antes de partilhar.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Trabalhadores e pessoas à procura de emprego que querem habilidades práticas de IA para o trabalho: pessoal de escritório e de administração, chefes de equipa no comércio e em armazéns, apoio na saúde, atendimento ao cliente e qualquer pessoa que escreve e-mails, lê regulamentos ou usa folhas de cálculo no trabalho.",
    startingPoint: "Usam e-mail, documentos e às vezes folhas de cálculo no trabalho, num computador ou num telefone. Muitos já viram ferramentas de IA mas não as usaram para tarefas de trabalho, e podem não conhecer a política de IA do seu empregador.",
    gap: "Os empregadores esperam cada vez mais que o pessoal use ferramentas de IA aprovadas para poupar tempo, e erros ou fugas de informações confidenciais podem custar um emprego. Os alunos precisam de usar as ferramentas que o local de trabalho permite para escrever, resumir e trabalhar com folhas de cálculo, e verificar cada resultado antes de o partilhar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Aparelhos: um computador é melhor para documentos e folhas de cálculo; as ferramentas dependem do que o empregador permite",
      "Política e privacidade: a política de IA do empregador vem primeiro; nenhum dado pessoal de clientes ou de funcionários nas ferramentas de IA; quem procura emprego usa ferramentas gratuitas com dados inventados",
      "As funções de IA dentro do Microsoft 365 e do Google Workspace dependem do plano e das definições do empregador",
      "Tempo: lições de cerca de 5 minutos, que cabem num dia de trabalho"
    ],
    prerequisites: "Nenhum. O curso \"A IA e o Novo Mundo do Trabalho\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de usar IA no trabalho", action: "encontrar a política de IA do seu local de trabalho e escrever as suas três regras principais, ou três regras seguras por defeito se não houver nenhuma", standard: "sem que nenhum dado pessoal de clientes ou de funcionários entre nas ferramentas de IA" },
    { id: "O2", condition: "Com notas soltas para uma mensagem de trabalho", action: "escrever um e-mail de trabalho claro com um assistente de conversa, usando um pedido com objetivo, leitor, pontos principais e tom", standard: "com todos os dados verificados e o e-mail a soar como você" },
    { id: "O3", condition: "Nas aplicações de escritório que usa", action: "encontrar e usar o ajudante de IA que vem dentro delas, ou um assistente de conversa aprovado se a sua conta não o tiver", standard: "usando só texto não confidencial em qualquer ferramenta que o seu local de trabalho não aprovou" },
    { id: "O4", condition: "Com um documento longo ou as notas de uma reunião", action: "resumi-lo em cinco pontos principais e três tarefas a fazer, cada uma com um responsável", standard: "verificado com o original" },
    { id: "O5", condition: "Com uma pequena folha de cálculo", action: "usar a IA para escrever e explicar uma fórmula e depois testá-la", standard: "com uma resposta que você calculou à mão" },
    { id: "O6", condition: "Antes de partilhar qualquer resultado da IA", action: "verificar os factos, a adequação, a segurança e a fonte", standard: "e assumir a responsabilidade pela versão final" }
  ],
  chapters: [
    {
      name: "Capítulo 1: As regras e as ferramentas básicas",
      lessons: [
        {
          objectives: ["O1"],
          title: "A política de IA do seu empregador vem primeiro",
          minutes: 5,
          goal: "Encontrar e seguir as regras do seu local de trabalho para ferramentas de IA.",
          text: [
            "Muitos empregadores têm regras sobre ferramentas de IA: que ferramentas estão aprovadas, que informações podem entrar nelas e quando tem de dizer que usou IA. Quebrar estas regras pode trazer-lhe problemas, mesmo que tivesse boa intenção.",
            "Procure no manual do funcionário, na intranet ou nas páginas da informática, ou pergunte ao seu chefe ou à equipa de informática: \"Que ferramentas de IA podemos usar, e que informações posso pôr nelas?\" Alguns empregadores dão uma versão empresarial de uma ferramenta, como o Microsoft Copilot com uma conta de trabalho, que protege mais os dados do que uma conta pessoal gratuita.",
            "Se não houver política, siga regras seguras por defeito: nenhuma informação de clientes ou de doentes, nenhum dado pessoal de funcionários, nenhuma palavra-passe, nenhum plano confidencial nem números financeiros em contas pessoais de IA. Verifique cada dado antes de partilhar."
          ],
          steps: ["Procure \"IA\" no manual ou na intranet.", "Pergunte ao seu chefe ou à informática que ferramentas estão aprovadas.", "Pergunte que informações são permitidas.", "Se não houver política, use as regras seguras por defeito."],
          words: [["Política de IA", "as regras de um empregador para usar ferramentas de IA no trabalho."], ["Ferramenta aprovada", "uma ferramenta que o seu empregador permite usar no trabalho."], ["Confidencial", "informação que é só para as pessoas dentro da empresa."]],
          slides: [
            { title: "As regras vêm primeiro", bullets: ["Que ferramentas estão aprovadas", "Que informações podem entrar", "Quando dizer que usou IA"] },
            { title: "Onde as encontrar", bullets: ["Manual do funcionário ou intranet", "Pergunte ao seu chefe ou à informática", "As contas de trabalho podem proteger mais"] },
            { title: "Regras seguras por defeito", bullets: ["Nenhum dado de clientes, doentes ou funcionários", "Nenhuma palavra-passe nem plano confidencial", "Verifique cada dado antes de partilhar"] }
          ],
          tryIt: "Encontre a política de IA do seu local de trabalho, ou pergunte por ela. Escreva as três regras mais importantes. Se está à procura de emprego, escreva as três regras seguras por defeito que vai seguir.",
          youCanNow: "encontrar e seguir as regras para ferramentas de IA no seu local de trabalho.",
          quickCheck: [
            { objective: "O1", q: "Onde costuma encontrar a política de IA do seu local de trabalho?", options: ["Numa página de uma rede social", "No manual ou na intranet, ou perguntando ao seu chefe ou à informática", "Nos anúncios da ferramenta de IA", "Em lado nenhum; as políticas não existem"], answer: 1, why: "As políticas costumam estar no manual ou na intranet, e o seu chefe ou a informática podem explicá-las." },
            { objective: "O1", q: "O seu local de trabalho não tem política de IA e quer ajuda para responder à queixa de um cliente. O que faz?", options: ["Cola o nome, a morada e o histórico de compras do cliente", "Usa a IA com os dados que quiser", "Nunca mais escreve respostas", "Deixa de fora os dados pessoais do cliente e usa uma regra segura por defeito"], answer: 3, why: "Sem política, a regra segura é deixar de fora os dados pessoais de clientes e de funcionários." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Um assistente de conversa para escrever no dia a dia",
          minutes: 5,
          goal: "Transformar notas soltas numa mensagem de trabalho clara com um assistente de conversa.",
          text: [
            "Assistentes de conversa como o ChatGPT, o Microsoft Copilot e o Google Gemini transformam notas soltas num texto claro. Use o que o seu local de trabalho permite.",
            "Um bom pedido de trabalho diz o objetivo, o leitor, os pontos principais e o tom: \"Escreva um e-mail curto para a minha equipa. Objetivo: a zona de carga fecha na quinta-feira para reparações. Usem a doca B. As entregas chegam das 7 às 11 da manhã. Tom: claro e simpático. Menos de 100 palavras.\"",
            "Depois peça mudanças (\"mais curto\", \"mais formal\", \"acrescente uma lista\"), verifique cada dado e faça-o soar como você antes de enviar."
          ],
          steps: ["Escreva as suas notas soltas.", "Faça um pedido com objetivo, leitor, pontos principais e tom.", "Peça uma mudança de cada vez.", "Verifique nomes, datas, horas e números.", "Edite para soar como você e depois envie."],
          words: [["Pedido (prompt)", "o que você escreve para pedir alguma coisa a uma ferramenta de IA."], ["Tom", "como um texto soa: simpático, formal, firme."]],
          slides: [
            { title: "Entram notas, sai uma mensagem clara", bullets: ["ChatGPT, Copilot ou Gemini", "Use a ferramenta que o seu trabalho permite"] },
            { title: "Um bom pedido de trabalho", bullets: ["Objetivo e leitor", "Pontos principais", "Tom e tamanho"] },
            { title: "Antes de enviar", bullets: ["Peça mudanças uma de cada vez", "Verifique nomes, datas, horas, números", "Faça-o soar como você"] }
          ],
          tryIt: "Escreva notas soltas para uma mensagem de trabalho real ou de exemplo. Use um assistente de conversa para as transformar num e-mail claro, peça uma mudança e verifique cada dado.",
          youCanNow: "transformar notas soltas numa mensagem de trabalho clara com um assistente de conversa.",
          quickCheck: [
            { objective: "O2", q: "O que define \"para o meu chefe, tom simpático\" num pedido?", options: ["O leitor e o tom", "O tamanho", "O prazo", "O tipo de ficheiro"], answer: 0, why: "Dizer quem é o leitor e qual é o tom ajuda a IA a escrever o tipo certo de mensagem." },
            { objective: "O2", q: "O rascunho da IA diz que a reunião é na quinta-feira, mas as suas notas dizem quarta-feira. O que faz?", options: ["Envia; a IA provavelmente tem razão", "Apaga as suas notas", "Corrige o dia antes de enviar", "Põe os dois dias"], answer: 2, why: "Verifica cada dado com as suas notas antes de enviar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "A IA dentro do Microsoft 365 e do Google Workspace",
          minutes: 5,
          goal: "Encontrar e usar o ajudante de IA nas aplicações de escritório que usa, se a sua conta o tiver.",
          text: [
            "A Microsoft põe o Copilot em aplicações como o Word, o Outlook, o Excel, o PowerPoint e o Teams, e a Google põe o Gemini no Gmail, no Docs, no Sheets e no Meet. Ter ou não estas funções depende do plano e das definições do seu empregador.",
            "Onde as tem, a IA pode trabalhar com o que já está aberto: \"Resuma este documento\", \"Escreva um rascunho de resposta a este e-mail\", \"Sugira uma fórmula para esta coluna\". Procure o ícone ou o painel de IA na aplicação, ou pergunte à informática como o ativar.",
            "Se não o tiver, pode na mesma copiar texto não confidencial para um assistente de conversa aprovado e colar o resultado de volta. Seja como for, a versão final é sua e é você que a verifica."
          ],
          steps: ["Abra o Word, o Outlook, o Docs ou o Gmail com a sua conta de trabalho.", "Procure o ícone ou o painel de IA, ou pergunte à informática.", "Peça-lhe para resumir ou escrever um rascunho a partir do ficheiro aberto.", "Se não estiver disponível, use um assistente de conversa aprovado com texto não confidencial.", "Verifique e edite o resultado."],
          words: [["Microsoft 365", "o conjunto de aplicações de trabalho da Microsoft: Word, Excel, Outlook, Teams e outras."], ["Google Workspace", "o conjunto de aplicações de trabalho da Google: Gmail, Docs, Sheets, Meet e outras."]],
          slides: [
            { title: "IA dentro das aplicações de escritório", bullets: ["Microsoft: Copilot no Word, Outlook, Excel, Teams", "Google: Gemini no Gmail, Docs, Sheets, Meet", "Depende do plano do seu empregador"] },
            { title: "Trabalha com o que está aberto", bullets: ["\"Resuma este documento\"", "\"Escreva um rascunho de resposta a este e-mail\"", "Procure o ícone de IA ou pergunte à informática"] },
            { title: "Não tem IA na aplicação?", bullets: ["Use um assistente de conversa aprovado", "Só texto não confidencial", "Você verifica a versão final"] }
          ],
          tryIt: "Abra um documento ou e-mail de trabalho (ou um de exemplo). Use o ajudante de IA da aplicação se o tiver, ou um assistente de conversa aprovado se não, para escrever um rascunho de resposta ou um resumo. Verifique-o.",
          youCanNow: "usar o ajudante de IA das suas aplicações de escritório, ou uma alternativa segura, para escrever rascunhos e resumir.",
          quickCheck: [
            { objective: "O3", q: "O que é o Copilot no Word ou no Outlook?", options: ["Um extra gratuito que todos têm", "Uma fórmula de folha de cálculo", "Um vírus", "Um ajudante de IA dentro do Microsoft 365, em alguns planos"], answer: 3, why: "O Copilot vem dentro das aplicações do Microsoft 365, conforme o plano e as definições do empregador." },
            { objective: "O3", q: "Não vê nenhum ícone de IA na sua aplicação de escritório. O que faz?", options: ["Instala qualquer extensão de IA que encontrar", "Pergunta à informática, ou usa um assistente de conversa aprovado com texto não confidencial", "Cola ficheiros confidenciais numa conta pessoal de IA", "Desiste da IA"], answer: 1, why: "A informática pode dizer o que está disponível, e um assistente aprovado funciona com texto não confidencial." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: As regras e as ferramentas básicas",
        questions: [
          { objective: "O1", q: "Antes de usar IA no trabalho, deve primeiro:", options: ["Colar dados de clientes", "Conhecer a política de IA do seu empregador", "Partilhar a sua palavra-passe", "Usar qualquer aplicação que encontrar"], answer: 1, why: "As políticas dizem o que é permitido." },
          { objective: "O1", q: "Não há política. Que regra segura por defeito deve seguir?", options: ["Não verificar os dados", "Colar qualquer coisa", "Partilhar palavras-passe", "Nenhum dado pessoal de clientes ou de funcionários nas ferramentas de IA"], answer: 3, why: "Os dados privados ficam de fora." },
          { objective: "O2", q: "Um bom pedido de trabalho inclui:", options: ["Objetivo, leitor, pontos principais e tom", "Só uma palavra", "A sua palavra-passe", "A morada de um cliente"], answer: 0, why: "Essas partes dão um rascunho útil." },
          { objective: "O3", q: "O Copilot dentro do Word ou do Outlook está disponível:", options: ["Nunca", "Para todos, automaticamente", "Conforme o plano e as definições do seu empregador", "Só nos telefones"], answer: 2, why: "O acesso depende das licenças e das definições." },
          { objective: "O6", q: "De quem é a versão final de um trabalho escrito com a IA?", options: ["Da informática", "Da IA", "Sua", "De ninguém"], answer: 2, why: "Você é responsável pelo que envia." }
        ]
      }
    },
    {
      name: "Capítulo 2: Resumos, folhas de cálculo e verificação",
      lessons: [
        {
          objectives: ["O4"],
          title: "Resumir documentos e reuniões",
          minutes: 5,
          goal: "Transformar um documento longo ou as notas de uma reunião em pontos principais e tarefas a fazer.",
          text: [
            "Um resumo poupa tempo a todos. Peça uma forma concreta: \"Resuma este regulamento em cinco tópicos para um funcionário novo e depois faça uma lista de três tarefas a fazer.\" Ou, para notas de uma reunião: \"Faça uma lista das decisões, das tarefas a fazer com responsáveis e prazos, e das perguntas em aberto.\"",
            "Algumas ferramentas de reuniões conseguem transcrever e resumir reuniões quando o empregador ativa essa função. Todos na reunião devem saber que está a ser gravada ou transcrita; siga as regras do seu local de trabalho.",
            "Os resumos podem deixar de fora algo importante ou errar num pormenor. Verifique os dados principais com o original, sobretudo números, datas, nomes e quem aceitou fazer o quê."
          ],
          steps: ["Cole ou abra o documento (se for permitido).", "Peça tópicos, decisões e tarefas a fazer com responsáveis e datas.", "Compare os dados principais com o original.", "Corrija o que faltar ou estiver errado antes de partilhar."],
          words: [["Resumo", "uma versão curta que mantém os pontos principais."], ["Tarefa a fazer", "uma tarefa que alguém aceitou fazer, de preferência com um responsável e um prazo."], ["Transcrever", "passar a fala para texto escrito."]],
          slides: [
            { title: "Peça uma forma", bullets: ["Cinco tópicos para um funcionário novo", "Decisões, tarefas a fazer, perguntas em aberto", "Responsáveis e prazos"] },
            { title: "Ferramentas de reuniões", bullets: ["Algumas transcrevem e resumem reuniões", "Todos devem saber que está a gravar", "Siga as regras do seu local de trabalho"] },
            { title: "Verifique com o original", bullets: ["Números, datas e nomes", "Quem aceitou fazer o quê", "Algo importante que ficou de fora"] }
          ],
          tryIt: "Pegue num documento de trabalho longo ou nas notas de uma reunião (ou num regulamento público, se está à procura de emprego). Peça à IA cinco tópicos e três tarefas a fazer com responsáveis e depois verifique-os com o original.",
          youCanNow: "resumir documentos e reuniões em pontos claros e tarefas a fazer, e verificá-los.",
          quickCheck: [
            { objective: "O4", q: "O que é uma tarefa a fazer?", options: ["Um resumo da reunião inteira", "Uma pergunta a que ninguém respondeu", "Uma tarefa com um responsável e um prazo", "A hora de início da reunião"], answer: 2, why: "As tarefas a fazer dizem quem faz o quê e até quando." },
            { objective: "O4", q: "O resumo da IA deixa de fora um prazo que está no documento original. O que faz?", options: ["Acrescenta o prazo depois de comparar com o original", "Partilha o resumo como está", "Apaga o original", "Pede um resumo mais longo e não o verifica"], answer: 0, why: "Os resumos podem deixar de fora pormenores, por isso compara com o original e corrige." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ter ajuda da IA com folhas de cálculo",
          minutes: 5,
          goal: "Usar a IA para escrever e explicar uma fórmula de folha de cálculo e depois testá-la.",
          text: [
            "Muitos trabalhadores perdem tempo com folhas de cálculo. A IA é um bom explicador: \"No Excel, como conto quantas linhas da coluna B dizem 'Late' (atrasado)?\" Pode responder =COUNTIF(B:B,\"Late\") e explicar cada parte.",
            "Descreva as suas colunas em vez de colar dados confidenciais: \"A coluna A é a data, a B é o estado, a C são as horas.\" Se o seu empregador permite a IA dentro do Excel ou do Sheets, pode perguntar-lhe sobre o ficheiro aberto.",
            "Teste sempre uma fórmula em algumas linhas em que já sabe a resposta. As fórmulas da IA podem estar quase certas mas erradas, por exemplo a contar a linha do cabeçalho ou a usar o intervalo errado."
          ],
          steps: ["Descreva as suas colunas e o que quer saber.", "Peça à IA uma fórmula e uma explicação.", "Cole a fórmula na sua folha.", "Teste-a em linhas em que sabe a resposta.", "Peça à IA para a corrigir se estiver errada."],
          words: [["Fórmula", "uma instrução numa célula da folha de cálculo que calcula alguma coisa."], ["COUNTIF", "uma fórmula que conta as células que cumprem uma condição (no Excel em português pode chamar-se CONTAR.SE)."], ["Intervalo", "um grupo de células, como B2:B50."]],
          slides: [
            { title: "A IA como explicador de folhas de cálculo", bullets: ["\"Como conto as linhas que dizem Late?\"", "=COUNTIF(B:B,\"Late\")", "Peça-lhe para explicar cada parte"] },
            { title: "Descreva, não cole", bullets: ["\"A coluna A é a data, a B é o estado\"", "IA dentro da aplicação só se for permitida"] },
            { title: "Teste-a", bullets: ["Verifique linhas em que sabe a resposta", "Atenção ao cabeçalho e a intervalos errados"] }
          ],
          tryIt: "Faça uma pequena folha com 10 linhas de dados de exemplo. Peça à IA uma fórmula (contar, somar ou fazer a média), cole-a e teste-a com uma resposta que calculou à mão.",
          youCanNow: "obter, compreender e testar fórmulas de folhas de cálculo com a ajuda da IA.",
          quickCheck: [
            { objective: "O5", q: "O que é um intervalo numa folha de cálculo?", options: ["Um gráfico", "Um grupo de células, como B2:B50", "O nome de um ficheiro", "Um erro de fórmula"], answer: 1, why: "Um intervalo é um grupo de células com que uma fórmula trabalha." },
            { objective: "O5", q: "A fórmula COUNTIF da IA dá 11, mas você conta à mão 10 linhas \"Late\". O que faz?", options: ["Usa 11 na mesma", "Apaga os dados", "Pede outra IA", "Verifica o intervalo, por exemplo se inclui a linha do cabeçalho, e corrige"], answer: 3, why: "Um erro comum é o intervalo errado ou contar o cabeçalho, por isso testa e corrige." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Verificar o trabalho da IA antes de o partilhar",
          minutes: 5,
          goal: "Usar uma lista curta para rever qualquer resultado da IA antes de o dar a outras pessoas.",
          text: [
            "No trabalho, o seu nome está no que partilha. Use sempre uma verificação de quatro pontos: Factos (números, nomes, datas e regras iguais à fonte), Adequação (tom e tamanho certos para o leitor), Segurança (nenhum dado confidencial ou pessoal que não deva estar lá) e Fonte (se diz uma regra ou uma estatística, você sabe de onde veio).",
            "A IA pode inventar pormenores que parecem certos; a isto chama-se alucinações. Também pode copiar preconceitos, por exemplo numa descrição de um posto de trabalho. Leia o texto como se fosse a pessoa que o vai receber.",
            "Se o seu local de trabalho pede que diga quando usou IA, diga. Ser aberto sobre a forma como trabalha cria confiança."
          ],
          steps: ["Factos: verifique com a fonte.", "Adequação: tom e tamanho certos para o leitor.", "Segurança: nenhum dado que não deva estar lá.", "Fonte: saiba de onde veio cada regra ou número.", "Diga que usou IA se o seu local de trabalho o exigir."],
          words: [["Alucinação", "quando a IA escreve algo que parece verdade mas é inventado."], ["Preconceito", "uma inclinação injusta a favor ou contra um grupo de pessoas."]],
          slides: [
            { title: "O seu nome está nele", bullets: ["Verifique cada resultado da IA antes de partilhar"] },
            { title: "A verificação de quatro pontos", bullets: ["Factos", "Adequação", "Segurança", "Fonte"] },
            { title: "Atenção a", bullets: ["Pormenores inventados (alucinações)", "Preconceitos, por exemplo em descrições de postos", "Diga que usou IA se for exigido"] }
          ],
          tryIt: "Tarefa final: faça o seu conjunto de tarefas de IA de trabalho: três regras da política, um e-mail claro a partir de notas, um resumo de cinco tópicos com tarefas a fazer, uma fórmula testada e uma nota do que verificou em cada uma, usando Factos, Adequação, Segurança e Fonte.",
          youCanNow: "usar ferramentas de IA no trabalho para fazer o trabalho mais depressa, com segurança e com a sua própria verificação cuidadosa.",
          quickCheck: [
            { objective: "O6", q: "O que pergunta a verificação de Segurança antes de partilhar um trabalho da IA?", options: ["Se tem informações confidenciais ou pessoais que não devem ser partilhadas", "Se é longo o suficiente", "Se usa palavras difíceis", "Se a IA gostou"], answer: 0, why: "A verificação de Segurança garante que nada confidencial ou pessoal vai para onde não deve." },
            { objective: "O6", q: "A IA escreveu um resumo de um regulamento que cita uma regra. O que faz antes de partilhar?", options: ["Partilha depressa", "Tira o seu nome", "Verifica de onde veio a regra (Fonte) e se está certa", "Acrescenta mais regras"], answer: 2, why: "A verificação da Fonte confirma de onde veio cada regra ou número." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Resumos, folhas de cálculo e verificação",
        questions: [
          { objective: "O4", q: "Um bom resumo de uma reunião tem:", options: ["Decisões, tarefas a fazer com responsáveis e datas, e perguntas em aberto", "Só o título da reunião", "As palavras-passe de todos", "Nada"], answer: 0, why: "Essa forma facilita o seguimento." },
          { objective: "O4", q: "Antes de uma reunião ser transcrita, as pessoas devem:", options: ["Desligar as câmaras", "Não ser avisadas", "Sair", "Saber que está a ser gravada ou transcrita"], answer: 3, why: "Siga as regras do local de trabalho e seja aberto." },
          { objective: "O5", q: "O que faz =COUNTIF(B:B,\"Late\")?", options: ["Soma a coluna B", "Conta as células da coluna B que dizem Late", "Apaga as linhas Late", "Ordena a folha"], answer: 1, why: "O COUNTIF conta as células que correspondem." },
          { objective: "O5", q: "Como sabe que uma fórmula da IA funciona?", options: ["Testa-a em linhas em que sabe a resposta", "Parece certa", "A IA diz que sim", "Ninguém se queixa"], answer: 0, why: "O teste prova-o." },
          { objective: "O6", q: "Qual NÃO é uma das quatro verificações?", options: ["Adequação", "Factos", "Fama", "Segurança"], answer: 2, why: "As verificações são Factos, Adequação, Segurança e Fonte." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Ferramentas de IA Essenciais para o Trabalho",
    questions: [
      { objective: "O1", q: "Onde costuma encontrar a política de IA do seu local de trabalho?", options: ["Numa publicação numa rede social", "No manual, na intranet, ou perguntando ao seu chefe ou à informática", "Numa conversa com a IA", "Em lado nenhum"], answer: 1, why: "As políticas estão nos lugares oficiais da empresa." },
      { objective: "O1", q: "A versão de conta de trabalho de uma ferramenta de IA pode:", options: ["Não existir", "Ser sempre menos segura", "Partilhar os seus dados com o público", "Proteger mais os dados do que uma conta pessoal gratuita"], answer: 3, why: "As versões empresariais podem proteger mais; siga as orientações do seu empregador." },
      { objective: "O1", q: "O que nunca deve entrar numa conta pessoal de IA?", options: ["Uma pergunta geral", "\"Faça isto mais curto\"", "Uma notícia pública", "Informações pessoais de clientes"], answer: 3, why: "Os dados dos clientes são privados." },
      { objective: "O2", q: "O ChatGPT, o Copilot e o Gemini são:", options: ["Folhas de cálculo", "Assistentes de conversa", "Impressoras", "Telefones"], answer: 1, why: "São assistentes de conversa de IA." },
      { objective: "O2", q: "\"Menos de 100 palavras\" num pedido define:", options: ["O objetivo", "O leitor", "O tamanho", "A palavra-passe"], answer: 2, why: "Controla o tamanho." },
      { objective: "O2", q: "Depois de a IA escrever o rascunho de um e-mail, você:", options: ["Verifica os dados e fá-lo soar como você", "Envia sem ler", "Acrescenta mais dados que ela inventou", "Apaga-o"], answer: 0, why: "A versão final é sua." },
      { objective: "O3", q: "O Copilot aparece:", options: ["Em cadernos de papel", "Só no Gmail", "Nas aplicações do Microsoft 365, em alguns planos", "Em lado nenhum"], answer: 2, why: "A Microsoft põe o Copilot nas suas aplicações em alguns planos." },
      { objective: "O3", q: "O Gemini aparece:", options: ["Nas aplicações do Google Workspace, em alguns planos", "Só no Excel", "Em máquinas de fax", "Em lado nenhum"], answer: 0, why: "A Google põe o Gemini nas suas aplicações em alguns planos." },
      { objective: "O3", q: "Não vê nenhum ícone de IA na sua aplicação de escritório. Pode:", options: ["Instalar extras ao acaso", "Perguntar à informática, ou usar um assistente de conversa aprovado com texto não confidencial", "Desistir", "Usar a conta de um colega"], answer: 1, why: "Fique dentro das ferramentas aprovadas." },
      { objective: "O4", q: "Uma tarefa a fazer deve ter:", options: ["Nada", "Um segredo", "Uma palavra-passe", "Um responsável e um prazo"], answer: 3, why: "Responsáveis e prazos fazem as coisas acontecer." },
      { objective: "O4", q: "Porque comparar um resumo com o original?", options: ["Os resumos podem deixar de fora ou mudar pormenores", "Para perder tempo", "Não é preciso", "Por diversão"], answer: 0, why: "Verificar apanha os erros." },
      { objective: "O4", q: "Transcrever quer dizer:", options: ["Enviar um e-mail", "Apagar um ficheiro", "Traduzir uma língua", "Passar a fala para texto escrito"], answer: 3, why: "A transcrição põe a fala por escrito." },
      { objective: "O5", q: "Em vez de colar dados confidenciais de uma folha de cálculo na IA, pode:", options: ["Enviá-los por e-mail a amigos", "Colá-los na mesma", "Descrever as colunas", "Publicá-los na internet"], answer: 2, why: "Descrever mantém os dados seguros." },
      { objective: "O5", q: "Um intervalo numa folha de cálculo é:", options: ["Um fogão", "Um grupo de células, como B2:B50", "Uma palavra-passe", "Um gráfico"], answer: 1, why: "Os intervalos são grupos de células." },
      { objective: "O5", q: "Um erro comum nas fórmulas da IA é:", options: ["Nenhum", "Ser curta demais", "Usar cores", "Contar a linha do cabeçalho ou usar o intervalo errado"], answer: 3, why: "Teste para apanhar estes erros." },
      { objective: "O6", q: "Uma alucinação da IA é:", options: ["Uma reunião", "Uma falha no ecrã", "Um pormenor inventado que parece verdade", "Um vírus"], answer: 2, why: "A IA pode inventar dados." },
      { objective: "O6", q: "A verificação de \"Adequação\" pergunta se:", options: ["O tom e o tamanho servem para o leitor", "O ficheiro cabe numa pen USB", "A cadeira serve", "Cabe numa publicação curta de rede social"], answer: 0, why: "A adequação tem a ver com o leitor." },
      { objective: "O6", q: "A verificação da \"Fonte\" pergunta:", options: ["Que teclado usou", "De onde veio cada regra ou número", "Quem escreveu mais depressa", "Nada"], answer: 1, why: "As regras e os números precisam de uma fonte." },
      { objective: "O6", q: "Se o seu local de trabalho exige que diga que usou IA, deve:", options: ["Escondê-lo", "Dizê-lo", "Culpar um colega", "Ignorar a regra"], answer: 1, why: "Ser aberto cria confiança e cumpre a política." },
      { objective: "O6", q: "De quem é o nome que está no trabalho feito com ajuda da IA que você partilha?", options: ["Seu", "Da IA", "Da informática", "De ninguém"], answer: 0, why: "Você é responsável por ele." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 8, 9, 10, 14, 15, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Regras da política", objective: "O1", notYet: "Nenhuma regra escrita, ou regras que permitem dados pessoais nas ferramentas de IA.", meets: "Três regras principais da política de IA do local de trabalho, ou três regras seguras por defeito.", exceeds: "Diz onde está a política e a quem perguntar sobre ela." },
      { name: "E-mail claro", objective: "O2", notYet: "O e-mail não é claro, ou um dado está errado.", meets: "Um e-mail claro a partir de notas soltas, com os dados verificados com as notas.", exceeds: "O aluno pediu uma mudança e fez o e-mail soar como ele próprio." },
      { name: "Resumo e tarefas a fazer", objective: "O4", notYet: "Menos de cinco pontos, ou tarefas a fazer sem responsáveis.", meets: "Cinco tópicos e três tarefas a fazer com responsáveis, verificados com o original.", exceeds: "As tarefas a fazer também têm prazos, e um pormenor que faltava foi encontrado e acrescentado." },
      { name: "Fórmula testada", objective: "O5", notYet: "A fórmula não foi testada ou dá uma resposta errada.", meets: "Uma fórmula que funciona, testada com uma resposta calculada à mão.", exceeds: "O aluno sabe explicar o que faz cada parte da fórmula." },
      { name: "Verificações antes de partilhar", objective: "O6", notYet: "Nenhuma nota do que foi verificado.", meets: "Cada item tem uma nota das verificações de Factos, Adequação, Segurança e Fonte.", exceeds: "As notas dizem uma correção concreta feita depois de uma verificação." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem usar uma ferramenta de IA aprovada numa tarefa de trabalho todas as semanas, 30 dias depois (inquérito de seguimento)",
      "Alunos ou chefes que dizem poupar tempo em e-mails, resumos ou folhas de cálculo",
      "Alunos que começam outro curso de trabalho da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet",
      "As ferramentas de IA que o local de trabalho permite, ou um assistente de conversa gratuito (ChatGPT, Microsoft Copilot ou Google Gemini) com dados inventados para quem procura emprego",
      "Uma folha de cálculo gratuita: Google Sheets ou Microsoft Excel online",
      "Um documento longo ou notas de reunião de exemplo, sem informações confidenciais",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Num grupo de um local de trabalho, leve a política de IA do empregador para a primeira sessão e vejam-na juntos.",
      "Dê notas, documentos e dados de folha de cálculo de exemplo, para que ninguém use informações confidenciais.",
      "As ferramentas dentro das aplicações variam conforme o plano; tenha um assistente de conversa gratuito pronto para os alunos cujas contas não as têm.",
      "Peça aos alunos para trocarem os resultados e fazerem as verificações de Factos, Adequação, Segurança e Fonte no trabalho uns dos outros.",
      "Avalie o conjunto de tarefas com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
