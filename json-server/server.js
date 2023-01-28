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
      req.url = `/event/${req.query.id}?page=${req.query.page}`;
      break;
    default:
      break;
  }
  next();
});

server.use(router);

router.render = (req, res) => {
  const pathname = req._parsedOriginalUrl.pathname;
  const rawRes = res.locals.data;
  const params = new URLSearchParams(req.originalUrl.split('?').pop());

  const pagingSlides = (slides, maxPage, queryPage) => {
    const page = queryPage > maxPage || queryPage < 1 ? 1 : queryPage;
    const minIndex = (page - 1) * 10;
    const maxIndex = page * 10;
    const slidesInThisPage = slides.slice(minIndex, maxIndex);
    return {
      page: page,
      slides: slidesInThisPage,
    };
  };

  if (pathname === '/slides') {
    const keyword = params.get('keyword');
    const data =
      keyword !== null
        ? rawRes.filter((v) => v.title.includes(keyword) || v.hashtags.includes(keyword))
        : rawRes;
    const maxPage = Math.ceil(data.length / 10);
    const queryPage = Number(params.get('page'));
    const { page, slides } = pagingSlides(data, maxPage, queryPage);
    res.send({
      page: page,
      maxPage: maxPage,
      slides: slides,
    });
  } else if (pathname === '/events') {
    res.send({
      events: res.locals.data,
    });
  } else if (pathname === '/event') {
    const maxPage = Math.ceil(rawRes.slides.length / 10);
    const queryPage = Number(params.get('page'));
    const { page, slides } = pagingSlides(rawRes.slides, maxPage, queryPage);
    res.send({
      event: rawRes.event,
      slides: slides,
      page: page,
      maxPage: maxPage,
    });
  } else {
    res.send({
      data: res.locals.data,
    });
  }
};

server.listen(3001, () => {});
