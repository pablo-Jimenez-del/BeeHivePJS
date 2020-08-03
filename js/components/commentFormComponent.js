class CommentFormComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.classList.add("commentFormComponent");

    this.formBackground = document.createElement("div");
    this.container.appendChild(this.formBackground);
    this.formBackground.classList.add("formBackground");

    this.titleComment = document.createElement("h2");
    this.titleComment.classList.add("titleComment");
    this.titleComment.innerHTML = "Deja tu comentario";
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
    // this.iconOne.classList.add("fas");
    // this.iconOne.classList.add('fa-marker');
    this.iconOne.setAttribute('class', 'fas fa-marker');
    this.labelTitulo.appendChild(this.iconOne);

    this.inputTitulo = document.createElement("input");
    this.inputTitulo.classList.add("inputTitulo");
    this.inputTitulo.placeholder = "Titulo";
    this.inputTitulo.id = "inputTitleForm";
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
    this.textareaMessage.id = "textareaForm";
    this.textareaMessage.placeholder = "Comentario";
    this.field.appendChild(this.textareaMessage);



    this.cancelBtn = document.createElement("button");
    this.cancelBtn.innerHTML = "Cancelar";
    this.formBackground.appendChild(this.cancelBtn);
    this.cancelBtn.classList.add("cancelBtn");
    this.cancelBtn.classList.add("btn");
    this.cancelBtn.classList.add("btn-primary");
    this.cancelBtn.style.width = '150px';
    this.cancelBtn.onclick = this.onCancelButton.bind(this);

    this.enviarBtn = document.createElement("button");
    this.enviarBtn.innerHTML = "Enviar";
    this.formBackground.appendChild(this.enviarBtn);
    this.enviarBtn.classList.add("enviarBtn");
    this.enviarBtn.classList.add("btn");
    this.enviarBtn.classList.add("btn-primary");
    this.enviarBtn.style.width = '150px';
    this.enviarBtn.onclick = this.onEnviarButton.bind(this);

    //No se muestra el boton
    // this.hide();
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

    var inputTitleForm = document.getElementById("inputTitleForm");
    var textareaForm = document.getElementById("textareaForm");

    var formTitle = inputTitleForm.value;
    var formBody = textareaForm.value;

    if (formTitle == "") {
      Swal.fire({
        icon: "warning",
        title: "El titulo está vacío",
      });
      return false;

    } else if (formBody == "") {
      Swal.fire({
        icon: "warning",
        title: "El comentario está vacío",
      });
      return false;

    } else {
      Swal.fire({
        position: "Center",
        icon: "success",
        title: "Comentario Añadido",
        showConfirmButton: false,
        timer: 1900,
      });
      document.getElementById("inputTitleForm").value = "";
      document.getElementById("textareaForm").value = "";
    }
    AppManager.getInstance().uiManager.addNewComment(title, body);
  }
}
