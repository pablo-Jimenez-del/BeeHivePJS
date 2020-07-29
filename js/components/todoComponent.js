class TodoComponent extends Component {
  constructor(parent, model) {
    super(parent);
    this.model = model;
    this.container.classList.add("todoComponent");
    this.title = document.createElement("p");
    this.title.innerHTML = this.model.title;
    this.container.appendChild(this.title);
    this.container.onclick = this.completeTodo.bind(this);

  

   if (this.model.completed) {
      this.container.classList.add("todoComponentCompleted");
      this.checkbox = document.createElement('input'); 
      this.checkbox.type= 'checkbox';
      this.container.appendChild(this.checkbox);
    }
  }
  completeTodo(e){
      this.model.completed = !this.model.completed;
    if (this.model.completed) {
        this.container.classList.add("todoComponentCompleted");
      }else{
        this.container.classList.remove("todoComponentCompleted");
      }
  }

}
