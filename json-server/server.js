const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  req.url = `/data?keyword=${req.query.keyword}&page=${req.query.page}`;
  next();
});

server.use(router);

router.render = (req, res) => {
  const params = new URLSearchParams(req.originalUrl.split('?').pop())
  const keyword = params.get('keyword')
  const data = keyword !== null
    ? res.locals.data.filter(v => v.title.includes(keyword) || v.hashtags.includes(keyword))
    : res.locals.data
  const maxPage = Math.ceil(data.length / 10);
  const queryPage = Number(params.get('page'))
  const page = queryPage > maxPage || queryPage < 1 ? 1 : queryPage
  const minIndex = (page - 1) * 10;
  const maxIndex = page * 10;
  const resSlides = data.slice(minIndex, maxIndex);
  res.send({
    page: page,
    maxPage: maxPage,
    slides: resSlides,
  });
};

server.listen(3001, () => {});
