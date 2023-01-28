const urls = {
  top: `${process.env.SITE_URL}/`,
  slides: `${process.env.SITE_URL}/slides`,
  events: `${process.env.SITE_URL}/events`,
  eventSlides: (id) => `${process.env.SITE_URL}/events/${id}`,
  tos: `${process.env.SITE_URL}/tos`,
  pp: `${process.env.SITE_URL}/pp`,
};

export default urls;
