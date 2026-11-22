"use strict";

// Koach Learn course (Portuguese translation of shared/mental-health-stress.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Teaches coping skills and how and when to get help. It never diagnoses and never replaces a professional. Crisis lines as in the English (checked 28 October 2026).

module.exports = {
  id: "mental-health-stress-pt",
  lang: "pt",
  translationOf: "mental-health-stress",
  category: "Seniors and Technology",
  name: "Saúde Mental e Gestão do Stress",
  skills: "Reconhecer os seus sinais de stress, Acalmar o corpo com a respiração e a ancoragem, Criar hábitos de sono e de movimento, Pedir apoio a alguém, Reconhecer sinais de alerta e obter ajuda em crise, Escrever um plano pessoal para lidar com o stress",
  outcome: "notar cedo os seus próprios sinais de stress, acalmar o corpo em poucos minutos com a respiração e a ancoragem, manter hábitos diários que protegem o seu humor, pedir apoio, reconhecer sinais de alerta em si ou noutra pessoa e saber exatamente para quem ligar, incluindo o 988 nos Estados Unidos, quando for grave.",
  about: [
    "Todas as pessoas sentem stress: uma mãe ou um pai com contas para pagar, um agricultor à espera da chuva, um jogador antes de um jogo importante, um veterano de volta a casa, alguém que acabou de sair da prisão e procura trabalho, um avô ou uma avó que cuida do marido ou da mulher, o dono de um negócio num mês fraco. O stress é normal. Stress a mais durante muito tempo pode prejudicar o seu sono, o seu corpo, o seu trabalho e as pessoas à sua volta.",
    "Este curso ensina habilidades que pode usar hoje: como notar o stress cedo, acalmar o corpo depressa, criar hábitos que o protegem, falar com alguém e reconhecer os sinais de que é hora de procurar mais ajuda. O curso não faz diagnósticos e não substitui um médico, um conselheiro ou um terapeuta. Ajuda você a saber quando e como chegar a um deles.",
    "Se está em perigo agora ou a pensar em acabar com a sua vida: nos Estados Unidos, ligue ou envie SMS para o 988 (a 988 Suicide and Crisis Lifeline, a linha de crise). Os veteranos e os militares podem ligar para o 988 e carregar no 1. Fora dos Estados Unidos, ligue para a linha de crise local ou para o número de emergência do seu país. Não precisa de terminar este curso primeiro.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final."
  ],
  finalTask: "Escreva o seu plano pessoal de uma página para lidar com o stress: três dos seus próprios sinais iniciais de stress, duas formas de se acalmar que já praticou, dois hábitos diários que vai manter, duas pessoas com quem pode falar (e como chegar a elas), um lugar onde ter ajuda profissional e os números de crise do lugar onde vive (988 nos Estados Unidos; 988 e depois o 1 para veteranos). Guarde-o no telefone e em papel.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos e adolescentes mais velhos de todas as origens que sentem stress: pais, idosos e cuidadores, agricultores, atletas, veteranos, pessoas que voltam para casa depois da prisão e donos de pequenos negócios.",
    startingPoint: "Sabem como o stress se sente e têm as suas próprias formas de lidar com ele, algumas úteis e outras não. Muitos ainda não deram nome aos seus sinais iniciais de stress, não praticaram uma forma de se acalmar nem guardaram números de crise.",
    gap: "Stress a mais durante muito tempo prejudica o sono, a saúde, o trabalho e as relações, e algumas pessoas não conhecem os sinais de que é hora de procurar mais ajuda. Os alunos precisam de habilidades simples para notar e acalmar o stress, pedir apoio e chegar depressa à ajuda em crise, escritas num plano que possam usar.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Não é diagnóstico nem tratamento; o curso indica médicos, conselheiros e linhas de crise",
      "Segurança primeiro: os números de crise (988 nos Estados Unidos, 988 e depois o 1 para veteranos, ou a linha de crise local) são dados antes de qualquer lição",
      "Privacidade: os alunos guardam para si os registos de stress e os planos, a não ser que escolham partilhá-los",
      "Tempo: lições de cerca de cinco minutos; alguns alunos podem estar em sofrimento"
    ],
    prerequisites: "Nenhum."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Depois de fazer um registo de stress durante um dia", action: "dizer três dos seus próprios sinais iniciais de stress no corpo, nos pensamentos, nos sentimentos ou nas ações", standard: "com cada sinal escrito com as suas palavras" },
    { id: "O2", condition: "Quando sente o stress a crescer", action: "usar a respiração em caixa e a ancoragem 5-4-3-2-1 para acalmar o corpo", standard: "dando uma nota ao seu stress de 0 a 10 antes e depois" },
    { id: "O3", condition: "Para a próxima semana", action: "escolher dois pequenos hábitos diários de sono, movimento, alimentação ou convívio e planear quando os vai fazer", standard: "com uma hora ou um lembrete marcado para cada um" },
    { id: "O4", condition: "Com uma pessoa de confiança", action: "começar uma conversa que diga o que se passa e de que precisa", standard: "usando as suas próprias duas primeiras frases" },
    { id: "O5", condition: "Perante sinais de crise em si ou noutra pessoa", action: "reconhecer os sinais de alerta de suicídio e contactar a ajuda em crise certa", standard: "com os números de crise guardados no telefone e as palavras para perguntar diretamente já preparadas" },
    { id: "O6", condition: "Usando o que praticou neste curso", action: "escrever um plano pessoal de uma página para lidar com o stress", standard: "com as seis partes, guardado no telefone e em papel" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Notar e acalmar o stress",
      lessons: [
        {
          objectives: ["O1"],
          title: "Reconhecer os seus próprios sinais de stress",
          minutes: 5,
          goal: "Dizer três sinais iniciais de que o stress está a crescer em você.",
          text: [
            "O stress é o alarme do seu corpo. Acelera o coração e a respiração para você conseguir enfrentar um desafio. Um pouco de stress pode ajudar a concentrar-se antes de um teste, de um jogo ou de uma entrevista de emprego. O problema é quando o alarme fica ligado durante dias ou semanas.",
            "O stress aparece em quatro lugares. No corpo: ombros tensos, dores de cabeça, mal-estar no estômago, coração acelerado. Nos pensamentos: preocupações que andam em círculo, dificuldade em concentrar-se, esperar sempre o pior. Nos sentimentos: irritar-se depressa, tristeza, sentir-se vazio ou nervoso. Nas ações: dormir demais ou de menos, comer de forma diferente, beber ou fumar mais, afastar-se das pessoas.",
            "Os sinais de cada pessoa são diferentes. Um treinador pode notar que responde mal aos jogadores. Uma avó pode notar que não consegue dormir. Se conhecer os seus próprios sinais iniciais, pode agir antes de o stress ficar grande."
          ],
          steps: ["Pense na última vez em que se sentiu muito stressado.", "Pergunte: o que senti no corpo, o que pensei, o que senti por dentro e o que fiz?", "Escreva os primeiros sinais que notou.", "Escolha os três principais. Estas são as suas luzes de aviso."],
          words: [["Stress", "a reação do corpo e da mente à pressão ou a um desafio."], ["Sinal", "uma coisa que mostra que algo está a acontecer, como uma luz de aviso num carro."]],
          slides: [
            { title: "O stress é o alarme do seu corpo", bullets: ["Um pouco pode ajudar a concentrar-se", "Demais, durante muito tempo, desgasta você"] },
            { title: "Onde o stress aparece", bullets: ["Corpo: ombros tensos, dores de cabeça, coração acelerado", "Pensamentos: preocupações em círculo, dificuldade em concentrar-se", "Sentimentos: irritação, tristeza, nervosismo", "Ações: sono, comida, bebida, afastar-se das pessoas"] },
            { title: "Conheça os seus sinais iniciais", bullets: ["Os de cada pessoa são diferentes", "Notar cedo, agir cedo", "Escolha os três principais"] }
          ],
          tryIt: "Faça um registo rápido de stress durante um dia. Três vezes hoje (manhã, tarde e noite), escreva: o seu nível de stress de 0 a 10 e uma coisa que notou no corpo, nos pensamentos, nos sentimentos ou nas ações. Faça um círculo à volta dos seus três sinais principais.",
          youCanNow: "dizer os seus próprios sinais iniciais de stress no corpo, nos pensamentos, nos sentimentos e nas ações.",
          quickCheck: [
            { objective: "O1", q: "Qual destes é um sinal de stress no corpo?", options: ["Ombros tensos ou maxilar apertado", "Sentir-se descansado depois de dormir", "Rir com um amigo", "Gostar de uma refeição"], answer: 0, why: "Músculos tensos são um sinal inicial comum de stress no corpo." },
            { objective: "O1", q: "Esta semana nota que responde mal à família quase todas as noites. O que faria?", options: ["Ignorar; toda a gente faz isso", "Escrever isso no seu registo de stress como um possível sinal", "Deixar de falar com a família", "Esperar até piorar"], answer: 1, why: "Notar e escrever os sinais ajuda a agir antes de o stress crescer." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Acalmar o corpo depressa: respiração e ancoragem",
          minutes: 5,
          goal: "Usar a respiração lenta e um exercício de ancoragem para se acalmar em poucos minutos.",
          text: [
            "Quando o stress chega, a respiração lenta diz ao seu corpo que está seguro e que pode baixar o alarme. Um método fácil é a respiração em caixa: inspire contando até 4, segure até 4, expire até 4, segure até 4. Repita quatro vezes. Se segurar o ar for difícil, faça só a expiração mais longa do que a inspiração, por exemplo inspire até 4 e expire até 6.",
            "A ancoragem traz a sua mente de volta ao agora quando a preocupação corre à frente. Experimente o 5-4-3-2-1: diga 5 coisas que vê, 4 coisas em que pode tocar, 3 coisas que ouve, 2 coisas que cheira e 1 coisa de que sente o sabor. Pode fazê-lo em qualquer lugar: num autocarro, antes de uma reunião, num balneário, numa sala de espera.",
            "Estas habilidades funcionam melhor com prática. Experimente-as quando está calmo, para estarem prontas quando precisar delas. Há aplicações gratuitas no telefone que podem guiar você, mas não precisa de nenhuma aplicação. Se os exercícios de respiração o deixarem tonto, pare e respire normalmente."
          ],
          steps: ["Note um sinal de stress.", "Respiração em caixa: inspire 4, segure 4, expire 4, segure 4. Repita quatro vezes.", "Se a preocupação continuar: faça a ancoragem 5-4-3-2-1.", "Volte a dar uma nota ao seu stress de 0 a 10."],
          words: [["Respiração em caixa", "inspirar, segurar, expirar e segurar, cada parte com a mesma contagem, normalmente 4."], ["Ancoragem", "usar os sentidos para trazer a atenção de volta ao momento presente."]],
          slides: [
            { title: "Respiração em caixa", bullets: ["Inspire contando até 4", "Segure até 4", "Expire até 4, segure até 4", "Repita quatro vezes"] },
            { title: "Versão mais fácil", bullets: ["Faça a expiração mais longa do que a inspiração", "Inspire até 4, expire até 6", "Tonto? Pare e respire normalmente"] },
            { title: "Ancoragem 5-4-3-2-1", bullets: ["5 coisas que vê, 4 em que pode tocar", "3 que ouve, 2 que cheira, 1 de que sente o sabor", "Funciona em qualquer lugar: autocarro, balneário, sala de espera"] },
            { title: "Pratique quando está calmo", bullets: ["Assim está pronto quando precisar", "Não precisa de aplicação"] }
          ],
          sources: [{ name: "National Institute of Mental Health: I'm So Stressed Out! fact sheet", url: "https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet" }],
          tryIt: "Dê uma nota ao seu stress de 0 a 10. Faça quatro rondas de respiração em caixa e depois uma ronda de ancoragem 5-4-3-2-1. Dê outra vez uma nota ao seu stress e escreva os dois números.",
          youCanNow: "acalmar o corpo em poucos minutos com a respiração lenta e trazer a mente de volta com a ancoragem.",
          quickCheck: [
            { objective: "O2", q: "Em que ajuda a ancoragem 5-4-3-2-1?", options: ["Adormecer logo", "Contar o seu dinheiro", "Trazer a mente ao presente usando os sentidos", "Lembrar o seu número de telefone"], answer: 2, why: "A ancoragem usa os cinco sentidos para trazer a sua atenção de volta ao presente." },
            { objective: "O2", q: "Sente o coração acelerado antes de uma chamada difícil. O que faria?", options: ["Segurar a respiração o mais tempo possível", "Fazer algumas rondas de respiração em caixa e depois fazer a chamada", "Beber três chávenas de café", "Cancelar todas as chamadas da semana"], answer: 1, why: "A respiração em caixa lenta pode acalmar o corpo em poucos minutos." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Hábitos diários que protegem você: sono, movimento, comida e pessoas",
          minutes: 5,
          goal: "Escolher dois pequenos hábitos diários que tornam o stress mais fácil de gerir.",
          text: [
            "A respiração ajuda no momento. Os hábitos ajudam todos os dias. O CDC (o centro de saúde pública do governo dos Estados Unidos) diz que a maioria dos adultos precisa de 7 horas de sono ou mais por noite, e os adolescentes dos 13 aos 17 anos precisam de 8 a 10. Bons hábitos de sono: deitar-se e acordar sempre à mesma hora, manter o quarto escuro, calmo e fresco, pôr os ecrãs de lado cerca de 30 minutos antes de dormir, e evitar cafeína ao fim do dia e álcool perto da hora de dormir.",
            "O movimento queima o stress. O CDC diz que os adultos precisam de cerca de 150 minutos de atividade moderada por semana, por exemplo 30 minutos em 5 dias, mais exercícios para fortalecer os músculos em 2 dias. Uma caminhada rápida conta. Atletas: os dias de descanso e o sono também fazem parte do treino. Refeições regulares e água suficiente também equilibram o humor.",
            "As pessoas protegem você. Passar tempo com alguém que o faz sentir-se melhor, mesmo numa chamada curta, baixa o stress. Escrever num diário e ver menos notícias e redes sociais quando o perturbam também ajuda. Comece pequeno: um hábito que consegue manter vale mais do que cinco que abandona."
          ],
          steps: ["Veja o seu registo de stress da Lição 1.", "Escolha dois hábitos: um de sono ou movimento, um de convívio ou descanso.", "Faça cada um pequeno e concreto (\"caminhar 15 minutos depois do almoço\").", "Faça-os durante uma semana e note a diferença."],
          words: [["Hábito", "uma coisa que faz tantas vezes que se torna automática."], ["Atividade moderada", "movimento que faz respirar mais depressa mas ainda deixa falar, como uma caminhada rápida."]],
          slides: [
            { title: "Sono", bullets: ["Adultos: 7 horas ou mais; adolescentes 13-17: 8 a 10 horas", "Mesma hora de deitar e de acordar", "Ecrãs de lado cerca de 30 minutos antes de dormir"] },
            { title: "Movimento", bullets: ["Adultos: cerca de 150 minutos por semana", "Exemplo: 30 minutos em 5 dias", "Uma caminhada rápida conta"] },
            { title: "Comida, água e pessoas", bullets: ["Refeições regulares e água suficiente", "Fale com alguém que o anima", "Faça pausas das notícias que o perturbam"] },
            { title: "Comece pequeno", bullets: ["Escolha dois hábitos", "Faça-os concretos", "Experimente-os durante uma semana"] }
          ],
          sources: [
            { name: "CDC: About Sleep", url: "https://www.cdc.gov/sleep/about/index.html" },
            { name: "CDC: Adult Activity guidelines", url: "https://www.cdc.gov/physical-activity-basics/guidelines/adults.html" }
          ],
          tryIt: "Escreva dois pequenos hábitos para esta semana, um de sono ou movimento e um de convívio ou descanso, com a hora em que os vai fazer. Marque um lembrete no telefone ou escreva-os no seu calendário.",
          youCanNow: "escolher e marcar pequenos hábitos diários de sono, movimento e convívio que o protegem do stress.",
          quickCheck: [
            { objective: "O3", q: "Que objetivo de hábito é mais fácil de manter?", options: ["\"Ser mais saudável\"", "\"Nunca mais sentir stress\"", "\"Fazer exercício duas horas por dia a partir de hoje\"", "\"Ligar à minha irmã aos domingos à tarde\""], answer: 3, why: "Hábitos pequenos e concretos, com uma hora marcada, são mais fáceis de manter." },
            { objective: "O3", q: "Fica muitas vezes no telefone na cama até tarde. Que pequeno hábito experimentaria?", options: ["Pôr o telefone de lado cerca de 30 minutos antes de dormir", "Usar mais o telefone para ficar cansado", "Dormir com a televisão ligada", "Ficar acordado até mais tarde nos dias de semana"], answer: 0, why: "Pôr os ecrãs de lado antes de dormir é uma dica de sono ensinada nesta lição." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Notar e acalmar o stress",
        questions: [
          { objective: "O1", q: "Qual destes é um sinal inicial de stress nas suas ações?", options: ["Dormir muito menos do que o normal", "Sentir o sol no rosto", "Comer o seu almoço normal", "Rir de uma piada"], answer: 0, why: "Mudanças no sono, na comida, na bebida ou afastar-se das pessoas são sinais de stress nas ações." },
          { objective: "O2", q: "O que é a respiração em caixa?", options: ["Respirar para dentro de um saco de papel", "Segurar a respiração o mais tempo possível", "Inspirar, segurar, expirar e segurar, cada parte contando até cerca de 4", "Respirar depressa para acordar"], answer: 2, why: "A respiração em caixa usa quatro contagens iguais para acalmar o corpo." },
          { objective: "O2", q: "A sua mente está agitada antes de uma entrevista de emprego. Que forma de ancoragem serve?", options: ["Ver as redes sociais", "Dizer 5 coisas que vê, 4 em que pode tocar, 3 que ouve, 2 que cheira, 1 de que sente o sabor", "Beber três cafés", "Relembrar todos os erros do passado"], answer: 1, why: "O 5-4-3-2-1 traz a sua atenção de volta ao agora." },
          { objective: "O3", q: "Segundo o CDC, quanto sono precisa a maioria dos adultos?", options: ["4 horas", "5 horas", "6 horas", "7 horas ou mais"], answer: 3, why: "O CDC diz que os adultos precisam de 7 horas ou mais por noite." },
          { objective: "O3", q: "Que objetivo de hábito é o mais fácil de manter?", options: ["\"Ser mais saudável\"", "\"Nunca mais sentir stress\"", "\"Correr uma maratona na próxima semana\"", "\"Caminhar 15 minutos depois do almoço nos dias de semana\""], answer: 3, why: "Hábitos pequenos e concretos são mais fáceis de começar e de manter." }
        ]
      }
    },
    {
      name: "Capítulo 2: Ter apoio e ajudar os outros",
      lessons: [
        {
          objectives: ["O4"],
          title: "Falar com alguém e pedir ajuda",
          minutes: 5,
          goal: "Começar uma conversa para pedir apoio a uma pessoa de confiança.",
          text: [
            "Muitas pessoas esperam demasiado tempo para falar porque se sentem fracas, envergonhadas ou não querem ser um peso. Pedir ajuda é uma habilidade, não uma fraqueza. Treinadores, soldados, agricultores e donos de negócios dependem todos de uma equipa.",
            "Com quem pode falar: um amigo ou familiar, um líder religioso, um treinador, um mentor ou padrinho, um gestor de caso ou conselheiro de reintegração, um professor ou orientador escolar, o seu médico, ou um conselheiro ou terapeuta. O seu médico pode verificar se há causas de saúde e ajudar a encontrar cuidados de saúde mental. Nos Estados Unidos, a SAMHSA National Helpline (1-800-662-4357) é uma linha gratuita, confidencial e aberta 24 horas por dia, 7 dias por semana, que encaminha para serviços de saúde mental e de uso de substâncias; liga você a tratamentos e grupos de apoio locais, mas não faz aconselhamento. Os veteranos também podem perguntar à sua equipa de saúde do VA (o serviço do governo dos EUA para veteranos).",
            "Como começar: escolha um momento calmo, diga as coisas de forma simples e diga de que precisa. Por exemplo: \"Tenho andado muito stressado e não durmo bem. Posso falar contigo uns minutos? Preciso sobretudo que me ouças.\" Um chatbot de IA pode ajudar a praticar as palavras, mas não é um conselheiro. Não escreva nele dados privados e, numa crise, procure uma pessoa verdadeira."
          ],
          steps: ["Escolha uma pessoa de confiança.", "Escolha um momento e um lugar calmos.", "Diga o que se passa em uma ou duas frases.", "Diga de que precisa: que o ouçam, um conselho, ajuda numa tarefa ou ajuda para encontrar um profissional."],
          words: [["Conselheiro ou terapeuta", "um profissional treinado que ajuda as pessoas com o stress, os sentimentos e a saúde mental."], ["Encaminhamento", "ser indicado ou enviado para o serviço ou o profissional certo."], ["Confidencial", "mantido em privado."]],
          slides: [
            { title: "Pedir ajuda é uma habilidade", bullets: ["Não é uma fraqueza", "As equipas ganham: treinadores, unidades, famílias, cooperativas"] },
            { title: "Pessoas com quem pode falar", bullets: ["Amigo, familiar, líder religioso, treinador, mentor", "Gestor de caso, professor, orientador escolar", "O seu médico, um conselheiro ou terapeuta"] },
            { title: "Encontrar cuidados nos Estados Unidos", bullets: ["SAMHSA Helpline: 1-800-662-4357, gratuita, 24/7", "Encaminha para tratamentos e grupos de apoio locais", "Veteranos: perguntem à equipa de saúde do VA"] },
            { title: "Como começar", bullets: ["Momento calmo, palavras simples", "\"Tenho andado muito stressado. Podemos falar?\"", "Diga de que precisa"] }
          ],
          sources: [{ name: "SAMHSA National Helpline", url: "https://www.samhsa.gov/find-help/helplines/national-helpline" }],
          tryIt: "Escreva as duas primeiras frases que diria a uma pessoa de confiança sobre o seu stress, incluindo aquilo de que precisa dela. Se se sentir pronto, envie a mensagem ou tenha a conversa esta semana.",
          youCanNow: "escolher uma pessoa com quem falar, começar a conversa com palavras simples e dizer que tipo de apoio precisa.",
          quickCheck: [
            { objective: "O4", q: "Qual é uma boa primeira frase para pedir apoio?", options: ["\"Esquece, não é nada.\"", "\"Tu nunca me ajudas.\"", "\"Tenho andado muito stressado e gostava de falar uns minutos.\"", "\"Resolve os meus problemas.\""], answer: 2, why: "Dizer de forma simples o que se passa e de que precisa abre a porta à ajuda." },
            { objective: "O4", q: "Sente-se stressado e usa um chatbot de IA à noite. O que faria se começasse a sentir-se em perigo?", options: ["Continuar a falar só com o chatbot", "Procurar uma pessoa verdadeira, como o 988 nos Estados Unidos ou a sua linha de crise local", "Desligar o telefone e esperar", "Procurar mais informações sobre o stress"], answer: 1, why: "Um chatbot pode ajudar a praticar as palavras, mas numa crise procura-se uma pessoa verdadeira." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sinais de alerta e ajuda em crise",
          minutes: 6,
          goal: "Reconhecer sinais de alerta graves em si ou noutra pessoa e saber para quem ligar.",
          text: [
            "Às vezes o stress transforma-se em algo mais grave. O National Institute of Mental Health (o instituto nacional de saúde mental dos Estados Unidos) lista sinais de alerta de suicídio, entre eles: falar em querer morrer, sentir-se sem esperança ou encurralado, sentir-se um peso para os outros, procurar formas de morrer, dar coisas importantes ou despedir-se, afastar-se das pessoas, beber mais álcool ou usar mais drogas, grandes mudanças de humor e grandes mudanças no sono ou na alimentação. Sinais novos ou que estão a piorar precisam de ajuda depressa.",
            "Se vir sinais noutra pessoa: pergunte de forma direta e calma: \"Estás a pensar em matar-te?\" Perguntar não põe a ideia na cabeça da pessoa. Ouça sem julgar, fique com ela e ajude-a a chegar à ajuda. Se alguém estiver em perigo imediato, ligue para o seu número de emergência (911 nos Estados Unidos).",
            "Ajuda em crise nos Estados Unidos: ligue ou envie SMS para o 988, ou converse por chat em 988lifeline.org, para a 988 Suicide and Crisis Lifeline. É gratuita, confidencial e está aberta 24 horas por dia, 7 dias por semana, com SMS e chat em espanhol. Veteranos, militares e as suas famílias: liguem para o 988 e carreguem no 1, ou enviem SMS para o 838255, para a Veterans Crisis Line (linha de crise para veteranos); não precisa de estar inscrito nos cuidados do VA. Fora dos Estados Unidos, ligue para a linha de crise local ou para o número de emergência do seu país; guarde-o no telefone hoje.",
            "Procure também ajuda (do seu médico ou de um conselheiro) quando o stress ou a preocupação não passa, atrapalha a vida do dia a dia ou o faz evitar coisas que precisa de fazer."
          ],
          steps: ["Note o sinal de alerta.", "Pergunte diretamente e ouça sem julgar.", "Fique com a pessoa; não a deixe sozinha se estiver em perigo.", "Liguem ou enviem SMS juntos para o 988 (veteranos: 988 e depois o 1), ou para a linha de crise local.", "Perigo imediato: ligue para o 911 ou para o seu número de emergência."],
          words: [["Crise", "um momento em que a segurança de alguém ou a sua capacidade de aguentar está em risco grave."], ["988 Lifeline", "a linha de crise 988 Suicide and Crisis Lifeline dos Estados Unidos: ligue ou envie SMS para o 988 para ter ajuda gratuita e privada a qualquer hora."]],
          slides: [
            { title: "Sinais de alerta", bullets: ["Falar em querer morrer ou em ser um peso", "Sentir-se sem esperança ou encurralado", "Dar coisas, despedir-se", "Afastar-se, mais álcool ou drogas"] },
            { title: "Se vir sinais em alguém", bullets: ["Pergunte de forma direta e calma", "Ouça sem julgar", "Fique com a pessoa e ligue-a à ajuda"] },
            { title: "Ajuda em crise nos Estados Unidos", bullets: ["Ligue ou envie SMS para o 988, ou chat em 988lifeline.org", "Gratuita, confidencial, 24/7", "Veteranos: 988 e depois o 1, ou SMS para o 838255"] },
            { title: "Fora dos Estados Unidos e emergências", bullets: ["Guarde já a linha de crise ou o número de emergência do seu país", "Perigo imediato: ligue para o 911 ou para o seu número de emergência"] }
          ],
          sources: [
            { name: "988 Suicide and Crisis Lifeline", url: "https://988lifeline.org/" },
            { name: "Veterans Crisis Line", url: "https://www.veteranscrisisline.net/" },
            { name: "National Institute of Mental Health: Warning Signs of Suicide", url: "https://www.nimh.nih.gov/health/publications/warning-signs-of-suicide" }
          ],
          tryIt: "Guarde agora no telefone os números de crise do lugar onde vive: nos Estados Unidos, o 988 (e o 988 e depois o 1 para veteranos); fora dos Estados Unidos, a linha de crise local e o número de emergência. Depois escreva as palavras exatas que usaria para perguntar a um amigo se está a pensar em suicídio.",
          youCanNow: "reconhecer sinais de alerta graves, perguntar diretamente a alguém e ligar essa pessoa, ou você mesmo, à ajuda em crise.",
          quickCheck: [
            { objective: "O5", q: "Qual destes é um sinal de alerta de suicídio?", options: ["Planear uma festa de aniversário", "Sentir-se cansado depois do trabalho", "Falar em ser um peso ou em querer morrer", "Estar ocupado com um trabalho novo"], answer: 2, why: "Falar em ser um peso ou em querer morrer é um sinal de alerta grave." },
            { objective: "O5", q: "Um amigo veterano diz-lhe que tem um plano para acabar com a vida. O que faria?", options: ["Mudar de assunto", "Prometer guardar segredo", "Deixá-lo sozinho a descansar", "Ficar com ele e ligar para o 988 e carregar no 1, ou para o 911 se estiver em perigo imediato"], answer: 3, why: "Fique com a pessoa e ligue-a à ajuda em crise imediatamente." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Fazer o seu plano pessoal para lidar com o stress",
          minutes: 5,
          goal: "Escrever um plano de uma página que diz o que fazer quando o stress cresce.",
          text: [
            "Quando está muito stressado, é difícil pensar com clareza. Um plano para lidar com o stress é uma página curta que escreve quando está calmo, para saber o que fazer quando as coisas ficam difíceis.",
            "O seu plano tem seis partes: os seus sinais iniciais de stress, as suas formas de se acalmar, os seus hábitos diários, as pessoas com quem pode falar, a ajuda profissional e os números de crise. Faça-o curto e com as suas palavras.",
            "Guarde o plano onde o possa alcançar: em papel na carteira ou na mala, e no telefone. Partilhe-o com uma pessoa de confiança. Volte a vê-lo a cada poucos meses, e depois de uma grande mudança, como um trabalho novo, uma mudança de casa, o fim de uma época desportiva ou o regresso a casa."
          ],
          steps: ["Escreva os seus três principais sinais iniciais de stress.", "Escreva duas formas de se acalmar que já praticou.", "Escreva dois hábitos diários que vai manter.", "Escreva duas pessoas com quem pode falar e como chegar a elas.", "Escreva um lugar de ajuda profissional e os seus números de crise."],
          words: [["Plano para lidar com o stress", "um plano curto e escrito do que vai fazer e para quem vai ligar quando o stress cresce."]],
          slides: [
            { title: "Porquê escrever um plano", bullets: ["O stress torna difícil pensar", "Escreva-o quando está calmo"] },
            { title: "Seis partes", bullets: ["Sinais, formas de se acalmar, hábitos diários", "Pessoas, ajuda profissional, números de crise"] },
            { title: "Tenha-o por perto", bullets: ["Uma cópia em papel e outra no telefone", "Partilhe-o com uma pessoa de confiança", "Atualize-o depois de grandes mudanças"] }
          ],
          tryIt: "Tarefa final: escreva o seu plano de uma página com as seis partes, incluindo o 988 (e o 988 e depois o 1 para veteranos) ou a sua linha de crise local. Guarde uma cópia no telefone e outra em papel.",
          youCanNow: "escrever e usar um plano pessoal que diz exatamente o que fazer e para quem ligar quando o stress cresce.",
          quickCheck: [
            { objective: "O6", q: "Que parte do plano vem primeiro para ajudar a agir cedo?", options: ["Os seus próprios sinais iniciais de stress", "A sua comida preferida", "O seu horário de trabalho", "O saldo da sua conta bancária"], answer: 0, why: "Conhecer os seus sinais diz-lhe quando usar o resto do plano." },
            { objective: "O6", q: "O seu plano está pronto. O que faria com ele?", options: ["Deitá-lo fora depois de o ler uma vez", "Guardá-lo em papel e no telefone e partilhá-lo com alguém de confiança", "Publicá-lo na internet para todos verem", "Escondê-lo para ninguém nunca o ver"], answer: 1, why: "Ter o plano por perto e partilhado quer dizer que está lá quando precisar dele." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Ter apoio e ajudar os outros",
        questions: [
          { objective: "O4", q: "Qual é a melhor forma de começar a pedir apoio a um amigo?", options: ["Esperar até as coisas ficarem muito piores", "Dizer de forma simples o que se passa e de que precisa dele", "Publicar sobre isso na internet sem lhe dizer", "Dar indiretas e esperar que ele adivinhe"], answer: 1, why: "Palavras simples e um pedido claro ajudam a outra pessoa a ajudar você." },
          { objective: "O5", q: "Um colega de trabalho diz que se sente um peso e tem andado a dar as suas coisas. O que deve fazer?", options: ["Mudar de assunto", "Dizer-lhe para se animar", "Perguntar diretamente se está a pensar em suicídio, ficar com ele e ligá-lo à ajuda", "Esperar um mês para ver se passa"], answer: 2, why: "Estes são sinais de alerta. Perguntar diretamente e ligar a pessoa à ajuda pode salvar uma vida." },
          { objective: "O5", q: "Nos Estados Unidos, como chega à 988 Suicide and Crisis Lifeline?", options: ["Só por e-mail", "Ligando ou enviando SMS para o 988, ou por chat em 988lifeline.org", "Indo a um escritório em pessoa", "Ligando para o 411"], answer: 1, why: "O 988 atende por chamada, SMS ou chat na internet, de graça e 24/7." },
          { objective: "O5", q: "Como pode um veterano chegar à Veterans Crisis Line?", options: ["Ligando para o 988 e carregando no 1", "Só numa visita a um escritório do VA", "Só se estiver inscrito nos cuidados de saúde do VA", "Enviando uma carta pelo correio"], answer: 0, why: "Os veteranos ligam para o 988 e carregam no 1 (ou enviam SMS para o 838255); não é preciso estar inscrito." },
          { objective: "O6", q: "O que pertence a um plano pessoal para lidar com o stress?", options: ["A palavra-passe do seu banco", "Uma lista das pessoas com quem está zangado", "Nada; os planos não ajudam", "Os seus números de crise e duas pessoas com quem pode falar"], answer: 3, why: "Um plano inclui os seus sinais, formas de se acalmar, hábitos, pessoas, ajuda profissional e números de crise." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Saúde Mental e Gestão do Stress",
    questions: [
      { objective: "O1", q: "A melhor descrição do stress é:", options: ["Sempre um sinal de fraqueza", "A reação de alarme do corpo e da mente à pressão", "Uma coisa que só os adultos sentem", "Uma doença que só um médico consegue ver"], answer: 1, why: "O stress é uma reação normal; torna-se um problema quando dura demais ou é forte demais." },
      { objective: "O1", q: "Qual destes é um sinal de stress nos pensamentos?", options: ["Uma preocupação que anda sempre em círculo", "Um músculo dorido depois do treino", "Sentir-se cheio depois do almoço", "Um dia de sol"], answer: 0, why: "Preocupações em círculo e dificuldade em concentrar-se são sinais nos pensamentos." },
      { objective: "O1", q: "Porquê conhecer os seus próprios sinais iniciais de stress?", options: ["Para os esconder", "Para agir antes de o stress ficar grande", "Para nunca sentir stress", "Para fazer o seu próprio diagnóstico"], answer: 1, why: "Notar os sinais cedo deixa usar as suas habilidades mais cedo." },
      { objective: "O2", q: "As contagens da respiração em caixa costumam ser:", options: ["Inspirar 1, expirar 1", "Inspirar 10, segurar 30", "Inspirar 4, segurar 4, expirar 4, segurar 4", "O mais depressa possível"], answer: 2, why: "Quatro contagens iguais abrandam a respiração e acalmam o corpo." },
      { objective: "O2", q: "Os exercícios de respiração deixam você tonto. O que deve fazer?", options: ["Respirar mais depressa", "Segurar a respiração mais tempo", "Continuar aconteça o que acontecer", "Parar e respirar normalmente"], answer: 3, why: "Se se sentir tonto, pare e respire normalmente." },
      { objective: "O2", q: "A ancoragem 5-4-3-2-1 usa:", options: ["Os seus cinco sentidos", "Cinco aplicações", "Cinco amigos", "Cinco minutos de corrida"], answer: 0, why: "Diz coisas que vê, toca, ouve, cheira e de que sente o sabor." },
      { objective: "O2", q: "Qual é o melhor momento para praticar as formas de se acalmar?", options: ["Só numa crise", "Nunca; funcionam sem prática", "Quando está calmo, para estarem prontas depois", "Só com uma aplicação paga"], answer: 2, why: "A prática deixa a habilidade pronta quando precisar dela." },
      { objective: "O3", q: "O CDC diz que os adolescentes dos 13 aos 17 anos precisam de cerca de quanto sono?", options: ["8 a 10 horas", "5 a 6 horas", "4 horas", "12 a 14 horas"], answer: 0, why: "O CDC indica 8 a 10 horas para adolescentes dos 13 aos 17 anos." },
      { objective: "O3", q: "Qual é uma dica de sono do CDC?", options: ["Beber café tarde à noite", "Mudar a hora de deitar todas as noites", "Dormir com luzes fortes acesas", "Pôr os ecrãs de lado cerca de 30 minutos antes de dormir"], answer: 3, why: "Pôr os ecrãs de lado antes de dormir ajuda a dormir." },
      { objective: "O3", q: "Cerca de quanta atividade moderada o CDC sugere para adultos por semana?", options: ["10 minutos", "150 minutos", "1,000 minutos", "Nenhuma"], answer: 1, why: "Os adultos precisam de cerca de 150 minutos de atividade moderada por semana, mais exercícios de força em 2 dias." },
      { objective: "O4", q: "Pedir ajuda é:", options: ["Um sinal de que falhou", "Só para pessoas sem amigos", "Uma habilidade que pessoas fortes e equipas usam", "Uma coisa a evitar"], answer: 2, why: "Pedir ajuda é uma habilidade, não uma fraqueza." },
      { objective: "O4", q: "O que faz a SAMHSA National Helpline?", options: ["Encaminha de graça e com confidencialidade para tratamentos e apoio locais", "Manda a polícia a sua casa", "Passa receitas de medicamentos", "Cobra por cada chamada"], answer: 0, why: "É uma linha gratuita de encaminhamento, 24/7; não faz aconselhamento." },
      { objective: "O4", q: "Ao usar um chatbot de IA quando se sente stressado, o que é mais seguro?", options: ["Dizer-lhe o seu nome completo, a morada e o número de identificação", "Usá-lo para praticar as palavras para uma conversa, e procurar uma pessoa verdadeira numa crise", "Tratá-lo como o seu terapeuta em vez de ver alguém", "Seguir qualquer conselho médico que ele dê sem verificar"], answer: 1, why: "A IA pode ajudar a preparar-se, mas não é um conselheiro; uma crise precisa de uma pessoa verdadeira." },
      { objective: "O5", q: "Qual destes é um sinal de alerta de suicídio?", options: ["Planear uma festa de aniversário", "Começar um passatempo novo", "Despedir-se e dar coisas importantes", "Dormir bem"], answer: 2, why: "Dar coisas e despedir-se são sinais de alerta indicados pelo NIMH." },
      { objective: "O5", q: "Perguntar diretamente a alguém sobre suicídio põe a ideia na cabeça da pessoa?", options: ["Sim, sempre", "Só nos adolescentes", "Só ao telefone", "Não; perguntar com calma abre a porta à ajuda"], answer: 3, why: "Perguntar de forma direta e calma ajuda a pessoa a falar e a ter ajuda." },
      { objective: "O5", q: "Alguém está em perigo imediato nos Estados Unidos. O que faz?", options: ["Publica sobre isso na internet", "Liga para o 911", "Espera até amanhã", "Envia-lhe um link para este curso"], answer: 1, why: "O perigo imediato precisa dos serviços de emergência: o 911 nos Estados Unidos." },
      { objective: "O5", q: "Vive fora dos Estados Unidos e um amigo está em crise. O que faz?", options: ["Liga para a linha de crise local ou para o número de emergência do seu país", "Envia SMS para o 988 do estrangeiro e espera", "Não faz nada", "Pede a uma IA para tratar disso"], answer: 0, why: "O 988 é a linha dos Estados Unidos; fora dos Estados Unidos use a linha de crise local ou o número de emergência." },
      { objective: "O6", q: "Quando deve ir a um médico ou conselheiro por causa do stress, mesmo sem crise?", options: ["Nunca", "Só se um amigo lhe disser", "Só uma vez por ano", "Quando o stress não passa ou atrapalha a vida do dia a dia"], answer: 3, why: "Stress que dura ou atrapalha a vida do dia a dia é um sinal para procurar ajuda." },
      { objective: "O6", q: "Onde deve guardar o seu plano para lidar com o stress?", options: ["Escondido onde não o consegue encontrar", "Só na cabeça", "Em papel e no telefone, partilhado com alguém de confiança", "Numa publicação aberta nas redes sociais"], answer: 2, why: "Cópias fáceis de alcançar ajudam quando o stress torna difícil pensar." },
      { objective: "O6", q: "Que parte do plano diz para quem ligar numa emergência?", options: ["Hábitos diários", "Formas de se acalmar", "Sinais de stress", "Números de crise"], answer: 3, why: "Números de crise como o 988, ou a sua linha local, pertencem a todos os planos." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      1,
      3,
      6,
      8,
      10,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Sinais iniciais",
        objective: "O1",
        notYet: "Menos de três sinais, ou sinais gerais demais, como \"stress\".",
        meets: "Três sinais iniciais pessoais, com as palavras do próprio aluno.",
        exceeds: "Os sinais vêm de um registo de stress real e cobrem o corpo, os pensamentos ou as ações."
      },
      {
        name: "Formas de se acalmar",
        objective: "O2",
        notYet: "As formas de se acalmar estão escritas mas não foram praticadas.",
        meets: "Duas formas de se acalmar praticadas, com notas de stress antes e depois.",
        exceeds: "Anota quando e onde cada forma funciona melhor para si."
      },
      {
        name: "Hábitos diários",
        objective: "O3",
        notYet: "Os hábitos são vagos ou não têm hora.",
        meets: "Dois pequenos hábitos com uma hora ou um lembrete para cada um.",
        exceeds: "Os hábitos já foram experimentados durante pelo menos alguns dias."
      },
      {
        name: "Pessoas de apoio e ajuda",
        objective: "O4",
        notYet: "Nenhuma pessoa escrita, ou nenhuma forma de chegar a elas.",
        meets: "Duas pessoas, com a forma de chegar a elas, e um lugar onde ter ajuda profissional.",
        exceeds: "O aluno já falou com uma delas."
      },
      {
        name: "Números de crise",
        objective: "O5",
        notYet: "Os números de crise faltam ou estão errados para o lugar onde vive.",
        meets: "O 988 (e o 988 e depois o 1 para veteranos) ou a linha de crise local e o número de emergência estão no plano e guardados no telefone.",
        exceeds: "Também sabe as palavras para perguntar diretamente a um amigo sobre suicídio."
      },
      {
        name: "Plano por perto",
        objective: "O6",
        notYet: "Faltam partes ao plano ou não está guardado.",
        meets: "As seis partes numa página, guardada em papel e no telefone.",
        exceeds: "Partilhado com uma pessoa de confiança."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que dizem ter usado uma forma de se acalmar ou o seu plano em 30 dias (inquérito de seguimento)",
      "Alunos que têm os números de crise guardados no telefone aos 30 dias",
      "Alunos que procuraram uma pessoa de apoio ou um profissional em 30 dias",
      "Alunos que começam outro curso de habilidades para a vida da Koach Learn em 30 dias"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um telefone para guardar os números de crise e o plano",
      "Papel e caneta para o registo de stress e o plano",
      "Um lugar calmo para praticar a respiração",
      "Cerca de 60 minutos no total, mais um dia para o registo de stress"
    ],
    facilitatorNotes: [
      "Partilhe os números de crise no início de cada sessão: o 988 nos Estados Unidos (988 e depois o 1 para veteranos) ou a linha de crise local e o número de emergência.",
      "Tenha um plano para um aluno em sofrimento: conheça a linha de crise local e quem no local pode ajudar, e nunca deixe sozinha uma pessoa em risco.",
      "Não peça aos alunos para partilharem em voz alta os seus registos de stress ou planos; partilhar é sempre opcional.",
      "Lembre aos alunos que este curso não faz diagnósticos nem tratamentos; incentive-os a ir a um médico ou conselheiro quando o stress não passa.",
      "Pratiquem juntos a respiração e a ancoragem, e diga aos alunos para pararem e respirarem normalmente se se sentirem tontos."
    ]
  }
};
