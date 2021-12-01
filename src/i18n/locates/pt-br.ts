const objExport = {
  translations: {
    MenuNav: {
      navOne: 'Projetos',
      navTwo: 'Formação',
      navThree: 'Cursos',
      navFour: 'Certificados',
      navFive: 'Experiências profissionais',
      navSix: 'Sobre mim',
      navSeven: 'Meu contato',
    },
    Header: {
      salute: 'Ola',
      Im: 'Eu sou',
      profession: 'Desenvolvedor de software',
    },
    AsideLeft: {
      hardSkills: {
        title: 'Hard Skills',
        hsOne: 'HTML5 e HTML semântico',
        hsTwo: 'CSS3 e CSS Responsivo',
        hsThree: 'Styled Components',
        hsFour: 'Java, JavaScript, Python e C++',
        hsFive: 'TypeScript',
        hsSix: 'React e React Native',
        hsSeven: 'Redux e Hooks',
        hsEight: 'MySql e MongoDB',
        hsNine: 'Git e GitHub',
        hsTen: 'Métodos ágeis',
        hsEleven: 'Jest, Mocha, RTL',
        hsTwelve: 'TDD',
      },
      softSkills: {
        title: 'Soft Skills',
        ssOne: 'Empatia',
        ssTwo: 'Paciência',
        ssThree: 'Trabalho em equipe',
        ssFour: 'Mente Aberta',
        ssFive: 'Criatividade',
        ssSix: 'Adaptabilidade',
        ssSeven: 'Comunicação',
        ssEight: 'Responsabilidade',
        ssNine: 'Resolver problemas',
        ssTen: 'Pensamento crítico',
        ssEleven: 'Inteligência emocional',
      },
    },
    Projects: {
      title: 'Projetos',
      titleOne: 'Tipo',
      titleTwo: 'Status',
      titleThree: 'Dados',
      titleFour: 'Tecnologias',
      projectOne: {
        title: 'Rafa Express',
        type: 'Comercio eletrônico',
        status: 'Em Desenvolvimento',
        datas: {
          dataOne: 'API - mercado livre',
          dataTwo: 'API - correios',
        },
      },
      projectTwo: {
        title: 'Brothers',
        type: 'Propaganda',
        status: 'Concluído',
        datas: {
          dataOne: 'Dados locais',
        },
      },
      projectThree: {
        title: 'Trivia Game',
        type: 'Jogo',
        status: 'Concluído',
        datas: {
          dataOne: 'API - opentdb',
          dataTwo: 'API - gravatar',
        },
      },
      projectFour: {
        title: 'Biblioteca de cartões de filme',
        type: 'CRUD',
        status: 'Concluído',
        datas: {
          dataOne: 'Dados locais',
        },
      },
    },
    Formation: {
      title: 'Formação',
      titleOne: 'Análise de Sistemas',
      titleTwo: 'Situation',
      situation: {
        situationOne: 'Estudado até 7° semestre',
        situationTwo: 'Trancado desde 2009',
      },
    },
    Courses: {
      title: 'Cursos',
    },
    Certificates: {
      title: 'Certificados',
      titleOne: 'Conteúdo',
      view: 'Ver em PDF',
      credentials: 'Ver credencial',
      certificateOne: {
        title: 'Fundamentos do Desenvolvimento Web ',
        contentOne: 'Unix e Bash',
        contentTwo: 'Git, GitHub e internet',
        contentThree: 'Introdução a HTML e CSS',
        contentFour: 'JavaScript - DOM, Eventos e Web Storage',
        contentFive: 'HTML e CSS - Formulários, Flexbox e Responsividade',
        contentSix: 'Introdução a JavaScript ES6 e teste unitário',
        contentSeven: 'Funções de alta ordem de JavaScript ES6',
        contentEight: 'JavaScript assíncrono e promises',
        contentNine: 'Testes automatizados com Jest',
      },
      certificateTwo: {
        title: 'Desenvolvimento Front-End',
        contentOne: 'Introdução a React',
        contentTwo: 'Estado dos componentes, Eventos e Formulários com React',
        contentThree: 'Ciclo de vida dos componentes e React Router',
        contentFour: 'Metodologias ágeis',
        contentFive: 'Testes automatizados com React Testing Library(RTL)',
        contentSix: 'Gerenciamento de estado com Redux',
        contentSeven: 'Context API e React Hooks',
      },
      certificateThree: {
        title: 'Desenvolvimento Back-End',
        contentOne: 'Introdução à SQL',
        contentTwo: 'Funções SQL e JOINs',
        contentThree: 'Normalização e Modelagem de Banco de Dados',
        contentFour: 'Introdução a MongoDB',
        contentFive: 'MongoDB - Upadates simples e complexo',
        contentSix: 'MongoDB - Aggregation Framework',
        contentSeven: 'Desenvolvimento Web com NodeJs',
        contentEight: 'NodeJs - Arquitetura MSC, Rest e Restful ',
        contentNine: 'Autenticação e Upload de arquivos',
        contentTen: 'Deployment',
        contentEleven: 'Arquitetura SOLID e ORM',
        contentTwelve: 'Sockets',
      },
    },
    Experiences: {
      title: 'Experiências profissionais',
      titleOne: 'Responsabilidade',
      titleTwo: 'Funções',
      experienceOne: {
        title: 'RS Solutions',
        responsibility: {
          title: 'Desenvolvedor Jr',
          date: 'De Maio/2021 até atualmente',
        },
        functions: {
          functionOne: 'Desenvolver React + TypeScript',
          functionTwo: 'Desenvolver React-Native + TypeScript',
          functionThree: 'Integração com API',
        },
      },
      experienceTwo: {
        title: 'Restaurante Bandeirantes',
        responsibility: {
          title: 'Gerente',
          date: 'De Janeiro/2003 até maio/2018',
        },
        functions: {
          functionOne: 'Coordenar e treinar a equipe',
          functionTwo: 'Fazer pedidos com fornecedores',
          functionThree: 'Controlar estoque',
          functionFour: 'Organizar padrões de segurança e higiene alimentar',
          functionFive: 'Criar o calendário de dias de folga e férias',
        },
      },
    },
    AboutMe: {
      title: 'Sobre mim',
      textOne: 'Sou muito apaixonado por tecnologia e inovação.',
      textTwo: 'Iniciei meus estudos na area de TI desde muito jovem. ',
      textThree:
        'Em 1995, com 9 anos de idade iniciei um curso de informática.',
      textFour:
        'Aos 15 anos eu iniciei um curso de manutenção e instalação de redes e computadores.',
      textFive:
        'Aos 19 anos estudei 4 anos de Analise de Sistemas na PUC-Campinas.',
      textSix: 'Trabalhei 15 anos como gerente de restaurante.',
      textSeven:
        'Em 2020, eu decidi mudar e trabalhar com TI, que realmente amo e retomei meus estudos como desenvolvimento web full stack na Trybe.',
    },
    ContactMe: {
      title: 'Meu contato',
    },
  },
};

export default objExport;
