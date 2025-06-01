<p align="center">

  <!-- Linguagem -->
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
    <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  </a>

  <!-- Framework -->
  <a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  </a>

  <!-- Build Tool -->
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  </a>

  <!-- Estilização -->
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/-Tailwind%20CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/-Framer%20Motion-EF4784?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  </a>

  <!-- Ícones -->
  <a href="https://react-icons.github.io/react-icons/">
    <img src="https://img.shields.io/badge/-React%20Icons-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Icons" />
  </a>

  <!-- Estilo e UX -->
  <a href="#">
    <img src="https://img.shields.io/badge/-UI%2FUX%20Futurista-00FFFF?style=flat-square&logo=eye&logoColor=white" alt="Futuristic UI" />
  </a>

  <!-- Licença e Status -->
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-yellow?style=flat-square" alt="Status: Em desenvolvimento" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />

</p>

![Gemini_Generated_Image_xetkzpxetkzpxetk](https://github.com/user-attachments/assets/a93cf9dc-abe9-4a7d-9200-3735fcbe6b63)

**NeoCore Systems** é um projeto visual experimental que simula um painel de controle de uma inteligência artificial avançada em tempo real, com estética inspirada em filmes de ficção científica como *Tron*, *Matrix* e no clássico site **2Advanced Studios**.

> ⚠️ **Atenção**: Este projeto é **puramente educacional**. Todos os dados exibidos são **fictícios**, gerados aleatoriamente com propósitos de teste, animação visual e aprendizado de tecnologias front-end modernas.

---

## 🔍 Visão Geral

O painel exibe diversos módulos em tempo real como:
- ✅ Status Geral do Sistema
- ⚛️ Reator Central
- ☁️ Nuvem de Processamento
- 🛰️ Satélites Ativos
- 🔐 Segurança do Sistema
- 🌡️ Variação Térmica Interna
- (Outros painéis podem ser adicionados conforme a criatividade)

Cada componente utiliza gráficos animados com **dados sintéticos**, atualizados a cada poucos segundos para simular monitoramento ao vivo.

---

## 🛠️ Tecnologias Utilizadas

### Frontend

- **React (Vite)** `18+` – Biblioteca base para construção de UI
- **Recharts** – Gráficos responsivos e interativos
- **Framer Motion** – Animações fluidas e modernas
- **React-TSParticles** – Efeitos visuais de partículas (fundo animado opcional)
- **React Icons** – Ícones estilizados e temáticos
- **React Typing Effect** – Efeitos de digitação simulando terminal
- **Tailwind CSS** – estilização ágil e moderna
- **CSS customizado** – Estética neon/sci-fi com sombras, gradientes e tipografia monoespaçada
- **JavaScript (ES6+)** - Lógica de interação

### Lógica de Dados

- Gerador pseudoaleatório para simular valores dinâmicos nos painéis
- Atualizações periódicas com `setInterval` e hooks React (`useEffect`, `useState`)
- Tooltip customizado estilizado com visual retro-cibernético

---

## 🚀 Como Executar Localmente

1. **Clone o repositório**
```bash
git clone https://github.com/LeviLucena/NeoCore_Systems.git
cd NeoCore_Systems
```

2. Instale as dependências
```bash
npm install
```

3. Inicie a aplicação
```bash
npm run dev
```
_(Se necessário, configure a política de execução de scripts no PowerShell com):_
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```Terminal  
- Set-ExecutionPolicy: ajusta a política de execução de scripts no PowerShell.  
- Scope Process: aplica a mudança somente à sessão atual do PowerShell.  
- ExecutionPolicy Bypass: permite a execução de scripts sem que sejam feitas verificações de assinatura ou restrições.
```

4. Acesse em http://localhost:3000

## 📁 Estrutura Básica
```bash
📦 NeoCore Systems
├── public/                  # Arquivos públicos (favicon, imagens, etc.)
├── src/
│   ├── components/          # Componentes modulares da interface
│   │   ├── Header.jsx       # Menu superior com navegação futurista
│   │   ├── LoadingScreen.jsx# Tela de boot animada com autenticação
│   │   ├── Hero.jsx         # Painel inicial (boas-vindas)
│   │   ├── Features.jsx     # Lista de módulos e recursos do sistema
│   │   ├── SystemStatus.jsx # Painéis em tempo real (reator, rede, clima etc.)
│   │   ├── SatelliteControl.jsx # Módulo de monitoramento de satélites
│   │   ├── CyberThreats.jsx # Módulo fictício de ameaças cibernéticas
│   │   ├── CommandConsole.jsx # Terminal de comandos (simulado)
│   │   ├── Footer.jsx       # Rodapé com créditos
│   ├── styles/
│   │   └── global.css       # Estilos globais customizados
│   ├── utils/
│   │   └── dataGenerators.js# Geradores de dados fictícios em tempo real
│   ├── App.jsx              # App principal com roteamento
│   ├── main.jsx             # Ponto de entrada do React
├── index.html               # HTML base
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind
└── vite.config.js           # Configuração do Vite
```

## 🎨 Estética e Inspiração
- Interface escura com cores vibrantes (ciano, magenta, verde-limão, etc.)
- Tipografia estilo monospace para reforçar visual técnico
- Elementos com box-shadow, border-glow e text-shadow
- Layout responsivo e adaptável a diferentes tamanhos de tela

## 📦 Extensões Futuras (Ideias)
- Integração com dados reais (APIs de clima, satélites, segurança, etc.)
- Modo escuro/claro dinâmico
- Painel de logs do sistema ou IA simulada com respostas automatizadas
- Integração com backend Flask ou Node.js simulando comandos remotos

## 🤝 Contribuições
Sinta-se à vontade para contribuir, sugerir melhorias ou relatar problemas para ajudar a desenvolver este projeto.

## 📄 Licença
Este projeto está licenciado sob a licença MIT — veja [LICENSE](https://github.com/github/gitignore/blob/main/LICENSE) para detalhes.
