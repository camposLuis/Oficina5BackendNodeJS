import * as Yup from 'yup';
import Post from '../models/Post';

class PostUserController {
  /* async index(req, res) {
    console.log('entrou');
    const posts = await Post.findAll({
      order: ['id'],
      attributes: ['user_id', 'id', 'title', 'body'],
    });

    console.log(posts);

    return res.json(posts);
  } */

  async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      body: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    try {
      const { user_id, id, title, body } = await Post.create({
        user_id: req.userId,
        title: req.body.title,
        body: req.body.body,
      });

      return res.json({
        user_id,
        id,
        title,
        body,
      });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      body: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(401).json({ error: 'Post already exists' });
    }

    if (post.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Unable to edit a post that is not yours' });
    }

    try {
      const { user_id, id, title, body } = await post.update({
        title: req.body.title,
        body: req.body.body,
      });

      return res.json({
        user_id,
        id,
        title,
        body,
      });
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }

  async delete(req, res) {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(401).json({ error: 'Post already exists' });
    }

    if (post.user_id !== req.userId) {
      return res
        .status(401)
        .json({ error: 'Unable to delete a post other than yours' });
    }

    try {
      await post.destroy();

      return res.json();
    } catch (err) {
      return res.status(400).json({ error: err });
    }
  }
}

export default new PostUserController();
