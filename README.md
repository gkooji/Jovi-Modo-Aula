# JOVI Modo Aula — React

Projeto da equipe **NextStage** para o Challenge FIAP x JOVI 2026. Esta versão migra o protótipo HTML/CSS/JavaScript da Sprint 2 para **React com componentes funcionais**, mantendo a identidade visual e adicionando funcionalidades de aplicação.

## Tecnologias utilizadas
- React 19
- Vite
- JavaScript (ES6+)
- HTML5 e CSS3
- Lucide React (dependência preparada para ícones)
- LocalStorage
- Git e GitHub
- Vercel para deploy

## Requisitos
- Node.js 18 ou superior
- npm 9 ou superior

## Instalação
Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

## Executar em desenvolvimento

```bash
npm run dev
```

Depois, abra o endereço exibido pelo Vite, normalmente `http://localhost:5173`.

## Gerar versão de produção

```bash
npm run build
```

Para testar o build localmente:

```bash
npm run preview
```

## Usuário para teste
Não existe autenticação real. O login é demonstrativo: use qualquer e-mail válido e uma senha com **6 caracteres ou mais**. O nome exibido é salvo no `localStorage`.

## Funcionalidades React
- Componentização com Header, Footer, cards, estatísticas e páginas.
- Comunicação pai → filho por `props`.
- Estado com `useState` e valores derivados com `useMemo`.
- Central de conteúdo com busca e filtro por matéria.
- Adição, favoritos, exclusão e restauração de conteúdos.
- Lixeira para recuperar itens excluídos.
- Histórico das ações realizadas.
- Indicadores de uso e organização.
- Slideshow migrado do JavaScript/DOM do protótipo para estado React.
- Formulários com validação e feedback visual.
- `localStorage` para conteúdos, usuário, histórico, matérias, lixeira e último contato.
- Uso de `Math.random()`, `Math.round()` e `Math.min()` no indicador de organização, demonstrando operações matemáticas solicitadas na Sprint.
- Layout responsivo para desktop, tablet e celular.

## Estrutura

```text
src/
├── components/
│   ├── ContentCard.jsx
│   ├── FeatureCard.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── ProtectedBadge.jsx
│   └── Stats.jsx
├── data/
│   └── features.js
├── pages/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Dashboard.jsx
│   ├── Features.jsx
│   └── Home.jsx
├── App.jsx
├── main.jsx
├── app.css
└── styles.css
```

## Onde a IA foi utilizada
A IA foi utilizada como apoio durante o desenvolvimento para auxiliar na migração da estrutura HTML/CSS/JavaScript para React, sugerir a divisão em componentes funcionais, revisar lógica de estado, `localStorage`, validações e organização do código. As decisões finais de estrutura, conteúdo e integração foram revisadas pela equipe para manter o protótipo e atender aos requisitos da Sprint.

## GitHub
**Link do repositório:** (https://github.com/gkooji/Jovi-Modo-Aula)

Exemplo de comandos para versionamento:

```bash
git init
git add .
git commit -m "feat: migração do JOVI Modo Aula para React"
git branch -M main
git remote add origin SEU_LINK_DO_REPOSITORIO.git
git push -u origin main
```

## Vercel
**Link do Deploy:** COLE_AQUI_O_LINK_DA_VERCEL

Para publicar, importe o repositório no Vercel. O projeto utiliza Vite e não exige configuração especial além do comando de build `npm run build`.

## Integrantes
Consulte o arquivo `INTEGRANTES.TXT`, que deve permanecer na raiz do ZIP entregue.
