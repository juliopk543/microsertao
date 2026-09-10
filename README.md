# IBRASO Sistemas — site institucional

Site institucional da **IBRASO Sistemas** (MicroSertão): emancipação digital para
municípios — comunicação pública, gestão do comércio local e inteligência
artificial com os dados mantidos no território, em conformidade com a LGPD.

Publicado em <https://www.microsertao.com.br>.

## Como o projeto funciona

É um site **estático puro** (HTML + CSS + JS), sem etapa de build.
O que está no repositório é exatamente o que vai ao ar.

```
index.html      página única (todas as seções)
css/            folhas de estilo
js/             scripts (jQuery, Bootstrap, plugins e o main do tema)
images/         imagens, ícones e logos
fonts/          fontes locais (Nunito, Font Awesome, ícones do tema)
CNAME           domínio customizado do GitHub Pages
.nojekyll       desliga o processamento Jekyll no Pages
```

Seções da página (âncoras do menu): `#home`, `#about`, `#service`, `#work`,
`#testimonial`, `#blog`, `#contato`.

## Rodar localmente

Basta abrir o `index.html` no navegador. Para evitar restrições de `file://`,
prefira um servidor local:

```bash
python -m http.server 8000
# abra http://localhost:8000
```

## Editar

Todo o conteúdo de texto e as imagens estão no `index.html`. Ao trocar uma
imagem, coloque o arquivo em `images/` e atualize o `src` correspondente.
Os caminhos são todos relativos — não use caminhos absolutos.

## Deploy

Automático: todo push na branch `main` dispara o workflow
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), que envia a raiz
do repositório para o GitHub Pages.

## Histórico

Até setembro de 2026 este repositório hospedava a landing page do MicroSertão
feita em Astro + Tailwind. Essa versão continua disponível no histórico do git
(commits anteriores a esta substituição).
