"use strict";

// Koach Learn course (Portuguese translation of athletes/athletes-seo-website-ai.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. Standard Portuguese for readers in Mozambique and Angola; the learner is addressed as "você".

module.exports = {
  id: "athletes-seo-website-ai-pt",
  lang: "pt",
  translationOf: "athletes-seo-website-ai",
  category: "Athletes",
  name: "SEO e Criar o Seu Site com IA",
  skills: "Planear um site de atleta de uma página, Escrever o texto da página com IA, Criar um site gratuito no Google Sites, SEO básico: títulos, cabeçalhos, descrições e texto alternativo, Verificar o seu site no Google",
  outcome: "criar e publicar um site de atleta gratuito, de uma só página, no Google Sites, escrito com a ajuda da IA, com um título claro, cabeçalhos, texto alternativo nas imagens e uma forma de contacto, para que treinadores e marcas o encontrem e o entendam.",
  about: [
    "Este curso é para atletas que querem um lugar na internet que eles próprios controlam, onde treinadores, recrutadores, marcas e fãs podem ver quem são, e para os treinadores que os ajudam.",
    "As redes sociais mudam e podem ter muito ruído. Um site simples dá-lhe uma página limpa com a sua história, as suas estatísticas, os seus melhores momentos e a forma de o contactar. O SEO (otimização para motores de busca) ajuda as pessoas a encontrá-lo no Google.",
    "Cada lição dura cerca de cinco minutos e tem uma tarefa \"Experimente agora\". Você vai planear, escrever, criar e publicar um site de uma página de graça. Há uma verificação de conhecimentos no fim de cada capítulo e um questionário de 20 perguntas no fim do curso."
  ],
  finalTask: "Publique um site de atleta de uma página no Google Sites com: um título de página que inclua o seu nome e o seu desporto, uma secção Sobre mim escrita com IA e editada por você, uma secção de estatísticas e melhores momentos, uma forma de contacto que não mostre os seus dados privados, texto alternativo nas imagens e um link para o site num dos seus perfis nas redes sociais. Depois pesquise no Google o seu nome e o seu desporto e anote o que aparece.",
  // ---- ADDIE: Análise ----
  analysis: {
    learners: "Atletas do ensino secundário, da universidade e do início da carreira que querem um lugar na internet que controlam, onde treinadores, recrutadores, marcas e fãs podem ver quem são, e os treinadores que os ajudam.",
    startingPoint: "Usam as redes sociais e um smartphone todos os dias e podem ter um perfil de recrutamento ou um vídeo de melhores momentos. Poucos já criaram um site, e a maioria nunca ouviu falar de títulos de página, texto alternativo ou outras bases de SEO.",
    gap: "As publicações nas redes sociais são difíceis de ler para treinadores e marcas e podem mudar ou desaparecer. Um site simples e seguro, que os motores de busca entendem, dá aos atletas uma página clara que ajuda as pessoas certas a encontrá-los e a contactá-los.",
    constraints: [
      "Linguagem simples, de cerca do 8.º ano de escolaridade",
      "Um computador ou telefone, uma conta Google gratuita, o Google Sites e um assistente de IA gratuito",
      "Cerca de 60 minutos no total",
      "Nenhum dado privado na página; os atletas com menos de 18 anos indicam um pai, uma mãe ou um treinador como contacto",
      "Autorização para usar fotos e regras da escola sobre o logótipo; os resultados de pesquisa podem demorar a aparecer"
    ],
    prerequisites: "Nenhum. O curso \"Marca Pessoal nas Redes Sociais para Atletas\" ajuda a escrever primeiro a sua frase de marca."
  },
  // ---- ADDIE: Desenho (objetivos: condição, ação observável, critério) ----
  objectives: [
    { id: "O1", condition: "Antes de criar o seu site", action: "escolher o seu público principal e fazer a lista do que ele precisa em quatro secções", standard: "com Sobre mim, Estatísticas ou Serviços, Melhores momentos e Contacto adaptados a esse público" },
    { id: "O2", condition: "Usando os seus dados verdadeiros e um assistente de IA", action: "escrever uma secção Sobre mim e escolher uma forma de contacto segura", standard: "com todos os dados verificados, nada falso, a sua própria voz, e sem morada de casa, número de telefone, data de nascimento completa ou horário" },
    { id: "O3", condition: "Para o seu site de uma página", action: "escrever um título de página, cabeçalhos das secções, uma descrição curta e texto alternativo nas imagens que ajudem na pesquisa", standard: "com o seu nome e o seu desporto no título, texto alternativo em todas as imagens e sem encher de palavras-chave" },
    { id: "O4", condition: "Usando o Google Sites", action: "criar um site de uma página com quatro secções, fotos, um vídeo de melhores momentos incorporado e um botão de contacto", standard: "usando só fotos que tem autorização para usar e seguindo as regras da sua escola sobre o logótipo" },
    { id: "O5", condition: "Quando o seu site estiver pronto", action: "publicá-lo, testá-lo num telefone e partilhar o link nas suas biografias", standard: "com todos os links, botões e vídeos a funcionar e o site revisto por um treinador, pai ou mãe" },
    { id: "O6", condition: "Depois de publicar", action: "planear uma rotina de atualização e verificar como o seu site aparece na pesquisa", standard: "com um lembrete de atualização depois de cada época e uma nota do que aparece quando pesquisa o seu nome e o seu desporto" }
  ],
  chapters: [
    {
      name: "Capítulo 1: Planear e escrever o seu site",
      lessons: [
        {
          objectives: ["O1"],
          title: "Porque um atleta precisa de um site simples",
          minutes: 4,
          goal: "Decidir para quem é o seu site e o que ele tem de mostrar.",
          text: [
            "Um site é uma página que você controla. As aplicações de redes sociais podem mudar as regras ou perder a sua conta; o seu site continua igual. Também é mais fácil para um treinador ou uma marca lê-lo do que andar pelas publicações.",
            "Decida para quem é. Um site de recrutamento precisa de estatísticas, resultados escolares, melhores momentos e referências de treinadores. Um site para marcas precisa do seu público, das parcerias que já fez e do seu kit de imprensa. Um site de treino ou de campo de férias precisa dos seus serviços, horários e inscrição.",
            "No início, faça só uma página, com secções: Sobre mim, Estatísticas ou Serviços, Melhores momentos e Contacto."
          ],
          steps: ["Escolha o seu público principal: treinadores, marcas ou clientes.", "Faça a lista do que eles precisam de ver.", "Junte tudo em quatro secções: Sobre mim, Estatísticas ou Serviços, Melhores momentos, Contacto."],
          words: [["Site", "páginas na internet num endereço que você partilha, como um link."], ["Secção", "uma parte de uma página, com o seu próprio cabeçalho."]],
          slides: [
            { title: "Porquê um site", bullets: ["Uma página que você controla", "Mais fácil de ler do que as publicações"] },
            { title: "Para quem é?", bullets: ["Treinadores: estatísticas, resultados escolares, melhores momentos", "Marcas: público, parcerias", "Clientes: serviços e inscrição"] },
            { title: "Comece com uma página", bullets: ["Sobre mim", "Estatísticas ou Serviços", "Melhores momentos", "Contacto"] }
          ],
          tryIt: "Escreva o público principal do seu site e faça a lista do que ele precisa de ver debaixo dos quatro cabeçalhos das secções.",
          youCanNow: "planear um site de atleta de uma página para um público claro.",
          quickCheck: [
            { objective: "O1", q: "O que deve mostrar um site de atleta feito para marcas?", options: ["Só o seu horário das aulas", "O seu público, as parcerias que já fez e o seu kit de imprensa", "A morada da sua casa", "Todos os resultados de jogos desde criança"], answer: 1, why: "As marcas querem ver o seu público, as suas parcerias e o seu kit de imprensa." },
            { objective: "O1", q: "Você treina um campo de férias de técnicas para jovens e quer um site para ele. Que secções servem?", options: ["Sobre mim, Serviços, Melhores momentos e Contacto com inscrição", "Só uma galeria de fotos", "Só as suas estatísticas", "Uma lista de rivais"], answer: 0, why: "Um site de treino ou de campo de férias precisa de serviços, horários e inscrição." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Escrever a sua página com IA",
          minutes: 5,
          goal: "Usar um assistente de IA para fazer o rascunho da secção Sobre mim e do texto das secções, e depois editá-lo.",
          text: [
            "Dê os seus dados a um assistente de IA e peça um rascunho: \"Termino o secundário em 2027, sou atacante de ponta de voleibol, tenho 6'1\", média (GPA) de 3.6, sou capitão da equipa e quero estudar engenharia. Escreva uma secção Sobre mim de 100 palavras para o meu site de recrutamento, na primeira pessoa, simpática e confiante.\"",
            "Verifique todos os dados. A IA pode acrescentar coisas que não são verdade, como prémios que você não ganhou. Tire tudo o que não pode provar e escreva com as suas próprias palavras.",
            "Deixe os dados privados fora da página: nada de morada de casa, número de telefone, data de nascimento completa ou horário da escola. Para o contacto, use um email separado que criou para o desporto, ou um formulário de contacto, e se for menor de idade, indique também um pai, uma mãe ou um treinador como contacto."
          ],
          steps: ["Faça a lista dos seus dados verdadeiros.", "Peça à IA um rascunho curto da secção Sobre mim.", "Verifique todos os dados e tire tudo o que não é verdade.", "Reescreva com a sua própria voz.", "Escolha uma forma de contacto segura."],
          words: [["Primeira pessoa", "escrever com \"eu\" e \"meu\"."], ["Formulário de contacto", "uma caixa num site onde os visitantes lhe enviam uma mensagem sem ver o seu email."]],
          slides: [
            { title: "Dê os seus dados à IA", bullets: ["Ano de conclusão, posição, altura", "Notas, liderança, objetivos", "Peça 100 palavras, na primeira pessoa"] },
            { title: "Verifique todos os dados", bullets: ["A IA pode inventar prémios", "Tire o que não pode provar", "Use a sua própria voz"] },
            { title: "Contacto seguro", bullets: ["Email separado para o desporto ou um formulário", "Nada de morada, telefone ou data de nascimento", "Menores: indiquem também um pai, mãe ou treinador"] }
          ],
          tryIt: "Use um assistente de IA para fazer o rascunho da sua secção Sobre mim. Verifique todos os dados, edite-o para ficar com a sua voz e crie um email separado para o desporto se ainda não tiver um.",
          youCanNow: "escrever texto correto para o site com a ajuda da IA e escolher uma forma de contacto segura.",
          quickCheck: [
            { objective: "O2", q: "Que dado deve ficar fora do seu site?", options: ["O seu desporto e a sua posição", "O seu ano de conclusão", "A morada da sua casa", "O link dos seus melhores momentos"], answer: 2, why: "Deixe a morada de casa, o número de telefone, a data de nascimento completa e o horário fora da página." },
            { objective: "O2", q: "O rascunho da IA diz que você foi escolhido para a \"seleção do estado\", mas não foi. O que faz?", options: ["Deixa ficar; ninguém verifica", "Muda para \"quase seleção do estado\"", "Pede à IA para acrescentar mais prémios", "Tira-o e escreve só dados verdadeiros"], answer: 3, why: "Verifique todos os dados e tire tudo o que não pode provar." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Bases de SEO: ajudar o Google a entender a sua página",
          minutes: 5,
          goal: "Escrever um título de página, cabeçalhos, uma descrição curta e texto alternativo nas imagens que ajudem na pesquisa.",
          text: [
            "SEO, ou otimização para motores de busca, quer dizer tornar a sua página fácil de entender para motores de busca como o Google, para que as pessoas certas a encontrem.",
            "O próprio Guia de Introdução ao SEO do Google (SEO Starter Guide) recomenda algumas bases: um título de página claro e único (por exemplo \"Jordan Lee | Voleibol, Atacante de Ponta, Turma de 2027\"), cabeçalhos que organizam a página, texto útil e atualizado escrito para pessoas, uma descrição curta da página e um texto alternativo curto e descritivo nas imagens.",
            "Escreva primeiro para as pessoas. Não encha a página de palavras-chave; use só as palavras que um treinador ou uma marca escreveria, como o seu nome, desporto, posição, ano de conclusão e cidade ou região."
          ],
          steps: ["Escreva um título de página com o seu nome, desporto e posição ou serviço.", "Use cabeçalhos em cada secção.", "Escreva uma descrição da página com uma ou duas frases.", "Acrescente um texto alternativo curto a cada imagem.", "Use as palavras que o seu público pesquisaria."],
          words: [["SEO", "otimização para motores de busca (em inglês, search engine optimization): ajudar os motores de busca a entender a sua página para que as pessoas a encontrem."], ["Texto alternativo", "uma descrição escrita curta de uma imagem (em inglês, \"alt text\"), usada pelos motores de busca e pelos leitores de ecrã."], ["Palavra-chave", "uma palavra ou frase que as pessoas escrevem num motor de busca."]],
          slides: [
            { title: "SEO numa frase", bullets: ["Ajudar o Google a entender a sua página", "Para que as pessoas certas a encontrem"] },
            { title: "As bases do Google", bullets: ["Título de página claro e único", "Cabeçalhos em cada secção", "Descrição curta e texto útil", "Texto alternativo nas imagens"] },
            { title: "Escreva para pessoas", bullets: ["Nome, desporto, posição, ano de conclusão, região", "Sem encher de palavras-chave"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Escreva o título da sua página, os quatro cabeçalhos das secções, uma descrição da página com uma frase e o texto alternativo de duas fotos que vai usar.",
          youCanNow: "escrever um título de página, cabeçalhos, uma descrição e texto alternativo que ajudam as pessoas a encontrar a sua página.",
          quickCheck: [
            { objective: "O3", q: "Em que ajuda o SEO?", options: ["Ajuda os motores de busca a entender a sua página para que as pessoas certas a encontrem", "Faz a página carregar as fotos mais depressa", "Esconde a sua página do Google", "Paga anúncios"], answer: 0, why: "SEO quer dizer tornar a sua página fácil de entender para os motores de busca." },
            { objective: "O3", q: "Vai pôr uma foto sua numa corrida de barreiras. Que texto alternativo escreve?", options: ["\"IMG_4432\"", "\"foto\"", "\"Sam Ortiz a passar uma barreira no torneio do distrito\"", "\"barreiras barreiras barreiras atletismo atletismo\""], answer: 2, why: "O texto alternativo é uma frase curta e descritiva sobre a imagem, sem encher de palavras-chave." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 1: Planear e escrever o seu site",
        questions: [
          { objective: "O1", q: "Porque ter o seu próprio site?", options: ["As redes sociais são ilegais", "Os treinadores só leem papel", "É uma página que você controla e que é fácil de ler", "Substitui o treino"], answer: 2, why: "O seu site continua igual e é fácil de ler para treinadores e marcas." },
          { objective: "O2", q: "A IA acrescenta à sua secção Sobre mim um prémio que você não ganhou. O que faz?", options: ["Tira-o", "Deixa ficar", "Acrescenta mais prémios", "Esconde-o em letra pequena"], answer: 0, why: "Ponha só dados verdadeiros que pode provar." },
          { objective: "O2", q: "Qual é uma forma de contacto segura para um menor de idade?", options: ["O número de telefone de casa", "A morada de casa", "O horário das aulas", "Um email para o desporto ou um formulário, mais o contacto de um pai, mãe ou treinador"], answer: 3, why: "Deixa as pessoas contactá-lo sem mostrar dados privados." },
          { objective: "O3", q: "Qual é um bom título de página?", options: ["\"Início\"", "\"Jordan Lee | Voleibol, Atacante de Ponta, Turma de 2027\"", "\"Bem-vindos!!!\"", "\"Página 1\""], answer: 1, why: "Diz às pessoas e ao Google exatamente o que é a página." },
          { objective: "O3", q: "O que é o texto alternativo?", options: ["Uma palavra-passe secreta", "Uma descrição curta de uma imagem", "Um segundo site", "Uma hashtag"], answer: 1, why: "O texto alternativo descreve as imagens para os motores de busca e os leitores de ecrã." }
        ]
      }
    },
    {
      name: "Capítulo 2: Criar e publicar",
      lessons: [
        {
          objectives: ["O4"],
          title: "Criar a sua página no Google Sites",
          minutes: 6,
          goal: "Criar o seu site de uma página no Google Sites.",
          text: [
            "O Google Sites é um criador de sites gratuito do Google. Precisa de uma conta Google. Abra sites.google.com, comece um site novo em branco ou um modelo, e acrescente as suas secções.",
            "Use o criador para acrescentar caixas de texto, imagens, cabeçalhos e botões, e para incorporar um vídeo de melhores momentos do YouTube. Escolha um tema simples com as cores da sua equipa e texto fácil de ler. Use só fotos que você tirou ou que tem autorização para usar, e siga as regras da sua escola sobre o logótipo.",
            "Mantenha-o limpo: uma página, quatro secções, texto grande e fácil de ler, e um botão claro para o contactar ou ver os melhores momentos."
          ],
          steps: ["Vá a sites.google.com e inicie sessão.", "Comece um site em branco ou um modelo.", "Acrescente o título da página e quatro secções com cabeçalhos.", "Cole o seu texto já editado.", "Acrescente fotos com texto alternativo e incorpore o seu vídeo de melhores momentos.", "Acrescente um botão de contacto ou um link para um formulário."],
          words: [["Modelo", "um desenho de página já feito que você preenche (em inglês, \"template\")."], ["Incorporar", "mostrar dentro da sua página um vídeo ou outro conteúdo de outro site (em inglês, \"embed\")."]],
          slides: [
            { title: "Google Sites", bullets: ["Criador de sites gratuito", "Precisa de uma conta Google", "sites.google.com"] },
            { title: "Acrescente o seu conteúdo", bullets: ["Título e quatro secções", "Fotos com texto alternativo", "Vídeo de melhores momentos incorporado"] },
            { title: "Mantenha-o limpo", bullets: ["Texto fácil de ler, cores da equipa", "Um botão claro", "As suas fotos; siga as regras do logótipo"] }
          ],
          tryIt: "Crie a sua página no Google Sites com o seu título, quatro secções, pelo menos uma foto com texto alternativo e o seu vídeo de melhores momentos ou um espaço reservado para ele.",
          youCanNow: "criar um site de atleta limpo, de uma página, no Google Sites.",
          quickCheck: [
            { objective: "O4", q: "Onde vai para começar uma página no Google Sites?", options: ["sites.google.com", "O site da sua escola", "Uma aplicação de redes sociais", "O Search Console"], answer: 0, why: "Abra sites.google.com e inicie sessão com uma conta Google." },
            { objective: "O4", q: "Quer o seu vídeo de melhores momentos no site. O que faz?", options: ["Cola uma captura de ecrã dele", "Descreve-o só com palavras", "Envia-o por email aos visitantes", "Incorpora o seu vídeo do YouTube na página"], answer: 3, why: "O Google Sites consegue incorporar um vídeo de melhores momentos do YouTube." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Publicar e verificar o seu site",
          minutes: 5,
          goal: "Publicar o seu site, testá-lo num telefone e partilhar o link.",
          text: [
            "Quando a sua página estiver pronta, use o botão de publicar e escolha o endereço do seu site. Escolha um endereço curto com o seu nome e o seu desporto.",
            "Teste-o num telefone, porque a maioria dos treinadores e dos fãs vai abri-lo aí. Veja se todos os links e botões funcionam, se o vídeo toca e se o texto é fácil de ler. Peça também a um treinador, pai ou mãe para o ver.",
            "Partilhe o link nas biografias das suas redes sociais, na assinatura do seu email e nos seus perfis de recrutamento. Se mudar os seus dados de contacto, atualize o site logo."
          ],
          steps: ["Clique em publicar e escolha um endereço curto.", "Abra-o num telefone.", "Teste todos os links, botões e vídeos.", "Peça a um treinador, pai ou mãe para o rever.", "Ponha o link nas suas biografias e na assinatura do email."],
          words: [["Publicar", "pôr o seu site a funcionar na internet."], ["URL", "um endereço de internet, como o link que você partilha."]],
          slides: [
            { title: "Publicar", bullets: ["Escolha um endereço curto com o seu nome e o seu desporto"] },
            { title: "Teste num telefone", bullets: ["Os links e botões funcionam?", "O vídeo toca?", "O texto é fácil de ler?"] },
            { title: "Partilhe", bullets: ["Biografias nas redes sociais", "Assinatura do email", "Perfis de recrutamento"] }
          ],
          tryIt: "Publique o seu site, teste-o num telefone, peça a um adulto para o rever e ponha o link num perfil das redes sociais.",
          youCanNow: "publicar, testar e partilhar o seu site de atleta.",
          quickCheck: [
            { objective: "O5", q: "O que faz um bom endereço de site?", options: ["Uma longa fila de números", "Curto, com o seu nome e o seu desporto", "O seu número de telefone", "Só o nome da sua escola"], answer: 1, why: "Escolha um endereço curto com o seu nome e o seu desporto." },
            { objective: "O5", q: "Mudou o seu email para o desporto. O que faz com o site?", options: ["Deixa ficar; ninguém o lê", "Apaga o site", "Atualiza logo os dados de contacto", "Espera pela próxima época"], answer: 2, why: "Se os seus dados de contacto mudarem, atualize o site logo." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Manter o site atualizado e verificar a pesquisa",
          minutes: 5,
          goal: "Criar uma rotina de atualização e ver como o seu site aparece na pesquisa.",
          text: [
            "Os motores de busca e os visitantes gostam de páginas atualizadas. Atualize as suas estatísticas, os melhores momentos e os horários depois de cada época ou evento grande, e mude a data na sua secção Sobre mim.",
            "Os sites novos podem demorar a aparecer nos resultados de pesquisa. Pesquise no Google o seu nome mais o seu desporto e veja o que aparece. O Google tem uma ferramenta gratuita chamada Search Console que os donos de sites podem usar para ver como o seu site se sai na pesquisa; o Guia de Introdução ao SEO explica-a.",
            "De poucos em poucos meses, pergunte a um assistente de IA: \"Aqui está o texto do meu site. Sugira três formas de o tornar mais claro para treinadores universitários.\" Depois decida o que mudar."
          ],
          steps: ["Crie um lembrete para atualizar depois de cada época.", "Pesquise o seu nome mais o seu desporto e anote o que aparece.", "Leia sobre o Search Console no guia do Google.", "Peça à IA três sugestões para ficar mais claro e escolha o que vai usar."],
          words: [["Search Console", "a ferramenta gratuita do Google que mostra aos donos de sites como o seu site aparece na Pesquisa Google."], ["Resultados de pesquisa", "a lista de páginas que um motor de busca mostra para uma pesquisa."]],
          slides: [
            { title: "Mantenha-se atualizado", bullets: ["Atualize estatísticas e melhores momentos em cada época", "Mude as datas na sua secção Sobre mim"] },
            { title: "Verifique a pesquisa", bullets: ["Os sites novos podem demorar a aparecer", "Pesquise o seu nome mais o seu desporto", "Search Console para donos de sites"] },
            { title: "Melhore com IA", bullets: ["Peça três dicas para ficar mais claro", "Você decide o que mudar"] }
          ],
          sources: [{ name: "Google Search Central: SEO Starter Guide", url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide" }],
          tryIt: "Tarefa final: confirme que o seu site publicado tem um título claro, um texto Sobre mim feito com ajuda da IA e editado por você, estatísticas e melhores momentos, uma forma de contacto segura, texto alternativo nas imagens e um link para ele numa rede social. Pesquise no Google o seu nome e o seu desporto e anote o que aparece.",
          youCanNow: "manter o seu site atualizado e verificar como ele aparece na pesquisa.",
          quickCheck: [
            { objective: "O6", q: "O que é o Google Search Console?", options: ["Uma ferramenta gratuita do Google que mostra como o seu site se sai na pesquisa", "Um serviço de anúncios pago", "Um criador de sites", "Uma aplicação de redes sociais"], answer: 0, why: "O Search Console deixa os donos de sites ver como o seu site se sai na pesquisa." },
            { objective: "O6", q: "A sua época acabou agora. O que diz a sua rotina de atualização?", options: ["Nada até terminar os estudos", "Apagar só os melhores momentos antigos", "Mudar o endereço do site", "Atualizar as estatísticas, os melhores momentos e a data na secção Sobre mim"], answer: 3, why: "Atualize depois de cada época ou evento grande para a página continuar atual." }
          ]
        }
      ],
      check: {
        title: "Verificação de conhecimentos 2: Criar e publicar",
        questions: [
          { objective: "O4", q: "De que precisa para usar o Google Sites?", options: ["Um plano pago", "Um curso de programação", "Um servidor", "Uma conta Google"], answer: 3, why: "O Google Sites é gratuito com uma conta Google." },
          { objective: "O4", q: "Que fotos pode pôr no seu site?", options: ["Fotos que tirou ou que tem autorização para usar", "Qualquer foto que encontra na internet", "Fotos de outros atletas", "Logótipos da escola sem pedir"], answer: 0, why: "Use só fotos que são suas ou que pode usar." },
          { objective: "O5", q: "Porque testar o seu site num telefone?", options: ["Os telefones são proibidos", "Fica pior nos computadores", "A maioria dos visitantes vai abri-lo num telefone", "Por nenhuma razão"], answer: 2, why: "Treinadores e fãs muitas vezes abrem os links no telefone." },
          { objective: "O6", q: "O seu site não aparece no Google no dia em que o publica. Porque pode ser?", options: ["Está estragado para sempre", "O Google proíbe atletas", "Tem de pagar", "Os sites novos podem demorar a aparecer"], answer: 3, why: "Os motores de busca precisam de tempo para encontrar páginas novas." },
          { objective: "O6", q: "Quando deve atualizar as suas estatísticas e os melhores momentos?", options: ["Nunca", "Depois de cada época ou evento grande", "Uma vez em cada dez anos", "Só quando um treinador se queixa"], answer: 1, why: "O conteúdo atualizado ajuda os visitantes e a pesquisa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Questionário final: SEO e Criar o Seu Site com IA",
    questions: [
      { objective: "O3", q: "SEO quer dizer:", options: ["Saída social do dia a dia", "Organizador de eventos desportivos", "Otimização para motores de busca", "Edição de sites na internet"], answer: 2, why: "Quer dizer ajudar os motores de busca a entender a sua página." },
      { objective: "O1", q: "Um site de recrutamento deve mostrar:", options: ["Estatísticas, resultados escolares, melhores momentos", "A morada da sua casa", "A sua palavra-passe", "Mexericos sobre rivais"], answer: 0, why: "É disso que os treinadores precisam." },
      { objective: "O1", q: "Com quantas páginas deve começar?", options: ["Uma", "Vinte", "Zero", "Cem"], answer: 0, why: "Uma página clara chega para começar." },
      { objective: "O1", q: "Que secção ajuda as pessoas a contactá-lo?", options: ["Desenhos no rodapé", "Cores do tema", "Contacto", "Tipos de letra"], answer: 2, why: "A secção Contacto diz às pessoas como chegar até você." },
      { objective: "O2", q: "Quando a IA faz o rascunho da sua secção Sobre mim, você tem de:", options: ["Publicá-lo sem ler", "Verificar todos os dados", "Acrescentar prémios a mais", "Torná-lo mais comprido"], answer: 1, why: "A IA pode inventar dados." },
      { objective: "O2", q: "O que NÃO deve estar no seu site?", options: ["A sua posição", "O seu vídeo de melhores momentos", "O seu ano de conclusão", "A sua data de nascimento completa e a morada da sua casa"], answer: 3, why: "São dados privados." },
      { objective: "O2", q: "Um formulário de contacto deixa as pessoas:", options: ["Ver a sua palavra-passe", "Editar o seu site", "Enviar-lhe uma mensagem sem ver o seu email", "Pagar-lhe"], answer: 2, why: "Protege o seu endereço de email." },
      { objective: "O3", q: "O que ajuda o Google a entender a sua página?", options: ["Tudo em letras maiúsculas", "Texto escondido", "Nenhuma palavra", "Um título de página claro e cabeçalhos"], answer: 3, why: "O guia do Google recomenda títulos e cabeçalhos claros." },
      { objective: "O3", q: "Encher de palavras-chave quer dizer:", options: ["Repetir palavras de pesquisa de forma pouco natural", "Escrever para pessoas", "Acrescentar texto alternativo", "Usar cabeçalhos"], answer: 0, why: "Escreva para pessoas, sem encher de palavras-chave." },
      { objective: "O3", q: "Um bom texto alternativo para uma foto de ação é:", options: ["\"IMG_2034\"", "\"Jordan Lee a rematar a bola na meia-final estadual\"", "\"foto\"", "Em branco"], answer: 1, why: "Curto e descritivo." },
      { objective: "O3", q: "A descrição de uma página deve ser:", options: ["Uma redação completa", "Uma lista de palavras-passe", "Uma ou duas frases sobre a página", "Vazia"], answer: 2, why: "As descrições curtas podem aparecer nos resultados de pesquisa." },
      { objective: "O4", q: "O Google Sites é:", options: ["Um criador de sites gratuito", "Só uma aplicação paga", "Uma rede social", "Um videojogo"], answer: 0, why: "É o criador gratuito do Google." },
      { objective: "O4", q: "Para mostrar o seu vídeo de melhores momentos no site, você:", options: ["Só o descreve", "Envia-o por email aos visitantes", "Imprime-o", "Incorpora-o"], answer: 3, why: "Ao incorporá-lo, ele toca na sua página." },
      { objective: "O4", q: "Antes de usar o logótipo da sua escola, deve:", options: ["Desenhá-lo de novo", "Seguir as regras da sua escola sobre o logótipo", "Ignorar as regras", "Vendê-lo"], answer: 1, why: "As escolas controlam os seus logótipos." },
      { objective: "O5", q: "Um bom endereço de site é:", options: ["Números ao acaso", "Curto, com o seu nome e o seu desporto", "Muito comprido", "A sua palavra-passe"], answer: 1, why: "Fácil de lembrar e de partilhar." },
      { objective: "O5", q: "Depois de publicar, quem deve rever o seu site?", options: ["Ninguém", "Um desconhecido na internet", "Um rival", "Um treinador, pai ou mãe"], answer: 3, why: "Um segundo olhar apanha os erros." },
      { objective: "O5", q: "Onde deve partilhar o link do seu site?", options: ["Biografias, assinatura do email e perfis de recrutamento", "Em lado nenhum", "Só em papel", "Em mensagens de spam"], answer: 0, why: "É aí que os treinadores e as marcas procuram." },
      { objective: "O6", q: "O Search Console é:", options: ["Uma consola de jogos", "Um anúncio pago", "A ferramenta gratuita do Google que mostra como o seu site aparece na pesquisa", "Uma aplicação social"], answer: 2, why: "Os donos de sites usam-no para verificar como o site se sai na pesquisa." },
      { objective: "O6", q: "Como verifica a forma como o seu site aparece na pesquisa?", options: ["Pede à IA para adivinhar", "Vê a previsão do tempo", "Reinicia o telefone", "Pesquisa o seu nome mais o seu desporto"], answer: 3, why: "Pesquisar mostra o que as outras pessoas veem." },
      { objective: "O6", q: "A IA sugere três mudanças no seu site. Você:", options: ["Tem de usar todas", "Decide quais vai usar", "Não pode usar nenhuma", "Apaga o seu site"], answer: 1, why: "A IA sugere; você decide." }
    ]
  },
  // ---- ADDIE: Avaliação ----
  pretest: { title: "Teste inicial: O que você já sabe?", from: [1, 4, 7, 9, 11, 14, 17] },
  rubric: {
    mastery: "Atinge ou Supera em todas as linhas. Se uma linha estiver em Ainda não, corrija essa parte e tente outra vez.",
    criteria: [
      { name: "Título da página e bases de SEO", objective: "O3", notYet: "O título não tem o seu nome ou o seu desporto, ou as imagens não têm texto alternativo.", meets: "Um título com o nome e o desporto, cabeçalhos em cada secção, uma descrição curta e texto alternativo em todas as imagens.", exceeds: "Usa as palavras que o público pesquisaria, como a posição, o ano de conclusão e a região, sem encher de palavras-chave." },
      { name: "Secção Sobre mim", objective: "O2", notYet: "Tem dados falsos ou parece texto copiado da IA.", meets: "Todos os dados são verdadeiros e verificados, escritos com a voz do próprio atleta.", exceeds: "Adaptada ao público principal, por exemplo resultados escolares e carácter para treinadores universitários." },
      { name: "Estatísticas e melhores momentos", objective: "O4", notYet: "Faltam, estão desatualizados ou usam fotos sem autorização.", meets: "Estatísticas atuais e um vídeo de melhores momentos incorporado, só com fotos autorizadas e seguindo as regras da escola sobre o logótipo.", exceeds: "Inclui a data da última atualização das estatísticas e uma legenda curta para cada momento." },
      { name: "Contacto seguro", objective: "O2", notYet: "Mostra uma morada de casa, um número de telefone pessoal ou a data de nascimento completa.", meets: "Um email para o desporto ou um formulário de contacto, mais o contacto de um pai, mãe ou treinador para os menores.", exceeds: "O botão de contacto foi testado e as respostas chegam a uma conta que é vista com regularidade." },
      { name: "Publicado, ligado e verificado", objective: "O5", notYet: "Não está publicado, tem links estragados ou não tem link num perfil.", meets: "Publicado num endereço curto, testado num telefone, revisto por um treinador, pai ou mãe e com link num perfil das redes sociais.", exceeds: "Os resultados de pesquisa do nome e do desporto foram anotados e há um lembrete de atualização criado." }
    ]
  },
  evaluation: {
    results: [
      "Alunos que publicam o seu site e têm Atinge ou Supera em todas as linhas da grelha de avaliação",
      "Alunos cujo site aparece quando pesquisam o seu nome e o seu desporto no seguimento de 30 dias",
      "Alunos que dizem ter sido contactados por um treinador, recrutador ou marca através do seu site",
      "Alunos que atualizam o seu site depois da próxima época ou evento grande"
    ]
  },
  // ---- ADDIE: Implementação ----
  implementation: {
    materials: [
      "Um computador (mais fácil) ou um telefone com internet",
      "Uma conta Google gratuita para o Google Sites",
      "Um assistente de IA gratuito (ChatGPT, Microsoft Copilot ou Google Gemini)",
      "As suas estatísticas, um link para o vídeo de melhores momentos e fotos que tem autorização para usar",
      "Cerca de 60 minutos"
    ],
    facilitatorNotes: [
      "Ajude os atletas a criar um email separado para o desporto ou um formulário de contacto para que os dados pessoais fiquem privados.",
      "Para os menores, peça a um pai, mãe ou encarregado de educação para rever o site antes de ser publicado e de ser indicado como contacto.",
      "Verifique as regras da escola sobre logótipos e fotos antes da lição de criação do site.",
      "Peça aos atletas para trocarem de telefone e testarem os sites uns dos outros, à procura de links estragados e de texto difícil de ler.",
      "Lembre aos alunos que os sites novos podem demorar a aparecer na pesquisa; verifiquem outra vez no seguimento de 30 dias."
    ]
  }
};
