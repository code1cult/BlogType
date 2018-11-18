// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-page-js": preferDefault(require("/home/ilovetraffic/BlogType/src/pages/page.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/home/ilovetraffic/BlogType/.cache/dev-404-page.js")),
  "component---src-pages-index-js": preferDefault(require("/home/ilovetraffic/BlogType/src/pages/index.js"))
}

