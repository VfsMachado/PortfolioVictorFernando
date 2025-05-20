export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  techs: string[];
  demoLink: string;
  codeLink: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Sistema de Chamados',
    description: 'Ferramenta simples para abertura e acompanhamento de chamados técnicos, integrando funcionalidades de rede com interface acessível.',
    imageUrl: 'atendimentochamados.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://vfsmachado.github.io/AtendimentoChamados-vfsmachado/',
    codeLink: 'https://github.com/VfsMachado/AtendimentoChamados-vfsmachado',
  },
  {
    id: 2,
    title: 'Cantinho do Barna',
    description: 'Landing page desenvolvida para um pequeno negócio local, com foco em apresentação visual e usabilidade em dispositivos móveis.',
    imageUrl: 'landingpage.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://vfsmachado.github.io/LandingPage/',
    codeLink: 'https://github.com/VfsMachado/LandingPage',
  },
  {
    id: 3,
    title: 'YouTube Clone',
    description: 'Clone visual do YouTube com layout fiel ao original, modo escuro, estrutura de vídeo e responsividade total.',
    imageUrl: 'youtubeclone.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://vfsmachado.github.io/YouTube-Clone/',
    codeLink: 'https://github.com/VfsMachado/YouTube-Clone',
  },
  {
    id: 4,
    title: 'Portfolio Modelo',
    description: 'Template de portfólio moderno, limpo e responsivo feito em HTML e CSS. Ideal para profissionais que querem apresentar seus projetos com estilo e simplicidade. Código organizado e fácil de personalizar.',
    imageUrl: 'portfoliomodelo.png',
    techs: ['HTML', 'CSS'],
    demoLink: 'https://vfsmachado.github.io/PortfolioModelo/',
    codeLink: 'https://github.com/VfsMachado/PortfolioModelo',
  },
  {
    id: 5,
    title: 'Teste Vaga - Automind',
    description: 'Desafio técnico proposto em um processo seletivo, com foco em construção de uma aplicação de cadastro utilizando C# no terminal.',
    imageUrl: 'testeautomind.png',
    techs: ['C#'],
    demoLink: 'https://vfsmachado.github.io/testeVagaAutomind/',
    codeLink: 'https://github.com/VfsMachado/testeVagaAutomind',
  },
  {
    id: 6,
    title: 'Teste Vaga - Cadastro e listagem de produtos',
    description: 'Desafio técnico proposto em um processo seletivo, com foco em construção de uma aplicação de cadastro e listagem de produtos em uma linguagem a escolha propria',
    imageUrl: 'CadastroCliente.png',
    techs: ['C#'],
    demoLink: 'https://vfsmachado.github.io/CadastroeListagemProdutos/',
    codeLink: 'https://github.com/VfsMachado/CadastroeListagemProdutos',
  },
];
