"use strict";

// Koach Learn course (Portuguese translation of shared/online-safety-responsible-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// US names (FTC, CISA, IdentityTheft.gov, ReportFraud.ftc.gov, 7726, 911) are kept: the course reporting steps are about the US.

module.exports = {
  id: "online-safety-responsible-ai-pt",
  lang: "pt",
  translationOf: "online-safety-responsible-ai",
  category: "Re-Entry",
  name: "Segurança na Internet e Uso Responsável da IA",
  skills: "Criar palavras-passe fortes, Ativar a verificação em dois passos, Reconhecer phishing e burlas com IA, Denunciar burlas e roubo de identidade, Verificar erros e preconceitos da IA, Usar a IA com honestidade na escola e no trabalho",
  outcome: "proteger as suas contas principais com frases-passe fortes e verificação em dois passos, reconhecer e denunciar phishing, deepfakes e burlas feitas com IA, e usar as ferramentas de IA com honestidade e justiça, verificando as respostas e cumprindo as regras da escola ou do trabalho.",
  about: [
    "Estar na internet traz riscos reais: contas roubadas, burlas e mensagens falsas que, graças à IA, parecem e soam verdadeiras. Traz também perguntas novas: quando é justo usar a IA, e como saber se ela está errada ou é injusta?",
    "Este curso é para todos: pessoas que voltam da prisão e regressam à internet, jovens, antigos militares, pessoas à procura de emprego e membros da comunidade. Não precisa de experiência com tecnologia.",
    "No Capítulo 1 vai aprender a proteger-se. No Capítulo 2 vai aprender a usar a IA com responsabilidade. Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Uma verificação de conhecimentos fecha cada capítulo e um questionário de 20 perguntas fecha o curso."
  ],
  finalTask: "Complete uma lista pessoal de segurança na internet e de uso responsável da IA: mude a palavra-passe do seu e-mail principal para uma frase-passe forte, ative a verificação em dois passos nesse e-mail, veja se o telefone e as aplicações têm atualizações, escreva os três lugares onde se denunciam burlas e escreva um cartão de cinco linhas com as suas regras pessoais para a IA, sobre privacidade, verificar respostas, honestidade, justiça e quando não usar a IA.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que voltam para casa depois da prisão (reintegração). Muitos estiveram fora enquanto os smartphones, as contas na internet e as ferramentas de IA mudavam, e agora estão a criar contas de e-mail, de emprego e de apoios sociais, muitas vezes pela primeira vez.",
    startingPoint: "Sabem fazer chamadas e enviar SMS num telefone simples; alguns têm uma conta de e-mail nova e já experimentaram um assistente de IA. Muitos repetem palavras-passe simples, nunca usaram a verificação em dois passos e nunca viram burlas com voz ou vídeo feitos por IA.",
    gap: "Quem está a reconstruir a vida é muitas vezes alvo de burlas que podem roubar apoios sociais, salários ou a identidade, e o mau uso da IA na escola ou no trabalho pode custar um certificado ou um emprego. Os alunos precisam de proteger as suas contas, reconhecer e denunciar burlas e usar a IA com privacidade, cuidado e honestidade.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas (cerca do 5.º ao 6.º ano)",
      "Aparelhos: talvez só um telefone simples ou um computador da biblioteca com tempo limitado",
      "Tempo: lições de 5 minutos, que cabem entre consultas e o trabalho",
      "Algumas condições de liberdade condicional ou de pena suspensa limitam o uso da internet; cada aluno cumpre as suas próprias condições",
      "Risco alto de burlas e de perda de privacidade: nenhuma palavra-passe, número de processo ou número privado verdadeiro é partilhado nas tarefas de prática"
    ],
    prerequisites: "Nenhum. O curso \"Introdução à IA e Confiança Digital\" é um bom primeiro passo para quem nunca usou IA."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Para a sua conta de e-mail principal", action: "criar uma frase-passe forte, ativar a verificação em dois passos e ver se o telefone e as aplicações têm atualizações", standard: "sem ajuda, com os códigos de reserva guardados em privado" },
    { id: "O2", condition: "Com uma mensagem ou uma chamada, incluindo voz ou vídeo feitos por IA", action: "identificar os sinais de alerta de phishing e de burlas feitas com IA", standard: "acertando pelo menos 4 de 5" },
    { id: "O3", condition: "Quando encontra uma burla ou as suas informações são roubadas", action: "dizer onde a denunciar e os primeiros passos para se proteger", standard: "nomeando os três lugares de denúncia dos Estados Unidos" },
    { id: "O4", condition: "Antes de enviar um pedido a uma ferramenta de IA", action: "rever o pedido e retirar as informações privadas", standard: "sem partilhar palavras-passe nem números de identidade, de processo, de banco ou de cartão" },
    { id: "O5", condition: "Com uma resposta da IA", action: "verificar se tem dados errados ou preconceitos injustos", standard: "antes de a usar" },
    { id: "O6", condition: "Na escola, no trabalho ou na internet", action: "cumprir as regras sobre o uso da IA, dizer como a IA ajudou e escolher quando não usar a IA", standard: "num cartão de cinco linhas com as suas regras pessoais para a IA" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Proteger-se na internet",
      lessons: [
        {
          objectives: ["O1"],
          title: "Palavras-passe fortes e verificação em dois passos",
          minutes: 5,
          goal: "Criar uma frase-passe forte e ativar a verificação em dois passos no seu e-mail.",
          text: [
            "O seu e-mail é a chave de tudo: se alguém entrar nele, pode mudar as suas outras palavras-passe. Proteja-o primeiro.",
            "Uma palavra-passe forte é longa e única. Uma forma fácil é uma frase-passe: quatro ou mais palavras ao acaso, como \"maple-river-tiger-lamp\". Use uma palavra-passe diferente para cada conta importante. Um gestor de palavras-passe, que já vem em muitos telefones e navegadores, pode lembrar-se delas por você.",
            "Ative a verificação em dois passos, também chamada autenticação multifator ou MFA. Depois da palavra-passe, você também escreve um código que chega ao seu telefone ou aprova um aviso. Mesmo que alguém roube a sua palavra-passe, não consegue entrar. A agência de cibersegurança dos Estados Unidos (CISA) recomenda palavras-passe fortes, MFA, um gestor de palavras-passe e manter os programas atualizados."
          ],
          steps: ["Crie uma frase-passe com quatro ou mais palavras ao acaso.", "Mude a palavra-passe do seu e-mail para essa frase.", "Abra as definições de segurança da sua conta de e-mail.", "Ative a verificação em dois passos (MFA) e siga os passos.", "Guarde os códigos de reserva num lugar seguro e privado."],
          words: [["Frase-passe", "uma palavra-passe feita de várias palavras ao acaso."], ["MFA / verificação em dois passos", "uma segunda verificação, como um código no telefone, depois da palavra-passe."], ["Gestor de palavras-passe", "uma aplicação segura que guarda as suas palavras-passe."]],
          slides: [
            { title: "Proteja primeiro o seu e-mail", bullets: ["Com ele, mudam-se as outras contas"] },
            { title: "Palavras-passe fortes", bullets: ["Longas e únicas", "Quatro ou mais palavras ao acaso", "Uma diferente para cada conta importante"] },
            { title: "Verificação em dois passos (MFA)", bullets: ["Palavra-passe mais um código ou aviso no telefone", "Trava a maioria dos ataques com palavras-passe roubadas", "Guarde bem os códigos de reserva"] }
          ],
          sources: [{ name: "CISA: Cybersecurity Awareness and Secure Our World", url: "https://www.cisa.gov/secure-our-world" }],
          tryIt: "Mude a palavra-passe do seu e-mail principal para uma frase-passe forte e ative a verificação em dois passos. Se não puder fazer agora, escreva os passos e faça-o hoje.",
          youCanNow: "criar uma frase-passe forte e proteger o seu e-mail com a verificação em dois passos.",
          quickCheck: [
            { objective: "O1", q: "Porque deve proteger primeiro a sua conta de e-mail?", options: ["Tem mais fotografias", "É a mais difícil de usar", "Quem entrar no seu e-mail pode mudar as suas outras palavras-passe", "As contas de e-mail custam dinheiro"], answer: 2, why: "O seu e-mail é a chave das outras contas, porque é para lá que vão os pedidos para mudar a palavra-passe." },
            { objective: "O1", q: "A palavra-passe do site de emprego é igual à do seu e-mail. O que faz?", options: ["Cria uma frase-passe forte diferente para cada uma", "Deixa ficar; uma só é mais fácil", "Escreve-a na capa do telefone", "Partilha-a com um amigo para não esquecer"], answer: 0, why: "Use uma palavra-passe diferente para cada conta importante." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Reconhecer phishing e burlas feitas com IA",
          minutes: 6,
          goal: "Reconhecer mensagens de phishing, chamadas falsas e deepfakes antes de clicar ou pagar.",
          text: [
            "Phishing é uma mensagem falsa, por e-mail, SMS ou redes sociais, que tenta levar você a clicar num link, partilhar informações ou enviar dinheiro. A Comissão Federal do Comércio dos Estados Unidos (FTC) indica sinais comuns: uma mensagem que não esperava de uma empresa que conhece, a ideia de que há um problema na sua conta ou num pagamento, um pedido para confirmar dados pessoais e um link para \"atualizar\" o pagamento.",
            "A IA torna as burlas mais convincentes. Os burlões podem escrever mensagens perfeitas, fazer vídeos falsos chamados deepfakes e copiar a voz de uma pessoa a partir de uma gravação curta. Uma chamada pode soar igual à do seu neto, do seu chefe ou de um agente da liberdade condicional.",
            "Os sinais de alerta são os mesmos: apressam você, assustam você, pedem cartões-presente, transferências bancárias ou criptomoedas, ou pedem um código enviado para o seu telefone. Pare. Não clique. Contacte a pessoa ou a empresa por um número ou site que já sabe que é verdadeiro."
          ],
          steps: ["Pare: esta mensagem é inesperada ou urgente?", "Não clique em links nem abra anexos.", "Veja se pedem dinheiro, cartões-presente, criptomoedas ou códigos.", "Contacte a pessoa ou a empresa por um número que já conhece.", "Denuncie e apague a mensagem."],
          words: [["Phishing", "uma mensagem falsa que tenta roubar informações ou dinheiro."], ["Deepfake", "um vídeo, imagem ou voz falsos feitos com IA para parecerem verdadeiros."], ["Clonagem de voz", "usar a IA para copiar a voz de alguém."]],
          slides: [
            { title: "Sinais de phishing (FTC)", bullets: ["Mensagem inesperada de uma empresa conhecida", "\"Há um problema na sua conta ou no pagamento\"", "Pede para confirmar dados ou clicar para pagar"] },
            { title: "A IA torna as burlas convincentes", bullets: ["Escrita perfeita", "Vídeos deepfake", "Vozes copiadas de pessoas que conhece"] },
            { title: "Os mesmos sinais de alerta", bullets: ["Pressa ou medo", "Cartões-presente, transferências, cripto, códigos", "Ligue de volta para um número que conhece"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }],
          tryIt: "Procure no seu e-mail e nas suas SMS uma mensagem que possa ser phishing. Faça a lista dos sinais de alerta que ela mostra. Com a sua família, combinem uma palavra secreta para confirmar chamadas de emergência.",
          youCanNow: "reconhecer burlas de phishing, deepfake e voz copiada e reagir com segurança.",
          quickCheck: [
            { objective: "O2", q: "O que é phishing?", options: ["Uma mensagem segura do seu banco", "Uma forma de fazer cópia de segurança do telefone", "Um tipo de palavra-passe", "Uma mensagem falsa que tenta levar você a clicar, partilhar dados ou enviar dinheiro"], answer: 3, why: "Phishing é uma mensagem falsa que tenta enganar você." },
            { objective: "O2", q: "Uma chamada soa igual à do seu agente da liberdade condicional e diz para pagar hoje uma taxa por transferência bancária. O que faz?", options: ["Paga já para não ter problemas", "Desliga e liga para o serviço por um número que já conhece", "Dá o código que chegou ao seu telefone", "Liga de volta para o número que ligou"], answer: 1, why: "A IA pode copiar vozes; a pressa e as transferências são sinais de alerta, por isso ligue para um número que conhece." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Denunciar burlas e recuperar de um roubo de identidade",
          minutes: 5,
          goal: "Dizer onde denunciar burlas e os primeiros passos se as suas informações forem roubadas.",
          text: [
            "Denunciar ajuda a travar os burlões e pode ajudar você a recuperar. Nos Estados Unidos, a FTC diz para reencaminhar os e-mails de phishing para reportphishing@apwg.org, reencaminhar as SMS de burla para o 7726 (SPAM) e denunciar fraudes em ReportFraud.ftc.gov.",
            "Se deu um número da Segurança Social, de cartão de crédito ou de conta bancária, a FTC diz para ir a IdentityTheft.gov e seguir os passos para o que perdeu. Aja depressa: ligue para o seu banco, mude as palavras-passe e pense num alerta de fraude ou num bloqueio de crédito.",
            "Se clicou num link perigoso, atualize o programa de segurança, faça uma verificação e retire tudo o que ele assinalar. Fora dos Estados Unidos, denuncie à unidade de crimes informáticos da polícia do seu país ou à entidade de defesa do consumidor."
          ],
          steps: ["E-mail de phishing: reencaminhe para reportphishing@apwg.org.", "SMS de burla: reencaminhe para o 7726.", "Fraude: denuncie em ReportFraud.ftc.gov.", "Informações roubadas: siga IdentityTheft.gov e ligue para o seu banco.", "Clicou num link: atualize o programa de segurança e faça uma verificação."],
          words: [["Roubo de identidade", "quando alguém usa as suas informações pessoais para fingir que é você."], ["Bloqueio de crédito", "um bloqueio que impede que se abra crédito novo em seu nome."]],
          slides: [
            { title: "Onde denunciar (Estados Unidos)", bullets: ["E-mails de phishing: reportphishing@apwg.org", "SMS de burla: reencaminhe para o 7726", "Fraude: ReportFraud.ftc.gov"] },
            { title: "Informações roubadas?", bullets: ["IdentityTheft.gov", "Ligue para o seu banco", "Mude as palavras-passe; pense num bloqueio de crédito"] },
            { title: "Clicou num link perigoso?", bullets: ["Atualize o programa de segurança", "Faça uma verificação", "Retire o que ele assinalar"] }
          ],
          sources: [{ name: "FTC: How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }, { name: "IdentityTheft.gov", url: "https://www.identitytheft.gov/" }, { name: "ReportFraud.ftc.gov", url: "https://reportfraud.ftc.gov/" }],
          tryIt: "Escreva os três lugares dos Estados Unidos onde se denunciam burlas (ou os do seu país) num cartão ou nas notas do telefone.",
          youCanNow: "denunciar burlas e dar os primeiros passos depois de um roubo de identidade.",
          quickCheck: [
            { objective: "O3", q: "Segundo a FTC, aonde deve ir se o seu número da Segurança Social foi roubado?", options: ["IdentityTheft.gov", "Qualquer site com um número de telefone", "À pessoa que o roubou", "A um grupo nas redes sociais"], answer: 0, why: "A FTC envia as pessoas para IdentityTheft.gov, com passos para o que foi perdido." },
            { objective: "O3", q: "Deu o número do seu cartão do banco a um site falso. O que faz primeiro?", options: ["Espera para ver se acontece alguma coisa", "Publica sobre isso na internet", "Liga já para o seu banco e muda as palavras-passe", "Dá também o PIN ao site"], answer: 2, why: "Aja depressa: ligue para o banco e mude as palavras-passe." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Proteger-se na internet",
        questions: [
          { objective: "O1", q: "Qual é a palavra-passe mais forte?", options: ["password123", "a sua data de nascimento", "maple-river-tiger-lamp", "123456"], answer: 2, why: "Frases-passe longas, com palavras ao acaso, são fortes." },
          { objective: "O1", q: "O que faz a verificação em dois passos (MFA)?", options: ["Junta uma segunda verificação, como um código no telefone, depois da palavra-passe", "Torna a palavra-passe mais curta", "Partilha a palavra-passe com amigos", "Desliga a sua conta"], answer: 0, why: "Uma segunda verificação trava quem só tem a sua palavra-passe." },
          { objective: "O2", q: "Recebe uma chamada com a voz do seu neto a pedir cartões-presente já. O que faz?", options: ["Compra os cartões depressa", "Lê-lhe o seu número do banco", "Envia criptomoedas", "Desliga e liga-lhe de volta para um número que conhece"], answer: 3, why: "A IA pode copiar vozes; ligue de volta para um número conhecido." },
          { objective: "O2", q: "O que é um deepfake?", options: ["Uma piscina funda", "Um vídeo, imagem ou voz falsos feitos com IA", "Uma palavra-passe forte", "Uma notícia verdadeira"], answer: 1, why: "Os deepfakes são falsificações feitas com IA que parecem ou soam verdadeiras." },
          { objective: "O3", q: "Nos Estados Unidos, para onde a FTC diz para reencaminhar as SMS de burla?", options: ["911", "7726 (SPAM)", "Para o burlão", "Para os seus contactos"], answer: 1, why: "A FTC diz para reencaminhar as SMS de burla para o 7726." }
        ]
      }
    },
    {
      name: "Capítulo 2: Usar a IA com responsabilidade",
      lessons: [
        {
          objectives: ["O4"],
          title: "Proteger a privacidade quando usa a IA",
          minutes: 5,
          goal: "Decidir o que é seguro escrever numa ferramenta de IA e o que não é.",
          text: [
            "O que escreve numa conversa com a IA pode ficar guardado e, conforme a ferramenta e as definições, ser usado para a melhorar. Trate-a como se estivesse a falar num lugar público.",
            "Nunca escreva: palavras-passe, números da Segurança Social ou de identidade, números de banco ou de cartão, números de processo ou de recluso, dados médicos ligados ao seu nome, nem informações privadas de outras pessoas. Use marcadores como \"[o meu número]\" ou descrições gerais.",
            "Procure nas definições da ferramenta os controlos de privacidade e de dados, por exemplo para desligar o histórico das conversas ou o treino com as suas conversas, quando existir. Na escola ou no trabalho, use só as ferramentas de IA que a escola ou o empregador permitem e cumpra as regras sobre que informações se podem pôr."
          ],
          steps: ["Leia o seu pedido antes de o enviar.", "Retire números privados, nomes e dados médicos.", "Use marcadores como \"[o meu número]\".", "Veja as definições de privacidade da ferramenta.", "Na escola ou no trabalho, use só ferramentas aprovadas."],
          words: [["Definições de privacidade", "opções que controlam o que uma aplicação guarda e partilha sobre você."], ["Marcador", "algo como \"[o meu número]\" que fica no lugar dos dados privados verdadeiros."]],
          slides: [
            { title: "A conversa com a IA não é um diário", bullets: ["O que escreve pode ficar guardado", "Trate-a como um lugar público"] },
            { title: "Nunca escreva", bullets: ["Palavras-passe, números de identidade ou de processo", "Números de banco ou de cartão", "Dados privados de outras pessoas"] },
            { title: "Fique no controlo", bullets: ["Use marcadores", "Veja as definições de privacidade", "Use ferramentas aprovadas na escola ou no trabalho"] }
          ],
          tryIt: "Abra as definições de um assistente de IA que usa e encontre os controlos de privacidade ou de dados. Depois reescreva este pedido de forma segura: \"O meu número da Segurança Social é 123-45-6789, ajude-me a preencher este formulário.\"",
          youCanNow: "deixar as informações privadas fora das ferramentas de IA e usar as suas definições de privacidade.",
          quickCheck: [
            { objective: "O4", q: "Escrever numa conversa com a IA é mais parecido com quê?", options: ["Escrever num diário fechado à chave", "Falar num lugar público", "Falar com o seu advogado", "Falar baixinho consigo mesmo"], answer: 1, why: "O que escreve pode ficar guardado, por isso trate-o como falar em público." },
            { objective: "O4", q: "Quer a ajuda da IA com um formulário de habitação que pede o seu número de processo. O que escreve?", options: ["O seu número de processo verdadeiro", "O seu número de processo e a data de nascimento", "O número de processo de um amigo", "Um marcador como \"[o meu número]\""], answer: 3, why: "Um marcador dá-lhe ajuda sem partilhar números privados." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Verificar erros e preconceitos da IA",
          minutes: 5,
          goal: "Verificar se uma resposta da IA tem erros ou preconceitos injustos antes de a usar.",
          text: [
            "A IA pode estar errada com toda a confiança. Pode inventar dados, citações, leis ou fontes; a isto chama-se alucinação. Verifique sempre os dados importantes numa fonte oficial ou de confiança.",
            "A IA também pode ter preconceitos: aprendeu com textos escritos por pessoas, que incluem estereótipos injustos. Pode descrever as enfermeiras como mulheres e os engenheiros como homens, ou tratar as pessoas de forma diferente pelo nome, idade, raça, deficiência ou registo criminal. Na contratação, no crédito, na habitação ou na escola, isto pode causar danos reais.",
            "Teste-a: faça a mesma pergunta mudando um só detalhe, como o nome, e compare as respostas. Se a IA tratar as pessoas de forma injusta, não use essa resposta e denuncie-a com o botão de comentários da ferramenta."
          ],
          steps: ["Encontre os dados na resposta e verifique-os numa fonte de confiança.", "Procure estereótipos ou ideias injustas.", "Pergunte outra vez mudando um detalhe e compare.", "Não use respostas injustas ou erradas.", "Denuncie os problemas com o botão de comentários da ferramenta."],
          words: [["Alucinação", "quando a IA diz uma coisa falsa como se fosse verdade."], ["Preconceito", "tratamento ou ideias injustas sobre um grupo de pessoas."], ["Estereótipo", "uma ideia simplista demais sobre um grupo."]],
          slides: [
            { title: "A IA pode errar com toda a confiança", bullets: ["Dados, citações e fontes inventados", "Verifique o que importa em fontes de confiança"] },
            { title: "A IA pode ter preconceitos", bullets: ["Aprendeu com textos escritos por pessoas", "Estereótipos de género, raça, idade, registo criminal", "Danos reais na contratação, habitação, escola"] },
            { title: "Teste e denuncie", bullets: ["Mude um detalhe e compare", "Não use respostas injustas", "Use o botão de comentários"] }
          ],
          tryIt: "Peça a um assistente de IA para \"descrever uma enfermeira típica e um engenheiro típico\". Procure estereótipos. Depois peça-lhe uma carta de recomendação para \"Maria\" e outra para \"James\" com os mesmos dados, e compare.",
          youCanNow: "verificar se as respostas da IA têm erros e testá-las para ver se têm preconceitos injustos.",
          quickCheck: [
            { objective: "O5", q: "O que é o preconceito da IA?", options: ["Quando a IA é lenta", "Quando a IA usa palavras difíceis", "Quando a IA trata grupos de pessoas de forma injusta ou usa estereótipos", "Quando a IA responde em lista"], answer: 2, why: "A IA aprendeu com textos escritos por pessoas, por isso pode repetir estereótipos injustos." },
            { objective: "O5", q: "A IA dá-lhe uma regra sobre votar depois de uma condenação. O que faz antes de confiar nela?", options: ["Verifica-a numa fonte oficial ou de confiança", "Confia porque parece segura", "Partilha-a primeiro com amigos", "Pergunta à IA se tem a certeza"], answer: 0, why: "A IA pode inventar regras; verifique os dados importantes numa fonte oficial." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Usar a IA com honestidade na escola, no trabalho e na internet",
          minutes: 5,
          goal: "Cumprir as regras sobre o uso da IA e dizer com honestidade quando a usou.",
          text: [
            "As regras sobre a IA são diferentes. Alguns professores permitem a IA para ter ideias, mas não para escrever; alguns empregos exigem-na; outros proíbem-na. Pergunte ou leia as regras primeiro. Apresentar trabalho da IA como seu onde isso não é permitido é fazer batota e pode custar uma nota, um emprego ou um certificado.",
            "Seja honesto. Se a IA ajudou, diga como, quando isso importa: \"Usei um assistente de IA para verificar a gramática.\" Nunca use a IA para fazer comentários falsos, documentos falsos, ou imagens ou vídeos de pessoas reais sem o consentimento delas. Fazer imagens falsas sexuais ou vergonhosas de pessoas reais causa danos e, em muitos lugares, é crime.",
            "Saiba quando não usar a IA: emergências (ligue para o 911), decisões sérias de saúde, legais ou de dinheiro (fale com um profissional) e tudo o que não quer que fique guardado. Você é responsável pelo que envia ou publica, mesmo que a IA o tenha escrito."
          ],
          steps: ["Leia ou pergunte quais são as regras sobre a IA na sua escola ou trabalho.", "Use a IA só da forma permitida.", "Diga como a IA ajudou, quando isso importa.", "Nunca faça falsificações de pessoas ou documentos reais.", "Não use a IA em emergências nem em grandes decisões."],
          words: [["Honestidade académica", "fazer o seu próprio trabalho e dizer que ajuda usou."], ["Consentimento", "a autorização de uma pessoa."]],
          slides: [
            { title: "Conheça as regras", bullets: ["As regras mudam de turma para turma e de emprego para emprego", "Pergunte ou leia-as primeiro", "Não as cumprir pode custar notas ou empregos"] },
            { title: "Seja honesto", bullets: ["Diga como a IA ajudou", "Nada de comentários ou documentos falsos", "Nada de falsificações de pessoas reais sem consentimento"] },
            { title: "Quando não usar a IA", bullets: ["Emergências: ligue para o 911", "Grandes decisões de saúde, legais ou de dinheiro", "Você é responsável pelo que publica"] }
          ],
          tryIt: "Tarefa final: termine a sua lista de segurança (frase-passe, verificação em dois passos, atualizações, lugares de denúncia) e escreva um cartão de cinco linhas com as suas regras pessoais para a IA, sobre privacidade, verificar respostas, honestidade, justiça e quando não usar a IA.",
          youCanNow: "proteger as suas contas, evitar e denunciar burlas e usar a IA com segurança, honestidade e justiça.",
          quickCheck: [
            { objective: "O6", q: "Quem é responsável por uma mensagem que publica e que foi escrita pela IA?", options: ["A empresa da IA", "Ninguém", "O site", "Você"], answer: 3, why: "Você é responsável pelo que envia ou publica, mesmo que a IA o tenha escrito." },
            { objective: "O6", q: "O seu programa de formação não permite a IA no teste final. Qual é a escolha honesta?", options: ["Usar a IA às escondidas", "Cumprir a regra e fazer o teste sozinho", "Pedir a um amigo que use a IA por você", "Copiar uma resposta da IA e mudar algumas palavras"], answer: 1, why: "Usar a IA onde não é permitido é fazer batota e pode custar o certificado." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Usar a IA com responsabilidade",
        questions: [
          { objective: "O4", q: "O que é seguro escrever num assistente de IA?", options: ["O seu número da Segurança Social", "A palavra-passe do seu banco", "O historial médico de um amigo", "\"Ajude-me a escrever uma nota de agradecimento ao meu gestor de caso\""], answer: 3, why: "Pedidos gerais, sem dados privados, são seguros." },
          { objective: "O5", q: "O que é uma alucinação da IA?", options: ["Quando a IA diz uma coisa falsa como se fosse verdade", "Um sonho", "Uma palavra-passe forte", "Um tipo de vírus"], answer: 0, why: "A IA pode inventar dados com toda a confiança." },
          { objective: "O5", q: "Como pode testar se uma ferramenta de IA tem preconceitos?", options: ["Confiar nela", "Perguntar-lhe se tem preconceitos e acreditar", "Fazer a mesma pergunta mudando um detalhe e comparar", "Usá-la só à noite"], answer: 2, why: "Mudar um detalhe mostra se ela trata as pessoas de forma diferente." },
          { objective: "O6", q: "O seu professor só permite a IA para ter ideias. O que é honesto?", options: ["Pedir à IA que escreva a redação toda e dizer que é sua", "Copiar a redação feita com IA de um amigo", "Ignorar a regra", "Usá-la para ter ideias e depois escrever o trabalho sozinho"], answer: 3, why: "Cumpra as regras sobre como a IA pode ser usada." },
          { objective: "O6", q: "Alguém está a ter uma emergência médica. O que faz?", options: ["Pergunta a um chatbot de IA", "Publica na internet", "Liga para o 911", "Espera"], answer: 2, why: "As emergências precisam dos serviços de emergência, não da IA." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Segurança na Internet e Uso Responsável da IA",
    questions: [
      { objective: "O1", q: "Que conta deve proteger primeiro?", options: ["Uma conta de jogos", "O seu e-mail", "Um site de receitas", "Uma aplicação do tempo"], answer: 1, why: "Com o e-mail é possível mudar as suas outras palavras-passe." },
      { objective: "O1", q: "Uma frase-passe é:", options: ["Uma palavra-passe feita de várias palavras ao acaso", "O seu nome e a data de nascimento", "Um número curto", "Um código do telefone"], answer: 0, why: "Palavras ao acaso fazem palavras-passe longas e fortes." },
      { objective: "O1", q: "Deve usar a mesma palavra-passe em todo o lado?", options: ["Sim, é mais fácil", "Só nos bancos", "Não, use uma diferente para cada conta importante", "Só no e-mail"], answer: 2, why: "Uma só palavra-passe roubada abriria tudo." },
      { objective: "O1", q: "Um gestor de palavras-passe:", options: ["Guarda as suas palavras-passe com segurança", "Partilha-as na internet", "Adivinha as palavras-passe dos outros", "Apaga as suas contas"], answer: 0, why: "Lembra-se das palavras-passe fortes por você." },
      { objective: "O1", q: "Que agência dos Estados Unidos recomenda palavras-passe fortes, MFA e atualizações na sua campanha de sensibilização?", options: ["NASA", "Os Correios", "O Serviço Nacional de Parques", "CISA"], answer: 3, why: "A CISA lidera a sensibilização para a cibersegurança nos Estados Unidos." },
      { objective: "O2", q: "Uma SMS inesperada diz que a sua conta bancária está bloqueada e traz um link. Você deve:", options: ["Clicar e pôr os seus dados de entrada", "Não clicar; contactar o banco por um número que conhece", "Responder com o número do seu cartão", "Reencaminhá-la aos amigos"], answer: 1, why: "Este é um sinal clássico de phishing." },
      { objective: "O2", q: "Burlões que pedem pagamento com cartões-presente são:", options: ["Normais nos serviços do governo", "Um sinal de alerta de burla", "Uma forma segura de pagar contas", "Uma exigência dos bancos"], answer: 1, why: "Os serviços verdadeiros não pedem cartões-presente." },
      { objective: "O2", q: "Clonagem de voz quer dizer:", options: ["Cantar num coro", "Gravar a sua própria mensagem de voz", "Uma atualização do telefone", "Usar a IA para copiar a voz de alguém"], answer: 3, why: "Os burlões podem copiar vozes a partir de gravações curtas." },
      { objective: "O2", q: "Uma palavra secreta da família ajuda a:", options: ["Confirmar se uma chamada de emergência é mesmo da família", "Desbloquear o telefone", "Ter descontos", "Mudar palavras-passe"], answer: 0, why: "Uma voz copiada não sabe a palavra secreta." },
      { objective: "O3", q: "Onde se denunciam fraudes nos Estados Unidos?", options: ["Numa secção de comentários", "No site do burlão", "ReportFraud.ftc.gov", "Em lado nenhum"], answer: 2, why: "A FTC recolhe as denúncias de fraude." },
      { objective: "O3", q: "Se o seu número da Segurança Social foi roubado, a FTC envia você para:", options: ["Um grupo nas redes sociais", "Um chatbot de IA", "Nada", "IdentityTheft.gov"], answer: 3, why: "IdentityTheft.gov dá os passos para recuperar." },
      { objective: "O3", q: "Um bloqueio de crédito:", options: ["Bloqueia a sua conta bancária para sempre", "Arrefece o computador", "Impede que se abra crédito novo em seu nome", "Apaga o seu historial de crédito"], answer: 2, why: "Impede os ladrões de abrir contas novas." },
      { objective: "O3", q: "O que deve fazer se clicou num link perigoso?", options: ["Nada", "Atualizar o programa de segurança e fazer uma verificação", "Clicar em mais links", "Deitar o telefone fora"], answer: 1, why: "Uma verificação encontra e retira os programas perigosos." },
      { objective: "O4", q: "Escrever numa conversa com a IA é mais parecido com:", options: ["Falar num lugar público", "Escrever num diário fechado à chave", "Pensar em silêncio", "Falar com um advogado"], answer: 0, why: "As conversas podem ficar guardadas, por isso tenha cuidado." },
      { objective: "O4", q: "Em vez de escrever o seu número de processo na IA, use:", options: ["O número verdadeiro", "Metade do número", "Um marcador como \"[o meu número]\"", "O seu número da Segurança Social"], answer: 2, why: "Os marcadores protegem os dados privados." },
      { objective: "O5", q: "O preconceito da IA quer dizer:", options: ["Tratamento ou ideias injustas sobre grupos de pessoas", "Uma resposta rápida", "Uma resposta longa", "Um tipo de palavra-passe"], answer: 0, why: "A IA pode repetir estereótipos injustos." },
      { objective: "O5", q: "Uma ferramenta de IA dá uma nota mais baixa a um candidato a emprego só por causa do nome. Você deve:", options: ["Usá-la na mesma", "Mudar o nome do candidato", "Escondê-lo", "Não usar esse resultado e denunciá-lo"], answer: 3, why: "Um resultado injusto da IA não pode ser usado." },
      { objective: "O6", q: "Se a IA ajudou no seu trabalho e isso importa, você deve:", options: ["Esconder", "Dizer como a IA ajudou", "Dizer que fez tudo sozinho", "Culpar a IA pelos erros"], answer: 1, why: "Ser honesto sobre o uso da IA cria confiança." },
      { objective: "O6", q: "Fazer com IA uma imagem falsa e vergonhosa de um colega de turma real é:", options: ["Uma brincadeira sem mal", "Prejudicial e crime em muitos lugares", "Obrigatório na escola", "Bom para a segurança"], answer: 1, why: "Falsificações de pessoas reais sem consentimento causam danos reais." },
      { objective: "O6", q: "Quem é responsável por uma publicação que partilha e que foi escrita pela IA?", options: ["A IA", "Ninguém", "O fornecedor de internet", "Você"], answer: 3, why: "Você é responsável pelo que envia ou publica." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      1,
      5,
      6,
      9,
      10,
      14,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "E-mail protegido",
        objective: "O1",
        notYet: "A palavra-passe do e-mail é curta ou repetida, ou a verificação em dois passos está desligada.",
        meets: "A palavra-passe do e-mail é uma frase-passe forte e a verificação em dois passos está ligada.",
        exceeds: "Os códigos de reserva estão guardados em privado e as outras contas importantes têm palavras-passe próprias."
      },
      {
        name: "Atualizações verificadas",
        objective: "O1",
        notYet: "Não se viu se o telefone e as aplicações tinham atualizações.",
        meets: "O telefone e as aplicações foram verificados e atualizados.",
        exceeds: "As atualizações automáticas estão ligadas onde existem."
      },
      {
        name: "Lugares de denúncia",
        objective: "O3",
        notYet: "Escreveu menos de três lugares de denúncia.",
        meets: "Escreveu 7726 para SMS, reportphishing@apwg.org para e-mails e ReportFraud.ftc.gov para fraudes.",
        exceeds: "Também escreveu IdentityTheft.gov e os primeiros passos se as informações forem roubadas."
      },
      {
        name: "Cartão de regras pessoais para a IA",
        objective: "O6",
        notYet: "Menos de cinco linhas, ou falta uma linha sobre privacidade ou honestidade.",
        meets: "Cinco linhas sobre privacidade, verificar respostas, honestidade, justiça e quando não usar a IA.",
        exceeds: "Cada linha dá um exemplo real da vida do próprio aluno."
      },
      {
        name: "Privacidade nos pedidos",
        objective: "O4",
        notYet: "O cartão de regras ou os pedidos de prática têm números privados.",
        meets: "Nenhum número privado em lado nenhum, e usam-se marcadores.",
        exceeds: "O aluno viu as definições de privacidade da sua ferramenta de IA."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que dizem ter a verificação em dois passos ainda ligada no e-mail 30 dias depois (inquérito de seguimento)",
      "Alunos que dizem ter reconhecido e evitado uma burla em 60 dias",
      "Os parceiros de reintegração dizem que menos clientes perdem dinheiro ou contas por causa de burlas"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com internet, ou um computador da biblioteca ou do programa",
      "Acesso às definições da conta de e-mail do próprio aluno",
      "Um telefone que possa receber códigos para a verificação em dois passos",
      "Papel e caneta para a lista e para o cartão de regras pessoais para a IA",
      "Cerca de 60 minutos no total, em sessões curtas: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão, com as tarefas \"Experimente agora\" feitas ao vivo.",
      "Nunca peça aos alunos para dizer ou mostrar as palavras-passe, os números de processo ou os códigos de reserva; eles fazem as mudanças em privado.",
      "Mostre exemplos de mensagens de burla num ecrã e peça ao grupo para dizer em voz alta os sinais de alerta.",
      "Lembre aos alunos em liberdade condicional ou com pena suspensa que cumpram as condições sobre o uso da internet.",
      "Avalie a lista final com a grelha de avaliação e dê comentários sobre uma linha Ainda não de cada vez."
    ]
  }
};
