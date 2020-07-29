class BeeComponent extends Component {
  constructor(parent, model) {
    super(parent);
    this.model = model;
    this.container.id = "beeComponent";
    this.container.classList.add("beeComponent");



    //Añado los Bees name, username etc
    //Model viene del modelo Bee

    var beeImage = document.createElement("img");
    beeImage.src = model.image;
    beeImage.classList.add("beeImage");
    this.container.appendChild(beeImage);

    var beeName = document.createElement("p");
    beeName.innerHTML = model.name;
    beeName.classList.add("beeName");
    this.container.appendChild(beeName);

    var beeUserName = document.createElement("p");
    beeUserName.innerHTML = model.username;
    beeUserName.classList.add("beeUserName");
    this.container.appendChild(beeUserName);

    var beeEmail = document.createElement("p");
    beeEmail.innerHTML = model.email;
    beeEmail.classList.add("beeEmail");
    this.container.appendChild(beeEmail);

    var beePhone = document.createElement("p");
    beePhone.innerHTML = model.phone;
    beePhone.classList.add("beePhone");
    this.container.appendChild(beePhone);

    var beeCity = document.createElement("p");
    beeCity.innerHTML = model.address.city;
    beeCity.classList.add("beeCity");
    this.container.appendChild(beeCity);


    this.divButtons = document.createElement("div");
    this.divButtons.classList.add("divButtons");
    this.container.appendChild(this.divButtons);

    this.buttonPost = document.createElement("button");
    this.buttonPost.innerHTML = "Posts";
    this.buttonPost.classList.add('btn');
    this.buttonPost.classList.add('btn-primary');
    this.divButtons.appendChild(this.buttonPost);
    this.buttonPost.onclick = this.onBtnPost.bind(this);

    this.buttonAlbum = document.createElement("button");
    this.buttonAlbum.innerHTML = "Album";
    this.buttonAlbum.classList.add('btn');
    this.buttonAlbum.classList.add('btn-primary');
    this.divButtons.appendChild(this.buttonAlbum);
    this.buttonAlbum.onclick = this.onBtnAlbum.bind(this);

    this.buttonTodo = document.createElement("button");
    this.buttonTodo.innerHTML = "Todo";
    this.buttonTodo.classList.add('btn');
    this.buttonTodo.classList.add('btn-primary');
    this.divButtons.appendChild(this.buttonTodo);
    this.buttonTodo.onclick = this.onBtnTodo.bind(this);

    this.raya = document.createElement('hr');
    this.raya.classList.add('raya');
    this.divButtons.appendChild(this.raya);


    //Cada vez que hago click que muestre el modelo del usuario(osea el bee)
    this.container.onclick = this.onContainerClick.bind(this);
  }

  onContainerClick(e) {
    AppManager.getInstance().uiManager.refreshPostsComponent(this, true);
  }

  onBtnPost(e) {
    console.log("x1");
  }
  onBtnAlbum(e) {
    console.log("x2");
  }
  onBtnTodo(e) {
    console.log("x3");
  }
}
