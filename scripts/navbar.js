document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".navbar a");
  console.log("links", links);
  const currentPath = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("resaltado");
    } else {
      link.classList.remove("resaltado");
    }
  })
})

class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="barra">
        <div class="contenedor barraContenedor">

        <div class="logoMenu">
            <img class="logo1" src="../img/bicisenRenta1.svg" alt="logo Bicis">

            <i class="menu-movil fa fa-bars" id="menu-movil"></i>
            
        </div>


            <div class="navbar">
                <a href="/">INICIO</a>
                <a href="/pages/registro.html">REGISTRO</a>
                <a href="/pages/eventos.html">EVENTOS</a>
                <a href="/pages/precios.html">PRECIOS</a>
                <a href="/pages/contacto.html">CONTACTO</a>
            </div>
        </div>
    </div>
`
  }
}

customElements.define('my-navbar', MyNavbar);
