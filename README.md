# Meu Fluxo Dia a Dia — Versão 3.0

Projeto do produto comercial: uma **landing page** profissional (React + Vite) em `/`
e o **sistema** completo servido em `/sistema/`.

- **Landing** (`/`): página de vendas — React componentizado, responsivo, com SEO.
- **Sistema** (`/sistema/`): o aplicativo financeiro completo (v3.0), servido como
  arquivo estático a partir de `public/sistema/index.html`. **Não foi reconstruído** —
  é o sistema atual, 100% preservado, apenas evoluído para a v3.0.

## Rodar localmente

```bash
npm install
npm run dev
```

- Landing: http://localhost:5173/
- Sistema: http://localhost:5173/sistema/

## Build de produção

```bash
npm run build     # gera dist/ (landing + a pasta sistema/ copiada de public/)
npm run preview
```

## Publicar no Netlify (via GitHub)

Já configurado em `netlify.toml`:

- Build command: `npm run build`
- Publish directory: `dist`
- Node: 20
- Sem Netlify Agent / Agent Runners — é build estático comum.

Suba para um repositório GitHub e conecte no Netlify. Deploy automático a cada push.

## Preservação dos dados (localStorage)

O sistema continua usando as mesmas chaves (`cartoes-state-v1`, `cartoes-backups-v1`).
Como o `localStorage` é isolado por domínio e o sistema roda no **mesmo domínio** (em
`/sistema/`), os dados de quem já usava são mantidos. Nada a migrar.

## Onde ajustar

- **Contatos e links de venda:** `src/landing/config.js` (WhatsApp, e-mail, preço, `SISTEMA_URL`).
- **Domínio para SEO:** troque `https://gestaofinanceira-diaadia.netlify.app` em `index.html`,
  `public/robots.txt` e `public/sitemap.xml` se você usar um domínio próprio.
- **Chaves de ativação / senha gerencial:** dentro de `public/sistema/index.html`
  (busque por `VALID_ACTIVATION_CODES` e `MASTER_PASSWORD`).

## Screenshots reais (opcional)

As telas na landing são mockups fiéis com **dados fictícios** (Ana Souza / Souza Design ME).
Se quiser usar capturas reais do sistema: abra `/sistema/` com dados fictícios, tire os prints
e substitua os mockups pelas imagens (por ex. colocando-as em `public/screenshots/` e trocando
o conteúdo de `DashboardMock.jsx`/`Showcase.jsx` por `<img>`).

## Identidade

Meu Fluxo Dia a Dia · Versão 3.0 — Desenvolvido por PRAS Desenvolvimento ·
CNPJ 60.316.587/0001-74 · WhatsApp (41) 99991-7429 · consultoria.pras22@gmail.com
