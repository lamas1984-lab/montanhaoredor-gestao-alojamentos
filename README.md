# MontanhAoRedor — Gestão de Alojamentos

Site independente, multilingue e responsivo dedicado à gestão de alojamentos locais.

## Identidade

Usa uma cópia versionada do Brand Kit MontanhAoRedor 1.0.0: verde-azeitona, creme, verde-água, cobre, Cormorant Garamond e DM Sans. A identidade é comum, mas o código e a publicação são totalmente independentes dos projetos Casa do Lagar e Transfers & Tours.

## Conteúdo

O site apresenta receção de hóspedes, check-in/check-out, limpeza e lavandaria, reposição de consumíveis, apoio durante a estadia, melhoria visual, preparação fotográfica, organização de preços e análise de potencial. As propostas são sempre apresentadas à medida, depois de conhecer a propriedade.

## Idiomas

Português, inglês, alemão e neerlandês, com seleção no cabeçalho e persistência no endereço através de `?lang=`.

## Comandos

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
node scripts/visual-check.mjs
```

## Pré-visualização temporária

O servidor usa a porta `4174`. O endereço público temporário desta sessão é:

`https://4174-ia7ss5jxrm52092ojb92b-1bdf4106.us1.manus.computer/`

## Publicação

Para produção, recomenda-se um domínio próprio como `gestao.montanhaoredor.com`. A ligação ao site Casa do Lagar e ao projeto Transfers é feita por URLs públicas; nenhum dos repositórios é importado ou alterado.
