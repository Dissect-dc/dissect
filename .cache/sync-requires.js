const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/alex/Repositories/dissect/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/alex/Repositories/dissect/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/alex/Repositories/dissect/src/pages/index.js"))),
  "component---src-pages-members-js": hot(preferDefault(require("/home/alex/Repositories/dissect/src/pages/members.js"))),
  "component---src-templates-build-template-js": hot(preferDefault(require("/home/alex/Repositories/dissect/src/templates/buildTemplate.js")))
}

