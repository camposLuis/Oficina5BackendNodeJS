import Comment from '../models/Comment';

class PostCommentsController {
  async index(req, res) {
    const comments = await Comment.findAll({
      where: { post_id: req.params.id },
      order: ['id'],
      attributes: ['post_id', 'id', 'name', 'email', 'body'],
    });

    return res.json(comments);
  }
}

export default new PostCommentsController();
