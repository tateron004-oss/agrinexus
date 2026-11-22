"use strict";

// Koach Learn course (Portuguese translation of shared/intro-iot.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Python and MicroPython code stays exactly as in the English. Technical names (Wi-Fi, Bluetooth, MQTT, LoRaWAN, ESP32, DHT22) stay in English and are explained in "words".

const FTC = { name: "FTC Consumer Advice: Securing Your Internet-Connected Devices at Home", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi online electronics simulator", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot-pt",
  lang: "pt",
  translationOf: "intro-iot",
  category: "Veterans (military)",
  name: "Introdução à Internet das Coisas (IoT)",
  skills: "Explicar como funcionam os sistemas de IoT, Escolher sensores e atuadores, Comparar formas de ligar aparelhos, Escrever uma regra de alerta simples, Proteger aparelhos ligados, Planear um projeto de IoT",
  outcome: "planear um projeto simples de monitorização com IoT, do sensor ao alerta: escolher o sensor, o aparelho, a ligação e a aplicação, escrever a regra de alerta num pequeno pedaço de código e listar os passos que mantêm os aparelhos seguros.",
  about: [
    "A Internet das Coisas (IoT, do inglês Internet of Things) são objetos do dia a dia com sensores e ligação à internet: termóstatos inteligentes, campainhas com câmara, pulseiras de exercício, sensores de solo nas machambas e nas fazendas, e os localizadores em camiões e contentores. As competências de IoT são usadas em trabalhos de manutenção de edifícios, logística, energia, agricultura e segurança, e muitos veteranos já conhecem as ideias pelos sensores, rádios e manutenção de equipamento.",
    "Este curso explica como funciona um sistema de IoT, camada a camada, como os aparelhos comunicam entre si, como uma regra simples transforma uma leitura numa ação e como evitar que os aparelhos ligados se tornem uma porta de entrada para atacantes. Não precisa de comprar nenhum equipamento. Uma lição mostra como experimentar um aparelho simulado no seu navegador de internet.",
    "Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Escreva um plano de uma página para um projeto de monitorização com IoT, por exemplo um alerta de temperatura para uma sala de servidores, uma arca congeladora de um banco alimentar ou uma horta que precisa de água: diga o sensor, o aparelho, como se liga e para onde vão os dados, desenhe o caminho dos dados do sensor até ao alerta, escreva a regra de alerta como uma pequena instrução if em Python e liste cinco passos que vai seguir para proteger os aparelhos.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Veteranos e militares em transição para a vida civil que exploram carreiras de tecnologia como apoio informático, manutenção e tecnologia de edifícios, localização em logística ou cibersegurança. Muitos trabalharam com rádios, sensores, veículos ou equipamento nas forças armadas.",
    startingPoint: "Sentem-se à vontade a seguir procedimentos e a usar um computador e um smartphone, e muitas vezes conhecem as verificações de equipamento e as comunicações. A maioria nunca escreveu código nem configurou um aparelho ligado.",
    gap: "Os empregadores em manutenção de edifícios, logística, indústria e informática usam cada vez mais sensores ligados e esperam que o pessoal saiba como funcionam, como criar alertas simples e como os manter seguros. Os alunos precisam de planear um pequeno projeto de monitorização do início ao fim para mostrar esta competência e para traduzir a sua experiência militar para trabalhos de tecnologia civis.",
    constraints: [
      "Nível de leitura: palavras simples; os termos técnicos são explicados da primeira vez",
      "Aparelhos: um computador com navegador de internet para o simulador; não é preciso comprar equipamento",
      "Tempo: lições de 5 minutos, cerca de 60 minutos no total",
      "As funções e as contas do simulador podem mudar; os alunos verificam as condições atuais do site",
      "Redes de trabalho: nunca ligue um aparelho sem a aprovação da equipa de informática ou de segurança"
    ],
    prerequisites: "Nenhum. Um primeiro curso de Python ajuda, mas não é obrigatório."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com exemplos de casa, do trabalho e do terreno", action: "identificar aparelhos de IoT e explicar o valor e o risco de cada um", standard: "nomeando corretamente pelo menos três aparelhos" },
    { id: "O2", condition: "Com um projeto de IoT, como um alarme para uma arca congeladora", action: "seguir os dados do sensor, passando pelo aparelho e pela ligação, até à nuvem e à ação", standard: "nomeando as quatro camadas pela ordem certa" },
    { id: "O3", condition: "Sabendo onde fica um aparelho, a energia que tem e quantos dados envia", action: "escolher uma ligação adequada e explicar como um protocolo como o MQTT leva as suas mensagens", standard: "com uma razão que combine com o alcance, a energia e os dados" },
    { id: "O4", condition: "Com uma leitura de um sensor e uma faixa segura", action: "escrever uma regra de alerta como uma instrução if em Python que evite alarmes falsos", standard: "de forma que a regra dê o resultado certo para leituras de teste" },
    { id: "O5", condition: "Usando um simulador gratuito na internet", action: "pôr a funcionar um microcontrolador simulado com um sensor de temperatura e testar a sua regra de alerta", standard: "vendo o alerta disparar quando muda a leitura" },
    { id: "O6", condition: "Para cada aparelho ligado do seu plano", action: "listar os passos que mantêm os aparelhos seguros", standard: "com pelo menos cinco passos corretos" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Como funcionam os sistemas de IoT",
      lessons: [
        {
          objectives: ["O1"],
          title: "O que é a Internet das Coisas",
          minutes: 4,
          goal: "Explicar a IoT e reconhecer aparelhos de IoT à sua volta.",
          text: [
            "A Internet das Coisas (IoT) são coisas físicas que sentem o mundo, se ligam a uma rede e partilham dados, muitas vezes sem ninguém escrever nada. Um termóstato inteligente mede a temperatura da sala e liga o aquecimento. Uma pulseira de exercício conta os passos e envia-os para o seu telefone.",
            "A IoT é usada em casa (campainhas com câmara, tomadas inteligentes, colunas de voz), no trabalho (máquinas que avisam quando precisam de reparação, o que se chama manutenção preditiva), na logística (localizadores GPS em camiões e contentores), na agricultura (sensores de humidade do solo), na saúde (monitores do ritmo cardíaco) e nas cidades (semáforos inteligentes).",
            "O valor está no que os dados permitem fazer: apanhar um problema cedo, poupar energia ou agir à distância. O risco é que cada aparelho ligado é mais uma coisa que pode ser atacada ou deixar escapar dados privados, por isso a segurança faz parte de todos os trabalhos de IoT."
          ],
          words: [["Internet das Coisas (IoT)", "objetos físicos com sensores e ligação a uma rede que partilham dados."], ["Aparelho inteligente", "um objeto do dia a dia que se pode ligar à rede e agir com base em dados."], ["Manutenção preditiva", "usar dados de sensores para reparar uma máquina antes de ela avariar."]],
          slides: [
            { title: "A IoT são", bullets: ["Coisas físicas que sentem o mundo", "Ligadas a uma rede", "Que partilham dados, muitas vezes sozinhas"] },
            { title: "Onde a encontra", bullets: ["Casa: campainhas, tomadas inteligentes, colunas", "Trabalho: máquinas que avisam de problemas", "Logística, agricultura, saúde, cidades"] },
            { title: "Valor e risco", bullets: ["Apanhar problemas cedo, poupar energia", "Agir à distância", "Cada aparelho é uma possível porta de entrada"] }
          ],
          tryIt: "Percorra a sua casa, o seu local de trabalho ou uma loja e liste cinco aparelhos ligados que vê ou usa. Para cada um, escreva o que ele mede e o que faz com os dados.",
          youCanNow: "explicar o que é a IoT e nomear aparelhos de IoT do dia a dia e do trabalho.",
          quickCheck: [
            { objective: "O1", q: "O que faz um aparelho fazer parte da Internet das Coisas?", options: ["Tem um ecrã grande", "Custa mais do que um aparelho normal", "Mede alguma coisa, liga-se a uma rede e partilha dados", "Só funciona com um teclado"], answer: 2, why: "Os aparelhos de IoT sentem o mundo, ligam-se e partilham dados, muitas vezes sem ninguém escrever." },
            { objective: "O1", q: "O parque de viaturas da sua unidade quer que os camiões avisem de problemas antes de avariarem. Como se chama este uso da IoT?", options: ["Manutenção preditiva", "Computação de borda", "Uma rede de convidados", "Firmware"], answer: 0, why: "Máquinas que avisam que precisam de reparação antes de falharem é manutenção preditiva." }
          ]
        },
        {
          objectives: ["O2"],
          title: "As quatro camadas: sensores, aparelhos, ligação e nuvem",
          minutes: 5,
          goal: "Seguir os dados num sistema de IoT, do sensor até à ação.",
          text: [
            "A maioria dos sistemas de IoT tem quatro camadas. 1) Os sensores medem alguma coisa: temperatura, movimento, luz, localização, humidade. 2) Um aparelho (muitas vezes um computador pequeno e barato chamado microcontrolador, como um ESP32 ou um Arduino) lê o sensor e envia os dados. 3) Uma ligação leva os dados: Wi-Fi, Bluetooth, rede móvel ou um rádio de longo alcance. 4) Um serviço na nuvem ou uma aplicação guarda os dados, mostra-os num painel e envia alertas.",
            "Alguns aparelhos também têm atuadores: peças que fazem alguma coisa no mundo real, como um motor que abre uma válvula, um relé que liga uma ventoinha ou um besouro (alarme sonoro).",
            "Às vezes é o próprio aparelho que decide, em vez de esperar pela nuvem. Isto chama-se computação de borda (edge computing). É mais rápido, continua a funcionar quando a internet falha e envia menos dados."
          ],
          steps: ["Diga o que é medido (o sensor).", "Diga o aparelho que o lê.", "Diga como os dados viajam (a ligação).", "Diga para onde vão e quem os vê (nuvem, aplicação, painel).", "Diga a ação, feita por uma pessoa ou por um atuador."],
          words: [["Sensor", "uma peça que mede alguma coisa no mundo real."], ["Microcontrolador", "um computador minúsculo e barato num chip que corre um só programa."], ["Atuador", "uma peça que age no mundo real, como um motor, um relé ou um besouro."], ["Painel (dashboard)", "um ecrã que mostra dados ao vivo em gráficos e números."], ["Computação de borda (edge computing)", "tratar os dados no aparelho ou perto dele, em vez de na nuvem."]],
          slides: [
            { title: "As quatro camadas", bullets: ["1. O sensor mede", "2. O aparelho lê e envia", "3. A ligação leva", "4. A nuvem ou a aplicação guarda, mostra, alerta"] },
            { title: "Os atuadores agem", bullets: ["Um motor abre uma válvula", "Um relé liga uma ventoinha", "Um besouro faz soar um alarme"] },
            { title: "Computação de borda", bullets: ["Decidir no próprio aparelho", "Mais rápido, funciona sem internet", "Envia menos dados"] }
          ],
          tryIt: "Escolha um aparelho da sua lista da Lição 1. Desenhe caixas para as suas quatro camadas (sensor, aparelho, ligação, nuvem ou aplicação) com setas entre elas e acrescente a ação no fim.",
          youCanNow: "seguir os dados pelas quatro camadas de um sistema de IoT e nomear sensores e atuadores.",
          quickCheck: [
            { objective: "O2", q: "Num sistema de IoT, qual é o trabalho de um microcontrolador?", options: ["Medir ele próprio a temperatura", "Guardar os dados na nuvem", "Ligar uma ventoinha", "Ler o sensor e enviar os dados"], answer: 3, why: "O aparelho, muitas vezes um microcontrolador, lê o sensor e envia os dados." },
            { objective: "O2", q: "Um sensor num portão distante tem de continuar a funcionar quando a internet falha. Que desenho ajuda?", options: ["Enviar cada leitura primeiro para a nuvem", "Deixar o aparelho decidir sozinho (computação de borda)", "Usar um ecrã maior", "Tirar o sensor"], answer: 1, why: "A computação de borda deixa o aparelho decidir sozinho, por isso continua a funcionar sem internet." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Como os aparelhos se ligam e comunicam",
          minutes: 5,
          goal: "Escolher uma ligação adequada para um aparelho de IoT.",
          text: [
            "Não há uma ligação que seja a melhor para tudo; cada uma equilibra alcance, energia e dados. O Wi-Fi é rápido e comum em casa e no trabalho, mas gasta muita energia. O Bluetooth Low Energy (BLE) gasta muito pouca energia e tem pouco alcance, bom para aparelhos que se usam no corpo e para telefones. A rede móvel (4G, 5G e versões de baixo consumo) funciona em quase todo o lado onde há sinal, boa para veículos e locais isolados, mas precisa de um plano de dados. O LoRaWAN é um rádio de baixo consumo e longo alcance para pequenas quantidades de dados, usado em sensores agrícolas e nas cidades.",
            "Os aparelhos também precisam de uma linguagem comum, chamada protocolo, para enviar mensagens. O MQTT é um protocolo leve muito usado: um aparelho publica uma leitura num tópico, como pantry/freezer/temp, e qualquer aplicação inscrita nesse tópico recebe-a. O HTTP, o mesmo protocolo que os sites usam, também é comum.",
            "Os aparelhos a bateria poupam energia dormindo a maior parte do tempo e acordando só para ler e enviar."
          ],
          steps: ["Que distância têm os dados de percorrer?", "Há eletricidade, ou só uma bateria?", "Quantos dados, e com que frequência?", "Há Wi-Fi ou sinal de rede móvel onde o aparelho vai ficar?", "Escolha a ligação que serve para as quatro respostas."],
          words: [["Wi-Fi", "rede sem fios rápida para casas e escritórios; gasta mais energia."], ["Bluetooth Low Energy (BLE)", "ligação sem fios de consumo muito baixo e pouco alcance."], ["Rede móvel", "ligação pelas redes dos telemóveis."], ["LoRaWAN", "uma rede de rádio de longo alcance e baixo consumo para pequenas quantidades de dados."], ["Protocolo", "um conjunto de regras combinadas para enviar mensagens."], ["MQTT", "um protocolo de mensagens leve em que os aparelhos publicam em tópicos e as aplicações se inscrevem neles."]],
          slides: [
            { title: "Escolha pelo alcance, energia e dados", bullets: ["Wi-Fi: rápido, mais energia", "BLE: energia mínima, pouco alcance", "Rede móvel: quase em todo o lado, precisa de plano", "LoRaWAN: longo alcance, poucos dados"] },
            { title: "Protocolos", bullets: ["MQTT: publicar num tópico, as aplicações inscrevem-se", "Exemplo de tópico: pantry/freezer/temp", "HTTP: a linguagem dos sites"] },
            { title: "Poupar a bateria", bullets: ["Dormir a maior parte do tempo", "Acordar, ler, enviar, voltar a dormir"] }
          ],
          tryIt: "Escolha a melhor ligação para cada um e escreva uma razão: um contador de passos no seu pulso, um sensor de solo num campo a 5 km de qualquer edifício, um localizador GPS num camião de entregas e uma tomada inteligente numa sala de estar.",
          youCanNow: "escolher uma ligação adequada e explicar como os aparelhos de IoT enviam mensagens.",
          quickCheck: [
            { objective: "O3", q: "O que é o MQTT?", options: ["Um protocolo leve em que os aparelhos publicam leituras em tópicos", "Um tipo de bateria", "Um rádio de longo alcance", "Uma marca de sensor"], answer: 0, why: "O MQTT é um protocolo leve: os aparelhos publicam num tópico e as aplicações inscritas recebem." },
            { objective: "O3", q: "Um sensor a bateria num parque de armazenamento sem Wi-Fi envia uma pequena leitura por hora. O que escolhe?", options: ["Wi-Fi", "Bluetooth Low Energy", "LoRaWAN", "Um teclado com fio"], answer: 2, why: "O LoRaWAN tem baixo consumo e longo alcance para pequenas quantidades de dados." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Como funcionam os sistemas de IoT",
        questions: [
          { objective: "O1", q: "Qual é um aparelho de IoT?", options: ["Um calendário de papel", "Um mapa impresso", "Um termóstato inteligente que ajusta o aquecimento sozinho", "Uma cadeira de madeira"], answer: 2, why: "Ele mede, liga-se e age com base em dados." },
          { objective: "O2", q: "Num sistema de IoT, o que faz um sensor?", options: ["Mede alguma coisa no mundo real", "Guarda os dados na nuvem", "Paga a conta da internet", "Mostra o painel"], answer: 0, why: "Os sensores medem coisas como a temperatura ou o movimento." },
          { objective: "O2", q: "Um relé que liga uma ventoinha é um:", options: ["Sensor", "Protocolo", "Painel", "Atuador"], answer: 3, why: "Os atuadores fazem alguma coisa no mundo físico." },
          { objective: "O3", q: "Um sensor de solo fica num campo longe do Wi-Fi e funciona a bateria. Que ligação serve melhor?", options: ["Wi-Fi", "LoRaWAN", "Um cabo USB", "Bluetooth para um telefone no seu bolso"], answer: 1, why: "O LoRaWAN tem longo alcance e baixo consumo para poucos dados." },
          { objective: "O3", q: "No MQTT, como recebe uma aplicação as leituras de uma arca congeladora?", options: ["Telefona para a arca", "Inscreve-se no tópico em que a arca publica", "Imprime-as", "Adivinha"], answer: 1, why: "As aplicações MQTT inscrevem-se nos tópicos em que os aparelhos publicam." }
        ]
      }
    },
    {
      name: "Capítulo 2: Construir e proteger um projeto de IoT",
      lessons: [
        {
          objectives: ["O4"],
          title: "Da leitura à ação: escrever uma regra de alerta",
          minutes: 6,
          goal: "Escrever uma regra simples em Python que transforma uma leitura de um sensor num alerta.",
          text: [
            "O coração da maioria dos projetos de IoT é uma regra: se uma leitura passar um limite, faça alguma coisa. Se a arca congeladora do banco alimentar estiver acima de -15 graus C durante 10 minutos, envie uma SMS ao responsável. Se a humidade do solo descer abaixo de 30 por cento, abra a válvula da água.",
            "Em Python, uma regra é uma instrução if. Por exemplo: temp = 28.5, depois if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). Num aparelho real, a leitura vem do sensor, e a ação pode acender um LED, ligar um relé ou enviar uma mensagem.",
            "As boas regras evitam alarmes falsos. Um pico pode ser só uma porta aberta por um momento, por isso muitos sistemas esperam por várias leituras seguidas antes de alertar. Escolha o limite com as pessoas que conhecem o equipamento e decida quem recebe o alerta e o que deve fazer."
          ],
          steps: ["Decida o que mede e qual é a sua faixa segura.", "Escolha o limite que quer dizer problema.", "Escreva-o como if reading > limit: (ou < limit).", "Decida a ação: uma mensagem, uma luz ou um relé.", "Acrescente uma regra para evitar alarmes falsos, como várias leituras seguidas."],
          words: [["Regra", "uma instrução se-então: se isto acontecer, faça aquilo."], ["Limite (threshold)", "o valor que faz disparar uma ação."], ["Alarme falso", "um alerta quando nada está realmente mal."], ["Leitura", "uma medição de um sensor."]],
          slides: [
            { title: "A IoT funciona com regras", bullets: ["Se uma leitura passar um limite", "Então faça alguma coisa", "Arca demasiado quente: SMS ao responsável"] },
            { title: "Uma regra em Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Evitar alarmes falsos", bullets: ["Esperar por várias leituras seguidas", "Definir os limites com os especialistas", "Decidir quem age, e como"] }
          ],
          tryIt: "Abra o Google Colab (colab.research.google.com) ou qualquer editor de Python. Faça uma lista de seis leituras de temperatura, como [22, 23, 29, 30, 31, 24]. Percorra-as com um ciclo e imprima \"ALERT\" para cada leitura acima de 27 e \"OK\" para as outras. Extra: só alerte quando duas leituras seguidas estiverem acima de 27.",
          youCanNow: "escrever uma regra de alerta simples em Python que transforma leituras de sensores numa ação.",
          quickCheck: [
            { objective: "O4", q: "A regra é: if temp > 27: print(\"ALERT\"). A leitura é 25. O que é impresso?", options: ["ALERT", "Nada", "Um erro", "27"], answer: 1, why: "25 não é maior do que 27, por isso a instrução if não corre." },
            { objective: "O4", q: "O alarme de uma sala de servidores dispara sempre que a porta abre por um segundo. O que muda?", options: ["Desligar o alarme de vez", "Subir o limite para 100 graus", "Tirar o sensor", "Alertar só depois de várias leituras altas seguidas"], answer: 3, why: "Esperar por várias leituras seguidas evita alarmes falsos causados por picos curtos." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Experimentar um aparelho simulado no navegador",
          minutes: 6,
          goal: "Pôr a funcionar um microcontrolador simulado com um sensor e ver as leituras mudarem.",
          text: [
            "Pode praticar IoT sem comprar peças. Um simulador na internet, como o Wokwi, permite colocar uma placa virtual, como um ESP32, juntar um sensor, como um sensor de temperatura e humidade DHT22, e correr código no seu navegador de internet. Veja no site que funções são gratuitas e se precisa de uma conta.",
            "A forma mais fácil de começar é abrir um dos projetos de exemplo já prontos do simulador para o ESP32 com um DHT22, ler o código e pô-lo a correr. Em MicroPython, uma versão de Python para aparelhos pequenos, as linhas principais são assim: sensor = dht.DHT22(machine.Pin(15)), depois sensor.measure() e t = sensor.temperature(). O número do pino tem de ser o mesmo do pino a que o sensor está ligado no esquema.",
            "Enquanto a simulação corre, pode clicar no sensor virtual e mudar a sua temperatura, e depois ver as leituras impressas e a sua regra de alerta a reagir. É exatamente assim que se testa um aparelho real antes de o instalar."
          ],
          steps: ["Abra o site do simulador no seu navegador.", "Encontre um projeto de exemplo de um ESP32 com um sensor DHT22.", "Leia o código: encontre onde lê o sensor e onde imprime.", "Inicie a simulação e veja as leituras.", "Mude a temperatura do sensor virtual e acrescente a sua regra de alerta da Lição 4."],
          words: [["Simulador", "um programa que se comporta como equipamento real, para testar sem o comprar."], ["ESP32", "um microcontrolador barato com Wi-Fi e Bluetooth incorporados."], ["DHT22", "um sensor de temperatura e humidade comum e barato."], ["MicroPython", "uma versão pequena de Python que corre em microcontroladores."], ["Pino", "um ponto de ligação metálico numa placa, onde se ligam as peças com fios."]],
          slides: [
            { title: "Praticar sem peças", bullets: ["Os simuladores correm no navegador", "Placa ESP32 virtual mais um sensor DHT22", "Veja que funções são gratuitas"] },
            { title: "As linhas principais em MicroPython", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Testar como se fosse real", bullets: ["Mude a temperatura virtual", "Veja a sua regra de alerta a reagir", "O pino no código tem de ser o da ligação"] }
          ],
          sources: [WOKWI],
          tryIt: "Abra um exemplo de ESP32 com DHT22 num simulador na internet e ponha-o a correr. Mude a temperatura do sensor virtual pelo menos duas vezes e anote as leituras. Se conseguir, acrescente uma instrução if que imprima \"ALERT\" acima de 27 graus C. Se não puder usar o simulador, siga o código de exemplo no papel: marque a linha que lê o sensor e a linha que imprime.",
          youCanNow: "pôr a funcionar e testar um aparelho de IoT simulado e ligar as suas leituras a uma regra de alerta.",
          quickCheck: [
            { objective: "O5", q: "Em MicroPython, que linha lê a temperatura depois de sensor.measure()?", options: ["print(15)", "if temp > 27:", "t = sensor.temperature()", "machine.Pin()"], answer: 2, why: "sensor.temperature() devolve a leitura depois de sensor.measure()." },
            { objective: "O5", q: "A sua regra de alerta simulada nunca dispara. Como a testa?", options: ["Clicar no sensor virtual e subir a temperatura acima do limite", "Comprar primeiro um sensor real", "Apagar o código e começar de novo", "Mudar o número do pino ao acaso"], answer: 0, why: "Mudar a leitura do sensor virtual deixa-o ver a regra a reagir." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Proteger aparelhos de IoT e planear o seu projeto",
          minutes: 6,
          goal: "Aplicar os principais passos de segurança aos aparelhos ligados e terminar o plano do seu projeto.",
          text: [
            "Os aparelhos ligados são um alvo preferido dos atacantes, porque muitos vêm de fábrica com palavras-passe fracas e nunca são atualizados. Uma câmara ou uma tomada inteligente atacada pode espiar pessoas ou ser usada para atacar outros.",
            "Os conselhos da Comissão Federal do Comércio dos EUA (FTC) para aparelhos de casa: mude o nome de utilizador e a palavra-passe de fábrica e não repita palavras-passe; ative a autenticação de dois fatores quando existir; mantenha atualizados o firmware e a aplicação do aparelho; desligue as funções que não usa, como a gestão remota; e desligue os aparelhos antigos. Para o router: mude as definições de fábrica, ative a encriptação e procure atualizações. Uma rede de convidados mantém os aparelhos inteligentes separados dos computadores com ficheiros privados.",
            "No trabalho, mantenha também uma lista de todos os aparelhos ligados, coloque os aparelhos de IoT numa rede só deles e recolha apenas os dados de que precisa, sobretudo quando há câmaras ou microfones. Pergunte à equipa de informática ou de segurança da organização antes de ligar qualquer coisa a uma rede de trabalho."
          ],
          steps: ["Mude todas as palavras-passe de fábrica; use uma única e forte para cada aparelho.", "Ative a autenticação de dois fatores quando existir.", "Atualize o firmware e as aplicações dos aparelhos.", "Desligue as funções que não usa; desligue os aparelhos antigos.", "Coloque os aparelhos inteligentes numa rede separada ou de convidados e mantenha uma lista de aparelhos."],
          words: [["Palavra-passe de fábrica", "a palavra-passe com que o aparelho vem; os atacantes conhecem essas listas."], ["Firmware", "o programa incorporado que faz funcionar um aparelho."], ["Autenticação de dois fatores", "entrar com uma palavra-passe mais uma segunda prova, como um código."], ["Rede de convidados", "uma rede Wi-Fi separada que mantém os aparelhos longe dos seus computadores principais."], ["Inventário de aparelhos", "uma lista de todos os aparelhos ligados pelos quais você é responsável."]],
          slides: [
            { title: "Porque a IoT é atacada", bullets: ["Palavras-passe de fábrica fracas", "Aparelhos que nunca são atualizados", "Câmaras e microfones podem deixar escapar dados privados"] },
            { title: "Proteja cada aparelho", bullets: ["Mude as palavras-passe de fábrica; não as repita", "Dois fatores quando existir", "Atualize o firmware e as aplicações", "Desligue as funções que não usa"] },
            { title: "Proteja a rede", bullets: ["Mude as definições de fábrica do router, ative a encriptação", "Aparelhos inteligentes numa rede de convidados", "Mantenha uma lista de aparelhos; no trabalho, pergunte à informática"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Tarefa final: escreva o seu plano de IoT de uma página (por exemplo uma sala de servidores, a arca congeladora de um banco alimentar ou uma horta). Diga o sensor, o aparelho, a ligação e para onde vão os dados, desenhe o caminho do sensor até ao alerta, escreva a regra de alerta como uma instrução if em Python e liste cinco passos de segurança que vai seguir.",
          youCanNow: "proteger aparelhos ligados e planear um projeto completo de monitorização com IoT.",
          quickCheck: [
            { objective: "O6", q: "Porque são os aparelhos de IoT um alvo comum dos atacantes?", options: ["Estão sempre desligados", "Gastam demasiada energia", "Não têm ligação à rede", "Muitos vêm com palavras-passe de fábrica fracas e nunca são atualizados"], answer: 3, why: "Palavras-passe de fábrica fracas e falta de atualizações tornam muitos aparelhos fáceis de atacar." },
            { objective: "O6", q: "Uma câmara de porta nova tem uma função de gestão remota que não vai usar. O que faz?", options: ["Deixá-la ligada, por precaução", "Desligá-la", "Partilhar a palavra-passe com a equipa", "Repetir nela a palavra-passe do seu email"], answer: 1, why: "Desligar as funções que não usa tira portas de entrada aos atacantes." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Construir e proteger um projeto de IoT",
        questions: [
          { objective: "O4", q: "Que linha é uma regra de alerta correta em Python?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "O Python usa if, uma condição e dois pontos." },
          { objective: "O4", q: "Porque esperar por várias leituras altas seguidas antes de alertar?", options: ["Para evitar alarmes falsos causados por um pico curto", "Para poupar papel", "Porque os sensores estão sempre errados", "Para tornar o aparelho mais lento"], answer: 0, why: "Um pico, como uma porta aberta, pode não ser um problema real." },
          { objective: "O5", q: "No simulador, o seu código lê o pino 15, mas o sensor está ligado ao pino 4. O que acontece?", options: ["Funciona na mesma", "A placa pega fogo", "O código não vai receber leituras do sensor", "A temperatura duplica"], answer: 2, why: "O pino no código tem de ser o mesmo da ligação." },
          { objective: "O6", q: "Qual é a PRIMEIRA coisa a fazer com uma câmara inteligente nova?", options: ["Manter a palavra-passe de fábrica", "Partilhar o acesso com amigos", "Desligar as atualizações", "Mudar a palavra-passe de fábrica para uma única e forte"], answer: 3, why: "As palavras-passe de fábrica são muito conhecidas pelos atacantes." },
          { objective: "O6", q: "Porque colocar os aparelhos inteligentes numa rede de convidados?", options: ["Para os tornar mais rápidos", "Porque não precisam de palavra-passe", "Para os manter separados dos computadores com ficheiros privados", "Para desligar a encriptação"], answer: 2, why: "A separação limita o que um aparelho atacado consegue alcançar." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Introdução à Internet das Coisas (IoT)",
    questions: [
      { objective: "O1", q: "A Internet das Coisas é:", options: ["Só redes sociais", "Objetos físicos com sensores que se ligam e partilham dados", "Um tipo de papel de impressora", "Um jogo de computador"], answer: 1, why: "A IoT são coisas ligadas que medem e partilham." },
      { objective: "O1", q: "Usar dados de sensores para reparar uma máquina antes de ela avariar chama-se:", options: ["Manutenção preditiva", "Phishing", "Armazenamento de borda", "Firmware"], answer: 0, why: "A manutenção preditiva apanha os problemas cedo." },
      { objective: "O1", q: "Porque é que a segurança faz parte de todos os trabalhos de IoT?", options: ["Os aparelhos de IoT não podem ser atacados", "Só é precisa para telefones", "Cada aparelho ligado pode ser uma porta de entrada para atacantes", "Torna os aparelhos mais baratos"], answer: 2, why: "Mais aparelhos quer dizer mais portas de entrada." },
      { objective: "O2", q: "Quais são as quatro camadas de um sistema de IoT?", options: ["Sensor, aparelho, ligação, nuvem ou aplicação", "Teclado, rato, ecrã, impressora", "Email, SMS, chamada, carta", "Quente, fresco, frio, arquivo"], answer: 0, why: "Os dados vão do sensor para o aparelho, para a ligação e para a nuvem ou a aplicação." },
      { objective: "O2", q: "Um computador pequeno e barato num chip que corre um só programa é um:", options: ["Centro de servidores", "Router", "Painel", "Microcontrolador"], answer: 3, why: "Placas como o ESP32 e o Arduino são microcontroladores." },
      { objective: "O2", q: "Um motor que abre uma válvula de água é um:", options: ["Sensor", "Atuador", "Protocolo", "Tópico"], answer: 1, why: "Os atuadores agem sobre o mundo físico." },
      { objective: "O2", q: "Tomar decisões no aparelho em vez de na nuvem é:", options: ["Faturação da nuvem", "Computação de borda", "Bluetooth", "Um alarme falso"], answer: 1, why: "A computação de borda trata os dados perto de onde são recolhidos." },
      { objective: "O3", q: "Que ligação é a melhor para uma pulseira de exercício que comunica com o seu telefone?", options: ["LoRaWAN", "Um cabo com fio", "Televisão por satélite", "Bluetooth Low Energy"], answer: 3, why: "O BLE tem baixo consumo e pouco alcance." },
      { objective: "O3", q: "Que ligação serve para um localizador GPS num camião de entregas?", options: ["Rede móvel", "Wi-Fi de casa", "Um cabo USB", "Só Bluetooth"], answer: 0, why: "A rede móvel funciona em quase todo o lado onde há sinal." },
      { objective: "O3", q: "No MQTT, uma arca congeladora envia a sua leitura:", options: ["Imprimindo-a", "Telefonando ao responsável", "Publicando-a num tópico", "Guardando-a numa pen USB"], answer: 2, why: "Os aparelhos publicam; as aplicações inscrevem-se." },
      { objective: "O3", q: "Como duram muito tempo os aparelhos de IoT a bateria?", options: ["Nunca se ligam", "Usam o Wi-Fi mais rápido", "Enviam vídeo o dia todo", "Dormem a maior parte do tempo e acordam para ler e enviar"], answer: 3, why: "Dormir poupa energia." },
      { objective: "O4", q: "Em IoT, uma regra quer normalmente dizer:", options: ["Uma régua para medir", "Uma regra de palavras-passe", "Se uma leitura passar um limite, faça alguma coisa", "Um cabo"], answer: 2, why: "As regras transformam leituras em ações." },
      { objective: "O4", q: "readings = [20, 28, 22]. Com a regra \"alertar acima de 27\", quantos alertas há?", options: ["0", "1", "2", "3"], answer: 1, why: "Só 28 está acima de 27." },
      { objective: "O4", q: "Um alerta dispara quando alguém abre a porta da arca congeladora por um segundo. Isto é:", options: ["Um alarme falso", "Computação de borda", "Uma atualização de firmware", "Encriptação"], answer: 0, why: "Um pico curto que não é um problema real é um alarme falso." },
      { objective: "O5", q: "Porque usar um simulador antes de comprar peças?", options: ["Porque os aparelhos reais nunca funcionam", "Para não ter de aprender código", "Para testar primeiro o desenho e o código de graça ou com pouco dinheiro", "Os simuladores são obrigatórios por lei"], answer: 2, why: "Os simuladores permitem testar sem equipamento." },
      { objective: "O5", q: "O MicroPython é:", options: ["Uma versão pequena de Python para microcontroladores", "Uma cobra", "Um tipo de sensor", "Uma marca de Wi-Fi"], answer: 0, why: "Corre código Python em placas pequenas." },
      { objective: "O5", q: "Um DHT22 mede:", options: ["A localização GPS", "O ritmo cardíaco", "Vídeo", "A temperatura e a humidade"], answer: 3, why: "É um sensor de temperatura e humidade." },
      { objective: "O6", q: "Qual é a escolha mais segura para a palavra-passe de uma tomada inteligente nova?", options: ["Deixar a de fábrica", "Uma palavra-passe única e forte", "Usar a mesma palavra-passe do seu email", "\"password123\""], answer: 1, why: "Palavras-passe únicas e fortes impedem ataques fáceis." },
      { objective: "O6", q: "O que deve fazer com o firmware dos aparelhos de IoT?", options: ["Nunca o atualizar", "Mantê-lo atualizado", "Apagá-lo", "Partilhá-lo na internet"], answer: 1, why: "As atualizações corrigem falhas de segurança." },
      { objective: "O6", q: "Quer ligar um sensor à rede do seu local de trabalho. O que faz primeiro?", options: ["Ligá-lo sem dizer nada", "Desligar a firewall", "Partilhar a palavra-passe do Wi-Fi na internet", "Perguntar à equipa de informática ou de segurança"], answer: 3, why: "As redes de trabalho têm regras; a informática tem de aprovar os aparelhos novos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 3, 6, 7, 9, 11, 14, 17, 19] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Partes do sistema", objective: "O2", notYet: "Falta o sensor, o aparelho ou o destino dos dados.", meets: "Diz o sensor, o aparelho, a ligação e para onde vão os dados.", exceeds: "Também diz um atuador ou uma decisão na borda e porque ajuda." },
      { name: "Desenho do caminho dos dados", objective: "O2", notYet: "Não há desenho, ou os passos estão fora de ordem.", meets: "O desenho mostra o sensor, o aparelho, a ligação, a nuvem ou aplicação e o alerta, por ordem.", exceeds: "O desenho também mostra quem recebe o alerta e o que faz." },
      { name: "Escolha da ligação", objective: "O3", notYet: "A ligação não serve para o local ou para a energia, como Wi-Fi num campo sem Wi-Fi.", meets: "A ligação serve para o alcance, a energia e os dados do projeto.", exceeds: "Explica porque outra ligação não serviria tão bem." },
      { name: "Regra de alerta", objective: "O4", notYet: "A regra falta ou não funcionaria, por exemplo com uma comparação errada.", meets: "Uma instrução if correta em Python, com um limite e uma ação que fazem sentido.", exceeds: "Também evita alarmes falsos, por exemplo esperando por várias leituras, e foi testada no simulador." },
      { name: "Passos de segurança", objective: "O6", notYet: "Menos de cinco passos, ou passos que não protegem os aparelhos.", meets: "Cinco passos corretos, como palavras-passe únicas, atualizações e uma rede separada.", exceeds: "Também inclui uma lista de aparelhos e perguntar à informática antes de ligar no trabalho." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que acrescentam competências de IoT ou de sensores ao currículo ou se candidatam a um trabalho de manutenção de edifícios, logística ou informática em 60 dias",
      "Alunos que dizem ter mudado as palavras-passe de fábrica ou atualizado os aparelhos inteligentes de casa em 30 dias (inquérito de seguimento)",
      "Alunos que começam a seguir um curso de Python, redes ou cibersegurança"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com navegador de internet e ligação à internet",
      "Um simulador de IoT gratuito na internet, como o Wokwi (veja as suas funções gratuitas atuais)",
      "Papel e caneta, ou um documento, para o plano de uma página e o desenho do caminho dos dados",
      "Cerca de 60 minutos no total: lições, prática no simulador, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; mostre o simulador num ecrã partilhado antes de os alunos o experimentarem.",
      "Convide os veteranos a comparar a IoT com as verificações de equipamento militar, as ligações de rádio e os procedimentos de alerta que já conhecem.",
      "Dê a cada aluno ou par um projeto diferente (sala de servidores, arca congeladora do banco alimentar, horta) para poderem comparar os planos.",
      "Não ligue nenhum aparelho real a uma rede do programa ou do trabalho sem a aprovação da equipa de informática ou de segurança.",
      "Avalie o plano final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
