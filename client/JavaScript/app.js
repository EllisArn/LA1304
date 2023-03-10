const routes = {
  home: { hash: '#home', function: renderHome },
}

const router = new Router(routes)
router.urlResolve()
