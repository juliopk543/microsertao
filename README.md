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
  estático. Por isso há scripts herdados que não têm função no site atual
  (WooCommerce, Contact Form 7, `wp-hooks`, `wp-i18n`) e variáveis como
  `wc_add_to_cart_params` e `wpcf7` apontando para `/wp-admin/admin-ajax.php` e
  `/wp-json/`. Esses endpoints **não existem** (o GitHub Pages só serve
  arquivos), então as chamadas retornam 404 sem efeito.
- **Nomes de arquivo ofuscados:** `css/` e `js/` usam nomes aleatórios
  (`Bu9UXg47y0Ci.js` = jQuery 3.7.1). O atributo `id` de cada `<script>` em
  `index.html` indica qual biblioteca é.
- **Dependências embutidas:** jQuery 3.7.1 + Migrate 3.4.1, Bootstrap 4.4.1,
  Popper, Owl Carousel, Isotope, Magnific Popup, WOW, Font Awesome e Nunito
  (local). Nenhuma passa por gerenciador de pacotes: atualizar é trocar o
  arquivo à mão.
- **Sem back-end e sem banco:** não há login, formulário que grave dados nem
  cookie próprio. O contato é por `mailto:` e links `wa.me` (WhatsApp).
- **Deploy:** GitHub Actions → GitHub Pages (`deploy.yml`), publicando a raiz
  inteira do repositório. Só um deploy roda por vez; os demais ficam na fila.
- **Domínio:** `CNAME` aponta para `www.microsertao.com.br` (o domínio sem
  `www` redireciona com 301).
- **Legado:** `dist/`, `.astro/` e `node_modules/` são restos da versão antiga
  em Astro. Estão no `.gitignore` e não vão ao ar.

## Possíveis vulnerabilidades e pontos de atenção

Por ser um site estático, a superfície de ataque é pequena (sem servidor, sem
banco, sem senhas). Os riscos que restam:

| Ponto | Risco | Recomendação |
| --- | --- | --- |
| Bootstrap 4.4.1 (2019) | Versão com vulnerabilidades XSS conhecidas em tooltip/popover/data-attributes; só explorável se houver conteúdo de usuário, que o site não tem | Atualizar para Bootstrap 4.6.2 ou 5.x |
| jQuery Migrate e scripts WooCommerce/CF7 | Código morto que aumenta a superfície e o tamanho da página | Remover os `<script>` não usados |
| Sem cabeçalhos de segurança | O GitHub Pages não deixa configurar CSP, `X-Frame-Options` etc.; o site pode ser embutido em iframe (clickjacking) | Adicionar `<meta http-equiv="Content-Security-Policy">` e, se precisar de cabeçalhos reais, colocar o Cloudflare na frente |
| HTTPS não obrigatório | `https_enforced` está `false` no Pages: o site ainda abre em `http://` | Ativar "Enforce HTTPS" em Settings → Pages |
| Repositório público | Todo o código e o histórico são visíveis; um segredo commitado antes continua no histórico mesmo depois de apagado | Nunca commitar chaves ou `.env` (já no `.gitignore`); se vazar, revogar a chave e não só apagar o arquivo |
| E-mail e WhatsApp expostos | `microsertao@gmail.com` e números `wa.me` ficam públicos e são alvo de spam e phishing | Usar e-mail dedicado com filtro anti-spam e WhatsApp Business |
| `certificados/*.pdf` | PDFs públicos, com possíveis dados pessoais nos metadados | Remover metadados antes de publicar ou tirar do repositório |
| Fontes do Google | `fonts.googleapis.com` envia o IP do visitante ao Google (ponto de atenção da LGPD) | Hospedar a fonte localmente |
| Links externos | Links para outros sites (ex.: `ojornalextra.com.br`) sem `rel="noopener"` | Adicionar `rel="noopener noreferrer"` |
| Deploy via Actions | Um commit na `main` vai ao ar sem revisão; a conta GitHub é o elo mais fraco | Ativar 2FA, proteger a branch `main` e usar chave de acesso (passkey) |

Nenhuma senha, chave de API ou token foi encontrado no código publicado.

## Histórico

Até setembro de 2026 este repositório hospedava a landing page do MicroSertão
feita em Astro + Tailwind. Essa versão continua disponível no histórico do git
(commits anteriores a esta substituição).
