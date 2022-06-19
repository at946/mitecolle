module.exports = {
  browsers: "chrome:headless --no-sandbox",
  screenshots: {
    takeOnFails: true,
    fullPage: true,
    thumbnails: false,
  },
  concurrency: 3,
  stopOnFirstFail: true,
}
