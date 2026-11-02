# Gera /microempreendedores/ e /transporte/ a partir do index.html.
# Rode sempre que alterar o index.html:  python gerar-paginas.py
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
        .banner-area.rectangular-shape::after { display: none; }
        .banner-area.text-combo h2 { color: #fff; }
        .banner-area.text-combo h2 span.brand-light { color: #8fb2ff; }
        .banner-area.text-combo h2 span.banner-eyebrow { color: #d6c3ff; }
        .banner-area.text-combo h2 span.banner-eyebrow::before { background: #d6c3ff; }
        .banner-area.text-combo h2 span.banner-sub { color: rgba(255, 255, 255, 0.9); }
        .banner-area::before { background: linear-gradient(to bottom, rgba(73, 10, 124, 0) 0%, #fff 100%); }
    </style>
"""

PAGINAS = {
    "microempreendedores": {"sub": SUB_MICRO, "img": IMG_MICRO},
    "transporte": {"css": CSS_TRANSPORTE},  # texto novo + slide do onibus + fundo roxo
}


def trocar(html, nome, novo):
    padrao = re.compile(r"<!-- %s:inicio -->\n.*?\n<!-- %s:fim -->" % (nome, nome), re.S)
    assert padrao.search(html), "marcador %s nao encontrado no index.html" % nome
    return padrao.sub(lambda m: novo, html)


base = (RAIZ / "index.html").read_text(encoding="utf-8")
for pasta, trocas in PAGINAS.items():
    html = base
    for nome in ("banner-sub", "banner-img"):
        chave = nome.split("-")[1]
        if chave in trocas and chave != "css":
            html = trocar(html, nome, trocas[chave])
    if "css" in trocas:
        html = html.replace("</head>", trocas["css"] + "</head>", 1)
    url = SITE + pasta + "/"
    html = html.replace('content="%s"' % SITE, 'content="%s"' % url, 1)
    html = html.replace('rel="canonical" href="%s"' % SITE, 'rel="canonical" href="%s"' % url, 1)
    html = html.replace("<head>\n", "<head>\n" + HEAD_EXTRA, 1)
    destino = RAIZ / pasta / "index.html"
    destino.parent.mkdir(exist_ok=True)
    destino.write_text(html, encoding="utf-8", newline="\n")
    print("gerado:", destino.relative_to(RAIZ))
