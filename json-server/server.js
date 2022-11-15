const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
  req.url = `/data?page=${req.query.page}`;
  next();
});

server.use(router);

router.render = (req, res) => {
  const maxPage = Math.ceil(res.locals.data.length / 10);
  const queryPage = req._parsedUrl.query.match(/page=[0-9]*/);
  var page = queryPage ? Number(queryPage[0].replace('page=', '')) : 1;
  page = page > maxPage || page < 1 ? 1 : page;
  const minIndex = (page - 1) * 10;
  const maxIndex = page * 10;
  const resSlides = res.locals.data.slice(minIndex, maxIndex);
  res.send({
    page: page,
    maxPage: maxPage,
    slides: resSlides,
  });
};

server.listen(3001, () => {});
