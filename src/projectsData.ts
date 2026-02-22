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
    title: 'campo-radar',
    description: 'Sistema de monitoramento em tempo real para equipes de campo via Telegram.',
    imageUrl: 'radarcampo.png',
    techs: ['JavaScript', 'Telegram Bot API'],
    demoLink: 'https://t.me/RadarITSBot',
    codeLink: 'https://github.com/VfsMachado/campo-radar',
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
    techs: ['C#', 'HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://vfsmachado.github.io/CadastroeListagemProdutos/',
    codeLink: 'https://github.com/VfsMachado/CadastroeListagemProdutos',
  },
  {
    id: 7,
    title: 'Teste Vaga - NeuroFocus',
    description: 'Landing page desenvolvida do desafio de estágio da Objetivo Sistemas',
    imageUrl: 'NeuroFocus.png',
    techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoLink: 'https://vfsmachado.github.io/TesteVagaObjetivoSistemas/',
    codeLink: 'https://github.com/VfsMachado/TesteVagaObjetivoSistemas',
  },
  {
    id: 8,
    title: 'Teste Vaga - Dashboard-objetivoSistemas',
    description: 'Este projeto é um MVP (Minimum Viable Product) de um painel de vendas, desenvolvido como parte de um desafio de frontend.',
    imageUrl: 'painelvendas.png',
    techs: ['HTML', 'CSS', 'JavaScript'],
    demoLink: 'https://vfsmachado.github.io/Dashboard-objetivoSistemas/',
    codeLink: 'https://github.com/VfsMachado/Dashboard-objetivoSistemas',
  },
];
