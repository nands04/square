const products = [
  {
    id: "PDTR1AC200",
    name: "Torneira modelo PDTR1AC200",
    category: "Torneiras de Acionamento por Pedal",
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
      "ECONOMIA 100 % DE ÁGUA"
    ],
    materials: "Material nobre",
    description: "Torneira modelo PDTR1AC200, de PEDAL COMPLETO SEM MISTURADOR, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas. ECONOMIA 100 % DE ÁGUA."
  },
  {
    id: "DBFP90",
    name: "Modelo DBFP90",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DBFP90.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DBFB90/150, de PAREDE COM MISTURADOR (150mm), latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DBFP9D",
    name: "Modelo DBFP9D",
    category: "Esguichos com Torneira Extra",
    image: "images/DBFP9D.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    complemento: "Com torneira extra",
    aplicacao: "Cozinhas industriais",
    description: "O Esguicho de Pré-Lavagem modelo DBFP9D, de PAREDE COM TORNEIRA EXTRA, COM MISTURADOR (150mm), latão cromado e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro."
  },
  {
    id: "DMAB90",
    name: "Modelo DMAB90",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DMAB90.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMAB90, de BANCADA SEM MISTURADOR, latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DMAB9D_BANCADA",
    name: "Modelo DMAB9D BANCADA",
    category: "Esguichos com Torneira Extra",
    image: "images/DMAB9D_BANCADA.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    complemento: "Com torneira extra",
    description: "O Esguicho de Pré-Lavagem modelo DMAB9D, de BANCADA COM TORNEIRA EXTRA SEM MISTURADOR, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DMAP90",
    name: "Modelo DMAP90",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DMAP90.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMAP90, de PAREDE SEM MISTURADOR, latão cromado e aço inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DMAP9D",
    name: "Modelo DMAP9D",
    category: "Esguichos com Torneira Extra",
    image: "images/DMAP9D.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    complemento: "Com torneira extra",
    description: "O Esguicho de Pré-Lavagem modelo DMAP9D, de PAREDE COM TORNEIRA EXTRA, SEM MISTURADOR, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DMERB",
    name: "Modelo DMERB",
    category: "Torneiras Industriais",
    image: "images/DMERB.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas",
    description: "Torneira industrial simples modelo DMERB, de PAREDE COM MISTURADOR (200mm), feita em material nobre, produto robusto, registro com 1/4 de volta com refil cerâmico com alavanca, ideal para cozinhas industriais, restaurante, bares, lanchonetes, padarias, clínicas médicas odontológicas."
  },
  {
    id: "DMFB90B",
    name: "Esguicho de Pré-Lavagem Bancada",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DMFB9D.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    aplicacao: "Cozinhas",
    description: "O Esguicho de Pré-Lavagem modelo DMFB90B, de BANCADA COM MISTURADOR FURO ÚNICO, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro."
  },
  {
    id: "DMFBMCB",
    name: "Modelo DMFBMCB",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DMFBMCB.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "O Esguicho de Pré-Lavagem modelo DMFBMCB, de BANCADA COM MISTURADOR FURO ÚNICO, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "DMFBMD",
    name: "Modelo DMFBMD",
    category: "Esguichos de Pré-Lavagem",
    image: "images/DMFBMD.png",
    description: "Produto com referência DMFBMD."
  },
  {
    id: "SPBICCH",
    name: "Modelo SPBICCH",
    category: "Higienizadores e Acessórios",
    image: "images/SPBICCH.png",
    description: "Suporte e acessório modelo SPBICCH."
  },
  {
    id: "AV10L312",
    name: "Enrolador 12M",
    category: "Higienizadores e Acessórios",
    image: "images/AV10L312.png",
    description: "GRUPO DE LAVAGEM PROTEGIDO COM ENROLADOR 12 METROS COM DUCHA ANTI-DERRAPANTE. Higienizador de Cozinha."
  },
  {
    id: "BFBDD_MINI_200MM",
    name: "Mini Esguicho de Pré-Lavagem de Parede",
    category: "Esguichos de Pré-Lavagem",
    image: "images/BFBDD_MINI_200MM.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    formato: "Mini",
    aplicacao: "Cozinhas",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD/MINI 200MM, de PAREDE COM MISTURADOR, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria. Foi desenvolvido especificamente para o trabalho pesado das cozinhas industriais, aumentando a produtividade dos funcionários e economizando tempo, água e dinheiro. Entrada: 1/2\" (padrão brasileiro) Faixa de pressão: mínimo de 0,3 bar ao máximo de 12."
  },
  {
    id: "SP300D",
    name: "Modelo SP300D",
    category: "Higienizadores e Acessórios",
    image: "images/SP300D.png",
    description: "Bica em latão cromado referência SP300D."
  },
  {
    id: "SP250A",
    name: "Modelo SP250A",
    category: "Higienizadores e Acessórios",
    image: "images/SP250A.png",
    description: "Bica em latão cromado referência SP250A."
  },
  {
    id: "RDTUBO",
    name: "Modelo RDTUBO",
    category: "Higienizadores e Acessórios",
    image: "images/RDTUBO.png",
    description: "Cano em aço inox, com bica extra em latão cromado H.750 mm."
  },
  {
    id: "RDSTCP",
    name: "Modelo RDSTCP",
    category: "Higienizadores e Acessórios",
    image: "images/RDSTCP.png",
    description: "Kit de fixação para parede aço inox. Parafusos de travamento."
  },
  {
    id: "RDFLX0B",
    name: "Modelo RDFLX0B",
    category: "Higienizadores e Acessórios",
    image: "images/RDFLX0B.png",
    description: "Flexível FG 1/2 CR 1/2 CR com proteção UV e trança de aço inoxidável."
  },
  {
    id: "RDEVML",
    name: "Modelo RDEVML",
    category: "Higienizadores e Acessórios",
    image: "images/RDEVML.png",
    description: "Cano em aço inox, com bica extra em latão cromado L.750 mm."
  },
  {
    id: "RDCPNB",
    name: "Modelo RDCPNB",
    category: "Higienizadores e Acessórios",
    image: "images/RDCPNB.png",
    description: "Ducha aérea corpo em latão cromado, cabo emborrachado anti-derrapante, proteção anti-choque, gatilho manual com opção de travamento."
  },
  {
    id: "RDMOLXM",
    name: "Modelo RDMOLXM",
    category: "Higienizadores e Acessórios",
    image: "images/RDMOLXM.png",
    description: "Mola e acessório de fixação modelo RDMOLXM."
  },
  {
    id: "RIC220",
    name: "Modelo RIC220",
    category: "Higienizadores e Acessórios",
    image: "images/RIC220.png",
    description: "Registro em latão água quente ou fria, vedação em cerâmica, 1/4 de volta."
  },
  {
    id: "PDTR1A",
    name: "Modelo PDTR1A",
    category: "Torneiras de Acionamento por Pedal",
    image: "images/PDTR1A.png",
    description: "Pedal de acionamento hidráulico para torneiras de pedal. Ideal para cozinhas industriais, restaurantes, clínicas médicas e odontológicas."
  },
  {
    id: "MINIDMAPAREDE",
    name: "Mini Esguicho de Pré-Lavagem de Parede com Torneira Extra",
    category: "Esguichos com Torneira Extra",
    image: "images/MINIDMAPAREDE.png",
    instalacao: "Parede",
    configuracao: "Com misturador",
    complemento: "Com torneira extra",
    description: "Mini Esguicho de Pré-Lavagem modelo BFBDD2/MINI 200MM, de PAREDE COM MISTURADOR E TORNEIRA EXTRA, latão cromado e aço e inox provido de mecanismo cerâmica que utilizam água quente e fria."
  },
  {
    id: "MINIDMFB90B",
    name: "Mini Esguicho de Pré-Lavagem de Bancada",
    category: "Esguichos de Pré-Lavagem",
    image: "images/MINIDMFB90B.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    description: "Mini Esguicho de Pré-Lavagem de Bancada com misturador, latão cromado e aço inox."
  },
  {
    id: "MODFRIUO",
    name: "Torneira Eletrônica com Bateria",
    category: "Torneiras Industriais",
    image: "images/MODFRIUO.png",
    description: "Torneira eletrônica com bateria, mecanismo cerâmico, ideal para cozinhas industriais, restaurantes, clínicas médicas e odontológicas."
  }
];
