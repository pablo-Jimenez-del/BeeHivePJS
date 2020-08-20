class HeaderComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.id = "headerComponent";
    this.container.classList.add("headerComponent");

    this.icon = document.createElement("i");
    this.icon.id = "iconPrevious";
    this.icon.setAttribute(
      "class",
      "fas fa-arrow-circle-left fa-3x iconPrevious"
    );
    this.container.appendChild(this.icon);
    this.icon.onclick = this.onPreviousBtn.bind(this);

    this.titulo = document.createElement("h1");
    this.titulo.innerHTML = "BeeHive";
    this.titulo.classList.add("beeHiveTitle");
    this.container.appendChild(this.titulo);
  }
  onPreviousBtn() {
    window.location.href = "index.html";
    console.log("Hola");
  }
}
