# Plano de cleanup da migração para Next.js

Este documento descreve a estratégia em **2 commits** para concluir a migração limpa:

1. **Commit 1 — Preparação**
   - Congelar a arquitetura Next.js como fonte oficial da aplicação.
   - Documentar estrutura final e critérios de aceite.

2. **Commit 2 — Remoção do legado Vite**
   - Remover entrypoints/arquivos de build do Vite e componentes legados da pasta `components/` raiz.
   - Manter apenas `app/`, `views/landing/`, `components/layout/`, `components/sections/` e configurações Next/Tailwind.

## Critérios de aceite
- Scripts principais do projeto: `next dev`, `next build`, `next start`.
- Estilo via Tailwind + daisyUI instalados por pacote (sem CDN).
- Página inicial em `/` e termos em `/terms`.
