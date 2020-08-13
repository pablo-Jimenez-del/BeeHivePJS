class TodoFormComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.classList.add("commentFormComponent");

    this.formBackground = document.createElement("div");
    this.container.appendChild(this.formBackground);
    this.formBackground.classList.add("formBackgroundTodo");

    this.titleComment = document.createElement("h2");
    this.titleComment.classList.add("titleComment");
    this.titleComment.innerHTML = "Agregar nuevo todo";
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
    this.iconOne.setAttribute("class", "fas fa-marker");
    this.labelTitulo.appendChild(this.iconOne);

    this.inputTitulo = document.createElement("input");
    this.inputTitulo.classList.add("inputTituloForm");
    this.inputTitulo.placeholder = "Titulo";
    this.inputTitulo.id = "inputTitleFormTodo";
    this.field.appendChild(this.inputTitulo);

    this.field = document.createElement("div");
    this.field.classList.add("field");
    this.form.appendChild(this.field);

    this.cancelBtn = document.createElement("button");
    this.cancelBtn.innerHTML = "Cancelar";
    this.formBackground.appendChild(this.cancelBtn);
    this.cancelBtn.classList.add("cancelBtnNewTodo");
    this.cancelBtn.onclick = this.onCancelButton.bind(this);

    this.enviarBtn = document.createElement("button");
    this.enviarBtn.innerHTML = "Enviar";
    this.formBackground.appendChild(this.enviarBtn);
    this.enviarBtn.classList.add("enviarBtnNewTodo");
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

    var inputTitleFormTodo = document.getElementById("inputTitleFormTodo");
    var formTitleTodo = inputTitleFormTodo.value;

    if (formTitleTodo == "") {
      Swal.fire({
        icon: "warning",
        title: "El titulo está vacío",
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
      document.getElementById("inputTitleFormTodo").value = "";
    }
    AppManager.getInstance().uiManager.addNewTodo(title);
  }
}
