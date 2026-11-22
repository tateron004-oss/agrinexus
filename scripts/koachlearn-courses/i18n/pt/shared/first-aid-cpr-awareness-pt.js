"use strict";

// Koach Learn course (Portuguese translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// An AWARENESS course: it does NOT certify anyone. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (Biblioteca Nacional de Medicina dos EUA): RCP - adulto e criança depois do início da puberdade", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Engasgamento - adulto ou criança com mais de 1 ano", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Hemorragia", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Primeiros socorros no ataque cardíaco", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Sinais e sintomas do AVC", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: cursos de RCP e primeiros socorros", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "Cruz Vermelha Americana: aulas de primeiros socorros, RCP e DEA", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Assistência médica e primeiros socorros", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-pt",
  lang: "pt",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Noções de Primeiros Socorros e RCP",
  skills: "Verificar o local e ligar para o 911, Passos da RCP só com as mãos, Usar um DEA, Ajudar uma pessoa engasgada, Parar uma hemorragia grave, Reconhecer um ataque cardíaco e um AVC",
  outcome: "agir com calma nos primeiros minutos de uma emergência: verificar se é seguro, ligar para o 911 (ou para o número de emergência do seu país), seguir os passos da RCP só com as mãos e de um DEA, ajudar em caso de engasgamento e de hemorragia grave, reconhecer um ataque cardíaco ou um AVC, e inscrever-se numa aula presencial de RCP e primeiros socorros que dê um certificado verdadeiro.",
  about: [
    "Este curso é para quem quer estar pronto para ajudar: jovens à procura do primeiro emprego, pais e avós, trabalhadores de creches, restauração, comércio, segurança e ofícios, e voluntários de associações e igrejas. Muitos destes empregos pedem um certificado de RCP e primeiros socorros.",
    "Você vai aprender a ordem para agir numa emergência, os passos da RCP só com as mãos, como um DEA o orienta para dar um choque, e o que fazer em caso de engasgamento, hemorragia grave, ataque cardíaco e AVC. Os passos seguem as orientações gerais da Cruz Vermelha Americana, da American Heart Association (Associação Americana do Coração) e da Biblioteca Nacional de Medicina dos EUA.",
    "Este é um curso de noções básicas. Ele PREPARA você; não dá um certificado de RCP nem de primeiros socorros. As habilidades práticas verdadeiras, como empurrar o peito com a profundidade certa, aprendem-se e testam-se presencialmente com um instrutor qualificado, usando um manequim de treino. A última lição mostra como encontrar essa aula.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\" com papel ou uma almofada. Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Faça o seu próprio Plano de Preparação para Primeiros Socorros e RCP numa página: (1) o seu número de emergência e como dizer a sua morada com clareza; (2) onde ficam o DEA e a caixa de primeiros socorros mais próximos em casa, no trabalho, na escola ou no seu local de culto; (3) os passos de emergência, escritos de memória na ordem certa (verificar, ligar, RCP e DEA, engasgamento, hemorragia, B.E. F.A.S.T.); e (4) uma aula presencial de RCP, DEA e primeiros socorros que você escolhe da Cruz Vermelha Americana ou da American Heart Association, com o nome, quem dá o certificado, onde é e a data em que a vai fazer.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Alunos variados: adolescentes e jovens adultos à procura do primeiro emprego, adultos em empregos (ou a entrar em empregos) que pedem RCP e primeiros socorros (creches, restauração, comércio, segurança, ofícios, cuidados ao domicílio), idosos que cuidam do companheiro ou dos netos, e voluntários de associações e igrejas. Alguns falam a língua como segunda língua.",
    startingPoint: "A maioria sabe que deve ligar para o 911, mas fica paralisada ou não sabe o que fazer a seguir. Muitos já viram RCP na televisão, mas nunca praticaram. Poucos sabem onde está o DEA mais próximo ou como funciona. Alguns pensam que podem ter problemas por ajudar.",
    gap: "Numa paragem cardíaca, num engasgamento ou numa hemorragia grave, os primeiros minutos antes de a ajuda chegar são os mais importantes. Os alunos precisam de uma ordem clara de passos, de confiança para começar e de um plano para obter o certificado presencialmente, porque muitos empregos exigem um certificado válido de uma entidade reconhecida.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um telefone ou um computador da biblioteca; a prática usa papel, uma almofada ou uma toalha enrolada",
      "Tempo: lições de 4 a 6 minutos",
      "Segurança: só noções básicas; nenhuma prática numa pessoa verdadeira; as habilidades práticas e o certificado fazem-se presencialmente com um instrutor qualificado",
      "Nenhuma dose de medicamento nem conselho clínico; siga o operador do 911 e as equipas de emergência",
      "Os números de emergência mudam de país para país: 911 nos EUA; os alunos noutros países usam o número local"
    ],
    prerequisites: "Nenhum. Quem quiser saber mais sobre como ler informação de saúde pode fazer também o curso \"Literacia em Saúde\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com uma cena de emergência descrita em palavras", action: "verificar se há perigo no local, verificar se a pessoa reage e ligar para o 911 ou para o número de emergência local", standard: "na ordem certa, dizendo a morada e o que aconteceu numa frase clara" },
    { id: "O2", condition: "Com um adulto que cai, desmaiado, e não respira normalmente", action: "dizer os passos da RCP só com as mãos e do uso de um DEA", standard: "na ordem certa, com a posição das mãos, um ritmo de 100 a 120 por minuto e uma profundidade de cerca de 2 polegadas (5 cm)" },
    { id: "O3", condition: "Com a descrição de um adulto que pode estar engasgado", action: "identificar os sinais de engasgamento e descrever os primeiros socorros", standard: "distinguindo uma pessoa que consegue tossir e falar de uma que não consegue" },
    { id: "O4", condition: "Com uma ferida que sangra muito", action: "descrever como controlar a hemorragia com pressão firme e direta", standard: "referindo luvas ou uma barreira, pressão sem parar e juntar camadas em vez de levantar o pano" },
    { id: "O5", condition: "Com uma lista de sintomas", action: "reconhecer os sinais de alerta de um ataque cardíaco e de um AVC usando B.E. F.A.S.T.", standard: "acertando pelo menos 4 de 5 e ligando para o 911 em vez de levar a pessoa de carro" },
    { id: "O6", condition: "Usando o localizador de aulas da Cruz Vermelha Americana ou da American Heart Association", action: "escolher uma aula presencial de RCP, DEA e primeiros socorros e escrever um plano de formação com uma data", standard: "indicando o curso, quem dá o certificado e se o seu emprego o exige" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Agir depressa e manter o coração a funcionar",
      lessons: [
        {
          title: "Verificar, ligar, cuidar: o primeiro minuto",
          objectives: ["O1"],
          minutes: 5,
          goal: "Verificar o local e a pessoa, e depois ligar para o 911 com uma mensagem clara.",
          text: [
            "Em qualquer emergência, comece com três palavras: verificar, ligar, cuidar. Primeiro VERIFIQUE se o local é seguro para você: trânsito, fogo, fumo, eletricidade, uma pessoa agressiva ou água funda. Se não for seguro, fique afastado e ligue. Você não pode ajudar ninguém se também se magoar.",
            "Depois verifique a pessoa. Toque-lhe no ombro e grite: \"Está bem?\" Olhe para o peito para ver se respira normalmente. Arquejar de vez em quando NÃO é respirar normalmente.",
            "A seguir LIGUE para o 911 (ou para o número de emergência local fora dos EUA). Se alguém estiver consigo, aponte para essa pessoa e diga: \"Você, ligue para o 911 e traga um DEA.\" Ponha o telefone em alta-voz. Diga primeiro a morada, depois o que aconteceu, e não desligue até o operador lhe dizer. O operador pode orientá-lo durante a RCP.",
            "Depois CUIDE: dê a ajuda que puder até chegar ajuda treinada. Use luvas ou uma barreira se as tiver. Muitos estados dos EUA têm leis do Bom Samaritano que protegem quem ajuda de boa-fé; os pormenores mudam de estado para estado."
          ],
          steps: ["Verifique o local: é seguro para mim?", "Verifique a pessoa: toque, grite \"Está bem?\", veja se respira normalmente.", "Ligue para o 911 (ou para o número local), ou aponte para uma pessoa para ligar e outra para trazer um DEA.", "Telefone em alta-voz: primeiro a morada, depois o que aconteceu. Fique na linha.", "Cuide: ajude até chegar ajuda treinada."],
          words: [["Operador", "a pessoa treinada que atende as chamadas do 911, envia ajuda e pode dizer-lhe o que fazer."], ["Sem reação", "uma pessoa que não se mexe, não abre os olhos nem responde quando você lhe toca e grita."], ["Lei do Bom Samaritano", "uma lei estadual que protege quem ajuda numa emergência de boa-fé; os pormenores mudam de estado para estado."]],
          slides: [
            { title: "Verificar, ligar, cuidar", bullets: ["Verificar: o local é seguro? A pessoa reage?", "Ligar: 911 ou o número de emergência local", "Cuidar: ajudar até chegar ajuda treinada"] },
            { title: "Verificar a pessoa", bullets: ["Toque no ombro e grite \"Está bem?\"", "Olhe para o peito para ver se respira normalmente", "Arquejar NÃO é respirar normalmente"] },
            { title: "Ligar com clareza", bullets: ["Aponte para uma pessoa: \"Você, ligue para o 911\"", "Peça a outra para trazer um DEA", "Primeiro a morada, depois o que aconteceu", "Fique na linha; o operador ajuda você"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Escreva a frase que diria ao 911 a partir da sua casa: a sua morada completa com a rua transversal mais próxima, e depois \"um homem caiu e não está a respirar\". Leia-a em voz alta duas vezes, até conseguir dizê-la sem olhar.",
          youCanNow: "verificar o local e a pessoa, e ligar para o 911 com uma mensagem clara.",
          quickCheck: [
            { objective: "O1", q: "Você vê um homem deitado na estrada e os carros estão a passar. O que faz primeiro?", options: ["Corre logo para ele", "Confirma que o local é seguro para você e depois liga para o 911", "Começa a RCP no meio da estrada", "Faz um vídeo dele"], answer: 1, why: "Verificar se o local é seguro vem primeiro; se não for seguro, fique afastado e ligue." },
            { objective: "O1", q: "Na chamada para o 911, o que diz primeiro?", options: ["A história da sua vida", "O historial médico da pessoa", "A morada ou o local", "O modelo do seu telefone"], answer: 2, why: "A morada vem primeiro para que a ajuda possa ser enviada mesmo que a chamada caia." }
          ]
        },
        {
          title: "RCP só com as mãos: empurrar com força e depressa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dizer os passos da RCP só com as mãos na ordem certa.",
          text: [
            "Quando um adulto cai de repente, não reage e não respira normalmente, o coração pode ter parado. Isto chama-se paragem cardíaca. A RCP empurra o sangue para o cérebro até chegarem um DEA e as equipas de emergência.",
            "A American Heart Association ensina a RCP só com as mãos a quem não tem formação ou não se sente seguro para dar respirações: ligue para o 911 e depois empurre com força e depressa no centro do peito. Não precisa de procurar o pulso, a não ser que seja profissional de saúde.",
            "Ajoelhe-se ao lado da pessoa, sobre uma superfície firme e plana. Ponha a base de uma mão no centro do peito e a outra mão por cima, braços esticados, ombros por cima das mãos. Empurre para baixo cerca de 2 polegadas (5 centímetros), a 100 a 120 compressões por minuto, e deixe o peito voltar completamente para cima de cada vez.",
            "Continue até o DEA estar pronto, até ajuda treinada assumir ou até a pessoa começar a respirar normalmente. A RCP cansa: se outra pessoa souber fazer, troquem mais ou menos de dois em dois minutos, com uma pausa curta. Numa aula você pratica a profundidade num manequim; nunca pratique numa pessoa verdadeira."
          ],
          steps: ["Não reage e não respira normalmente: ligue para o 911 e mande buscar um DEA.", "Deite a pessoa de costas numa superfície firme e plana.", "Base de uma mão no centro do peito, a outra mão por cima.", "Braços esticados, ombros por cima das mãos.", "Empurre cerca de 2 polegadas de profundidade, 100 a 120 vezes por minuto; deixe o peito subir completamente.", "Não pare até chegar um DEA, ajuda treinada ou a respiração normal."],
          words: [["RCP", "reanimação cardiopulmonar: compressões no peito (e por vezes respirações de socorro) que mantêm o sangue a circular quando o coração para. Em inglês: CPR."], ["Paragem cardíaca", "quando o coração para de bombear de repente; a pessoa cai e não respira normalmente."], ["Compressão", "um empurrão para baixo no peito."], ["Manequim", "um corpo de treino usado nas aulas de RCP."]],
          slides: [
            { title: "Quando começar a RCP", bullets: ["Um adulto cai e não reage", "Não respira normalmente, ou só arqueja", "Primeiro ligue para o 911 e mande buscar um DEA"] },
            { title: "Mãos no sítio certo", bullets: ["Base de uma mão no centro do peito", "A outra mão por cima", "Braços esticados, ombros por cima das mãos"] },
            { title: "Com força e depressa", bullets: ["Cerca de 2 polegadas (5 cm) de profundidade", "100 a 120 compressões por minuto", "Deixe o peito voltar completamente para cima"] },
            { title: "Continue", bullets: ["Até o DEA estar pronto ou a ajuda assumir", "Troque com um ajudante mais ou menos de 2 em 2 minutos", "Pratique a profundidade num manequim, numa aula"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Ajoelhe-se junto de uma almofada firme ou de uma toalha enrolada no chão (nunca uma pessoa). Ponha as mãos como foi mostrado, braços esticados. Ponha um temporizador no telefone para 30 segundos e conte as compressões em voz alta. Tente fazer 50 a 60 compressões em 30 segundos, o que corresponde a 100 a 120 por minuto.",
          youCanNow: "dizer os passos da RCP só com as mãos e manter o ritmo certo.",
          quickCheck: [
            { objective: "O2", q: "Onde ficam as suas mãos na RCP de um adulto?", options: ["Na barriga", "No ombro esquerdo", "No pescoço", "No centro do peito"], answer: 3, why: "A base de uma mão vai no centro do peito, com a outra mão por cima." },
            { objective: "O2", q: "A que velocidade empurra na RCP?", options: ["100 a 120 vezes por minuto", "Cerca de 20 vezes por minuto", "Uma vez a cada 10 segundos", "O mais devagar possível"], answer: 0, why: "A orientação é 100 a 120 compressões por minuto, deixando o peito subir de cada vez." }
          ]
        },
        {
          title: "Usar um DEA, e o que uma aula completa de RCP acrescenta",
          objectives: ["O2"],
          minutes: 5,
          goal: "Dizer os passos do uso de um DEA com a RCP.",
          text: [
            "Um DEA (desfibrilhador externo automático) é uma pequena caixa que pode dar um choque ao coração para o fazer voltar a um ritmo normal. Encontra-se em escolas, ginásios, aeroportos, escritórios, centros comerciais e locais de culto, muitas vezes numa caixa na parede com o sinal de um coração e um raio.",
            "Os DEA são feitos para pessoas sem formação. Ligue-o e ele fala consigo. Descubra o peito, seque-o, ponha os elétrodos onde os desenhos mostram e ligue o cabo se for preciso. Todos se afastam enquanto ele analisa o coração. Se ele mandar dar choque, confirme que ninguém está a tocar na pessoa e carregue no botão. Depois volte logo à RCP, como o DEA lhe diz.",
            "Use o DEA assim que ele chegar e siga exatamente a voz dele. Não pare a RCP para ir você mesmo procurar um, se outra pessoa o puder trazer.",
            "Numa aula completa de RCP também aprende as respirações de socorro: 30 compressões, depois 2 respirações, repetidas. Aprende ainda a RCP para crianças e bebés, que é diferente. Pratique esses passos na aula com um instrutor."
          ],
          steps: ["Mantenha a RCP enquanto alguém traz o DEA.", "Ligue o DEA e ouça.", "Descubra e seque o peito; ponha os elétrodos onde os desenhos mostram.", "Afaste-se enquanto ele analisa; ninguém toca na pessoa.", "Se ele mandar dar choque: todos afastados, carregue no botão.", "Volte logo à RCP, como ele lhe diz."],
          words: [["DEA", "desfibrilhador externo automático: uma caixa que analisa o coração e, se for preciso, dá um choque para acertar o ritmo. Fala consigo em cada passo. Em inglês: AED."], ["Elétrodos", "adesivos com fios que se colam no peito descoberto para o DEA analisar o coração e dar o choque."], ["Respirações de socorro", "respirações que você dá para a boca da pessoa durante a RCP; aprendem-se numa aula completa."]],
          slides: [
            { title: "O que faz um DEA", bullets: ["Analisa o ritmo do coração", "Só dá um choque se for preciso", "Orienta você em cada passo"] },
            { title: "Passos do DEA", bullets: ["Ligue-o e ouça", "Peito descoberto e seco; elétrodos onde os desenhos mostram", "Afaste-se enquanto ele analisa"] },
            { title: "Se ele mandar dar choque", bullets: ["Confirme que ninguém toca na pessoa", "Carregue no botão de choque", "Volte logo à RCP"] },
            { title: "Uma aula completa acrescenta", bullets: ["Respirações de socorro: 30 compressões, depois 2 respirações", "RCP para crianças e bebés", "Prática com as mãos, com um instrutor"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Descubra onde está o DEA mais próximo no seu trabalho, escola, ginásio ou local de culto. Pergunte a um responsável ou procure o sinal. Escreva exatamente onde ele está e, de memória, desenhe os dois lugares dos elétrodos num boneco de palitos.",
          youCanNow: "dizer os passos do uso de um DEA com a RCP e dizer onde fica o mais próximo.",
          quickCheck: [
            { objective: "O2", q: "O DEA diz que é aconselhado um choque. O que faz antes de carregar no botão?", options: ["Segura na mão da pessoa", "Tira os elétrodos", "Confirma que ninguém está a tocar na pessoa", "Dá água à pessoa"], answer: 2, why: "Todos têm de estar afastados para que o choque vá só para a pessoa." },
            { objective: "O2", q: "O DEA deu um choque. E agora?", options: ["Espera calado pela ambulância", "Volta à RCP, como o DEA lhe diz", "Desliga o DEA", "Senta a pessoa"], answer: 1, why: "Depois de um choque, volte logo à RCP, seguindo a voz do DEA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Agir depressa e manter o coração a funcionar",
        questions: [
          { objective: "O1", q: "Quais são as três primeiras palavras para qualquer emergência?", options: ["Esperar, olhar, andar", "Verificar, ligar, cuidar", "Correr, esconder, contar", "Perguntar, filmar, publicar"], answer: 1, why: "Verifique o local e a pessoa, ligue para o 911 e depois cuide até a ajuda chegar." },
          { objective: "O1", q: "Três pessoas estão a olhar para uma mulher que caiu. Como consegue ajuda mais depressa?", options: ["Aponta para uma pessoa: \"Você, ligue para o 911\", e pede a outra para trazer um DEA", "Grita \"Alguém ligue!\" para o grupo", "Espera que outra pessoa o faça", "Publica nas redes sociais"], answer: 0, why: "Dar uma tarefa clara a uma pessoa evita que todos pensem que outra já ligou." },
          { objective: "O2", q: "Com que profundidade empurra o peito de um adulto na RCP?", options: ["Quase sem tocar", "Cerca de meia polegada", "O mais fundo que conseguir", "Cerca de 2 polegadas (5 cm)"], answer: 3, why: "As compressões num adulto têm cerca de 2 polegadas de profundidade, deixando o peito voltar para cima." },
          { objective: "O2", q: "Quando deve começar a RCP só com as mãos num adulto?", options: ["Quando está a falar, mas cansado", "Quando não reage e não respira normalmente", "Quando tem um pequeno corte", "Quando está a tossir com força"], answer: 1, why: "A RCP é para quem não reage e não respira normalmente, ou só arqueja." },
          { objective: "O2", q: "Quem pode usar um DEA?", options: ["Qualquer pessoa; ele orienta você nos passos", "Só médicos", "Só bombeiros", "Só pessoas com mais de 30 anos"], answer: 0, why: "Os DEA são feitos para pessoas sem formação e dão instruções em voz alta." }
        ]
      }
    },
    {
      name: "Capítulo 2: Emergências comuns e obter o certificado",
      lessons: [
        {
          title: "Engasgamento e hemorragia grave",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Identificar o engasgamento e descrever como parar uma hemorragia grave com pressão direta.",
          text: [
            "Engasgamento: a pessoa pode agarrar a garganta, não conseguir falar, tossir fraco, fazer um som agudo ou ficar azulada. Pergunte: \"Está engasgado? Consegue falar?\" Se ela consegue tossir com força e falar, não lhe bata; diga-lhe para continuar a tossir.",
            "Se ela não consegue falar, tossir nem respirar, peça a alguém para ligar para o 911. As orientações dos EUA mostram duas formas de fazer sair o objeto: pancadas firmes entre as omoplatas com a base da mão (pancadas nas costas), e empurrões rápidos para dentro e para cima, logo acima do umbigo (compressões abdominais). Grávidas e pessoas muito grandes recebem compressões no peito. Se a pessoa desmaiar, ligue para o 911, deite-a no chão e comece a RCP. Aprenda e pratique estes movimentos numa aula; não pratique compressões numa pessoa verdadeira.",
            "Hemorragia grave: ligue para o 911. Ponha luvas se as tiver, ou use um saco de plástico como barreira. Pressione com força, mesmo em cima da ferida, com um pano limpo, uma gaze ou até uma peça de roupa, e continue a pressionar. Não o levante para ver. Se o sangue passar, ponha mais pano por cima e continue a pressionar.",
            "Não tire um objeto espetado numa ferida; ponha panos à volta dele. O garrote é para hemorragias que põem a vida em perigo, num braço ou numa perna, quando a pressão não chega; as aulas Stop the Bleed (Parar a Hemorragia) e de primeiros socorros ensinam a usá-lo."
          ],
          steps: ["Engasgamento: pergunte \"Está engasgado? Consegue falar?\"", "Consegue tossir e falar: deixe-o continuar a tossir.", "Não consegue falar nem respirar: ligue para o 911 e dê os primeiros socorros que aprendeu na aula (pancadas nas costas e compressões abdominais).", "Desmaia: deite-o no chão e comece a RCP.", "Hemorragia: ligue para o 911, luvas ou uma barreira, pressione com força na ferida com um pano limpo.", "O sangue passa: ponha camadas por cima; não levante o primeiro pano."],
          words: [["Compressões abdominais", "empurrões rápidos para dentro e para cima, logo acima do umbigo, para fazer sair o que está a tapar a garganta; também chamadas manobra de Heimlich."], ["Pancadas nas costas", "pancadas firmes entre as omoplatas com a base da mão, para soltar o que está a tapar a garganta."], ["Pressão direta", "pressionar com firmeza mesmo em cima de uma ferida para abrandar e parar a hemorragia."], ["Garrote", "uma faixa apertada posta num braço ou numa perna, acima de uma ferida, para parar uma hemorragia que põe a vida em perigo; ensina-se numa aula."]],
          slides: [
            { title: "Sinais de engasgamento", bullets: ["Agarra a garganta, não consegue falar", "Tosse fraca ou som agudo", "Fica azulado"] },
            { title: "Engasgamento: o que fazer", bullets: ["Consegue tossir e falar: deixe-o tossir", "Não consegue falar: 911, pancadas nas costas e compressões", "Desmaia: deite-o no chão e comece a RCP"] },
            { title: "Hemorragia grave", bullets: ["Ligue para o 911; luvas ou uma barreira", "Pressione com força, mesmo em cima da ferida", "O sangue passa: ponha camadas e continue a pressionar"] },
            { title: "Não faça", bullets: ["Não levante o pano para ver", "Não tire um objeto espetado", "Não pratique compressões numa pessoa verdadeira"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Ponha uma toalha dobrada no seu próprio antebraço. Pressione com força com a palma da mão durante 60 segundos no relógio, sem levantar. Depois ponha uma segunda toalha por cima e continue a pressionar. Escreva duas linhas: como foi difícil manter a pressão, e os três sinais de engasgamento desta lição.",
          youCanNow: "reconhecer os sinais de engasgamento e parar uma hemorragia grave com pressão firme e direta.",
          quickCheck: [
            { objective: "O3", q: "Uma mulher, ao almoço, está a tossir com força e ainda consegue falar. O que faz?", options: ["Bate-lhe logo com força nas costas", "Faz-lhe compressões abdominais", "Incentiva-a a continuar a tossir e fica com ela", "Deita-a no chão"], answer: 2, why: "Se a pessoa consegue tossir com força e falar, deixe-a continuar a tossir; não lhe bata." },
            { objective: "O4", q: "O sangue passa pelo pano que você está a pressionar na ferida. O que faz?", options: ["Levanta o pano para ver", "Para de pressionar", "Lava a ferida com água", "Põe mais pano por cima e continua a pressionar"], answer: 3, why: "Juntar camadas mantém a pressão; levantar o pano pode fazer a hemorragia voltar." }
          ]
        },
        {
          title: "Reconhecer um ataque cardíaco e um AVC",
          objectives: ["O5"],
          minutes: 5,
          goal: "Reconhecer os sinais de alerta de um ataque cardíaco e de um AVC.",
          text: [
            "Um ataque cardíaco acontece quando o sangue deixa de chegar a uma parte do coração. Sinais comuns: dor ou aperto no peito que pode passar para o maxilar, o braço, as costas ou a barriga, falta de ar, suor frio, enjoo ou tonturas, e um cansaço fora do normal. Mulheres, idosos e pessoas com diabetes podem ter sinais mais leves ou diferentes.",
            "Se acha que é um ataque cardíaco, ligue logo para o 911. Não espere para ver se passa, e não deixe a pessoa convencê-lo a não ligar. Peça-lhe para se sentar e descansar, alargue a roupa apertada e fique com ela. Não dê nenhum medicamento, a não ser o medicamento receitado à própria pessoa ou se o operador do 911 lhe disser. Se ela deixar de reagir e de respirar normalmente, comece a RCP e use um DEA.",
            "Um AVC (acidente vascular cerebral) acontece quando o sangue deixa de chegar a uma parte do cérebro ou quando um vaso sanguíneo rebenta. O CDC (a agência de saúde pública dos EUA) ensina B.E. F.A.S.T., palavras em inglês: Balance, equilíbrio (tontura ou perda de equilíbrio de repente), Eyes, olhos (dificuldade de ver de repente), Face, rosto (peça-lhe para sorrir; um lado descai?), Arms, braços (peça-lhe para levantar os dois braços; um desce?), Speech, fala (está enrolada ou estranha?), Time, tempo (ligue logo para o 911).",
            "Anote a hora em que os sinais começaram e diga-a à equipa. Chame uma ambulância; não leve você mesmo a pessoa de carro ao hospital."
          ],
          steps: ["Sinais de ataque cardíaco: dor ou aperto no peito, falta de ar, suor frio, enjoo, tonturas.", "Ligue logo para o 911; sente a pessoa, alargue a roupa, fique com ela.", "Nenhum medicamento, a não ser o dela ou se o operador disser.", "AVC: verifique B.E. F.A.S.T.", "Anote a hora em que os sinais começaram; chame uma ambulância, não a leve de carro."],
          words: [["Ataque cardíaco", "quando o sangue deixa de chegar a uma parte do coração; a pessoa normalmente está acordada e tem dor ou aperto no peito."], ["AVC", "acidente vascular cerebral: quando o sangue deixa de chegar a uma parte do cérebro ou um vaso sanguíneo do cérebro rebenta."], ["B.E. F.A.S.T.", "Balance (equilíbrio), Eyes (olhos), Face (rosto), Arms (braços), Speech (fala), Time (tempo): uma forma de reconhecer um AVC e lembrar-se de ligar para o 911."]],
          slides: [
            { title: "Sinais de ataque cardíaco", bullets: ["Dor ou aperto no peito; pode passar para o maxilar, o braço, as costas", "Falta de ar, suor frio, enjoo", "Mulheres e idosos podem ter sinais mais leves"] },
            { title: "Ataque cardíaco: o que fazer", bullets: ["Ligue já para o 911; não espere", "Sentar, descansar, alargar a roupa, ficar com a pessoa", "Nenhum medicamento, a não ser o dela ou se o operador disser"] },
            { title: "AVC: B.E. F.A.S.T.", bullets: ["Balance e Eyes: tontura ou problema de visão de repente", "Face descai, Arm (braço) desce, Speech (fala) enrolada", "Time: ligue logo para o 911"] },
            { title: "O tempo conta", bullets: ["Anote quando os sinais começaram", "Chame uma ambulância; não leve a pessoa de carro"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Escreva B.E. F.A.S.T. de cima para baixo, na margem de uma folha. Ao lado de cada letra, escreva de memória a pergunta ou o teste que usaria. Depois ensine-o a um amigo ou familiar em menos de um minuto.",
          youCanNow: "reconhecer os sinais de alerta de um ataque cardíaco e de um AVC e ligar depressa para o 911.",
          quickCheck: [
            { objective: "O5", q: "O sorriso do seu tio descai de um lado e as palavras dele saem enroladas. O que faz?", options: ["Liga logo para o 911 e anota a hora", "Deixa-o deitar-se e dormir até passar", "Leva-o você mesmo de carro ao hospital", "Dá-lhe um comprimido para as dores"], answer: 0, why: "São sinais de AVC; ligue já para o 911, anote a hora e deixe a ambulância levá-lo." },
            { objective: "O5", q: "Qual é um sinal comum de ataque cardíaco?", options: ["Um pequeno corte na mão", "Dor ou aperto no peito que passa para o braço ou o maxilar", "Um espirro", "Uma comichão na perna"], answer: 1, why: "Dor ou aperto no peito que pode espalhar-se é um sinal comum de ataque cardíaco." }
          ]
        },
        {
          title: "Obter o certificado: o seu plano de preparação",
          objectives: ["O6"],
          minutes: 5,
          goal: "Escolher uma aula presencial de RCP e primeiros socorros e escrever um plano de formação com uma data.",
          text: [
            "Este curso dá noções básicas, não um certificado. Os empregadores que pedem RCP e primeiros socorros normalmente querem um cartão de uma entidade reconhecida. Nos EUA, as mais conhecidas são a Cruz Vermelha Americana e a American Heart Association. As duas têm um localizador de aulas nos seus sites.",
            "Escolha a aula certa para o seu caminho. Muitos empregos em locais de trabalho e na comunidade (creches, treino desportivo, segurança, restauração, associações) aceitam uma aula de Primeiros Socorros, RCP e DEA para adultos e crianças. Os empregos de saúde (auxiliar de enfermagem, técnico de emergência médica, estudantes de farmácia e de medicina) normalmente exigem o Suporte Básico de Vida (BLS). Pergunte ao seu empregador ou programa qual aceitam antes de pagar.",
            "Muitas aulas são mistas: uma parte pela internet e depois uma sessão presencial de habilidades com um instrutor e manequins. Uma aula toda pela internet, sem teste prático, pode não ser aceite. Os preços, a duração da aula e a validade do cartão mudam: veja a página da entidade e a data no seu cartão, e renove antes de ele caducar.",
            "Pergunte por aulas gratuitas ou baratas: alguns empregadores, programas de emprego, corpos de bombeiros, hospitais e grupos comunitários oferecem-nas. A OSHA (a agência de segurança no trabalho dos EUA) diz que os empregadores têm de ter pessoas e material de primeiros socorros adequados aos perigos do local de trabalho."
          ],
          steps: ["Pergunte ao seu empregador ou programa que aula aceitam (por exemplo Primeiros Socorros, RCP e DEA, ou BLS).", "Abra o localizador de aulas da Cruz Vermelha ou da American Heart Association.", "Escolha uma aula presencial ou mista perto de si.", "Escreva o nome do curso, quem dá o cartão, o local, a data e o preço.", "Ponha a data no seu calendário e um lembrete antes de o cartão caducar."],
          words: [["Cartão de certificado", "prova da entidade de formação de que você passou no teste prático; os empregadores pedem para o ver."], ["BLS", "Basic Life Support, Suporte Básico de Vida: a aula de RCP para trabalhadores e estudantes de saúde."], ["Ensino misto", "uma aula com uma parte pela internet e outra presencial, com um teste prático."], ["Pediátrico", "para crianças e bebés."]],
          slides: [
            { title: "Este curso dá noções básicas", bullets: ["Prepara você; não dá certificado", "Os certificados vêm de uma entidade reconhecida", "Nos EUA: Cruz Vermelha Americana, American Heart Association"] },
            { title: "Escolha a aula certa", bullets: ["Maioria dos empregos: Primeiros Socorros, RCP e DEA (adultos e crianças)", "Saúde: Suporte Básico de Vida (BLS)", "Pergunte ao empregador qual aceita"] },
            { title: "Antes de se inscrever", bullets: ["Tem de ter um teste prático presencial", "Veja o preço, a duração e a validade do cartão", "Pergunte por aulas gratuitas ou baratas"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Tarefa final: faça o seu Plano de Preparação para Primeiros Socorros e RCP numa página. Escreva o seu número de emergência e a frase com a morada, onde ficam o DEA e a caixa de primeiros socorros mais próximos, os passos de emergência de memória, e uma aula presencial que encontrou no site da Cruz Vermelha ou da AHA: nome, quem a certifica, local e data.",
          youCanNow: "escolher uma aula presencial reconhecida de RCP e primeiros socorros e planear quando a vai fazer.",
          quickCheck: [
            { objective: "O6", q: "Você terminou este curso de noções básicas. O que é que ele lhe dá?", options: ["Um cartão de RCP que o seu empregador tem de aceitar", "Uma licença de enfermagem", "Conhecimentos que o preparam para uma aula presencial com certificado", "Autorização para ensinar RCP"], answer: 2, why: "Este curso prepara você; o certificado vem de uma aula presencial com uma entidade reconhecida." },
            { objective: "O6", q: "Você vai começar um programa de auxiliar de enfermagem. Que aula de RCP é mais provável que peçam?", options: ["Um vídeo só pela internet, sem teste prático", "Nenhuma aula", "Uma aula de uma publicação nas redes sociais", "Suporte Básico de Vida (BLS), depois de confirmar com o programa"], answer: 3, why: "Os programas de saúde normalmente exigem BLS; peça ao programa para confirmar qual aceitam." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Emergências comuns e obter o certificado",
        questions: [
          { objective: "O3", q: "Um homem agarra a garganta e não consegue falar nem tossir. O que faz?", options: ["Espera que ele melhore", "Pede a alguém para ligar para o 911 e dá os primeiros socorros para engasgamento", "Dá-lhe água para beber", "Pede-lhe para se deitar e descansar"], answer: 1, why: "Uma pessoa que não consegue falar nem tossir está muito engasgada; ligue para o 911 e aja." },
          { objective: "O4", q: "Qual é a primeira coisa a fazer num corte fundo que sangra muito (depois de ligar para o 911)?", options: ["Pressionar com força, mesmo em cima da ferida, com um pano limpo", "Deixar sangrar para limpar", "Pôr gelo", "Pedir à pessoa para andar"], answer: 0, why: "A pressão firme e direta é a principal forma de parar uma hemorragia grave." },
          { objective: "O4", q: "Um pedaço de vidro está espetado numa ferida. O que deve fazer?", options: ["Tirá-lo depressa", "Empurrá-lo mais para dentro", "Deixá-lo e pôr panos à volta", "Deitar água até ele sair"], answer: 2, why: "Tirá-lo pode piorar a hemorragia; ponha panos à volta e deixe os profissionais retirá-lo." },
          { objective: "O5", q: "Em B.E. F.A.S.T., o que quer dizer o A?", options: ["Alergia", "Morada", "Ambulância", "Arms, braços: um braço desce?"], answer: 3, why: "O A é de Arms, braços: peça à pessoa para levantar os dois braços e veja se um desce." },
          { objective: "O6", q: "Qual é a melhor forma de obter um certificado de RCP que um emprego aceite?", options: ["Uma aula presencial ou mista da Cruz Vermelha ou da AHA", "Ver um vídeo na internet sem teste", "Ler este curso duas vezes", "Pedir a um amigo para assinar uma nota"], answer: 0, why: "Os empregadores normalmente querem um cartão de uma entidade reconhecida, com um teste prático." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Noções de Primeiros Socorros e RCP",
    questions: [
      { objective: "O1", q: "Você encontra um colega no chão, perto de um fio elétrico a deitar faíscas. O que faz primeiro?", options: ["Agarra o braço do colega e puxa", "Fica afastado, liga para o 911 e manda desligar a corrente", "Deita água no fio", "Começa a RCP ali mesmo"], answer: 1, why: "O local não é seguro; fique afastado, ligue e torne-o seguro antes de tocar em alguém." },
      { objective: "O1", q: "Como verifica se uma pessoa reage?", options: ["Toca no ombro e grita \"Está bem?\"", "Deita água fria na cara dela", "Abana-lhe a cabeça com força", "Espera cinco minutos"], answer: 0, why: "Tocar e gritar é a forma segura de ver se alguém reage." },
      { objective: "O1", q: "Você está a ligar para o 911. Quando pode desligar?", options: ["Logo que der a morada", "Depois de um minuto", "Quando o operador lhe disser", "Quando a pessoa abrir os olhos"], answer: 2, why: "Fique na linha; o operador pode precisar de mais pormenores ou orientá-lo na RCP." },
      { objective: "O1", q: "Fora dos EUA, para que número liga?", options: ["Sempre o 911, em todo o lado", "O número de um amigo", "A receção principal do hospital", "O número de emergência local do seu país"], answer: 3, why: "Os números de emergência mudam de país para país; aprenda o seu número local." },
      { objective: "O2", q: "Um adulto cai, não reage e só arqueja. O que está a acontecer?", options: ["Provavelmente está a dormir", "O coração pode ter parado; ligue para o 911 e comece a RCP", "Está engasgado, mas bem", "Precisa de um copo de água"], answer: 1, why: "Arquejar não é respirar normalmente; trate como uma paragem cardíaca." },
      { objective: "O2", q: "O que quer dizer RCP só com as mãos?", options: ["Ligar para o 911 e empurrar com força e depressa no centro do peito", "Esfregar as mãos da pessoa", "Dar só respirações de socorro", "Segurar as mãos da pessoa até chegar ajuda"], answer: 0, why: "A RCP só com as mãos são compressões no peito sem respirações, depois de ligar para o 911." },
      { objective: "O2", q: "Depois de cada compressão na RCP, o que deixa o peito fazer?", options: ["Ficar empurrado para baixo", "Tremer", "Voltar completamente para cima", "Virar-se para o lado"], answer: 2, why: "Deixar o peito subir completamente deixa o coração encher-se de sangue antes da compressão seguinte." },
      { objective: "O2", q: "Alguém traz um DEA. O que faz?", options: ["Espera que a ambulância o use", "Lê primeiro o manual todo", "Põe-no debaixo da cabeça da pessoa", "Liga-o e segue a voz dele"], answer: 3, why: "Os DEA orientam você em cada passo; use-o assim que chegar." },
      { objective: "O3", q: "Qual é um sinal de que um adulto está engasgado?", options: ["Está a rir alto", "Agarra a garganta e não consegue falar", "Está a espirrar", "Pede um guardanapo"], answer: 1, why: "Agarrar a garganta e não conseguir falar são sinais típicos de engasgamento." },
      { objective: "O3", q: "Uma pessoa engasgada desmaia. O que faz?", options: ["Liga para o 911, deita-a no chão e começa a RCP", "Continua a dar pancadas nas costas com ela deitada", "Deixa-a descansar", "Dá-lhe água"], answer: 0, why: "Se uma pessoa engasgada deixa de reagir, ligue para o 911 e comece a RCP." },
      { objective: "O3", q: "Onde deve aprender bem as pancadas nas costas e as compressões abdominais?", options: ["Praticando com força num amigo", "Num comentário qualquer de um vídeo", "Numa aula prática com um instrutor", "Não precisa de as aprender"], answer: 2, why: "Estes movimentos praticam-se com segurança numa aula; nunca pratique compressões numa pessoa verdadeira." },
      { objective: "O4", q: "Antes de pressionar a ferida que sangra de alguém, o que protege você?", options: ["Luvas, ou um saco de plástico como barreira", "Não é preciso nada", "Lavar as mãos durante cinco minutos antes", "Fechar os olhos"], answer: 0, why: "Luvas ou uma barreira protegem você do sangue enquanto ajuda." },
      { objective: "O4", q: "Você está a pressionar uma ferida. Durante quanto tempo continua a pressionar?", options: ["Dez segundos", "Até se cansar", "Até ver por baixo do pano", "Até a hemorragia parar ou a ajuda assumir, sem levantar"], answer: 3, why: "Uma pressão constante, sem espreitar, dá tempo ao sangue para coagular." },
      { objective: "O4", q: "Quando se usa um garrote?", options: ["Para qualquer pequeno corte", "Para uma hemorragia que põe a vida em perigo, num braço ou numa perna, quando a pressão não chega", "Para sangue do nariz", "Para uma nódoa negra"], answer: 1, why: "O garrote é para hemorragias de um membro que põem a vida em perigo, e ensina-se numa aula." },
      { objective: "O5", q: "A sua avó diz que tem um aperto no peito e suor frio, mas quer esperar. O que faz?", options: ["Espera uma hora para ver", "Liga já para o 911 e fica com ela", "Leva-a você mesmo de carro depois do jantar", "Dá-lhe qualquer comprimido que haja em casa"], answer: 1, why: "São sinais de ataque cardíaco; ligue já para o 911 e não a deixe convencê-lo a não ligar." },
      { objective: "O5", q: "Em B.E. F.A.S.T., o que o T lembra você de fazer?", options: ["Tirar uma fotografia", "Mandar mensagem a um amigo", "Dizer-lhe para dormir", "Time, tempo: ligar logo para o 911 e anotar quando os sinais começaram"], answer: 3, why: "O T é de Time, tempo: ligue já para o 911 e anote quando os sinais começaram." },
      { objective: "O5", q: "Porquê chamar uma ambulância num AVC em vez de levar a pessoa de carro?", options: ["A equipa pode começar a tratar no caminho e avisar o hospital", "As ambulâncias são sempre gratuitas", "Os hospitais não recebem quem chega a pé", "É proibido por lei levar alguém de carro"], answer: 0, why: "As equipas de emergência começam a tratar cedo e avisam o hospital; o CDC diz para ligar para o 911, não levar de carro." },
      { objective: "O6", q: "Que duas organizações dos EUA são as mais conhecidas pelos certificados de RCP e primeiros socorros?", options: ["O DMV (serviço de carta de condução) e os correios", "O IRS (impostos) e a SBA (pequenas empresas)", "A Cruz Vermelha Americana e a American Heart Association", "Qualquer grupo nas redes sociais"], answer: 2, why: "A Cruz Vermelha e a AHA são as entidades de RCP e primeiros socorros mais conhecidas nos EUA." },
      { objective: "O6", q: "Antes de pagar uma aula de RCP para um emprego, o que deve perguntar?", options: ["Que aula e que entidade o empregador aceita", "Se pode saltar o teste prático", "Se um amigo a pode fazer por você", "Nada; todas as aulas são iguais"], answer: 0, why: "Os empregos são diferentes: alguns aceitam Primeiros Socorros, RCP e DEA; a saúde muitas vezes exige BLS." },
      { objective: "O6", q: "O seu cartão de RCP tem uma data. O que faz?", options: ["Ignora-a", "Deita o cartão fora", "Plastifica-o para nunca caducar", "Põe um lembrete para o renovar antes de caducar"], answer: 3, why: "Os cartões caducam; renove antes da data para continuar certificado." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Chamada de emergência pronta", objective: "O1", notYet: "Não tem número de emergência nem a frase com a morada, ou a morada não está clara.", meets: "Tem o número de emergência certo e uma frase clara, primeiro com a morada e depois com o que aconteceu.", exceeds: "Acrescenta também uma rua transversal ou um ponto de referência e pratica dizê-la em voz alta." },
      { name: "DEA e caixa localizados", objective: "O2", notYet: "Não sabe onde há um DEA ou uma caixa de primeiros socorros.", meets: "Diz onde ficam o DEA e a caixa de primeiros socorros mais próximos em casa, no trabalho, na escola ou no local de culto.", exceeds: "Indica dois lugares e confirmou que a caixa do DEA é fácil de alcançar." },
      { name: "Passos na ordem", objective: "O2", notYet: "Faltam passos ou estão na ordem errada, ou o ritmo e a profundidade da RCP estão errados.", meets: "Escreve verificar, ligar, RCP e DEA por ordem, com as mãos no centro do peito, 100 a 120 por minuto e cerca de 2 polegadas.", exceeds: "Escreve também os passos do DEA e quando trocar de socorrista." },
      { name: "Engasgamento e hemorragia", objective: "O4", notYet: "Confunde o que fazer, ou diz para levantar o pano ou tirar um objeto.", meets: "Escreve os sinais de engasgamento (O3) e a pressão firme e direta com camadas para a hemorragia.", exceeds: "Diz também quando uma pessoa engasgada precisa de RCP e para que serve um garrote." },
      { name: "Ataque cardíaco e AVC", objective: "O5", notYet: "Não consegue dizer B.E. F.A.S.T. nem os sinais de ataque cardíaco.", meets: "Diz B.E. F.A.S.T. e três sinais de ataque cardíaco, com \"ligar para o 911\".", exceeds: "Indica também que se deve anotar a hora em que os sinais começaram e não levar a pessoa de carro." },
      { name: "Plano de certificado", objective: "O6", notYet: "Nenhuma aula escolhida, ou uma aula só pela internet sem teste prático.", meets: "Indica uma aula presencial ou mista, quem dá o cartão, o local e uma data.", exceeds: "Também confirmou com o empregador ou o programa que a aula é aceite, e pôs um lembrete para renovar." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que fazem uma aula presencial de RCP, DEA e primeiros socorros da Cruz Vermelha ou da AHA em 60 dias (inquérito de seguimento, cartão mostrado)",
      "Alunos que indicam um cartão válido de RCP e primeiros socorros numa candidatura de emprego ou no currículo",
      "Locais de trabalho e associações do programa que dizem ter mais funcionários e voluntários certificados e saber onde estão os DEA"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone ou computador com internet para ver as lições e os localizadores de aulas",
      "Papel e caneta; uma almofada firme ou uma toalha enrolada para praticar o ritmo da RCP; uma toalha para praticar a pressão",
      "Um temporizador no telefone ou um relógio",
      "Cerca de 60 a 75 minutos no total, em sessões curtas"
    ],
    facilitatorNotes: [
      "Isto são só noções básicas. Diga muitas vezes que o curso não certifica e encaminhe os alunos para uma aula presencial com um instrutor qualificado da Cruz Vermelha ou da AHA.",
      "Nunca deixe os alunos praticarem compressões, pancadas nas costas ou compressões abdominais uns nos outros; use almofadas ou, se os tiver, manequins com um instrutor certificado.",
      "Não dê doses de medicamentos nem conselhos clínicos; encaminhe as perguntas de saúde para um médico ou para o operador do 911.",
      "Alguns alunos podem ter vivido uma emergência ou perdido alguém; permita pausas e deixe-os sair da sala.",
      "Para grupos noutros países, troque o 911 pelo número de emergência local e pelas entidades de formação locais (por exemplo, as sociedades nacionais da Cruz Vermelha ou do Crescente Vermelho).",
      "Faça parceria com um corpo de bombeiros, um hospital ou uma delegação da Cruz Vermelha local para oferecer uma aula com certificado logo a seguir ao curso."
    ]
  }
};
