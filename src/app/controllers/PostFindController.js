// import * as Yup from 'yup';
import Post from '../models/Post';

class PostFindController {
  async index(req, res) {
    const post = await Post.findByPk(req.params.id, {
      attributes: ['user_id', 'id', 'title', 'body'],
    });

    return res.json(post);
  }
}

export default new PostFindController();
