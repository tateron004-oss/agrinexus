"use strict";

// Koach Learn course (Portuguese translation of shared/ride-and-food-apps.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".
// Uber, Lyft, DoorDash, Uber Eats, Instacart, Share My Trip and the US emergency number 911 are kept as in the English.

module.exports = {
  id: "ride-and-food-apps-pt",
  lang: "pt",
  translationOf: "ride-and-food-apps",
  category: "Seniors and Technology",
  name: "Pedir uma Viagem ou Comida com Aplicações (Uber, Lyft, DoorDash)",
  skills: "Configurar uma aplicação de viagens ou de entregas, Pedir uma viagem, Confirmar que é o carro certo, Pedir comida ou compras para entrega, Verificar preços, gorjetas e recibos",
  outcome: "configurar uma aplicação de viagens ou de entregas, ver o preço antes de reservar, pedir uma viagem e confirmar que é o carro certo antes de entrar, pedir comida ou compras até à sua porta e verificar o recibo no fim.",
  about: [
    "Aplicações de viagens como a Uber e a Lyft enviam um motorista para ir buscar você. Aplicações de entregas como a DoorDash, a Uber Eats e a Instacart levam refeições ou compras até à sua porta. Ajudam quando você não conduz, não consegue ir à loja ou precisa de ir ao médico ou a uma entrevista de emprego.",
    "Este curso mostra como configurar as aplicações, ver o preço antes de aceitar, entrar no carro certo com segurança, pedir comida e verificar quanto pagou.",
    "Cada lição dura cerca de cinco minutos. Leia a lição, veja os slides e depois faça a tarefa \"Experimente agora\". Há uma pequena verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final. Os menus das aplicações mudam muitas vezes, por isso explicamos o que fazer em vez do nome de cada botão."
  ],
  finalTask: "Numa aplicação de viagens, escreva um ponto de recolha e um destino verdadeiros (por exemplo, da sua casa até uma clínica ou biblioteca), leia o preço e a hora de chegada e encontre as ferramentas de segurança (partilhar a viagem, o botão de emergência, o PIN da viagem) sem reservar, a não ser que precise da viagem. Depois, numa aplicação de entregas, faça um pequeno pedido, verifique no ecrã de pagamento o total dos artigos, as taxas, a gorjeta e a morada de entrega, e explique o que quer dizer cada linha.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Adultos que precisam de transporte para consultas, trabalho ou recados, ou de comida e compras entregues em casa: idosos que já não conduzem, pessoas com deficiência, cuidadores, pessoas que voltam à comunidade e qualquer pessoa nova nas aplicações de viagens e de entregas.",
    startingPoint: "Sabem usar um smartphone para abrir aplicações e escrever uma morada, e podem ter um cartão de débito ou de crédito. Muitos nunca reservaram uma viagem ou uma entrega numa aplicação, não sabem bem como funcionam os preços, as taxas e as gorjetas, ou não conhecem as verificações de segurança antes de entrar num carro.",
    gap: "As aplicações de viagens e de entregas podem significar chegar a tempo a uma clínica ou ao trabalho e ter comida sem sair de casa, mas quem não conhece os passos pode pagar muito mais do que esperava, entrar no carro errado ou cair em burlas de falso apoio ao cliente.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas; palavras como marcador de recolha, taxa de serviço e substituição são explicadas",
      "Aparelhos: um smartphone com a localização ligada e a aplicação oficial",
      "Tempo: cerca de 5 minutos por lição, cerca de 60 minutos no total",
      "Dinheiro: o curso não obriga a reservar nenhuma viagem nem a fazer nenhum pedido; os preços e as taxas mudam com a aplicação, a hora e a cidade",
      "Idade e segurança: os termos da Uber exigem adultos ou uma conta de adolescente criada pelos pais; os alunos nunca partilham palavras-passe nem códigos com quem lhes liga ou envia SMS"
    ],
    prerequisites: "\"Usar um Smartphone e um Tablet\", ou saber instalar uma aplicação a partir da loja oficial."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Usando a loja de aplicações oficial", action: "instalar uma aplicação de viagens, criar uma conta e adicionar um meio de pagamento com segurança", standard: "verificando o programador e escrevendo os dados do cartão só dentro da aplicação" },
    { id: "O2", condition: "Com um ponto de recolha e um destino", action: "escrever os dois numa aplicação de viagens e ler o preço e a hora de chegada antes de confirmar", standard: "verificando o ponto de recolha no mapa e lendo o preço antes de reservar" },
    { id: "O3", condition: "Quando chega o carro reservado", action: "comparar a matrícula, o carro e o motorista com a aplicação e encontrar as ferramentas de segurança", standard: "sem nunca entrar num carro que não corresponde, e encontrando o Share My Trip, o botão de emergência e o PIN" },
    { id: "O4", condition: "Usando uma aplicação de entregas", action: "escrever a sua morada de entrega com notas e montar um pedido no carrinho", standard: "com a morada completa, uma nota útil e uma escolha para os artigos esgotados" },
    { id: "O5", condition: "Com um ecrã de pagamento à frente", action: "explicar cada linha, incluindo o total dos artigos, as taxas, a gorjeta e o total, antes de pagar", standard: "dizendo corretamente o que é cada valor e comparando o total com o seu orçamento" },
    { id: "O6", condition: "Depois de uma viagem ou de uma entrega", action: "verificar o recibo, pedir ajuda para um problema dentro da aplicação e recusar o falso apoio ao cliente", standard: "usando só a Ajuda dentro da aplicação e nunca dando uma palavra-passe ou um código" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Pedir uma viagem",
      lessons: [
        {
          objectives: ["O1"],
          title: "Configurar uma aplicação de viagens",
          minutes: 5,
          goal: "Instalar uma aplicação de viagens, criar uma conta e adicionar um meio de pagamento com segurança.",
          text: [
            "A Uber e a Lyft são as aplicações de viagens mais conhecidas nos Estados Unidos. Um motorista usa o seu próprio carro para levar você aonde quer ir, e você paga pela aplicação.",
            "Instale a aplicação só a partir da loja oficial (Google Play ou App Store) e verifique se o programador é a Uber ou a Lyft. Registe-se com o seu número de telefone e o seu email. Os termos da Uber dizem que é preciso ter 18 anos ou mais para ter a sua própria conta; os adolescentes dos 13 aos 17 anos só podem viajar com uma conta de adolescente criada pelos pais ou por um tutor. Veja nos termos da própria aplicação as regras atuais.",
            "Adicione um meio de pagamento dentro da aplicação, como um cartão de débito ou de crédito. Escreva-o só na aplicação, nunca numa SMS ou num email. Guarde a sua casa como local guardado para a escolher depressa mais tarde."
          ],
          steps: ["Abra a loja de aplicações oficial e procure Uber ou Lyft.", "Verifique o nome do programador e depois instale.", "Registe-se com o seu número de telefone e o seu email.", "Adicione um meio de pagamento na parte de pagamento ou carteira da aplicação.", "Guarde a morada da sua casa como local guardado."],
          words: [["Aplicação de viagens", "uma aplicação que envia um motorista no seu próprio carro para ir buscar você."], ["Meio de pagamento", "o cartão ou a conta que a aplicação cobra."], ["Local guardado", "uma morada que a aplicação lembra, como a sua casa."]],
          slides: [
            { title: "O que fazem as aplicações de viagens", bullets: ["Um motorista vai buscar você no carro dele", "Você paga pela aplicação", "As mais conhecidas nos EUA: Uber e Lyft"] },
            { title: "Configure com segurança", bullets: ["Só a loja de aplicações oficial", "Verifique o nome do programador", "Uber: 18+ para conta própria; contas de adolescente 13-17"] },
            { title: "Adicione o pagamento", bullets: ["Só dentro da aplicação", "Nunca por SMS ou email", "Guarde a morada da sua casa"] }
          ],
          sources: [{ name: "Uber: US Terms of Use (age and teen accounts)", url: "https://www.uber.com/legal/en/document/?name=general-terms-of-use&country=united-states&lang=en" }],
          tryIt: "Instale a Uber ou a Lyft a partir da loja de aplicações oficial, crie a sua conta e guarde a morada da sua casa. Pode esperar para adicionar um cartão até precisar de uma viagem.",
          youCanNow: "instalar uma aplicação de viagens com segurança, criar uma conta e guardar a morada da sua casa.",
          quickCheck: [
            { objective: "O1", q: "Numa aplicação de viagens, quem conduz o carro?", options: ["Um motorista de autocarro da cidade", "Você", "Um motorista que usa o seu próprio carro", "Só uma empresa de táxis"], answer: 2, why: "Um motorista usa o seu próprio carro para levar você, e você paga pela aplicação." },
            { objective: "O1", q: "Uma SMS pede que responda com o número do seu cartão para terminar a configuração da sua conta de viagens. O que faria?", options: ["Responder com o número do cartão", "Ignorar e adicionar o cartão só dentro da aplicação oficial", "Enviar o número do cartão por email", "Ligar para o número da SMS e lê-lo em voz alta"], answer: 1, why: "Escreva os dados do cartão só na aplicação, nunca numa SMS ou num email." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Pedir uma viagem e ver primeiro o preço",
          minutes: 5,
          goal: "Escrever um ponto de recolha e um destino e ler o preço antes de confirmar.",
          text: [
            "Abra a aplicação e escreva aonde quer ir na caixa \"Para onde?\" (\"Where to?\" em inglês). Verifique o ponto de recolha: a aplicação usa a sua localização, mas pode mover o marcador ou escrever a morada para o motorista encontrar você.",
            "A aplicação mostra várias opções de viagem, desde viagens partilhadas ou normais mais baratas até carros maiores ou melhores, cada uma com um preço e uma hora de chegada. O preço pode ser mais alto nas horas de muito movimento, como a hora de ponta ou depois de um grande evento.",
            "Escolha a viagem, verifique o preço e o meio de pagamento e confirme. Depois a aplicação mostra o nome e a foto do motorista, o carro e a matrícula, e um mapa com o carro a vir ter consigo."
          ],
          steps: ["Escreva o seu destino na caixa \"Para onde?\".", "Verifique o ponto de recolha; mova o marcador se for preciso.", "Compare as opções de viagem: preço e hora de chegada.", "Verifique o meio de pagamento.", "Confirme só quando o preço estiver bem.", "Siga o seu carro no mapa."],
          words: [["Ponto de recolha", "onde o motorista vai encontrar você."], ["Destino", "aonde você quer ir."], ["Preço de horas de movimento", "preços mais altos quando muitas pessoas querem viagens ao mesmo tempo."]],
          slides: [
            { title: "Para onde?", bullets: ["Escreva o seu destino", "Verifique o ponto de recolha no mapa"] },
            { title: "Veja primeiro o preço", bullets: ["Cada opção de viagem mostra um preço e uma hora", "Os preços podem subir nas horas de movimento"] },
            { title: "Confirme", bullets: ["Verifique o preço e o pagamento", "Depois veja o motorista, o carro e a matrícula"] }
          ],
          tryIt: "Abra a aplicação de viagens e escreva um destino verdadeiro, como uma clínica, uma biblioteca ou um centro de emprego. Leia duas opções de viagem e os seus preços. Feche a aplicação sem reservar, a não ser que precise da viagem.",
          youCanNow: "pedir uma viagem e ler o preço e a hora de chegada antes de aceitar.",
          quickCheck: [
            { objective: "O2", q: "O que mostra a aplicação depois de confirmar uma viagem?", options: ["O nome e a foto do motorista, o carro e a matrícula", "O saldo da sua conta bancária", "Uma lista de restaurantes", "A sua palavra-passe"], answer: 0, why: "Depois de confirmar, a aplicação mostra o motorista, o carro e a matrícula, e um mapa." },
            { objective: "O2", q: "A aplicação pôs o seu marcador de recolha do outro lado de uma estrada movimentada. O que faria?", options: ["Reservar mesmo assim e atravessar a estrada a correr", "Cancelar a sua conta", "Escolher o carro mais caro", "Mover o marcador ou escrever a morada para o motorista encontrar você"], answer: 3, why: "Pode mover o marcador ou escrever a morada para o ponto de recolha ficar certo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Entrar no carro certo, com segurança",
          minutes: 5,
          goal: "Verificar o carro, a matrícula e o motorista antes de entrar, e usar as ferramentas de segurança.",
          text: [
            "Antes de entrar, compare três coisas com a aplicação: a matrícula, a marca e a cor do carro, e o nome e a foto do motorista. Pergunte \"Veio buscar quem?\" e deixe o motorista dizer o seu nome. Se alguma coisa não corresponder, não entre.",
            "A Uber tem um PIN opcional de quatro algarismos: você diz o PIN ao motorista, e a viagem só começa com o PIN certo. O Share My Trip da Uber deixa familiares ou amigos de confiança seguir a sua viagem ao vivo, e o botão de emergência dentro da aplicação contacta o 911 (o número de emergência dos EUA) e mostra a sua localização e os dados do carro. A Lyft tem as suas próprias ferramentas de segurança; encontre-as na página de segurança dela ou na aplicação.",
            "Espere dentro de casa ou do edifício até a aplicação mostrar que o carro chegou, e não entre num carro que lhe oferece uma viagem sem ter sido reservado na aplicação."
          ],
          steps: ["Espere lá dentro até a aplicação dizer que o carro chegou.", "Verifique a matrícula, o carro e a foto do motorista.", "Pergunte \"Veio buscar quem?\"", "Use o PIN se o ligou.", "Partilhe a sua viagem com um familiar ou um amigo.", "Saiba onde está o botão de emergência."],
          words: [["Matrícula", "a chapa com o número do carro; verifique se corresponde à aplicação."], ["Share My Trip", "a ferramenta da Uber que deixa as pessoas que você escolhe seguir a sua viagem ao vivo."], ["PIN", "um código curto de números que você diz ao motorista para começar a viagem."]],
          slides: [
            { title: "Verifique antes de entrar", bullets: ["A matrícula", "A marca e a cor do carro", "O nome e a foto do motorista"] },
            { title: "Pergunte, não diga", bullets: ["\"Veio buscar quem?\"", "Deixe o motorista dizer o seu nome", "Não corresponde? Não entre"] },
            { title: "Ferramentas de segurança (Uber)", bullets: ["PIN de viagem opcional de quatro algarismos", "Share My Trip com contactos de confiança", "O botão de emergência liga ao 911"] },
            { title: "A Lyft e outras", bullets: ["Têm as suas próprias ferramentas de segurança", "Encontre-as na aplicação ou na página de segurança"] }
          ],
          sources: [{ name: "Uber: Rider safety", url: "https://www.uber.com/us/en/ride/safety/" }],
          tryIt: "Abra a parte de segurança da sua aplicação de viagens. Descubra como partilhar uma viagem e onde está o botão de emergência. Se a sua aplicação tiver um PIN de viagem, ligue-o.",
          youCanNow: "confirmar que tem o carro e o motorista certos, e usar as ferramentas de segurança da aplicação.",
          quickCheck: [
            { objective: "O3", q: "O que faz o Share My Trip da Uber?", options: ["Divide o preço com um desconhecido", "Deixa familiares ou amigos de confiança seguir a sua viagem ao vivo", "Publica a sua viagem nas redes sociais", "Dá a sua palavra-passe ao motorista"], answer: 1, why: "O Share My Trip deixa as pessoas em quem confia seguir a sua viagem ao vivo." },
            { objective: "O3", q: "Um motorista pergunta \"É a Maria?\" e você é a Maria. O que faria em vez de dizer que sim?", options: ["Entrar logo", "Dizer o seu PIN ao motorista antes de verificar alguma coisa", "Perguntar \"Veio buscar quem?\" e deixar o motorista dizer o seu nome", "Dar o seu telefone ao motorista"], answer: 2, why: "Quando o motorista diz o seu nome, mostra que foi mesmo enviado para você." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Pedir uma viagem",
        questions: [
          { objective: "O1", q: "Onde deve obter a aplicação da Uber ou da Lyft?", options: ["Num link numa SMS", "Em qualquer site", "Na loja de aplicações oficial", "Num anúncio que aparece no ecrã"], answer: 2, why: "As lojas oficiais têm as aplicações verdadeiras." },
          { objective: "O2", q: "Quando pode ver o preço de uma viagem?", options: ["Antes de confirmar a viagem", "Só depois da viagem", "Só no extrato do banco", "Nunca"], answer: 0, why: "A aplicação mostra o preço de cada opção de viagem antes de você aceitar." },
          { objective: "O2", q: "Porque é que uma viagem pode custar mais numa sexta-feira à noite?", options: ["A aplicação está avariada", "Preço de horas de movimento, quando muitas pessoas querem viagens", "O seu telefone é antigo", "As viagens são grátis às sextas-feiras"], answer: 1, why: "Os preços podem subir quando a procura é alta." },
          { objective: "O3", q: "Um carro para, mas a matrícula não corresponde à aplicação. O que faz?", options: ["Entra mesmo assim", "Entra e pergunta depois", "Paga ao motorista em dinheiro", "Não entra"], answer: 3, why: "Se não corresponde, pode não ser a sua viagem." },
          { objective: "O3", q: "Qual é a forma mais segura de verificar o motorista?", options: ["Dizer \"Veio buscar a Maria?\"", "Perguntar \"Veio buscar quem?\"", "Mostrar-lhe o seu documento de identificação", "Dizer-lhe primeiro o seu PIN"], answer: 1, why: "Quando o motorista diz o seu nome, prova que é o seu motorista." }
        ]
      }
    },
    {
      name: "Capítulo 2: Pedir comida e compras",
      lessons: [
        {
          objectives: ["O4"],
          title: "Pedir uma refeição ou compras para entrega",
          minutes: 5,
          goal: "Encontrar um restaurante ou uma loja numa aplicação de entregas e montar um pedido.",
          text: [
            "Aplicações de entregas como a DoorDash, a Uber Eats e a Instacart deixam você fazer pedidos a restaurantes e lojas da sua zona. Um estafeta, às vezes chamado Dasher ou shopper (quem faz as compras), vai buscar o seu pedido e leva-o até você.",
            "Instale a partir da loja de aplicações oficial e escreva a sua morada de entrega com cuidado, com o número do apartamento ou do portão e notas para o estafeta, como \"porta azul, toque à campainha\".",
            "Veja ou procure um restaurante ou uma loja, toque nos artigos para os pôr no carrinho e escolha opções como o tamanho. Nas compras, normalmente pode escolher o que a pessoa que faz as compras deve fazer se um artigo estiver esgotado: trocá-lo por outro parecido ou devolver o dinheiro."
          ],
          steps: ["Instale a aplicação de entregas a partir da loja oficial.", "Escreva a sua morada de entrega completa e notas para o estafeta.", "Procure um restaurante ou uma loja.", "Toque nos artigos para os pôr no carrinho.", "Nas compras, escolha o que fazer se um artigo estiver esgotado."],
          words: [["Aplicação de entregas", "uma aplicação que leva comida ou produtos de negócios da sua zona até à sua porta."], ["Carrinho", "a lista dos artigos que pensa comprar."], ["Substituição", "um artigo parecido que a pessoa escolhe quando o seu está esgotado."]],
          slides: [
            { title: "Aplicações de entregas", bullets: ["DoorDash, Uber Eats, Instacart e outras", "Um estafeta ou quem faz as compras leva o seu pedido"] },
            { title: "A sua morada", bullets: ["Morada completa com o número do apartamento ou portão", "Notas como \"porta azul, toque à campainha\""] },
            { title: "Monte um pedido", bullets: ["Procure um restaurante ou uma loja", "Ponha artigos no carrinho", "Escolha o que acontece se um artigo estiver esgotado"] }
          ],
          tryIt: "Abra uma aplicação de entregas (instale-a a partir da loja oficial, se for preciso). Escreva a sua morada com uma nota para o estafeta e depois ponha dois artigos num carrinho. Ainda não faça o pedido.",
          youCanNow: "encontrar um restaurante ou uma loja numa aplicação de entregas e montar um pedido para a sua morada.",
          quickCheck: [
            { objective: "O4", q: "Numa aplicação de entregas, quem leva o seu pedido?", options: ["Só o dono do restaurante", "Os correios", "Ninguém; tem de ir buscá-lo", "Um estafeta, às vezes chamado Dasher ou shopper"], answer: 3, why: "Um estafeta vai buscar o seu pedido e leva-o até você." },
            { objective: "O4", q: "Você mora no apartamento 4B, atrás de um portão. O que faria ao escrever a sua morada?", options: ["Pôr o número do apartamento, os dados do portão e uma nota para o estafeta", "Escrever só o nome da rua", "Deixar a morada em branco", "Usar a morada de um vizinho"], answer: 0, why: "O número do apartamento e do portão e uma nota ajudam o estafeta a encontrar você." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Entender o pagamento: taxas, gorjetas e total",
          minutes: 5,
          goal: "Ler o ecrã de pagamento e saber o que é cada valor antes de pagar.",
          text: [
            "O preço no menu não é o custo todo. O ecrã de pagamento mostra o total dos artigos mais outros valores, que podem incluir uma taxa de entrega, uma taxa de serviço, às vezes uma taxa por pedido pequeno, impostos e uma gorjeta para o estafeta.",
            "As taxas mudam com a aplicação, a hora, a distância e a cidade, e algumas aplicações têm assinaturas pagas que baixam as taxas. Por isso, leia sempre o ecrã de pagamento e veja o total antes de tocar em Fazer pedido (Place order).",
            "A gorjeta vai para o estafeta ou para quem faz as compras. Você escolhe o valor, e muitas aplicações deixam mudá-la depois da entrega. Se o total for mais do que planeou, tire um artigo ou escolha ir buscar em vez da entrega, se a aplicação tiver essa opção."
          ],
          steps: ["Abra o seu carrinho e vá para o pagamento.", "Leia cada linha: artigos, taxa de entrega, taxa de serviço, impostos, gorjeta.", "Verifique a morada de entrega e o meio de pagamento.", "Veja o total.", "Mude o pedido ou a gorjeta se for preciso e depois toque em Fazer pedido."],
          words: [["Taxa de entrega", "um valor cobrado por levar o pedido até você."], ["Taxa de serviço", "um valor que a aplicação junta por usar o seu serviço."], ["Gorjeta", "dinheiro que você escolhe dar ao estafeta ou a quem faz as compras."]],
          slides: [
            { title: "O preço do menu não é o total", bullets: ["Total dos artigos", "Taxa de entrega e taxa de serviço", "Impostos e gorjeta"] },
            { title: "As taxas mudam", bullets: ["Com a aplicação, a hora, a distância e a cidade", "Leia sempre o ecrã de pagamento"] },
            { title: "Antes de tocar em Fazer pedido", bullets: ["Verifique a morada e o pagamento", "Veja o total", "Caro demais? Tire um artigo ou escolha ir buscar"] }
          ],
          tryIt: "Leve o carrinho da última lição até ao ecrã de pagamento. Anote o total dos artigos, cada taxa, a gorjeta e o total final. Depois decida se faz o pedido ou fecha a aplicação.",
          youCanNow: "ler o ecrã de pagamento de uma entrega e saber o custo total antes de pagar.",
          quickCheck: [
            { objective: "O5", q: "Quem recebe a gorjeta de um pedido de entrega?", options: ["A empresa da aplicação", "O estafeta ou quem faz as compras", "A câmara municipal", "O senhorio do restaurante"], answer: 1, why: "A gorjeta vai para o estafeta ou para quem faz as compras." },
            { objective: "O5", q: "Os artigos do menu somam pouco, mas o total é muito mais alto. O que faria antes de fazer o pedido?", options: ["Tocar em Fazer pedido sem ver", "Juntar mais artigos para valer a pena", "Ler cada linha do ecrã de pagamento para ver as taxas, os impostos e a gorjeta", "Fechar a aplicação e pagar com cartão-presente"], answer: 2, why: "O ecrã de pagamento mostra cada taxa, o imposto e a gorjeta que formam o total." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Recibos, problemas e segurança",
          minutes: 4,
          goal: "Verificar um recibo, pedir ajuda com um pedido errado e evitar burlas com aplicações.",
          text: [
            "Depois de uma viagem ou de uma entrega, a aplicação envia um recibo para o seu email e guarda-o na aplicação, nas suas viagens ou pedidos. Verifique se o valor cobrado corresponde ao que aceitou.",
            "Se alguma coisa estiver errada, como um artigo em falta, uma refeição fria ou um valor errado, use a parte de Ajuda ou Apoio dentro da aplicação e escolha o pedido. Comunique os problemas pouco tempo depois de acontecerem.",
            "Os burlões fingem ser o apoio ao cliente da aplicação. A ajuda verdadeira está na aplicação. Não ligue para um número de apoio que aparece num anúncio de pesquisa, e nunca dê a sua palavra-passe nem um código enviado para o seu telefone a quem lhe liga ou envia SMS. Pague só dentro da aplicação, não em dinheiro nem com cartões-presente a quem lhe pedir."
          ],
          steps: ["Abra as suas viagens ou pedidos na aplicação.", "Verifique se o recibo corresponde ao que aceitou.", "Para um problema, vá à Ajuda dentro da aplicação e escolha o pedido.", "Nunca dê uma palavra-passe nem um código do telefone a quem liga.", "Pague só dentro da aplicação."],
          words: [["Recibo", "um registo do que pagou e porquê."], ["Apoio", "a parte de ajuda da aplicação para problemas."]],
          slides: [
            { title: "Verifique o recibo", bullets: ["No seu email e na aplicação", "Corresponde ao que aceitou?"] },
            { title: "Alguma coisa errada?", bullets: ["Ajuda ou Apoio dentro da aplicação", "Escolha o pedido", "Comunique depressa"] },
            { title: "Evite burlas de falso apoio", bullets: ["A ajuda verdadeira está dentro da aplicação", "Nunca dê uma palavra-passe ou um código do telefone", "Pague só dentro da aplicação"] }
          ],
          tryIt: "Prática da tarefa final: abra a parte de viagens ou pedidos da sua aplicação de viagens ou de entregas e encontre a área de Ajuda. Depois faça a tarefa final: veja o preço de uma viagem e encontre as ferramentas de segurança, e leia um ecrã de pagamento completo de uma entrega.",
          youCanNow: "verificar um recibo, pedir ajuda para um problema dentro da aplicação e evitar burlas de falso apoio ao cliente.",
          quickCheck: [
            { objective: "O6", q: "Onde pode encontrar o recibo de uma entrega?", options: ["No seu email e na aplicação, nos seus pedidos", "Só com o estafeta", "Num motor de pesquisa", "Em lado nenhum; as aplicações não dão recibos"], answer: 0, why: "A aplicação envia o recibo por email e guarda-o nas suas viagens ou pedidos." },
            { objective: "O6", q: "A sua comida nunca chegou e procura na internet o número de apoio da aplicação. Um anúncio mostra um número de telefone. O que faria?", options: ["Ligar para o número do anúncio", "Dar a sua palavra-passe a quem atender", "Pagar a um desconhecido com cartões-presente para ter o reembolso", "Ignorar o anúncio e usar a Ajuda dentro da aplicação"], answer: 3, why: "A ajuda verdadeira está na aplicação; os números de apoio em anúncios de pesquisa podem ser de burlões." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Pedir comida e compras",
        questions: [
          { objective: "O4", q: "Porque juntar uma nota como \"porta azul, toque à campainha\" à sua morada?", options: ["Baixa o preço", "Ajuda o estafeta a encontrar você", "É obrigatório por lei", "Esconde a sua morada"], answer: 1, why: "Notas claras ajudam o estafeta a entregar na porta certa." },
          { objective: "O4", q: "O que é uma substituição num pedido de compras?", options: ["Um artigo parecido quando o seu está esgotado", "Um cupão de desconto", "Uma taxa de entrega", "Uma gorjeta"], answer: 0, why: "Quem faz as compras pode trocar um artigo esgotado por outro parecido." },
          { objective: "O5", q: "Que ecrã mostra o custo total de um pedido de entrega?", options: ["O menu", "O ecrã inicial", "O ecrã de pagamento", "A loja de aplicações"], answer: 2, why: "O pagamento mostra os artigos, as taxas, os impostos, a gorjeta e o total." },
          { objective: "O6", q: "A sua refeição chega com um artigo em falta. O que faz?", options: ["Liga para um número de um anúncio de pesquisa", "Publica a sua palavra-passe", "Ignora", "Usa a Ajuda dentro da aplicação e escolhe o pedido"], answer: 3, why: "O apoio verdadeiro está dentro da aplicação." },
          { objective: "O6", q: "Alguém envia uma SMS a dizer que é do apoio da DoorDash e precisa do código enviado para o seu telefone. O que faz?", options: ["Não o partilha; a ajuda verdadeira está na aplicação", "Envia o código", "Envia a sua palavra-passe", "Paga-lhe com um cartão-presente"], answer: 0, why: "Nunca dê um código do telefone a quem contacta você." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Pedir uma Viagem ou Comida com Aplicações (Uber, Lyft, DoorDash)",
    questions: [
      { objective: "O1", q: "O que faz uma aplicação de viagens como a Uber ou a Lyft?", options: ["Envia um motorista no seu próprio carro para ir buscar você", "Vende carros", "Entrega cartas", "Só aluga bicicletas"], answer: 0, why: "As aplicações de viagens ligam você a um motorista." },
      { objective: "O1", q: "Ao instalar uma aplicação de viagens, verifique:", options: ["A cor do ícone", "Que o programador é a empresa verdadeira", "O saldo da sua conta bancária", "O tempo"], answer: 1, why: "As aplicações falsas copiam os nomes verdadeiros." },
      { objective: "O1", q: "Pelos termos da Uber nos EUA, os adolescentes dos 13 aos 17 anos podem viajar:", options: ["Com a sua própria conta de adulto", "Nunca", "Com uma conta de adolescente criada pelos pais ou por um tutor", "Só à noite"], answer: 2, why: "Os termos da Uber permitem contas de adolescente para idades dos 13 aos 17 anos com os pais ou um tutor." },
      { objective: "O1", q: "Onde deve escrever os dados do seu cartão para uma aplicação de viagens?", options: ["Numa SMS para o motorista", "Num email", "Nas redes sociais", "Só dentro da aplicação"], answer: 3, why: "O pagamento configura-se só dentro da aplicação." },
      { objective: "O2", q: "A caixa \"Para onde?\" serve para:", options: ["O seu destino", "A sua palavra-passe", "Uma gorjeta", "O seu número do banco"], answer: 0, why: "Escreve aonde quer ir." },
      { objective: "O2", q: "Porque verificar o ponto de recolha no mapa?", options: ["Para mudar o preço", "Não é preciso", "Para escolher a cor do carro", "Para o motorista encontrar você"], answer: 3, why: "Um ponto de recolha certo evita viagens perdidas." },
      { objective: "O2", q: "Os preços das viagens podem ser mais altos:", options: ["Nunca", "Só no seu aniversário", "Nas horas de movimento, como a hora de ponta", "Quando usa Wi-Fi"], answer: 2, why: "Muita procura pode fazer subir os preços." },
      { objective: "O3", q: "O que deve verificar antes de entrar no carro?", options: ["A estação de rádio", "O tempo", "A matrícula, o carro e a foto do motorista", "A morada da casa do motorista"], answer: 2, why: "Estes têm de corresponder à aplicação." },
      { objective: "O3", q: "O PIN de viagem da Uber funciona assim:", options: ["Paga ao motorista", "Liga para o 911", "Desbloqueia o seu telefone", "Você diz um código ao motorista para a viagem poder começar"], answer: 3, why: "A viagem só começa com o PIN certo." },
      { objective: "O3", q: "O Share My Trip deixa você:", options: ["Dividir o preço com desconhecidos", "Mudar de motorista", "Deixar pessoas de confiança seguir a sua viagem ao vivo", "Ter um reembolso"], answer: 2, why: "Os contactos de confiança podem ver o estado da sua viagem." },
      { objective: "O3", q: "O botão de emergência dentro da aplicação da Uber:", options: ["Avalia o motorista", "Cancela a viagem de graça", "Liga para o seu banco", "Contacta o 911 e mostra a sua localização e os dados do carro"], answer: 3, why: "Liga você ao 911 com os dados da viagem." },
      { objective: "O3", q: "Um carro que você não reservou oferece-lhe uma viagem à saída de um evento. Você deve:", options: ["Entrar; é mais rápido", "Pagar em dinheiro", "Recusar; viajar só num carro reservado na aplicação", "Partilhar o seu PIN"], answer: 2, why: "Só os carros reservados e que correspondem à aplicação são seguros." },
      { objective: "O4", q: "Que aplicação serve sobretudo para entregar compras de mercearia?", options: ["Lyft", "Uma calculadora", "Uma aplicação do tempo", "Instacart"], answer: 3, why: "A Instacart entrega compras de mercearia." },
      { objective: "O4", q: "Um \"carrinho\" numa aplicação de entregas é:", options: ["Um carro", "Um recibo", "A lista dos artigos que pensa comprar", "Uma taxa"], answer: 2, why: "O carrinho guarda os artigos antes do pagamento." },
      { objective: "O5", q: "Qual é normalmente um valor extra num pedido de entrega?", options: ["Uma taxa de serviço", "Uma oferta grátis", "A sua avaliação", "A sua morada"], answer: 0, why: "As taxas de serviço e de entrega juntam-se no pagamento." },
      { objective: "O5", q: "A gorjeta de um pedido de entrega vai para:", options: ["A loja de aplicações", "O governo", "O banco", "O estafeta ou quem faz as compras"], answer: 3, why: "As gorjetas são para a pessoa que entrega." },
      { objective: "O5", q: "O total no pagamento é mais do que planeou. Um bom passo é:", options: ["Pagar mesmo assim sem ler", "Dar o seu cartão a um desconhecido", "Tirar um artigo ou escolher ir buscar, se houver essa opção", "Deixar uma morada falsa"], answer: 2, why: "Mudar o pedido baixa o total." },
      { objective: "O6", q: "Onde pode encontrar o recibo depois de uma viagem?", options: ["No seu email e na parte de viagens da aplicação", "Só com o motorista", "Em lado nenhum", "Na loja de aplicações"], answer: 0, why: "As aplicações guardam os recibos e enviam-nos por email." },
      { objective: "O6", q: "Onde está a ajuda verdadeira para um pedido errado?", options: ["Num número de telefone de um anúncio de pesquisa", "Num comentário nas redes sociais", "Numa SMS de um desconhecido", "Na Ajuda ou Apoio dentro da aplicação"], answer: 3, why: "O apoio verdadeiro está dentro da aplicação." },
      { objective: "O6", q: "Alguém diz que é do apoio da aplicação e pede a sua palavra-passe. Você:", options: ["Dá-a", "Dá metade", "Nunca a dá", "Envia-a por SMS mais tarde"], answer: 2, why: "O apoio verdadeiro nunca precisa da sua palavra-passe." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: {
    title: "Teste inicial: O que você já sabe?",
    from: [
      0,
      3,
      5,
      6,
      7,
      11,
      13,
      14,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      {
        name: "Preço antes de reservar",
        objective: "O2",
        notYet: "O ponto de recolha ou o destino está errado, ou o preço e a hora de chegada não foram lidos.",
        meets: "Escreveu um ponto de recolha e um destino verdadeiros e leu o preço e a hora de chegada antes de qualquer reserva.",
        exceeds: "Também compara duas opções de viagem e diz porque o preço pode ser mais alto nas horas de movimento."
      },
      {
        name: "Ferramentas de segurança",
        objective: "O3",
        notYet: "Não consegue encontrar as ferramentas de segurança.",
        meets: "Encontra o Share My Trip, o botão de emergência e o PIN de viagem (ou as ferramentas de segurança da própria aplicação).",
        exceeds: "Também explica as três verificações antes de entrar no carro."
      },
      {
        name: "Pedido de entrega",
        objective: "O4",
        notYet: "O carrinho está vazio ou a morada de entrega está incompleta.",
        meets: "Um pequeno pedido no carrinho com a morada de entrega completa.",
        exceeds: "Junta uma nota útil para o estafeta e uma escolha para os artigos esgotados."
      },
      {
        name: "Ler o pagamento",
        objective: "O5",
        notYet: "Não sabe dizer o que são as taxas, a gorjeta ou o total.",
        meets: "Explica o total dos artigos, cada taxa, a gorjeta, a morada de entrega e o total.",
        exceeds: "Também diz uma forma de baixar o total, como tirar um artigo ou escolher ir buscar."
      }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e têm Atinge ou Supera em todas as linhas da grelha de avaliação da tarefa final",
      "Alunos que dizem ter ido sozinhos a uma consulta, ao trabalho ou a um recado com uma aplicação de viagens nos 30 dias depois do curso (inquérito de seguimento)",
      "Alunos que dizem verificar o preço e as taxas antes de reservar e ficar dentro do seu orçamento",
      "Alunos que dizem ter recusado uma chamada ou uma SMS de falso apoio ao cliente"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um smartphone com a localização ligada e internet",
      "Uma aplicação de viagens (Uber ou Lyft) e uma aplicação de entregas (DoorDash, Uber Eats ou Instacart) da loja oficial",
      "Um ponto de recolha e um destino verdadeiros, como da casa até uma clínica ou biblioteca",
      "Cerca de 60 minutos no total, em sessões curtas; não é preciso reservar nem pagar nada"
    ],
    facilitatorNotes: [
      "Diga aos alunos para não tocarem em Confirmar nem em Fazer pedido na aula, a não ser que precisem mesmo da viagem ou da comida; a tarefa para antes da reserva.",
      "Os alunos podem precisar de um cartão para terminar o registo; deixe-os decidir se o adicionam e nunca peça para ver os dados do cartão.",
      "Pratiquem a pergunta \"Veio buscar quem?\" num jogo de papéis com dois alunos, um como passageiro e outro como motorista.",
      "Os preços e as taxas mudam com a cidade e a hora do dia, por isso vejam ecrãs de pagamento verdadeiros em vez de dizer valores.",
      "Para os alunos que não podem usar um cartão ou um smartphone, fale dos serviços locais de transporte adaptado ou de programas de transporte para idosos que a sua organização conheça."
    ]
  }
};
