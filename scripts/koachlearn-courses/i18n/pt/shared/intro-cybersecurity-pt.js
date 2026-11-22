"use strict";

// Koach Learn course (Portuguese translation of shared/intro-cybersecurity.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const CISA_PASSWORDS = { name: "CISA Secure Our World: use palavras-passe fortes", url: "https://www.cisa.gov/secure-our-world/use-strong-passwords" };
const CISA_SOW = { name: "CISA: Secure Our World (Proteger o Nosso Mundo)", url: "https://www.cisa.gov/secure-our-world" };
const FTC_PHISHING = { name: "FTC: como reconhecer e evitar burlas de phishing", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" };

module.exports = {
  id: "intro-cybersecurity-pt",
  lang: "pt",
  translationOf: "intro-cybersecurity",
  category: "Youth",
  name: "Introdução à Cibersegurança",
  skills: "Explicar a tríade CIA, Reconhecer ataques comuns, Detetar e denunciar phishing, Proteger contas com palavras-passe fortes e MFA, Manter os aparelhos atualizados, Responder a um incidente",
  outcome: "fazer uma verificação de segurança às suas próprias contas e aparelhos: criar uma palavra-passe forte e única com um gestor de palavras-passe, ativar a autenticação multifator, atualizar o seu software, reconhecer uma mensagem de phishing e denunciá-la, e seguir um plano simples se uma conta for pirateada.",
  about: [
    "Cibersegurança quer dizer proteger computadores, telefones, contas e informações contra ataques. É importante para a conta escolar de um estudante, para o acesso ao banco de uma família e para a lista de clientes de um pequeno negócio, e é também uma área de trabalho que está a crescer.",
    "No Capítulo 1 você aprende os objetivos básicos da segurança, os ataques mais comuns e como reconhecer o phishing. No Capítulo 2 você protege as suas próprias contas e aparelhos e aprende o que fazer quando alguma coisa corre mal.",
    "Os passos seguem os quatro passos principais que a CISA, a Agência de Cibersegurança e Segurança de Infraestruturas dos EUA, ensina a todos. Cada lição dura cerca de cinco minutos, com uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça uma verificação de segurança a uma conta importante (o email é a melhor): dê-lhe uma palavra-passe forte e única guardada num gestor de palavras-passe, ative a autenticação multifator, confirme que o seu telefone ou computador está atualizado e escreva um plano de cinco linhas sobre o que faria se essa conta fosse pirateada. Depois encontre uma mensagem suspeita no seu email ou nos seus SMS e escreva os sinais de phishing que ela mostra.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Jovens e adultos que usam todos os dias email, redes sociais, contas da escola ou do trabalho e telefones: estudantes, programas para jovens, pessoas à procura de emprego, novos trabalhadores de escritório, voluntários e famílias.",
    startingPoint: "Sabem entrar em contas, usar aplicações e enviar mensagens. Muitos repetem a mesma palavra-passe, não ativaram a autenticação multifator, saltam as atualizações e não sabem bem distinguir uma mensagem de phishing de uma verdadeira, nem o que fazer se uma conta for pirateada.",
    gap: "A maioria dos ataques contra pessoas comuns vai atrás de quem for mais fácil, através de palavras-passe repetidas, phishing e engenharia social. Alguns hábitos travam a maioria destes ataques, protegem as contas da escola, do trabalho e do dinheiro, e tornam as pessoas trabalhadores e familiares mais seguros.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; termos de segurança como MFA e phishing são explicados",
      "Aparelhos: o telefone ou computador do próprio aluno e uma conta importante, como o email",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Custo: só ferramentas gratuitas, como o gestor de palavras-passe que já vem no navegador ou no telefone",
      "Privacidade: os alunos nunca partilham uma palavra-passe ou um código MFA com ninguém, nem com o professor, e nunca os escrevem numa ferramenta de IA"
    ],
    prerequisites: "Nenhum. Os alunos precisam de uma conta em que consigam entrar, como o email."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma descrição curta de um ataque", action: "explicar os três objetivos da segurança (confidencialidade, integridade e disponibilidade) e identificar qual deles o ataque quebra", standard: "acertando pelo menos 4 de 5 exemplos" },
    { id: "O2", condition: "Com exemplos de malware, ransomware, roubo de conta e engenharia social", action: "dar o nome de cada ataque e descrever como ele costuma entrar", standard: "com o nome certo de cada ataque e uma forma comum de entrada para cada um" },
    { id: "O3", condition: "Com um email ou SMS verdadeiro ou de exemplo", action: "identificar os sinais de phishing que ele mostra e denunciá-lo da forma certa", standard: "escrevendo pelo menos dois sinais e escolhendo um lugar certo para o denunciar" },
    { id: "O4", condition: "Usando um gestor de palavras-passe gratuito", action: "criar uma palavra-passe forte e única para uma conta importante e guardá-la no gestor de palavras-passe", standard: "com uma palavra-passe de pelo menos 16 caracteres que não seja usada em nenhuma outra conta" },
    { id: "O5", condition: "Numa conta importante e no seu próprio aparelho", action: "ativar a autenticação multifator e confirmar que o aparelho e as aplicações estão atualizados", standard: "com a MFA a funcionar na conta e as atualizações automáticas ativadas" },
    { id: "O6", condition: "Com sinais de que uma conta foi pirateada ou um aparelho está infetado", action: "escrever e seguir um plano de recuperação passo a passo", standard: "com todos os passos principais numa ordem segura: mudar a palavra-passe, ativar a MFA, terminar as outras sessões, verificar os dados de recuperação, avisar os contactos e denunciar" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ameaças e como funcionam os ataques",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que a cibersegurança protege",
          minutes: 4,
          goal: "Explicar os três objetivos da segurança usando a tríade CIA.",
          text: [
            "As pessoas da segurança usam muitas vezes três palavras, chamadas tríade CIA (das iniciais em inglês). Confidencialidade: só as pessoas certas podem ver a informação, como as suas notas ou o seu processo médico. Integridade: a informação está certa e não foi mudada por alguém que não a devia mudar, como o saldo de uma conta bancária. Disponibilidade: a informação e os sistemas funcionam quando você precisa deles, como um site que continua a funcionar.",
            "Cada ataque prejudica pelo menos um dos três. Alguém que lê as suas mensagens quebra a confidencialidade. Alguém que muda o valor de um pagamento quebra a integridade. Um ransomware que bloqueia os computadores de um hospital quebra a disponibilidade.",
            "As pessoas que atacam chamam-se agentes de ameaça. Vão desde burlões à procura de dinheiro rápido até grupos criminosos organizados. A maioria dos ataques contra pessoas comuns não é pessoal; os atacantes vão atrás de quem for mais fácil."
          ],
          words: [["Cibersegurança", "proteger computadores, telefones, contas e informações contra ataques."], ["Tríade CIA", "confidencialidade, integridade e disponibilidade: os três objetivos da segurança."], ["Agente de ameaça", "uma pessoa ou grupo que ataca computadores ou contas."]],
          slides: [
            { title: "A tríade CIA", bullets: ["Confidencialidade: só as pessoas certas veem", "Integridade: a informação continua certa", "Disponibilidade: funciona quando precisa"] },
            { title: "Os ataques quebram um dos três", bullets: ["Ler as suas mensagens: confidencialidade", "Mudar um pagamento: integridade", "Bloquear computadores: disponibilidade"] },
            { title: "Quem ataca", bullets: ["Burlões e grupos criminosos", "Vão atrás de quem for mais fácil", "Bons hábitos tornam você um alvo mais difícil"] }
          ],
          tryIt: "Pense numa aplicação que usa, como o portal da escola, a aplicação do banco ou uma aplicação de horários do trabalho. Escreva um exemplo do que querem dizer confidencialidade, integridade e disponibilidade para essa aplicação.",
          youCanNow: "explicar a tríade CIA e dizer que objetivo um ataque quebra.",
          quickCheck: [
            { objective: "O1", q: "Na tríade CIA, o que quer dizer integridade?", options: ["O sistema é sempre rápido", "Só as pessoas certas podem ver a informação", "A informação é gratuita para todos", "A informação está certa e não foi mudada por alguém que não a devia mudar"], answer: 3, why: "Integridade quer dizer que a informação está certa e não foi mudada sem autorização." },
            { objective: "O1", q: "Alguém lê as mensagens privadas de um colega sem autorização. Que objetivo diria que foi quebrado?", options: ["Disponibilidade", "Confidencialidade", "Integridade", "Nenhum dos três"], answer: 1, why: "Confidencialidade quer dizer que só as pessoas certas podem ver a informação." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ataques comuns: malware, ransomware e roubo de conta",
          minutes: 5,
          goal: "Dar o nome dos ataques mais comuns e dizer como cada um costuma entrar.",
          text: [
            "Malware é software nocivo. Muitas vezes chega num anexo de email, numa aplicação falsa, num jogo pirata ou numa janela falsa de \"atualização\". Ransomware é um malware que bloqueia os seus ficheiros e exige um pagamento para os desbloquear.",
            "O roubo de conta acontece quando alguém entra na sua conta. As formas mais comuns são uma palavra-passe roubada ou adivinhada, uma palavra-passe repetida de outro site que sofreu uma fuga de dados, ou enganar você para partilhar um código de uso único.",
            "Engenharia social quer dizer enganar uma pessoa em vez de quebrar a tecnologia. Alguém que liga a fingir ser do apoio informático, um SMS falso de entrega ou uma mensagem de um \"amigo\" a pedir um código são todos engenharia social. Muitas vezes as pessoas são a forma mais fácil de entrar, e é por isso que os seus hábitos contam."
          ],
          words: [["Malware", "software nocivo que pode espiar, roubar ou estragar."], ["Ransomware", "malware que bloqueia ficheiros e exige um pagamento."], ["Fuga de dados", "quando as informações guardadas por uma empresa, como palavras-passe, são roubadas."], ["Engenharia social", "enganar uma pessoa para que ela dê acesso ou informações."]],
          slides: [
            { title: "Malware e ransomware", bullets: ["Software nocivo", "Chega em anexos, aplicações falsas, jogos piratas", "O ransomware bloqueia ficheiros e exige pagamento"] },
            { title: "Roubo de conta", bullets: ["Palavras-passe roubadas ou adivinhadas", "Palavras-passe repetidas de um site com fuga de dados", "Enganado para partilhar um código de uso único"] },
            { title: "Engenharia social", bullets: ["Enganar pessoas, não máquinas", "Chamadas falsas do apoio informático, SMS falsos de entrega", "Contas pirateadas de amigos a pedir códigos"] }
          ],
          tryIt: "Para cada ataque (malware, ransomware, roubo de conta, engenharia social), escreva uma forma real como ele podia chegar até você ou à sua família, e um hábito que o travaria.",
          youCanNow: "dar o nome dos ataques comuns e dizer como costumam entrar.",
          quickCheck: [
            { objective: "O2", q: "Qual destas é uma forma comum de o malware entrar num aparelho?", options: ["Um jogo pirata ou uma janela falsa de \"atualização\"", "Ativar as atualizações automáticas", "Usar um gestor de palavras-passe", "Reiniciar o telefone"], answer: 0, why: "O malware chega muitas vezes em anexos, aplicações falsas, jogos piratas e janelas falsas de atualização." },
            { objective: "O2", q: "Um \"amigo\" escreve-lhe a pedir o código que o seu telefone acabou de receber. O que faria?", options: ["Enviar o código porque é um amigo", "Enviar metade do código", "Não partilhar o código; isto é provavelmente engenharia social", "Publicar o código nas redes sociais para verificar"], answer: 2, why: "Enganar você para partilhar um código de uso único é uma forma comum de roubar contas." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Reconhecer e denunciar o phishing",
          minutes: 5,
          goal: "Reconhecer uma mensagem de phishing e denunciá-la da forma certa.",
          text: [
            "Phishing é um email, SMS ou mensagem falsa que tenta levar você a clicar num link, abrir um ficheiro ou partilhar informações. A FTC (Comissão Federal do Comércio dos EUA) aponta truques comuns: dizer que há atividade suspeita na sua conta, um problema com o seu pagamento, pedir para confirmar informações pessoais, uma fatura que você não reconhece, um link para pagar, um reembolso do governo ou um cupão para coisas grátis.",
            "Veja o endereço verdadeiro de quem envia, não só o nome. Num computador, passe o rato por cima dos links (ou, num telefone, carregue e mantenha o dedo) para ver para onde levam de verdade. Desconfie da pressa: \"aja já ou a sua conta será fechada.\"",
            "Se não conhece quem enviou, denuncie e apague. Se tem mesmo uma conta nessa empresa, contacte-a por um site ou número de telefone que já sabe que é verdadeiro, não o da mensagem. A FTC diz para reencaminhar os emails de phishing para reportphishing@apwg.org, reencaminhar os SMS de phishing para SPAM (7726) e denunciar em ReportFraud.ftc.gov. Na escola ou no trabalho, use o botão \"Denunciar phishing\" ou avise o apoio informático."
          ],
          steps: ["Veja o endereço verdadeiro de quem envia.", "Passe o rato por cima do link ou carregue nele sem largar para ver para onde leva.", "Procure pressa, ameaças ou prémios.", "Não clique, não responda e não abra anexos.", "Contacte a empresa por um número ou site que já conhece.", "Denuncie: emails para reportphishing@apwg.org, SMS para 7726 e ReportFraud.ftc.gov; na escola ou no trabalho avise o apoio informático."],
          words: [["Phishing", "uma mensagem falsa que tenta enganar você para clicar, abrir um ficheiro ou partilhar informações."], ["Smishing", "phishing por SMS."], ["Spoofing", "falsificar o nome, o número ou o endereço de quem envia para a mensagem parecer verdadeira."]],
          sources: [FTC_PHISHING, { name: "FTC: ReportFraud (denunciar fraudes)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Truques comuns de phishing (FTC)", bullets: ["\"Atividade suspeita\" ou \"problema no pagamento\"", "\"Confirme as suas informações\"", "Faturas desconhecidas, reembolsos, cupões grátis"] },
            { title: "Verifique antes de clicar", bullets: ["O endereço verdadeiro de quem envia, não só o nome", "Passe o rato ou carregue sem largar nos links", "Pressa e ameaças são sinais de alerta"] },
            { title: "Contacte você mesmo a empresa", bullets: ["Use um site ou número que já conhece", "Nunca o que vem na mensagem"] },
            { title: "Denuncie", bullets: ["Emails: reportphishing@apwg.org", "SMS: reencaminhe para 7726 (SPAM)", "ReportFraud.ftc.gov; no trabalho ou na escola, avise o apoio informático"] }
          ],
          tryIt: "Abra a sua pasta de spam ou de lixo (ou os seus SMS) e encontre uma mensagem suspeita. Sem clicar em nada, escreva todos os sinais de phishing que vê e depois denuncie-a ou apague-a.",
          youCanNow: "reconhecer uma mensagem de phishing, evitar as suas armadilhas e denunciá-la da forma certa.",
          quickCheck: [
            { objective: "O3", q: "Num telefone, como pode ver para onde um link leva de verdade antes de o abrir?", options: ["Tocar nele duas vezes depressa", "Carregar no link e manter o dedo", "Responder a quem enviou", "Desligar e voltar a ligar o telefone"], answer: 1, why: "Carregar e manter o dedo mostra o endereço verdadeiro sem o abrir." },
            { objective: "O3", q: "Um SMS diz que a sua entrega está parada e que tem de pagar uma pequena taxa por um link. Você não espera nenhuma encomenda. O que faria?", options: ["Pagar a taxa por precaução", "Responder a perguntar que encomenda é", "Clicar no link para ver o que diz", "Reencaminhá-lo para SPAM (7726), denunciá-lo e apagá-lo"], answer: 3, why: "A FTC diz para reencaminhar os SMS de phishing para SPAM (7726) e denunciá-los." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ameaças e como funcionam os ataques",
        questions: [
          { objective: "O1", q: "Um ransomware bloqueia os computadores de uma clínica e os funcionários não os conseguem usar. Que objetivo foi quebrado?", options: ["Confidencialidade", "Nenhum", "Integridade", "Disponibilidade"], answer: 3, why: "Disponibilidade quer dizer que os sistemas funcionam quando precisa deles." },
          { objective: "O1", q: "Alguém muda o valor num pedido de pagamento. Que objetivo foi quebrado?", options: ["Rapidez", "Disponibilidade", "Confidencialidade", "Integridade"], answer: 3, why: "Integridade quer dizer que a informação continua certa." },
          { objective: "O2", q: "Uma pessoa liga a dizer que é do apoio informático e que precisa do código que acabou de receber por SMS. Isto é:", options: ["Trabalho normal do apoio informático", "Uma atualização de software", "Engenharia social", "Uma cópia de segurança"], answer: 2, why: "Enganar uma pessoa para que dê um código é engenharia social." },
          { objective: "O2", q: "Usou a mesma palavra-passe num site de jogos que sofreu uma fuga de dados. Qual é o risco?", options: ["Nenhum", "O seu telefone avaria", "O seu ecrã fica escuro", "Os atacantes podem experimentar essa palavra-passe nas suas outras contas"], answer: 3, why: "Palavras-passe repetidas que vêm de fugas de dados levam ao roubo de contas." },
          { objective: "O3", q: "Um email diz que a sua conta bancária está bloqueada e dá um link. O passo mais seguro é:", options: ["Clicar no link depressa", "Responder com a sua palavra-passe", "Ir ao site verdadeiro do banco ou ligar para um número que conhece", "Reencaminhá-lo aos amigos"], answer: 2, why: "Contacte a empresa por um site ou número que já sabe que é verdadeiro." }
        ]
      }
    },
    {
      name: "Capítulo 2: Proteger contas e aparelhos",
      lessons: [
        {
          objectives: ["O4"],
          title: "Palavras-passe fortes e um gestor de palavras-passe",
          minutes: 5,
          goal: "Criar uma palavra-passe forte e única e guardá-la num gestor de palavras-passe.",
          text: [
            "A CISA diz que uma palavra-passe forte é longa (pelo menos 16 caracteres), aleatória e única (diferente para cada conta). Uma frase-passe de quatro a sete palavras sem relação entre si, como o exemplo da CISA \"HorsePurpleHatRun\", é longa e fácil de lembrar.",
            "Ninguém consegue lembrar-se de uma palavra-passe forte diferente para cada conta, por isso use um gestor de palavras-passe. Ele cria e guarda as palavras-passe por você; você só se lembra de uma palavra-passe principal forte. A CISA diz que alguns são gratuitos, incluindo os que já vêm nos navegadores de internet e nos telefones.",
            "Nunca partilhe palavras-passe, nunca as escreva numa ferramenta de IA e mude uma palavra-passe logo que uma empresa lhe disser que ela estava numa fuga de dados."
          ],
          steps: ["Abra um gestor de palavras-passe: o que vem no seu navegador ou telefone, ou uma aplicação de confiança.", "Escolha a sua conta mais importante, normalmente o email.", "Use o gestor para criar uma palavra-passe longa e aleatória, ou faça uma frase-passe de 4 a 7 palavras.", "Guarde-a no gestor.", "Mude a palavra-passe na conta e experimente entrar."],
          words: [["Gestor de palavras-passe", "uma aplicação que cria e guarda as suas palavras-passe com segurança."], ["Frase-passe", "uma palavra-passe feita de várias palavras sem relação entre si."], ["Palavra-passe única", "uma palavra-passe usada numa só conta."]],
          sources: [CISA_PASSWORDS],
          slides: [
            { title: "Palavras-passe fortes (CISA)", bullets: ["Longa: pelo menos 16 caracteres", "Aleatória", "Única: diferente para cada conta"] },
            { title: "Frases-passe", bullets: ["4 a 7 palavras sem relação entre si", "Exemplo: HorsePurpleHatRun"] },
            { title: "Use um gestor de palavras-passe", bullets: ["Cria e guarda as palavras-passe", "Você lembra-se de uma palavra-passe principal", "Alguns são gratuitos e já vêm nos navegadores e telefones"] }
          ],
          tryIt: "Abra o gestor de palavras-passe do seu telefone ou navegador. Use-o para criar e guardar uma nova palavra-passe forte para uma conta que é importante para você.",
          youCanNow: "criar uma palavra-passe forte e única e guardá-la num gestor de palavras-passe.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer \"única\" numa palavra-passe?", options: ["Tem o seu nome", "É curta e fácil de escrever", "É diferente para cada conta", "É igual ao PIN do seu telefone"], answer: 2, why: "Uma palavra-passe única é usada numa só conta, por isso uma fuga de dados não abre as outras." },
            { objective: "O4", q: "Uma empresa envia-lhe um email a dizer que a sua palavra-passe estava numa fuga de dados. O que faria?", options: ["Mudar essa palavra-passe logo", "Esperar para ver se acontece alguma coisa", "Usar a mesma palavra-passe numa conta nova", "Partilhar a palavra-passe com um amigo para a verificar"], answer: 0, why: "Mude a palavra-passe logo que uma empresa disser que ela estava numa fuga de dados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Autenticação multifator e atualizações",
          minutes: 5,
          goal: "Ativar a autenticação multifator e atualizar um aparelho.",
          text: [
            "A autenticação multifator (MFA) pede uma segunda prova depois da palavra-passe, como um código de uma aplicação de autenticação, um aviso no telefone, uma chave de segurança ou uma passkey. Mesmo que alguém roube a sua palavra-passe, não consegue entrar sem o segundo fator. Ative-a primeiro no email, no banco, na escola e nas redes sociais. A CISA diz que qualquer MFA é melhor do que nenhuma, e que o tipo mais forte é a MFA resistente ao phishing (FIDO, usada pelas passkeys e pelas chaves de segurança), que é mais difícil de enganar do que um código por SMS.",
            "Nunca partilhe um código MFA. Se receber um código ou um pedido de início de sessão que não pediu, alguém pode ter a sua palavra-passe: recuse-o e mude a palavra-passe.",
            "As atualizações corrigem falhas de segurança que os atacantes já conhecem. Ative as atualizações automáticas no telefone, no computador, no navegador e nas aplicações, e reinicie quando for pedido. A CISA põe a atualização do software entre os seus quatro passos principais, junto com evitar o phishing, palavras-passe fortes e a MFA."
          ],
          steps: ["Abra as definições de segurança da sua conta de email.", "Procure verificação em dois passos, autenticação de dois fatores ou multifator.", "Siga os passos; uma passkey, uma chave de segurança ou uma aplicação de autenticação é mais difícil de enganar do que um código por SMS, mas qualquer MFA é melhor do que nenhuma.", "Guarde os códigos de reserva num lugar seguro e fora da internet.", "Abra as definições do telefone ou do computador e ative as atualizações automáticas."],
          words: [["Autenticação multifator (MFA)", "uma segunda prova, depois da palavra-passe, de que é mesmo você."], ["Aplicação de autenticação", "uma aplicação que mostra códigos de início de sessão que mudam a cada poucos segundos."], ["Passkey", "uma forma de entrar que usa o seu aparelho e o seu rosto, impressão digital ou PIN em vez de uma palavra-passe."], ["Atualização / correção", "uma correção do fabricante que fecha falhas de segurança."]],
          sources: [CISA_SOW, { name: "CISA: mais do que uma palavra-passe (MFA)", url: "https://www.cisa.gov/MFA" }],
          slides: [
            { title: "MFA: uma segunda fechadura", bullets: ["Palavra-passe + código, aviso, chave ou passkey", "Uma palavra-passe roubada não chega", "Ative no email, banco, escola e redes sociais"] },
            { title: "Código ou aviso que não pediu?", bullets: ["Nunca o partilhe", "Recuse-o", "Mude a sua palavra-passe"] },
            { title: "Atualize tudo", bullets: ["Telefone, computador, navegador, aplicações", "Ative as atualizações automáticas", "Reinicie quando for pedido"] }
          ],
          tryIt: "Ative a MFA na sua conta de email e guarde os seus códigos de reserva. Depois veja se o seu telefone ou computador tem atualizações e instale as que estiverem à espera.",
          youCanNow: "ativar a MFA e manter os seus aparelhos atualizados.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um exemplo de segundo fator para a MFA?", options: ["O seu nome de utilizador", "A sua cor preferida", "O seu endereço de email", "Um código de uma aplicação de autenticação"], answer: 3, why: "A MFA pede uma segunda prova depois da palavra-passe, como um código de uma aplicação de autenticação." },
            { objective: "O5", q: "O seu telefone pede para instalar uma atualização e reiniciar. O que faria?", options: ["Ignorar durante meses", "Desativar as atualizações para deixar de pedir", "Instalar e reiniciar quando for pedido", "Só atualizar se um amigo disser"], answer: 2, why: "As atualizações corrigem falhas de segurança que os atacantes já conhecem." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Quando alguma coisa corre mal",
          minutes: 5,
          goal: "Seguir um plano simples se uma conta for pirateada ou um aparelho for infetado.",
          text: [
            "Sinais de problema: não consegue entrar, os amigos recebem mensagens estranhas suas, vê inícios de sessão ou compras que não fez, ou o seu aparelho de repente mostra janelas a aparecer ou fica muito lento.",
            "Se uma conta for pirateada: a partir de um aparelho seguro, mude a palavra-passe, ative a MFA, termine todas as outras sessões (a maioria das contas tem isto nas definições de segurança) e verifique o email e os números de telefone de recuperação. Diga aos seus contactos para não clicarem em mensagens suas. Se houver dinheiro envolvido, ligue para o seu banco pelo número que está no seu cartão.",
            "Se clicou num link mau ou acha que um aparelho está infetado, a FTC diz para atualizar o software de segurança, fazer uma análise e remover tudo o que ela assinalar. Na escola ou no trabalho, avise logo o apoio informático; denunciar depressa não é meter-se em problemas, é limitar os danos. Denuncie fraudes em ReportFraud.ftc.gov ou em ic3.gov, do FBI."
          ],
          steps: ["Use um aparelho seguro.", "Mude a palavra-passe e ative a MFA.", "Termine todas as outras sessões.", "Verifique o email e o telefone de recuperação.", "Avise os contactos; ligue para o banco se houver dinheiro envolvido.", "Atualize o software de segurança e faça uma análise.", "Avise o apoio informático na escola ou no trabalho; denuncie fraudes em ReportFraud.ftc.gov ou ic3.gov."],
          words: [["Incidente", "um problema de segurança, como uma conta pirateada ou um aparelho infetado."], ["Sessão", "um lugar onde você entrou na conta, como um telefone ou um navegador."], ["Dados de recuperação", "o email e o telefone que um serviço usa para ajudar você a voltar a entrar na sua conta."]],
          sources: [FTC_PHISHING, { name: "Centro de Queixas de Crimes na Internet do FBI (IC3)", url: "https://www.ic3.gov" }, { name: "FTC: ReportFraud (denunciar fraudes)", url: "https://reportfraud.ftc.gov" }],
          slides: [
            { title: "Sinais de problema", bullets: ["Não consegue entrar", "Os amigos recebem mensagens estranhas suas", "Inícios de sessão ou compras que não fez"] },
            { title: "Plano para uma conta pirateada", bullets: ["Mude a palavra-passe, ative a MFA", "Termine todas as sessões", "Verifique o email e o telefone de recuperação"] },
            { title: "Aparelho infetado ou dinheiro envolvido", bullets: ["Atualize o software de segurança e faça uma análise", "Ligue para o banco pelo número do seu cartão"] },
            { title: "Denuncie depressa", bullets: ["Avise o apoio informático na escola ou no trabalho", "ReportFraud.ftc.gov ou ic3.gov"] }
          ],
          tryIt: "Tarefa final: faça uma verificação de segurança ao seu email (palavra-passe forte num gestor, MFA ativada, aparelho atualizado), escreva o seu plano de cinco linhas para uma conta pirateada e escreva os sinais de phishing de uma mensagem suspeita.",
          youCanNow: "proteger uma conta do princípio ao fim e responder com calma se um dia ela for pirateada.",
          quickCheck: [
            { objective: "O6", q: "Qual destes é um sinal de que uma conta pode ter sido pirateada?", options: ["Os amigos recebem mensagens estranhas suas que você não enviou", "Você entrou na conta ontem", "A sua palavra-passe é longa", "Você ativou a MFA"], answer: 0, why: "Mensagens estranhas enviadas da sua conta são um sinal comum de roubo de conta." },
            { objective: "O6", q: "No trabalho, acha que clicou num link mau. O que faria?", options: ["Ficar calado para não se meter em problemas", "Avisar logo o apoio informático", "Clicar outra vez no link para verificar", "Desativar a MFA"], answer: 1, why: "Denunciar depressa limita os danos e não é meter-se em problemas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Proteger contas e aparelhos",
        questions: [
          { objective: "O4", q: "Segundo a CISA, uma palavra-passe forte é:", options: ["Curta e fácil", "Igual para todas as contas", "O nome do seu animal de estimação", "Longa, aleatória e única"], answer: 3, why: "A CISA diz longa (pelo menos 16 caracteres), aleatória e única." },
          { objective: "O4", q: "O que faz um gestor de palavras-passe?", options: ["Partilha as suas palavras-passe com amigos", "Apaga as suas contas", "Cria e guarda palavras-passe fortes por você", "Desativa a MFA"], answer: 2, why: "Você lembra-se de uma palavra-passe principal; ele guarda as outras." },
          { objective: "O5", q: "Recebe um pedido de MFA que não pediu. O que faz?", options: ["Aprova-o", "Envia o código por SMS a um amigo", "Ignora-o para sempre", "Recusa-o e muda a sua palavra-passe"], answer: 3, why: "Um pedido inesperado quer dizer que alguém pode ter a sua palavra-passe." },
          { objective: "O5", q: "Porque instalar atualizações?", options: ["Corrigem falhas de segurança que os atacantes conhecem", "Tornam o telefone mais pesado", "Apagam as suas fotografias", "São só para jogos"], answer: 0, why: "As atualizações corrigem falhas de segurança conhecidas." },
          { objective: "O6", q: "A sua conta foi pirateada. Depois de mudar a palavra-passe, um passo importante é:", options: ["Publicar a sua nova palavra-passe", "Apagar os seus contactos", "Desativar as atualizações", "Terminar todas as outras sessões"], answer: 3, why: "Terminar as sessões em todo o lado põe o atacante fora da conta." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Cibersegurança",
    questions: [
      { objective: "O1", q: "Cibersegurança é:", options: ["Proteger aparelhos, contas e informações contra ataques", "Pôr os sites mais coloridos", "Um tipo de telefone", "Um jogo de vídeo"], answer: 0, why: "Protege aparelhos, contas e informações." },
      { objective: "O1", q: "Na tríade CIA, \"confidencialidade\" quer dizer:", options: ["O sistema é rápido", "A informação tem cópia de segurança", "Só as pessoas certas podem ver a informação", "A eletricidade está ligada"], answer: 2, why: "A confidencialidade mantém a informação privada." },
      { objective: "O1", q: "Um site é posto fora do ar e os clientes não o conseguem usar. Que objetivo foi prejudicado?", options: ["Integridade", "Confidencialidade", "Disponibilidade", "Autenticação"], answer: 2, why: "Disponibilidade quer dizer que funciona quando é preciso." },
      { objective: "O2", q: "Malware é:", options: ["Uma atualização útil", "Uma firewall", "Um gestor de palavras-passe", "Software nocivo"], answer: 3, why: "Malware é software nocivo." },
      { objective: "O2", q: "O ransomware:", options: ["Torna o seu computador mais rápido", "Bloqueia ficheiros e exige um pagamento", "Faz cópias de segurança das suas fotografias", "Bloqueia o spam"], answer: 1, why: "O ransomware faz dos ficheiros reféns." },
      { objective: "O2", q: "Engenharia social é:", options: ["Construir pontes", "Enganar pessoas para que deem acesso ou informações", "Atualizar aplicações", "Só uma disciplina da escola"], answer: 1, why: "Ataca as pessoas em vez da tecnologia." },
      { objective: "O2", q: "Qual é uma forma comum de roubar contas?", options: ["Repetir uma palavra-passe que saiu numa fuga de dados", "Usar a MFA", "Instalar atualizações", "Usar um gestor de palavras-passe"], answer: 0, why: "Palavras-passe repetidas que saíram em fugas de dados deixam os atacantes entrar noutras contas." },
      { objective: "O3", q: "Phishing é:", options: ["Uma mensagem falsa que tenta enganar você", "Uma aplicação de pesca", "Uma forma de cópia de segurança", "Um tipo de palavra-passe"], answer: 0, why: "O phishing engana você para clicar ou partilhar." },
      { objective: "O3", q: "Qual é um sinal de phishing que a FTC aponta?", options: ["Uma mensagem de um amigo que você esperava", "Um recibo de uma coisa que comprou", "Um aviso de atividade suspeita com um link para resolver", "Um boletim informativo da escola"], answer: 2, why: "Avisos falsos de \"atividade suspeita\" são um truque comum." },
      { objective: "O3", q: "Antes de clicar num link de um email num computador, você pode:", options: ["Passar o rato por cima para ver para onde leva de verdade", "Clicar duas vezes", "Responder com a sua palavra-passe", "Desligar o computador"], answer: 0, why: "Passar o rato por cima mostra o endereço verdadeiro." },
      { objective: "O3", q: "Para onde a FTC diz para reencaminhar os SMS de phishing?", options: ["Para todos os seus contactos", "SPAM (7726)", "Para quem enviou", "911"], answer: 1, why: "Reencaminhe os SMS de phishing para 7726 (SPAM)." },
      { objective: "O3", q: "No trabalho, recebe um email suspeito. O que faz?", options: ["Clica para ver se é verdadeiro", "Denuncia-o com o botão de phishing ou avisa o apoio informático", "Reencaminha-o aos colegas", "Responde e pergunta"], answer: 1, why: "O apoio informático pode bloqueá-lo para todos." },
      { objective: "O4", q: "O comprimento mínimo da CISA para uma palavra-passe forte é:", options: ["Pelo menos 16 caracteres", "4 caracteres", "Exatamente 8 caracteres", "Qualquer comprimento"], answer: 0, why: "A CISA diz pelo menos 16 caracteres; quanto mais longa, mais forte." },
      { objective: "O4", q: "Qual é uma boa frase-passe?", options: ["password123", "A sua data de nascimento", "HorsePurpleHatRun", "abc"], answer: 2, why: "Várias palavras sem relação entre si tornam-na longa e difícil de adivinhar." },
      { objective: "O4", q: "Com um gestor de palavras-passe, você só precisa de se lembrar de:", options: ["Todas as palavras-passe", "Uma palavra-passe principal forte", "Nenhuma palavra-passe e nenhum aparelho", "A palavra-passe de um amigo"], answer: 1, why: "O gestor guarda as outras." },
      { objective: "O5", q: "A MFA protege você porque:", options: ["Uma palavra-passe roubada sozinha não chega para entrar", "Torna a sua palavra-passe mais curta", "Partilha o seu acesso", "Desliga o seu telefone"], answer: 0, why: "A MFA precisa de uma segunda prova." },
      { objective: "O5", q: "Que tipo de MFA a CISA diz ser o mais forte?", options: ["Escrever o código num papel colado", "MFA resistente ao phishing, como uma passkey ou uma chave de segurança", "Dizer o código a um amigo", "Nenhum segundo fator"], answer: 1, why: "A CISA diz que a MFA resistente ao phishing é a meta; as passkeys e as chaves de segurança são mais difíceis de enganar do que os códigos por SMS." },
      { objective: "O5", q: "Os quatro passos principais da CISA são: evitar o phishing, palavras-passe fortes, MFA e:", options: ["Comprar um telefone novo", "Atualizar o software", "Desligar o Wi-Fi para sempre", "Partilhar palavras-passe"], answer: 1, why: "Atualizar o software é o quarto passo principal." },
      { objective: "O6", q: "Acha que clicou num link mau. A FTC diz para:", options: ["Ignorar", "Atualizar o software de segurança, fazer uma análise e remover o que ela assinalar", "Enviar o link aos amigos", "Pagar a quem pedir"], answer: 1, why: "Uma análise encontra e remove o software nocivo." },
      { objective: "O6", q: "Onde pode denunciar uma fraude na internet ao FBI?", options: ["ic3.gov", "Num comentário nas redes sociais", "No email do burlão", "Em lado nenhum"], answer: 0, why: "O IC3 é o Centro de Queixas de Crimes na Internet do FBI." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      5,
      7,
      8,
      12,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Palavra-passe forte e única",
        objective: "O4",
        notYet: "A palavra-passe é curta, repetida ou não está guardada num lugar seguro.",
        meets: "Uma palavra-passe de pelo menos 16 caracteres, usada só nesta conta e guardada num gestor de palavras-passe.",
        exceeds: "Também verifica mais uma conta importante e torna a sua palavra-passe única."
      },
      {
        name: "Autenticação multifator",
        objective: "O5",
        notYet: "A MFA não está ativada.",
        meets: "A MFA está ativada e a funcionar na conta.",
        exceeds: "Usa uma aplicação de autenticação, uma passkey ou uma chave de segurança em vez de um código por SMS."
      },
      {
        name: "Aparelho atualizado",
        objective: "O5",
        notYet: "As atualizações não foram verificadas, ou as atualizações automáticas estão desativadas.",
        meets: "O telefone ou o computador está atualizado e as atualizações automáticas estão ativadas.",
        exceeds: "Também verifica o navegador e as aplicações principais."
      },
      {
        name: "Plano de recuperação",
        objective: "O6",
        notYet: "O plano não existe ou tem menos de três passos certos.",
        meets: "Cinco linhas que incluem mudar a palavra-passe, a MFA, terminar as outras sessões, verificar os dados de recuperação e avisar os contactos.",
        exceeds: "Também diz onde denunciar e para quem ligar se houver dinheiro envolvido."
      },
      {
        name: "Sinais de phishing",
        objective: "O3",
        notYet: "Nenhuma mensagem encontrada, ou nenhum sinal certo escrito.",
        meets: "Uma mensagem suspeita com pelo menos dois sinais de phishing certos escritos.",
        exceeds: "Também diz como e onde a denunciar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da verificação de segurança",
      "Alunos que continuam a usar a MFA e um gestor de palavras-passe 30 dias depois (inquérito de seguimento)",
      "Alunos que denunciam uma mensagem de phishing ao apoio informático ou à FTC, ou evitam uma burla, nos 30 dias depois do curso",
      "Alunos que avançam para outro curso ou certificado em cibersegurança ou informática"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "O telefone ou computador do próprio aluno com internet",
      "Uma conta importante em que consiga entrar, de preferência o email",
      "Um gestor de palavras-passe gratuito, como o que vem no navegador ou no telefone",
      "Papel e caneta para o plano de recuperação de cinco linhas; cerca de 60 minutos no total"
    ],
    facilitatorNotes: [
      "Nunca peça para ver, recolher ou anotar a palavra-passe ou o código MFA de ninguém; os alunos fazem os passos da conta nos seus próprios ecrãs.",
      "Antes de ativar a MFA, confirme que cada aluno ainda tem acesso ao seu email ou telefone de recuperação, para ninguém ficar sem acesso à conta durante a aula.",
      "Traga exemplos de phishing impressos ou em capturas de ecrã para que os alunos sem uma mensagem suspeita possam fazer a tarefa de phishing na mesma.",
      "Em computadores partilhados ou de sala de informática, não guarde palavras-passe no navegador; peça aos alunos para usarem o gestor de palavras-passe do próprio telefone e terminarem a sessão no fim.",
      "Se um aluno descobrir uma conta realmente pirateada, faça uma pausa e acompanhe-o no plano de recuperação a partir de um aparelho seguro."
    ]
  }
};
