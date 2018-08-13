import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  const subRouter = router.namespace('/api');
  subRouter.get('/', controller.home.index);
};
