class PhotoComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.classList.add("photoComponent");


    this.img = null;

    this.enviarBtn = document.createElement("button");
    this.enviarBtn.innerHTML = "Cerrar";
    this.enviarBtn.classList.add("cerrarBtnPhoto");
    this.enviarBtn.onclick = this.onEnviarButton.bind(this);
    this.container.appendChild(this.enviarBtn);

    //Oculta el pop up del form
    this.hide();
  }

  showImage(photo) {
    this.container.innerHTML = "";
    this.img = document.createElement("img");
    this.img.src = photo.url;
    this.img.classList.add("photo");
    this.img.classList.add('img-fluid');
    this.container.appendChild(this.img);
    this.container.appendChild(this.enviarBtn);
    this.show();
  }

  hide() {
    this.container.innerHTML = "";
    this.container.style.display = "none";
  }
  show() {
    this.container.style.display = "flex";
  }
  onEnviarButton(e) {
    this.hide();
  }
}
