class TodosComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.id = "todosComponent";
    this.container.classList.add("todosComponent");
    this.newTodoBtn = null;


  }


  showBeeTodos(bee, resetPosition) {
    if (resetPosition) {
      this.container.scrollTo(0, 0);
    }
    this.container.innerHTML = "";
    this.newTodoBtn = document.createElement("div");
    this.container.appendChild(this.newTodoBtn);
    this.newTodoBtn.classList.add("newTodoBtn");
    this.newTodoBtn.onclick = this.onNewTodoBtn.bind(this);

    bee.todos.forEach((todo) => {
      var todoComponent = new TodoComponent(this.container, todo);
    });
  }

  onNewTodoBtn() {
    AppManager.getInstance().uiManager.showTodoForm();
    console.log("Hola");
  }

}
