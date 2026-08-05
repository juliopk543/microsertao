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
  { label: "Para quem é", href: "#centelha" },
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
    title: 'Pague <span class="text-brand-500">4 meses</span> e use por <span class="text-brand-500">12 meses</span> sem mensalidades.',
    description: [
      "Um hub de aplicativos feitos para barbeiros, manicures, lava-jatos e academias, por uma fração do preço comercial: custando apenas 33% (R$ 400,00/ano).",
      "Nossas soluções para melhorar a qualidade do seu trabalho:",
    ],
    bullets: [
      { title: "Agenda Online", desc: "Permita o seu celular agendar Clientes, e apresentar seus horários disponíveis e ocupados.", icon: "calendar", img: "app-stack.png" },
      { title: "Veja seu Orçamento", desc: "Permita o celular calcular pagamentos e acompanhe o desenvolvimento do seu negócio.", icon: "wallet", img: "stack-emp-2.png" },
      { title: "Dados protegidos (LGPD)", desc: "Informações criptografadas, termos de uso claros e exclusão dos dados quando quiser em conformidade com a LGPD.", icon: "shieldCheck", img: "stack-emp-3.png" },
    ],
    cta: { label: "Quero para meu negócio", href: "#preco" },
  },
  prefeitura: {
    key: "prefeitura",
    label: "Prefeitura",
    title: "Município Digital, comunicação baseada em dados.",
    description: [
      "Na tela dos aplicativos usados no comércio, queremos divulgar campanhas de vacinação, matrículas escolares e cursos profissionalizantes aos clientes (cidadãos). Realizaremos pesquisas regionais para direcionar a tecnologia a serviço da população.",
    ],
    bullets: [
      { title: "Campanhas direcionadas", desc: "Vacinação, matrículas e eventos para o público certo.", icon: "megaphone", img: "stack-pref-1.png" },
      { title: "Menos gasto com mídia", desc: "Economize com anúncios em redes estrangeiras.", icon: "trendDown", img: "stack-pref-4.png" },
      { title: "Cursos profissionalizantes", desc: "Conecte a demanda dos negócios locais aos cidadãos.", icon: "cap", img: "" },
      { title: "Dashboard de indicadores", desc: "Visualize o desenvolvimento do comércio da cidade.", icon: "chart", img: "" },
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
  { icon: "key", text: "Liberação de acesso a dados anonimizados e restritos para a Prefeitura" },
  { icon: "chart", text: "Dashboard de indicadores para o desenvolvimento da cidade" },
  { icon: "megaphone", text: "Notificações de campanhas públicas personalizadas e filtradas" },
  { icon: "bag", text: "Quantidade de MEI e ME regulares por setor" },
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
    a: "Sim. Os dados dos clientes pertencem aos clientes, que podem deletar suas contas a qualquer momento.",
  },
  {
    q: "Como começo?",
    a: "Fale com a gente pelo WhatsApp. Ajudamos na configuração inicial e no treinamento de uso, passo a passo.",
  },
];
