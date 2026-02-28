# Quobo Landing (Next.js)

Landing page da Quobo migrada para **Next.js + TailwindCSS + daisyUI**.

## Stack
- Next.js 15 (App Router)
- React 19
- TailwindCSS (instalado via pacote)
- daisyUI (plugin do Tailwind)

## Estrutura
- `app/`: rotas e layout (`/` e `/terms`)
- `views/landing/`: composição das views
- `components/layout/`: Navbar e Footer
- `components/sections/`: seções da landing
- `public/`: assets estáticos (`quobo-icon.svg`)

## Rodar localmente
1. Instale dependências:
   ```bash
   npm install
   ```
2. Suba o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse:
   - Home: `http://localhost:3000`
   - Termos: `http://localhost:3000/terms`

## Build de produção
```bash
npm run build
npm run start
```

## Checklist de entrega
1. `npm install`
2. `npm run build` sem erros
3. Revisar SEO (`title`, `description`, favicon)
4. Validar navegação desktop/mobile e âncoras
5. Publicar (Vercel recomendado para Next.js)
