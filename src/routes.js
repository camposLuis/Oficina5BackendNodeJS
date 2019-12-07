import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import PostController from './app/controllers/PostController';
import PostUserController from './app/controllers/PostUserController';
import PostFindController from './app/controllers/PostFindController';
import PostCommentsController from './app/controllers/PostCommentsController';
import AlbumUserController from './app/controllers/AlbumUserController';

import authMiddleware from './app/middleware/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/posts', PostController.index);
routes.get('/posts/:id', PostFindController.index);
routes.post('/posts', PostUserController.store);
routes.put('/posts/:id', PostUserController.update);
routes.delete('/posts/:id', PostUserController.delete);

routes.get('/posts/:id/comments', PostCommentsController.index);

routes.get('/users/:id/albums', AlbumUserController.index);

export default routes;
