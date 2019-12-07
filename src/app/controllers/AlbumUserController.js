import Album from '../models/Album';

class AlbumUserController {
  async index(req, res) {
    const albums = await Album.findAll({
      where: { user_id: req.params.id },
      order: ['id'],
      attributes: ['user_id', 'id', 'title'],
    });

    return res.json(albums);
  }
}

export default new AlbumUserController();
