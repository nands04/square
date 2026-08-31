const products = [
  {
    id: "PDTR1AC200",
    name: "Torneira modelo PDTR1AC200",
    category: "Torneiras Clínicas",
    image: "images/PDTR1AC200.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    formato: "Padrão",
    complemento: "Pedal Completo",
    acionamento: "Pedal",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    characteristics: [
      "Pedal Completo Sem Misturador",
      "Feita em material nobre e robusto",
      "Refil cerâmico",
      "Economia de 100% de água"
    ],
    materials: "Material nobre",
    description: "Torneira modelo PDTR1AC200, de pedal completo sem misturador, feita em material nobre, produto robusto, refil cerâmico, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas."
  },
  {
    id: "DBFP90",
    name: "Modelo DBFP90",
    category: "Esguichos de Parede",
    image: "images/DBFP90.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DBFB90/150, de parede com misturador (Disponível nas versões 150 mm e 200 mm), latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria. Disponível também de bancada com misturador."
  },
  {
    id: "DBFP9D",
    name: "Modelo DBFP9D",
    category: "Esguichos de Parede",
    image: "images/DBFP9D.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    complemento: "Com torneira extra",
    aplicacao: "Cozinhas industriais",
    description: "O Esguicho de Pré-Lavagem modelo DBFP9D, de parede com torneira extra, com misturador (Disponível nas versões 150 mm e 200 mm), latão cromado e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro. Bica: 250 mm ou 300 mm."
  },
  {
    id: "DMAB90",
    name: "Modelo DMAB90",
    category: "Esguichos de Bancada",
    image: "images/DMAB90.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMAB90, de bancada sem misturador, latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DMAB9D_BANCADA",
    name: "Modelo DMAB9D Bancada",
    category: "Esguichos de Bancada",
    image: "images/DMAB9D_BANCADA.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    complemento: "Com torneira extra",
    description: "O Esguicho de Pré-Lavagem modelo DMAB9D, de bancada com torneira extra sem misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DMAP90",
    name: "Modelo DMAP90",
    category: "Esguichos de Parede",
    image: "images/DMAP90.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMAP90, de parede sem misturador, latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DMAP9D",
    name: "Modelo DMAP9D",
    category: "Esguichos de Parede",
    image: "images/DMAP9D.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    complemento: "Com torneira extra",
    description: "O Esguicho de Pré-Lavagem modelo DMAP9D, de parede com torneira extra, sem misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DMERB",
    name: "Modelo DMERB",
    category: "Torneiras Industriais Simples",
    image: "images/DMERB.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DMERB, de parede com misturador (Disponível nas versões 150 mm e 200 mm), feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas."
  },
  {
    id: "DMFB90B",
    name: "Esguicho de Pré-Lavagem Bancada",
    category: "Esguichos de Bancada",
    image: "images/DMFB9D.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas",
    description: "O Esguicho de Pré-Lavagem modelo DMFB90B, de bancada com misturador furo único, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro."
  },
  {
    id: "DMFBMCB",
    name: "Modelo DMFBMCB",
    category: "Esguichos de Bancada",
    image: "images/DMFBMCB.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMFBMCB, de bancada com misturador furo único, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DMFBMD",
    name: "Modelo DMFBMD",
    category: "Esguichos de Bancada",
    image: "images/DMFBMD.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMFBMD, de bancada com misturador furo único, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "SPBICCH",
    name: "Lava Copo (Modelo SPBICCH)",
    category: "Acessórios",
    image: "images/SPBICCH.png",
    description: "Lava copo modelo SPBICCH. Acessório profissional para higienização rápida de copos."
  },
  {
    id: "AV10L312",
    name: "Enrolador 12M",
    category: "Higienização",
    image: "images/AV10L312.png",
    description: "GRUPO DE LAVAGEM PROTEGIDO COM ENROLADOR 12 METROS COM DUCHA ANTI-DERRAPANTE. Higienizador de Cozinha."
  },
  {
    id: "BFBDD_MINI_200MM",
    name: "Mini Esguicho de Pré-Lavagem de Bancada",
    category: "Esguichos de Bancada",
    image: "images/BFBDD_MINI_200MM.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    formato: "Mini",
    aplicacao: "Cozinhas",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD/MINI (Disponível nas versões 150 mm e 200 mm), de bancada com misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "SP300D",
    name: "Modelo SP300D",
    category: "Acessórios",
    image: "images/SP300D.png",
    description: "Bica em latão cromado L.300 mm ou L.250 mm."
  },
  {
    id: "SP250A",
    name: "Modelo SP250A",
    category: "Acessórios",
    image: "images/SP250A.png",
    description: "Bica em latão cromado 18 mm. L.300 mm ou L.250 mm."
  },
  {
    id: "RDTUBO",
    name: "Modelo RDTUBO",
    category: "Acessórios",
    image: "images/RDTUBO.png",
    description: "Cano em aço inox, com bica extra em latão cromado H.750 mm."
  },
  {
    id: "RDSTCP",
    name: "Modelo RDSTCP",
    category: "Acessórios",
    image: "images/RDSTCP.png",
    description: "Kit de fixação para parede aço inox. Parafusos de travamento."
  },
  {
    id: "RDFLX0B",
    name: "Modelo RDFLX0B",
    category: "Acessórios",
    image: "images/RDFLX0B.png",
    description: "Flexível FG 1/2 CR 1/2 CR com proteção UV e trança de aço inoxidável. Disponível: 1 metro e meio ou 1 metro."
  },
  {
    id: "RDEVML",
    name: "Modelo RDEVML",
    category: "Acessórios",
    image: "images/RDEVML.png",
    description: "Cano em aço inox, com bica extra em latão cromado L.750 mm."
  },
  {
    id: "RDCPNB",
    name: "Modelo RDCPNB",
    category: "Acessórios",
    image: "images/RDCPNB.png",
    description: "Ducha aérea corpo em latão cromado, cabo emborrachado anti-derrapante, proteção anti-choque, gatilho manual com opção de travamento."
  },
  {
    id: "RDMOLXM",
    name: "Modelo RDMOLXM",
    category: "Acessórios",
    image: "images/RDMOLXM.png",
    description: "Mini mola de balanceamento em aço inox."
  },
  {
    id: "RIC220",
    name: "Modelo RIC220",
    category: "Acessórios",
    image: "images/RIC220.png",
    description: "Registro em latão água quente ou fria, vedação em cerâmica, 1/4 de volta."
  },
  {
    id: "PDTR1A",
    name: "Modelo PDTR1A",
    category: "Torneiras Clínicas",
    image: "images/PDTR1A.png",
    description: "Pedal de acionamento hidráulico para torneiras de pedal. Ideal para cozinhas industriais, restaurantes, clínicas médicas e odontológicas."
  },
  {
    id: "MINIDMAPAREDE",
    name: "Mini Esguicho de Pré-Lavagem de Parede com Torneira Extra",
    category: "Esguichos de Parede",
    image: "images/MINIDMAPAREDE.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    complemento: "Com torneira extra",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD2/MINI (Disponível nas versões 150 mm e 200 mm), de parede com misturador e torneira extra, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "MINIDMFB90B",
    name: "Mini Esguicho de Pré-Lavagem de Bancada",
    category: "Esguichos de Bancada",
    image: "images/MINIDMFB90B.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMFB90B, de bancada com misturador furo único. latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "MODFRIUO",
    name: "Torneira Eletrônica com Bateria",
    category: "Torneiras Especiais",
    image: "images/MODFRIUO.png",
    description: "Torneira eletrônica com bateria, mecanismo cerâmico, ideal para cozinhas industriais, restaurantes, clínicas médicas e odontológicas."
  },
  {
    id: "DBFB90",
    name: "Modelo DBFB90",
    category: "Esguichos de Bancada",
    image: "images/DBFB90.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DBFB90/150, de bancada com misturador (Disponível nas versões 150 mm e 200 mm), latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DBFB9D",
    name: "Modelo DBFB9D",
    category: "Esguichos de Bancada",
    image: "images/DBFB9D.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    complemento: "Com torneira extra",
    description: "O Esguicho de Pré-Lavagem modelo DBFB9D, de bancada com torneira extra, com misturador (Disponível nas versões 150 mm e 200 mm), latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DD28229",
    name: "Modelo DD2829",
    category: "Torneiras Industriais Simples",
    image: "images/DD28229.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DD2829, de bancada sem misturador, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas. Bica: 250 mm ou 300 mm."
  },
  {
    id: "DD2828",
    name: "Modelo DD2828",
    category: "Torneiras Industriais Simples",
    image: "images/DD2828.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DD2828, de parede sem misturador, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas."
  },
  {
    id: "DMAMADI",
    name: "Modelo DMAMADI",
    category: "Torneiras Industriais Simples",
    image: "images/DMAMADI.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DMAMADI, de parede sem misturador, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas."
  },
  {
    id: "BFBD20",
    name: "Modelo BFBD20",
    category: "Torneiras Industriais Simples",
    image: "images/BFBD20.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo BFBD20, de bancada com misturador (Disponível nas versões 150 mm e 200 mm), feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas. Bica: 250 mm ou 300 mm."
  },
  {
    id: "MAP9251L",
    name: "Torneira Clínica Modelo A",
    category: "Torneiras Clínicas",
    image: "images/MAP9251L.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    aplicacao: "Hospitais, clínicas, centro cirúrgicos, fábricas, clínicas médicas e odontológicas",
    description: "Torneira clínica MODELO A, de parede sem misturador alavanca clínica, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para hospitais, clínicas, centro cirúrgicos e fábricas, clínicas médicas e odontológicas. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "MFBLS1",
    name: "Modelo MFBLS1",
    category: "Torneiras Clínicas",
    image: "images/MFBLS1.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas e odontológicas",
    description: "Torneira de bancada com misturador alavanca clínica furo único, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas e odontológicas. Entrada: 3/4\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "MFBU2L",
    name: "Modelo MFBU2L",
    category: "Torneiras Clínicas",
    image: "images/MFBU2L.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Hospitais, clínicas, centro cirúrgicos, fábricas",
    description: "Torneira clínica de bancada com misturador alavanca clínica furo único, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para hospitais, clínicas, centro cirúrgicos, fábricas. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "BFBDD2MINI",
    name: "Mini Esguicho de Pré-Lavagem de Bancada",
    category: "Esguichos de Bancada",
    image: "images/BFBDD2MINI.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD2/MINI, de bancada com misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "BFBDD366MINI",
    name: "Mini Esguicho de Pré-Lavagem Bancada",
    category: "Esguichos de Bancada",
    image: "images/BFBDD366MINI.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD366/MINI, de bancada com misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "BFBPX30150MM",
    name: "Esguicho de Pré-Lavagem de Parede",
    category: "Torneiras Clínicas",
    image: "images/BFBPX30150MM.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    description: "Esguicho de Pré-Lavagem modelo BFBPX30 (Disponível nas versões 150 mm e 200 mm), de parede com misturador, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "AV10L3",
    name: "Ducha (Modelo AV10L3)",
    category: "Higienização",
    image: "images/AV10L3.png",
    description: "Ducha registro em latão, água quente ou fria, vedação em cerâmica 1/4 de volta. Ducha para lavagem do forno com Flexível de 2 Metros As grandes instalações de alimentação de hotéis, hospitais, comunidades e refeitórios empresariais poderão usufruir de duchas para lavagem do forno funcionais, caracterizadas por uma linha inovadora."
  },
  {
    id: "AV10L2",
    name: "Enrolador 3 Metros",
    category: "Higienização",
    image: "images/AV10L2–3METROS.png",
    description: "Grupo de lavagem protegido com enrolador 3 metros com ducha anti-derrapante. Higienizador de cozinha."
  },
  {
    id: "CANOPLA",
    name: "Canopla",
    category: "Acessórios",
    image: "images/CANOPLA.png",
    description: "Canopla 1/4 de volta água quente e fria"
  },
  {
    id: "MFBUOC",
    name: "Modelo MFBUOC",
    category: "Torneiras Industriais Simples",
    image: "images/MFBUOC.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas e odontológicas",
    description: "Torneira industrial simples modelo MFBUOC, de bancada com misturador furo único, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas e odontológicas."
  },
  {
    id: "MODELOB",
    name: "Torneira Clínica Modelo B",
    category: "Torneiras Clínicas",
    image: "images/MODELOB.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    aplicacao: "Hospitais, clínicas, centro cirúrgicos, fábricas, clínicas médicas e odontológicas",
    description: "Torneira clínica MODELO B, de parede sem misturador alavanca clínica, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para hospitais, clínicas, centro cirúrgicos e fábricas, clínicas médicas e odontológicas. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "DUCHAMINIESGUICHO",
    name: "Ducha Mini Esguicho",
    category: "Acessórios",
    image: "images/DUCHAMINIESGUICHO.png",
    description: "Ducha mini esguicho, acessório para sistemas de pré-lavagem."
  },
  {
    id: "02UVXA",
    name: "Modelo 02UVXA",
    category: "Acessórios",
    image: "images/02UVXA.png",
    description: "Kit de vedação: borracha de vedação, rosca de vedação e porca de vedação."
  },
  {
    id: "DMAMAD",
    name: "Modelo DMAMAD",
    category: "Torneiras Industriais Simples",
    image: "images/DMAMAD.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DMAMAD, de bancada sem misturador, feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas. Disponível também de parede sem misturador."
  }
];

