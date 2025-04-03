class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="site-header">
        <div class="hero">
            <div class="contenido-header">

                <a href="/"> <img src="../img/bicisenRenta.svg" class="logo1" alt="Logo de bicis en renta"> </a>

                <div class="redes-sociales">
                    <a href="#"> <i class="fab fa-facebook-square" aria-hidden="true"></i> </a>
                    <a href="#"> <i class="fab fa-twitter-square"></i> </a>
                    <a href="#"> <i class="fab fa-pinterest-square    "></i> </a>
                    <a href="#"> <i class="fab fa-youtube-square    "></i> </a>
                    <a href="#"> <i class="fab fa-instagram    "></i> </a>
                </div>

                

         <span class="signIn" style="margin-right:10px;">Log in / Setup </span>  
          <i class=" signIn fas fa-sign-in-alt"></i>
                <form class="formIngreso" action="POST">
                    <input class="item" type="text" placeholder="Usuario">
                    <input class="item" type="text" placeholder="Password">
                    <input class="item" type="button" value="Ingresar">
                </form>
            </div>
        </div>
    </header>
`
  }
}

customElements.define('my-header', MyHeader)
