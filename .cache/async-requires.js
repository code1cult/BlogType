// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-page-js": () => import("/home/ilovetraffic/BlogType/src/pages/page.js" /* webpackChunkName: "component---src-pages-page-js" */),
  "component---cache-dev-404-page-js": () => import("/home/ilovetraffic/BlogType/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("/home/ilovetraffic/BlogType/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import("/home/ilovetraffic/BlogType/.cache/data.json")

