class Post {
  constructor(id, body, title, userId) {
    this.id = id;
    this.body = body;
    this.title = title;
    this.userId = userId;
    this.comments = [];
  }

  addComment(comment) {
    if (comment.postId === this.id) {
      //El unshift sirve para darle vuelta al objeto
      this.comments.unshift(comment);
    }
  }
}
