# Gera a raiz (index.html), /microempreendedores/ e /transporte/ a partir do fonte.html.
# Rode sempre que alterar o fonte.html:  python gerar-paginas.py
# A raiz e uma copia de /transporte (mesmo conteudo, com o endereco da raiz).
import re
from pathlib import Path

RAIZ = Path(__file__).parent
SITE = "https://www.microsertao.com.br/"

# Versao antiga do banner (texto e imagem Header) usada em /microempreendedores
SUB_MICRO = """                                                            <span class="banner-sub">Canal digital de comunicação para a
                                                                população, ofereça agilidade aos seus
                                                                microempreendedores.</span>"""
IMG_MICRO = """                                                        <img decoding="async" src="images/Header.png"
                                                            alt="Aplicativo IBRASO em uso no celular">"""

# Paginas em subpasta: <base href="/"> faz images/, css/, js/ apontarem para a raiz.
# Os links "#secao" passariam a ir para "/#secao"; o script abaixo os mantem na pagina atual.
HEAD_EXTRA = """    <base href="/">
    <script>document.addEventListener('click', function (e) {
        if (e.defaultPrevented) return;
        var a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return;
        e.preventDefault();
        var h = a.getAttribute('href');
        if (h.length > 1) location.hash = h;
    });</script>
"""

# Fundo roxo do banner em /transporte
CSS_TRANSPORTE = """    <style>
        /* /transporte: banner com fundo roxo */
        .banner-area.bg-light-gradient { background: #490a7c; }
        /* desktop: fundo com ondas e piso iluminado (images/fundoHeader.png convertido para jpg) */
        @media only screen and (min-width: 992px) {
            .banner-area.bg-light-gradient { background: #490a7c url("images/fundoHeader.jpg?v=1") center bottom / cover no-repeat; }
        }
        .banner-area.rectangular-shape::after { display: none; }
        .banner-area.text-combo h2 { color: #fff; }
        .banner-area.text-combo h2 span.brand-light { color: #8fb2ff; }
        .banner-area.text-combo h2 span.banner-eyebrow { color: #d6c3ff; }
        .banner-area.text-combo h2 span.banner-eyebrow::before { background: #d6c3ff; }
        .banner-area.text-combo h2 span.banner-sub { color: rgba(255, 255, 255, 0.9); }
        .banner-area::before { display: none; }
        /* faixa da logo na cor do fundo do banner */
        nav.navbar.navbar-default.bootsnav.navbar-fixed-light a.navbar-brand::before { background-color: #490a7c; background-image: none; }

        /* mobile: fundo roxo encosta nas bordas e navbar da mesma cor */
        @media only screen and (max-width: 991px) {
            nav.navbar .navbar-brand img.logo.logo-responsive { height: 38px !important; }
            .banner-area { margin-left: -15px; margin-right: -15px; width: calc(100% + 30px); max-width: none; }
            nav.navbar.navbar-default.bootsnav { background: #490a7c; border-color: #490a7c; }
            nav.navbar.navbar-default.bootsnav .navbar-toggle,
            nav.navbar.navbar-default.bootsnav .navbar-toggle i,
            nav.navbar.navbar-default.bootsnav .attr-nav > ul > li > a,
            nav.navbar.navbar-default.bootsnav .attr-nav > ul > li > a i { color: #fff; }
            nav.navbar.navbar-default.bootsnav .attr-nav > ul > li.side-menu,
            nav.navbar.navbar-default.bootsnav .attr-nav { border-color: rgba(255, 255, 255, 0.25); }
            nav.navbar.navbar-default.bootsnav .navbar-collapse { background: #490a7c; }
            nav.navbar.navbar-default.bootsnav .navbar-collapse .nav > li > a { color: #fff; }
        }
    </style>
"""

TRANSPORTE = {"css": CSS_TRANSPORTE, "logo": "images/studio-microsertao.png?v=1", "transporte_primeiro": True,
              "rota": "parciais/transporte-rota.html"}  # texto novo + slide do onibus + fundo roxo + tag animada

PAGINAS = {
    "microempreendedores": {"sub": SUB_MICRO, "img": IMG_MICRO},
    "transporte": TRANSPORTE,
    "": TRANSPORTE,  # raiz igual a /transporte
}


def trocar(html, nome, novo):
    padrao = re.compile(r"<!-- %s:inicio -->\n.*?\n<!-- %s:fim -->" % (nome, nome), re.S)
    assert padrao.search(html), "marcador %s nao encontrado no index.html" % nome
    return padrao.sub(lambda m: novo, html)


def transporte_primeiro(html):
    """Ordem dos cards em /transporte: Transporte, Comunicação e depois o resto."""
    ini = html.index('<div class="feature-items feature-carousel owl-carousel owl-theme">')
    sep = "<!-- End Single Item --><!-- Single Item -->"
    corpo_ini = html.index("<!-- Single Item -->", ini) + len("<!-- Single Item -->")
    fim = html.index("<!-- End Single Item -->", corpo_ini)
    while html.startswith(sep, fim):  # avanca ate o ultimo card
        fim = html.index("<!-- End Single Item -->", fim + len(sep))
    cards = html[corpo_ini:fim].split(sep)
    assert len(cards) == 3, "esperava 3 cards no carrossel"
    ordem = ["<h3>Secretaria de Transporte</h3>", "<h3>Secretaria de Comunicação</h3>"]
    cards.sort(key=lambda c: next((i for i, t in enumerate(ordem) if t in c), len(ordem)))  # ordenacao estavel
    for i, t in enumerate(ordem):
        assert t in cards[i], "card fora de ordem: " + t
    return html[:corpo_ini] + sep.join(cards) + html[fim:]


base = (RAIZ / "fonte.html").read_text(encoding="utf-8")
for pasta, trocas in PAGINAS.items():
    html = base
    for nome in ("banner-sub", "banner-img"):
        chave = nome.split("-")[1]
        if chave in trocas and chave in ("sub", "img"):
            html = trocar(html, nome, trocas[chave])
    if trocas.get("transporte_primeiro"):
        html = transporte_primeiro(html)
    if "logo" in trocas:
        html = html.replace('src="images/coruripedbs.png"', 'src="%s"' % trocas["logo"])
        html = html.replace('class="logo default" alt="IBRASO conexões"', 'class="logo default" alt="StudioMicrosertão"')
        html = html.replace('class="logo logo-responsive" alt="IBRASO conexões"', 'class="logo logo-responsive" alt="StudioMicrosertão"')
    if "css" in trocas:
        html = html.replace("</head>", trocas["css"] + "</head>", 1)
    if "rota" in trocas:
        bloco = (RAIZ / trocas["rota"]).read_text(encoding="utf-8")
        assert html.count("</body>") == 1, "esperava um unico </body>"
        html = html.replace("</body>", bloco + "</body>", 1)
    if pasta:  # subpasta: endereco proprio e caminhos apontando para a raiz
        url = SITE + pasta + "/"
        html = html.replace('content="%s"' % SITE, 'content="%s"' % url, 1)
        html = html.replace('rel="canonical" href="%s"' % SITE, 'rel="canonical" href="%s"' % url, 1)
        html = html.replace("<head>\n", "<head>\n" + HEAD_EXTRA, 1)
    destino = RAIZ / pasta / "index.html"
    destino.parent.mkdir(exist_ok=True)
    destino.write_text(html, encoding="utf-8", newline="\n")
    print("gerado:", destino.relative_to(RAIZ))
