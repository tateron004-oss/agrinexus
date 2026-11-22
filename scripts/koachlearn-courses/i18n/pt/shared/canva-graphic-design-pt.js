"use strict";

// Koach Learn course (Portuguese translation of shared/canva-graphic-design.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "canva-graphic-design-pt",
  lang: "pt",
  translationOf: "canva-graphic-design",
  category: "Workforce Development",
  name: "Design Gráfico com o Canva",
  skills: "Escrever um briefing de design, Usar regras de composição, Escolher cores e fontes, Criar designs no Canva, Verificar direitos e legibilidade, Exportar uma peça para o portefólio",
  outcome: "escrever um briefing de design curto e depois fazer um panfleto claro e fácil de ler e uma publicação para as redes sociais a condizer, no plano gratuito do Canva, verificar os direitos e a legibilidade e guardá-los como uma peça de portefólio para mostrar a um empregador ou a um cliente.",
  about: [
    "Este curso é para jovens à procura de um primeiro trabalho criativo, adultos que querem juntar uma competência ao currículo, donos de pequenos negócios e empreendedores que fazem o seu próprio marketing, e funcionários e voluntários de organizações sem fins lucrativos que fazem panfletos para eventos e doadores.",
    "Você vai aprender o que fazem os designers gráficos, as regras básicas que tornam um design fácil de ler, como escolher cores e fontes, como criar um design no plano gratuito do Canva, como ter a certeza de que tem o direito de usar cada imagem, e como exportar o seu trabalho e juntá-lo a um portefólio.",
    "O Canva é uma ferramenta de design gratuita na internet que funciona num navegador ou como aplicação no telefone. Não precisa de comprar nada. Cada lição dura cerca de cinco minutos e termina com uma tarefa \"Experimente agora\". Há uma pequena verificação depois de cada lição, uma verificação de conhecimentos depois de cada capítulo e um questionário de 20 perguntas no final.",
    "Este curso ensina o básico e ajuda-o a fazer uma primeira peça de portefólio. Não dá um certificado nem um diploma. Se mais tarde quiser um certificado formal, as lições dizem onde procurar."
  ],
  finalTask: "Para um cliente real ou de prática (uma loja do bairro, um evento de uma organização sem fins lucrativos, uma equipa desportiva, uma igreja ou o seu próprio pequeno negócio), escreva um briefing de design num parágrafo. Depois, no plano gratuito do Canva, faça um panfleto em tamanho carta (ou A4) e uma publicação quadrada para as redes sociais a condizer, com as mesmas cores e fontes. Verifique os dois com a lista de verificação de design (hierarquia, contraste, ortografia, direitos de cada imagem), exporte o panfleto em PDF e a publicação em PNG, e escreva uma descrição de portefólio de 3 a 4 frases sobre o objetivo, as suas escolhas e o resultado.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Alunos variados nos EUA e noutros países: jovens à procura de um primeiro emprego ou de um rendimento extra criativo, adultos a mudar de carreira, donos de pequenos negócios e empreendedores, e funcionários e voluntários de organizações sem fins lucrativos que fazem os seus próprios panfletos e publicações.",
    startingPoint: "Sabem usar um telefone ou um computador e as redes sociais. A maioria nunca aprendeu regras de design; muitos já experimentaram o Canva ou ferramentas parecidas, copiando um modelo sem saber porque funciona.",
    gap: "Os empregadores, os clientes e as organizações querem imagens claras e com a sua marca, e depressa. Os alunos precisam de planear um design a partir de um briefing, aplicar regras básicas de composição, cor e letra, evitar problemas de direitos de autor e mostrar o trabalho terminado num portefólio. Muitas vezes, é uma peça de portefólio que consegue o primeiro trabalho de design.",
    constraints: [
      "Nível de leitura: palavras simples e frases curtas",
      "Custo: só o plano gratuito do Canva; não é preciso nenhum elemento pago nem assinatura",
      "Aparelhos: um computador é mais fácil; um telefone serve para a maioria das tarefas",
      "Tempo: lições de 4 a 6 minutos; a tarefa final leva cerca de 60 a 90 minutos",
      "Direitos: só imagens que o aluno tem ou que tem licença para usar; nenhum logótipo nem foto copiados de outros negócios"
    ],
    prerequisites: "Saber usar um computador ou telefone e ter um endereço de email para criar uma conta gratuita no Canva. Quem é novo nos computadores pode fazer primeiro o curso \"Competências Básicas de Informática\"."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Com um pedido de design de um cliente, de um empregador ou do seu próprio projeto", action: "escrever um briefing de design que diga o público, a mensagem principal, o formato e o tamanho", standard: "com as quatro partes num parágrafo curto" },
    { id: "O2", condition: "Com um rascunho de design", action: "organizar o texto e as imagens usando hierarquia, alinhamento, contraste, repetição e espaço em branco", standard: "para que quem vê perceba a mensagem principal em 3 segundos" },
    { id: "O3", condition: "Usando o plano gratuito do Canva", action: "criar um design no tamanho certo a partir de um modelo ou de uma página em branco, mudando o texto, as cores, as fontes e as imagens", standard: "com no máximo 2 fontes e 3 cores principais e nenhum elemento pago" },
    { id: "O4", condition: "Antes de partilhar ou imprimir um design", action: "verificar no design o contraste legível, a ortografia e os dados certos e o direito de usar cada imagem", standard: "corrigindo todos os problemas que encontrar" },
    { id: "O5", condition: "Quando um design está terminado", action: "exportar o design no tipo de ficheiro certo e juntá-lo a um portefólio com uma descrição curta", standard: "PDF para imprimir e PNG ou JPG para ecrãs, com um nome de ficheiro claro" }
  ],
  chapters: [
    {
      name: "Capítulo 1: As bases do design",
      lessons: [
        {
          title: "O que fazem os designers gráficos, e o briefing de design",
          objectives: ["O1"],
          minutes: 5,
          goal: "Escrever um briefing de design que diga o público, a mensagem, o formato e o tamanho.",
          text: [
            "Os designers gráficos usam imagens, palavras, cores e composição para passar uma mensagem. Fazem panfletos, publicações para as redes sociais, menus, placas, logótipos, apresentações e relatórios. O Bureau of Labor Statistics dos EUA (o serviço de estatísticas do trabalho) diz que os empregadores olham com atenção para o portefólio: uma coleção dos seus melhores trabalhos.",
            "O trabalho de design tem muitas formas: um emprego interno numa empresa ou organização sem fins lucrativos, um lugar de assistente de redes sociais ou de marketing, uma gráfica, ou trabalho por conta própria para negócios locais. Muitos empregos de design pedem um curso superior ou formação técnica, mas um bom portefólio ajuda em todos os níveis. Certificações de programas, como o Adobe Certified Professional (exames feitos pela Certiport), podem dar uma vantagem mais tarde. Este curso prepara-o para fazer uma primeira peça de portefólio; não dá um certificado.",
            "Todo o bom design começa com um briefing: um plano curto que responde a quatro perguntas. Para quem é (o público)? Qual é a única mensagem principal? Que formato é (panfleto, publicação, cartaz, menu)? Que tamanho tem? Se não sabe responder, pergunte ao cliente antes de começar."
          ],
          steps: ["Pergunte para quem é o design.", "Peça a única mensagem principal e os dados obrigatórios (data, local, preço, contacto).", "Pergunte que formato é e onde vai ser usado.", "Anote o tamanho, por exemplo tamanho carta para um panfleto ou quadrado para uma publicação.", "Leia o briefing em voz alta ao cliente e obtenha um sim antes de desenhar."],
          words: [["Design gráfico", "usar palavras, imagens, cores e composição para partilhar uma mensagem."], ["Briefing de design", "um plano curto escrito para um design: público, mensagem, formato e tamanho."], ["Portefólio", "uma coleção dos seus melhores trabalhos que mostra a empregadores ou clientes."], ["Trabalho por conta própria (freelance)", "trabalhar para si mesmo e fazer projetos pagos para clientes diferentes."]],
          slides: [
            { title: "O que fazem os designers gráficos", bullets: ["Panfletos, publicações, menus, placas", "Logótipos, apresentações e relatórios", "Os empregadores olham com atenção para o seu portefólio"] },
            { title: "Onde há trabalho de design", bullets: ["Interno numa empresa ou organização sem fins lucrativos", "Assistente de redes sociais ou de marketing", "Gráficas e trabalho por conta própria"] },
            { title: "O briefing de design: 4 partes", bullets: ["Público: para quem é?", "Mensagem: qual é a única ideia principal?", "Formato: panfleto, publicação, cartaz?", "Tamanho: carta, A4, quadrado?"] },
            { title: "Antes de desenhar", bullets: ["Obtenha os dados obrigatórios", "Leia o briefing ao cliente", "Obtenha um sim e depois comece"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Graphic Designers", url: "https://www.bls.gov/ooh/arts-and-design/graphic-designers.htm" },
            { name: "Certiport: Adobe Certified Professional", url: "https://certiport.pearsonvue.com/Certifications/Adobe/ACP/Overview" }
          ],
          tryIt: "Escolha um cliente real ou de prática, como uma lavagem de carros para angariar fundos, uma barbearia ou o seu próprio pequeno negócio. Escreva um briefing num parágrafo que diga o público, a mensagem principal, o formato e o tamanho. Guarde-o para a tarefa final.",
          youCanNow: "dizer o que fazem os designers gráficos e escrever um briefing de design com as quatro partes.",
          quickCheck: [
            { objective: "O1", q: "Qual destas coisas faz parte de um briefing de design?", options: ["O público, a mensagem principal, o formato e o tamanho", "Só a sua cor preferida", "O preço do programa de design", "Uma lista de todas as fontes que conhece"], answer: 0, why: "Um briefing responde para quem é, o que diz, o que é e que tamanho tem." },
            { objective: "O1", q: "Um cliente diz: \"Faça-me um panfleto.\" O que faz primeiro?", options: ["Começa logo a desenhar", "Copia um panfleto de outro negócio", "Pergunta pelo público, a mensagem e o tamanho, e escreve um briefing", "Escolhe cinco fontes"], answer: 2, why: "Perguntar primeiro e escrever um briefing evita trabalho perdido e refazer o design." }
          ]
        },
        {
          title: "Regras de composição que tornam um design fácil de ler",
          objectives: ["O2"],
          minutes: 5,
          goal: "Organizar um design para que a mensagem principal se veja primeiro.",
          text: [
            "As pessoas olham para um panfleto ou uma publicação só por alguns segundos. Cinco regras simples ajudam-nas a perceber a mensagem depressa.",
            "Hierarquia: ponha a coisa mais importante maior ou mais forte, depois a seguinte mais importante, depois os pormenores. Alinhamento: alinhe as coisas pela mesma margem ou pela mesma linha central, para o design parecer arrumado. Contraste: faça as coisas importantes parecerem diferentes, por exemplo texto escuro num fundo claro ou um título grande ao lado de pormenores pequenos.",
            "Repetição: use outra vez as mesmas cores, fontes e formas, para o design parecer uma só peça. Espaço em branco: deixe espaço vazio à volta das coisas. O espaço vazio não é desperdício; deixa o olho descansar e faz a mensagem principal destacar-se.",
            "Um teste rápido: mostre o seu design a alguém durante 3 segundos e depois esconda-o. Pergunte de que se tratava. Se a pessoa não souber dizer a mensagem principal, aumente o título e corte palavras a mais."
          ],
          steps: ["Escolha a única mensagem principal e ponha-a no texto maior.", "Ponha os pormenores (data, local, contacto) em texto mais pequeno.", "Alinhe o texto e as imagens pelas mesmas margens.", "Use outra vez as mesmas cores e fontes.", "Tire tudo o que não ajuda a mensagem.", "Faça o teste dos 3 segundos com outra pessoa."],
          words: [["Hierarquia", "mostrar primeiro o que é mais importante, pondo-o maior, mais forte ou mais acima na página."], ["Alinhamento", "pôr as coisas em linha pela mesma margem ou pela mesma linha central."], ["Contraste", "uma diferença clara, como escuro sobre claro ou grande ao lado de pequeno."], ["Espaço em branco", "espaço vazio à volta e entre as coisas num design."]],
          slides: [
            { title: "Cinco regras de composição", bullets: ["Hierarquia: o mais importante = o maior", "Alinhamento: ponha as coisas em linha", "Contraste: faça as coisas principais destacarem-se", "Repetição e espaço em branco"] },
            { title: "O espaço em branco não é desperdício", bullets: ["Deixa o olho descansar", "Faz a mensagem principal destacar-se", "Corte palavras e imagens a mais"] },
            { title: "O teste dos 3 segundos", bullets: ["Mostre o design durante 3 segundos e depois esconda-o", "Pergunte: de que se tratava?", "Se não souberem dizer, aumente o título"] }
          ],
          tryIt: "Encontre um panfleto ou anúncio à sua volta (numa parede, no correio ou na internet). Num papel, escreva as cinco regras e marque as que ele usa bem e as que não respeita. Depois desenhe uma composição melhor para o seu briefing: título, imagem e pormenores em caixas.",
          youCanNow: "usar hierarquia, alinhamento, contraste, repetição e espaço em branco para planear uma composição, e testá-la em 3 segundos.",
          quickCheck: [
            { objective: "O2", q: "Num panfleto de um evento, qual deve ser normalmente o texto maior?", options: ["O número de telefone", "As letras pequenas", "O endereço do site", "A mensagem principal, como o nome do evento"], answer: 3, why: "A hierarquia põe a mensagem principal primeiro, para as pessoas a perceberem em segundos." },
            { objective: "O2", q: "O seu design parece cheio demais. Que correção segue as regras de composição?", options: ["Juntar mais imagens", "Cortar palavras a mais e deixar mais espaço em branco", "Usar cinco fontes diferentes", "Pôr todo o texto do mesmo tamanho"], answer: 1, why: "O espaço em branco e menos palavras fazem a mensagem principal destacar-se." }
          ]
        },
        {
          title: "Escolher cores e fontes",
          objectives: ["O2", "O4"],
          minutes: 5,
          goal: "Escolher uma paleta de cores simples e um par de fontes fáceis de ler.",
          text: [
            "Mantenha a simplicidade: escolha 2 ou 3 cores principais e mais uma cor neutra, como branco, preto ou cinzento. Se o cliente tem cores da marca, use essas. Usar as mesmas cores em todas as peças torna um negócio fácil de reconhecer.",
            "Use no máximo 2 fontes: uma para os títulos e outra para o texto. Uma fonte forte e simples serve para os títulos. Uma fonte simples e fácil de ler serve para os pormenores. As fontes cursivas decoradas são difíceis de ler em tamanhos pequenos, por isso guarde-as para uma ou duas palavras.",
            "O texto tem de se destacar do fundo. As diretrizes de acessibilidade da web (WCAG, do W3C) pedem uma relação de contraste de pelo menos 4,5 para 1 no texto normal e 3 para 1 no texto grande. Um verificador de contraste gratuito, como o da WebAIM, dá-lhe a relação quando escreve as duas cores. Texto cinzento claro sobre branco, ou vermelho sobre verde, muitas vezes não passa."
          ],
          steps: ["Anote 2 ou 3 cores principais e uma cor neutra.", "Escolha uma fonte para os títulos e uma para o texto.", "Verifique cada cor de texto contra o seu fundo num verificador de contraste.", "Mude qualquer par que esteja abaixo de 4,5 para 1 no texto normal."],
          words: [["Paleta de cores", "o pequeno conjunto de cores que usa num design."], ["Fonte", "um estilo de letras, como letras fortes em bloco ou letra parecida com a escrita à mão."], ["Relação de contraste", "um número que mostra quão diferentes são duas cores em claridade; quanto maior, mais fácil de ler."], ["Cores da marca", "as cores fixas que um negócio ou grupo usa sempre, para as pessoas o reconhecerem."]],
          slides: [
            { title: "Cor", bullets: ["2 ou 3 cores principais e uma neutra", "Use as cores da marca do cliente, se as tiver", "As mesmas cores em todas as peças"] },
            { title: "Fontes", bullets: ["No máximo 2 fontes", "Fonte forte e simples para os títulos", "Fonte simples para os pormenores; cursivas só para uma ou duas palavras"] },
            { title: "Contraste legível", bullets: ["Pelo menos 4,5 para 1 no texto normal", "Pelo menos 3 para 1 no texto grande", "Verifique com um verificador de contraste gratuito"] }
          ],
          sources: [
            { name: "W3C: Understanding Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" },
            { name: "WebAIM Contrast Checker", url: "https://webaim.org/resources/contrastchecker/" }
          ],
          tryIt: "Para o seu briefing, anote 2 ou 3 cores e uma neutra, e escolha uma fonte para os títulos e uma para o texto. Abra um verificador de contraste gratuito, escreva a cor do texto e a cor do fundo e anote a relação. Mude qualquer par abaixo de 4,5 para 1.",
          youCanNow: "escolher uma paleta de cores simples e um par de fontes e verificar que o texto se lê bem.",
          quickCheck: [
            { objective: "O2", q: "Quantas fontes deve normalmente usar um panfleto simples?", options: ["Cinco ou mais", "Uma fonte diferente para cada linha", "No máximo duas", "Só fontes cursivas"], answer: 2, why: "Uma fonte para os títulos e uma para o texto mantêm o design limpo e fácil de ler." },
            { objective: "O4", q: "Um verificador de contraste mostra que o seu texto de tamanho normal tem 2,8 para 1. O que faz?", options: ["Escurece o texto ou clareia o fundo até ter pelo menos 4,5 para 1", "Deixa ficar; qualquer relação serve", "Põe o texto mais pequeno", "Junta uma segunda cor de fundo por trás"], answer: 0, why: "As WCAG pedem pelo menos 4,5 para 1 no texto normal, para que a maioria das pessoas o consiga ler." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: As bases do design",
        questions: [
          { objective: "O1", q: "O que é um briefing de design?", options: ["Um panfleto terminado", "Um plano curto que diz o público, a mensagem, o formato e o tamanho", "Uma fatura que envia a um cliente", "Uma lista de modelos do Canva"], answer: 1, why: "O briefing é o plano que combinam antes de desenhar." },
          { objective: "O1", q: "O dono de uma carrinha de comida quer uma publicação para um prato novo. Que briefing está mais completo?", options: ["\"Faça uma coisa bonita.\"", "\"Publicação de comida.\"", "\"Use vermelho.\"", "\"Publicação quadrada para o Instagram, para clientes do almoço do bairro: novo taco de frango picante, $5, só à sexta-feira.\""], answer: 3, why: "Diz o formato e o tamanho, o público e a única mensagem principal." },
          { objective: "O2", q: "Pôr o título, a imagem e os pormenores em linha pela mesma margem esquerda é um exemplo de:", options: ["Alinhamento", "Repetição", "Contraste", "Hierarquia"], answer: 0, why: "Alinhamento é pôr as coisas em linha pela mesma margem ou pela mesma linha central." },
          { objective: "O2", q: "Mostra o seu panfleto a um amigo durante 3 segundos e ele não sabe dizer de que se trata. Qual é a melhor correção?", options: ["Juntar mais pormenores", "Usar mais cores", "Aumentar a mensagem principal e cortar palavras a mais", "Pôr a imagem mais pequena"], answer: 2, why: "Uma hierarquia mais forte e menos palavras tornam a mensagem principal clara." },
          { objective: "O2", q: "Porque usar as mesmas cores e fontes em todas as peças de um cliente?", options: ["É obrigatório por lei", "O Canva só deixa usar uma cor", "Gasta menos tinta", "A repetição torna o negócio fácil de reconhecer"], answer: 3, why: "A repetição liga as peças entre si e ajuda a reconhecer o negócio." }
        ]
      }
    },
    {
      name: "Capítulo 2: Fazer o design no Canva",
      lessons: [
        {
          title: "Criar um design no plano gratuito do Canva",
          objectives: ["O3"],
          minutes: 6,
          goal: "Criar um design no tamanho certo a partir de um modelo e torná-lo seu.",
          text: [
            "O Canva funciona num navegador em canva.com ou na aplicação Canva. Crie uma conta gratuita com o seu email. O plano gratuito tem muitos modelos, fontes, fotos e imagens. Alguns elementos são só para planos pagos e estão marcados como Pro ou premium; deixe-os de fora para o seu design continuar gratuito.",
            "Comece pelo tamanho. Use a pesquisa ou o botão de criar e escreva o formato de que precisa, como \"Flyer\" (panfleto) ou \"Instagram post\". O Canva abre uma página nesse tamanho. Também pode escolher um tamanho personalizado. Escolas, estudantes e organizações sem fins lucrativos podem ter direito a planos melhores de graça; veja as páginas Education e Nonprofits do próprio Canva.",
            "Um modelo é um design já feito. É um ponto de partida, não o trabalho terminado. Mude as palavras para o seu briefing, mude as cores para a sua paleta, use as suas duas fontes, troque pelas suas próprias fotos e apague tudo o que não ajuda a mensagem. Os empregadores reconhecem um modelo que não foi mudado.",
            "Use o painel lateral para juntar texto, formas e imagens, e para carregar as suas próprias fotos. O Canva guarda o seu trabalho enquanto avança. Dê ao seu design um nome claro para o encontrar outra vez."
          ],
          steps: ["Entre no Canva num computador ou na aplicação.", "Pesquise o formato de que precisa, como Flyer, ou escolha um tamanho personalizado.", "Escolha um modelo que combine com o seu esboço de composição, ou comece em branco.", "Troque o texto pela mensagem e pelos pormenores do seu briefing.", "Mude as cores e as fontes para a sua paleta e o seu par de fontes.", "Carregue as suas próprias fotos ou use imagens gratuitas que tem permissão para usar.", "Apague tudo o que não ajuda a mensagem e depois dê um nome ao design."],
          words: [["Modelo", "um design já feito que você muda para o tornar seu."], ["Plano gratuito", "a versão do Canva que pode usar sem pagar."], ["Elemento Pro ou premium", "um modelo, foto ou imagem que precisa de um plano pago."], ["Tamanho personalizado", "um tamanho de página que você mesmo escreve, em polegadas, píxeis ou milímetros."]],
          slides: [
            { title: "Para começar", bullets: ["canva.com num navegador ou a aplicação Canva", "Conta gratuita com o seu email", "Deixe de fora os elementos marcados Pro ou premium"] },
            { title: "Comece pelo tamanho", bullets: ["Pesquise o formato: Flyer, Instagram post", "Ou escolha um tamanho personalizado", "Veja as páginas Education e Nonprofits do Canva"] },
            { title: "Torne o modelo seu", bullets: ["As suas palavras, cores e duas fontes", "As suas próprias fotos", "Apague o que não ajuda a mensagem"] },
            { title: "Termine o rascunho", bullets: ["Carregue fotos a partir do painel lateral", "O Canva guarda enquanto avança", "Dê ao design um nome claro"] }
          ],
          sources: [
            { name: "Canva", url: "https://www.canva.com/" },
            { name: "Canva for Education (veja quem tem direito)", url: "https://www.canva.com/education/" },
            { name: "Canva for Nonprofits (veja quem tem direito)", url: "https://www.canva.com/canva-for-nonprofits/" }
          ],
          tryIt: "Abra o Canva, pesquise Flyer e escolha um modelo que combine com o seu esboço da Lição 2. Mude o texto, as cores e as fontes para o seu briefing e a sua paleta, junte uma foto tirada por si e apague o que estiver a mais. Dê ao design um nome com o cliente e a data.",
          youCanNow: "criar um design no plano gratuito do Canva no tamanho certo e mudar um modelo para servir o seu briefing.",
          quickCheck: [
            { objective: "O3", q: "Precisa de um panfleto no Canva. O que faz primeiro?", options: ["Descarrega uma imagem qualquer", "Pesquisa o formato Flyer ou escolhe o tamanho certo", "Escolhe cinco fontes", "Paga um plano"], answer: 1, why: "Começar no tamanho certo evita ter de refazer a composição mais tarde." },
            { objective: "O3", q: "Quer que o seu design continue gratuito. Uma imagem está marcada como Pro. O que faz?", options: ["Usa-a e espera que ninguém repare", "Tira uma captura de ecrã dela", "Copia-a de outro site", "Escolhe uma imagem gratuita"], answer: 3, why: "Os elementos Pro precisam de um plano pago; escolher elementos gratuitos mantém o design gratuito e com a licença certa." }
          ]
        },
        {
          title: "Imagens, direitos e a verificação final",
          objectives: ["O4"],
          minutes: 5,
          goal: "Verificar num design os direitos, a legibilidade, a ortografia e os dados antes de o partilhar.",
          text: [
            "Nem todas as imagens na internet são livres de usar. Nos EUA, uma obra fica protegida por direitos de autor logo que é criada, mesmo sem a marca ©. Isso quer dizer que não pode copiar uma foto, um logótipo ou um desenho de um site ou de outro negócio só porque o encontrou.",
            "As imagens seguras são as que você mesmo tirou ou fez, as imagens dentro do Canva que o seu plano deixa usar (leia as condições de licença do Canva no site) e as imagens de fontes gratuitas cuja licença deixa claramente o seu uso. Nunca use o logótipo de outra empresa, a foto de uma pessoa famosa ou o símbolo de uma equipa desportiva sem autorização por escrito. Se usar IA para fazer uma imagem, veja as regras da ferramenta e procure erros na imagem, como mãos estranhas ou texto errado.",
            "Antes de partilhar ou imprimir, faça a verificação final: a mensagem principal é clara em 3 segundos? Cada cor de texto lê-se bem (contraste)? Cada palavra está bem escrita, e a data, a hora, o local, o preço e o contacto estão certos? Tem o direito de usar cada imagem e cada fonte? Peça ao cliente ou a outra pessoa para ler também. Quando publicar na internet, junte texto alternativo (uma descrição curta da imagem) se o site deixar, para que as pessoas que usam leitores de ecrã saibam o que ela mostra."
          ],
          steps: ["Faça outra vez o teste dos 3 segundos.", "Verifique cada cor de texto contra o seu fundo.", "Leia cada palavra devagar, em voz alta, para ver a ortografia.", "Compare a data, a hora, o local, o preço e o contacto com o briefing.", "Faça uma lista de onde veio cada imagem e porque a pode usar.", "Peça a outra pessoa para ler e depois corrija o que ela encontrar."],
          words: [["Direitos de autor", "o direito legal de quem fez uma obra de controlar as cópias dela."], ["Licença", "autorização, com regras, para usar a obra de outra pessoa."], ["Texto alternativo", "uma descrição curta escrita de uma imagem, para quem não a consegue ver."], ["Rever o texto", "ler devagar para encontrar e corrigir erros."]],
          slides: [
            { title: "Nem todas as imagens são livres", bullets: ["Uma obra fica protegida por direitos de autor logo que é feita", "Não ter a marca © não quer dizer que é livre", "Nunca copie logótipos ou fotos de outros negócios"] },
            { title: "Imagens seguras", bullets: ["Fotos que você mesmo tirou", "Imagens do Canva que o seu plano deixa usar", "Fontes gratuitas cuja licença deixa o seu uso"] },
            { title: "A verificação final", bullets: ["Clara em 3 segundos?", "Contraste legível?", "Ortografia e dados certos?", "Direitos de cada imagem?"] },
            { title: "Antes de publicar", bullets: ["Peça a outra pessoa para ler", "Junte texto alternativo onde o site deixar"] }
          ],
          sources: [
            { name: "US Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" },
            { name: "W3C: Understanding Contrast (Minimum)", url: "https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" }
          ],
          tryIt: "Faça a verificação final no seu panfleto do Canva. Escreva uma lista de todas as imagens e de onde vieram. Leia cada palavra em voz alta, compare os dados com o seu briefing e verifique uma cor de texto num verificador de contraste. Corrija todos os problemas que encontrar.",
          youCanNow: "verificar num design os direitos, a legibilidade, a ortografia e os dados, e corrigi-lo antes de o partilhar.",
          quickCheck: [
            { objective: "O4", q: "Encontra uma ótima foto no site de outra padaria, sem a marca ©. Pode usá-la no panfleto do seu cliente?", options: ["Não; continua protegida, por isso use uma sua ou uma imagem com licença", "Sim, porque não tem a marca ©", "Sim, se a puser mais pequena", "Sim, se lhe mudar a cor"], answer: 0, why: "Os direitos de autor protegem uma obra logo que é feita, com ou sem marca." },
            { objective: "O4", q: "Que passo faz parte da verificação final antes de imprimir?", options: ["Juntar uma terceira fonte", "Pôr o título mais pequeno", "Comparar a data, o local e o preço com o briefing", "Tirar todo o espaço em branco"], answer: 2, why: "Dados errados num panfleto impresso custam dinheiro e confiança ao cliente." }
          ]
        },
        {
          title: "Exportar, pedir opiniões e fazer um portefólio",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Exportar um design no tipo de ficheiro certo e juntá-lo a um portefólio com uma descrição.",
          text: [
            "Quando o design passar na verificação final, partilhe-o para receber opiniões antes da exportação final. O Canva tem um botão Partilhar (Share) onde pode enviar um link de visualização. Faça uma pergunta clara, como \"Há alguma coisa pouco clara ou errada?\", e depois faça as mudanças que o cliente aceitar.",
            "Exporte no tipo de ficheiro certo. Abra Partilhar e escolha Transferir (Download). Use PDF para tudo o que vai ser impresso, como um panfleto. Use PNG para publicações nas redes sociais e imagens com texto, porque mantém o texto nítido. JPG serve para fotos quando um ficheiro mais pequeno importa. Dê ao ficheiro um nome claro, por exemplo: carwash-flyer-2026-11.pdf.",
            "Faça uma peça a condizer. Comece um design novo no tamanho de publicação para as redes sociais e use as mesmas cores, fontes e foto, para o conjunto parecer uma só campanha. Muitas vezes os clientes querem um panfleto e uma publicação juntos.",
            "Junte o trabalho ao seu portefólio. Um portefólio pode ser uma pasta, um site gratuito ou um PDF simples. Para cada peça, escreva 3 a 4 frases: o objetivo, para quem era, as escolhas de design que fez e o resultado. Só mostre trabalho de clientes se o cliente disser que sim, e nunca inclua dados privados."
          ],
          steps: ["Partilhe um link de visualização e faça uma pergunta clara para receber opiniões.", "Faça as mudanças combinadas.", "Abra Partilhar e depois Transferir, e escolha PDF para imprimir ou PNG para ecrãs.", "Dê ao ficheiro um nome com o projeto e a data.", "Faça uma publicação para as redes sociais a condizer, com as mesmas cores e fontes.", "Escreva uma descrição de portefólio de 3 a 4 frases e junte os dois ficheiros."],
          words: [["Exportar", "guardar um design como um ficheiro que pode imprimir, publicar ou enviar."], ["PDF", "um tipo de ficheiro que mantém a composição igual em todo o lado; o melhor para imprimir."], ["PNG", "um tipo de ficheiro de imagem que mantém o texto e as margens nítidos; bom para ecrãs."], ["JPG", "um tipo de ficheiro de imagem que torna as fotos mais pequenas; o texto pode ficar um pouco desfocado."]],
          slides: [
            { title: "Peça opiniões primeiro", bullets: ["Partilhe um link de visualização", "Faça uma pergunta clara", "Faça as mudanças que o cliente aceitar"] },
            { title: "Escolha o tipo de ficheiro certo", bullets: ["PDF para imprimir, como panfletos", "PNG para publicações e texto", "JPG para fotos quando o tamanho importa"] },
            { title: "Faça um conjunto", bullets: ["Design novo no tamanho de publicação", "As mesmas cores, fontes e foto"] },
            { title: "Descrição de portefólio", bullets: ["O objetivo e para quem era", "As suas escolhas de design", "O resultado; peça ao cliente antes de o mostrar"] }
          ],
          tryIt: "Partilhe o seu panfleto com uma pessoa e pergunte: \"Há alguma coisa pouco clara ou errada?\" Corrija o que ela encontrar. Transfira o panfleto em PDF, faça uma publicação quadrada a condizer e transfira-a em PNG, dê nomes claros aos dois ficheiros e escreva a sua descrição de portefólio de 3 a 4 frases.",
          youCanNow: "pedir opiniões, exportar um design no tipo de ficheiro certo, fazer uma peça a condizer e juntá-la a um portefólio com uma descrição.",
          quickCheck: [
            { objective: "O5", q: "O seu panfleto vai para uma gráfica. Que tipo de ficheiro é o melhor?", options: ["Uma captura de ecrã", "Um JPG de uma foto", "Um PNG feito para um telefone", "Um PDF"], answer: 3, why: "O PDF mantém a composição igual e é a escolha habitual para imprimir." },
            { objective: "O5", q: "O que deve ter uma descrição de portefólio?", options: ["A morada de casa do cliente", "O objetivo, para quem era, as suas escolhas de design e o resultado", "Só o nome do ficheiro", "A sua palavra-passe do Canva"], answer: 1, why: "Uma pequena história do objetivo, das escolhas e do resultado mostra aos empregadores como você pensa." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Fazer o design no Canva",
        questions: [
          { objective: "O3", q: "O que é um modelo no Canva?", options: ["Uma assinatura paga", "Um tipo de ficheiro para imprimir", "Um design já feito que você muda para o tornar seu", "Uma licença de direitos de autor"], answer: 2, why: "Os modelos são pontos de partida; você muda as palavras, as cores, as fontes e as imagens." },
          { objective: "O3", q: "Um empregador olha para o seu design e percebe que é um modelo que não foi mudado. O que devia ter feito?", options: ["Mudar o texto, as cores, as fontes e as imagens para servir o briefing", "Usar mais elementos Pro", "Juntar uma terceira fonte", "Exportá-lo em JPG"], answer: 0, why: "Tornar o modelo seu mostra verdadeira competência de design." },
          { objective: "O4", q: "Que imagem é segura para usar no panfleto de um cliente?", options: ["O logótipo de uma equipa desportiva tirado do site dela", "Uma foto que você mesmo tirou", "A foto de uma pessoa famosa de um site de notícias", "A foto do produto de um concorrente"], answer: 1, why: "As suas próprias fotos são suas; as outras precisam de autorização por escrito." },
          { objective: "O4", q: "Texto cinzento claro num fundo branco é difícil de ler. Que regra isto não respeita?", options: ["Hierarquia", "Repetição", "Nomes de ficheiros", "Contraste legível"], answer: 3, why: "O texto precisa de contraste suficiente com o fundo para se ler bem." },
          { objective: "O5", q: "Que tipo de ficheiro é o melhor para uma publicação nas redes sociais com palavras?", options: ["PNG", "PDF para imprimir", "Um documento Word", "Uma captura do seu ecrã"], answer: 0, why: "O PNG mantém o texto e as margens nítidos nos ecrãs." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: Design Gráfico com o Canva",
    questions: [
      { objective: "O1", q: "O que fazem os designers gráficos?", options: ["Arranjam computadores", "Escrevem leis sobre imagens", "Usam palavras, imagens, cores e composição para partilhar uma mensagem", "Vendem impressoras"], answer: 2, why: "O design gráfico é comunicação visual." },
      { objective: "O1", q: "Para que é que os empregadores olham com atenção quando contratam designers?", options: ["Um portefólio dos seus melhores trabalhos", "O número de seguidores nas suas redes sociais", "Quantas fontes você tem", "A sua rapidez a escrever no teclado"], answer: 0, why: "O BLS diz que o portefólio é essencial para empregos de design." },
      { objective: "O1", q: "Qual NÃO é uma das quatro partes de um briefing de design?", options: ["Público", "Mensagem principal", "Tamanho", "A sua cor preferida"], answer: 3, why: "O briefing trata do público do cliente, da mensagem, do formato e do tamanho." },
      { objective: "O1", q: "Uma organização sem fins lucrativos pede \"uma coisa para a recolha de alimentos\". Qual é o seu melhor passo a seguir?", options: ["Desenhar um logótipo", "Perguntar para quem é, a mensagem principal, o formato e o tamanho, e depois escrever um briefing", "Copiar o panfleto do ano passado de outro grupo", "Escolher um modelo ao acaso"], answer: 1, why: "Um briefing transforma um pedido vago num plano claro." },
      { objective: "O2", q: "Pôr o nome do evento como o texto maior da página usa que regra?", options: ["Repetição", "Hierarquia", "Espaço em branco", "Alinhamento"], answer: 1, why: "A hierarquia mostra primeiro o que importa mais." },
      { objective: "O2", q: "O que é o espaço em branco?", options: ["Qualquer cor branca", "Uma função paga do Canva", "Um erro de impressão", "Espaço vazio à volta e entre as coisas"], answer: 3, why: "O espaço em branco deixa o olho descansar e faz a mensagem destacar-se." },
      { objective: "O2", q: "O que é o teste dos 3 segundos?", options: ["Mostrar o design durante 3 segundos e perguntar de que se tratava", "Exportar o design em 3 segundos", "Usar 3 fontes", "Publicar o design 3 vezes"], answer: 0, why: "Se as pessoas não souberem dizer a mensagem depois de 3 segundos, a hierarquia precisa de trabalho." },
      { objective: "O2", q: "Uma paleta de cores simples para um panfleto é normalmente:", options: ["Todas as cores do arco-íris", "Uma cor para cada linha de texto", "2 ou 3 cores principais e uma neutra", "Só vermelho e verde"], answer: 2, why: "Uma paleta pequena parece limpa e é fácil de repetir." },
      { objective: "O3", q: "No Canva, como começa um panfleto no tamanho certo?", options: ["Pesquisa o formato Flyer ou escolhe um tamanho personalizado", "Começa com uma página qualquer e estica-a", "Faz uma publicação para as redes sociais e imprime-a", "Desenha as margens à mão"], answer: 0, why: "Começar no tamanho certo evita refazer a composição." },
      { objective: "O3", q: "O que é verdade sobre o plano gratuito do Canva?", options: ["Todos os modelos e fotos são gratuitos", "Tem de pagar antes de poder fazer qualquer design", "Alguns elementos estão marcados Pro ou premium e precisam de um plano pago", "Só funciona em telefones"], answer: 2, why: "O plano gratuito tem muitos elementos gratuitos, mas alguns precisam de um plano pago." },
      { objective: "O3", q: "Quantas fontes devem usar a maioria dos designs simples?", options: ["Uma para cada frase", "No máximo duas", "Pelo menos cinco", "Só fontes cursivas"], answer: 1, why: "Uma fonte para os títulos e uma para o texto mantêm o design fácil de ler." },
      { objective: "O3", q: "Onde junta as suas próprias fotos no Canva?", options: ["No menu Transferir", "No nome do ficheiro", "No verificador de contraste", "Carregando-as a partir do painel lateral"], answer: 3, why: "O painel lateral é onde junta texto, imagens e os seus carregamentos." },
      { objective: "O4", q: "Uma foto de um site não tem a marca ©. O que é verdade?", options: ["É livre para qualquer pessoa", "Pertence ao Canva", "É livre se a cortar", "Pode estar protegida por direitos de autor na mesma"], answer: 3, why: "Nos EUA, uma obra fica protegida logo que é criada, com ou sem marca." },
      { objective: "O4", q: "Que relação de contraste pedem as WCAG para o texto de tamanho normal?", options: ["1 para 1", "Pelo menos 4,5 para 1", "Pelo menos 2 para 1", "Exatamente 10 para 1"], answer: 1, why: "4,5 para 1 é o mínimo para texto normal; o texto grande precisa de 3 para 1." },
      { objective: "O4", q: "O que é o texto alternativo?", options: ["Uma segunda fonte", "Um tipo de ficheiro", "Uma descrição curta de uma imagem para quem não a consegue ver", "Um modelo do Canva"], answer: 2, why: "O texto alternativo deixa os leitores de ecrã descreverem a imagem." },
      { objective: "O4", q: "Antes de imprimir 500 panfletos, qual é a verificação mais importante?", options: ["A ortografia, a data, o local, o preço e o contacto estão de acordo com o briefing", "Que usou todas as cores", "Que o ficheiro é o maior possível", "Que o modelo não foi mudado"], answer: 0, why: "Os erros em panfletos impressos custam caro e são difíceis de corrigir." },
      { objective: "O5", q: "Que tipo de ficheiro é o melhor para um panfleto impresso?", options: ["JPG", "Uma captura de ecrã", "PDF", "Um ficheiro de texto"], answer: 2, why: "O PDF mantém a composição igual e é o habitual para imprimir." },
      { objective: "O5", q: "Qual é o nome de ficheiro mais claro?", options: ["carwash-flyer-2026-11.pdf", "final-final-2.pdf", "untitled.pdf", "aaa.pdf"], answer: 0, why: "Diz o projeto e a data, para você e o cliente o encontrarem." },
      { objective: "O5", q: "Antes de pôr o panfleto de um cliente no seu portefólio, deve:", options: ["Juntar o número de telefone privado dele", "Tirar o seu nome", "Transformá-lo num JPG", "Perguntar ao cliente se o pode mostrar"], answer: 3, why: "Mostrar trabalho de clientes precisa da autorização do cliente." },
      { objective: "O5", q: "Porque fazer uma publicação para as redes sociais a condizer com o panfleto?", options: ["O Canva obriga", "Muitas vezes os clientes querem um conjunto que pareça uma só campanha", "Muda o tipo de ficheiro", "Tira os direitos de autor"], answer: 1, why: "Um conjunto a condizer, com as mesmas cores e fontes, ajuda a reconhecer o negócio." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [2, 4, 5, 9, 12, 13, 16, 18] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Briefing de design", objective: "O1", notYet: "Falta no briefing o público, a mensagem, o formato ou o tamanho.", meets: "Um parágrafo curto diz as quatro partes.", exceeds: "Também lista os dados obrigatórios e foi lido ao cliente." },
      { name: "Composição", objective: "O2", notYet: "Quem vê não sabe dizer a mensagem principal depois de 3 segundos, ou a composição parece cheia demais.", meets: "A mensagem principal vem claramente primeiro, as coisas estão alinhadas e há espaço em branco.", exceeds: "O panfleto e a publicação usam as mesmas ideias de composição, por isso parecem um só conjunto." },
      { name: "Feito no Canva", objective: "O3", notYet: "Tamanho errado, mais de 2 fontes, um elemento pago ou um modelo que não foi mudado.", meets: "Tamanho certo, no máximo 2 fontes e 3 cores principais, só elementos gratuitos, e o modelo foi tornado seu.", exceeds: "Começou numa página em branco ou mudou tanto o modelo que é claramente um design seu." },
      { name: "Verificado", objective: "O4", notYet: "Um erro de ortografia ou nos dados, texto difícil de ler, ou uma imagem sem um direito claro de uso.", meets: "Nenhum erro, o texto passa 4,5 para 1 e cada imagem está na lista com a sua origem.", exceeds: "Outra pessoa reviu o texto e há texto alternativo escrito para a publicação." },
      { name: "Exportado e descrito", objective: "O5", notYet: "Tipo de ficheiro errado, nome de ficheiro pouco claro ou nenhuma descrição.", meets: "Panfleto em PDF, publicação em PNG, nomes de ficheiros claros e uma descrição de 3 a 4 frases.", exceeds: "A descrição explica porque cada escolha de design serve o público, e o cliente aceitou que fosse mostrado." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que terminam o curso e passam na tarefa final (grelha de avaliação)",
      "Alunos que juntam a peça a um portefólio e a usam numa candidatura a emprego, estágio ou trabalho por conta própria em 30 dias (inquérito de seguimento)",
      "Alunos que dizem ter feito um design pago ou voluntário para um negócio, uma equipa ou uma organização sem fins lucrativos em 30 dias",
      "Organizações parceiras e pequenos negócios dizem usar panfletos e publicações feitos pelos alunos"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador com internet (mais fácil) ou um smartphone com a aplicação Canva",
      "Uma conta gratuita no Canva (é preciso um endereço de email para se registar)",
      "Um verificador de contraste gratuito, como o da WebAIM",
      "Papel e caneta para os esboços de composição e o briefing",
      "A câmara de um telefone para tirar as suas próprias fotos",
      "Cerca de 2 a 3 horas no total: lições, prática, verificações e a tarefa final"
    ],
    facilitatorNotes: [
      "Façam o teste inicial juntos e depois um capítulo por sessão; mostre o teste dos 3 segundos e a transformação de um modelo num ecrã partilhado.",
      "Sempre que puder, junte os alunos a um cliente local real (uma organização sem fins lucrativos, um clube da escola ou um pequeno negócio); isso torna o briefing e o portefólio reais.",
      "Não deixe os alunos copiarem logótipos ou fotos da internet; peça-lhes que anotem a origem de cada imagem.",
      "Se a sua escola ou organização sem fins lucrativos puder ter direito aos planos Education ou Nonprofits do Canva, veja as condições no site do Canva antes do curso, mas planeie todas as tarefas para funcionarem no plano gratuito.",
      "Avalie a tarefa final com a grelha de avaliação e faça uma pequena exposição em que os alunos dão um comentário simpático e um comentário útil sobre cada peça."
    ]
  }
};
