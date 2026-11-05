"use strict";

// Koach Learn course (Portuguese translation of underserved/underserved-ai-employment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US course: American Job Centers, CareerOneStop, the FTC and the Social Security number are kept as US names.

module.exports = {
  id: "underserved-ai-employment-pt",
  lang: "pt",
  translationOf: "underserved-ai-employment",
  category: "Undeserved Community",
  name: "IA para o Emprego e a Preparação para o Trabalho",
  skills: "Encontrar ajuda gratuita para o emprego, Dar nome às suas habilidades, Escrever um currículo de uma página com IA, Adaptar um currículo a um anúncio de emprego, Praticar respostas de entrevista, Reconhecer burlas de emprego",
  outcome: "usar um assistente de IA gratuito para escrever um currículo de uma página adaptado a um anúncio de emprego real, praticar respostas a perguntas comuns de entrevista e reconhecer os sinais de uma burla de emprego.",
  about: [
    "Procurar trabalho é difícil, sobretudo se tem períodos sem trabalho no seu percurso, se fez sobretudo trabalhos pagos em dinheiro vivo ou se esteve a cuidar da família. Você tem mais habilidades do que pensa, e há ferramentas gratuitas que o ajudam a mostrá-las.",
    "Você vai encontrar ajuda gratuita para o emprego perto de você, transformar a sua experiência (paga e não paga) numa lista de habilidades, escrever um currículo de uma página com IA, adaptá-lo a um anúncio de emprego real, praticar para a entrevista e aprender a reconhecer burlas de emprego.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no final do curso."
  ],
  finalTask: "Encontre um anúncio de emprego real a que possa concorrer. Use um assistente de IA para escrever um currículo de uma página adaptado a esse anúncio, sem nenhum número privado. Depois peça à IA que lhe faça três perguntas comuns de entrevista, responda a cada uma em voz alta e peça uma dica para melhorar cada resposta.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Pessoas à procura de trabalho em comunidades carenciadas, incluindo pessoas com períodos sem trabalho, pessoas que fizeram sobretudo trabalhos pagos em dinheiro vivo, cuidadores que voltam ao trabalho, jovens adultos e pessoas que falam inglês como segunda língua.",
    startingPoint: "Têm experiência real de trabalho e de vida, mas talvez não a vejam como habilidades de trabalho. Sabem usar um telefone e talvez um pouco um computador. Poucos têm um currículo atualizado ou já praticaram entrevistas, e alguns já foram alvo de burlas de emprego.",
    gap: "Os empregadores esperam um currículo adaptado ao trabalho e uma entrevista feita com confiança, e as burlas de emprego visam quem precisa de trabalho. Os alunos precisam de mostrar as suas habilidades reais, usar ferramentas gratuitas e ajuda gratuita para o emprego, e proteger-se enquanto procuram.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 6.º ano)",
      "Aparelhos: um smartphone ou um computador da biblioteca ou de um centro de emprego",
      "Custo: só ferramentas gratuitas e ajuda gratuita para o emprego",
      "Privacidade: nada de número da Segurança Social (Social Security), data de nascimento ou números completos de identificação na IA nem no currículo",
      "Honestidade: cada habilidade no currículo tem de ser verdadeira e apoiada por um exemplo real"
    ],
    prerequisites: "Nenhum. Quem nunca usou um assistente de IA pode fazer primeiro o curso \"Introdução à IA e Autonomia Digital\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando o CareerOneStop ou a linha 1-877-US-2JOBS", action: "encontrar o American Job Center mais perto de você e outro lugar gratuito onde ter ajuda para o emprego", standard: "anotando a morada, o telefone e o horário" },
    { id: "O2", condition: "Com a sua experiência paga e não paga", action: "fazer, com um assistente de IA, a lista das habilidades de trabalho que essa experiência mostra", standard: "ficando só com as habilidades de que consegue dar um exemplo real" },
    { id: "O3", condition: "Com a sua lista de habilidades e o seu percurso", action: "escrever um currículo de uma página com um assistente de IA e uma ferramenta de documentos gratuita", standard: "com todas as partes principais e sem número da Segurança Social nem data de nascimento" },
    { id: "O4", condition: "Com um anúncio de emprego real", action: "mudar o seu currículo para corresponder às habilidades e às palavras do anúncio", standard: "usando só informação verdadeira e guardando uma cópia com o nome desse trabalho" },
    { id: "O5", condition: "Com um assistente de IA a fazer de entrevistador", action: "responder em voz alta a perguntas comuns de entrevista com histórias reais e curtas", standard: "pedindo e usando uma dica para cada resposta" },
    { id: "O6", condition: "Com uma oferta ou um anúncio de emprego", action: "verificar se tem sinais de alerta de uma burla de emprego e confirmar você mesmo a empresa", standard: "antes de partilhar qualquer número de banco ou da Segurança Social" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Preparar-se",
      lessons: [
        {
          objectives: ["O1"],
          title: "Encontrar ajuda gratuita para o emprego perto de você",
          minutes: 4,
          goal: "Encontrar o American Job Center mais perto de você e outro lugar gratuito onde ter ajuda para o emprego.",
          text: [
            "Os American Job Centers são centros públicos de emprego em todo o país (nos Estados Unidos). Ajudam quem procura trabalho com a procura de emprego, encaminhamentos e colocação, e muitos também oferecem computadores, workshops e informação sobre formação. Alguns serviços têm regras sobre quem pode usá-los e podem variar de estado para estado.",
            "Pode encontrar o centro mais perto de você com o American Job Center Finder no CareerOneStop, um site do Departamento do Trabalho dos EUA (U.S. Department of Labor), ou ligando para 1-877-US-2JOBS.",
            "As bibliotecas públicas também ajudam com a procura de emprego, a impressão de currículos e tempo de computador gratuito. A ajuda verdadeira para o emprego nunca pede que pague para conseguir um trabalho."
          ],
          steps: ["Abra o American Job Center Finder em careeronestop.org, ou ligue para 1-877-US-2JOBS.", "Escreva o seu código postal (ZIP code) ou a sua cidade.", "Anote a morada, o telefone e o horário do centro mais perto.", "Pergunte na sua biblioteca que ajuda oferece para a procura de emprego."],
          words: [["American Job Center", "um centro público que ajuda as pessoas a encontrar trabalho e formação."], ["Encaminhamento", "quando um centro o envia para um trabalho ou um programa que pode servir para você."]],
          sources: [
            { name: "U.S. Department of Labor: American Job Centers", url: "https://www.dol.gov/agencies/eta/american-job-centers" },
            { name: "CareerOneStop: American Job Center Finder", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          slides: [
            { title: "American Job Centers", bullets: ["Centros públicos de emprego em todo o país", "Procura de emprego, encaminhamentos e colocação", "Alguns serviços variam de estado para estado"] },
            { title: "Encontre o seu", bullets: ["American Job Center Finder em careeronestop.org", "Ou ligue para 1-877-US-2JOBS"] },
            { title: "Mais ajuda gratuita", bullets: ["Bibliotecas públicas: computadores, impressão, ajuda no emprego", "A ajuda verdadeira nunca cobra para você conseguir um trabalho"] }
          ],
          tryIt: "Encontre o American Job Center mais perto de você e anote a morada, o número de telefone e o horário.",
          youCanNow: "encontrar ajuda gratuita e oficial para o emprego perto de você.",
          quickCheck: [
            { objective: "O1", q: "O que é o CareerOneStop?", options: ["Um site do Departamento do Trabalho dos EUA que ajuda a encontrar centros de emprego", "Uma agência de emprego paga", "Uma rede social", "Um banco para quem procura trabalho"], answer: 0, why: "O CareerOneStop é um site do Departamento do Trabalho com o American Job Center Finder." },
            { objective: "O1", q: "Precisa de imprimir currículos e usar um computador de graça. Onde mais pode ir?", options: ["Um site que cobra uma taxa de inscrição", "A sua biblioteca pública", "O escritório em casa de um desconhecido", "Uma loja que troca cheques por dinheiro"], answer: 1, why: "As bibliotecas públicas ajudam com a procura de emprego, a impressão e tempo de computador gratuito." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Dar nome às suas habilidades, pagas e não pagas",
          minutes: 5,
          goal: "Transformar a sua experiência de trabalho e de vida numa lista de habilidades de trabalho.",
          text: [
            "Muitas pessoas dizem \"Não tenho habilidades\" quando na verdade têm. Cuidar de crianças ou de um pai idoso, gerir o orçamento da casa, cozinhar para um evento da igreja, consertar carros dos vizinhos ou fazer trabalhos pagos em dinheiro vivo, tudo isso cria habilidades reais.",
            "Diga a um assistente de IA o que já fez, com palavras simples, e peça-lhe para transformar isso em habilidades de trabalho. Por exemplo: \"Durante cinco anos cuidei da minha avó, tratei dos medicamentos e das consultas dela e geri o orçamento da casa. Que habilidades de trabalho isto mostra?\"",
            "Escolha as habilidades que são verdadeiras e de que consegue dar um exemplo. Não fique com nada que não consiga provar numa entrevista."
          ],
          steps: ["Escreva tudo o que já fez: trabalhos pagos, trabalhos em dinheiro vivo, cuidar de alguém, voluntariado, escola.", "Peça à IA a lista das habilidades de trabalho que cada coisa mostra.", "Fique só com as habilidades de que consegue dar um exemplo real.", "Guarde a lista para o seu currículo."],
          words: [["Habilidade", "algo que sabe fazer bem, como marcar horários, atender clientes ou usar uma caixa registadora."], ["Habilidade transferível", "uma habilidade de uma parte da vida que ajuda num trabalho diferente."]],
          slides: [
            { title: "Você tem mais habilidades do que pensa", bullets: ["Cuidar de alguém, gerir o orçamento, cozinhar para eventos", "Trabalhos em dinheiro vivo, voluntariado, consertar coisas"] },
            { title: "Peça à IA para lhes dar nome", bullets: ["Descreva o que fez com palavras simples", "\"Que habilidades de trabalho isto mostra?\""] },
            { title: "Seja verdadeiro", bullets: ["Fique com as habilidades de que consegue dar um exemplo", "Tire tudo o que não consegue provar"] }
          ],
          tryIt: "Escreva três coisas que já fez (pagas ou não pagas). Peça a um assistente de IA para dizer as habilidades de trabalho que cada uma mostra. Fique com as que consegue apoiar com um exemplo real.",
          youCanNow: "transformar a sua experiência paga e não paga numa lista honesta de habilidades de trabalho.",
          quickCheck: [
            { objective: "O2", q: "Qual é uma experiência não paga que cria habilidades de trabalho?", options: ["Ver televisão", "Dormir até tarde", "Cozinhar para um evento da igreja", "Passar o tempo nas redes sociais"], answer: 2, why: "Cozinhar para um evento mostra habilidades de planeamento, trabalho em equipa e manuseamento de alimentos." },
            { objective: "O2", q: "A IA diz que tomar conta de crianças mostra \"gestão de projetos\", mas você não consegue dar um exemplo. O que faz?", options: ["Fica com ela; parece bem", "Inventa um exemplo", "Acrescenta-a duas vezes", "Deixa-a fora da sua lista"], answer: 3, why: "Fique só com as habilidades que consegue provar com um exemplo real numa entrevista." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Escrever um currículo de uma página com IA",
          minutes: 6,
          goal: "Escrever um currículo simples de uma página com um assistente de IA e uma ferramenta de documentos gratuita.",
          text: [
            "Um currículo é um resumo de uma página das suas habilidades e da sua experiência. Um currículo simples e limpo é melhor do que um muito enfeitado.",
            "Dê à IA a sua lista de habilidades, os seus trabalhos ou atividades com as datas e qualquer formação ou escola. Peça um currículo de uma página com estas partes: linha de contacto, resumo curto, habilidades, experiência e estudos ou formação.",
            "Não ponha o seu número da Segurança Social, a data de nascimento nem números completos de identificação no currículo nem na IA. Escreva você mesmo o telefone e o email no documento final. Copie o resultado para uma ferramenta gratuita como o Google Docs ou o Microsoft Word na web, e guarde-o como PDF para enviar."
          ],
          steps: ["Dê à IA as suas habilidades, os trabalhos ou atividades com as datas e a formação.", "Peça um currículo de uma página: linha de contacto, resumo, habilidades, experiência, estudos.", "Copie-o para o Google Docs ou o Word na web.", "Acrescente você mesmo o telefone e o email; deixe de fora o número da Segurança Social e a data de nascimento.", "Leia-o em voz alta, corrija os erros e guarde-o como PDF."],
          words: [["Currículo", "um resumo de uma página das suas habilidades, trabalho e formação para os empregadores."], ["PDF", "um tipo de ficheiro que mantém o documento com o mesmo aspeto em qualquer aparelho."]],
          slides: [
            { title: "Simples e limpo é melhor", bullets: ["Uma página", "Fácil de ler"] },
            { title: "Cinco partes", bullets: ["Linha de contacto e resumo curto", "Habilidades", "Experiência", "Estudos ou formação"] },
            { title: "Proteja-se", bullets: ["Sem número da Segurança Social nem data de nascimento", "Acrescente você mesmo o telefone e o email", "Guarde como PDF para enviar"] }
          ],
          tryIt: "Use a sua lista de habilidades da Lição 2 para pedir a um assistente de IA um currículo de uma página. Copie-o para o Google Docs ou o Word na web e leia-o em voz alta.",
          youCanNow: "escrever um currículo simples de uma página com IA e uma ferramenta de documentos gratuita.",
          quickCheck: [
            { objective: "O3", q: "Que partes pertencem a um currículo simples?", options: ["Linha de contacto, resumo, habilidades, experiência, estudos ou formação", "Número da Segurança Social e data de nascimento", "Uma fotografia de página inteira", "Os seus dados bancários"], answer: 0, why: "Estas cinco partes dão aos empregadores o que precisam numa página." },
            { objective: "O3", q: "Quando deve acrescentar o telefone e o email ao currículo?", options: ["Escrevê-los primeiro na IA", "Escrevê-los você mesmo no documento final", "Deixá-los de fora", "Publicá-los na internet"], answer: 1, why: "Acrescentá-los você mesmo no documento mantém os dados privados fora da IA." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Preparar-se",
        questions: [
          { objective: "O1", q: "Como pode encontrar o American Job Center mais perto de você?", options: ["Uma SMS de um desconhecido", "O American Job Center Finder no CareerOneStop, ou o 1-877-US-2JOBS", "Um anúncio que aparece no ecrã", "Um site pago"], answer: 1, why: "Estas são as formas oficiais de encontrar um centro." },
          { objective: "O1", q: "Um site diz que tem de pagar uma taxa para conseguir um trabalho. Isto é:", options: ["Normal", "Obrigatório por lei", "Um sinal de alerta; a ajuda verdadeira não cobra para você conseguir um trabalho", "Um bom negócio"], answer: 2, why: "Os empregadores honestos e os centros de emprego não cobram para você conseguir um trabalho." },
          { objective: "O2", q: "Cuidou da sua avó durante cinco anos. Num currículo, isto mostra:", options: ["Habilidades reais como marcar horários e tratar de medicamentos", "Nada de útil", "Um período sem trabalho que tem de esconder", "Só cozinhar"], answer: 0, why: "Cuidar de alguém cria habilidades reais e transferíveis." },
          { objective: "O2", q: "A IA põe na lista uma habilidade que você não tem de verdade. Deve:", options: ["Ficar com ela", "Inventar um exemplo", "Acrescentar mais duas", "Tirá-la"], answer: 3, why: "Fique só com o que consegue provar numa entrevista." },
          { objective: "O3", q: "O que NÃO deve ir para o seu currículo nem para a IA?", options: ["As suas habilidades", "O seu número da Segurança Social", "Os nomes dos seus cargos", "A sua formação"], answer: 1, why: "Os números da Segurança Social e as datas de nascimento não pertencem a um currículo." }
        ]
      }
    },
    {
      name: "Capítulo 2: Candidatar-se e fazer a entrevista",
      lessons: [
        {
          objectives: ["O4"],
          title: "Adaptar o seu currículo a um anúncio de emprego",
          minutes: 5,
          goal: "Mudar o seu currículo para corresponder ao que um anúncio de emprego real pede.",
          text: [
            "Os empregadores querem ver que você serve para o trabalho deles. Um anúncio de emprego mostra aquilo de que precisam. Quando o seu currículo usa as mesmas habilidades e palavras, é mais fácil ver que corresponde.",
            "Cole o anúncio e o seu currículo na IA e pergunte: \"Que habilidades deste anúncio eu já mostro? Sugira mudanças no meu currículo para que corresponda melhor, usando só informação verdadeira.\"",
            "Seja honesto. Adaptar quer dizer mostrar as suas habilidades reais com as palavras do empregador, não acrescentar coisas que não fez."
          ],
          steps: ["Encontre um anúncio de emprego real a que possa concorrer.", "Cole o anúncio e o seu currículo na IA (sem números privados).", "Pergunte que habilidades correspondem e o que mudar, usando só informação verdadeira.", "Atualize o seu currículo e guarde uma cópia nova com o nome desse trabalho."],
          words: [["Anúncio de emprego", "um aviso de um empregador que descreve um trabalho e aquilo de que precisa."], ["Palavras-chave", "palavras importantes do anúncio de emprego, como \"atendimento ao cliente\" ou \"empilhador\"."]],
          slides: [
            { title: "Mostre que corresponde", bullets: ["O anúncio mostra aquilo de que precisam", "Use as mesmas habilidades e palavras"] },
            { title: "Pergunte à IA", bullets: ["Cole o anúncio e o seu currículo", "\"Que habilidades eu já mostro?\"", "\"Sugira mudanças verdadeiras para corresponder melhor.\""] },
            { title: "Seja honesto", bullets: ["As suas habilidades reais, as palavras deles", "Guarde uma cópia com o nome de cada trabalho"] }
          ],
          tryIt: "Encontre um anúncio de emprego real perto de você. Peça a um assistente de IA para o comparar com o seu currículo e sugerir mudanças honestas. Guarde uma cópia nova para esse trabalho.",
          youCanNow: "adaptar o seu currículo a um anúncio de emprego real com honestidade.",
          quickCheck: [
            { objective: "O4", q: "O que quer dizer \"adaptar\" um currículo?", options: ["Acrescentar trabalhos que nunca teve", "Usar o mesmo tipo de letra do empregador", "Mostrar as suas habilidades reais com as palavras do empregador", "Fazê-lo com duas páginas"], answer: 2, why: "Adaptar mostra as suas habilidades verdadeiras com as palavras que o anúncio usa." },
            { objective: "O4", q: "O anúncio pede \"atendimento ao cliente\" e você ajudou clientes num trabalho pago em dinheiro vivo. O que faz?", options: ["Deixa isso de fora", "Diz que geria a loja", "Escreve \"sem experiência\"", "Descreve-o como atendimento ao cliente, com os detalhes verdadeiros"], answer: 3, why: "A sua experiência real corresponde à palavra-chave deles, por isso diga-a com honestidade e com as palavras deles." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Praticar para a entrevista",
          minutes: 5,
          goal: "Praticar respostas a perguntas comuns de entrevista com um assistente de IA.",
          text: [
            "As entrevistas ficam mais fáceis com prática. Um assistente de IA pode fazer de entrevistador. Peça: \"Faça de entrevistador para este trabalho. Faça-me uma pergunta comum de cada vez e espere pela minha resposta. Depois de cada resposta, dê-me uma dica.\"",
            "Algumas perguntas comuns: \"Fale-me de si.\" \"Porque quer este trabalho?\" \"Conte-me uma vez em que resolveu um problema.\" Use uma história real e curta: o que aconteceu, o que você fez e como acabou.",
            "Diga as respostas em voz alta, não só na cabeça. Se tem um período sem trabalho, pratique uma frase curta e honesta sobre isso e depois fale do que está pronto para fazer agora."
          ],
          steps: ["Peça à IA para fazer de entrevistador para o seu anúncio de emprego.", "Responda a uma pergunta de cada vez, em voz alta, e depois escreva a resposta.", "Use uma história real e curta: o que aconteceu, o que fez, o resultado.", "Peça uma dica depois de cada resposta e tente outra vez."],
          words: [["Entrevista", "uma reunião em que um empregador lhe faz perguntas para decidir se o contrata."], ["Período sem trabalho", "um tempo em que você não teve um trabalho pago."]],
          slides: [
            { title: "A IA pode fazer de entrevistador", bullets: ["Uma pergunta de cada vez", "Uma dica depois de cada resposta"] },
            { title: "Perguntas comuns", bullets: ["\"Fale-me de si.\"", "\"Porque quer este trabalho?\"", "\"Conte-me uma vez em que resolveu um problema.\""] },
            { title: "Responda com uma história curta", bullets: ["O que aconteceu", "O que você fez", "Como acabou"] },
            { title: "Pratique em voz alta", bullets: ["Diga, não fique só a pensar", "Período sem trabalho: uma frase honesta e depois siga em frente"] }
          ],
          tryIt: "Peça a um assistente de IA para o entrevistar para o trabalho da Lição 4. Responda a duas perguntas em voz alta, escreva as suas respostas e peça uma dica para cada uma.",
          youCanNow: "praticar respostas de entrevista com IA e melhorá-las com comentários.",
          quickCheck: [
            { objective: "O5", q: "O que deve pedir à IA depois de cada resposta de prática?", options: ["Uma dica para a melhorar", "Que escreva a resposta por você", "Que termine a entrevista", "Que passe para outro trabalho"], answer: 0, why: "Uma dica de cada vez ajuda a melhorar cada resposta." },
            { objective: "O5", q: "O entrevistador pergunta por dois anos sem trabalho em que cuidou da família. O que diz?", options: ["Inventa um trabalho", "Uma frase curta e honesta, e depois o que está pronto para fazer agora", "Recusa-se a responder", "Fala disso durante dez minutos"], answer: 1, why: "Uma resposta curta e honesta, seguida do que consegue fazer agora, é o mais forte." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Reconhecer burlas de emprego",
          minutes: 5,
          goal: "Reconhecer os sinais de alerta de uma burla de emprego e saber o que fazer.",
          text: [
            "As burlas de emprego visam quem precisa de trabalho. A Comissão Federal do Comércio dos EUA (Federal Trade Commission, FTC) avisa que os empregadores honestos nunca lhe pedem para pagar para conseguir um trabalho.",
            "Outros sinais de alerta: enviam-lhe um cheque e pedem que devolva parte do dinheiro ou que compre cartões-presente; prometem um grande salário por pouco trabalho; o trabalho é receber encomendas e reenviá-las; ou a oferta aparece do nada.",
            "Se uma oferta parece boa demais, pare. Procure você mesmo a empresa, ligue para o número de telefone verdadeiro dela ou pergunte no seu American Job Center. Nunca dê o seu número de banco ou da Segurança Social antes de confirmar que o trabalho é verdadeiro."
          ],
          steps: ["Nunca pague para conseguir um trabalho.", "Nunca deposite um cheque para depois devolver dinheiro.", "Procure você mesmo a empresa e ligue para o número verdadeiro dela.", "Pergunte no seu American Job Center se tiver dúvidas."],
          words: [["Burla do cheque falso", "um burlão envia um cheque, pede que devolva uma parte, depois o cheque não tem cobertura e você fica a dever ao banco."], ["FTC", "a Federal Trade Commission (Comissão Federal do Comércio), o serviço dos EUA que protege os consumidores contra burlas."]],
          sources: [{ name: "FTC: Job Scams", url: "https://consumer.ftc.gov/articles/job-scams" }],
          slides: [
            { title: "Nunca pague para conseguir um trabalho", bullets: ["A FTC: os empregadores honestos nunca pedem que pague", "Nada de taxas por kits, formação ou garantias"] },
            { title: "Outros sinais de alerta", bullets: ["Devolver dinheiro de um cheque", "Grande salário por pouco trabalho", "Reenviar encomendas", "Ofertas que aparecem do nada"] },
            { title: "Proteja-se", bullets: ["Procure você mesmo a empresa", "Ligue para o número verdadeiro dela", "Pergunte no seu American Job Center"] }
          ],
          tryIt: "Tarefa final: com o seu currículo adaptado a um anúncio real, peça à IA que lhe faça três perguntas de entrevista, responda a cada uma em voz alta e peça uma dica para melhorar cada resposta. Verifique se o anúncio tem sinais de alerta de burla.",
          youCanNow: "candidatar-se a um trabalho real com um currículo adaptado, praticar a entrevista e reconhecer burlas de emprego.",
          quickCheck: [
            { objective: "O6", q: "Qual é um sinal de alerta de uma burla de emprego?", options: ["Um anúncio com a morada verdadeira da empresa", "Uma entrevista no escritório da empresa", "Um grande salário prometido por muito pouco trabalho", "Um trabalho anunciado no seu American Job Center"], answer: 2, why: "Ofertas que prometem um grande salário por pouco trabalho são um sinal comum de burla." },
            { objective: "O6", q: "Um novo \"empregador\" envia uma SMS a pedir o seu número de banco antes de qualquer entrevista. O que faz?", options: ["Envia-o para receber mais depressa", "Envia metade do número", "Pede a um amigo para enviar o dele", "Para e procura você mesmo a empresa"], answer: 3, why: "Nunca dê o seu número de banco antes de confirmar que o trabalho é verdadeiro." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Candidatar-se e fazer a entrevista",
        questions: [
          { objective: "O4", q: "Porque adaptar o seu currículo a um anúncio de emprego?", options: ["Para o empregador ver que você serve para o trabalho", "Para o fazer mais comprido", "Para acrescentar habilidades que não tem", "Não serve para nada"], answer: 0, why: "Adaptar mostra que você serve, com as palavras do empregador." },
          { objective: "O4", q: "Ao adaptar, deve:", options: ["Acrescentar trabalhos que nunca teve", "Copiar o anúncio palavra por palavra", "Usar as suas habilidades reais com as palavras do empregador", "Tirar toda a sua experiência"], answer: 2, why: "O objetivo é adaptar com honestidade." },
          { objective: "O5", q: "Qual é uma boa forma de responder a \"Conte-me uma vez em que resolveu um problema\"?", options: ["\"Nunca tenho problemas.\"", "Uma longa lista de trabalhos", "\"Não sei.\"", "Uma história real e curta: o que aconteceu, o que fez, como acabou"], answer: 3, why: "Uma história curta mostra a sua habilidade com clareza." },
          { objective: "O6", q: "Uma \"empresa\" envia-lhe um cheque e pede que compre cartões-presente com parte dele. Isto é:", options: ["Uma tarefa normal do primeiro dia", "Uma burla do cheque falso", "Um bónus", "Formação"], answer: 1, why: "A FTC aponta isto como uma burla de emprego comum." },
          { objective: "O6", q: "Tem dúvidas se uma oferta de emprego é verdadeira. O que faz?", options: ["Procura você mesmo a empresa e liga para o número verdadeiro dela", "Envia o seu número de banco para verificar", "Paga a taxa para saber", "Aceita logo"], answer: 0, why: "Verificar por conta própria protege você." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: IA para o Emprego e a Preparação para o Trabalho",
    questions: [
      { objective: "O1", q: "Os American Job Centers ajudam com:", options: ["Empréstimos para carros", "Procura de emprego, encaminhamentos e colocação", "Só declarações de impostos", "Compra de casas"], answer: 1, why: "São centros públicos de emprego." },
      { objective: "O1", q: "O CareerOneStop funciona com:", options: ["Uma empresa de videojogos", "Um banco", "O Departamento do Trabalho dos EUA", "Uma rede social"], answer: 2, why: "É um site do Departamento do Trabalho." },
      { objective: "O1", q: "Que número de telefone ajuda a encontrar centros de emprego?", options: ["1-877-US-2JOBS", "911", "Um número de um anúncio no ecrã", "O número do seu banco"], answer: 0, why: "O 1-877-US-2JOBS é a linha de ajuda para o emprego do Departamento do Trabalho." },
      { objective: "O2", q: "Que experiência pode contar como habilidades de trabalho?", options: ["Só trabalhos de escritório", "Só trabalhos com diploma", "Nada que não seja pago", "Cuidar de alguém, voluntariado, trabalhos em dinheiro vivo e trabalhos pagos"], answer: 3, why: "O trabalho não pago e informal cria habilidades reais." },
      { objective: "O2", q: "Uma habilidade transferível é:", options: ["Uma habilidade que movimenta dinheiro", "Uma habilidade de uma parte da vida que ajuda noutro trabalho", "Um passe de autocarro", "Um tipo de currículo"], answer: 1, why: "Passa de uma situação para outra." },
      { objective: "O2", q: "Que habilidades devem ficar na sua lista?", options: ["As de que consegue dar um exemplo real", "Todas as que a IA sugere", "As que parecem impressionantes", "As do currículo de um amigo"], answer: 0, why: "Tem de conseguir prová-las." },
      { objective: "O3", q: "Um bom currículo é:", options: ["Cinco páginas", "Cheio de imagens", "Uma página, simples e limpo", "Escrito à mão"], answer: 2, why: "Curto e claro é o mais fácil para os empregadores." },
      { objective: "O3", q: "O que nunca deve ir para um currículo?", options: ["Habilidades", "Experiência", "Formação", "Número da Segurança Social"], answer: 3, why: "Os números privados ficam fora dos currículos." },
      { objective: "O3", q: "Porque guardar o currículo como PDF?", options: ["Mantém o mesmo aspeto em qualquer aparelho", "Fica mais comprido", "Acrescenta cor", "Os empregadores pagam por ele"], answer: 0, why: "Os PDF mantêm a disposição fixa." },
      { objective: "O3", q: "Onde pode escrever um currículo de graça?", options: ["Um estúdio de design pago", "Google Docs ou Word na web", "Uma SMS", "Uma calculadora"], answer: 1, why: "Os dois são ferramentas de documentos gratuitas." },
      { objective: "O4", q: "As palavras-chave são:", options: ["Palavras-passe", "As chaves da sua casa", "Palavras importantes do anúncio de emprego", "Códigos do banco"], answer: 2, why: "Usá-las mostra que corresponde." },
      { objective: "O4", q: "Um bom pedido para adaptar pede à IA para:", options: ["Inventar experiência", "Escrever um nome novo para você", "Fazer o currículo com três páginas", "Sugerir mudanças verdadeiras para corresponder melhor"], answer: 3, why: "A habilidade é adaptar com honestidade." },
      { objective: "O4", q: "Candidata-se a dois trabalhos diferentes. Deve:", options: ["Guardar uma cópia do currículo com o nome de cada trabalho", "Usar o mesmo currículo para todos os trabalhos sem mudanças", "Não se candidatar", "Copiar cada anúncio para o seu currículo"], answer: 0, why: "Cada trabalho recebe a sua própria cópia adaptada." },
      { objective: "O5", q: "Como pode a IA ajudar a preparar uma entrevista?", options: ["Vai à entrevista por você", "Faz de entrevistador e dá dicas", "Garante o trabalho", "Liga para o empregador"], answer: 1, why: "Praticar com comentários dá confiança." },
      { objective: "O5", q: "Pratique as respostas da entrevista:", options: ["Só na cabeça", "Nunca", "Em voz alta", "Só por escrito"], answer: 2, why: "Dizê-las em voz alta prepara para a entrevista verdadeira." },
      { objective: "O5", q: "Uma boa história de resposta inclui:", options: ["Só o problema", "A história de outra pessoa", "Nada concreto", "O que aconteceu, o que você fez e como acabou"], answer: 3, why: "Essa forma mostra a sua habilidade." },
      { objective: "O5", q: "Se tem um período sem trabalho, pratique:", options: ["Uma frase curta e honesta, e depois o que está pronto para fazer agora", "Escondê-lo", "Um longo pedido de desculpas", "Um trabalho inventado"], answer: 0, why: "Honesto e curto, e depois olhar em frente." },
      { objective: "O6", q: "Segundo a FTC, os empregadores honestos:", options: ["Cobram uma pequena taxa", "Nunca pedem que pague para conseguir um trabalho", "Querem cartões-presente", "Pagam com cheques que tem de devolver em parte"], answer: 1, why: "Pagar para conseguir um trabalho é um sinal de burla." },
      { objective: "O6", q: "Que trabalho é uma burla comum?", options: ["Caixa numa loja conhecida", "Auxiliar de biblioteca", "Receber e reenviar encomendas a partir de casa", "Motorista de autocarro escolar"], answer: 2, why: "Os trabalhos de reenvio de encomendas são uma burla conhecida." },
      { objective: "O6", q: "Quando deve dar o seu número de banco a um novo empregador?", options: ["Na primeira SMS", "Para conseguir a entrevista", "Antes de ver um anúncio de emprego", "Só depois de confirmar que é um trabalho verdadeiro"], answer: 3, why: "Confirme primeiro que o trabalho é verdadeiro." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      7,
      10,
      13,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Currículo de uma página",
        objective: "O3",
        notYet: "Tem mais de uma página, faltam partes ou tem números privados.",
        meets: "Uma página com linha de contacto, resumo, habilidades, experiência e estudos, sem números privados.",
        exceeds: "Lido em voz alta, com os erros corrigidos e guardado como PDF."
      },
      {
        name: "Adaptado ao anúncio",
        objective: "O4",
        notYet: "O currículo não usa as habilidades nem as palavras do anúncio, ou acrescenta coisas que não são verdade.",
        meets: "Usa as habilidades principais do anúncio em frases verdadeiras.",
        exceeds: "Guardado como uma cópia separada com o nome desse trabalho."
      },
      {
        name: "Habilidades reais",
        objective: "O2",
        notYet: "Tem habilidades de que o aluno não consegue dar um exemplo.",
        meets: "Cada habilidade tem um exemplo real de trabalho pago ou não pago.",
        exceeds: "Inclui habilidades não pagas, como cuidar de alguém ou voluntariado, com exemplos claros."
      },
      {
        name: "Respostas da entrevista",
        objective: "O5",
        notYet: "Menos de três respostas, ou não ditas em voz alta.",
        meets: "Três perguntas respondidas em voz alta, com uma dica pedida para cada uma.",
        exceeds: "Tentou cada resposta outra vez usando a dica, com uma história real e curta."
      },
      {
        name: "Verificação de burla",
        objective: "O6",
        notYet: "Não verificou se o anúncio tinha sinais de alerta.",
        meets: "Verificou se o anúncio tinha sinais de burla e procurou a empresa.",
        exceeds: "Sabe dizer que sinais de alerta estavam presentes e quais não estavam."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que se candidatam a pelo menos um trabalho em 30 dias (inquérito de seguimento)",
      "Alunos que conseguem uma entrevista de emprego ou um trabalho em 90 dias",
      "Alunos que visitam um American Job Center ou dizem ter evitado uma burla de emprego"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou de um centro de emprego",
      "Um assistente de IA gratuito: Microsoft Copilot, ChatGPT ou Google Gemini",
      "Google Docs ou Word na web (gratuitos) para escrever e guardar o currículo",
      "Um anúncio de emprego real a que o aluno possa concorrer",
      "Cerca de 60 minutos no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Ajude primeiro os alunos a encontrar as habilidades não pagas; muitos pensam que não têm nenhuma.",
      "Verifique em cada pedido e cada currículo se há números da Segurança Social, datas de nascimento e outros números privados.",
      "Junte os alunos aos pares para praticar a entrevista, para também responderem em voz alta a uma pessoa real.",
      "Faça parceria com o American Job Center local e convide um funcionário, se puder.",
      "Avalie a tarefa final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
