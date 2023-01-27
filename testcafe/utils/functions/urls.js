const urls = {
  top: `${process.env.SITE_URL}/`,
  slides: `${process.env.SITE_URL}/slides`,
  events: `${process.env.SITE_URL}/events`,
  eventSlides: (hashtag) => `${process.env.SITE_URL}/events/${hashtag}`,
  tos: `${process.env.SITE_URL}/tos`,
  pp: `${process.env.SITE_URL}/pp`,
};

export default urls;
