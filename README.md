# IBRASO conexões — site institucional

Site institucional da **IBRASO conexões**: emancipação digital para
municípios — comunicação pública, gestão do comércio local e inteligência
artificial com os dados administrados no território, em conformidade com a LGPD.

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

## Bastidores de engenharia

- **Origem do tema:** o HTML/CSS/JS veio de um tema WordPress exportado como
  estático. Os scripts herdados sem função (WooCommerce, Contact Form 7,
  `wp-hooks`, `wp-i18n`, emoji do WordPress e rastreio de origem
  `sourcebuster`) foram removidos do `index.html`. Sobraram folhas de estilo
  desses plugins em `css/`, sem efeito.
- **Nomes de arquivo ofuscados:** `css/` e `js/` usam nomes aleatórios
  (`Bu9UXg47y0Ci.js` = jQuery 3.7.1). O atributo `id` de cada `<script>` em
  `index.html` indica qual biblioteca é.
- **Dependências embutidas:** jQuery 3.7.1 + Migrate 3.4.1, Bootstrap JS 4.6.2
  (`js/q4sBjg1eBBOB.js`), Popper 1.x, Owl Carousel, Isotope, Magnific Popup,
  WOW e Font Awesome. A fonte Nunito é local (`css/nunito.css` + `fonts/nunito-*.woff2`).
  Nenhuma passa por gerenciador de pacotes: atualizar é trocar o arquivo à mão.
- **Sem back-end e sem banco:** não há login, formulário que grave dados nem
  cookie próprio. O contato é por `mailto:` e links `wa.me` (WhatsApp).
- **Deploy:** GitHub Actions → GitHub Pages (`deploy.yml`), publicando a raiz
  inteira do repositório. Só um deploy roda por vez; os demais ficam na fila.
- **Domínio:** `CNAME` aponta para `www.microsertao.com.br`; o HTTPS é
  obrigatório e o domínio sem `www` redireciona com 301.
- **Legado:** `dist/`, `.astro/` e `node_modules/` são restos da versão antiga
  em Astro. Estão no `.gitignore` e não vão ao ar.

## Segurança

Por ser um site estático, a superfície de ataque é pequena (sem servidor, sem
banco, sem senhas). Situação de cada ponto:

| Ponto | Situação |
| --- | --- |
| Bootstrap JS desatualizado (4.4.1) | **Corrigido:** atualizado para 4.6.2 |
| Scripts mortos (WooCommerce, CF7, emoji WP, rastreio) | **Corrigido:** removidos |
| Sem cabeçalhos de segurança | **Mitigado:** `<meta>` com Content-Security-Policy (só recursos do próprio site), `referrer` e proteção contra iframe via script. O Pages não permite cabeçalhos HTTP reais; para isso seria preciso um proxy como o Cloudflare |
| HTTPS não obrigatório | **Corrigido:** "Enforce HTTPS" ativado no Pages |
| Fonte do Google (IP do visitante, LGPD) | **Corrigido:** Nunito hospedada localmente |
| Repositório público | **Aceito:** nunca commitar chaves ou `.env` (já no `.gitignore`); se algo vazar, revogar a chave, não só apagar o arquivo |
| E-mail e WhatsApp expostos | **Aceito:** são o canal de contato. Considerar e-mail dedicado e WhatsApp Business |
| `certificados/*.pdf` públicos | **Em aberto:** conferir os metadados dos PDFs antes de mantê-los |
| Deploy sem revisão | **Em aberto:** ativar 2FA/passkey na conta GitHub e proteger a branch `main` |

A CSP usa `'unsafe-inline'` em scripts e estilos porque o `index.html` tem
trechos inline. Ela bloqueia qualquer recurso externo, mas não impede um script
inline injetado; como o site não recebe conteúdo de usuários, o risco é baixo.

Nenhuma senha, chave de API ou token foi encontrado no código publicado.

## Histórico

Até setembro de 2026 este repositório hospedava a landing page do MicroSertão
feita em Astro + Tailwind. Essa versão continua disponível no histórico do git
(commits anteriores a esta substituição).
