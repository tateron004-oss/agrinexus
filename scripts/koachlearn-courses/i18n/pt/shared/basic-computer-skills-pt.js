"use strict";

// Koach Learn course (Portuguese translation of shared/basic-computer-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Windows and Mac button names are given in Portuguese with the English name in brackets the first time, because many computers show English.

module.exports = {
  id: "basic-computer-skills-pt",
  lang: "pt",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Competências Básicas de Informática",
  skills: "Ligar e desligar um computador, Usar um rato ou um touchpad, Escrever com o teclado, Abrir e fechar aplicações e janelas, Guardar e encontrar ficheiros em pastas, Manter um computador atualizado",
  outcome: "ligar um computador Windows ou Mac e iniciar sessão, usar o rato e o teclado com confiança, abrir uma aplicação, escrever e guardar uma nota curta numa pasta que você criou, encontrá-la mais tarde e desligar o computador da forma certa.",
  about: [
    "Este curso é para quem se sente inseguro diante de um computador: pessoas que nunca usaram um, pessoas que aprenderam há muitos anos e pessoas que usam sobretudo o telefone. Avançamos um pequeno passo de cada vez, e nada do que você fizer nestas lições vai estragar o computador.",
    "No Capítulo 1 você aprende as partes de um computador, como ligá-lo e iniciar sessão, e como usar o rato e o teclado. No Capítulo 2 você abre aplicações e janelas, guarda um ficheiro numa pasta, encontra-o outra vez e mantém o computador saudável.",
    "Os passos são dados para computadores Windows e computadores Mac. Cada lição dura cerca de cinco minutos. Uma verificação de conhecimentos termina cada capítulo e um questionário de 20 perguntas termina o curso."
  ],
  finalTask: "Ligue o computador e inicie sessão. Crie uma nova pasta chamada \"Prática\" dentro da pasta Documentos. Abra o Bloco de Notas (Notepad, no Windows) ou o TextEdit (no Mac) e escreva uma nota curta, por exemplo uma lista de perguntas para a próxima consulta médica ou uma mensagem para um neto, com letra maiúscula no início de cada frase. Guarde-a na pasta Prática com um nome claro, feche a aplicação, encontre o ficheiro outra vez e abra-o, e depois desligue o computador da forma certa.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos com pouca ou nenhuma experiência com computadores: pessoas mais velhas, pessoas que voltam ao trabalho ou à comunidade, pessoas à procura de emprego e cuidadores que querem usar sozinhos um computador em casa, na biblioteca ou num centro de emprego.",
    startingPoint: "Podem usar um telemóvel para chamadas ou SMS. Muitos nunca usaram um rato, nunca escreveram num teclado completo, nunca abriram uma aplicação num computador, nunca guardaram um ficheiro numa pasta nem desligaram um computador da forma certa.",
    gap: "Candidaturas a emprego, serviços da biblioteca, a escola e muitos formulários precisam de um computador. Sem estas bases, as pessoas têm de pedir ajuda a outros, perdem o trabalho porque não foi guardado, ou evitam os computadores de todo.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; cada parte e cada botão é nomeado e descrito",
      "Aparelhos: um computador de secretária ou portátil Windows ou Mac, em casa, numa biblioteca ou num centro de emprego",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total, com tempo extra para praticar com o rato",
      "Custo: só as aplicações gratuitas que já vêm no computador (Bloco de Notas ou TextEdit)",
      "Computadores partilhados: os alunos seguem as regras do pessoal para iniciar sessão e não guardam ficheiros privados nos computadores da biblioteca"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um computador de secretária ou portátil", action: "dizer o nome das suas partes principais, ligá-lo e iniciar sessão", standard: "sem ajuda, nomeando o ecrã, o teclado, o rato ou o touchpad e o botão de ligar" },
    { id: "O2", condition: "Usando um rato ou um touchpad", action: "apontar, clicar, fazer duplo clique, clicar com o botão direito e deslizar a página", standard: "fazendo cada ação corretamente quando pedido" },
    { id: "O3", condition: "Usando o teclado", action: "escrever uma frase com letras maiúsculas, espaços e pontuação e corrigir erros", standard: "com maiúscula no início de cada frase e cada erro corrigido com Backspace ou anular" },
    { id: "O4", condition: "Num computador Windows ou Mac", action: "abrir uma aplicação pelo nome, mudar o tamanho da janela ou minimizá-la, trazê-la de volta e fechá-la", standard: "sem ajuda" },
    { id: "O5", condition: "Com uma nota curta para guardar", action: "criar uma pasta, guardar nela a nota com um nome claro e encontrá-la outra vez", standard: "com o ficheiro na pasta certa e aberto outra vez mais tarde" },
    { id: "O6", condition: "Quando um computador precisa de cuidado ou tem um problema", action: "instalar atualizações, reiniciar, desligar da forma certa e escolher um lugar seguro para pedir ajuda", standard: "usando o menu para desligar e nunca ligando para um número de uma janela de aviso" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Ganhar confiança",
      lessons: [
        {
          objectives: ["O1"],
          title: "As partes de um computador, e como ligá-lo",
          minutes: 5,
          goal: "Dizer o nome das partes principais de um computador, ligá-lo e iniciar sessão.",
          text: [
            "Um computador de secretária tem um ecrã (monitor), um teclado, um rato e uma caixa ou um ecrã onde está o próprio computador. Um portátil tem tudo isto numa só peça que se abre; em vez de rato, tem uma superfície plana de toque chamada touchpad.",
            "Para o ligar, carregue uma vez no botão de ligar. Normalmente tem um círculo com uma linha no topo. Num portátil fica muitas vezes no canto superior direito do teclado ou de lado. Espere que o ecrã acorde.",
            "A maioria dos computadores pede então para iniciar sessão com uma palavra-passe ou um PIN. Escreva-o e carregue em Enter. Num computador partilhado, como o de uma biblioteca, o pessoal vai dizer-lhe como iniciar sessão."
          ],
          steps: ["Encontre o botão de ligar (um círculo com uma linha no topo).", "Carregue nele uma vez e solte.", "Espere pelo ecrã de início de sessão.", "Escreva a sua palavra-passe ou PIN e carregue em Enter."],
          words: [["Monitor", "o ecrã de um computador de secretária."], ["Portátil", "um computador que se abre, com o ecrã e o teclado numa só peça."], ["Touchpad", "a superfície plana de toque num portátil, que funciona como um rato."], ["Iniciar sessão", "escrever a sua palavra-passe ou PIN para o computador saber que é você."]],
          slides: [
            { title: "Partes de um computador", bullets: ["Ecrã (monitor)", "Teclado", "Rato, ou um touchpad num portátil"] },
            { title: "Ligar", bullets: ["Botão de ligar: um círculo com uma linha no topo", "Carregue uma vez e espere"] },
            { title: "Iniciar sessão", bullets: ["Escreva a sua palavra-passe ou PIN", "Carregue em Enter", "Num computador partilhado, pergunte ao pessoal"] }
          ],
          tryIt: "Aponte para o ecrã, o teclado e o rato (ou o touchpad) de um computador perto de você. Encontre o botão de ligar, ligue o computador e inicie sessão.",
          youCanNow: "dizer o nome das partes de um computador, ligá-lo e iniciar sessão.",
          quickCheck: [
            { objective: "O1", q: "O que é um monitor?", options: ["O rato", "O ecrã", "O cabo de energia", "O teclado"], answer: 1, why: "O monitor é o ecrã onde você vê o seu trabalho." },
            { objective: "O1", q: "Você quer usar um computador da biblioteca e ele pede para iniciar sessão. O que faria?", options: ["Manter o botão de ligar carregado até ele desligar", "Tirar a ficha da tomada", "Escrever letras ao acaso até abrir", "Perguntar ao pessoal como iniciar sessão"], answer: 3, why: "Num computador partilhado, o pessoal diz-lhe como iniciar sessão." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usar o rato ou o touchpad",
          minutes: 5,
          goal: "Apontar, clicar, fazer duplo clique, clicar com o botão direito e deslizar a página.",
          text: [
            "O rato move o ponteiro, a pequena seta no ecrã. Pouse a mão no rato e deslize-o com cuidado na mesa; a seta segue-o. Se ficar sem espaço, levante o rato e pouse-o outra vez no meio.",
            "Clicar: carregue uma vez no botão esquerdo para escolher algo. Duplo clique: carregue duas vezes rápido no botão esquerdo para abrir algo, como uma pasta. Clique direito: carregue uma vez no botão direito para ver um pequeno menu de opções. Deslizar: rode a pequena roda entre os botões para mover uma página para cima ou para baixo.",
            "No touchpad de um portátil, deslize um dedo para mover a seta, toque ou carregue uma vez para clicar, e deslize dois dedos para cima ou para baixo para deslizar a página. Para o clique direito, toque com dois dedos."
          ],
          steps: ["Deslize o rato para mover a seta.", "Clicar: carregue uma vez no botão esquerdo.", "Duplo clique: carregue duas vezes rápido no botão esquerdo.", "Clique direito: carregue uma vez no botão direito para ver um menu.", "Deslizar: rode a roda, ou deslize dois dedos no touchpad."],
          words: [["Ponteiro", "a pequena seta no ecrã que se move com o rato."], ["Clicar", "carregar uma vez no botão esquerdo do rato."], ["Duplo clique", "carregar duas vezes rápido no botão esquerdo para abrir algo."], ["Clique direito", "carregar no botão direito para ver um menu de opções."], ["Deslizar a página", "mover uma página para cima ou para baixo (em inglês, scroll)."]],
          slides: [
            { title: "Mover o ponteiro", bullets: ["Deslize o rato com cuidado", "Sem espaço? Levante-o e pouse-o outra vez no meio"] },
            { title: "Cliques", bullets: ["Clicar: botão esquerdo uma vez, para escolher", "Duplo clique: duas vezes rápido, para abrir", "Clique direito: botão direito, para um menu"] },
            { title: "Deslizar a página", bullets: ["Rode a roda do rato", "Touchpad: deslize dois dedos para cima ou para baixo"] },
            { title: "Touchpad", bullets: ["Um dedo move a seta", "Toque para clicar", "Toque com dois dedos para o clique direito"] }
          ],
          tryIt: "Abra qualquer página da internet ou documento. Desça na página e volte a subir. Clique com o botão direito num espaço vazio e leia o menu; depois carregue na tecla Esc para o fechar. Faça duplo clique numa palavra para a selecionar.",
          youCanNow: "apontar, clicar, fazer duplo clique, clicar com o botão direito e deslizar a página com um rato ou um touchpad.",
          quickCheck: [
            { objective: "O2", q: "Para que serve deslizar a página?", options: ["Move uma página para cima ou para baixo", "Abre uma pasta", "Desliga o computador", "Escreve uma letra maiúscula"], answer: 0, why: "Rodar a roda do rato, ou deslizar dois dedos no touchpad, move a página." },
            { objective: "O2", q: "No touchpad de um portátil, você quer ver o pequeno menu de opções. O que faria?", options: ["Deslizar um dedo", "Carregar no botão de ligar", "Tocar com dois dedos", "Carregar em Caps Lock"], answer: 2, why: "No touchpad, tocar com dois dedos é o clique direito." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever com o teclado",
          minutes: 5,
          goal: "Escrever uma frase com letras maiúsculas, espaços e pontuação, e corrigir erros.",
          text: [
            "O teclado tem letras, números e teclas especiais. A barra comprida em baixo é a barra de espaço. Enter (Return no Mac) começa uma nova linha ou diz \"avançar\". Backspace (Delete no Mac) apaga a letra à esquerda da linha que pisca, chamada cursor.",
            "Para uma letra maiúscula, mantenha Shift carregado e carregue na letra. Caps Lock põe todas as letras em maiúscula até carregar nele outra vez. Shift também escreve o símbolo de cima de uma tecla, como ? ou !.",
            "Os atalhos poupam tempo. No Windows use Ctrl; no Mac use Command. Ctrl+Z anula um erro, Ctrl+C copia, Ctrl+V cola e Ctrl+S guarda."
          ],
          steps: ["Clique onde quer escrever; o cursor pisca ali.", "Mantenha Shift carregado e carregue numa letra para a maiúscula.", "Carregue na barra de espaço entre as palavras.", "Carregue em Backspace (Delete no Mac) para corrigir um erro.", "Carregue em Enter (Return no Mac) para uma nova linha."],
          words: [["Cursor", "a linha que pisca e mostra onde vai aparecer o que você escreve."], ["Shift", "a tecla que se mantém carregada para uma maiúscula ou o símbolo de cima."], ["Backspace", "a tecla que apaga a letra à esquerda (Delete no Mac)."], ["Atalho", "uma combinação de teclas que faz uma tarefa depressa, como Ctrl+S para guardar."]],
          slides: [
            { title: "Teclas importantes", bullets: ["Barra de espaço: um espaço", "Enter (Return no Mac): nova linha", "Backspace (Delete no Mac): apagar uma letra"] },
            { title: "Maiúsculas e símbolos", bullets: ["Shift + letra = uma maiúscula", "Caps Lock = tudo em maiúsculas até carregar outra vez", "Shift também escreve ? e !"] },
            { title: "Atalhos úteis", bullets: ["Windows: Ctrl. Mac: Command", "Z anular, C copiar, V colar, S guardar"] }
          ],
          tryIt: "Abra uma caixa de pesquisa ou um documento em branco e escreva: O meu nome é ___ e estou a aprender a usar computadores! Use uma letra maiúscula no início, depois apague uma palavra com Backspace e escreva-a outra vez.",
          youCanNow: "escrever frases com maiúsculas e pontuação, corrigir erros e usar os atalhos mais comuns.",
          quickCheck: [
            { objective: "O3", q: "O que faz Ctrl+C no Windows?", options: ["Guarda o seu trabalho", "Anula um erro", "Copia", "Fecha a aplicação"], answer: 2, why: "Ctrl+C copia; Ctrl+V cola." },
            { objective: "O3", q: "Tudo o que você escreve sai em letras maiúsculas. O que faria?", options: ["Reiniciar o computador", "Carregar outra vez em Caps Lock para o desativar", "Manter Shift carregado em cada letra", "Comprar um teclado novo"], answer: 1, why: "Caps Lock põe todas as letras em maiúscula até carregar nele outra vez." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Ganhar confiança",
        questions: [
          { objective: "O1", q: "O que é um touchpad?", options: ["O ecrã", "Um tipo de impressora", "A superfície plana de toque num portátil, que funciona como um rato", "Um cabo"], answer: 2, why: "Num portátil, o touchpad faz o trabalho do rato." },
          { objective: "O1", q: "Como é normalmente o botão de ligar?", options: ["Uma estrela", "Um círculo com uma linha no topo", "Um coração", "Um ponto de interrogação"], answer: 1, why: "Esse é o símbolo comum de ligar." },
          { objective: "O2", q: "Como se abre uma pasta com o rato?", options: ["Um clique direito", "Rodar a roda", "Fazer duplo clique nela", "Abanar o rato"], answer: 2, why: "O duplo clique abre as coisas." },
          { objective: "O3", q: "Como se escreve uma letra maiúscula?", options: ["Carregar em Enter", "Manter Shift carregado e carregar na letra", "Carregar em Backspace", "Carregar duas vezes na barra de espaço"], answer: 1, why: "Shift mais uma letra dá uma maiúscula." },
          { objective: "O3", q: "Você escreveu uma letra errada. Que tecla a apaga?", options: ["Barra de espaço", "Shift", "Caps Lock", "Backspace (Delete no Mac)"], answer: 3, why: "Backspace apaga a letra à esquerda do cursor." }
        ]
      }
    },
    {
      name: "Capítulo 2: Aplicações, ficheiros e cuidados",
      lessons: [
        {
          objectives: ["O4"],
          title: "Abrir aplicações e usar janelas",
          minutes: 5,
          goal: "Abrir uma aplicação, mudar o tamanho da janela e fechá-la.",
          text: [
            "As aplicações (programas) fazem tarefas: um navegador para a internet, uma aplicação de escrita para notas, uma aplicação de fotografias para imagens. No Windows, clique no botão Iniciar (Start, o logótipo do Windows em baixo no ecrã) e escreva o nome da aplicação. No Mac, clique na lupa no canto superior direito (Spotlight), escreva o nome e carregue em Return.",
            "Cada aplicação abre numa janela. No canto de cima há pequenos botões. No Windows, no canto superior direito: um traço (minimizar, esconder por agora), um quadrado (maximizar, encher o ecrã) e um X (fechar). No Mac, no canto superior esquerdo: vermelho (fechar), amarelo (minimizar) e verde (ecrã inteiro).",
            "As aplicações minimizadas esperam na barra de tarefas (Windows, em baixo) ou na Dock (Mac). Clique no ícone da aplicação ali para a trazer de volta."
          ],
          steps: ["Windows: clique em Iniciar e escreva o nome da aplicação. Mac: clique na lupa e escreva o nome.", "Carregue em Enter ou Return para a abrir.", "Use o botão de minimizar para a esconder.", "Clique no ícone dela na barra de tarefas ou na Dock para a trazer de volta.", "Feche-a com o X (Windows) ou o botão vermelho (Mac)."],
          words: [["Aplicação / programa", "software que faz uma tarefa, como escrever ou navegar na internet."], ["Janela", "a caixa onde uma aplicação abre."], ["Minimizar", "esconder uma janela por agora, sem a fechar."], ["Barra de tarefas / Dock", "a fila de ícones de aplicações em baixo no ecrã (barra de tarefas no Windows, Dock no Mac)."]],
          slides: [
            { title: "Abrir uma aplicação", bullets: ["Windows: botão Iniciar, escreva o nome", "Mac: lupa (Spotlight), escreva o nome"] },
            { title: "Botões da janela no Windows", bullets: ["Canto superior direito", "Traço = minimizar, quadrado = maximizar, X = fechar"] },
            { title: "Botões da janela no Mac", bullets: ["Canto superior esquerdo", "Vermelho = fechar, amarelo = minimizar, verde = ecrã inteiro"] },
            { title: "Trazer de volta", bullets: ["Clique no ícone na barra de tarefas (Windows)", "Ou na Dock (Mac)"] }
          ],
          tryIt: "Abra o Bloco de Notas (Notepad, no Windows) ou o TextEdit (no Mac) escrevendo o nome em Iniciar ou no Spotlight. Minimize-o, traga-o de volta pela barra de tarefas ou pela Dock e depois faça-o encher o ecrã.",
          youCanNow: "abrir qualquer aplicação pelo nome, passar de uma janela para outra e fechá-las.",
          quickCheck: [
            { objective: "O4", q: "No Windows, o que faz o botão quadrado no canto superior direito de uma janela?", options: ["Fecha a janela", "Esconde a janela", "Abre o Spotlight", "Faz a janela encher o ecrã"], answer: 3, why: "O quadrado é maximizar; o traço esconde a janela e o X fecha-a." },
            { objective: "O4", q: "Você minimizou a sua aplicação de escrita e agora quer trazê-la de volta. O que faria?", options: ["Clicar no ícone dela na barra de tarefas (Windows) ou na Dock (Mac)", "Desligar o computador", "Abrir uma pasta nova", "Carregar em Backspace"], answer: 0, why: "As aplicações minimizadas esperam na barra de tarefas ou na Dock até você clicar nelas." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Guardar e encontrar ficheiros em pastas",
          minutes: 5,
          goal: "Guardar uma nota numa pasta que você criou e encontrá-la outra vez.",
          text: [
            "Um ficheiro é uma coisa guardada: uma carta, uma fotografia, uma lista. Uma pasta guarda ficheiros, como uma gaveta de um arquivo. A pasta Documentos é um bom lugar para os seus ficheiros.",
            "Para criar uma pasta: no Windows abra o Explorador de Ficheiros (File Explorer, o ícone da pasta amarela), clique em Documentos e escolha Novo e depois Pasta. No Mac abra o Finder (o ícone da cara azul), clique em Documentos, abra o menu Ficheiro e escolha Nova pasta. Escreva um nome e carregue em Enter ou Return.",
            "Para guardar: carregue em Ctrl+S (Command+S no Mac). Abre-se uma caixa; escolha a pasta, escreva um nome de ficheiro claro como \"Perguntas para a Dra. Lee\" e clique em Guardar. Para encontrar um ficheiro mais tarde, abra o Explorador de Ficheiros ou o Finder e procure na pasta, ou escreva parte do nome na caixa de pesquisa."
          ],
          steps: ["Abra o Explorador de Ficheiros (Windows) ou o Finder (Mac).", "Vá a Documentos e crie uma pasta nova.", "Na sua aplicação, carregue em Ctrl+S (Command+S no Mac).", "Escolha a pasta, escreva um nome claro e clique em Guardar.", "Para o encontrar: abra a pasta, ou pesquise parte do nome."],
          words: [["Ficheiro", "uma coisa guardada, como uma carta ou uma fotografia."], ["Pasta", "um lugar que guarda ficheiros, como uma gaveta."], ["Explorador de Ficheiros / Finder", "a aplicação para ver ficheiros e pastas (Windows / Mac)."]],
          slides: [
            { title: "Ficheiros e pastas", bullets: ["Ficheiro = uma coisa guardada", "Pasta = uma gaveta que guarda ficheiros", "Documentos é um bom lugar"] },
            { title: "Criar uma pasta", bullets: ["Windows: Explorador de Ficheiros, Documentos, Novo, Pasta", "Mac: Finder, Documentos, Ficheiro, Nova pasta"] },
            { title: "Guardar com um nome claro", bullets: ["Ctrl+S (Command+S no Mac)", "Escolha a pasta, dê um nome, clique em Guardar"] },
            { title: "Encontrar outra vez", bullets: ["Abra a pasta", "Ou pesquise parte do nome"] }
          ],
          tryIt: "Crie uma pasta chamada \"Prática\" em Documentos. Escreva uma lista curta no Bloco de Notas ou no TextEdit, guarde-a na pasta Prática como \"A minha primeira nota\", feche a aplicação e depois encontre e abra o ficheiro outra vez.",
          youCanNow: "criar pastas, guardar ficheiros com nomes claros e encontrá-los outra vez.",
          quickCheck: [
            { objective: "O5", q: "O que é um ficheiro?", options: ["Uma coisa guardada, como uma carta, uma fotografia ou uma lista", "Uma gaveta que guarda pastas", "A aplicação que abre a internet", "O botão de ligar"], answer: 0, why: "Um ficheiro é uma coisa guardada; uma pasta guarda ficheiros." },
            { objective: "O5", q: "Você terminou uma nota e quer guardá-la. O que faria?", options: ["Fechar a aplicação sem guardar", "Desligar o computador", "Desligar o teclado", "Carregar em Ctrl+S (Command+S no Mac), escolher a pasta, escrever um nome claro e clicar em Guardar"], answer: 3, why: "Guardar põe a nota numa pasta com um nome, para a poder encontrar mais tarde." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter o seu computador saudável",
          minutes: 4,
          goal: "Instalar atualizações, reiniciar e desligar da forma certa, e saber onde pedir ajuda.",
          text: [
            "As atualizações corrigem problemas e fecham falhas de segurança. No Windows, abra as Definições (Settings) e escolha Windows Update. No Mac, abra as Definições do Sistema (System Settings), escolha Geral e depois Atualização de Software. Instale as atualizações quando pedido e deixe o computador reiniciar.",
            "Se o computador estiver lento ou alguma coisa bloquear, guarde o seu trabalho e reinicie-o. Isso resolve muitos problemas. Para desligar no Windows: Iniciar, depois o ícone de energia, depois Encerrar (Shut down). No Mac: o menu Apple no canto superior esquerdo, depois Desligar. Não tire apenas a ficha nem mantenha o botão de ligar carregado, a não ser que esteja completamente bloqueado.",
            "Se uma janela de aviso disser que o seu computador tem um vírus e der um número de telefone, não ligue; feche-a. Peça ajuda a alguém de confiança, a uma sessão de apoio informático da biblioteca ou à loja onde comprou o computador."
          ],
          steps: ["Procure atualizações: Windows Update (Windows) ou Atualização de Software (Mac).", "Instale-as e deixe o computador reiniciar.", "Lento ou bloqueado? Guarde e reinicie.", "Desligar: Iniciar, ícone de energia, Encerrar (Windows) ou menu Apple, Desligar (Mac).", "Precisa de ajuda? Uma pessoa de confiança, o apoio informático da biblioteca ou a loja."],
          words: [["Atualização", "uma correção gratuita do fabricante que melhora a segurança e as funções."], ["Reiniciar", "desligar e voltar a ligar o computador num só passo."], ["Desligar", "apagar o computador por completo da forma certa."]],
          sources: [{ name: "FTC (agência de proteção do consumidor dos EUA): como reconhecer, evitar e denunciar burlas de apoio técnico", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Instalar atualizações", bullets: ["Windows: Definições, Windows Update", "Mac: Definições do Sistema, Geral, Atualização de Software"] },
            { title: "Reiniciar resolve muito", bullets: ["Lento ou bloqueado? Guarde e depois reinicie"] },
            { title: "Desligar da forma certa", bullets: ["Windows: Iniciar, ícone de energia, Encerrar", "Mac: menu Apple, Desligar", "Não tire apenas a ficha"] },
            { title: "Pedir ajuda", bullets: ["Nunca ligue para números de avisos de vírus", "Peça a alguém de confiança ou ao apoio informático da biblioteca"] }
          ],
          tryIt: "Tarefa final: ligue e inicie sessão, crie uma pasta Prática, escreva e guarde uma nota curta com maiúsculas no Bloco de Notas ou no TextEdit, feche-a, encontre-a e abra-a outra vez, procure atualizações e depois desligue da forma certa.",
          youCanNow: "usar um computador do início ao fim: iniciar sessão, trabalhar, guardar, encontrar os seus ficheiros e desligar com segurança.",
          quickCheck: [
            { objective: "O6", q: "Onde encontra as atualizações num computador Windows?", options: ["Na Reciclagem", "Nas Definições, em Windows Update", "No relógio da barra de tarefas", "No Bloco de Notas"], answer: 1, why: "As atualizações do Windows estão nas Definições, em Windows Update." },
            { objective: "O6", q: "Você terminou o dia num computador Windows. O que faria?", options: ["Tirar a ficha", "Manter o botão de ligar carregado", "Clicar em Iniciar, depois no ícone de energia, depois em Encerrar", "Fechar a tampa enquanto uma aplicação está a guardar"], answer: 2, why: "Desligar pelo menu é a forma certa; tirar a ficha pode causar problemas." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Aplicações, ficheiros e cuidados",
        questions: [
          { objective: "O4", q: "No Windows, como abre uma aplicação que não vê?", options: ["Desligar o ecrã", "Tirar a ficha do computador", "Carregar em Backspace", "Clicar em Iniciar e escrever o nome dela"], answer: 3, why: "A pesquisa de Iniciar encontra qualquer aplicação pelo nome." },
          { objective: "O4", q: "No Mac, o botão vermelho no canto superior esquerdo de uma janela:", options: ["Põe-na em ecrã inteiro", "Esconde-a", "Fecha-a", "Imprime-a"], answer: 2, why: "Vermelho fecha, amarelo minimiza, verde enche o ecrã." },
          { objective: "O5", q: "O que é uma pasta?", options: ["Um tipo de teclado", "Um lugar que guarda ficheiros, como uma gaveta", "Uma atualização", "Uma página da internet"], answer: 1, why: "As pastas mantêm os ficheiros organizados." },
          { objective: "O5", q: "Que teclas guardam o seu trabalho no Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S guarda (Command+S no Mac)." },
          { objective: "O6", q: "O computador está lento e um programa bloqueou. Um bom primeiro passo é:", options: ["Ligar para um número de uma janela de aviso", "Guardar o seu trabalho e reiniciar", "Deitar-lhe água", "Comprar um computador novo"], answer: 1, why: "Reiniciar resolve muitos problemas." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Competências Básicas de Informática",
    questions: [
      { objective: "O1", q: "Para que parte olha para ver o seu trabalho?", options: ["O cabo de energia", "O rato", "O ecrã (monitor)", "O teclado"], answer: 2, why: "O ecrã mostra o que o computador está a fazer." },
      { objective: "O1", q: "Um portátil é:", options: ["Um carregador de telefone", "Um tipo de rato", "Uma impressora", "Um computador que se abre, com o ecrã e o teclado juntos"], answer: 3, why: "Os portáteis são tudo-em-um e fáceis de levar." },
      { objective: "O1", q: "Depois de o computador ligar, normalmente você:", options: ["Tira a ficha", "Inicia sessão com uma palavra-passe ou PIN", "Carrega em Caps Lock", "Fecha a tampa"], answer: 1, why: "Iniciar sessão diz ao computador que é você." },
      { objective: "O2", q: "O ponteiro é:", options: ["Uma pasta", "O botão de ligar", "A pequena seta que se move com o rato", "Uma tecla"], answer: 2, why: "O ponteiro segue o rato." },
      { objective: "O2", q: "O seu rato chega à beira da mesa. O que faz?", options: ["Vira-o ao contrário", "Carrega nele com mais força", "Reinicia o computador", "Levanta-o e pousa-o outra vez no meio"], answer: 3, why: "Levantar o rato não move o ponteiro." },
      { objective: "O2", q: "Um clique direito mostra:", options: ["Só as opções de energia", "Um pequeno menu de opções", "Um computador novo", "Nunca mostra nada"], answer: 1, why: "O clique direito abre um menu." },
      { objective: "O2", q: "Num touchpad, como desliza a página?", options: ["Carregar em Shift", "Tocar no botão de ligar", "Deslizar dois dedos para cima ou para baixo", "Fechar a tampa"], answer: 2, why: "Dois dedos deslizam a página num touchpad." },
      { objective: "O3", q: "A linha que pisca onde aparece o que você escreve é o:", options: ["Monitor", "Pasta", "Dock", "Cursor"], answer: 3, why: "O cursor mostra onde as letras vão aparecer." },
      { objective: "O3", q: "Caps Lock:", options: ["Apaga uma palavra", "Põe todas as letras em maiúscula até carregar outra vez", "Guarda o ficheiro", "Desliga o computador"], answer: 1, why: "Prende as maiúsculas." },
      { objective: "O3", q: "Que atalho anula um erro no Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z é anular (Command+Z no Mac)." },
      { objective: "O3", q: "Enter (Return no Mac) serve para:", options: ["Desligar o ecrã", "Apagar uma letra", "Fazer uma maiúscula", "Começar uma nova linha"], answer: 3, why: "Enter começa uma nova linha ou diz avançar." },
      { objective: "O4", q: "No Mac, como pode abrir uma aplicação pelo nome?", options: ["Carregar no botão de ligar", "Clicar na lupa (Spotlight) e escrever o nome", "Clicar com o botão direito no ecrã", "Manter Shift carregado"], answer: 1, why: "O Spotlight encontra aplicações pelo nome." },
      { objective: "O4", q: "No Windows, o X no canto superior direito de uma janela:", options: ["Fecha-a", "Torna-a maior", "Guarda-a", "Esconde-a"], answer: 0, why: "O X fecha a janela." },
      { objective: "O4", q: "Uma janela minimizada vai para:", options: ["A barra de tarefas (Windows) ou a Dock (Mac)", "O lixo para sempre", "A impressora", "A internet"], answer: 0, why: "Clique no ícone dela ali para a trazer de volta." },
      { objective: "O5", q: "Qual é o melhor nome de ficheiro?", options: ["Perguntas para a Dra. Lee", "asdf", "Sem título", "1"], answer: 0, why: "Um nome claro ajuda a encontrá-lo mais tarde." },
      { objective: "O5", q: "A aplicação para ver ficheiros no Windows é:", options: ["Explorador de Ficheiros", "Spotlight", "Dock", "Safari"], answer: 0, why: "O Explorador de Ficheiros mostra ficheiros e pastas." },
      { objective: "O5", q: "Você não se lembra onde guardou um ficheiro. Pode:", options: ["Pesquisar parte do nome dele", "Reiniciar até ele aparecer", "Comprar um computador novo", "Desligar o rato"], answer: 0, why: "A pesquisa encontra ficheiros pelo nome." },
      { objective: "O6", q: "Porque é que se instalam atualizações?", options: ["Corrigem problemas e fecham falhas de segurança", "Apagam os seus ficheiros", "Custam dinheiro de cada vez", "Deixam o computador lento para sempre"], answer: 0, why: "As atualizações melhoram a segurança e corrigem problemas." },
      { objective: "O6", q: "Como se desliga um Mac da forma certa?", options: ["Menu Apple, depois Desligar", "Tirar a ficha", "Fechar a janela", "Carregar em Caps Lock"], answer: 0, why: "Use o menu Apple para desligar com segurança." },
      { objective: "O6", q: "Uma janela de aviso diz que você tem um vírus e para ligar para um número. Você deve:", options: ["Não ligar; fechá-la e pedir ajuda a alguém de confiança", "Ligar logo", "Dar-lhes a sua palavra-passe", "Pagar com um cartão-presente"], answer: 0, why: "Os avisos verdadeiros nunca pedem para ligar para um número." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Ligar e iniciar sessão",
        objective: "O1",
        notYet: "Precisa de ajuda para ligar o computador ou iniciar sessão.",
        meets: "Liga o computador e inicia sessão sem ajuda.",
        exceeds: "Também diz o nome das partes principais do computador."
      },
      {
        name: "Pasta e nota guardada",
        objective: "O5",
        notYet: "Falta a pasta Prática ou a nota guardada, ou a nota tem um nome como Sem título.",
        meets: "Uma pasta Prática em Documentos tem a nota, guardada com um nome claro.",
        exceeds: "Encontra o ficheiro outra vez usando a caixa de pesquisa e também a pasta."
      },
      {
        name: "Escrever a nota",
        objective: "O3",
        notYet: "Falta a nota, ou as frases não têm letras maiúsculas.",
        meets: "Uma nota curta com maiúscula no início de cada frase e os erros corrigidos.",
        exceeds: "Também usa bem a pontuação, como ? ou !, e usa Ctrl+Z (Command+Z) para anular."
      },
      {
        name: "Abrir e fechar a aplicação",
        objective: "O4",
        notYet: "Não consegue abrir o Bloco de Notas ou o TextEdit, ou não consegue fechá-lo.",
        meets: "Abre a aplicação pelo nome, fecha-a e depois encontra e abre o ficheiro guardado.",
        exceeds: "Também minimiza a janela e trá-la de volta pela barra de tarefas ou pela Dock."
      },
      {
        name: "Desligar",
        objective: "O6",
        notYet: "Tira a ficha do computador ou mantém o botão de ligar carregado.",
        meets: "Desliga da forma certa pelo menu Iniciar ou pelo menu Apple.",
        exceeds: "Também procura atualizações antes de desligar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter usado um computador sozinhos, por exemplo numa biblioteca ou num centro de emprego, nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que passam para um curso seguinte, como Noções Básicas de Internet ou Microsoft 365 e Google Docs",
      "Alunos que dizem ter feito uma tarefa real num computador, como uma carta ou uma candidatura a emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador de secretária ou portátil Windows ou Mac com rato ou touchpad",
      "Um acesso para iniciar sessão no computador (de casa, ou dado pelo pessoal da biblioteca ou da sala de informática)",
      "Bloco de Notas (Windows) ou TextEdit (Mac), que já vêm no computador",
      "Cerca de 60 minutos no total, em sessões curtas, mais tempo extra para praticar com o rato"
    ],
    facilitatorNotes: [
      "Prepare os acessos antes da aula, para a primeira lição não ser gasta com contas.",
      "Dê tempo extra com o rato aos alunos novos; deixe-os praticar o clique e o duplo clique nos ícones do ambiente de trabalho antes de avançar.",
      "Junte em grupos separados quem usa Windows e quem usa Mac, ou mostre no ecrã os dois conjuntos de passos.",
      "Nos computadores partilhados, peça aos alunos para apagarem os ficheiros de prática e terminarem a sessão no fim, e lembre-lhes que não guardem ali informações privadas.",
      "Deixe os alunos carregar em cada tecla e clicar em cada botão sozinhos; evite tirar-lhes o rato."
    ]
  }
};
