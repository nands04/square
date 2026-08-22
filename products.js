const products = [
  {
    id: "esp-001",
    name: "Esguicho de Pré-Lavagem de Bancada",
    category: "Esguichos de Pré-Lavagem",
    image: "images/product_esguicho_1787071652059.png",
    instalacao: "Bancada",
    configuracao: "Com misturador",
    formato: "Padrão",
    complemento: "Sem torneira extra",
    acionamento: "Manual",
    aplicacao: "Cozinhas",
    characteristics: [
      "Mola em aço inox de alta resistência",
      "Mangueira flexível com trama interna",
      "Gatilho com trava para fluxo contínuo"
    ],
    materials: "Aço Inox 304 e Latão Cromado",
    description: "Ideal para a remoção de resíduos pesados antes da lavagem na máquina. Desenvolvido para suportar rotinas intensas de cozinhas industriais."
  },
  {
    id: "esp-002",
    name: "Esguicho com Torneira Extra",
    category: "Esguichos com Torneira Extra",
    image: "images/product_esguicho_graphite.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    formato: "Padrão",
    complemento: "Com torneira extra",
    acionamento: "Manual",
    aplicacao: "Cozinhas",
    characteristics: [
      "Torneira bica móvel auxiliar",
      "Suporte de fixação de parede robusto",
      "Alcance estendido para grandes cubas"
    ],
    materials: "Aço Inox 304 com acabamento grafite",
    description: "Combina a potência do esguicho de pré-lavagem com a conveniência de uma torneira direcional extra, otimizando o fluxo de trabalho."
  },
  {
    id: "tcl-001",
    name: "Torneira Clínica de Parede",
    category: "Torneiras Clínicas",
    image: "images/product_clinica_1787071664056.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    formato: "Padrão",
    complemento: "Sem torneira extra",
    acionamento: "Alavanca clínica",
    aplicacao: "Clínicas e hospitais",
    characteristics: [
      "Acionamento por cotovelo ou antebraço",
      "Design sem frestas para fácil assepsia",
      "Mecanismo de vedação cerâmico"
    ],
    materials: "Latão Cromado de alta densidade",
    description: "Torneira projetada para atender rigorosas normas de biossegurança, permitindo o acionamento sem o uso das mãos para evitar contaminação cruzada."
  },
  {
    id: "tcl-002",
    name: "Torneira Clínica Eletrônica",
    category: "Torneiras Clínicas",
    image: "images/product_clinical_faucet_graphite.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    formato: "Mini",
    complemento: "Sem torneira extra",
    acionamento: "Eletrônico",
    aplicacao: "Clínicas e hospitais",
    characteristics: [
      "Sensor infravermelho de alta precisão",
      "Fechamento automático contra desperdício",
      "Bivolt com opção de pilha"
    ],
    materials: "Aço Inox com acabamento grafite",
    description: "Máxima higiene e economia de água. O sensor detecta a presença das mãos instantaneamente, ideal para centros cirúrgicos e consultórios."
  },
  {
    id: "tin-001",
    name: "Torneira Industrial Bica Alta",
    category: "Torneiras Industriais",
    image: "images/product_industrial_faucet_graphite.png",
    instalacao: "Bancada",
    configuracao: "Sem misturador",
    formato: "Padrão",
    complemento: "Sem torneira extra",
    acionamento: "Manual",
    aplicacao: "Indústrias",
    characteristics: [
      "Bica móvel de longo alcance",
      "Volante em cruzeta industrial",
      "Vazão otimizada para enchimento rápido"
    ],
    materials: "Latão forjado e Inox",
    description: "Robustez extrema para aplicações de chão de fábrica e áreas de processamento de alimentos, onde a durabilidade é prioridade."
  },
  {
    id: "tpe-001",
    name: "Válvula de Acionamento por Pedal",
    category: "Torneiras de Acionamento por Pedal",
    image: "images/product_valvula_1787071672807.png",
    instalacao: "Parede",
    configuracao: "Sem misturador",
    formato: "Mini",
    complemento: "Sem torneira extra",
    acionamento: "Pedal",
    aplicacao: "Cozinhas",
    characteristics: [
      "Acionamento mecânico via pedal duplo ou simples",
      "Liberação das mãos durante a operação",
      "Redução de até 60% no consumo de água"
    ],
    materials: "Aço Inox escovado",
    description: "Sistema prático que permite o fluxo de água apenas enquanto o pedal é pressionado. Perfeito para pias de assepsia e cozinhas de alto giro."
  }
];
