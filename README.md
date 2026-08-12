# 👨‍💻 Vinícius Castro | Portfólio Pessoal

![Status](https://img.shields.io/badge/Status-Concluído-success)
![Frontend](https://img.shields.io/badge/Frontend-React_Vite-blue)
![Linguagem](https://img.shields.io/badge/Language-TypeScript-blueviolet)
![Estilo](https://img.shields.io/badge/Styling-Tailwind_CSS-06b6d4)
![Tema](https://img.shields.io/badge/Tema-Dark_Mode-orange)

O **Portfólio Pessoal** é o site de apresentação de Vinícius Silva Castro, Desenvolvedor Back-End Java. O site reúne o perfil acadêmico, as habilidades, a experiência e os projetos desenvolvidos durante a faculdade, com visual moderno em tema escuro e foco em uma navegação simples e responsiva.

---

## 🧩 Estrutura do Site

O site é organizado em seis seções, acessíveis por navegação fixa no topo (âncora):

| Seção | Conteúdo |
| :--- | :--- |
| **Início (Hero)** | Apresentação com nome, área de atuação e botões de ação. |
| **Sobre mim** | Bio baseada no perfil acadêmico e profissional. |
| **Habilidades** | Tecnologias divididas em *Back-End & Dados* e *Front-End & Ferramentas*. |
| **Experiência** | Linha do tempo com os projetos desenvolvidos na faculdade. |
| **Projetos** | Cards com descrição, tecnologias e links para o GitHub. |
| **Contato** | E-mail, WhatsApp e LinkedIn com links diretos. |

### 🗂️ Projetos Exibidos

* 💈 **Gerenciador de Barbearia** — Python + Tkinter — [github.com/viniscastro/Gerenciador-de-Barbearia](https://github.com/viniscastro/Gerenciador-de-Barbearia)
* 💰 **Sistema de Gerenciamento Financeiro** — Java, Spring Boot, SQLite, Java Swing — [github.com/isjustjefferson/Projeto-LPOO](https://github.com/isjustjefferson/Projeto-LPOO)
* 🌐 **Gerenciador de Barbearia Web** — HTML5, CSS3, JS, PgSQL, Python, FastAPI, Docker — [github.com/viniscastro/barber-manager](https://github.com/viniscastro/barber-manager)

---

## 🛠️ Tecnologias Utilizadas

* **Frontend:** React 19 com componentes funcionais e Hooks.
* **Linguagem:** TypeScript com checagem estática de tipos.
* **Build:** Vite (desenvolvimento e build de produção).
* **Estilização:** Tailwind CSS 4 com tema customizado (dark mode).
* **Interações:** Animações de scroll via IntersectionObserver e menu mobile com estado do React.

### 🎨 Identidade Visual

* 🌑 **Tema escuro:** fundo `#0d1117`, mantendo o padrão visual do projeto.
* 💜 **Cor de destaque:** roxo/lilás (`#a855f7`) aplicada em links, botões, tags de habilidades, linha do tempo e elementos interativos.
* 🔤 **Tipografia:** Inter (weights 400 a 800).
* ✨ **Efeitos:** animações de hover, sombra de destaque (glow) e revelação de seções ao rolar (scroll reveal).
* 📱 **Responsividade:** layout adaptável para desktop e mobile, com menu hambúrguer em telas menores.
* 🪄 **Favicon:** gerado em SVG com o logotipo "VC." (texto branco e ponto roxo sobre fundo escuro).

---

## 🚀 Como Executar

### Desenvolvimento Local
1. Clone o repositório: `git clone https://github.com/viniscastro/portfolio.git`
2. Na raiz, instale as dependências: `npm install`
3. Inicie o servidor de desenvolvimento: `npm run dev`
4. Acesse a URL exibida no terminal (padrão `http://localhost:5173`).

### Build de Produção
1. Execute: `npm run build`
2. Os arquivos otimizados serão gerados na pasta `dist/`.
3. Para pré-visualizar o build: `npm run preview`.

---

## 📁 Estrutura de Arquivos

```
portfolio/
├── index.html               # Ponto de entrada da aplicação
├── vite.config.ts           # Configuração do Vite (React + Tailwind)
├── src/
│   ├── main.tsx             # Inicialização do React
│   ├── App.tsx              # Composição das seções
│   ├── index.css            # Tema, cores e utilitários Tailwind
│   ├── data.ts              # Dados (habilidades, projetos, contatos)
│   └── components/          # Componentes (Header, Hero, About, ...)
└── public/
    └── favicon.svg          # Ícone da aba do navegador
```

---

## 👨‍🎓 Autor

* **Vinícius Silva Castro** — Estudante de Análise e Desenvolvimento de Sistemas (IFPE), Desenvolvedor Back-End Java — [LinkedIn](https://www.linkedin.com/in/viniscastro/) · [GitHub](https://github.com/viniscastro)
