const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  switch (req._parsedUrl.pathname) {
    case '/slides':
      req.url = `/slides?keyword=${req.query.keyword}&page=${req.query.page}`;
      break;
    case '/event':
      req.url = `/event/${req.query.id}`;
      break;
    default:
      break;
  }
  next();
});

server.use(router);

router.render = (req, res) => {
  const rawRes = res.locals.data;

  switch (req._parsedUrl.pathname) {
    case '/slides':
      const params = new URLSearchParams(req.originalUrl.split('?').pop());
      const keyword = params.get('keyword');
      const data =
        keyword !== null
          ? rawRes.filter((v) => v.title.includes(keyword) || v.hashtags.includes(keyword))
          : rawRes;
      const maxPage = Math.ceil(data.length / 10);
      const queryPage = Number(params.get('page'));
      const page = queryPage > maxPage || queryPage < 1 ? 1 : queryPage;
      const minIndex = (page - 1) * 10;
      const maxIndex = page * 10;
      const resSlides = data.slice(minIndex, maxIndex);
      res.send({
        page: page,
        maxPage: maxPage,
        slides: resSlides,
      });
      break;
    case '/events':
      res.send({
        events: res.locals.data,
      });
      break;
    case '/event':
      res.send({
        event: rawRes.event,
        slides: rawRes.slides,
      });
      break;
    default:
      res.send({
        data: res.locals.data,
      });
  }
};

server.listen(3001, () => {});
