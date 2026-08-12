# Relatório de Atividade — Protótipo de Site Portfólio Pessoal

**Autor:** Vinícius Silva Castro
**Curso:** Análise e Desenvolvimento de Sistemas — IFPE
**Tipo de atividade:** Desenvolvimento de protótipo de site (front-end)

---

## 1. Objetivo

Desenvolver um protótipo de site de portfólio pessoal para apresentar o perfil, as habilidades, a experiência e os projetos desenvolvidos pelo autor durante a faculdade, utilizando HTML5, CSS3 e JavaScript, com visual moderno em tema escuro.

## 2. Tecnologias Utilizadas

| Tecnologia | Uso no projeto |
|---|---|
| HTML5 | Estrutura semântica das páginas e seções |
| CSS3 | Estilização, layout responsivo, animações e tema visual |
| JavaScript | Menu mobile, rolagem suave e animações de scroll |
| SVG | Criação do favicon personalizado ("VC.") |
| Google Fonts | Fonte Inter (tipografia) |

## 3. Estrutura de Arquivos

```
portfolio/
├── index.html     # Estrutura do site
├── style.css      # Estilos, tema e responsividade
├── script.js      # Interações (menu, scroll, animações)
└── favicon.svg    # Ícone da aba do navegador
```

## 4. Seções do Site

O site foi organizado em seis seções, com navegação fixa no topo (âncora):

1. **Início (Hero)** — Apresentação com nome, área de atuação (Desenvolvedor Back-End Java) e botões de ação.
2. **Sobre mim** — Bio baseada no perfil acadêmico e profissional, com destaque para formação, foco, metodologia e localização.
3. **Habilidades** — Organizadas em dois grupos: *Back-End & Dados* (Java, Spring Boot, Python, FastAPI, PostgreSQL, SQLite) e *Front-End & Ferramentas* (HTML5, CSS3, JavaScript, Java Swing, Git, Docker).
4. **Experiência** — Linha do tempo com os projetos desenvolvidos na faculdade.
5. **Projetos** — Cards com descrição, tecnologias e links para o GitHub de cada projeto.
6. **Contato** — E-mail, WhatsApp e LinkedIn com links diretos.

### Projetos incluídos

- **Gerenciador de Barbearia** — Python + Tkinter — [github.com/viniscastro/Gerenciador-de-Barbearia](https://github.com/viniscastro/Gerenciador-de-Barbearia)
- **Sistema de Gerenciamento Financeiro** — Java, Spring Boot, SQLite, Java Swing — [github.com/isjustjefferson/Projeto-LPOO](https://github.com/isjustjefferson/Projeto-LPOO)
- **Gerenciador de Barbearia Web** — HTML5, CSS3, JS, PgSQL, Python, FastAPI, Docker — [github.com/viniscastro/barber-manager](https://github.com/viniscastro/barber-manager)

## 5. Identidade Visual

- **Tema:** escuro (`#0d1117`), mantendo o padrão já existente do projeto.
- **Cor de destaque:** roxo/lilás (`#a855f7`), aplicada em links, botões, tags de habilidades, linha do tempo e elementos interativos.
- **Tipografia:** Inter (weights 400 a 800).
- **Efeitos:** animações de hover, sombra de destaque (glow) e revelação de seções ao rolar (scroll reveal).
- **Responsividade:** layout adaptável para desktop e mobile, com menu hambúrguer em telas menores.
- **Favicon:** gerado em SVG com o logotipo "VC." (texto branco e ponto roxo sobre fundo escuro), exibido na aba do navegador.

## 6. Passos Realizados

1. Levantamento de requisitos e conteúdo (perfil, habilidades, projetos e contatos) com o autor.
2. Definição da estrutura do site e das seções.
3. Desenvolvimento do HTML semântico.
4. Criação do CSS com tema escuro e destaque em azul, posteriormente ajustado para roxo/lilás conforme solicitação.
5. Implementação das interações em JavaScript.
6. Geração do favicon em SVG e vinculação ao cabeçalho do HTML.
7. Verificação dos arquivos e estrutura do projeto.

## 7. Como Executar

Basta abrir o arquivo `index.html` em um navegador, ou, opcionalmente, iniciar um servidor local na pasta do projeto:

```
python -m http.server
```

e acessar `http://localhost:8000`.

## 8. Resultados e Considerações

O protótipo atende ao objetivo de apresentar o perfil do autor de forma clara e profissional, com navegação simples, layout responsivo e identidade visual condizente com um desenvolvedor back-end. O projeto pode evoluir futuramente com a adição de foto, novos projetos, blog e integração com formulário de contato.

---
*Relatório referente à atividade de criação do protótipo de site portfólio pessoal.*
