// src/data/site-config.ts

// Import das imagens
import fotoPerfil from '../assets/psicologa-fabiola-tubarao-sc-clinica-cis.jpg';
import fotoSobre from '../assets/psicologa-fabiola-tubarao-sc.jpeg';

export const siteConfig = {
  site: {
    title: "Psicóloga Fabíola Medeiros | Terapia em Tubarão/SC e Online",
    description: "Espaço seguro de escuta e acolhimento para crianças, adolescentes e adultos. Atendimento presencial em Tubarão/SC e online. Cuide da sua saúde mental.",
    url: "https://fabiolapsi.com.br",
    author: "Fabíola de Souza Medeiros Castro",
  },
  brand: {
    name: "Fabíola Medeiros ",
    profession: "Psicóloga Clínica",
    crp: "12/26596",
    city: "Tubarão/SC",
    address: "R. José Evaristo Fogaça, 636 - Vila Moema, Tubarão - SC, 88705-060",
    phone: "+55-48-99997-3155",
    whatsapp: "5548999973155",
    email: "contato@fabiolapsi.com.br",
    instagram: "@fabiolamedeirospsi",
    logo: "/fabiola-psicologa-logo-512x512.png",
    favicon: "/favicon-fabiola-psicologa-tubarao-sc.png",
    fotoPerfil: fotoPerfil.src, // Foto da Hero
    mapsUrl: "https://www.google.com/maps/place/Psic%C3%B3loga+Fab%C3%ADola+Medeiros+Tubarao+SC+e+online/@-28.4830099,-48.995592,18z/data=!4m6!3m5!1s0x952143ce2e566913:0x8cf5fdd59713a8bd!8m2!3d-28.4829675!4d-48.9959943!16s%2Fg%2F11y6pfdq4b",
  },
  design: {
    themeColor: "#FAFAF9", 
  },
  hero: {
    badge: "Psicologia Clínica",
    title: "Um espaço seguro para sua",
    titleHighlight: "jornada interior",
    subtitle: "Acolhimento, escuta ativa e terapia para ajudar você a reencontrar seu equilíbrio e bem-estar emocional.",
    primaryButtonText: "Agendar Consulta",
    secondaryButtonText: "Conhecer a Psicóloga"
  },
  servicos: {
    tituloSecao: "Como posso te ajudar hoje?",
    subtituloSecao: "Ofereço diferentes formatos de terapia para se adequar à sua rotina e às suas necessidades, sempre com o mesmo compromisso ético e acolhedor.",
    lista: [
      {
        titulo: "Psicologia Infantil",
        icone: "👶",
        descricao: "Atendimento lúdico e acolhedor para crianças. Auxílio no desenvolvimento emocional, comportamental e social, com orientação aos pais."
      },
      {
        titulo: "Adolescentes",
        icone: "🎒",
        descricao: "Espaço de escuta para as demandas da adolescência: ansiedade escolar, identidade, relacionamentos e gestão emocional."
      },
      {
        titulo: "Adultos",
        icone: "🧠",
        descricao: "Terapia individual focada em ansiedade, estresse, autoconhecimento e equilíbrio emocional. Um espaço seguro para se expressar."
      },
      {
        titulo: "Atendimento Online",
        icone: "💻",
        descricao: "Consultas por videochamada para todo o Brasil e exterior, com a mesma qualidade e sigilo do presencial."
      },
      {
        titulo: "Ansiedade & Estresse",
        icone: "😰",
        descricao: "Tratamento especializado para transtornos de ansiedade e estresse crônico, utilizando técnicas baseadas em evidências (TCC)."
      },
      {
        titulo: "Autoestima e Autoconhecimento",
        icone: "✨",
        descricao: "Desenvolvimento pessoal focado em fortalecer a relação consigo mesmo, identificar padrões limitantes e construir uma visão mais equilibrada."
      }
    ],
    ctaTexto: "Não sabe por onde começar? Tudo bem. Conversamos juntos na primeira sessão.",
    ctaBotao: "Agendar Primeira Consulta"
  },
  sobre: {
    badge: "Quem sou eu",
    titulo: "Olá, sou a",
    tituloDestaque: "Fabíola",
    foto: fotoSobre.src, // 👈 NOVO: Foto específica da seção Sobre
    paragrafo1: "Sou psicóloga clínica pós-graduada em Terapia Cognitivo-Comportamental (TCC). Acredito que a terapia é um espaço de encontro consigo mesmo, livre de julgamentos.",
    paragrafo2: "Meu trabalho é guiado pela ética, pelo sigilo e pelo acolhimento. Estou aqui para caminhar ao seu lado, ajudando você a compreender suas emoções e a construir uma vida com mais sentido e equilíbrio.",
    diferenciais: [
      "Atendimento Online e Presencial",
      "Atendimento a Adolescentes e Adultos",
      "Abordagem Cognitivo-Comportamental"
    ]
  },
  // 👇 ADICIONE ESTE BLOCO AQUI 👇
  depoimentos: {
    titulo: "O que dizem sobre o atendimento",
    lista: [
      {
        nome: "Isabela Farias",
        inicial: "I",
        texto: "Querida e com um olhar que transmite acolhimento. É uma profissional competente, atende com tranquilidade, permitindo que o paciente se expresse e demonstra uma escuta muito atenta."
      },
      {
        nome: "Jaime Alves",
        inicial: "J",
        texto: "Ótima profissional, trata minha filha de 8 anos, com muita paciência e carinho, super recomendo."
      },
      {
        nome: "Isabella de Souza Costa",
        inicial: "I",
        texto: "Excelente profissional! Muito atenciosa, humana e cuidadosa no acompanhamento. Minha filha se sente acolhida e tivemos mudanças muito positivas após o início das consultas. Recomendo muito!"
      }
    ]
  },
   // 👇 ADICIONE ESTE BLOCO AQUI 👇
  faq: {
    titulo: "Perguntas frequentes",
    subtitulo: "Tire suas dúvidas sobre o atendimento psicológico",
    perguntas: [
      {
        pergunta: "Você atende crianças e adolescentes?",
        resposta: "Sim! Realizo atendimento especializado para crianças (com abordagem lúdica), adolescentes e adultos. Cada faixa etária recebe uma abordagem adequada ao seu desenvolvimento."
      },
      {
        pergunta: "Qual a diferença entre atendimento online e presencial?",
        resposta: "Ambas as modalidades oferecem a mesma qualidade técnica e ética. O presencial ocorre em Tubarão/SC, e o online permite flexibilidade de local, mantendo o sigilo e acolhimento."
      },
      {
        pergunta: "A terapia é sigilosa?",
        resposta: "Sim, absolutamente! O sigilo é um princípio ético fundamental. Tudo compartilhado nas sessões é confidencial, garantindo um espaço seguro de confiança."
      },
      {
        pergunta: "A terapia ajuda mesmo quem não tem um transtorno diagnosticado?",
        resposta: "Sim! A terapia não é apenas para quem tem diagnósticos. Muitas pessoas buscam o processo para autoconhecimento, fortalecimento da autoestima, tomada de decisões ou simplesmente para ter um espaço de escuta qualificada. Todos merecem cuidar da saúde mental."
      }
    ]
  },
  // 👇 ADICIONE ESTE BLOCO AQUI 👇
  contato: {
    badge: "Entre em Contato",
    titulo: "Vamos iniciar sua",
    tituloDestaque: "jornada",
    subtitulo: "Estou à disposição para tirar suas dúvidas e agendar sua primeira sessão, seja presencialmente em Tubarão ou de forma online.",
    enderecoTitulo: "Consultório Presencial",
    onlineTitulo: "Atendimento Online",
    onlineDescricao: "Sessões por videochamada para todo o Brasil e exterior, com a mesma qualidade e sigilo do presencial.",
    ctaBotao: "Agendar pelo WhatsApp",
    ctaSubtexto: "Resposta em até 24 horas úteis.",
    mapaBotao: "Abrir no Google Maps"
  }
};