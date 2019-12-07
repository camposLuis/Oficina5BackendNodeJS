// import * as Yup from 'yup';
import Post from '../models/Post';

class PostController {
  async index(req, res) {
    const posts = await Post.findAll({
      order: ['id'],
      attributes: ['user_id', 'id', 'title', 'body'],
    });

    return res.json(posts);
  }
}

export default new PostController();
