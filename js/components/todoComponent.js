class TodoComponent extends Component {
  constructor(parent, model) {
    super(parent);
    this.model = model;
    this.container.classList.add("todoComponent");

    this.divList = document.createElement('div');
    this.divList.classList.add('divList');
   this.container.appendChild(this.divList);


   this.ul = document.createElement('ul');
   this.divList.appendChild(this.ul);

  this.li = document.createElement('li');
   this.ul.appendChild(this.li);

   this.label = document.createElement('label');
   this.label.classList.add('labelTodo')
   this.li.appendChild(this.label);

   this.inputTodo = document.createElement('input');
   this.inputTodo.classList.add('inputTodo');
   this.inputTodo.type= 'checkbox';
   this.label.appendChild(this.inputTodo);

   this.pTodo = document.createElement('p');
   this.pTodo.classList.add('pTodo');
   this.pTodo.innerHTML = this.model.title;
   this.label.appendChild(this.pTodo);

   this.span = document.createElement('span');
   this.label.appendChild(this.span);

  

   if (this.model.completed) {
      this.inputTodo.checked = 'checked';
    }
  }
  completeTodo(e){
      this.model.completed = !this.model.completed;
    if (this.model.completed) {
      /*  this.container.classList.add("todoComponentCompleted"); */
      }else{
      /*  this.container.classList.remove("todoComponentCompleted"); */
      }
  }

}
