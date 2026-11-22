"use strict";

// Koach Learn course (Portuguese translation of shared/cybersecurity-analyst-entry.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

const SEC = { name: "Certificação CompTIA Security+ (página oficial)", url: "https://www.comptia.org/en-us/certifications/security/" };
const V7 = { name: "Detalhes do exame CompTIA Security+ V7 (SY0-701)", url: "https://www.comptia.org/en-us/certifications/security/v7/" };
const V8 = { name: "Detalhes do exame CompTIA Security+ V8 (SY0-801)", url: "https://www.comptia.org/en-us/certifications/security/v8/" };
const CISA = { name: "CISA: boas práticas de cibersegurança", url: "https://www.cisa.gov/topics/cybersecurity-best-practices" };

module.exports = {
  id: "cybersecurity-analyst-entry-pt",
  lang: "pt",
  translationOf: "cybersecurity-analyst-entry",
  category: "Workforce Development",
  name: "Cibersegurança para Iniciantes (Preparação para o CompTIA Security+)",
  skills: "Usar a tríade CIA, Avaliar o risco, Escolher controlos de segurança, Reforçar a segurança de um computador, Analisar registos, Seguir os passos de resposta a incidentes",
  outcome: "pensar e trabalhar como um analista de segurança iniciante: classificar um problema segundo a tríade CIA, avaliar um risco e escolher um controlo, reforçar a segurança do seu próprio computador, encontrar sinais de alerta num registo de início de sessão, seguir os passos de resposta a incidentes e seguir o seu próprio plano com datas para o exame CompTIA Security+.",
  about: [
    "Os analistas de segurança protegem os computadores, as contas e os dados de uma organização. Vigiam os sinais de alerta, verificam as configurações e respondem quando alguma coisa corre mal. O CompTIA Security+ é uma das certificações mais conhecidas para começar neste trabalho.",
    "Este curso prepara você para o Security+. Não lhe dá a certificação; é a CompTIA que a dá quando você passa no exame. O exame vai mudar no final de 2026, por isso a Lição 1 mostra como escolher a versão certa e onde verificar os detalhes atuais.",
    "Tudo aqui é defensivo. Você pratica só no seu próprio computador e nas suas próprias contas, e com registos inventados nas lições. Nunca teste, analise nem entre em sistemas que não são seus ou que não tem autorização por escrito para usar: isso pode ser crime.",
    "Se é novo em segurança, faça primeiro o curso \"Introdução à Cibersegurança\". Ele fala de palavras-passe, autenticação multifator e phishing nas suas próprias contas; este curso parte daí para o trabalho."
  ],
  finalTask: "Faça o seu portefólio inicial de segurança: (1) uma lista de reforço de segurança do seu próprio computador, com cada configuração que verificou e o resultado; (2) uma nota curta de incidente sobre o registo de início de sessão de prática da Lição 5: o que viu, porque é suspeito, o impacto na tríade CIA e a avaliação do risco, e os passos de resposta a incidentes que daria; e (3) o seu plano de estudo e de exame do Security+: que versão do exame vai fazer e porquê, uma data-alvo, cada domínio com o seu peso e as suas horas de estudo por semana.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos que procuram um primeiro emprego em segurança: pessoas à procura de trabalho, antigos militares (muitos com credenciação de segurança ou funções de informática), pessoas que mudam de carreira e pessoas do apoio informático que querem subir. Origens variadas; a maioria usa computadores todos os dias mas nunca trabalhou em segurança.",
    startingPoint: "Conhecem a segurança pessoal básica (palavras-passe, autenticação multifator, phishing) ou podem aprendê-la no curso \"Introdução à Cibersegurança\". Nunca leram registos, avaliaram riscos nem seguiram um processo de incidente. Poucos sabem como o exame Security+ está organizado ou que está a mudar.",
    gap: "Os empregos iniciais em segurança esperam hábitos de analista: classificar problemas, julgar o risco, verificar configurações, ler registos e seguir os passos de um incidente com calma. Os alunos também precisam de um plano claro, com datas, para a versão certa do Security+, para não estudarem para um exame que vai deixar de existir.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada termo é explicado",
      "Só defesa: pratique no seu próprio aparelho e com dados inventados; não analise nem teste sistemas de outras pessoas",
      "Aparelhos: um computador Windows ou Mac; algumas configurações precisam de uma conta de administrador, por isso os computadores da biblioteca podem não as mostrar",
      "Tempo: lições de 4 a 6 minutos",
      "O exame muda no final de 2026: os alunos têm de verificar em comptia.org a versão, as datas e o preço"
    ],
    prerequisites: "À vontade com um computador e com a segurança básica de contas. É bom fazer primeiro \"Introdução à Cibersegurança\" e \"Fundamentos de Apoio Informático (Preparação para o CompTIA A+)\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma situação curta de segurança", action: "classificar que parte da tríade CIA (confidencialidade, integridade ou disponibilidade) é afetada", standard: "acertando pelo menos 4 de 5" },
    { id: "O2", condition: "Com uma ameaça a uma organização", action: "avaliar o seu risco pela probabilidade e pelo impacto e escolher um tipo de controlo para o reduzir", standard: "com uma razão para a avaliação e para o controlo" },
    { id: "O3", condition: "Usando o seu próprio computador Windows ou Mac", action: "verificar e anotar as configurações de atualizações, firewall, antivírus, tipo de conta, bloqueio de ecrã e encriptação do disco", standard: "com cada item verificado e cada falha anotada" },
    { id: "O4", condition: "Com um registo curto de inícios de sessão", action: "marcar as entradas suspeitas e explicar porque cada uma é suspeita", standard: "encontrando todas as falhas repetidas de início de sessão e o sucesso estranho depois delas" },
    { id: "O5", condition: "Com uma situação de incidente de segurança", action: "pôr por ordem os passos de resposta a incidentes e escrever uma ação para cada um", standard: "sem faltar nenhum passo e guardando as provas" },
    { id: "O6", condition: "Usando as páginas oficiais do CompTIA Security+", action: "escrever um plano de estudo e de exame que diga a versão do exame e uma data-alvo", standard: "cobrindo cada domínio com o seu peso e o tempo de estudo por semana" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pensar como um analista de segurança",
      lessons: [
        {
          title: "O trabalho de analista e o exame Security+",
          objectives: ["O6"],
          minutes: 6,
          goal: "Escolher a versão certa do exame Security+ para a sua data e fazer a lista dos seus domínios.",
          text: [
            "Os empregos iniciais em segurança incluem analista de segurança, analista de SOC (centro de operações de segurança) e administrador de segurança ou de sistemas. Os analistas vigiam alertas e registos, verificam se os sistemas estão configurados com segurança e ajudam a responder a incidentes. Muitos começam no apoio informático e vão subindo.",
            "O CompTIA Security+ é dado pela CompTIA quando você passa num exame. Quando verificámos em outubro de 2026, o exame tinha até 90 perguntas em 90 minutos, de escolha múltipla e baseadas em desempenho. A CompTIA recomenda o Network+ e cerca de dois anos de experiência em segurança ou administração de sistemas, mas apresenta-os como experiência recomendada.",
            "O exame está a mudar. A versão 7 (SY0-701) está disponível agora; o exame em inglês estava previsto para deixar de existir a 11 de junho de 2027. A versão 8 (SY0-801) era esperada por volta de 17 de novembro de 2026. Se a sua data de exame for bem dentro de 2027, estude para a V8. Se vai fazer o exame em breve, a V7 pode servir. Verifique as páginas oficiais: as datas podem mudar.",
            "Cada versão tem cinco domínios com pesos. Nas duas, as operações de segurança são o maior (cerca de 27 a 28 por cento). O seu tempo de estudo deve seguir os pesos."
          ],
          steps: ["Abra a página oficial do Security+ e as páginas dos exames V7 e V8.", "Escolha a sua data-alvo para o exame.", "Escolha a versão que vai existir nessa data.", "Anote o código do exame, os cinco domínios e os pesos.", "Verifique o preço atual e as formas de fazer o exame no site oficial."],
          words: [["SOC", "centro de operações de segurança (em inglês, security operations center): a equipa que vigia os sistemas de uma organização contra ataques."], ["Analista de segurança", "uma pessoa que vigia, verifica e responde a problemas de segurança."], ["Versão do exame", "uma versão do exame com o seu próprio código e temas; as versões antigas deixam de existir."], ["Deixar de existir (retirar)", "quando uma versão do exame deixa de ser oferecida."]],
          slides: [
            { title: "Empregos iniciais em segurança", bullets: ["Analista de segurança ou de SOC", "Administrador de segurança ou de sistemas", "Muitos começam no apoio informático"] },
            { title: "O básico do Security+ (verificado em out. 2026)", bullets: ["Um exame, até 90 perguntas, 90 minutos", "Escolha múltipla e perguntas baseadas em desempenho", "A CompTIA dá a certificação; este curso prepara você"] },
            { title: "Escolha a sua versão", bullets: ["V7 = SY0-701: em inglês, deixa de existir a 11 de junho de 2027", "V8 = SY0-801: esperada por volta de 17 de novembro de 2026", "Escolha a versão conforme a sua data de exame"] },
            { title: "Estude segundo os pesos", bullets: ["Cinco domínios em cada versão", "As operações de segurança são o maior", "Verifique em comptia.org antes de marcar"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Escolha um mês-alvo para o exame. Com as páginas oficiais, decida V7 ou V8 e escreva uma frase a dizer porquê. Depois faça a lista dos cinco domínios dessa versão com os seus pesos e faça um círculo à volta do maior.",
          youCanNow: "dizer o que faz um analista de segurança iniciante, escolher a versão certa do Security+ para a sua data de exame e fazer a lista dos seus domínios.",
          quickCheck: [
            { objective: "O6", q: "Planeia fazer o exame no final de 2027. Para que versão deve estudar?", options: ["V7 (SY0-701), porque é mais antiga", "Qualquer versão; são iguais", "V8 (SY0-801), porque a V7 em inglês deixa de existir em junho de 2027", "Nenhuma versão; faça só o A+"], answer: 2, why: "Estude para a versão que ainda vai existir na sua data de exame; verifique as páginas oficiais." },
            { objective: "O6", q: "Quem dá a certificação Security+?", options: ["A CompTIA, quando você passa no exame", "Este curso", "O seu empregador", "Qualquer site de segurança"], answer: 0, why: "A CompTIA dá o Security+; este curso prepara você para o exame." }
          ]
        },
        {
          title: "A tríade CIA, ameaças, vulnerabilidades e risco",
          objectives: ["O1", "O2"],
          minutes: 6,
          goal: "Classificar um problema de segurança com a tríade CIA e avaliar o seu risco.",
          text: [
            "A segurança protege três coisas, chamadas tríade CIA (das iniciais em inglês). Confidencialidade: só as pessoas certas podem ver os dados. Integridade: os dados estão certos e não são mudados sem autorização. Disponibilidade: os sistemas e os dados funcionam quando as pessoas precisam deles.",
            "Exemplos: um portátil roubado com ficheiros de clientes afeta a confidencialidade. Alguém que muda os valores dos salários afeta a integridade. Um ransomware que bloqueia todos os ficheiros, ou um site que fica fora do ar, afeta a disponibilidade.",
            "Uma ameaça é algo que pode causar dano (um ladrão, um burlão, uma tempestade). Uma vulnerabilidade é uma fraqueza que a ameaça pode usar (um computador sem atualizações, uma palavra-passe fraca, uma porta aberta). O risco é a probabilidade do dano vezes a gravidade que ele teria (o impacto).",
            "Os analistas muitas vezes avaliam o risco numa grelha simples: probabilidade baixa, média ou alta, e impacto baixo, médio ou alto. Probabilidade alta e impacto alto vão para o topo da lista."
          ],
          steps: ["Diga o que pode ser afetado.", "Pergunte: afeta a confidencialidade, a integridade ou a disponibilidade?", "Diga qual é a ameaça e qual é a vulnerabilidade.", "Avalie a probabilidade: baixa, média ou alta.", "Avalie o impacto: baixo, médio ou alto.", "Ponha primeiro os riscos alto-alto."],
          words: [["Tríade CIA", "confidencialidade, integridade e disponibilidade: os três objetivos da segurança."], ["Ameaça", "algo ou alguém que pode causar dano."], ["Vulnerabilidade", "uma fraqueza que uma ameaça pode usar."], ["Risco", "a probabilidade de um dano e a gravidade que ele teria."], ["Ransomware", "um programa malicioso que bloqueia ficheiros e exige um pagamento."]],
          slides: [
            { title: "A tríade CIA", bullets: ["Confidencialidade: só as pessoas certas veem", "Integridade: os dados continuam certos", "Disponibilidade: funciona quando é preciso"] },
            { title: "Exemplos", bullets: ["Portátil roubado com ficheiros: confidencialidade", "Valores dos salários mudados: integridade", "Ransomware, site fora do ar: disponibilidade"] },
            { title: "Ameaça, vulnerabilidade, risco", bullets: ["Ameaça: o que pode causar dano", "Vulnerabilidade: a fraqueza", "Risco: probabilidade e impacto juntos"] },
            { title: "Avalie", bullets: ["Probabilidade: baixa, média, alta", "Impacto: baixo, médio, alto", "Alta e alto vêm primeiro"] }
          ],
          tryIt: "Para um pequeno negócio que conhece (uma loja do bairro, o escritório de uma igreja, a receção de uma clínica), escreva três coisas que podem correr mal. Para cada uma, escreva que parte da tríade CIA é afetada, a ameaça, a vulnerabilidade e uma avaliação da probabilidade e do impacto.",
          youCanNow: "classificar um problema de segurança segundo a tríade CIA e avaliar o seu risco pela probabilidade e pelo impacto.",
          quickCheck: [
            { objective: "O1", q: "Alguém muda os valores das faturas sem autorização. Que parte da tríade CIA é afetada?", options: ["Confidencialidade", "Disponibilidade", "Nenhuma", "Integridade"], answer: 3, why: "Integridade quer dizer que os dados continuam certos; mudanças sem autorização quebram-na." },
            { objective: "O2", q: "Um computador de escritório não é atualizado há um ano. Em termos de risco, as atualizações em falta são:", options: ["Uma ameaça", "Uma vulnerabilidade", "Um controlo", "Um incidente"], answer: 1, why: "Uma atualização em falta é uma fraqueza que uma ameaça pode usar." }
          ]
        },
        {
          title: "Controlos de segurança e privilégio mínimo",
          objectives: ["O2"],
          minutes: 5,
          goal: "Escolher um tipo de controlo para reduzir um risco.",
          text: [
            "Um controlo é qualquer coisa que reduz o risco. O Security+ organiza os controlos de duas formas. Por categoria: técnicos (uma firewall, encriptação, autenticação multifator), de gestão (políticas, avaliações de risco), operacionais (formação, guardas, procedimentos que as pessoas seguem) e físicos (fechaduras, cartões de acesso, câmaras).",
            "Pelo que fazem: os controlos preventivos param um ataque (uma fechadura, a autenticação multifator). Os controlos de deteção dão por ele (uma câmara, alertas nos registos). Os controlos corretivos resolvem depois (recuperar a partir de uma cópia de segurança). Os controlos dissuasores desencorajam (um aviso). Os controlos compensatórios substituem o controlo principal quando ele não é possível.",
            "Uma regra importante é o privilégio mínimo: dê a cada pessoa só o acesso de que precisa para o seu trabalho, e mais nada. Um caixa não precisa de acesso aos salários. Se uma conta for roubada, o privilégio mínimo limita o estrago.",
            "Uma boa defesa usa várias camadas, para que, se uma falhar, outra continue a proteger (defesa em profundidade)."
          ],
          words: [["Controlo", "qualquer coisa que reduz um risco."], ["Preventivo / de deteção / corretivo", "controlos que param, dão por ou resolvem um problema de segurança."], ["Privilégio mínimo", "dar a cada pessoa só o acesso de que o seu trabalho precisa."], ["Defesa em profundidade", "usar várias camadas de proteção."], ["Firewall", "uma ferramenta que deixa passar ou bloqueia o tráfego da rede segundo regras."]],
          slides: [
            { title: "Categorias de controlos", bullets: ["Técnicos: firewall, encriptação, MFA", "De gestão: políticas, avaliações de risco", "Operacionais: formação, procedimentos", "Físicos: fechaduras, cartões, câmaras"] },
            { title: "O que os controlos fazem", bullets: ["Preventivos: param", "De deteção: dão por ele", "Corretivos: resolvem depois", "Dissuasores e compensatórios"] },
            { title: "Privilégio mínimo", bullets: ["Só o acesso de que o trabalho precisa", "Limita o estrago se uma conta for roubada"] },
            { title: "Defesa em profundidade", bullets: ["Várias camadas", "Se uma falhar, outra continua a proteger"] }
          ],
          sources: [V7, V8],
          tryIt: "Pegue nos três riscos da Lição 2. Para cada um, escolha um controlo. Escreva a sua categoria (técnico, de gestão, operacional ou físico) e o que faz (preventivo, de deteção ou corretivo). Depois escreva uma regra de privilégio mínimo para esse negócio.",
          youCanNow: "escolher um controlo para um risco, dizer a sua categoria e o seu tipo, e aplicar o privilégio mínimo.",
          quickCheck: [
            { objective: "O2", q: "Uma câmara de segurança que grava quem entra é principalmente que tipo de controlo?", options: ["De deteção", "Corretivo", "De gestão", "Compensatório"], answer: 0, why: "As câmaras dão pelos acontecimentos e gravam-nos, por isso são controlos de deteção (e físicos)." },
            { objective: "O2", q: "Um novo caixa pede acesso ao sistema de salários. Usando o privilégio mínimo, você:", options: ["Dá acesso total de administrador, por segurança", "Partilha a sua própria palavra-passe", "Dá acesso só se o trabalho precisar mesmo dele", "Dá a todos acesso a tudo"], answer: 2, why: "O privilégio mínimo dá só o acesso de que uma função precisa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pensar como um analista de segurança",
        questions: [
          { objective: "O1", q: "O site de marcações de uma clínica fica fora do ar durante um dia. Que parte da tríade CIA é afetada?", options: ["Confidencialidade", "Integridade", "Disponibilidade", "Nenhuma"], answer: 2, why: "As pessoas não conseguiram usar o sistema quando precisavam: disponibilidade." },
          { objective: "O1", q: "Um trabalhador envia por e-mail uma lista de clientes para a pessoa errada, fora da empresa. Que parte da tríade CIA é afetada?", options: ["Confidencialidade", "Disponibilidade", "Integridade", "Privilégio mínimo"], answer: 0, why: "Os dados foram vistos por alguém que não os devia ver." },
          { objective: "O2", q: "Que risco deve normalmente ser tratado primeiro?", options: ["Probabilidade baixa, impacto baixo", "Probabilidade baixa, impacto médio", "Probabilidade média, impacto baixo", "Probabilidade alta, impacto alto"], answer: 3, why: "Probabilidade alta e impacto alto é o risco mais grave." },
          { objective: "O2", q: "Recuperar ficheiros de uma cópia de segurança depois de um ransomware é que tipo de controlo?", options: ["Dissuasor", "Corretivo", "Preventivo", "De gestão"], answer: 1, why: "Os controlos corretivos resolvem as coisas depois de um acontecimento." },
          { objective: "O6", q: "Nas duas versões do Security+, que domínio tem o maior peso?", options: ["Conceitos gerais de segurança", "Gestão do programa de segurança", "Operações de segurança", "Arquitetura de segurança"], answer: 2, why: "As operações de segurança valem cerca de 27 a 28 por cento nas duas versões." }
        ]
      }
    },
    {
      name: "Capítulo 2: Operações de segurança na prática",
      lessons: [
        {
          title: "Reforçar a segurança do seu próprio computador",
          objectives: ["O3"],
          minutes: 6,
          goal: "Verificar e anotar as principais configurações de segurança do seu próprio computador.",
          text: [
            "Reforçar a segurança (em inglês, \"hardening\") quer dizer tornar um sistema mais difícil de atacar, ligando proteções e desligando o que não é preciso. Os analistas verificam isto nos computadores da empresa todos os dias. Pratique só no seu próprio computador.",
            "Verifique seis coisas. Atualizações: estão instaladas? Firewall: está ligada? Antivírus: está ligado e atualizado (o Microsoft Defender vem com o Windows; os Mac têm proteção contra programas maliciosos incluída)? Tipo de conta: usa uma conta normal (standard) no dia a dia, e a de administrador só quando é preciso? Bloqueio de ecrã: bloqueia depois de alguns minutos e pede palavra-passe ou PIN? Encriptação do disco: está ligada (BitLocker ou Encriptação de Dispositivo em muitos computadores Windows, FileVault no Mac)?",
            "No Windows, procure em Definições o Windows Update e as Contas, e abra a Segurança do Windows para a firewall e a proteção contra vírus. No Mac, procure em Definições do Sistema a Atualização de Software, Rede > Firewall, Utilizadores e Grupos, Ecrã de bloqueio e Privacidade e Segurança > FileVault. Os nomes dos menus podem mudar entre versões; use a pesquisa das Definições se não encontrar algum.",
            "Se ligar a encriptação do disco, guarde primeiro a chave de recuperação num lugar seguro e fora da internet. Sem ela pode perder os seus ficheiros. Se não tiver a certeza, anote isso como uma falha e peça ajuda."
          ],
          steps: ["Atualizações: verifique e instale.", "Firewall: confirme que está ligada.", "Antivírus: confirme que está ligado e atualizado.", "Conta: anote se a sua conta do dia a dia é normal ou de administrador.", "Bloqueio de ecrã: ponha-o a bloquear depois de alguns minutos.", "Encriptação do disco: veja se está ligada; guarde a chave de recuperação antes de a ligar.", "Escreva cada resultado e cada falha."],
          words: [["Reforço de segurança (hardening)", "tornar um sistema mais difícil de atacar, ligando proteções e tirando o que não é preciso."], ["Encriptação do disco", "baralhar tudo o que está num disco para que um ladrão não o consiga ler sem a chave."], ["Chave de recuperação", "um código longo que desbloqueia um disco encriptado se você não conseguir iniciar sessão."], ["Base de referência (baseline)", "as configurações seguras padrão que todos os computadores de uma organização devem ter."]],
          slides: [
            { title: "Reforçar a segurança", bullets: ["Ligue as proteções", "Desligue o que não é preciso", "Só no seu próprio computador"] },
            { title: "Verifique seis coisas", bullets: ["Atualizações, firewall, antivírus", "Conta normal para o dia a dia", "Bloqueio de ecrã e encriptação do disco"] },
            { title: "Onde procurar", bullets: ["Windows: Definições e Segurança do Windows", "Mac: Definições do Sistema, Privacidade e Segurança", "Os nomes dos menus mudam: use a pesquisa"] },
            { title: "Cuidado com a encriptação", bullets: ["Guarde primeiro a chave de recuperação, fora da internet", "Não tem a certeza? Anote como falha e peça ajuda"] }
          ],
          sources: [CISA],
          tryIt: "No seu próprio computador, verifique os seis itens. Faça uma tabela com três colunas: configuração, o que encontrou e o que corrigir. Esta é a parte 1 da sua tarefa final.",
          youCanNow: "verificar as principais configurações de segurança de um computador e anotar as falhas, como um analista verifica uma base de referência.",
          quickCheck: [
            { objective: "O3", q: "Antes de ligar a encriptação do disco, o que deve fazer?", options: ["Desligar a firewall", "Guardar a chave de recuperação num lugar seguro e fora da internet", "Apagar os seus ficheiros", "Partilhar a sua palavra-passe"], answer: 1, why: "Sem a chave de recuperação pode perder o acesso aos seus próprios ficheiros." },
            { objective: "O3", q: "Que conta deve usar no trabalho do dia a dia?", options: ["Uma conta de administrador", "Uma conta partilhada sem palavra-passe", "Uma conta de convidado com os seus ficheiros", "Uma conta normal (standard)"], answer: 3, why: "Uma conta normal limita o que um programa malicioso ou um erro consegue mudar." }
          ]
        },
        {
          title: "Ler registos e encontrar atividade suspeita",
          objectives: ["O4"],
          minutes: 6,
          goal: "Marcar as entradas suspeitas num registo de inícios de sessão e dizer porquê.",
          text: [
            "Um registo (em inglês, \"log\") é uma lista de acontecimentos que um sistema guarda, cada um com a hora. Os analistas leem registos de inícios de sessão para encontrar ataques. No Windows, o Visualizador de Eventos (Event Viewer) guarda um registo de Segurança (para o ver é preciso uma conta de administrador); os inícios de sessão falhados aparecem como evento 4625 e os bem-sucedidos como 4624. Aqui usamos um registo inventado.",
            "Registo de prática (inventado): 02:14:01 FAILED user=jlopez from 203.0.113.50. 02:14:03 FAILED user=jlopez from 203.0.113.50. 02:14:05 FAILED user=jlopez from 203.0.113.50. 02:14:07 FAILED user=jlopez from 203.0.113.50. 02:14:09 SUCCESS user=jlopez from 203.0.113.50. 08:02:30 SUCCESS user=mchen from 10.0.0.12.",
            "Sinais de alerta: muitos inícios de sessão falhados (FAILED) em poucos segundos (alguém a adivinhar palavras-passe), e depois um sucesso (SUCCESS) a partir do mesmo endereço (pode ter acertado). Também horas estranhas (2 da manhã para alguém que trabalha das 9 às 5), inícios de sessão a partir de um lugar invulgar, e uma conta a entrar a partir de dois lugares muito afastados em pouco tempo.",
            "O seu trabalho é dar pelo problema, anotar e comunicar, não contra-atacar. Escreva o que viu, as horas, a conta e o endereço, e passe a informação seguindo o processo da sua equipa."
          ],
          steps: ["Leia cada linha: hora, resultado, conta, endereço.", "Procure muitas falhas em pouco tempo.", "Procure um sucesso logo depois de falhas a partir do mesmo endereço.", "Procure horas ou lugares estranhos.", "Escreva cada linha suspeita e porquê.", "Comunique; nunca tente entrar você mesmo no outro sistema."],
          words: [["Registo (log)", "uma lista de acontecimentos, com hora, que um sistema guarda."], ["Visualizador de Eventos (Event Viewer)", "a ferramenta do Windows para ler os registos do sistema e de segurança."], ["Força bruta", "adivinhar uma palavra-passe tentando muitas opções muito depressa."], ["Indicador", "uma pista nos dados de que algo mau pode estar a acontecer."]],
          slides: [
            { title: "Os registos contam a história", bullets: ["Cada linha: hora, acontecimento, conta, endereço", "Windows: Visualizador de Eventos, registo de Segurança", "4625 = início de sessão falhado, 4624 = sucesso"] },
            { title: "Sinais de alerta", bullets: ["Muitas falhas em segundos", "Depois um sucesso a partir do mesmo endereço", "Horas ou lugares estranhos"] },
            { title: "No registo de prática", bullets: ["4 falhas de jlopez em 8 segundos às 2:14 da manhã", "Depois um sucesso a partir do mesmo endereço", "mchen às 8:02 da manhã parece normal"] },
            { title: "O seu trabalho", bullets: ["Dar pelo problema, anotar, comunicar", "Nunca contra-atacar nem entrar à força"] }
          ],
          tryIt: "Copie o registo de prática para um papel. Faça um círculo à volta de cada linha suspeita e escreva porquê. Avalie o risco (probabilidade e impacto) e a parte da tríade CIA em risco. Guarde isto para a parte 2 da sua tarefa final.",
          youCanNow: "ler um registo de inícios de sessão, marcar as entradas suspeitas e explicar porque são importantes.",
          quickCheck: [
            { objective: "O4", q: "No registo de prática, que linha é a mais preocupante?", options: ["O sucesso de jlopez às 02:14:09, logo depois de quatro falhas", "O sucesso de mchen às 08:02:30", "Só o primeiro início de sessão falhado", "Nenhuma; as falhas de início de sessão são sempre normais"], answer: 0, why: "Um sucesso logo depois de falhas rápidas a partir do mesmo endereço sugere que uma palavra-passe foi adivinhada." },
            { objective: "O4", q: "Encontra sinais de um ataque num registo. O que faz?", options: ["Entra à força no computador do atacante", "Ignora até de manhã", "Apaga o registo", "Anota os detalhes e comunica-os seguindo o processo da sua equipa"], answer: 3, why: "Os analistas anotam e comunicam; contra-atacar é ilegal e apagar registos destrói as provas." }
          ]
        },
        {
          title: "Resposta a incidentes e o seu plano para o Security+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Pôr por ordem os passos de resposta a incidentes para uma situação e escrever um plano de estudo do Security+ com datas.",
          text: [
            "Um incidente é um acontecimento de segurança que causa ou ameaça causar dano. As organizações seguem passos definidos para as pessoas manterem a calma. O Security+ usa: preparação, deteção, análise, contenção, erradicação, recuperação e lições aprendidas.",
            "Para o início de sessão de jlopez: preparação (a equipa já tem um plano e contactos); deteção (você vê as entradas no registo); análise (confirme se é real: jlopez iniciou sessão às 2 da manhã?); contenção (bloqueie a conta e termine as suas sessões); erradicação (mude a palavra-passe, ligue a autenticação multifator, tire tudo o que o atacante instalou); recuperação (devolva a jlopez um acesso seguro e vigie a conta); lições aprendidas (o que teria impedido isto?).",
            "Guarde as provas: não apague registos nem limpe um computador antes de a sua equipa dizer. Escreva as horas e as ações à medida que avança. Comunique à pessoa que o seu processo indica.",
            "Agora planeie o seu exame. Use a versão que escolheu na Lição 1. Marque uma data-alvo. Dê mais semanas aos domínios maiores. Pratique com os objetivos oficiais do exame, as suas notas de reforço de segurança e de registos, e as verificações deste curso. Escolha horas por semana que caibam na sua vida. Antes de marcar, verifique o preço e as formas de fazer o exame na página oficial, e pergunte a programas de emprego, de antigos militares ou de reintegração se ajudam com os custos."
          ],
          steps: ["Preparação: conheça o plano e a quem ligar.", "Deteção: dê pelos sinais de alerta.", "Análise: confirme se é real e qual a gravidade.", "Contenção: impeça que se espalhe.", "Erradicação: tire a causa.", "Recuperação: volte ao normal e vigie.", "Lições aprendidas: escreva o que mudar.", "Plano: versão, data-alvo, domínios e pesos, horas por semana."],
          words: [["Incidente", "um acontecimento de segurança que causa ou ameaça causar dano."], ["Contenção", "impedir que um incidente se espalhe."], ["Erradicação", "tirar a causa de um incidente."], ["Provas", "registos, ficheiros e notas que mostram o que aconteceu; têm de ser guardados."]],
          slides: [
            { title: "Passos de resposta a incidentes", bullets: ["Preparação, deteção, análise", "Contenção, erradicação, recuperação", "Lições aprendidas"] },
            { title: "O caso jlopez", bullets: ["Confirme com o utilizador", "Bloqueie a conta; mude a palavra-passe; ligue a MFA", "Devolva o acesso e vigie a conta"] },
            { title: "Guarde as provas", bullets: ["Não apague registos nem limpe aparelhos cedo demais", "Escreva as horas e as ações à medida que avança"] },
            { title: "O seu plano para o Security+", bullets: ["Versão e data-alvo", "Domínios com pesos; mais semanas para os maiores", "Horas por semana; verifique o preço em comptia.org"] }
          ],
          sources: [SEC, V7, V8],
          tryIt: "Tarefa final: junte a sua tabela de reforço de segurança (Lição 4), uma nota de incidente sobre o registo de jlopez com o impacto na tríade CIA, a avaliação do risco e uma ação para cada passo de resposta, e o seu plano para o Security+ com versão, data-alvo, domínios e pesos, e horas por semana.",
          youCanNow: "seguir os passos de resposta a incidentes num caso que parece real e seguir o seu próprio plano com datas até ao Security+.",
          quickCheck: [
            { objective: "O5", q: "Confirma que uma conta foi roubada. Qual é o passo seguinte?", options: ["Lições aprendidas", "Contenção: bloquear a conta e terminar as suas sessões", "Recuperação", "Preparação"], answer: 1, why: "Depois da deteção e da análise, você contém o incidente para que não se espalhe." },
            { objective: "O6", q: "O que deve estar num plano de estudo do Security+?", options: ["Só a palavra \"Security+\"", "Uma lista de ferramentas de ataque para experimentar nos outros", "A versão do exame, uma data-alvo, os domínios com pesos e as horas por semana", "As suas palavras-passe"], answer: 2, why: "Um plano diz a versão certa, uma data, o que estudar e quando." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Operações de segurança na prática",
        questions: [
          { objective: "O3", q: "O que faz parte de reforçar a segurança de um computador?", options: ["Desligar as atualizações", "Ligar a firewall e o bloqueio de ecrã", "Usar uma conta de administrador para tudo", "Partilhar a chave de recuperação na internet"], answer: 1, why: "Reforçar a segurança liga proteções como a firewall e o bloqueio de ecrã." },
          { objective: "O4", q: "Dez inícios de sessão falhados numa conta em cinco segundos, a partir do mesmo endereço, quer dizer muito provavelmente:", options: ["O utilizador esqueceu-se de carregar o telefone", "Tráfego normal", "Um erro da impressora", "Alguém está a adivinhar a palavra-passe"], answer: 3, why: "Muitas falhas rápidas são o sinal de um ataque de força bruta." },
          { objective: "O4", q: "No Windows, que ferramenta deixa ler o registo de Segurança?", options: ["O Visualizador de Eventos (Event Viewer)", "O Paint", "Só o Bloco de Notas", "A calculadora"], answer: 0, why: "O Visualizador de Eventos mostra os registos do Windows, incluindo o registo de Segurança." },
          { objective: "O5", q: "Que passo vem logo depois da contenção?", options: ["Deteção", "Preparação", "Erradicação", "Análise"], answer: 2, why: "Depois de impedir que se espalhe, você tira a causa: erradicação." },
          { objective: "O5", q: "Durante um incidente, porque deve guardar os registos e não limpar o computador logo?", options: ["Os registos são provas do que aconteceu", "Limpar é sempre ilegal", "Os registos tornam o computador mais rápido", "Não faz diferença"], answer: 0, why: "Os registos e os aparelhos são provas; a equipa decide quando é seguro limpar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Cibersegurança para Iniciantes (Preparação para o CompTIA Security+)",
    questions: [
      { objective: "O6", q: "Qual é o código do exame Security+ V8?", options: ["SY0-701", "220-1201", "SY0-801", "DA0-002"], answer: 2, why: "A V8 é o SY0-801; a V7 é o SY0-701." },
      { objective: "O6", q: "Porque verificar a página oficial da CompTIA antes de marcar?", options: ["As versões, as datas e os preços do exame podem mudar", "É o único lugar com ferramentas de ataque para praticar", "Dá o certificado de graça", "Não é preciso"], answer: 0, why: "As versões deixam de existir e os preços mudam; a página oficial está atualizada." },
      { objective: "O6", q: "Que domínio deve ter mais tempo de estudo num plano do Security+?", options: ["O mais pequeno", "As operações de segurança, o maior", "Nenhum; estude ao acaso", "Só o domínio de que gosta"], answer: 1, why: "O maior domínio tem mais perguntas." },
      { objective: "O1", q: "Um ransomware bloqueia todos os ficheiros de um escritório. Que parte da tríade CIA é mais afetada?", options: ["Confidencialidade", "Integridade", "Privilégio mínimo", "Disponibilidade"], answer: 3, why: "As pessoas não conseguem usar os seus ficheiros: disponibilidade." },
      { objective: "O1", q: "Confidencialidade quer dizer:", options: ["Os sistemas funcionam quando é preciso", "Só as pessoas certas podem ver os dados", "Os dados têm cópia de segurança", "Os dados estão impressos"], answer: 1, why: "A confidencialidade mantém os dados longe de quem não os deve ver." },
      { objective: "O1", q: "Um aluno muda a sua nota no sistema da escola. Que parte da tríade CIA é afetada?", options: ["Integridade", "Disponibilidade", "Confidencialidade", "Dissuasão"], answer: 0, why: "Os dados foram mudados sem autorização, por isso já não estão certos." },
      { objective: "O2", q: "Uma palavra-passe fraca numa conta de administrador é:", options: ["Uma ameaça", "Um controlo", "Uma vulnerabilidade", "Uma chave de recuperação"], answer: 2, why: "É uma fraqueza que um atacante pode usar." },
      { objective: "O2", q: "A autenticação multifator no início de sessão é principalmente:", options: ["Um controlo corretivo", "Um controlo de deteção", "Um aviso dissuasor", "Um controlo técnico preventivo"], answer: 3, why: "Impede muitos roubos de contas antes de acontecerem, usando tecnologia." },
      { objective: "O2", q: "O risco é avaliado pela:", options: ["Probabilidade e pelo impacto", "Tamanho do ecrã", "Número de computadores", "Idade do escritório"], answer: 0, why: "O risco junta a probabilidade de um dano com a gravidade que ele teria." },
      { objective: "O2", q: "Uma política escrita que diz quem pode aceder aos ficheiros dos clientes é que categoria de controlo?", options: ["Físico", "De gestão", "Técnico", "Corretivo"], answer: 1, why: "As políticas e as decisões sobre o risco são controlos de gestão." },
      { objective: "O3", q: "Que ferramenta vem com o Windows para proteção contra vírus?", options: ["O Microsoft Defender, na Segurança do Windows", "O Visualizador de Eventos", "O Paint", "Só o Agendador de Tarefas"], answer: 0, why: "O Microsoft Defender é o antivírus incluído na Segurança do Windows." },
      { objective: "O3", q: "O FileVault num Mac serve para:", options: ["Tocar música", "Enviar e-mail", "Encriptação do disco", "Imprimir"], answer: 2, why: "O FileVault encripta o disco do Mac." },
      { objective: "O3", q: "Onde deve praticar o reforço de segurança?", options: ["No computador de um vizinho", "No seu próprio computador", "No servidor do seu antigo emprego", "Em qualquer rede Wi-Fi pública"], answer: 1, why: "Pratique só em aparelhos que são seus ou que tem autorização por escrito para usar." },
      { objective: "O4", q: "O que é um registo (log)?", options: ["Uma lista de palavras-passe", "Um tipo de vírus", "Uma regra da firewall", "Uma lista de acontecimentos, com hora, que um sistema guarda"], answer: 3, why: "Os registos guardam acontecimentos com a hora para os analistas verem o que aconteceu." },
      { objective: "O4", q: "Que início de sessão é mais invulgar para alguém que trabalha num escritório das 9 às 5?", options: ["8:55 da manhã, a partir da rede do escritório", "12:30, a partir da rede do escritório", "3:10 da manhã, a partir de outro país", "4:45 da tarde, a partir da rede do escritório"], answer: 2, why: "Horas e lugares estranhos são sinais de alerta." },
      { objective: "O4", q: "O evento 4625 do Windows quer dizer:", options: ["Um início de sessão falhado", "Um início de sessão bem-sucedido", "Um trabalho da impressora", "Uma atualização de software"], answer: 0, why: "4625 é um início de sessão falhado; 4624 é um bem-sucedido." },
      { objective: "O5", q: "Qual é o PRIMEIRO passo de resposta a incidentes?", options: ["Recuperação", "Preparação", "Erradicação", "Lições aprendidas"], answer: 1, why: "A preparação vem primeiro: os planos e os contactos estão prontos antes de um incidente." },
      { objective: "O5", q: "Mudar a palavra-passe e tirar o que o atacante instalou é:", options: ["Deteção", "Preparação", "Lições aprendidas", "Erradicação"], answer: 3, why: "A erradicação tira a causa do incidente." },
      { objective: "O5", q: "Depois de a conta estar segura outra vez, a equipa reúne-se para perguntar o que teria impedido isto. Isto é:", options: ["Lições aprendidas", "Contenção", "Deteção", "Análise"], answer: 0, why: "As lições aprendidas são o último passo: melhorar para que não volte a acontecer." },
      { objective: "O5", q: "Vê um ataque a vir de um endereço de fora. O que NÃO deve fazer?", options: ["Anotar as horas", "Comunicar à sua equipa", "Tentar entrar à força no computador do atacante", "Guardar os registos"], answer: 2, why: "Contra-atacar é ilegal e não é o trabalho do analista; anote e comunique." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 3, 5, 6, 8, 10, 13, 14, 16] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Tabela de reforço de segurança", objective: "O3", notYet: "Algumas das seis configurações não foram verificadas.", meets: "As seis configurações verificadas no seu próprio computador, com resultados e falhas.", exceeds: "Cada falha tem uma correção e uma razão, e o plano para a chave de recuperação está escrito." },
      { name: "Análise do registo", objective: "O4", notYet: "Não vê as falhas rápidas ou o sucesso depois delas.", meets: "Marca cada linha suspeita e diz porquê.", exceeds: "Também diz como é o normal e que dados a mais o confirmariam." },
      { name: "Tríade CIA e risco", objective: "O1", notYet: "Nenhuma parte da tríade CIA indicada, ou a errada.", meets: "Indica a parte da tríade CIA em risco e dá uma avaliação da probabilidade e do impacto com uma razão.", exceeds: "Explica como o risco podia mudar se fosse acrescentado um controlo." },
      { name: "Controlos", objective: "O2", notYet: "Nenhum controlo, ou um controlo que não serve para o risco.", meets: "Indica pelo menos um controlo adequado, com a sua categoria e o seu tipo.", exceeds: "Usa controlos em camadas e uma regra de privilégio mínimo." },
      { name: "Passos do incidente", objective: "O5", notYet: "Faltam passos ou estão fora de ordem, ou as provas foram destruídas.", meets: "Os sete passos por ordem, cada um com uma ação, e as provas guardadas.", exceeds: "Diz quem é informado em cada passo e como as lições aprendidas mudariam a configuração." },
      { name: "Plano de estudo e de exame", objective: "O6", notYet: "Sem versão nem data, ou faltam domínios.", meets: "Indica a V7 ou a V8 com uma razão, uma data-alvo, cada domínio com o seu peso e as horas por semana.", exceeds: "Dá mais semanas aos domínios com mais peso e diz onde verificar o preço e pedir ajuda com os custos." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que marcam ou passam no Security+ em 6 meses (inquérito de seguimento)",
      "Alunos que se candidatam ou começam um emprego em segurança, SOC ou informática em 6 meses",
      "Alunos que dizem ter corrigido pelo menos uma falha de segurança em casa ou no trabalho em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador Windows ou Mac que é do aluno ou que ele pode alterar (algumas configurações precisam de uma conta de administrador)",
      "Papel e caneta, ou um documento, para as tabelas, a nota de incidente e o plano",
      "As páginas oficiais do CompTIA Security+ V7 e V8",
      "Cerca de 90 minutos no total, em sessões curtas, mais tempo de estudo contínuo para o exame"
    ],
    facilitatorNotes: [
      "Diga a regra no início de cada sessão: só defesa, só aparelhos próprios e dados inventados; testar sistemas de outras pessoas sem autorização por escrito pode ser crime.",
      "Verifique as páginas oficiais do Security+ antes de cada turma; as datas do fim da V7 e do lançamento da V8 podem mudar.",
      "Nos computadores partilhados da sala, os alunos podem não ver algumas configurações; deixe-os fazer a Lição 4 em casa ou como demonstração.",
      "Faça a Lição 6 como um exercício de mesa: uma pessoa lê o registo e o grupo percorre cada passo de resposta em voz alta.",
      "Lembre aos alunos que este curso prepara para o Security+ e não o dá; indique programas locais que ajudam com os custos do exame.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
