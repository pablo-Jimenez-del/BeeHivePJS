class PostsComponent extends Component {
  constructor(parent) {
    super(parent);
    this.container.id = "postsComponent";
    this.container.classList.add("postsComponent");
    this.container.classList.add("container-fluid");
    this.container.classList.add("col-sm-3");
    this.bee = null;

    this.newPostBtn = null;
  }

  showBeePosts(bee, resetPosition) {
    if (resetPosition) {
      this.container.scrollTo(0, 0);
    }
    this.container.innerHTML = "";
    this.newPostBtn = document.createElement("div");
    this.container.appendChild(this.newPostBtn);
    this.newPostBtn.classList.add("newPostBtn");
    this.newPostBtn.onclick = this.onNewPostBtn.bind(this);

    bee.posts.forEach((post) => {
      var postComponent = new PostComponent(this.container, post);
    });
  }

  onNewPostBtn() {
    AppManager.getInstance().uiManager.showPostForm();
    console.log("Hola");
  }
}
