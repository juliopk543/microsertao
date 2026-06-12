// ============================================================
// Conteúdo do site MicroSertão — editável em um só lugar
// ============================================================

export const company = {
  name: "MicroSertão",
  tagline: "Software Company",
  slogan: "Tecnologia que faz o pequeno negócio crescer.",
  whatsapp: "5582996902951",
  whatsappLabel: "(82) 99690-2951",
  email: "microsertao@gmail.com",
  city: "Coruripe, Alagoas",
  cnpjNote: "Idealizado por Júlio César Tenório dos Santos",
};

export const whatsappUrl = (msg: string) =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`;

// Navegação do header
export const navLinks = [
  { label: "Para quem é", href: "#publicos" },
  { label: "Aplicativos", href: "#aplicativos" },
  { label: "Preço", href: "#preco" },
  { label: "Prefeituras", href: "#prefeituras" },
  { label: "Dúvidas", href: "#faq" },
];

// ---- Públicos (toggle) -------------------------------------
export const audiences = {
  empreendedor: {
    key: "empreendedor",
    label: "Empreendedor",
    title: "Economize até 75%. Sem mensalidade.",
    description:
      "Um HUB de aplicativos feito para barbearias, manicures, lava-jatos, academias e restaurantes. Automatize agendamento, atendimento, estoque e financeiro — pagando uma fração do que custam seu aplicativo atual.",
    bullets: [
      { title: "Agenda automática", desc: "Clientes marcam sozinhos direto no aplicativo, 24h por dia." },
      { title: "Financeiro no controle", desc: "Caixa, recebimentos, pagamentos e inadimplência em uma única tela, com poucos cliques." },
      { title: "Dados protegidos (LGPD)", desc: "Informações criptografadas, termos de uso claros e exclusão dos dados quando quiser — tudo em conformidade com a LGPD." },
      { title: "Economia real", desc: "R$400/ano contra ~R$1.600 das ferramentas comuns." },
    ],
    cta: { label: "Quero para meu negócio", href: "#preco" },
  },
  prefeitura: {
    key: "prefeitura",
    label: "Prefeitura",
    title: "Comunicação pública que chega a quem importa.",
    description:
      "Com os dados do comércio local, o município direciona campanhas públicas de verdade — vacinação, matrícula escolar, cursos e vagas — economizando em publicidade de plataformas estrangeiras.",
    bullets: [
      { title: "Campanhas direcionadas", desc: "Vacinação, matrículas e eventos para o público certo." },
      { title: "Cursos profissionalizantes", desc: "Conecte a demanda dos negócios locais aos cidadãos." },
      { title: "Dashboard de indicadores", desc: "Visualize o desenvolvimento do comércio da cidade." },
      { title: "Menos gasto com mídia", desc: "Economize com anúncios em redes estrangeiras." },
    ],
    cta: { label: "Falar sobre parceria pública", href: "#prefeituras" },
  },
} as const;

// ---- Aplicativos do HUB ------------------------------------
export const apps = [
  {
    name: "Barbearias",
    icon: "scissors",
    desc: "Agenda, fila, comissão de barbeiros e fidelidade do cliente.",
  },
  {
    name: "Manicures & Salões",
    icon: "sparkles",
    desc: "Horários, pacotes, catálogo de serviços e lembretes.",
  },
  {
    name: "Lava-Jatos",
    icon: "droplet",
    desc: "Ordens de serviço, controle de veículos e equipe.",
  },
  {
    name: "Academias de Artes Marciais",
    icon: "shield",
    desc: "Alunos, professores, turmas, graduações e mensalidades.",
  },
];

// ---- Recursos de cada aplicativo ---------------------------
export const features = [
  { title: "Financeiro", desc: "Fluxo de caixa, recebimentos e relatórios claros.", icon: "wallet" },
  { title: "Atendimento", desc: "Agendamento online e confirmações automáticas.", icon: "calendar" },
  { title: "Loja", desc: "Venda de produtos e serviços com poucos cliques.", icon: "bag" },
  { title: "Estoque", desc: "Controle de insumos e alertas de reposição.", icon: "box" },
  { title: "Produção", desc: "Ordens e acompanhamento do que precisa ser feito.", icon: "gear" },
  { title: "Funcionários", desc: "Equipe, comissões e níveis de acesso.", icon: "users" },
  { title: "Alunos & Professores", desc: "Turmas, presença e desempenho (academias).", icon: "cap" },
  { title: "Relatórios", desc: "Decisões com base em dados do seu negócio.", icon: "chart" },
];

// ---- Preço / economia --------------------------------------
export const pricing = {
  common: { label: "Ferramentas comuns", monthly: "R$ 100–180/mês", yearly: "≈ R$ 1.600/ano" },
  ours: { label: "MicroSertão", yearly: "R$ 400/ano", note: "Ferramenta completa, sem surpresas." },
  savingsPercent: 75,
};

// ---- Vantagens para prefeituras ----------------------------
export const cityBenefits = [
  "Liberação de acesso a dados restritos para a Prefeitura",
  "Dashboard de indicadores para o desenvolvimento da cidade",
  "Notificações de campanhas públicas personalizadas e filtradas",
  "Quantidade de MEI e ME regulares por setor",
  "Vagas disponíveis e acesso direto aos usuários",
  "Vacinação, matrícula escolar, saúde e eventos culturais",
];

// ---- FAQ ----------------------------------------------------
export const faqs = [
  {
    q: "Quanto custa para o meu negócio?",
    a: "R$ 400 por ano pela ferramenta completa. Para comparação, mensalidades comuns custam de R$ 100 a R$ 180/mês, somando cerca de R$ 1.600 por ano.",
  },
  {
    q: "Preciso instalar algo?",
    a: "Não. São aplicativos web — funcionam no navegador do computador e do celular. É só acessar com seu login.",
  },
  {
    q: "Serve para qual tipo de negócio?",
    a: "Barbearias, manicures e salões, lava-jatos e academias de artes marciais. Cada aplicativo é adaptado ao setor.",
  },
  {
    q: "Como funciona a parte do município?",
    a: "Com os dados do comércio local, a Prefeitura direciona campanhas públicas (vacinação, matrículas, vagas e cursos) com mais precisão e menos gasto em anúncios.",
  },
  {
    q: "Meus dados ficam seguros?",
    a: "Sim. Os dados dos clientes pertencem ao empreendedor, e o acesso público/restrito é liberado conforme regras de cada perfil.",
  },
  {
    q: "Como começo?",
    a: "Fale com a gente pelo WhatsApp. Ajudamos na configuração inicial e no treinamento de uso, passo a passo.",
  },
];
