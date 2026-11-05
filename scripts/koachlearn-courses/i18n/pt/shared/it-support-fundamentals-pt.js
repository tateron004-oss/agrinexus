"use strict";

// Koach Learn course (Portuguese translation of shared/it-support-fundamentals.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Windows and Mac menu names are given in Portuguese with the English name in brackets the first time, because many computers are set to English.

const A_PLUS = { name: "Certificação CompTIA A+ (página oficial)", url: "https://www.comptia.org/en-us/certifications/a/" };
const CORE1 = { name: "Detalhes do exame CompTIA A+ Core 1 (220-1201)", url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/" };
const CORE2 = { name: "Detalhes do exame CompTIA A+ Core 2 (220-1202)", url: "https://www.comptia.org/en-us/certifications/a/core-2-v15/" };
const BLS = { name: "Departamento de Estatísticas do Trabalho dos EUA (BLS): técnicos de apoio informático", url: "https://www.bls.gov/ooh/computer-and-information-technology/computer-support-specialists.htm" };

module.exports = {
  id: "it-support-fundamentals-pt",
  lang: "pt",
  translationOf: "it-support-fundamentals",
  category: "Workforce Development",
  name: "Fundamentos de Apoio Informático (Preparação para o CompTIA A+)",
  skills: "Identificar o hardware do computador, Verificar uma ligação de rede, Usar as ferramentas do sistema operativo, Resolver problemas passo a passo, Escrever pedidos de apoio (tickets), Planear os exames A+",
  outcome: "trabalhar como um técnico de apoio (help desk) iniciante: identificar as partes de um computador, verificar uma ligação de rede com ipconfig e ping, usar as ferramentas do sistema, resolver um problema com o método de seis passos, escrever um ticket claro e seguir o seu próprio plano com datas para os dois exames CompTIA A+.",
  about: [
    "O apoio informático (também chamado help desk ou apoio ao utilizador) é um primeiro emprego comum na tecnologia. Os técnicos de apoio ajudam as pessoas quando um computador, uma impressora, um telefone ou a rede deixa de funcionar. A certificação inicial mais conhecida para este trabalho é o CompTIA A+.",
    "Este curso prepara você para o A+. Não lhe dá a certificação. Para obter o A+ tem de passar em dois exames, o Core 1 e o Core 2, num centro de exames ou pela internet. Veja a página oficial da CompTIA para saber os exames, os preços e as formas de fazer o exame atuais antes de marcar.",
    "Vai praticar no seu próprio computador com ferramentas gratuitas que já vêm nele. Não precisa de abrir um computador nem de comprar nada. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\" e duas perguntas rápidas. Há uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "Este curso é para quem está a começar: quem procura emprego, antigos militares, jovens adultos, pessoas que voltam para casa depois da prisão, imigrantes e adultos que mudam de profissão."
  ],
  finalTask: "Prepare o seu kit inicial de apoio informático: (1) um ticket de prática para um problema real ou inventado, escrito com os seis passos de resolução de problemas e os campos do ticket da Lição 6; (2) uma nota de uma página sobre o seu próprio computador: o sistema operativo e a versão, o armazenamento livre, o endereço IP, o gateway predefinido e se o ping funcionou; e (3) o seu plano de estudo e de exames A+ com uma data-alvo para o Core 1 e para o Core 2, os domínios de cada exame com os seus pesos e as horas que vai estudar por semana.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e jovens adultos à procura de um primeiro emprego na tecnologia: quem procura emprego, antigos militares, pessoas que voltam para casa depois da prisão, imigrantes e pessoas que mudam de profissão. A maioria usa um telefone e um computador todos os dias, mas nunca reparou um nem trabalhou em informática.",
    startingPoint: "Sabem usar um navegador de internet, o e-mail e aplicações comuns. A maioria nunca usou a linha de comandos, nunca explorou as definições do sistema nem escreveu um ticket de apoio. Poucos sabem o que os exames A+ cobrem.",
    gap: "Os empregos de help desk pedem conhecimentos básicos de hardware, redes, sistemas operativos e resolução de problemas, e muitas vezes o CompTIA A+. Os alunos precisam de uma ideia clara do trabalho, de prática com ferramentas reais e de um plano com datas para fazerem mesmo os dois exames.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada palavra técnica é explicada",
      "Aparelhos: um computador Windows ou Mac (um computador da biblioteca serve para a maioria das tarefas, mas alguns comandos podem estar bloqueados)",
      "Não se abrem computadores nem fontes de alimentação; o hardware aprende-se só com imagens ou com um aparelho velho desligado e sem ficha na tomada",
      "Tempo: lições de 4 a 6 minutos, que cabem entre o trabalho e as consultas",
      "As regras, os preços e as versões dos exames mudam: os alunos verificam em comptia.org antes de marcar"
    ],
    prerequisites: "Estar à vontade com um computador, um rato e um teclado. Se isso for novo, faça primeiro o curso \"Competências Básicas de Informática\". O curso \"Introdução à Cibersegurança\" é um bom complemento."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com imagens ou uma lista de partes de um computador", action: "identificar cada parte principal do hardware e dizer para que serve", standard: "acertando pelo menos 8 de 10" },
    { id: "O2", condition: "Usando o seu próprio computador Windows ou Mac", action: "usar o ipconfig (ou ver as definições de rede) e o ping para anotar o endereço IP e o gateway predefinido e testar a ligação", standard: "sem ajuda, e dizer o que quer dizer um endereço 169.254" },
    { id: "O3", condition: "Usando o seu próprio computador", action: "encontrar a versão do sistema operativo, o armazenamento livre, os programas em execução e o estado das atualizações com as ferramentas do sistema", standard: "em menos de 10 minutos" },
    { id: "O4", condition: "Com um problema de computador de um utilizador", action: "aplicar o método de seis passos da CompTIA para resolver problemas e anotar cada passo", standard: "com os seis passos na ordem certa" },
    { id: "O5", condition: "Com uma chamada ou mensagem de um utilizador com um problema", action: "escrever um ticket de apoio e uma resposta curta e educada ao utilizador", standard: "com todos os campos do ticket preenchidos e sem culpas nem palavras técnicas difíceis na resposta" },
    { id: "O6", condition: "Usando as páginas oficiais dos exames CompTIA A+", action: "escrever um plano de estudo e de exames com datas-alvo para o Core 1 e o Core 2", standard: "cobrindo todos os domínios do exame com o seu peso e um tempo de estudo semanal" }
  ],
  chapters: [
    {
      name: "Capítulo 1: O trabalho, o hardware e a rede",
      lessons: [
        {
          title: "O trabalho de help desk e os dois exames A+",
          objectives: ["O6"],
          minutes: 5,
          goal: "Indicar os dois exames A+, os seus códigos e os principais temas de cada um.",
          text: [
            "Um técnico de apoio responde a chamadas, conversas por chat e tickets, prepara computadores e contas, resolve problemas comuns e sabe quando passar um problema difícil a um técnico mais experiente. Os nomes do cargo incluem técnico de help desk, especialista de apoio informático, apoio ao utilizador e técnico de campo.",
            "O CompTIA A+ é uma certificação inicial conhecida para este trabalho. Quem a dá é a CompTIA, não este curso. Tem de passar em dois exames. O Core 1 (220-1201) cobre aparelhos móveis, redes, hardware, virtualização e nuvem, e resolução de problemas de hardware e de rede. O Core 2 (220-1202) cobre sistemas operativos, segurança, resolução de problemas de software e procedimentos de trabalho. Pode fazê-los por qualquer ordem.",
            "Quando verificámos, em outubro de 2026, cada exame tinha até 90 perguntas em 90 minutos, com escolha múltipla, arrastar e largar, e perguntas práticas (pequenas tarefas feitas com as mãos). A CompTIA recomenda cerca de 12 meses de experiência prática, mas é só uma recomendação. Os exames, os preços e as versões mudam, por isso veja sempre as páginas oficiais antes de marcar.",
            "Cada exame tem domínios (áreas de temas) com um peso, que é a parte do exame que esse tema ocupa. O seu tempo de estudo deve seguir esses pesos."
          ],
          steps: ["Abra a página oficial do CompTIA A+.", "Abra as páginas dos exames Core 1 e Core 2.", "Anote o código de cada exame e os seus domínios com os pesos.", "Encontre no site oficial o preço atual e as formas de fazer o exame (centro de exames ou pela internet)."],
          words: [["Help desk", "a equipa que as pessoas contactam quando a sua tecnologia não funciona."], ["Certificação", "um título que se obtém passando num exame e que mostra que você tem certas competências."], ["Domínio", "uma área de temas de um exame. O seu peso é a parte das perguntas sobre esse tema."], ["Pergunta prática", "uma tarefa do exame em que você faz alguma coisa, como ligar definições ou corrigir uma configuração, em vez de escolher uma resposta."]],
          slides: [
            { title: "O que faz um técnico de apoio", bullets: ["Responde a chamadas, chats e tickets", "Prepara computadores, impressoras e contas", "Resolve problemas comuns; passa os difíceis"] },
            { title: "CompTIA A+ = dois exames", bullets: ["Core 1 (220-1201): hardware, redes, móveis, nuvem, resolução de problemas", "Core 2 (220-1202): sistemas operativos, segurança, software, procedimentos", "Passe nos dois, por qualquer ordem"] },
            { title: "Formato do exame (verificado em out. 2026)", bullets: ["Até 90 perguntas, 90 minutos cada", "Escolha múltipla, arrastar e largar, perguntas práticas", "Veja comptia.org para os detalhes e o preço atuais"] },
            { title: "Este curso prepara você", bullets: ["Não dá o A+", "A CompTIA dá-o quando passa nos dois exames"] }
          ],
          sources: [A_PLUS, CORE1, CORE2, BLS],
          tryIt: "Abra as páginas oficiais do Core 1 e do Core 2. Numa folha, faça duas colunas, uma por exame. Escreva o código do exame e depois cada domínio e o seu peso. Faça um círculo à volta do maior domínio de cada exame: é aí que vai passar mais tempo a estudar.",
          youCanNow: "dizer o nome dos dois exames A+, os seus códigos e os principais domínios, e encontrar os detalhes atuais na página oficial.",
          quickCheck: [
            { objective: "O6", q: "Em quantos exames tem de passar para obter o CompTIA A+?", options: ["Um", "Dois: Core 1 e Core 2", "Três", "Nenhum; este curso dá a certificação"], answer: 1, why: "O A+ precisa do Core 1 e do Core 2; o curso só prepara você." },
            { objective: "O6", q: "Onde deve verificar o preço e a versão atuais do exame A+?", options: ["Num comentário de um fórum do ano passado", "Com um amigo que passou em 2019", "No site oficial da CompTIA", "Em qualquer vídeo sobre o A+"], answer: 2, why: "Os preços e as versões dos exames mudam; a página oficial é a única fonte de confiança." }
          ]
        },
        {
          title: "Dentro do computador: as principais partes do hardware",
          objectives: ["O1"],
          minutes: 6,
          goal: "Identificar as principais partes do hardware de um computador e dizer para que serve cada uma.",
          text: [
            "O hardware são as partes físicas em que se pode tocar. A placa-mãe é a placa principal onde tudo se liga. O CPU (processador) faz o trabalho de pensar. A RAM (memória) guarda aquilo em que está a trabalhar agora e apaga-se quando a corrente é desligada. O armazenamento guarda os seus ficheiros quando a corrente está desligada: um SSD (disco de estado sólido, rápido, sem peças que se mexem) ou um HDD (disco rígido, mais lento, com discos que giram).",
            "A fonte de alimentação (PSU) transforma a corrente da tomada na corrente que as partes usam. Uma placa gráfica (GPU) desenha a imagem no ecrã; muitos computadores têm a parte gráfica dentro do CPU. As portas do lado de fora incluem USB (USB-A e o USB-C, mais pequeno, que entra dos dois lados), HDMI e DisplayPort para ecrãs, e Ethernet para uma rede com cabo.",
            "Uma pista comum no help desk: um computador lento com muitos programas abertos pode precisar de mais RAM; um computador que demora muito a arrancar pode ter um disco rígido quase cheio ou antigo.",
            "Primeiro a segurança: não precisa de abrir um computador neste curso. Um técnico desliga sempre o computador e tira a ficha da tomada antes de o abrir, usa uma pulseira antiestática e nunca abre uma fonte de alimentação nem uma bateria inchada."
          ],
          words: [["Hardware", "as partes físicas de um computador."], ["CPU", "o processador; a parte que executa os programas e faz os cálculos."], ["RAM", "memória de curto prazo que guarda os programas e ficheiros abertos; esvazia-se quando a corrente é desligada."], ["SSD / HDD", "discos de armazenamento que guardam os ficheiros quando a corrente está desligada. O SSD é mais rápido e não tem peças que se mexem."], ["Placa-mãe", "a placa de circuitos principal que liga todas as partes."], ["ESD", "descarga eletrostática: um pequeno choque de eletricidade estática que pode danificar as partes do computador."]],
          slides: [
            { title: "As partes principais", bullets: ["Placa-mãe: liga tudo", "CPU: faz o trabalho de pensar", "RAM: memória de curto prazo, esvazia ao desligar", "SSD ou HDD: guarda os seus ficheiros"] },
            { title: "Mais partes e portas", bullets: ["Fonte de alimentação (PSU) e parte gráfica (GPU)", "USB-A, USB-C, HDMI, DisplayPort, Ethernet"] },
            { title: "Pistas no trabalho", bullets: ["Lento com muitos programas abertos: talvez pouca RAM", "Demora a arrancar: disco cheio ou antigo"] },
            { title: "Segurança", bullets: ["Desligue e tire a ficha antes de abrir", "Pulseira antiestática", "Nunca abra uma fonte de alimentação nem uma bateria inchada"] }
          ],
          tryIt: "Olhe para o seu computador só por fora. Faça a lista de todas as portas que vê e dê-lhes o nome (USB-A, USB-C, HDMI, Ethernet, auscultadores). Depois, no Windows abra Definições (Settings) > Sistema > Acerca de (About), ou no Mac abra o menu Apple > Acerca deste Mac (About This Mac), e anote o processador e quanta RAM (memória) o computador tem.",
          youCanNow: "dizer o nome das principais partes de um computador e para que serve cada uma, e encontrar o processador e a memória do seu próprio computador.",
          quickCheck: [
            { objective: "O1", q: "Que parte guarda os seus ficheiros quando o computador está desligado?", options: ["A RAM", "O CPU", "A fonte de alimentação", "O SSD ou disco rígido"], answer: 3, why: "O armazenamento (SSD ou HDD) guarda os ficheiros; a RAM esvazia-se quando a corrente é desligada." },
            { objective: "O1", q: "Antes de abrir um computador de secretária, o que faz primeiro um técnico?", options: ["Desliga-o e tira a ficha da tomada", "Abre a fonte de alimentação", "Tira a bateria com ele a funcionar", "Deita água para o arrefecer"], answer: 0, why: "Primeiro desliga e tira a ficha; isto protege você e as partes." }
          ]
        },
        {
          title: "Noções básicas de redes: endereços IP, ipconfig e ping",
          objectives: ["O2"],
          minutes: 6,
          goal: "Verificar a ligação de rede de um computador com ipconfig e ping e anotar os resultados.",
          text: [
            "Cada aparelho numa rede recebe um endereço IP, como uma morada para os dados. Em casa costuma ser parecido com 192.168.x.x ou 10.x.x.x. O seu router distribui estes endereços automaticamente com um serviço chamado DHCP. O gateway predefinido é o endereço do router: a porta da sua rede de casa para a internet.",
            "Se um computador Windows mostra um endereço que começa por 169.254, não conseguiu obter um endereço do DHCP. É uma grande pista: verifique o cabo ou o Wi-Fi, e depois o router.",
            "Duas ferramentas que todos os técnicos usam: o ipconfig mostra o seu endereço IP e o gateway predefinido (no Windows, abra a Linha de Comandos e escreva ipconfig). O ping envia uma pequena mensagem de teste a outro aparelho e mostra se ele responde. Faça primeiro ping ao gateway predefinido; se funcionar, faça ping a um site como comptia.org.",
            "Pratique isto só no seu próprio computador e na sua própria rede. Alguns computadores de bibliotecas ou de empresas bloqueiam a linha de comandos; nesse caso, use as definições de rede para encontrar o seu endereço IP."
          ],
          steps: ["Windows: carregue na tecla Windows, escreva cmd e abra a Linha de Comandos (Command Prompt). Mac: abra o Terminal.", "Windows: escreva ipconfig e carregue em Enter. Anote o endereço IPv4 e o gateway predefinido. Mac: encontre o endereço IP e o router em Definições do Sistema > Rede.", "Escreva ping seguido do endereço do gateway, por exemplo ping 192.168.1.1, e carregue em Enter.", "No Mac, carregue em Control e C para parar o ping.", "Leia o resultado: se houver respostas, a ligação funciona; \"timed out\" ou \"unreachable\" quer dizer que não funciona."],
          words: [["Endereço IP", "um número que identifica um aparelho numa rede."], ["DHCP", "o serviço, normalmente no router, que dá automaticamente os endereços IP aos aparelhos."], ["Gateway predefinido", "o endereço do router; a saída da sua rede para a internet."], ["ipconfig", "um comando do Windows que mostra as suas definições de rede."], ["ping", "um comando que testa se outro aparelho responde pela rede."], ["Router", "a caixa que liga a sua rede de casa à internet."]],
          slides: [
            { title: "Endereços numa rede", bullets: ["Cada aparelho recebe um endereço IP", "Endereços de casa: muitas vezes 192.168.x.x ou 10.x.x.x", "O DHCP distribui-os; o router é o gateway"] },
            { title: "A pista do 169.254", bullets: ["O Windows mostra 169.254.x.x", "Não conseguiu obter um endereço do DHCP", "Verifique o cabo ou o Wi-Fi, depois o router"] },
            { title: "Duas ferramentas", bullets: ["ipconfig: mostra o seu endereço e o gateway", "ping: testa se outro aparelho responde", "Ping primeiro ao gateway, depois a um site"] },
            { title: "Pratique com segurança", bullets: ["Só no seu próprio computador e rede", "Comando bloqueado? Use as definições de rede"] }
          ],
          sources: [CORE1],
          tryIt: "No seu próprio computador, siga os passos. Anote o seu endereço IP e o gateway predefinido, depois faça ping ao gateway e a comptia.org. Escreva \"funciona\" ou \"não funciona\" para cada um. Guarde esta nota para a tarefa final.",
          youCanNow: "encontrar o seu endereço IP e o gateway predefinido, testar uma ligação com ping e dizer o que quer dizer um endereço 169.254.",
          quickCheck: [
            { objective: "O2", q: "Um portátil Windows mostra o endereço IP 169.254.20.5. O que isto lhe diz?", options: ["A internet está muito rápida", "Não obteve um endereço do DHCP", "O portátil tem um vírus", "O ecrã tem de ser trocado"], answer: 1, why: "Um endereço 169.254 quer dizer que o aparelho não chegou ao DHCP, por isso verifique a ligação e o router." },
            { objective: "O2", q: "Que comando mostra o endereço IP e o gateway predefinido de um computador Windows?", options: ["ping", "print", "ipconfig", "shutdown"], answer: 2, why: "O ipconfig mostra as suas definições de rede; o ping testa uma ligação." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: O trabalho, o hardware e a rede",
        questions: [
          { objective: "O6", q: "Que exame cobre os sistemas operativos e a segurança?", options: ["Core 1 (220-1201)", "Core 2 (220-1202)", "Os dois cobrem só hardware", "Nenhum"], answer: 1, why: "O Core 2 cobre sistemas operativos, segurança, resolução de problemas de software e procedimentos de trabalho." },
          { objective: "O1", q: "Um utilizador diz que o computador fica lento quando há muitos programas abertos. Que parte é uma causa provável?", options: ["RAM insuficiente", "A porta HDMI", "O teclado", "O cabo do monitor"], answer: 0, why: "A RAM guarda os programas abertos; com pouca, o computador fica lento quando há muitos abertos." },
          { objective: "O1", q: "Que parte faz o trabalho principal de pensar e executa os programas?", options: ["Fonte de alimentação", "Porta Ethernet", "Disco rígido", "CPU"], answer: 3, why: "O CPU (processador) executa os programas e faz os cálculos." },
          { objective: "O2", q: "O que é o gateway predefinido?", options: ["O site mais rápido", "Um tipo de cabo", "O endereço do router, a saída para a internet", "A palavra-passe do computador"], answer: 2, why: "O gateway predefinido é o router que liga a sua rede à internet." },
          { objective: "O2", q: "Faz ping ao gateway e recebe respostas, mas o ping a um site falha. Onde está mais provavelmente o problema?", options: ["Entre o router e a internet", "Na RAM do computador", "No teclado", "No ecrã"], answer: 0, why: "O computador chega ao router, por isso a falha está depois do router: na ligação à internet." }
        ]
      }
    },
    {
      name: "Capítulo 2: Sistemas, resolução de problemas e o seu plano",
      lessons: [
        {
          title: "Ferramentas do sistema operativo que usa todos os dias",
          objectives: ["O3"],
          minutes: 5,
          goal: "Encontrar a versão do sistema, o armazenamento livre, os programas em execução e o estado das atualizações no seu próprio computador.",
          text: [
            "O sistema operativo (SO) é o programa principal que faz funcionar o computador: Windows, macOS, Linux ou, nos telefones, Android e iOS. O A+ Core 2 espera que você saiba orientar-se neles.",
            "No Windows: Definições > Sistema > Acerca de mostra a versão. Definições > Sistema > Armazenamento (Storage) mostra o espaço livre. O Gestor de Tarefas (Task Manager; carregue em Ctrl + Shift + Esc) mostra os programas em execução e quanto o CPU e a memória estão a trabalhar; pode fechar ali um programa bloqueado. Definições > Windows Update mostra se há atualizações à espera.",
            "No Mac: o menu Apple > Acerca deste Mac mostra a versão. O Monitor de Atividade (Activity Monitor; procure-o com o Spotlight) mostra os programas em execução. Definições do Sistema > Geral > Atualização de Software mostra as atualizações. O armazenamento está em Definições do Sistema > Geral > Armazenamento.",
            "Bons hábitos de segurança fazem parte do trabalho: instalar as atualizações, manter ligado o antivírus que já vem no sistema (Microsoft Defender no Windows), usar uma conta normal (não de administrador) para o trabalho do dia a dia e bloquear o ecrã quando se afasta (tecla Windows + L no Windows)."
          ],
          steps: ["Encontre o nome e a versão do SO.", "Encontre quanto armazenamento está livre.", "Abra o Gestor de Tarefas ou o Monitor de Atividade e encontre o programa que usa mais memória.", "Veja se há atualizações.", "Bloqueie o ecrã e depois desbloqueie-o."],
          words: [["Sistema operativo (SO)", "o software principal que faz funcionar um computador ou telefone, como o Windows ou o macOS."], ["Gestor de Tarefas", "uma ferramenta do Windows (Task Manager) que mostra os programas em execução e deixa fechar um que esteja bloqueado."], ["Monitor de Atividade", "a ferramenta do Mac (Activity Monitor) que mostra os programas em execução."], ["Conta de administrador", "uma conta que pode instalar software e mudar definições. O trabalho do dia a dia deve ser feito numa conta normal."]],
          slides: [
            { title: "Conheça o sistema operativo", bullets: ["Windows, macOS, Linux; Android e iOS nos telefones", "O Core 2 testa todos estes"] },
            { title: "Ferramentas do Windows", bullets: ["Definições > Sistema > Acerca de: versão", "Definições > Sistema > Armazenamento: espaço livre", "Ctrl + Shift + Esc: Gestor de Tarefas", "Definições > Windows Update"] },
            { title: "Ferramentas do Mac", bullets: ["Menu Apple > Acerca deste Mac", "Monitor de Atividade", "Definições do Sistema > Geral > Atualização de Software"] },
            { title: "Hábitos de segurança", bullets: ["Instale as atualizações; mantenha o antivírus ligado", "Trabalho do dia a dia numa conta normal", "Bloqueie o ecrã quando se afasta"] }
          ],
          sources: [CORE2],
          tryIt: "No seu próprio computador, anote: o nome e a versão do SO, o armazenamento livre, o programa que está a usar mais memória agora e se há atualizações à espera. Junte isto à sua nota de rede da Lição 3. Já tem a maior parte da parte 2 da sua tarefa final.",
          youCanNow: "usar as ferramentas do sistema para ver a versão, o armazenamento, os programas em execução e as atualizações de um computador.",
          quickCheck: [
            { objective: "O3", q: "Um programa está bloqueado no Windows. Que ferramenta deixa fechá-lo?", options: ["Gestor de Tarefas", "Paint", "A Reciclagem", "A calculadora"], answer: 0, why: "O Gestor de Tarefas mostra os programas em execução e pode fechar um que esteja bloqueado." },
            { objective: "O3", q: "Qual é o hábito mais seguro para o trabalho do dia a dia?", options: ["Usar sempre a conta de administrador", "Desligar as atualizações", "Usar uma conta normal e manter as atualizações ligadas", "Desligar o antivírus para ganhar velocidade"], answer: 2, why: "Uma conta normal e as atualizações em dia limitam os estragos se alguma coisa correr mal." }
          ]
        },
        {
          title: "O método de resolução de problemas em seis passos",
          objectives: ["O4"],
          minutes: 6,
          goal: "Aplicar a um problema os seis passos da CompTIA para resolver problemas, por ordem.",
          text: [
            "Os bons técnicos não adivinham. Seguem um método. Os objetivos do A+ usam seis passos: 1. Identificar o problema. 2. Criar uma teoria da causa provável (questionar o óbvio). 3. Testar a teoria para encontrar a causa. 4. Fazer um plano de ação e aplicar a solução. 5. Verificar que todo o sistema funciona e, se ajudar, tomar medidas para que não volte a acontecer. 6. Documentar o que encontrou, o que fez e o resultado.",
            "O passo 1 é fazer perguntas ao utilizador: O que aconteceu? Quando começou? Mudou alguma coisa? Há alguma mensagem de erro? Faça uma cópia de segurança dos dados importantes antes de mudar alguma coisa.",
            "O passo 2 é começar pelas causas simples: Está ligado à tomada? O Wi-Fi está ligado? Já foi reiniciado? Se a primeira teoria estiver errada, crie uma nova e teste outra vez, ou escale o problema (passe-o a um técnico mais experiente).",
            "Exemplo: uma impressora não imprime. Teoria: está desligada da rede. Teste: o ecrã da impressora mostra papel encravado. Solução: tirar o papel com cuidado. Verificar: imprimir uma página de teste. Documentar: \"Papel encravado no tabuleiro 2, retirado, página de teste impressa.\""
          ],
          steps: ["Identifique o problema: faça perguntas, faça cópia de segurança dos dados.", "Crie uma teoria da causa provável: comece pelo óbvio.", "Teste a teoria. Errada? Crie uma nova teoria ou escale.", "Faça um plano e aplique a solução.", "Verifique que funciona e evite que se repita, se puder.", "Documente o que encontrou, o que fez e o resultado."],
          words: [["Resolução de problemas", "encontrar e corrigir a causa de um problema passo a passo (em inglês, \"troubleshooting\")."], ["Teoria da causa provável", "o seu melhor palpite sobre o que está a causar o problema."], ["Escalar", "passar um problema a alguém com mais conhecimentos ou mais acessos."], ["Documentar", "anotar o que encontrou e fez, normalmente no ticket."]],
          slides: [
            { title: "Os seis passos", bullets: ["1 Identificar  2 Teoria  3 Testar", "4 Planear e resolver  5 Verificar  6 Documentar"] },
            { title: "Passo 1: identificar", bullets: ["O que aconteceu? Quando? O que mudou?", "Alguma mensagem de erro?", "Cópia de segurança antes de mudar"] },
            { title: "Passos 2 e 3", bullets: ["Questione o óbvio: corrente, cabos, reiniciar", "Teoria errada? Tente uma nova ou escale"] },
            { title: "Passos 4 a 6", bullets: ["Resolva e depois verifique todo o sistema", "Evite que se repita, se puder", "Anote tudo"] }
          ],
          sources: [CORE1],
          tryIt: "Escolha um problema real que já teve (portátil lento, sem Wi-Fi, um telefone que não carrega) ou use este: \"Um utilizador não consegue ligar-se ao Wi-Fi depois de mudar de secretária.\" Escreva numa folha os seis passos para esse problema, com o que perguntaria, verificaria e anotaria em cada passo.",
          youCanNow: "trabalhar um problema com os seis passos de resolução de problemas e anotar cada um.",
          quickCheck: [
            { objective: "O4", q: "Qual é o PRIMEIRO passo da resolução de problemas?", options: ["Trocar o disco rígido", "Documentar a solução", "Identificar o problema", "Verificar que todo o sistema funciona"], answer: 2, why: "Tem de perceber o problema antes de tentar adivinhar a causa." },
            { objective: "O4", q: "Resolveu o problema. O que vem antes de o documentar?", options: ["Verificar que todo o sistema funciona", "Fechar o ticket sem avisar o utilizador", "Criar uma nova teoria", "Fazer cópia de segurança dos dados pela primeira vez"], answer: 0, why: "O passo 5 é verificar que tudo funciona; o passo 6 é documentar." }
          ]
        },
        {
          title: "Tickets, falar com os utilizadores e o seu plano de estudo A+",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Escrever um ticket de apoio completo e um plano de estudo e de exames A+ com datas.",
          text: [
            "Um ticket é o registo de um problema. Um bom ticket tem: o nome do utilizador e como o contactar (num emprego real, vem do sistema da empresa), o aparelho, um resumo curto, os detalhes e qualquer mensagem de erro, a prioridade (quão urgente é), os passos feitos e o resultado. Escreva-o de forma que outro técnico possa pegar nele e perceber.",
            "A forma como fala conta tanto como a solução. Ouça sem interromper, repita o problema por palavras suas, use palavras simples, nunca culpe o utilizador, diga quando lhe vai dar notícias e confirme com ele que está resolvido antes de fechar o ticket. Mantenha as informações dele privadas.",
            "Agora planeie os seus exames. Use os pesos dos domínios que anotou na Lição 1. Escolha uma data-alvo para cada exame. Dê mais semanas aos domínios maiores. Use prática gratuita: o documento gratuito com os objetivos do exame da CompTIA, o seu próprio computador e as verificações de conhecimentos deste curso. Muitas pessoas estudam 5 a 10 horas por semana; escolha o que cabe na sua vida e anote.",
            "Antes de marcar, veja na página oficial o preço atual, os programas de desconto e as formas de fazer o exame. Os centros de emprego, os programas para antigos militares e os programas de reintegração às vezes ajudam a pagar os exames, por isso pergunte no seu."
          ],
          steps: ["Ticket: preencha utilizador, aparelho, resumo, detalhes, prioridade, passos feitos e resultado.", "Resposta: agradeça, diga o que encontrou com palavras simples, diga o que acontece a seguir e quando.", "Plano: escreva uma data-alvo para o Core 1 e para o Core 2.", "Faça a lista de cada domínio com o seu peso e as semanas que lhe dá.", "Escreva as suas horas de estudo por semana e onde vai estudar.", "Veja na página oficial o preço e as formas de fazer o exame; pergunte a um programa local sobre ajuda com os custos."],
          words: [["Ticket", "o registo escrito de um pedido de apoio, do início ao fim."], ["Prioridade", "quão urgente é um ticket, muitas vezes baixa, média, alta ou crítica."], ["Plano de estudo", "um horário escrito do que vai estudar, quando, e a data do seu exame."]],
          slides: [
            { title: "Um ticket completo", bullets: ["Utilizador, aparelho, resumo, detalhes, mensagem de erro", "Prioridade, passos feitos, resultado", "Outro técnico consegue pegar nele"] },
            { title: "Falar com os utilizadores", bullets: ["Ouça e repita o problema", "Palavras simples, sem culpas", "Diga quando dá notícias; confirme a solução"] },
            { title: "O seu plano A+", bullets: ["Data-alvo para o Core 1 e para o Core 2", "Mais semanas para os domínios maiores", "Horas por semana anotadas"] },
            { title: "Antes de marcar", bullets: ["Veja em comptia.org o preço e as formas de fazer o exame", "Peça ajuda a programas de emprego, de antigos militares ou de reintegração"] }
          ],
          sources: [A_PLUS, CORE1, CORE2],
          tryIt: "Tarefa final: escreva o ticket do seu problema da Lição 5 com todos os campos e os seis passos, mais uma resposta de duas frases ao utilizador. Junte numa página a nota sobre o seu computador das Lições 3 e 4. Depois escreva o seu plano de estudo e de exames A+: datas-alvo para o Core 1 e o Core 2, cada domínio e o seu peso, e as suas horas por semana.",
          youCanNow: "escrever um ticket de apoio claro, responder a um utilizador com educação e seguir o seu próprio plano com datas para os dois exames A+.",
          quickCheck: [
            { objective: "O5", q: "Que resumo de ticket é mais útil?", options: ["\"Avariado.\"", "\"O utilizador não sabe usar computadores.\"", "\"Socorro!!\"", "\"Portátil não se liga ao Wi-Fi do escritório desde a mudança para a secretária 14; erro: sem internet.\""], answer: 3, why: "Diz o aparelho, o problema, quando começou e o erro, sem culpar ninguém." },
            { objective: "O6", q: "O Core 1 tem um domínio que vale 28% e outro que vale 11%. Como deve planear?", options: ["Dar o mesmo tempo aos dois", "Dar mais tempo de estudo ao domínio de 28%", "Saltar o domínio de 28%", "Estudar só o domínio de 11%"], answer: 1, why: "Pesos maiores querem dizer mais perguntas, por isso merecem mais tempo de estudo." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Sistemas, resolução de problemas e o seu plano",
        questions: [
          { objective: "O3", q: "Onde encontra a versão do Windows?", options: ["Gestor de Tarefas > Arranque", "A Reciclagem", "Definições > Sistema > Acerca de", "O menu da impressora"], answer: 2, why: "Definições > Sistema > Acerca de mostra a edição e a versão do Windows." },
          { objective: "O4", q: "Um monitor está preto. Que teoria deve testar primeiro?", options: ["A placa-mãe avariou", "O cabo de corrente ou de vídeo está solto", "O sistema operativo tem de ser reinstalado", "O CPU é demasiado lento"], answer: 1, why: "Questione o óbvio: os cabos e a corrente são as causas mais comuns e mais fáceis de verificar." },
          { objective: "O4", q: "A sua primeira teoria afinal está errada. O que faz?", options: ["Cria uma nova teoria e testa-a, ou escala", "Fecha o ticket", "Diz ao utilizador que não tem solução", "Troca o computador"], answer: 0, why: "O método volta atrás: uma nova teoria, ou escalar se não conseguir avançar." },
          { objective: "O5", q: "Um utilizador está aborrecido porque o portátil avariou antes de um prazo. Qual é a melhor primeira resposta?", options: ["\"Deve ter sido você a estragá-lo.\"", "\"Isso não é problema meu.\"", "Usar palavras técnicas para ele confiar em você", "Ouvir, repetir o problema e dizer o que vai fazer a seguir"], answer: 3, why: "Ouvir, confirmar e dizer um próximo passo claro acalma o utilizador e dá-lhe os factos." },
          { objective: "O6", q: "O que faz parte de um plano de estudo A+ completo?", options: ["Datas-alvo para os dois exames e horas de estudo por semana", "Só o nome da certificação", "Uma lista de computadores de que gosta", "O seu número da Segurança Social"], answer: 0, why: "Datas, domínios e horas por semana transformam um objetivo num plano que pode seguir." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Fundamentos de Apoio Informático (Preparação para o CompTIA A+)",
    questions: [
      { objective: "O6", q: "Quem dá a certificação A+?", options: ["Este curso", "A CompTIA, quando passa nos dois exames", "A sua empresa de internet", "Qualquer empregador"], answer: 1, why: "A CompTIA dá o A+; o curso prepara você." },
      { objective: "O6", q: "O código de exame 220-1201 é do:", options: ["Security+", "A+ Core 2", "A+ Core 1", "Network+"], answer: 2, why: "O 220-1201 é o Core 1; o 220-1202 é o Core 2." },
      { objective: "O6", q: "Uma pergunta prática pede-lhe para:", options: ["Fazer uma pequena tarefa com as mãos", "Escrever uma redação", "Falar com uma pessoa", "Levar o seu próprio computador"], answer: 0, why: "As perguntas práticas pedem-lhe para fazer alguma coisa, como configurar ou corrigir uma definição." },
      { objective: "O1", q: "Que parte é a memória de curto prazo que se esvazia quando a corrente é desligada?", options: ["SSD", "HDD", "Fonte de alimentação", "RAM"], answer: 3, why: "A RAM guarda o trabalho aberto só enquanto o computador está ligado." },
      { objective: "O1", q: "O que é verdade sobre um SSD comparado com um HDD?", options: ["Tem discos que giram", "Normalmente é mais rápido e não tem peças que se mexem", "Só guarda música", "É um tipo de ecrã"], answer: 1, why: "Os SSD usam chips sem peças que se mexem, por isso são mais rápidos." },
      { objective: "O1", q: "Que porta liga um computador a uma rede com cabo?", options: ["Ethernet", "HDMI", "Entrada dos auscultadores", "USB-C só para carregar"], answer: 0, why: "A Ethernet é a porta de rede com cabo; o HDMI é para ecrãs." },
      { objective: "O1", q: "O que um técnico NUNCA deve abrir?", options: ["A caixa de um computador de secretária, depois de tirar a ficha", "O menu de definições de um portátil", "Uma fonte de alimentação", "Um ticket"], answer: 2, why: "As fontes de alimentação guardam uma carga elétrica perigosa e são trocadas, não abertas." },
      { objective: "O2", q: "O que faz o DHCP?", options: ["Imprime documentos", "Distribui endereços IP automaticamente", "Bloqueia vírus", "Carrega a bateria"], answer: 1, why: "O DHCP, normalmente no router, dá aos aparelhos os seus endereços IP." },
      { objective: "O2", q: "Que comando testa se outro aparelho responde pela rede?", options: ["ipconfig", "dir", "cls", "ping"], answer: 3, why: "O ping envia uma mensagem de teste e mostra se chegam respostas." },
      { objective: "O2", q: "Que endereço é mais provavelmente um endereço normal de uma rede de casa?", options: ["192.168.1.25", "169.254.10.3", "999.1.1.1", "www.home"], answer: 0, why: "192.168.x.x é uma gama comum em casa; 169.254 quer dizer que o DHCP falhou, e 999 não é válido." },
      { objective: "O3", q: "Que teclas abrem o Gestor de Tarefas no Windows?", options: ["Ctrl + P", "Ctrl + Shift + Esc", "Alt + Tab", "Windows + L"], answer: 1, why: "Ctrl + Shift + Esc abre o Gestor de Tarefas; Windows + L bloqueia o ecrã." },
      { objective: "O3", q: "No Mac, que ferramenta mostra os programas em execução?", options: ["Monitor de Atividade", "Notas", "Fotografias", "Calendário"], answer: 0, why: "O Monitor de Atividade é a versão Mac do Gestor de Tarefas." },
      { objective: "O3", q: "Afasta-se da sua secretária no trabalho. O que faz?", options: ["Deixa o ecrã aberto", "Desliga o antivírus", "Bloqueia o ecrã", "Entra como administrador"], answer: 2, why: "Bloquear o ecrã impede outras pessoas de usar a sua conta." },
      { objective: "O4", q: "Ponha por ordem: Testar a teoria, Identificar o problema, Criar uma teoria.", options: ["Teoria, Identificar, Testar", "Testar, Teoria, Identificar", "Identificar, Testar, Teoria", "Identificar, Teoria, Testar"], answer: 3, why: "Identificar o problema, criar uma teoria e depois testá-la." },
      { objective: "O4", q: "O que deve fazer antes de mudar alguma coisa no computador de um utilizador?", options: ["Fazer cópia de segurança dos dados importantes", "Apagar ficheiros antigos", "Mudar a palavra-passe dele", "Reinstalar o sistema"], answer: 0, why: "Fazer primeiro a cópia de segurança protege os dados do utilizador se a solução correr mal." },
      { objective: "O4", q: "Qual é o ÚLTIMO passo do método de resolução de problemas?", options: ["Testar a teoria", "Documentar o que encontrou, o que fez e o resultado", "Identificar o problema", "Reiniciar o computador"], answer: 1, why: "O passo 6 é documentar, para que outros possam aprender e o registo fique completo." },
      { objective: "O5", q: "O que pertence a um ticket de apoio?", options: ["A sua opinião sobre o utilizador", "Piadas sobre o problema", "Os passos feitos e o resultado", "Os dados bancários do utilizador"], answer: 2, why: "Os passos e os resultados deixam qualquer técnico seguir o que aconteceu." },
      { objective: "O5", q: "Quando deve fechar um ticket?", options: ["Logo que começa a trabalhar", "Depois de o utilizador confirmar que está resolvido", "Quando o utilizador deixa de responder durante uma hora", "Antes de testar a solução"], answer: 1, why: "Confirmar com o utilizador garante que o problema está mesmo resolvido." },
      { objective: "O5", q: "Que resposta é a melhor para um utilizador?", options: ["\"A sua concessão DHCP falhou, claro.\"", "\"Fez mal outra vez.\"", "\"Pergunte a outra pessoa.\"", "\"O seu portátil não conseguiu obter um endereço de rede. Reiniciei-o e agora funciona. Ligue se voltar a acontecer.\""], answer: 3, why: "Usa palavras simples, não culpa ninguém e diz ao utilizador o que fazer a seguir." },
      { objective: "O6", q: "Onde deve ver os preços e as formas de fazer o exame A+ atuais antes de marcar?", options: ["No site oficial da CompTIA", "Num comentário nas redes sociais", "Num livro antigo", "Num anúncio que aparece no ecrã"], answer: 0, why: "Só o site oficial tem os preços, as versões e as opções atuais." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 3, 5, 8, 9, 10, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Nota sobre o computador", objective: "O3", notYet: "Falta a versão do SO, o armazenamento livre ou as atualizações.", meets: "Indica o SO e a versão, o armazenamento livre, o programa que usa mais memória e o estado das atualizações.", exceeds: "Também indica o processador e a RAM e diz o que querem dizer para a velocidade." },
      { name: "Verificação da rede", objective: "O2", notYet: "Sem endereço IP nem gateway, ou o ping não foi tentado.", meets: "Anota o endereço IP e o gateway e o resultado do ping ao gateway e a um site.", exceeds: "Explica o que os resultados quereriam dizer se um ping falhasse, incluindo um endereço 169.254." },
      { name: "Passos de resolução de problemas", objective: "O4", notYet: "Faltam passos ou estão fora de ordem, ou a solução é um palpite.", meets: "Os seis passos por ordem, com o que foi perguntado, testado e feito.", exceeds: "Inclui uma segunda teoria ou um momento de escalar, e uma forma de evitar que volte a acontecer." },
      { name: "Ticket e resposta", objective: "O5", notYet: "O ticket é vago ou a resposta culpa o utilizador ou usa palavras técnicas difíceis.", meets: "Todos os campos do ticket estão preenchidos; a resposta é educada, simples e diz o que acontece a seguir.", exceeds: "Outra pessoa conseguiria seguir o ticket sem fazer nenhuma pergunta." },
      { name: "Plano de estudo e de exames", objective: "O6", notYet: "Sem datas, ou faltam domínios.", meets: "Datas-alvo para o Core 1 e o Core 2, todos os domínios com o seu peso, horas por semana.", exceeds: "O plano dá mais semanas aos domínios com mais peso e diz onde ver o preço e pedir ajuda com os custos." },
      { name: "Palavras de hardware", objective: "O1", notYet: "As partes do hardware têm nomes errados na nota ou no ticket.", meets: "As partes e as portas têm os nomes certos.", exceeds: "Liga um sintoma a uma parte provável, por exemplo lento com muitos programas abertos e pouca RAM." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que marcam ou passam no A+ Core 1 ou Core 2 em 6 meses (inquérito de seguimento)",
      "Alunos que se candidatam ou começam um emprego de apoio informático, help desk ou técnico em 6 meses",
      "Os programas parceiros (centros de emprego, serviços para antigos militares e de reintegração) dizem que os alunos entram em formações ou empregos de informática"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador Windows ou Mac com internet (próprio ou da biblioteca; a linha de comandos pode estar bloqueada em alguns computadores partilhados)",
      "Papel e caneta, ou um documento, para as notas, o ticket e o plano",
      "As páginas oficiais da CompTIA do A+ Core 1 e Core 2",
      "Cerca de 90 minutos no total, em sessões curtas, mais tempo de estudo contínuo para os exames"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos; usem os resultados para decidir que lições precisam de mais tempo.",
      "Se tiver um computador velho e sem ficha na tomada, mostre as partes com a caixa aberta; os alunos não abrem aparelhos sozinhos, a não ser que tenham formação e supervisão.",
      "Numa sala de informática, confirme que a linha de comandos funciona antes da Lição 3, ou mostre a página das definições de rede.",
      "Ponha os alunos em pares para fazerem o papel de utilizador e de técnico na Lição 6, e depois troquem.",
      "Lembre aos alunos que este curso os prepara e não dá o A+; ajude-os a encontrar programas locais que ajudam com os custos dos exames.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
