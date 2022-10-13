const objExport = {
  translations: {
    MenuNav: {
      navOne: 'Início',
      navTwo: 'Skills',
      navThree: 'Projetos',
      navFour: 'Cursos',
      navFive: 'Formação',
      navSix: 'Sobre mim',
      navSeven: 'Meu contato',
      navEigth: 'Experiências profissionais',
      navNine: 'Certificados',
    },
    Header: {
      salute: 'Ola',
      Im: 'Eu sou',
      profession: 'Desenvolvedor de software.',
    },
    Start: {
      messageOne: 'Sou apaixonado por tecnologia e inovação.',
      messageTwo:
        'Minha satisfação é desenvolver softwares para facilitar a vida das pessoas.',
    },
    HardSkills: {
      title: 'Hard Skills',
      messageOne:
        'Habilidades técnicas adquiridas com muito empemnho e estudo nos cursos da',
      messageTwo: 'pesquisas e no trabalho do dia a dia.',
      hsOne: 'HTML5 e HTML semântico',
      hsTwo: 'CSS3 e CSS Responsivo',
      hsThree: 'Styled Components',
      hsFour: 'Java, JavaScript, Python e C++',
      hsFive: 'TypeScript',
      hsSix: 'React e React Native',
      hsSeven: 'Redux e Context',
      hsEight: 'MySql e MongoDB',
      hsNine: 'Git e GitHub',
      hsTen: 'Métodos ágeis',
      hsEleven: 'Jest, Mocha, RTL',
      hsTwelve: 'TDD',
    },
    SoftSkills: {
      title: 'Soft Skills',
      messageOne:
        'Habilidades pessoais adquiridas ao longo da vida social e profissional, aperfeiçoadas no curso da',
      messageTwo: 'e praticadas diariamente.',
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
    Projects: {
      view: 'Visitar Site',
      title: 'Projetos',
      titleOne: 'Tipo',
      titleTwo: 'Status',
      titleThree: 'Dados',
      titleFour: 'Tecnologias',
      projectOne: {
        title: 'Mundo Star Wars',
        type: 'Informação',
        status: 'Em Desenvolvimento',
        datas: {
          dataOne: 'API - swapi.dev/api',
        },
      },
      projectTwo: {
        title: 'Rafa Express',
        type: 'Comercio eletrônico',
        status: 'Em Desenvolvimento',
        datas: {
          dataOne: 'API - mercado livre',
          dataTwo: 'API - correios',
        },
      },
      projectThree: {
        title: 'Brothers',
        type: 'Propaganda',
        status: 'Concluído',
        datas: {
          dataOne: 'Dados locais',
        },
      },
      projectFour: {
        title: 'Trivia Game',
        type: 'Jogo',
        status: 'Concluído',
        datas: {
          dataOne: 'API - opentdb',
          dataTwo: 'API - gravatar',
        },
      },
      projectFive: {
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
      titleTwo: 'Situação',
      situation: {
        situationOne: 'Cursado até 7° semestre',
        situationTwo: 'Trancado desde 2009',
      },
    },
    Courses: {
      title: 'Cursos',
      titleOne: 'Situação',
      titleTwo: 'Conteúdo',
      courseOne: {
        title: 'Desenvolvimento Web Full Stack',
        situations: {
          situationOne: '1 Ano (1500 Horas)',
          situationTwo: 'Concluído em 2021',
        },
        contents: {
          contentOne: 'Fundamentos do Desenvolvimento Web',
          contentTwo: 'Desenvolvimento Front-End',
          contentThree: 'Desenvolvimento Back-End',
          contentFour: 'Ciência da Computação',
        },
      },
      courseTwo: {
        title: 'Python 3',
        situations: {
          situationOne: '120 Horas',
          situationTwo: 'Concluído em 2020',
        },
        contents: {
          contentOne: 'Módulo 1 - Fundamentos',
          contentTwo: 'Módulo 2 - Estruturas de controle',
          contentThree: 'Módulo 3 - Estruturas compostas',
        },
      },
      courseThree: {
        title: 'Linux',
        situations: {
          situationOne: '40 Horas',
          situationTwo: 'Cocluído em 2020',
        },
        contents: {
          contentOne: 'Instalação de distros',
          contentTwo: 'Comandos do terminal',
        },
      },
      courseFour: {
        title: 'Java',
        situations: {
          situationOne: '120 Horas',
          situationTwo: 'Concluído em 2018',
        },
        contents: {
          contentOne: 'Java Básico',
          contentTwo: 'Módulo 1 - POO',
          contentThree: 'Módulo 2 - POO',
        },
      },
      courseFive: {
        title: 'Ingês',
        situations: {
          situationOne: 'Avançado',
          situationTwo: 'Concluído em 2006',
        },
        contents: {
          contentOne: 'Escrever',
          contentTwo: 'Ler',
          contentThree: 'Falar',
          contentFour: 'Escutar',
        },
      },
      courseSix: {
        title: 'Eletrica e Mecânica',
        situations: {
          situationOne: '600 Horas',
          situationTwo: 'Concluído em 2003',
        },
        contents: {
          contentOne: 'Fundamentos de Eletrica e Mecânica',
          contentTwo: 'Prática de Eletrica e Mecânica',
          contentThree: 'Manutenção de Eletrica e Mecânica',
        },
      },
      courseSeven: {
        title: 'Manutenção de computadores',
        situations: {
          situationOne: '160 Horas',
          situationTwo: 'Concluído em 2001',
        },
        contents: {
          contentOne: 'Verificação de hardware e software',
          contentTwo: 'Resolver problemas e erros',
          contentThree: 'Troca de peças e periféricos (upgrade)',
          contentFour: 'Backup e recuperação de arquivos e sistema',
          contentFive: 'Instalação e configuração de redes',
        },
      },
      courseEight: {
        title: 'Informática',
        situations: {
          situationOne: 'Avançada',
          situationTwo: 'Concluído 1999',
        },
        contents: {
          contentOne: 'Windowns avançado',
          contentTwo: 'Office avançado',
          contentThree: 'Desenho avançado',
        },
      },
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
      certificateFour: {
        title: 'Ciência da Computação',
        contentOne: 'Introdução à Python',
        contentTwo: 'Programação Orientada a Objetos (POO)',
        contentThree: 'Redes e Raspagem de dados ',
        contentFour: 'Algoritmos',
        contentFive: 'Estritura de Dados I: Arrays, Hashmaps e Sets',
        contentSix: 'Estrutura de Dados II: Listas, Filas and Pilhas',
      },
      certificateFive: {
        title: 'Desenvolvimento Web',
        contentOne: 'Fundamentos do Desenvolvimento Web',
        contentTwo: 'Desenvolvimento Front-End',
        contentThree: 'Desenvolvimento Back-End',
        contentFour: 'Ciência da Computação',
        contentFive: 'Soft Skills',
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
    Footer: {
      message: 'Soluções personalizadas em Aplicativos e Sites.',
    },
  },
};

export default objExport;
