export type Locale = 'pt' | 'en';

type Localized = Record<Locale, string>;

export const profile = {
	name: 'Danilo Soares da Silva',
	email: 'danilosoaresdasilva@hotmail.com',
	linkedin: 'https://www.linkedin.com/in/danilosoaresdasilva',
	github: 'https://github.com/DaniloSoaresBR',
	headline: 'Software Engineer | ReactJS | NodeJS | TypeScript | JavaScript',
	location: 'São Paulo, SP, Brasil',
};

export const ui: Record<Locale, {
	htmlTitle: string;
	description: string;
	nav: { about: string; experience: string; skills: string; contact: string };
	hero: { intro: string; lead: string; cta: string };
	about: { title: string; paragraphs: string[]; educationTitle: string; education: { title: string; period: string }[] };
	experience: { title: string; present: string };
	skills: { title: string; groups: { label: string; items: string[] }[]; certificationsTitle: string; certifications: string[]; languagesTitle: string; languages: string[] };
	contact: { title: string; lead: string; labels: { email: string; linkedin: string; github: string } };
	footer: string;
	switchLabel: string;
	switchHref: string;
	otherLang: string;
}> = {
	pt: {
		htmlTitle: 'Danilo Soares da Silva — Software Engineer',
		description: 'Portfólio de Danilo Soares da Silva, engenheiro de software full-stack em São Paulo.',
		nav: { about: 'Sobre', experience: 'Experiência', skills: 'Habilidades', contact: 'Contato' },
		hero: {
			intro: 'Engenheiro de software full-stack',
			lead: 'Construo sistemas web e mobile do front-end ao back-end, com foco em React, Node.js e TypeScript.',
			cta: 'Entrar em contato',
		},
		about: {
			title: 'Sobre',
			paragraphs: [
				'Sou engenheiro de software com foco em React, Node.js e TypeScript. Atuo do front-end ao back-end em sistemas de grande escala, microsserviços e arquiteturas orientadas a eventos.',
				'Gosto de transformar ideias em produtos úteis, trabalho bem em equipes multidisciplinares e sigo aprendendo na prática, com metodologias ágeis.',
			],
			educationTitle: 'Formação',
			education: [
				{ title: 'Pós-graduação em Full Stack Development — FIAP', period: '2024 – 2025' },
				{ title: 'Bacharelado em Ciência da Computação — Universidade Paulista', period: '2013 – 2017' },
			],
		},
		experience: {
			title: 'Experiência',
			present: 'Atual',
		},
		skills: {
			title: 'Habilidades',
			groups: [
				{ label: 'Front-end', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Ionic', 'React Native', 'HTML', 'CSS'] },
				{ label: 'Back-end', items: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'SQL', 'MongoDB'] },
				{ label: 'Arquitetura e ferramentas', items: ['Microsserviços', 'Arquitetura orientada a eventos', 'AWS', 'CI/CD', 'Git / GitHub', 'Figma', 'Jira'] },
			],
			certificationsTitle: 'Certificações',
			certifications: [
				'Bootcamp Global Fullstack Developer',
				'Bootcamp Front-End ReactJS Developer',
				'Generative AI APIs for Practical Applications: An Introduction',
				'Oracle Fusion AI Agent Studio Certified Foundations Associate',
				'API Security',
			],
			languagesTitle: 'Idiomas',
			languages: ['Português — nativo', 'Inglês — fluente profissional'],
		},
		contact: {
			title: 'Contato',
			lead: 'Aberto a conversas sobre oportunidades e projetos.',
			labels: { email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub' },
		},
		footer: 'Feito com Astro.',
		switchLabel: 'English',
		switchHref: '/en/',
		otherLang: 'Ver em inglês',
	},
	en: {
		htmlTitle: 'Danilo Soares da Silva — Software Engineer',
		description: 'Portfolio of Danilo Soares da Silva, full-stack software engineer based in São Paulo.',
		nav: { about: 'About', experience: 'Experience', skills: 'Skills', contact: 'Contact' },
		hero: {
			intro: 'Full-stack software engineer',
			lead: 'I build web and mobile systems from front-end to back-end, focused on React, Node.js and TypeScript.',
			cta: 'Get in touch',
		},
		about: {
			title: 'About',
			paragraphs: [
				'I am a software engineer focused on React, Node.js and TypeScript. I work from front-end to back-end on large-scale systems, microservices and event-driven architectures.',
				'I enjoy turning ideas into useful products, work well in cross-functional teams, and keep learning in practice through agile methodologies.',
			],
			educationTitle: 'Education',
			education: [
				{ title: 'Postgraduate in Full Stack Development — FIAP', period: '2024 – 2025' },
				{ title: 'Bachelor of Science in Computer Science — Universidade Paulista', period: '2013 – 2017' },
			],
		},
		experience: {
			title: 'Experience',
			present: 'Present',
		},
		skills: {
			title: 'Skills',
			groups: [
				{ label: 'Front-end', items: ['React', 'TypeScript', 'JavaScript', 'Angular', 'Ionic', 'React Native', 'HTML', 'CSS'] },
				{ label: 'Back-end', items: ['Node.js', 'NestJS', 'REST APIs', 'GraphQL', 'SQL', 'MongoDB'] },
				{ label: 'Architecture & tools', items: ['Microservices', 'Event-driven architecture', 'AWS', 'CI/CD', 'Git / GitHub', 'Figma', 'Jira'] },
			],
			certificationsTitle: 'Certifications',
			certifications: [
				'Bootcamp Global Fullstack Developer',
				'Bootcamp Front-End ReactJS Developer',
				'Generative AI APIs for Practical Applications: An Introduction',
				'Oracle Fusion AI Agent Studio Certified Foundations Associate',
				'API Security',
			],
			languagesTitle: 'Languages',
			languages: ['Portuguese — native', 'English — full professional'],
		},
		contact: {
			title: 'Contact',
			lead: 'Open to conversations about opportunities and projects.',
			labels: { email: 'Email', linkedin: 'LinkedIn', github: 'GitHub' },
		},
		footer: 'Built with Astro.',
		switchLabel: 'Português',
		switchHref: '/',
		otherLang: 'View in Portuguese',
	},
};

export type Job = {
	company: string;
	role: string;
	period: Localized;
	location: string;
	description: Localized;
	stack: string[];
};

export const experience: Job[] = [
	{
		company: 'V.tal',
		role: 'Software Engineer (Full-stack)',
		period: { pt: 'nov. 2025 – atual', en: 'Nov 2025 – present' },
		location: 'São Paulo, SP',
		description: {
			pt: 'Desenvolvimento full-stack em um ecossistema de telecomunicações composto por múltiplas aplicações, microsserviços e camadas de integração. Participo da definição de soluções, proponho abordagens arquiteturais e atuo em serviços orientados a eventos, com alta disponibilidade, processamento em tempo real e ambientes multitenant.',
			en: 'Full-stack development in a telecommunications ecosystem made of multiple applications, microservices and integration layers. I take part in solution design, propose architectural approaches and work on event-driven services with high availability, real-time processing and multitenant environments.',
		},
		stack: ['TypeScript', 'Node.js', 'React', 'Microsserviços', 'REST', 'GraphQL', 'CI/CD'],
	},
	{
		company: 'Compass UOL',
		role: 'Software Engineer',
		period: { pt: 'mar. 2024 – nov. 2025', en: 'Mar 2024 – Nov 2025' },
		location: 'São Paulo, SP',
		description: {
			pt: 'Desenvolvimento de aplicações web e mobile para clientes, com foco em colaboração e entrega junto a equipes e clientes.',
			en: 'Development of web and mobile applications for clients, focused on collaboration and delivery with teams and stakeholders.',
		},
		stack: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Ionic', 'Angular'],
	},
	{
		company: 'Accenture Brasil',
		role: 'Software Engineer',
		period: { pt: 'jun. 2022 – mar. 2024', en: 'Jun 2022 – Mar 2024' },
		location: 'São Paulo, SP',
		description: {
			pt: 'Desenvolvimento de software em ambiente colaborativo e orientado a clientes. Trabalho com um time global composto por pessoas da Austrália, Índia e México.',
			en: 'Software development in a collaborative, client-oriented environment. I work with a global team including people from Australia, India and Mexico.',
		},
		stack: ['ReactJS', 'Ionic', 'Angular', 'Node.js', 'MongoDB', 'REST APIs'],
	},
	{
		company: 'Accenture Brasil',
		role: 'Software Engineer',
		period: { pt: 'abr. 2021 – jun. 2022', en: 'Apr 2021 – Jun 2022' },
		location: 'São Paulo, SP',
		description: {
			pt: 'Aplicações web com React e Node.js e um app mobile usado por técnicos de telecomunicações em campo, com Ionic e Angular. Novas funcionalidades, melhorias em sistema de gestão de processos e suporte N3.',
			en: 'Web applications with React and Node.js, and a mobile app used by telecom field technicians, built with Ionic and Angular. New features, improvements to a process management system and N3-level support.',
		},
		stack: ['REST APIs', 'ReactJS', 'Node.js', 'Ionic', 'Angular'],
	},
	{
		company: 'Balsa Tech',
		role: 'Freelancer Web Developer',
		period: { pt: 'abr. 2020 – abr. 2021', en: 'Apr 2020 – Apr 2021' },
		location: 'São Paulo, SP',
		description: {
			pt: 'Sites institucionais e pequenos softwares sob medida para clientes, com gestão independente dos projetos, da concepção à entrega, e comunicação direta com os clientes.',
			en: 'Business websites and custom software solutions for clients, independently managing projects from planning to delivery and communicating directly with clients.',
		},
		stack: ['React', 'React Native', 'Node.js', 'JavaScript', 'TypeScript'],
	},
];
