class PostFormComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.classList.add("commentFormComponent");

    this.formBackground = document.createElement("div");
    this.container.appendChild(this.formBackground);
    this.formBackground.classList.add("formBackground");

    this.titleComment = document.createElement("h2");
    this.titleComment.classList.add("titleComment");
    this.titleComment.innerHTML = "Agregar nuevo post";
    this.formBackground.appendChild(this.titleComment);

    this.lineCommentTitle = document.createElement("hr");
    this.lineCommentTitle.classList.add("lineCommentTitle");
    this.formBackground.appendChild(this.lineCommentTitle);

    this.form = document.createElement("form");
    this.formBackground.appendChild(this.form);

    this.field = document.createElement("div");
    this.field.classList.add("field");
    this.form.appendChild(this.field);

    this.labelTitulo = document.createElement("label");
    this.field.appendChild(this.labelTitulo);

    this.iconOne = document.createElement("i");
    this.iconOne.innerText = "Titulo";
    this.iconOne.classList.add("fas");
    this.iconOne.classList.add("fa-marker");
    // this.iconOne.setAttribute('class', 'fas fa-marker');
    this.labelTitulo.appendChild(this.iconOne);

    this.inputTitulo = document.createElement("input");
    this.inputTitulo.classList.add("inputTituloForm");
    this.inputTitulo.placeholder = "Titulo";
    this.inputTitulo.id = "inputTitleFormPost";
    this.field.appendChild(this.inputTitulo);

    this.field = document.createElement("div");
    this.field.classList.add("field");
    this.form.appendChild(this.field);

    this.labelMessage = document.createElement("label");
    this.field.appendChild(this.labelMessage);

    this.iconMessage = document.createElement("i");
    this.iconMessage.innerHTML = "Comentario";
    this.iconMessage.classList.add("far");
    this.iconMessage.classList.add("fa-edit");
    this.labelMessage.appendChild(this.iconMessage);

    this.textareaMessage = document.createElement("textarea");
    this.textareaMessage.classList.add("textareaMessage");
    this.textareaMessage.id = "textareaFormPost";
    this.textareaMessage.placeholder = "Comentario";
    this.field.appendChild(this.textareaMessage);

    this.cancelBtn = document.createElement("button");
    this.cancelBtn.innerHTML = "Cancelar";
    this.formBackground.appendChild(this.cancelBtn);
    this.cancelBtn.classList.add("cancelBtn");
    this.cancelBtn.classList.add("btn");
    this.cancelBtn.classList.add("btn-primary");
    this.cancelBtn.style.width = "150px";
    this.cancelBtn.onclick = this.onCancelButton.bind(this);

    this.enviarBtn = document.createElement("button");
    this.enviarBtn.innerHTML = "Enviar";
    this.formBackground.appendChild(this.enviarBtn);
    this.enviarBtn.classList.add("enviarBtn");
    this.enviarBtn.classList.add("btn");
    this.enviarBtn.classList.add("btn-primary");
    this.enviarBtn.style.width = "150px";
    this.enviarBtn.onclick = this.onEnviarButton.bind(this);

    //No se muestra el formulario del nuevo post
    this.hide();
  }

  hide() {
    this.container.style.display = "none";
  }
  show() {
    this.container.style.display = "flex";
  }

  onCancelButton(e) {
    AppManager.getInstance().uiManager.hideCommentForm(null, null);
  }

  onEnviarButton(e) {
    var title = this.inputTitulo.value;
    var body = this.textareaMessage.value;

    var inputTitleFormPost = document.getElementById("inputTitleFormPost");
    var textareaFormPost = document.getElementById("textareaFormPost");

    var formTitlePost = inputTitleFormPost.value;
    var formBodyPost = textareaFormPost.value;

    if (formTitlePost == "") {
      Swal.fire({
        icon: "warning",
        title: "El titulo está vacío",
      });
      return false;
    } else if (formBodyPost == "") {
      Swal.fire({
        icon: "warning",
        title: "El comentario está vacío",
      });
      return false;
    } else {
      Swal.fire({
        position: "Center",
        icon: "success",
        title: "Post Añadido",
        showConfirmButton: false,
        timer: 1900,
      });
      document.getElementById("inputTitleFormPost").value = "";
      document.getElementById("textareaFormPost").value = "";
    }
    AppManager.getInstance().uiManager.addNewPost(title, body);
  }
}
