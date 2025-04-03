const currentYear = new Date().getUTCFullYear();
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer>
        <div class="contenedor-footer">

            <div class="redes-sociales chil">
                <a href="#"> <i class="fab fa-facebook-square" aria-hidden="true"></i> </a>
                <a href="#"> <i class="fab fa-twitter-square"></i> </a>
                <a href="#"> <i class="fab fa-pinterest-square    "></i> </a>
                <a href="#"> <i class="fab fa-youtube-square    "></i> </a>
                <a href="#"> <i class="fab fa-instagram    "></i> </a>
            </div>
            <div class="chil">
                <a href="/"> <img src="../img/bicisenRenta.svg" class="logo1" alt="Logo de bicis en renta"> </a>

            </div>
        </div>
        <div class="copyright">
            <p>&copy; Copyright ${currentYear} Desarrollado por Marco Antonio Islas Durán</p>
        </div>
    </footer>
`

  }
}
customElements.define('my-footer', MyFooter);
